<?php
namespace WPAICG;
if ( ! defined( 'ABSPATH' ) ) exit;
if(!class_exists('\\WPAICG\\WPAICG_Help')) {
    class WPAICG_Help
    {
        private static  $instance = null ;

        public static function get_instance()
        {
            if ( is_null( self::$instance ) ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function __construct()
        {
            add_action('wp_ajax_wpaicg_help_chatgpt',array($this,'wpaicg_help_chatgpt'));
            add_action('wp_ajax_wpaicg_help_article',array($this,'wpaicg_help_article'));
            add_action('wp_ajax_wpaicg_help_autogpt',array($this,'wpaicg_help_autogpt'));
            add_action('wp_ajax_wpaicg_help_woocommerce',array($this,'wpaicg_help_woocommerce'));
            add_action('wp_ajax_wpaicg_help_aiform',array($this,'wpaicg_help_image'));
            add_action('wp_ajax_wpaicg_help_compare',array($this,'wpaicg_help_image'));
            add_action('wp_ajax_wpaicg_help_image',array($this,'wpaicg_help_image'));
            add_action('wp_ajax_wpaicg_help_audio',array($this,'wpaicg_help_audio'));
            add_action('wp_ajax_wpaicg_help_audio',array($this,'wpaicg_help_audio'));
            add_action('wp_ajax_wpaicg_help_assistant',array($this,'wpaicg_help_assistant'));
            add_action( 'admin_menu', array( $this, 'wpaicg_menu' ) );
        }

        public function wpaicg_menu()
        {
            add_submenu_page(
                'wpaicg',
                esc_html__('Help', 'gpt3-ai-content-generator'),
                esc_html__('Help', 'gpt3-ai-content-generator'),
                'read',
                'wpaicg_help',
                array($this, 'wpaicg_help_page'),
                100
            );
        }

        public function wpaicg_help_page()
        {
            include WPAICG_PLUGIN_DIR.'admin/views/help/index.php';
        }

        public function wpaicg_help_assistant()
        {
            $wpaicg_result = array('status' => 'error','msg' => __('Missing parameters','gpt3-ai-content-generator'));
            if ( ! wp_verify_nonce( $_POST['_wpnonce'], 'wpaicg-ajax-action' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            if(isset($_REQUEST['openai_key']) && !empty($_REQUEST['openai_key'])) {
                $openai_key = sanitize_text_field($_REQUEST['openai_key']);
                $this->update_key($openai_key);
                $assistants = isset($_REQUEST['assistants']) ? wpaicg_util_core()->sanitize_text_or_array_field($_REQUEST['assistants']) : array();
                $menu = array();
                if($assistants && is_array($assistants) && count($assistants)) {
                    foreach ($assistants as $assistant) {
                        if (isset($assistant['name']) && !empty($assistant['name']) && isset($assistant['prompt']) && !empty($assistant['prompt'])) {
                            $menu[] = $assistant;
                        }
                    }
                }
                update_option('wpaicg_editor_button_menus', $menu);
                $wpaicg_result['status'] = 'success';
            }
            wp_send_json($wpaicg_result);
        }

        public function wpaicg_help_audio()
        {
            $wpaicg_result = array('status' => 'error','msg' => __('Missing parameters','gpt3-ai-content-generator'));
            if ( ! wp_verify_nonce( $_POST['_wpnonce'], 'wpaicg-ajax-action' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            if(isset($_REQUEST['openai_key']) && !empty($_REQUEST['openai_key'])) {
                $openai_key = sanitize_text_field($_REQUEST['openai_key']);
                $this->update_key($openai_key);
                $purpose = isset($_REQUEST['purpose']) && !empty($_REQUEST['purpose']) ? sanitize_text_field($_REQUEST['purpose']) : 'transcriptions';
                $response = isset($_REQUEST['response']) && !empty($_REQUEST['response']) ? sanitize_text_field($_REQUEST['response']) : 'post';
                $wpaicg_audio_settings = array(
                    'purpose' => $purpose,
                    'response' => $response
                );
                update_option('wpaicg_audio_setting', $wpaicg_audio_settings);
                $wpaicg_result['status'] = 'success';
            }
            wp_send_json($wpaicg_result);
        }

        public function wpaicg_help_image()
        {
            $wpaicg_result = array('status' => 'error','msg' => __('Missing parameters','gpt3-ai-content-generator'));
            if ( ! wp_verify_nonce( $_POST['_wpnonce'], 'wpaicg-ajax-action' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            if(isset($_REQUEST['openai_key']) && !empty($_REQUEST['openai_key'])) {
                $openai_key = sanitize_text_field($_REQUEST['openai_key']);
                $this->update_key($openai_key);
                $wpaicg_result['status'] = 'success';
            }
            wp_send_json($wpaicg_result);
        }

        public function wpaicg_help_woocommerce()
        {
            global $wpdb;
            $wpaicg_result = array('status' => 'error','msg' => __('Missing parameters','gpt3-ai-content-generator'));
            if ( ! wp_verify_nonce( $_POST['_wpnonce'], 'wpaicg-ajax-action' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            if(isset($_REQUEST['openai_key']) && !empty($_REQUEST['openai_key'])) {
                $openai_key = sanitize_text_field($_REQUEST['openai_key']);
                $this->update_key($openai_key);
                $woocommerce = wpaicg_util_core()->sanitize_text_or_array_field($_REQUEST['woocommerce']);
                $args  =array(
                    'wpaicg_woo_meta_description',
                    'wpaicg_woo_custom_prompt',
                    'wpaicg_woo_custom_prompt_title',
                    'wpaicg_woo_custom_prompt_short',
                    'wpaicg_woo_custom_prompt_description',
                    'wpaicg_woo_custom_prompt_keywords',
                    'wpaicg_woo_custom_prompt_meta',
                    'wpaicg_woo_generate_title',
                    'wpaicg_woo_generate_description',
                    'wpaicg_woo_generate_short',
                    'wpaicg_woo_generate_tags'
                );
                if(!isset($woocommerce['wpaicg_woo_custom_prompt']) || $woocommerce['wpaicg_woo_custom_prompt'] != 1){
                    $woocommerce['wpaicg_woo_custom_prompt_title'] = '';
                    $woocommerce['wpaicg_woo_custom_prompt_short'] = '';
                    $woocommerce['wpaicg_woo_custom_prompt_description'] = '';
                    $woocommerce['wpaicg_woo_custom_prompt_keywords'] = '';
                    $woocommerce['wpaicg_woo_custom_prompt_meta'] = '';
                }
                foreach ($args as $arg){
                    if(isset($woocommerce[$arg]) && !empty($woocommerce[$arg])){
                        update_option($arg,$woocommerce[$arg]);
                    }
                    else{
                        delete_option($arg);
                    }
                }
                $wpaicg_result['status'] = 'success';
            }
            wp_send_json($wpaicg_result);
        }

        public function wpaicg_help_article()
        {
            global $wpdb;
            $wpaicg_result = array('status' => 'error','msg' => __('Missing parameters','gpt3-ai-content-generator'));
            if ( ! wp_verify_nonce( $_POST['_wpnonce'], 'wpaicg-ajax-action' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            if(isset($_REQUEST['openai_key']) && !empty($_REQUEST['openai_key'])) {
                $openai_key = sanitize_text_field($_REQUEST['openai_key']);
                $this->update_key($openai_key);
                $article = wpaicg_util_core()->sanitize_text_or_array_field($_REQUEST['article']);
                $data = array();
                if(isset($article['language']) && !empty($article['language'])){
                    $data['wpai_language'] = $article['language'];
                }
                if(isset($article['tone']) && !empty($article['tone'])){
                    $data['wpai_writing_tone'] = $article['tone'];
                }
                if(isset($article['style']) && !empty($article['style'])){
                    $data['wpai_writing_style'] = $article['style'];
                }
                if(isset($article['heading']) && !empty($article['heading'])){
                    $data['wpai_number_of_heading'] = $article['heading'];
                }
                if(count($data)) {
                    $wpdb->update($wpdb->prefix . 'wpaicg', $data, array('name' => 'wpaicg_settings'));
                }
                $wpaicg_result['status'] = 'success';
            }
            wp_send_json($wpaicg_result);
        }

        public function wpaicg_help_autogpt()
        {
            global $wpdb;
            $wpaicg_result = array('status' => 'error','msg' => __('Missing parameters','gpt3-ai-content-generator'));
            if ( ! wp_verify_nonce( $_POST['_wpnonce'], 'wpaicg-ajax-action' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            if(isset($_REQUEST['openai_key']) && !empty($_REQUEST['openai_key'])) {
                $openai_key = sanitize_text_field($_REQUEST['openai_key']);
                $this->update_key($openai_key);
                $article = wpaicg_util_core()->sanitize_text_or_array_field($_REQUEST['autogpt']);
                $data = array();
                if(isset($article['language']) && !empty($article['language'])){
                    $data['wpai_language'] = $article['language'];
                }
                if(isset($article['tone']) && !empty($article['tone'])){
                    $data['wpai_writing_tone'] = $article['tone'];
                }
                if(isset($article['style']) && !empty($article['style'])){
                    $data['wpai_writing_style'] = $article['style'];
                }
                if(isset($article['heading']) && !empty($article['heading'])){
                    $data['wpai_number_of_heading'] = $article['heading'];
                }
                if(count($data)) {
                    $wpdb->update($wpdb->prefix . 'wpaicg', $data, array('name' => 'wpaicg_settings'));
                }
                if(isset($article['restart']) && !empty($article['restart'])){
                    update_option('wpaicg_restart_queue',$article['restart']);
                }
                else{
                    delete_option('wpaicg_restart_queue');
                }
                if(isset($article['try']) && !empty($article['try'])){
                    update_option('wpaicg_try_queue',$article['try']);
                }
                else{
                    delete_option('wpaicg_try_queue');
                }
                $wpaicg_result['status'] = 'success';
            }
            wp_send_json($wpaicg_result);
        }

        public function update_key($key)
        {
            global $wpdb;
            $wpdb->query($wpdb->prepare("UPDATE ".$wpdb->prefix."wpaicg SET api_key=%s",$key));
        }

        public function wpaicg_help_chatgpt()
        {
            $wpaicg_result = array('status' => 'error','msg' => __('Missing parameters','gpt3-ai-content-generator'));
            if ( ! wp_verify_nonce( $_POST['_wpnonce'], 'wpaicg-ajax-action' ) ) {
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            if(isset($_REQUEST['openai_key']) && !empty($_REQUEST['openai_key'])) {
                $openai_key = sanitize_text_field($_REQUEST['openai_key']);
                $this->update_key($openai_key);
                $chatgpt = wpaicg_util_core()->sanitize_text_or_array_field($_REQUEST['chatgpt']);
                $type = isset($chatgpt['type']) && $chatgpt['type'] == 'widget' ? 'widget' : 'shortcode';
                $language = isset($chatgpt['language']) && !empty($chatgpt['language']) ? $chatgpt['language'] : 'en';
                $position = isset($chatgpt['position']) && !empty($chatgpt['position']) ? $chatgpt['position'] : 'left';
                $addition = isset($chatgpt['chat_addition_text']) && !empty($chatgpt['chat_addition_text']) ? $chatgpt['chat_addition_text'] : '';
                $widget_type = isset($chatgpt['widget']) && $chatgpt['widget'] == 'page' && isset($chatgpt['pages']) && !empty($chatgpt['pages']) ? 'page' : 'whole';
                $chat_addition = false;
                if(!empty($addition)){
                    $chatgpt['chat_addition'] = '1';
                    $chat_addition = true;
                }
                $wpaicg_chatbot_id = false;
                $wpaicg_result['type'] = $type;
                $chatgpt['name'] = 'My Bot Name';
                $chatgpt['temperature'] = '0.7';
                $chatgpt['max_tokens'] = 700;
                $chatgpt['top_p'] = 1;
                $chatgpt['best_of'] = 1;
                $chatgpt['ai_avatar'] = '';
                $chatgpt['frequency_penalty'] = 0.01;
                $chatgpt['presence_penalty'] = 0.01;
                $chatgpt['model'] = 'gpt-3.5-turbo';
                $chatgpt['content_aware'] = 'yes';
                $chatgpt['bgcolor'] = '#222';
                if($type == 'shortcode'){
                    $wpaicg_chatbot_id = wp_insert_post(array(
                        'post_title' => 'My Bot Name',
                        'post_content' => json_encode($chatgpt, JSON_UNESCAPED_UNICODE),
                        'post_type' => 'wpaicg_chatbot',
                        'post_status' => 'publish'
                    ));
                    $wpaicg_result['status'] = 'success';
                }
                else{
                    if($widget_type == 'whole'){
                        $wpaicg_chat_widget = array(
                            'position' => $position,
                            'status' => 'active',
                            'bgcolor' => '#222',
                            'content_aware' => 'yes'
                        );
                        update_option('wpaicg_chat_language', $language);
                        update_option('wpaicg_chat_widget', $wpaicg_chat_widget);
                        update_option('wpaicg_chat_model', 'gpt-3.5-turbo');
                        update_option('wpaicg_chat_temperature', '0.7');
                        update_option('wpaicg_chat_max_tokens', 700);
                        update_option('wpaicg_chat_embedding', '');
                        update_option('wpaicg_chat_frequency_penalty', 0.01);
                        update_option('wpaicg_chat_presence_penalty', 0.01);
                        update_option('wpaicg_chat_presence_penalty', 0.01);
                        update_option('wpaicg_chat_best_of', 1);
                        update_option('wpaicg_chat_top_p', 1);
                        if($chat_addition){
                            update_option('wpaicg_chat_addition', 1);
                            update_option('wpaicg_chat_addition_text', $addition);
                        }
                    }
                    else{
                        $wpaicg_chatbot_id = wp_insert_post(array(
                            'post_title' => 'My Bot Name',
                            'post_content' => json_encode($chatgpt, JSON_UNESCAPED_UNICODE),
                            'post_type' => 'wpaicg_chatbot',
                            'post_status' => 'publish'
                        ));
                        $pages = array_map('trim', explode(',', $chatgpt['pages']));
                        foreach($pages as $page){
                            add_post_meta($wpaicg_chatbot_id,'wpaicg_widget_page_'.$page,'yes');
                        }
                    }
                    $wpaicg_result['status'] = 'success';
                }
                if($wpaicg_chatbot_id){
                    $chatgpt['name'] = 'My Bot #'.$wpaicg_chatbot_id;
                    wp_update_post(array(
                        'ID' => $wpaicg_chatbot_id,
                        'post_title' => 'My Bot #'.$wpaicg_chatbot_id,
                        'post_content' => json_encode($chatgpt, JSON_UNESCAPED_UNICODE)
                    ));
                }
                $wpaicg_result['id'] = $wpaicg_chatbot_id;
            }
            wp_send_json($wpaicg_result);
        }
    }
    WPAICG_Help::get_instance();
}
