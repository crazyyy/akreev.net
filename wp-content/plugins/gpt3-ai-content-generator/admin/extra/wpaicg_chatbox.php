<?php
if ( ! defined( 'ABSPATH' ) ) exit;
global $wp,$wpdb;
$table = $wpdb->prefix . 'wpaicg';
$wpaicg_bot_id = 0;
$existingValue = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$table} WHERE name = %s", 'wpaicg_settings' ), ARRAY_A );
$wpaicg_chat_shortcode_options = get_option('wpaicg_chat_shortcode_options',[]);
/*Check Custom Shortcode ID*/
if(isset($atts) && isset($atts['id']) && !empty($atts['id'])) {
    $wpaicg_bot = get_post($atts['id']);
    if ($wpaicg_bot) {
        $wpaicg_bot_id = $wpaicg_bot->ID;
        if(strpos($wpaicg_bot->post_content,'\"') !== false) {
            $wpaicg_bot->post_content = str_replace('\"', '&quot;', $wpaicg_bot->post_content);
        }
        if(strpos($wpaicg_bot->post_content,"\'") !== false) {
            $wpaicg_bot->post_content = str_replace('\\', '', $wpaicg_bot->post_content);
        }
        $wpaicg_chat_shortcode_options = json_decode($wpaicg_bot->post_content, true);
        $wpaicg_chat_shortcode_options['width'] = isset($wpaicg_chat_shortcode_options['width']) && !empty($wpaicg_chat_shortcode_options['width']) ? $wpaicg_chat_shortcode_options['width'].'px' : '350px';
        $wpaicg_chat_shortcode_options['height'] = isset($wpaicg_chat_shortcode_options['height']) && !empty($wpaicg_chat_shortcode_options['height']) ? $wpaicg_chat_shortcode_options['height'].'px' : '400px';
        $wpaicg_chat_shortcode_options['ai_icon'] = $wpaicg_chat_shortcode_options['ai_avatar'];
        $wpaicg_chat_shortcode_options['ai_icon_url'] = isset($wpaicg_chat_shortcode_options['ai_avatar_id']) ? $wpaicg_chat_shortcode_options['ai_avatar_id'] : false;
    }
}
/*End check*/
$default_setting = array(
    'language' => 'en',
    'tone' => 'friendly',
    'profession' => 'none',
    'model' => 'text-davinci-003',
    'temperature' => $existingValue['temperature'],
    'max_tokens' => $existingValue['max_tokens'],
    'top_p' => $existingValue['top_p'],
    'best_of' => $existingValue['best_of'],
    'frequency_penalty' => $existingValue['frequency_penalty'],
    'presence_penalty' => $existingValue['presence_penalty'],
    'ai_name' => esc_html__('AI','gpt3-ai-content-generator'),
    'you' => esc_html__('You','gpt3-ai-content-generator'),
    'ai_thinking' => esc_html__('AI Thinking','gpt3-ai-content-generator'),
    'placeholder' => esc_html__('Type a message','gpt3-ai-content-generator'),
    'welcome' => esc_html__('Hello human, I am a GPT powered AI chat bot. Ask me anything!','gpt3-ai-content-generator'),
    'remember_conversation' => 'yes',
    'conversation_cut' => 10,
    'content_aware' => 'yes',
    'embedding' =>  false,
    'embedding_type' =>  false,
    'embedding_top' =>  false,
    'no_answer' => '',
    'fontsize' => 13,
    'fontcolor' => '#fff',
    'user_bg_color' => '#444654',
    'ai_bg_color' => '#343541',
    'ai_icon_url' => '',
    'ai_icon' => 'default',
    'use_avatar' => false,
    'width' => '100%',
    'height' => '445px',
    'save_logs' => false,
    'log_notice' => false,
    'log_notice_message' => esc_html__('Please note that your conversations will be recorded.','gpt3-ai-content-generator'),
    'bgcolor' => '#222',
    'bg_text_field' => '#fff',
    'send_color' => '#fff',
    'border_text_field' => '#ccc',
    'footer_text' => '',
    'audio_enable' => false,
    'mic_color' => '#222',
    'stop_color' => '#f00'
);
$wpaicg_settings = shortcode_atts($default_setting, $wpaicg_chat_shortcode_options);
$wpaicg_ai_thinking = $wpaicg_settings['ai_thinking'];
$wpaicg_you = $wpaicg_settings['you'];
$wpaicg_typing_placeholder = $wpaicg_settings['placeholder'];
$wpaicg_welcome_message = $wpaicg_settings['welcome'];
$wpaicg_ai_name = $wpaicg_settings['ai_name'];
$wpaicg_chat_content_aware = $wpaicg_settings['content_aware'];
$wpaicg_font_color = $wpaicg_settings['fontcolor'];
$wpaicg_font_size = $wpaicg_settings['fontsize'];
$wpaicg_user_bg_color = $wpaicg_settings['user_bg_color'];
$wpaicg_ai_bg_color = $wpaicg_settings['ai_bg_color'];
$wpaicg_save_logs = isset($wpaicg_settings['save_logs']) && !empty($wpaicg_settings['save_logs']) ? $wpaicg_settings['save_logs'] : false;
$wpaicg_log_notice = isset($wpaicg_settings['log_notice']) && !empty($wpaicg_settings['log_notice']) ? $wpaicg_settings['log_notice'] : false;
$wpaicg_log_notice_message = isset($wpaicg_settings['log_notice_message']) && !empty($wpaicg_settings['log_notice_message']) ? $wpaicg_settings['log_notice_message'] : esc_html__('Please note that your conversations will be recorded.','gpt3-ai-content-generator');
$wpaicg_include_footer = (isset($wpaicg_settings['footer_text']) && !empty($wpaicg_settings['footer_text'])) ? 5 : 0;
$wpaicg_audio_enable = $wpaicg_settings['audio_enable'];
$wpaicg_mic_color = (isset($wpaicg_settings['mic_color']) && !empty($wpaicg_settings['mic_color'])) ? $wpaicg_settings['mic_color'] : '#222';
$wpaicg_stop_color = (isset($wpaicg_settings['stop_color']) && !empty($wpaicg_settings['stop_color'])) ? $wpaicg_settings['stop_color'] : '#f00';

