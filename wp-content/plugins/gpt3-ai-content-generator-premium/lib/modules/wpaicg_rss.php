<?php
namespace WPAICG;
if ( ! defined( 'ABSPATH' ) ) exit;
if(!class_exists('\\WPAICG\\WPAICG_RSS')) {
    class WPAICG_RSS
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
            add_action('init',[$this,'wpaicg_cron_job'],1);
            add_action( 'wp_ajax_test_rss_cron', array( $this, 'wpaicg_rss_cron' ) );
            $this->create_database_tables();
        }

        public function wpaicg_cron_job($continue = false)
        {
            if(isset($_SERVER['argv']) && is_array($_SERVER['argv']) && count($_SERVER['argv'])){
                foreach( $_SERVER['argv'] as $arg ) {
                    $e = explode( '=', $arg );
                    if($e[0] == 'wpaicg_rss') {
                        if (count($e) == 2)
                            $_GET[$e[0]] = sanitize_text_field($e[1]);
                        else
                            $_GET[$e[0]] = 0;
                    }
                }
            }
            if(isset($_GET['wpaicg_rss']) && sanitize_text_field($_GET['wpaicg_rss']) == 'yes'){
                $wpaicg_running = WPAICG_PLUGIN_DIR.'/wpaicg_rss.txt';
                if(!file_exists($wpaicg_running)) {
                    $wpaicg_file = fopen($wpaicg_running, "a") or die("Unable to open file!");
                    $txt = 'running';
                    fwrite($wpaicg_file, $txt);
                    fclose($wpaicg_file);
                    try {
                        $_SERVER["REQUEST_METHOD"] = 'GET';
                        chmod($wpaicg_running,0755);
                        $this->wpaicg_rss_cron();
                    }
                    catch (\Exception $exception){
                        $wpaicg_error = WPAICG_PLUGIN_DIR.'wpaicg_error.txt';
                        $wpaicg_file = fopen($wpaicg_error, "a") or die("Unable to open file!");
                        $txt = $exception->getMessage();
                        fwrite($wpaicg_file, $txt);
                        fclose($wpaicg_file);

                    }
                    @unlink($wpaicg_running);
                }
                if(!$continue) {
                    exit;
                }
            }
        }

        public function create_database_tables()
        {
            global $wpdb;
            if(is_admin()) {
                $wpaicgLogTable = $wpdb->prefix . 'wpaicg_rsslogs';
                if ($wpdb->get_var($wpdb->prepare("SHOW TABLES LIKE %s",$wpaicgLogTable)) != $wpaicgLogTable) {
                    $charset_collate = $wpdb->get_charset_collate();
                    $sql = "CREATE TABLE " . $wpaicgLogTable . " (
    `id` mediumint(11) NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(500) DEFAULT NULL,
    `title` VARCHAR(500) DEFAULT NULL,
    `track_id` VARCHAR(500) DEFAULT NULL,
    PRIMARY KEY  (id)
    ) $charset_collate";
                    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
                    $wpdb->query($sql);
                    $sql = "ALTER TABLE `".$wpaicgLogTable."` ADD KEY `".$wpaicgLogTable."_url_index` (`url`), ADD KEY `".$wpaicgLogTable."_title_index` (`title`)";
                    $wpdb->query($sql);
                }
            }
        }

        public function wpaicg_rss_cron()
        {
            $wpaicg_rss_cron_added = get_option( '_wpaicg_cron_rss_added', '' );
            if ( empty($wpaicg_rss_cron_added) ) {
                update_option( '_wpaicg_cron_rss_added', time() );
            }
            $wpaicg_link_rss_per_request = 5;
            $wpaicg_rss_start = get_option('wpaicg_rss_start',0);
            $wpaicg_rss_feeds = get_option('wpaicg_rss_feeds', []);
            update_option( '_wpaicg_crojob_rss_last_time', time() );
            if(is_array($wpaicg_rss_feeds) && count($wpaicg_rss_feeds)){
                $wpaicg_count_rss = count($wpaicg_rss_feeds);
                $wpaicg_rss_end = $wpaicg_rss_start+$wpaicg_link_rss_per_request;
                if($wpaicg_rss_end > $wpaicg_count_rss){
                    $wpaicg_rss_end = $wpaicg_count_rss;
                }
                for($i=$wpaicg_rss_start;$i < $wpaicg_rss_end;$i++){
                    if(isset($wpaicg_rss_feeds[$i]) && is_array($wpaicg_rss_feeds[$i]) && isset($wpaicg_rss_feeds[$i]['url']) && !empty($wpaicg_rss_feeds[$i]['url'])){
                        $this->wpaicg_rss_reading($wpaicg_rss_feeds[$i]);
                    }
                }
                /*Save next RSS Position*/
                if($wpaicg_rss_end == $wpaicg_count_rss){
                    $wpaicg_rss_end = 0;
                }
                update_option('wpaicg_rss_start',$wpaicg_rss_end);
            }
        }

        public function wpaicg_rss_reading($wpaicg_rss_feed)
        {
            global $wpdb;
            $rss_url = $wpaicg_rss_feed['url'];
            $rss_category = isset($wpaicg_rss_feed['category']) && !empty($wpaicg_rss_feed['category']) ? $wpaicg_rss_feed['category'] : false;
            $rss_author = isset($wpaicg_rss_feed['author']) && !empty($wpaicg_rss_feed['author']) ? $wpaicg_rss_feed['author'] : false;
            $rss_status = isset($wpaicg_rss_feed['status']) && !empty($wpaicg_rss_feed['status']) ? $wpaicg_rss_feed['status'] : 'draft';
            try {
                if(!class_exists('\SimplePie')){
                    require_once ABSPATH.WPINC.'/class-simplepie.php';
                }
                $rss = new \SimplePie();
                $rss->set_feed_url($rss_url);
                $rss->set_useragent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36');
                $rss->force_feed(true);
                $rss->enable_cache(false);
                $rss->set_timeout(30);
                $rss->enable_order_by_date(false);
                $rss->init();
                $rss->set_output_encoding( get_option( 'blog_charset' ) );
                $rss->handle_content_type();
                $items = array();
                if (!$rss || !is_wp_error( $rss )) {
                    $rss_items = $rss->get_items();
                    foreach($rss_items as $key=>$rss_item){
                        $item = $this->wpaicg_feed_item($rss_item);
                        if(is_object($item)){
                            $items[] = $item;
                        }
                    }
                }
                $wpaicg_titles = array();
                $rss_log_id = false;
                if(count($items)){
                    foreach($items as $item){
                        $check = $wpdb->get_row($wpdb->prepare("SELECT * FROM ".$wpdb->prefix."wpaicg_rsslogs WHERE url=%s AND title = %s",$item->url,$item->title));
                        if(!$check){
                            $item_title = trim($item->title);
                            /*Generate new title if enabled*/
                            $wpaicg_rss_new_title = get_option('wpaicg_rss_new_title',false);
                            if($wpaicg_rss_new_title){
                                $wpaicg_generator = WPAICG_Generator::get_instance();
                                $open_ai = WPAICG_OpenAI::get_instance()->openai();
                                if($open_ai) {
                                    $wpaicg_generator->openai($open_ai);
                                    $complete = $wpaicg_generator->wpaicg_request([
                                        'model' => 'gpt-3.5-turbo',
                                        'prompt' => 'Please identify the language of the following text according to the format \'#Language: language_name\'. Text:'.$item_title."\n",
                                        'temperature' => 0.5,
                                        'max_tokens' => 300,
                                        'frequency_penalty' => 0,
                                        'presence_penalty' => 0,
                                        'top_p' => 1,
                                        'stop' => "\n"
                                    ]);
                                    if($complete['status'] == 'success'){
                                        $result = trim($complete['data']);
                                        if(!empty($result)){
                                            $language_name = str_replace('#Language: ','',$result);
                                            $language_name = str_replace('#Language:','',$language_name);
                                            if(!empty($language_name)){
                                                $prompt = 'Please generate a new title for the following post title in '.$language_name.' and provide the revised title on a single line starting with \'#\' without any additional text. Original Title:'.$item_title;
                                                $complete = $wpaicg_generator->wpaicg_request([
                                                    'model' => 'gpt-3.5-turbo',
                                                    'prompt' => $prompt.".\n",
                                                    'temperature' => 0.5,
                                                    'max_tokens' => 300,
                                                    'frequency_penalty' => 0,
                                                    'presence_penalty' => 0,
                                                    'top_p' => 1,
                                                    'stop' => "\n"
                                                ]);
                                                if($complete['status'] == 'success'){
                                                    $result = trim($complete['data']);
                                                    $result = str_replace('- #','',$result);
                                                    $result = str_replace('#','',$result);
                                                    if(!empty($result)){
                                                        $item_title = trim($result);
                                                        $item_title = rtrim($item_title,'.');
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            /*End Generate*/
                            $wpaicg_titles[] = $item_title;
                            $wpdb->insert($wpdb->prefix.'wpaicg_rsslogs', array(
                                'url' => $item->url,
                                'title' => trim($item->title)
                            ));
                            $rss_log_id = $wpdb->insert_id;
                        }
                    }
                }
                if(count($wpaicg_titles)){
                    $waicg_track_title = implode(',',$wpaicg_titles);
                    $wpaicg_track_id = wp_insert_post(array(
                        'post_type' => 'wpaicg_tracking',
                        'post_title' => $waicg_track_title,
                        'post_status' => 'pending',
                        'post_mime_type' => 'rss',
                    ));
                    if (!is_wp_error($wpaicg_track_id)) {
                        if($rss_log_id){
                            $wpdb->update($wpdb->prefix.'wpaicg_rsslogs',array('track_id'=> $wpaicg_track_id), array('id' => $rss_log_id));
                        }
                        foreach ($wpaicg_titles as $key => $wpaicg_title) {
                            if (!empty($wpaicg_title)) {
                                $wpaicg_bulk_data = array(
                                    'post_type' => 'wpaicg_bulk',
                                    'post_title' => trim($wpaicg_title),
                                    'post_status' => 'pending',
                                    'post_parent' => $wpaicg_track_id,
                                    'post_password' => $rss_status,
                                    'post_mime_type' => 'rss',
                                );
                                if ($rss_category) {
                                    $wpaicg_bulk_data['menu_order'] = $rss_category;
                                }
                                if ($rss_author) {
                                    $wpaicg_bulk_data['post_author'] = $rss_author;
                                }
                                wp_insert_post($wpaicg_bulk_data);
                            }

                        }
                    }
                }
            }
            catch (\Exception $exception){

            }
        }

        public function wpaicg_feed_item($item)
        {
            if(!is_object($item)) {
                return false;
            } else if (!empty($item)) {
                return $this->wpaicg_data_from_feed_object($item);
            } else {
                return false;
            }

        }

        private function wpaicg_data_from_feed_object($item) {
            $feed = new \stdClass();
            $feed->title 		= $item->get_title();
            $feed->url 	= $item->get_permalink();
            $feed->date 		= $this->convert_timezone(@$item->get_date());
            $feed->source 		= $this->get_source($item);
            return $feed;
        }

        private function get_source($item) {
            return $item->get_feed()->get_title();
        }


        private function convert_timezone($timestamp) {
            $date = new \DateTime($timestamp);

            // Timezone string set (ie: America/New York)
            if (get_option('timezone_string')) {
                $timezone = get_option('timezone_string');
                // GMT offset string set (ie: -5). Convert value to timezone string
            } elseif (get_option('gmt_offset')) {
                $timezone = timezone_name_from_abbr('', get_option('gmt_offset') * 3600, 0 );
            } else {
                $timezone = 'GMT';
            }

            try {
                $date->setTimezone(new \DateTimeZone($timezone));
            } catch (\Exception $e) {
                $date->setTimezone(new \DateTimeZone('GMT'));
            }

            return date_i18n(get_option('date_format') .' - ' . get_option('time_format'), strtotime($date->format('Y-m-d H:i:s')));
        }


    }

    WPAICG_RSS::get_instance();
}
