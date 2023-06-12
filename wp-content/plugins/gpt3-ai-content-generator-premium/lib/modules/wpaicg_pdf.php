<?php
namespace WPAICG;
if ( ! defined( 'ABSPATH' ) ) exit;
if(!class_exists('\\WPAICG\\WPAICG_PDF')) {
    class WPAICG_PDF
    {
        private static $instance = null;

        public static function get_instance()
        {
            if (is_null(self::$instance)) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function __construct()
        {
            add_action('wp_ajax_wpaicg_pdf_embedding',[$this,'wpaicg_pdf_embedding']);
            add_action('wp_ajax_wpaicg_admin_pdf',[$this,'wpaicg_admin_pdf']);
            add_action('wp_ajax_nopriv_wpaicg_pdf_embedding',[$this,'wpaicg_pdf_embedding']);
            add_action('wp_ajax_wpaicg_example_questions',[$this,'wpaicg_example_questions']);
            add_action('wp_ajax_nopriv_wpaicg_example_questions',[$this,'wpaicg_example_questions']);
            add_action( 'admin_enqueue_scripts', [$this,'wpaicg_enqueue_scripts'],1);
            add_action( 'wp_enqueue_scripts', [$this,'wpaicg_enqueue_scripts'],1);
            add_action('wp_ajax_wpaicg_pdfs_delete',[$this,'wpaicg_pdfs_delete']);
        }

        public function wpaicg_admin_pdf()
        {
            $wpaicg_result = array('status' => 'error');
            if ( ! wp_verify_nonce( $_POST['nonce'], 'wpaicg-ajax-action' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            $content = sanitize_text_field($_REQUEST['content']);
            $page = sanitize_text_field($_REQUEST['page']);
            $filename = sanitize_text_field($_REQUEST['filename']);
            $openai = WPAICG_OpenAI::get_instance()->openai();
            if($openai){
                $wpaicg_pinecone_api = get_option('wpaicg_pinecone_api','');
                $wpaicg_pinecone_environment = get_option('wpaicg_pinecone_environment','');
                if(empty($wpaicg_pinecone_api) || empty($wpaicg_pinecone_environment)){
                    $wpaicg_result['msg'] = esc_html__('Missing Pinecone API Settings','gpt3-ai-content-generator');
                }
                else{
                    $response = $openai->embeddings(array(
                        'input' => $content,
                        'model' => 'text-embedding-ada-002'
                    ));
                    $response = json_decode($response,true);
                    if(isset($response['error']) && !empty($response['error'])) {
                        $wpaicg_result['msg'] = $response['error']['message'];
                        if(empty($wpaicg_result['msg']) && isset($response['error']['code']) && $response['error']['code'] == 'invalid_api_key'){
                            $wpaicg_result['msg'] = 'Incorrect API key provided. You can find your API key at https://platform.openai.com/account/api-keys.';
                        }
                    }
                    else{
                        $embedding = $response['data'][0]['embedding'];
                        if(empty($embedding)){
                            $wpaicg_result['msg'] = esc_html__('No data returned','gpt3-ai-content-generator');
                        }
                        else{
                            $pinecone_url = 'https://' . $wpaicg_pinecone_environment . '/vectors/upsert';
                            $headers = array(
                                'Content-Type' => 'application/json',
                                'Api-Key' => $wpaicg_pinecone_api
                            );
                            $embedding_data = array(
                                'post_type' => 'wpaicg_pdfadmin',
                                'post_title' => $filename.' - Page: '.$page,
                                'post_content' => $content,
                                'post_excerpt' => $wpaicg_pinecone_environment,
                                'post_status' => 'publish'
                            );
                            $embeddings_id = wp_insert_post($embedding_data,true);
                            if(is_wp_error($embeddings_id)){
                                $wpaicg_result['msg'] = $embeddings_id->get_error_message();
                            }
                            else{
                                update_post_meta($embeddings_id,'wpaicg_start',time());
                                $usage_tokens = $response['usage']['total_tokens'];
                                add_post_meta($embeddings_id, 'wpaicg_embedding_token', $usage_tokens);
                                $vectors = array(
                                    array(
                                        'id' => (string)$embeddings_id,
                                        'values' => $embedding
                                    )
                                );
                                $response = wp_remote_post($pinecone_url, array(
                                    'headers' => $headers,
                                    'body' => json_encode(array('vectors' => $vectors))
                                ));
                                if(is_wp_error($response)){
                                    $wpaicg_result['msg'] = $response->get_error_message();
                                    wp_delete_post($embeddings_id);
                                }
                                else{
                                    update_post_meta($embeddings_id,'wpaicg_complete',time());
                                    $wpaicg_result['status'] = 'success';
                                }
                            }
                        }
                    }
                }
            }
            else{
                $wpaicg_result['msg'] = esc_html__('Missing OpenAI API Settings','gpt3-ai-content-generator');
            }
            wp_send_json($wpaicg_result);
        }

        public function wpaicg_pdfs_delete()
        {
            $wpaicg_result = array('status' => 'error');
            if ( ! wp_verify_nonce( $_POST['nonce'], 'wpaicg-ajax-nonce' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            $type = 'wpaicg_pdfembed';
            if(isset($_REQUEST['type']) && !empty($_REQUEST['type'])){
                $type = sanitize_text_field($_REQUEST['type']);
            }
            $ids = wpaicg_util_core()->sanitize_text_or_array_field($_REQUEST['ids']);
            $this->wpaicg_delete_embeddings_ids($ids,$type);
            $wpaicg_result['status'] = 'success';
            wp_send_json($wpaicg_result);
        }

        public function wpaicg_delete_embeddings_ids($ids,$type = 'wpaicg_pdfembed')
        {
            $posts = new \WP_Query(array(
                'post__in' => $ids,
                'posts_per_page' => -1,
                'post_type' => $type
            ));
            if($posts->post_count){
                $wpaicg_pinecone_api = get_option('wpaicg_pinecone_api','');
                $wpaicg_pinecone_environment = get_option('wpaicg_pinecone_environment','');
                foreach($posts->posts as $post){
                    if(!empty($post->post_excerpt)){
                        $wpaicg_pinecone_environment = $post->post_excerpt;
                    }
                    try {
                        $headers = array(
                            'Content-Type' => 'application/json',
                            'Api-Key' => $wpaicg_pinecone_api
                        );
                        $pinecone_ids = 'ids='.$post->ID;
                        $response = wp_remote_request('https://' . $wpaicg_pinecone_environment . '/vectors/delete?'.$pinecone_ids, array(
                            'method' => 'DELETE',
                            'headers' => $headers
                        ));
                    }
                    catch (\Exception $exception){

                    }
                    wp_delete_post($post->ID);
                }
            }
        }
        public function wpaicg_enqueue_scripts()
        {
            wp_enqueue_script('wpaicg-pdf',WPAICG_PLUGIN_URL.'lib/js/pdf.js',array(),null,true);
            wp_enqueue_script('wpaicg-pdf-worker',WPAICG_PLUGIN_URL.'lib/js/pdf.worker.js',array(),null,true);
            wp_enqueue_script('wpaicg-chat-pro',WPAICG_PLUGIN_URL.'lib/js/wpaicg-chat-pro.js',array(),null,true);
        }

        public function wpaicg_example_questions()
        {
            $wpaicg_result = array('status' => 'error');
            if ( ! wp_verify_nonce( $_POST['nonce'], 'wpaicg-chatbox' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            $openai = WPAICG_OpenAI::get_instance()->openai();
            if($openai){
                $type = isset($_REQUEST['type']) && !empty($_REQUEST['type']) ? sanitize_text_field($_REQUEST['type']) : 'shortcode';
                $bot_id = isset($_REQUEST['bot_id']) && !empty($_REQUEST['bot_id']) ? sanitize_text_field($_REQUEST['bot_id']) : 0;
                $content = sanitize_text_field($_REQUEST['content']);
                $language = 'en';
                $embedding_pdf_message = "Congrats! Your PDF is uploaded now! You can ask questions about your document.\nExample Questions:[questions]";
                if($type == 'shortcode'){
                    $wpaicg_chat_shortcode_options = get_option('wpaicg_chat_shortcode_options',[]);
                    if(isset($wpaicg_chat_shortcode_options['embedding_pdf_message']) && !empty($wpaicg_chat_shortcode_options['embedding_pdf_message'])){
                        $embedding_pdf_message = $wpaicg_chat_shortcode_options['embedding_pdf_message'];
                    }
                    if(isset($wpaicg_chat_shortcode_options['language']) && !empty($wpaicg_chat_shortcode_options['language'])){
                        $language = $wpaicg_chat_shortcode_options['language'];
                    }
                }
                else{
                    $wpaicg_chat_widget = get_option('wpaicg_chat_widget',[]);
                    $language = get_option('wpaicg_chat_language','en');
                    if(isset($wpaicg_chat_widget['embedding_pdf_message']) && $wpaicg_chat_widget['embedding_pdf_message']){
                        $embedding_pdf_message = $wpaicg_chat_widget['embedding_pdf_message'];
                    }
                }
                if($bot_id){
                    $bot = get_post($bot_id);
                    if(strpos($bot->post_content,'\"') !== false) {
                        $bot->post_content = str_replace('\"', '&quot;', $bot->post_content);
                    }
                    if(strpos($bot->post_content,"\'") !== false) {
                        $bot->post_content = str_replace('\\', '', $bot->post_content);
                    }
                    $bot_config = json_decode($bot->post_content,true);
                    if(isset($bot_config['embedding_pdf_message']) && !empty($bot_config['embedding_pdf_message'])){
                        $embedding_pdf_message = $bot_config['embedding_pdf_message'];
                    }
                    if(isset($bot_config['language']) && !empty($bot_config['language'])){
                        $language = $bot_config['language'];
                    }
                }
                $generator = WPAICG_Generator::get_instance();
                $generator->openai($openai);
                $wpaicg_language_file = WPAICG_PLUGIN_DIR . 'admin/chat/languages/' . $language . '.json';
                if (!file_exists($wpaicg_language_file)) {
                    $wpaicg_language_file = WPAICG_PLUGIN_DIR . 'admin/chat/languages/en.json';
                }
                $wpaicg_language_json = file_get_contents($wpaicg_language_file);
                $wpaicg_languages = json_decode($wpaicg_language_json, true);
                $prompt = "Give me 3 questions about this text: ".$content;
                if(isset($wpaicg_languages['question_prompt']) && !empty($wpaicg_languages['question_prompt'])){
                    $prompt = sprintf($wpaicg_languages['question_prompt'],$content);
                }
                $opts = array(
                    "model" => "gpt-3.5-turbo",
                    "temperature" => 0.5,
                    "max_tokens" => 300,
                    "frequency_penalty" => 0,
                    "presence_penalty" => 0,
                    "top_p" => 1,
                    "prompt" => $prompt
                );
                $result = $generator->wpaicg_request($opts);
                if($result['status'] == 'error'){
                    $wpaicg_result['msg'] = $result['msg'];
                }
                else{
                    $data = $result['data'];
                    $embedding_pdf_message = str_replace('[questions]',"\n".$data,$embedding_pdf_message);
                    $wpaicg_result['status'] = 'success';
                    $wpaicg_result['data'] = $embedding_pdf_message;
                    $wpaicg_result['prompt'] = $prompt;
                }

            }
            else{
                $wpaicg_result['msg'] = esc_html__('Missing OpenAI API Settings','gpt3-ai-content-generator');
            }
            wp_send_json($wpaicg_result);
        }

        public function wpaicg_pdf_embedding()
        {
            $wpaicg_result = array('status' => 'error');
            if ( ! wp_verify_nonce( $_POST['nonce'], 'wpaicg-chatbox' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            $type = isset($_REQUEST['type']) && !empty($_REQUEST['type']) ? sanitize_text_field($_REQUEST['type']) : 'shortcode';
            $bot_id = isset($_REQUEST['bot_id']) && !empty($_REQUEST['bot_id']) ? sanitize_text_field($_REQUEST['bot_id']) : 0;
            $filename = sanitize_text_field($_REQUEST['filename']);
            $page = sanitize_text_field($_REQUEST['page']);
            $content = sanitize_text_field($_REQUEST['content']);
            $namespace = sanitize_text_field($_REQUEST['namespace']);
            $openai = WPAICG_OpenAI::get_instance()->openai();
            $use_embedding = false;
            if($openai){
                $wpaicg_pinecone_api = get_option('wpaicg_pinecone_api','');
                $wpaicg_pinecone_environment = get_option('wpaicg_pinecone_environment','');
                if($type == 'shortcode'){
                    $wpaicg_chat_shortcode_options = get_option('wpaicg_chat_shortcode_options',[]);
                    if(isset($wpaicg_chat_shortcode_options['embedding']) && $wpaicg_chat_shortcode_options['embedding']){
                        $use_embedding = true;
                    }
                    if(isset($wpaicg_chat_shortcode_options['embedding_index']) && !empty($wpaicg_chat_shortcode_options['embedding_index'])){
                        $wpaicg_pinecone_environment = $wpaicg_chat_shortcode_options['embedding_index'];
                    }
                }
                else{
                    $wpaicg_chat_widget = get_option('wpaicg_chat_widget',[]);
                    $wpaicg_chat_embedding = get_option('wpaicg_chat_embedding',false);
                    if($wpaicg_chat_embedding){
                        $use_embedding = true;
                    }
                    if(isset($wpaicg_chat_widget['embedding_index']) && !empty($wpaicg_chat_widget['embedding_index'])){
                        $wpaicg_pinecone_environment = $wpaicg_chat_widget['embedding_index'];
                    }
                }
                if($bot_id){
                    $bot = get_post($bot_id);
                    if(strpos($bot->post_content,'\"') !== false) {
                        $bot->post_content = str_replace('\"', '&quot;', $bot->post_content);
                    }
                    if(strpos($bot->post_content,"\'") !== false) {
                        $bot->post_content = str_replace('\\', '', $bot->post_content);
                    }
                    $bot_config = json_decode($bot->post_content,true);
                    if(isset($bot_config['embedding']) && !empty($bot_config['embedding'])){
                        $use_embedding = true;
                    }
                    else{
                        $use_embedding = false;
                    }
                    if(isset($bot_config['embedding_index']) && !empty($bot_config['embedding_index'])){
                        $wpaicg_pinecone_environment = $bot_config['embedding_index'];
                    }
                }
                if($use_embedding){
                    $response = $openai->embeddings(array(
                        'input' => $content,
                        'model' => 'text-embedding-ada-002'
                    ));
                    $response = json_decode($response,true);
                    if(isset($response['error']) && !empty($response['error'])) {
                        $wpaicg_result['msg'] = $response['error']['message'];
                        if(empty($wpaicg_result['msg']) && isset($response['error']['code']) && $response['error']['code'] == 'invalid_api_key'){
                            $wpaicg_result['msg'] = 'Incorrect API key provided. You can find your API key at https://platform.openai.com/account/api-keys.';
                        }
                    }
                    else{
                        $embedding = $response['data'][0]['embedding'];
                        if(empty($embedding)){
                            $wpaicg_result['msg'] = esc_html__('No data returned','gpt3-ai-content-generator');
                        }
                        else{
                            $pinecone_url = 'https://' . $wpaicg_pinecone_environment . '/vectors/upsert';
                            $headers = array(
                                'Content-Type' => 'application/json',
                                'Api-Key' => $wpaicg_pinecone_api
                            );
                            $embedding_data = array(
                                'post_type' => 'wpaicg_pdfembed',
                                'post_title' => $filename.' - Page: '.$page,
                                'post_content' => $content,
                                'post_excerpt' => $wpaicg_pinecone_environment,
                                'post_status' => 'publish'
                            );
                            $embeddings_id = wp_insert_post($embedding_data);
                            if(is_wp_error($embeddings_id)){
                                $wpaicg_result['msg'] = $embeddings_id->get_error_message();
                            }
                            else{
                                update_post_meta($embeddings_id,'wpaicg_start',time());
                                $usage_tokens = $response['usage']['total_tokens'];
                                add_post_meta($embeddings_id, 'wpaicg_embedding_token', $usage_tokens);
                                $vectors = array(
                                    array(
                                        'id' => (string)$embeddings_id,
                                        'values' => $embedding
                                    )
                                );
                                $response = wp_remote_post($pinecone_url, array(
                                    'headers' => $headers,
                                    'body' => json_encode(array('vectors' => $vectors,'namespace' => $namespace))
                                ));
                                if(is_wp_error($response)){
                                    $wpaicg_result['msg'] = $response->get_error_message();
                                    wp_delete_post($embeddings_id);
                                }
                                else{
                                    $wpaicg_result['status'] = 'success';
                                }
                            }
                        }
                    }
                }
                else{
                    $wpaicg_result['status'] = 'no_embedding';
                }
            }
            else{
                $wpaicg_result['msg'] = esc_html__('Missing OpenAI API Settings','gpt3-ai-content-generator');
            }
            wp_send_json($wpaicg_result);
        }

    }
    WPAICG_PDF::get_instance();
}