?>
<style>
    .wpaicg-chat-shortcode{
        width: <?php echo esc_html($wpaicg_settings['width'])?>;
        overflow: hidden;
    }
    .wpaicg-chat-shortcode-content{
        position: relative;
    }
    .wpaicg-chat-shortcode-content ul{
        height: calc(<?php echo esc_html($wpaicg_settings['height'])?> - 44px);
        overflow-y: auto;
        margin: 0;
        padding: 0;
    }
    .wpaicg-chat-shortcode-footer{
        height: 18px;
        font-size: 11px;
        padding: 0 5px;
        color: <?php echo esc_html($wpaicg_settings['send_color'])?>;
        background: rgb(0 0 0 / 19%);
        margin-top:2px;
        margin-bottom: 2px;
    }
    .wpaicg-chat-shortcode-content ul li{
        display: flex;
        margin-bottom: 0;
        padding: 10px;
        color: <?php echo esc_html($wpaicg_font_color)?>;
    }
    .wpaicg-chat-shortcode-content ul li .wpaicg-chat-message{
        color: inherit;
    }
    .wpaicg-chat-shortcode-content ul li strong{
        font-weight: bold;
        margin-right: 5px;
        float: left;
    }
    .wpaicg-chat-shortcode-content ul li p{
        font-size: inherit;
    }
    .wpaicg-chat-shortcode-content ul li strong img{

    }
    .wpaicg-chat-shortcode-content ul li p{
        margin: 0;
        padding: 0;
    }
    .wpaicg-chat-shortcode-content ul li p:after{
        clear: both;
        display: block;
    }
    .wpaicg-bot-thinking{
        bottom: 0;
        font-size: 11px;
        color: #90EE90;
        padding: 2px 6px;
        display: none;
    }
    .wpaicg-chat-shortcode{
        background-color: <?php echo esc_html($wpaicg_settings['bgcolor'])?>;
    }
    .wpaicg-chat-shortcode-type{
        background: rgb(0 0 0 / 19%);
    }
    .wpaicg-chat-message{
        text-align: justify;
    }
    .wpaicg-chat-shortcode .wpaicg-ai-message .wpaicg-chat-message,
    .wpaicg-chat-shortcode .wpaicg-user-message .wpaicg-chat-message,
    .wpaicg-chat-shortcode .wpaicg-ai-message .wpaicg-chat-message,
    .wpaicg-chat-shortcode .wpaicg-user-message .wpaicg-chat-message a,
    .wpaicg-chat-shortcode .wpaicg-ai-message .wpaicg-chat-message a{
        color: inherit;
    }
    .wpaicg-chat-shortcode .wpaicg-bot-thinking{
        width: 100%;
        background-color: <?php echo esc_html($wpaicg_settings['bgcolor'])?>;
    }
    .wpaicg-jumping-dots span {
        position: relative;
        bottom: 0;
        -webkit-animation: wpaicg-jump 1500ms infinite;
        animation: wpaicg-jump 2s infinite;
    }
    .wpaicg-jumping-dots .wpaicg-dot-1{
        -webkit-animation-delay: 200ms;
        animation-delay: 200ms;
    }
    .wpaicg-jumping-dots .wpaicg-dot-2{
        -webkit-animation-delay: 400ms;
        animation-delay: 400ms;
    }
    .wpaicg-jumping-dots .wpaicg-dot-3{
        -webkit-animation-delay: 600ms;
        animation-delay: 600ms;
    }
    .wpaicg-chat-shortcode-send{
        display: flex;
        align-items: center;
        color: <?php echo esc_html($wpaicg_settings['send_color'])?>;
        padding: 2px 3px;
        cursor: pointer;
    }
    .wpaicg-chat-shortcode-type{
        display: flex;
        align-items: center;
        <?php
        if($wpaicg_include_footer):
        ?>
        padding: 5px 5px 0 5px;
        <?php
        else:
        ?>
        padding: 5px;
        <?php
        endif;
        ?>
    }
    input.wpaicg-chat-shortcode-typing{
        flex: 1;
        border: 1px solid #ccc;
        border-radius: 3px;
        background-color: <?php echo esc_html($wpaicg_settings['bg_text_field'])?>;
        border-color: <?php echo esc_html($wpaicg_settings['border_text_field'])?>;
        padding: 0 8px;
        min-height: 30px;
        line-height: 2;
        box-shadow: 0 0 0 transparent;
        color: #2c3338;
        margin: 0;
    }
    .wpaicg-chat-shortcode-send svg{
        width: 30px;
        height: 30px;
        fill: currentColor;
        stroke: currentColor;
    }
    .wpaicg-chat-message-error{
        color: #f00;
    }

    @-webkit-keyframes wpaicg-jump {
        0%   {bottom: 0px;}
        20%  {bottom: 5px;}
        40%  {bottom: 0px;}
    }

    @keyframes wpaicg-jump {
        0%   {bottom: 0px;}
        20%  {bottom: 5px;}
        40%  {bottom: 0px;}
    }
    @media (max-width: 599px){
        .wpaicg_chat_widget_content .wpaicg-chat-shortcode{
            width: 100%;
        }
        .wpaicg_widget_left .wpaicg_chat_widget_content{
            left: -15px!important;
            right: auto;
        }
        .wpaicg_widget_right .wpaicg_chat_widget_content{
            right: -15px!important;
            left: auto;
        }
    }
    .wpaicg-chat-shortcode .wpaicg-mic-icon{
        color: <?php echo esc_html($wpaicg_mic_color)?>;
    }
    .wpaicg-chat-shortcode .wpaicg-mic-icon.wpaicg-recording{
        color: <?php echo esc_html($wpaicg_stop_color)?>;
    }
    .wpaicg-chat-message{
        line-height: auto;
    }
