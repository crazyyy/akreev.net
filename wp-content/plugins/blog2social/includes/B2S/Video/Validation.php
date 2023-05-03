<?php

class B2S_Video_Validation {

    public $networkProperties;

    public function __construct() {
        $this->loadNetworkProperties();
    }

    public function loadNetworkProperties() {
        $checkUpdateOption = get_option('B2S_PLUGIN_UPDATE_TIME_NETWORK_PROPERTIES');
        $this->networkProperties = get_option('B2S_PLUGIN_DATA_NETWORK_PROPERTIES');
        if ($checkUpdateOption == false || $this->networkProperties == false || $checkUpdateOption < time()) {
            $properties = $this->getNetworkProperties();
            if ($properties !== false) {
                $this->networkProperties = $properties;
                update_option('B2S_PLUGIN_UPDATE_TIME_NETWORK_PROPERTIES', time() + 86400, false);
                update_option('B2S_PLUGIN_DATA_NETWORK_PROPERTIES', $this->networkProperties, false);
            }
        }
    }

    private function getNetworkProperties() {
        $result = json_decode(B2S_Api_Post::post(B2S_PLUGIN_API_ENDPOINT, array('action' => 'getNetworkProperties', 'token' => B2S_PLUGIN_TOKEN, 'version' => B2S_PLUGIN_VERSION)));
        if (isset($result->result) && (int) $result->result == 1 && isset($result->data) && !empty($result->data)) {
            return $result->data;
        }
        return false;
    }

    public function isValidVideoForNetwork($postId = 0, $networkId = 0, $networkType = 0) {
        if (isset($this->networkProperties) && !empty($this->networkProperties) && is_array($this->networkProperties)) {
            if ((int) $postId != 0 && (int) $networkId != 0) {
                $video_meta = wp_read_video_metadata(get_attached_file($postId));
                if (is_array($video_meta) && !empty($video_meta) && isset($video_meta['filesize']) && isset($video_meta['length']) && isset($video_meta['fileformat']) && !empty($video_meta['fileformat'])) {
                    foreach ($this->networkProperties as $key => $network) {
                        if ((int) $network->network_id == (int) $networkId && (int) $network->network_type == (int) $networkType) {
                            if (($video_meta['filesize'] / 1024) >= $network->video_max_size) {
                                $mfs = $network->video_max_size / 1024;
                                return array('result' => false, 'content' => sprintf(__('Your video is exceeding the maximum file size of %s Megabyte. Please compress your video file or select a video with a smaller file size.', 'blog2social'),sanitize_text_field($mfs)));
                            }
                            if ($video_meta['length'] >= $network->video_max_length) {
                                return array('result' => false, 'content' => sprintf(__('Your video is exceeding the maximum length. The maximum video length for this network is %s seconds. Please select a shorter video.', 'blog2social'), sanitize_text_field($network->video_max_length)));
                            }
                            if (strpos($network->video_format, strtolower($video_meta['fileformat'])) === false) {
                                return array('result' => false, 'content' => sprintf(__('Please check the file format of your video. This network only supports the following video formats: %s', 'blog2social'), sanitize_text_field($network->video_format)));
                            }
                            return array('result' => true);
                        }
                    }
                    return array('result' => false, 'content' => esc_html__('Your video could not be posted, because the server did not respond Please try again later! Contact our support team, if the failure should persist. (Error Code: V001)', 'blog2social'));
                }
                return array('result' => false, 'content' => esc_html__('Your video could not be posted, because your video format seems to be invalid. Please check your video file for errors and property rights. (Error Code: V002)', 'blog2social'));
            }
            return array('result' => false, 'content' => esc_html__('Your video could not be posted. Please try again! (Error Code: V003)', 'blog2social'));
        }
        return array('result' => false, 'content' => esc_html__('Your video could not be uploaded. Please check your video file for errors and try again! (Error Code: V004)', 'blog2social'));
    }

}
