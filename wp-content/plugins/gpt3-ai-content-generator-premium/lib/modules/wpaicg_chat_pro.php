<?php
namespace WPAICG;
if ( ! defined( 'ABSPATH' ) ) exit;
if(!class_exists('\\WPAICG\\WPAICG_Chat_Pro')) {
    class WPAICG_Chat_Pro
    {
        private static  $instance = null ;

        public static function get_instance()
        {
            if ( is_null( self::$instance ) ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function activated($settings)
        {
            return isset($settings['moderation']) ? $settings['moderation'] : false;
        }

        public function model($settings)
        {
            return isset($settings['moderation_model']) ? $settings['moderation_model'] : 'text-moderation-latest';
        }

        public function notice($settings)
        {
            return isset($settings['moderation_notice']) ? $settings['moderation_notice'] : esc_html__('Your message has been flagged as potentially harmful or inappropriate. Please ensure that your messages are respectful and do not contain language or content that could be offensive or harmful to others. Thank you for your cooperation.','gpt3-ai-content-generator');
        }

        public function moderation($open_ai,$message, $model, $notice, $wpaicg_save_logs,$wpaicg_chat_log_id,$wpaicg_chat_log_data)
        {
            global $wpdb;
            $moderation_reponse = $open_ai->moderation(array(
                'model' => $model,
                'input' => $message
            ));
            $moderation_reponse = json_decode($moderation_reponse,true);
            if(isset($moderation_reponse['error'])){
                $wpaicg_result['msg'] = $moderation_reponse['error']['message'];
                if(empty($wpaicg_result['msg']) && isset($moderation_reponse['error']['code']) && $moderation_reponse['error']['code'] == 'invalid_api_key'){
                    $wpaicg_result['msg'] = 'Incorrect API key provided. You can find your API key at https://platform.openai.com/account/api-keys.';
                }
                $wpaicg_result['status'] = 'error';
                wp_send_json($wpaicg_result);
                exit;
            }
            elseif(isset($moderation_reponse['results']) && is_array($moderation_reponse['results'])){
                $result = $moderation_reponse['results'][0];
                if(isset($result['flagged']) && $result['flagged']){
                    $wpaicg_moderation_flag = 'hate';
                    foreach($result['categories'] as $key => $category){
                        if($category){
                            $wpaicg_moderation_flag = $key;
                            break;
                        }
                    }
                    $wpaicg_result['msg'] = $notice;
                    $wpaicg_result['status'] = 'error';
                    /*Set Flag if log enabled*/
                    if($wpaicg_save_logs && $wpaicg_chat_log_id){
                        $wpaicg_chat_log_data[count($wpaicg_chat_log_data)-1]['flag'] = $wpaicg_moderation_flag;
                        $wpdb->update($wpdb->prefix.'wpaicg_chatlogs', array(
                            'data' => json_encode($wpaicg_chat_log_data),
                            'created_at' => time()
                        ), array(
                            'id' => $wpaicg_chat_log_id
                        ));
                    }
                    wp_send_json($wpaicg_result);
                    exit;
                }
            }
        }
    }

    WPAICG_Chat_Pro::get_instance();
}