</style>
<?php
if(isset($wpaicg_settings['use_avatar']) && $wpaicg_settings['use_avatar']) {
    $wpaicg_ai_name = isset($wpaicg_settings['ai_icon_url']) && isset($wpaicg_settings['ai_icon']) && $wpaicg_settings['ai_icon'] == 'custom' && !empty($wpaicg_settings['ai_icon_url']) ? wp_get_attachment_url(esc_html($wpaicg_settings['ai_icon_url'])) : WPAICG_PLUGIN_URL . 'admin/images/chatbot.png';
    $wpaicg_ai_name = '<img src="'.$wpaicg_ai_name.'" height="40" width="40">';
}
?>
<div class="wpaicg-chat-shortcode"
     data-user-bg-color="<?php echo esc_html($wpaicg_user_bg_color)?>"
     data-color="<?php echo esc_html($wpaicg_font_color)?>"
     data-fontsize="<?php echo esc_html($wpaicg_font_size)?>"
     data-use-avatar="<?php echo isset($wpaicg_settings['use_avatar']) && $wpaicg_settings['use_avatar'] ? '1' : '0'?>"
     data-user-avatar="<?php echo is_user_logged_in() ? get_avatar_url(get_current_user_id()) : get_avatar_url('')?>"
     data-you="<?php echo esc_html($wpaicg_you)?>"
     data-ai-avatar="<?php echo isset($wpaicg_settings['use_avatar']) && $wpaicg_settings['use_avatar'] && isset($wpaicg_settings['ai_icon_url']) && !empty($wpaicg_settings['ai_icon_url']) && isset($wpaicg_settings['ai_icon']) && $wpaicg_settings['ai_icon'] == 'custom' ? wp_get_attachment_url(esc_html($wpaicg_settings['ai_icon_url'])) : WPAICG_PLUGIN_URL.'admin/images/chatbot.png'?>"
     data-ai-name="<?php echo esc_html($wpaicg_ai_name)?>"
     data-ai-bg-color="<?php echo esc_html($wpaicg_ai_bg_color)?>"
     data-nonce="<?php echo esc_html(wp_create_nonce( 'wpaicg-chatbox' ))?>"
     data-post-id="<?php echo get_the_ID()?>"
     data-url="<?php echo home_url( $wp->request )?>"
     data-bot-id="<?php echo esc_html($wpaicg_bot_id)?>"
