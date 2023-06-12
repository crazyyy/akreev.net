<?php
namespace WPAICG;

if ( ! defined( 'ABSPATH' ) ) exit;
if(!class_exists('\\WPAICG\\WPAICG_Google_Sheets')) {
    class WPAICG_Google_Sheets
    {
        private static  $instance = null ;
        public $service = false;
        public $spreadsheetID = false;
        public $spreadsheet = false;
        public $sheetName = '';
        public $error_msg = false;

        public static function get_instance()
        {
            if ( is_null( self::$instance ) ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        public function __construct()
        {
            add_action('init',[$this,'wpaicg_cron_job'],1);
            add_action('wp_ajax_wpaicg_google_sheet_save',[$this,'wpaicg_google_sheet_save']);
            add_filter('mime_types', function ($mime_types){
                $mime_types['json'] = 'application/json';
                return $mime_types;
            });
        }

        public function wpaicg_google_sheet_save()
        {
            $wpaicg_result = array('status' => 'error');
            if ( ! wp_verify_nonce( $_POST['nonce'], 'wpaicg_google_sheets_setting' ) ) {
                $wpaicg_result['status'] = 'error';
                $wpaicg_result['msg'] = WPAICG_NONCE_ERROR;
                wp_send_json($wpaicg_result);
            }
            $has_error = false;
            /*Check if upload new credentials*/
            if(isset($_FILES['file']) && empty($_FILES['file']['error'])){
                $file_name = sanitize_file_name(basename($_FILES['file']['name']));
                $filetype = wp_check_filetype($file_name);
                if($filetype['ext'] !== 'json'){
                    $wpaicg_result['msg'] = esc_html__('Only files with the json extension are supported','gpt3-ai-content-generator');
                    $has_error = true;
                }
                else{
                    $file_content = file_get_contents($_FILES['file']['tmp_name']);
                    $configs = json_decode($file_content,true);
                    if($configs && is_array($configs) && count($configs)){
                        update_option('wpaicg_google_credentials_json', $configs);
                    }
                    else{
                        $has_error = true;
                        $wpaicg_result['msg'] = esc_html__('Wrong json credentials format','gpt3-ai-content-generator');
                    }
                }
            }
            /*Check if add link*/
            if(
                isset($_REQUEST['status'])
                && !empty($_REQUEST['status'])
            ){
                update_option('wpaicg_google_sheets_cron', sanitize_text_field($_REQUEST['status']));
            }
            if(
                isset($_REQUEST['limitation'])
                && !empty($_REQUEST['limitation'])
            ){
                update_option('wpaicg_google_sheets_limitation', sanitize_text_field($_REQUEST['limitation']));
            }
            if(
                isset($_REQUEST['url'])
                && !empty($_REQUEST['url'])
            ){
                $url = sanitize_text_field($_REQUEST['url']);
                $getID = $this->getID($url);
                if($getID){
                    $wpaicg_google_sheets_url = get_option('wpaicg_google_sheets_url','');
                    if($wpaicg_google_sheets_url !== $url){
                        $this->service();
                        $this->spreadsheet($getID);
                        if($this->error_msg || !$this->writeable()){
                            update_option('wpaicg_google_sheets_status','non-accessible');
                        }
                        else{
                            update_option('wpaicg_google_sheets_status','accessible');
                        }
                    }
                    update_option('wpaicg_google_sheets_url', $url);
                }
                else{
                    $has_error = true;
                    $wpaicg_result['msg'] = esc_html__('Can not get Spreadsheet ID from your URL','gpt3-ai-content-generator');
                }
            }

            if(!$has_error){
                $wpaicg_result['status'] = 'success';
                ob_start();
                include WPAICG_LIBS_DIR.'views/google-sheets/fields.php';
                $wpaicg_result['html'] = ob_get_clean();

            }
            wp_send_json($wpaicg_result);
        }

        public function wpaicg_cron_job()
        {
            if(isset($_SERVER['argv']) && is_array($_SERVER['argv']) && count($_SERVER['argv'])){
                foreach( $_SERVER['argv'] as $arg ) {
                    $e = explode( '=', $arg );
                    if($e[0] == 'wpaicg_sheets') {
                        if (count($e) == 2)
                            $_GET[$e[0]] = sanitize_text_field($e[1]);
                        else
                            $_GET[$e[0]] = 0;
                    }
                }
            }
            if(isset($_GET['wpaicg_sheets']) && sanitize_text_field($_GET['wpaicg_sheets']) == 'yes'){
                $wpaicg_google_sheets_cron = get_option('wpaicg_google_sheets_cron','yes');
                $wpaicg_cron_sheets_added = get_option( 'wpaicg_cron_sheets_added', '' );
                if ( empty($wpaicg_cron_sheets_added) ) {
                    update_option( 'wpaicg_cron_sheets_added', time() );
                }
                update_option( 'wpaicg_crojob_sheets_last_time', time() );
                if($wpaicg_google_sheets_cron == 'yes'){
                    $wpaicg_running = WPAICG_PLUGIN_DIR.'/wpaicg_sheets.txt';
                    if(!file_exists($wpaicg_running)) {
                        $wpaicg_file = fopen($wpaicg_running, "a") or die("Unable to open file!");
                        $txt = 'running';
                        fwrite($wpaicg_file, $txt);
                        fclose($wpaicg_file);
                        try {
                            $_SERVER["REQUEST_METHOD"] = 'GET';
                            chmod($wpaicg_running,0755);
                            $this->wpaicg_google_sheets();
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
                }
                exit;
            }
        }

        public function wpaicg_google_sheets()
        {
            $wpaicg_google_credentials_json = get_option('wpaicg_google_credentials_json',[]);
            if($wpaicg_google_credentials_json && is_array($wpaicg_google_credentials_json) && count($wpaicg_google_credentials_json)) {
                $wpaicg_google_sheets_url = get_option('wpaicg_google_sheets_url','');
                if (!empty($wpaicg_google_sheets_url)) {
                    $spreadsheetID = $this->getID($wpaicg_google_sheets_url);
                    $this->service();
                    $this->spreadsheet($spreadsheetID);
                    if($this->writeable()) {
                        if (!$this->error_msg) {
                            $rows = $this->rows();
                            if ($rows && is_array($rows) && count($rows)) {
                                $wpaicg_google_sheets_limitation = get_option('wpaicg_google_sheets_limitation',60);
                                $is_failed_update = false;
                                $titles = array();
                                $key = 0;
                                $posts = array();
                                for ($i = 1; $i < count($rows); $i++) {
                                    $item = $rows[$i];
                                    if (
                                        isset($item[0])
                                    ) {
                                        $title = trim($item[0]);
                                        $is_retrieved = false;
                                        if (
                                            isset($item[1])
                                            && strtolower($item[1]) == 'yes'
                                        ) {
                                            $is_retrieved = true;
                                        }
                                        if (!$is_retrieved && !$is_failed_update) {
                                            $key++;
                                            if($key < $wpaicg_google_sheets_limitation) {
                                                $status = isset($item[2]) && in_array(strtolower($item[2]), array('publish', 'future', 'draft', 'pending', 'private', 'trash')) ? strtolower($item[2]) : 'draft';
                                                $category_id = isset($item[3]) && !empty($item[3]) ? $item[3] : false;
                                                $author = isset($item[4]) && !empty($item[4]) ? $item[4] : false;
                                                $tags = isset($item[5]) && !empty($item[5]) ? trim($item[5]) : false;
                                                $keywords = false;
                                                $keywords_avoid = false;
                                                if (wpaicg_util_core()->wpaicg_is_pro()) {
                                                    $keywords = isset($item[6]) && !empty($item[6]) ? trim($item[6]) : false;
                                                    $keywords_avoid = isset($item[7]) && !empty($item[7]) ? trim($item[7]) : false;
                                                }
                                                $anchor_text = isset($item[8]) && !empty($item[8]) ? $item[8] : false;
                                                $target_url = isset($item[9]) && !empty($item[9]) ? $item[9] : false;
                                                $cta = isset($item[10]) && !empty($item[10]) ? $item[10] : false;
                                                if ($key < 10) {
                                                    $titles[] = $title;
                                                }
                                                $user_id = false;
                                                if ($author) {
                                                    $user = get_user_by('login', $author);
                                                    if ($user) {
                                                        $user_id = $user->ID;
                                                    }
                                                }
                                                $postData = array(
                                                    'title' => $title,
                                                    'status' => $status,
                                                    'category_id' => $category_id,
                                                    'user_id' => $user_id,
                                                    'tags' => $tags,
                                                    'keywords' => $keywords,
                                                    'keywords_avoid' => $keywords_avoid,
                                                    'anchor_text' => $anchor_text,
                                                    'target_url' => $target_url,
                                                    'cta' => $cta,
                                                );
                                                $timeNow = strtotime('now');
                                                if(isset($item[11]) && !empty($item[11])){
                                                    $scheduleDate = date('Y-m-d H:i:s',strtotime(trim($item[11])));
                                                    if(strtotime($scheduleDate) < $timeNow){
                                                        $postData['status'] = 'draft';
                                                    }
                                                    else{
                                                        $postData['schedule'] = $scheduleDate;
                                                    }
                                                }
                                                $posts[] = $postData;
                                                /*Set Retrieved*/
                                                $values = [['Yes']];
                                                $body = new \Google_Service_Sheets_ValueRange([
                                                    'values' => $values
                                                ]);
                                                $params = [
                                                    'valueInputOption' => 'RAW'
                                                ];
                                                try {
                                                    $row = $i + 1;
                                                    $this->service->spreadsheets_values->update($this->spreadsheetID, $this->sheetName . '!B' . $row, $body, $params);
                                                } catch (\Exception $exception) {
                                                    $is_failed_update = true;
                                                }
                                            }
                                        }
                                    }
                                }
                                /*Posts*/
                                if (count($posts)) {
                                    $waicg_track_title = implode(', ', $titles) . '..';
                                    $wpaicg_source = 'sheets';
                                    $wpaicg_track_id = wp_insert_post(array(
                                        'post_type' => 'wpaicg_tracking',
                                        'post_title' => $waicg_track_title,
                                        'post_status' => 'pending',
                                        'post_mime_type' => $wpaicg_source,
                                    ),true);
                                    if (!is_wp_error($wpaicg_track_id)) {
                                        foreach ($posts as $post) {
                                            $wpaicg_bulk_data = array(
                                                'post_type' => 'wpaicg_bulk',
                                                'post_title' => $post['title'],
                                                'post_status' => 'pending',
                                                'post_parent' => $wpaicg_track_id,
                                                'post_password' => $post['status'],
                                                'post_mime_type' => $wpaicg_source,
                                            );
                                            if (isset($post['category_id']) && $post['category_id']) {
                                                $wpaicg_bulk_data['menu_order'] = sanitize_text_field($post['category_id']);
                                            }
                                            if (isset($post['user_id']) && $post['user_id']) {
                                                $wpaicg_bulk_data['post_author'] = sanitize_text_field($post['user_id']);
                                            }
                                            if(isset($post['schedule']) && !empty($post['schedule'])){
                                                $wpaicg_bulk_data['post_excerpt'] = trim($post['schedule']);
                                            }
                                            $wpaicg_bulk_id = wp_insert_post($wpaicg_bulk_data);
                                            if (isset($post['tags']) && $post['tags']) {
                                                update_post_meta($wpaicg_bulk_id, '_wpaicg_tags', sanitize_text_field($post['tags']));
                                            }
                                            if (isset($post['keywords']) && $post['keywords']) {
                                                update_post_meta($wpaicg_bulk_id, '_wpaicg_keywords', sanitize_text_field($post['keywords']));
                                            }
                                            if (isset($post['keywords_avoid']) && $post['keywords_avoid']) {
                                                update_post_meta($wpaicg_bulk_id, '_wpaicg_avoid', sanitize_text_field($post['keywords_avoid']));
                                            }
                                            if (isset($post['anchor_text']) && $post['anchor_text']) {
                                                update_post_meta($wpaicg_bulk_id, '_wpaicg_anchor', sanitize_text_field($post['anchor_text']));
                                            }
                                            if (isset($post['target_url']) && $post['target_url']) {
                                                update_post_meta($wpaicg_bulk_id, '_wpaicg_target', sanitize_text_field($post['target_url']));
                                            }
                                            if (isset($post['cta']) && !empty($post['cta'])) {
                                                update_post_meta($wpaicg_bulk_id, '_wpaicg_cta', sanitize_text_field($post['cta']));
                                            }
                                        }
                                    }
                                }
                            }
                            if(!$this->error_msg){
                                update_option('wpaicg_google_sheets_status','accessible');
                            }
                        }
                        else{
                            update_option('wpaicg_google_sheets_status','non-accessible');
                        }
                    }
                    else{
                        update_option('wpaicg_google_sheets_status','non-accessible');
                    }
                }
            }
        }

        public function getID($url)
        {
            preg_match('~/d/\K[^/]+(?=/)~', $url, $result);
            return isset($result[0]) ? $result[0] : false;
        }

        public function spreadsheet($id)
        {
            if($this->service){
                try {
                    $this->spreadsheet = $this->service->spreadsheets->get($id);
                    $this->spreadsheetID = $id;
                    $this->sheetName = $this->spreadsheet->getSheets()[0]->getProperties()->title;
                    return $this;
                }
                catch (\Exception $exception){
                    $this->error_msg = $exception->getMessage();
                }
            }
            return false;
        }

        public function writeable()
        {
            if(!$this->spreadsheet){
                return false;
            }
            $values = [['wpaicg_test_writeable_permission']];
            $body = new \Google_Service_Sheets_ValueRange([
                'values' => $values
            ]);
            $params = [
                'valueInputOption' => 'RAW'
            ];
            try {
                $this->service->spreadsheets_values->update($this->spreadsheetID, $this->sheetName.'!Z1', $body, $params);
                $clear = new \Google_Service_Sheets_ClearValuesRequest();
                $this->service->spreadsheets_values->clear($this->spreadsheetID, $this->sheetName.'!Z1',$clear);
                return true;
            }
            catch (\Exception $exception){
                $this->error_msg = $exception->getMessage();
                return false;
            }
        }

        public function service()
        {
            $wpaicg_google_credentials_json = get_option('wpaicg_google_credentials_json',[]);
            if($wpaicg_google_credentials_json && is_array($wpaicg_google_credentials_json) && count($wpaicg_google_credentials_json)) {
                $client = new \Google_Client();
                $client->setScopes(\Google_Service_Sheets::SPREADSHEETS);
                $client->setAuthConfig($wpaicg_google_credentials_json);
                $this->service = new \Google_Service_Sheets($client);
            }
            return $this;

        }

        public function update($range)
        {

        }

        public function rows()
        {
            $rows = array();
            if($this->service){
                try {
                    $response = $this->service->spreadsheets_values->get($this->spreadsheetID, $this->sheetName);
                    if($response->count()){
                        $rows = $response->getValues();
                    }
                }
                catch (\Exception $exception){
                    $this->error_msg = $exception->getMessage();
                }
            }
            return $rows;
        }
    }
    WPAICG_Google_Sheets::get_instance();
}
