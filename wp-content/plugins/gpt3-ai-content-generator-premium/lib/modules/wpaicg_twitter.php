<?php
namespace WPAICG;
if ( ! defined( 'ABSPATH' ) ) exit;

if(!class_exists('\\WPAICG\\WPAICG_Twitter')) {
    class WPAICG_Twitter
    {
        private static $instance = null;
        protected $consumer_key, $consumer_secret, $access_token, $access_token_secret,$headers;
        protected $apiUrl = 'https://api.twitter.com/';
        protected $apiStandardUrl = 'https://api.twitter.com/1.1/';
        protected $apiUploadUrl = 'https://upload.twitter.com/1.1/';
        protected $oauth = [];

        public static function get_instance()
        {
            if (is_null(self::$instance)) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function __construct()
        {
            add_action('init',[$this,'wpaicg_cron'],1);
            add_action('save_post',[$this,'tweet_publish'],10,2);
        }

        public function tweet_publish($post_id,$post)
        {
            $settings = $this->settings();
            if(
                $settings
                && isset($settings['post_prompt'])
                && !empty($settings['post_prompt'])
                && isset($settings[$post->post_type])
                && $settings[$post->post_type]
                && $post->post_status == 'publish'
            ){
                $tweeted = get_post_meta($post_id,'wpaicg_tweeted',true);
                if($tweeted != 'yes') {
                    update_post_meta($post_id,'wpaicg_tweeted','pending');
                    $track_id = wp_insert_post(array(
                        'post_type' => 'wpaicg_twitter',
                        'post_title' => $post->post_title,
                        'post_status' => 'pending',
                        'post_content' => ' '
                    ),true);
                    if(!is_wp_error($track_id)) {
                        update_post_meta($post_id, 'wpaicg_twitter_track', $track_id);
                    }
                }
            }
        }

        public function generate_tweet($prompt)
        {
            $openai = WPAICG_OpenAI::get_instance()->openai();
            $result = array('status' => 'error','msg' => 'Missing OpenAI API Setting');
            if($openai){
                $generator = WPAICG_Generator::get_instance();
                $generator->openai($openai);
                $result = $generator->wpaicg_request(array(
                    "model" => "gpt-3.5-turbo",
                    "temperature" => 0.5,
                    "max_tokens" => 300,
                    "frequency_penalty" => 0,
                    "presence_penalty" => 0,
                    "top_p" => 1,
                    "prompt" => $prompt
                ));
            }
            return $result;
        }

        public function wpaicg_cron_job()
        {
            global $wpdb;
            $settings = $this->settings();
            $wpaicg_interval_tweet_last_time = get_option('wpaicg_interval_tweet_last_time', 0);
            update_option('wpaicg_cron_tweet_last_time', time());
            update_option('wpaicg_cron_tweet_added', 'yes');
            if (
                $settings
            ) {
                /*Send Tweet for post*/
                $pending = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$wpdb->postmeta} WHERE meta_key=%s AND meta_value=%s", 'wpaicg_tweeted', 'pending'));
                if (
                    $pending
                    && isset($settings['post_prompt'])
                    && !empty($settings['post_prompt'])
                ) {
                    $startTime = time();
                    $include_link = isset($settings['link']) && $settings['link'] ? true : false;
                    $post_id = $pending->post_id;
                    $wpaicg_twitter_track = get_post_meta($post_id,'wpaicg_twitter_track',true);
                    $post_link = get_permalink($post_id);
                    $prompt = str_replace('[post_title]', get_the_title($post_id), $settings['post_prompt']);
                    $character_left = 275;
                    if ($include_link) {
                        $character_left = 275 - strlen($post_link);
                        $prompt = str_replace('[number]', $character_left, $prompt);
                    } else {
                        $prompt = str_replace('[number]', 275, $prompt);
                    }
                    $generator = $this->generate_tweet($prompt);
                    if($generator['status'] == 'success') {
                        $content = $generator['data'];
                        $content = preg_replace('~^"?(.*?)"?$~', '$1', $content);
                        if (strlen($content) > $character_left) {
                            $content = substr($content, 0, $character_left - 3) . '...';
                        }
                        if ($include_link) {
                            $content .= "\n" . $post_link;
                        }
                        if (!empty($content)) {
                            $this->init($settings);
                            $result = $this->create($content, $post_id);
                            $duration = time() - $startTime;
                            $length = $generator['length'];
                            $tokens = $generator['tokens'];
                            if(!empty($wpaicg_twitter_track)){
                                if($result['status'] == 'success') {
                                    wp_update_post(array(
                                        'ID' => $wpaicg_twitter_track,
                                        'post_status' => 'publish',
                                    ));
                                    update_post_meta($wpaicg_twitter_track, 'wpaicg_twitter_duration', $duration);
                                    update_post_meta($wpaicg_twitter_track, 'wpaicg_twitter_length', $length);
                                    update_post_meta($wpaicg_twitter_track, 'wpaicg_twitter_tokens', $tokens);
                                }
                                else{
                                    wp_update_post(array(
                                        'ID' => $wpaicg_twitter_track,
                                        'post_status' => 'draft',
                                        'post_content' => $result['msg']
                                    ));
                                }
                            }
                        }
                    }
                    else{
                        if(!empty($wpaicg_twitter_track)){
                            wp_update_post(array(
                                'ID' => $wpaicg_twitter_track,
                                'post_status' => 'draft',
                                'post_content' => $generator['msg']
                            ));
                        }
                    }
                }
                /*Send Tweet with Interval*/
                if (
                    isset($settings['keywords'])
                    && !empty($settings['keywords'])
                    && isset($settings['writer_prompt'])
                    && !empty($settings['writer_prompt'])
                ) {
                    $interval = isset($settings['interval']) && !empty($settings['interval']) ? $settings['interval'] : 1;
                    $seconds = $interval * 3600;
                    $time_left = time() - $wpaicg_interval_tweet_last_time;
                    if ($time_left >= $seconds) {
                        $startTime = time();
                        update_option('wpaicg_interval_tweet_last_time', time());
                        $this->init($settings);
                        $keywords = array_map('trim', explode(',', $settings['keywords']));
                        $keyword = $keywords[array_rand($keywords)];
                        $prompt = $settings['writer_prompt'];
                        $prompt = str_replace('[keyword]', $keyword, $prompt);
                        $prompt = str_replace('[number]', 280, $prompt);
                        $generator = $this->generate_tweet($prompt);
                        if($generator['status'] == 'success') {
                            $content = $generator['data'];
                            $content = preg_replace('~^"?(.*?)"?$~', '$1', $content);
                            if (!empty($content)) {
                                $this->init($settings);
                                $result = $this->create($content);
                                $duration = time() - $startTime;
                                $length = $generator['length'];
                                $tokens = $generator['tokens'];
                                $track_id = wp_insert_post(array(
                                    'post_type' => 'wpaicg_twitter',
                                    'post_title' => $content,
                                    'post_status' => 'publish',
                                    'post_content' => ' '
                                ),true);
                                if(!is_wp_error($track_id)) {
                                    update_post_meta($track_id, 'wpaicg_twitter_duration', $duration);
                                    update_post_meta($track_id, 'wpaicg_twitter_length', $length);
                                    update_post_meta($track_id, 'wpaicg_twitter_tokens', $tokens);
                                    if($result['status'] != 'success') {
                                        wp_update_post(array(
                                            'ID' => $track_id,
                                            'post_status' => 'draft',
                                            'post_content' => $result['msg']
                                        ));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        public function wpaicg_cron()
        {
            if(isset($_SERVER['argv']) && is_array($_SERVER['argv']) && count($_SERVER['argv'])){
                foreach( $_SERVER['argv'] as $arg ) {
                    $e = explode( '=', $arg );
                    if($e[0] == 'wpaicg_tweet') {
                        if (count($e) == 2)
                            $_GET[$e[0]] = sanitize_text_field($e[1]);
                        else
                            $_GET[$e[0]] = 0;
                    }
                }
            }
            if(isset($_GET['wpaicg_tweet']) && sanitize_text_field($_GET['wpaicg_tweet']) == 'yes') {
                $wpaicg_running = WPAICG_PLUGIN_DIR.'wpaicg_tweet.txt';
                if(!file_exists($wpaicg_running)) {
                    $this->wpaicg_cron_job();
                    @unlink($wpaicg_running);
                }
                exit;
            }
        }

        public function buildHeader($method, $url)
        {
            $oauth = $this->getSignature($method, $url);
            $headers = [];
            $headers['Content-type'] = 'application/json';
            $headers['Authorization'] = $this->buildAutheaders($oauth);
            $this->headers = $headers;
        }

        public function init($settings)
        {
            $this->consumer_key = $settings['consumer_key'];
            $this->consumer_secret = $settings['consumer_secret'];
            $this->access_token = $settings['access_token'];
            $this->access_token_secret = $settings['access_token_secret'];
            $this->oauth = [
                'oauth_consumer_key' => $this->consumer_key,
                'oauth_nonce' => time(),
                'oauth_signature_method' => 'HMAC-SHA1',
                'oauth_token' => $this->access_token,
                'oauth_timestamp' => time(),
                'oauth_version' => '1.0',
            ];
        }

        public function create($content,$post_id = false)
        {
            $url = $this->apiUrl.'2/tweets';
            $this->buildHeader('POST',$url);
            $result = $this->request('POST',$url,array('text' => $content));
            if($result['status'] == 'success'){
                if($post_id) {
                    update_post_meta($post_id, 'wpaicg_tweeted', 'yes');
                    update_post_meta($post_id, 'wpaicg_tweet_data', json_encode($result));
                }
                update_option('wpaicg_cronjob_tweet_content', time());
            }
            return $result;
        }

        public function request($method, $url, $params = false)
        {
            $result = array('status' => 'error');
            $args = array(
                'method' => $method
            );
            try {
                if($this->headers){
                    $args['headers'] = $this->headers;
                }
                if($params){
                    if(strtolower($method) == 'post'){
                        $args['body'] = json_encode($params);
                    }
                    else{
                        $url .= '?'.http_build_query($params);
                    }
                }
                $response = wp_remote_request($url, $args);
                if (is_wp_error($response)) {
                    $result['msg'] = $response->get_error_message();
                }
                else{
                    $body = wp_remote_retrieve_body($response);
                    $return = json_decode($body,true);
                    if($return && is_array($return)){
                        if(isset($return['status']) && $return['status'] != 200){
                            $result['msg'] = $return['detail'];
                        }
                        elseif(isset($return['errors'])){
                            $result['msg'] = $return['detail'];
                        }
                        elseif(isset($return['detail'])){
                            $result['msg'] = $return['detail'];
                        }
                        elseif(isset($return['data']) && is_array($return['data'])){
                            $result['data'] = $return;
                            $result['status'] = 'success';
                        }
                        else{
                            $result['msg'] = 'An error occurred';
                        }
                    }
                    else{
                        $result['msg'] = 'Nothing return';
                    }
                }
            }
            catch (\Exception $exception){
                $result['msg'] = $exception->getMessage();
            }
            return $result;
        }

        protected function buildAutheaders($oauth)
        {
            $headers = 'OAuth ';
            $values = [];
            foreach ($oauth as $key => $value) {
                $values[] = "$key=\"" . rawurlencode($value) . "\"";
            }

            $headers .= implode(', ', $values);
            return $headers;
        }

        protected function getSignature($method, $url, $params = false)
        {
            $oauth = $this->oauth;

            if ($params == false) {
                $baseInfo = $this->buildString($method, $url, $oauth);
                $oauth['oauth_signature'] = $this->buildSignature($baseInfo);
            } else {
                $oauth = array_merge($oauth, $params);
                $baseInfo = $this->buildString($method, $url, $oauth);
                $oauth['oauth_signature'] = $this->buildSignature($baseInfo);
            }
            return $oauth;
        }

        protected function buildSignature($baseInfo)
        {
            $encodeKey = rawurlencode($this->consumer_secret) . '&' . rawurlencode($this->access_token_secret);
            $oauthSignature = base64_encode(hash_hmac('sha1', $baseInfo, $encodeKey, true));
            return $oauthSignature;
        }

        protected function buildString($method, $url, $params)
        {
            $headers = [];
            ksort($params);
            foreach ($params as $key => $value) {
                $headers[] = "$key=" . rawurlencode($value);
            }
            return $method . "&" . rawurlencode($url) . '&' . rawurlencode(implode('&', $headers));
        }

        public function settings()
        {
            $settings = get_option('wpaicg_tweet_settings');
            if(isset($settings['access_token'])
                && !empty($settings['access_token'])
                && isset($settings['access_token_secret'])
                && !empty($settings['access_token_secret'])
                && isset($settings['consumer_key'])
                && !empty($settings['consumer_key'])
                && isset($settings['consumer_secret'])
                && !empty($settings['consumer_secret'])
            ){
                return $settings;
            }
            else return false;
        }
    }
    WPAICG_Twitter::get_instance();
}