>
    <div class="wpaicg-chat-shortcode-content">
        <ul class="wpaicg-chat-shortcode-messages">
            <?php
            if($wpaicg_save_logs && $wpaicg_log_notice && !empty($wpaicg_log_notice_message)):
                ?>
                <li style="background: rgb(0 0 0 / 32%); padding: 10px;margin-bottom: 0">
                    <p>
                    <span class="wpaicg-chat-message">
                        <?php echo esc_html($wpaicg_log_notice_message)?>
                    </span>
                    </p>
                </li>
            <?php
            endif;
            ?>
            <li class="wpaicg-ai-message" style="color: <?php echo esc_html($wpaicg_font_color)?>; font-size: <?php echo esc_html($wpaicg_font_size)?>px; background-color: <?php echo esc_html($wpaicg_ai_bg_color);?>">
                <p>
                    <strong style="float: left" class="wpaicg-chat-avatar">
                        <?php echo wp_kses_post($wpaicg_ai_name)?>:</strong>
                    <span class="wpaicg-chat-message">
                        <?php echo esc_html($wpaicg_welcome_message)?>
                    </span>
                </p>
            </li>
        </ul>
        <span class="wpaicg-bot-thinking"><?php echo esc_html($wpaicg_ai_thinking)?>&nbsp;<span class="wpaicg-jumping-dots"><span class="wpaicg-dot-1">.</span><span class="wpaicg-dot-2">.</span><span class="wpaicg-dot-3">.</span></span></span>
    </div>
    <div class="wpaicg-chat-shortcode-type">
        <input type="text" class="wpaicg-chat-shortcode-typing" placeholder="<?php echo esc_html($wpaicg_typing_placeholder)?>">
        <span class="wpaicg-mic-icon" data-type="shortcode" style="<?php echo $wpaicg_audio_enable ? '' : 'display:none'?>">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M176 0C123 0 80 43 80 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM48 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H104c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H200V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>
        </span>
        <span class="wpaicg-chat-shortcode-send">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5004 11.9998H5.00043M4.91577 12.2913L2.58085 19.266C2.39742 19.8139 2.3057 20.0879 2.37152 20.2566C2.42868 20.4031 2.55144 20.5142 2.70292 20.5565C2.87736 20.6052 3.14083 20.4866 3.66776 20.2495L20.3792 12.7293C20.8936 12.4979 21.1507 12.3822 21.2302 12.2214C21.2993 12.0817 21.2993 11.9179 21.2302 11.7782C21.1507 11.6174 20.8936 11.5017 20.3792 11.2703L3.66193 3.74751C3.13659 3.51111 2.87392 3.39291 2.69966 3.4414C2.54832 3.48351 2.42556 3.59429 2.36821 3.74054C2.30216 3.90893 2.3929 4.18231 2.57437 4.72906L4.91642 11.7853C4.94759 11.8792 4.96317 11.9262 4.96933 11.9742C4.97479 12.0168 4.97473 12.0599 4.96916 12.1025C4.96289 12.1506 4.94718 12.1975 4.91577 12.2913Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
    </div>
    <?php
    if($wpaicg_include_footer):
    ?>
        <div class="wpaicg-chat-shortcode-footer">
            <?php
            echo esc_html($wpaicg_settings['footer_text']);
            ?>
        </div>
    <?php
    endif;
    ?>
</div>
