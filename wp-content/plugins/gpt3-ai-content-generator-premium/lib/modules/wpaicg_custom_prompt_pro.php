<?php
namespace WPAICG;
if ( ! defined( 'ABSPATH' ) ) exit;

if ( !class_exists( '\\WPAICG\\WPAICG_Custom_Prompt_Pro' ) ) {
    class WPAICG_Custom_Prompt_Pro
    {
        private static  $instance = null ;

        public static function get_instance()
        {
            if ( is_null( self::$instance ) ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function request($wpaicg_generator)
        {
            $wpaicg_generator->wpaicg_opts['prompt'] = str_replace('[keywords_to_include]',trim($wpaicg_generator->wpaicg_keywords),$wpaicg_generator->wpaicg_opts['prompt']);
            $wpaicg_generator->wpaicg_opts['prompt'] = str_replace('[keywords_to_avoid]',trim($wpaicg_generator->wpaicg_words_to_avoid),$wpaicg_generator->wpaicg_opts['prompt']);
            $result = $wpaicg_generator->wpaicg_request($wpaicg_generator->wpaicg_opts);
            return $result;
        }
    }
}
