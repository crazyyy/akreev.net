<?php
if ( ! defined( 'ABSPATH' ) ) exit;
global $wp,$wpdb;
$wpaicg_ai_thinking = get_option('_wpaicg_ai_thinking','');
$wpaicg_you = get_option('_wpaicg_chatbox_you','');
$wpaicg_typing_placeholder = get_option('_wpaicg_typing_placeholder','');
$wpaicg_welcome_message = get_option('_wpaicg_chatbox_welcome_message','');
$wpaicg_chat_widget = get_option('wpaicg_chat_widget',[]);
$wpaicg_ai_name = get_option('_wpaicg_chatbox_ai_name','');
/*Check Custom Widget For Page Post*/
$current_context_ID = get_the_ID();
$wpaicg_bot_id = 0;
$wpaicg_bot_content = $wpdb->get_row($wpdb->prepare("SELECT * FROM ".$wpdb->postmeta." WHERE meta_key=%s",'wpaicg_widget_page_'.$current_context_ID));
if($wpaicg_bot_content && isset($wpaicg_bot_content->post_id)){
    $wpaicg_bot_id = $wpaicg_bot_content->post_id;
    $wpaicg_bot = get_post($wpaicg_bot_content->post_id);
    if($wpaicg_bot) {
        if(strpos($wpaicg_bot->post_content,'\"') !== false) {
            $wpaicg_bot->post_content = str_replace('\"', '&quot;', $wpaicg_bot->post_content);
        }
        if(strpos($wpaicg_bot->post_content,"\'") !== false) {
            $wpaicg_bot->post_content = str_replace('\\', '', $wpaicg_bot->post_content);
        }
        $wpaicg_chat_widget = json_decode($wpaicg_bot->post_content, true);
        $wpaicg_chat_status = 'active';
        $wpaicg_you = isset($wpaicg_chat_widget['you']) && !empty($wpaicg_chat_widget['you']) ? $wpaicg_chat_widget['you'] : $wpaicg_you;
        $wpaicg_typing_placeholder = isset($wpaicg_chat_widget['placeholder']) && !empty($wpaicg_chat_widget['placeholder']) ? $wpaicg_chat_widget['placeholder'] : $wpaicg_typing_placeholder;
        $wpaicg_welcome_message = isset($wpaicg_chat_widget['welcome']) && !empty($wpaicg_chat_widget['welcome']) ? $wpaicg_chat_widget['welcome'] : $wpaicg_welcome_message;
        $wpaicg_ai_name = isset($wpaicg_chat_widget['ai_name']) && !empty($wpaicg_chat_widget['ai_name']) ? $wpaicg_chat_widget['ai_name'] : $wpaicg_ai_name;
        $wpaicg_ai_thinking = isset($wpaicg_chat_widget['ai_thinking']) && !empty($wpaicg_chat_widget['ai_thinking']) ? $wpaicg_chat_widget['ai_thinking'] : $wpaicg_ai_thinking;
    }
}
/*End check*/
$wpaicg_ai_name = !empty($wpaicg_ai_name) ? $wpaicg_ai_name : esc_html__('AI','gpt3-ai-content-generator');
$wpaicg_ai_thinking = !empty($wpaicg_ai_thinking) ? $wpaicg_ai_thinking : esc_html__('AI thinking','gpt3-ai-content-generator');
$wpaicg_you = !empty($wpaicg_you) ? $wpaicg_you : esc_html__('You','gpt3-ai-content-generator');
$wpaicg_typing_placeholder = !empty($wpaicg_typing_placeholder) ? $wpaicg_typing_placeholder : esc_html__('Type a message','gpt3-ai-content-generator');
$wpaicg_chat_content_aware = isset($wpaicg_chat_widget['content_aware']) && !empty($wpaicg_chat_widget['content_aware']) ? $wpaicg_chat_widget['content_aware'] : 'yes';
$wpaicg_welcome_message = !empty($wpaicg_welcome_message) ? $wpaicg_welcome_message : 'Hello human, I am a GPT powered AI chat bot. Ask me anything!';
$wpaicg_user_bg_color = isset($wpaicg_chat_widget['user_bg_color']) && !empty($wpaicg_chat_widget['user_bg_color']) ? $wpaicg_chat_widget['user_bg_color'] : '#444654';
$wpaicg_ai_bg_color = isset($wpaicg_chat_widget['ai_bg_color']) && !empty($wpaicg_chat_widget['ai_bg_color']) ? $wpaicg_chat_widget['ai_bg_color'] : '#343541';
$wpaicg_use_avatar = isset($wpaicg_chat_widget['use_avatar']) && !empty($wpaicg_chat_widget['use_avatar']) ? $wpaicg_chat_widget['use_avatar'] : false;
$wpaicg_ai_avatar = isset($wpaicg_chat_widget['ai_avatar']) && !empty($wpaicg_chat_widget['ai_avatar']) ? $wpaicg_chat_widget['ai_avatar'] : 'default';
$wpaicg_ai_avatar_id = isset($wpaicg_chat_widget['ai_avatar_id']) && !empty($wpaicg_chat_widget['ai_avatar_id']) ? $wpaicg_chat_widget['ai_avatar_id'] : '';
$wpaicg_ai_avatar_url = WPAICG_PLUGIN_URL.'admin/images/chatbot.png';
$wpaicg_user_avatar_url = is_user_logged_in() ? get_avatar_url(get_current_user_id()) : get_avatar_url('');
if($wpaicg_use_avatar && $wpaicg_ai_avatar == 'custom' && $wpaicg_ai_avatar_id != ''){
    $wpaicg_ai_avatar_url = wp_get_attachment_url($wpaicg_ai_avatar_id);
}
$wpaicg_chat_fontsize = isset($wpaicg_chat_widget['fontsize']) && !empty($wpaicg_chat_widget['fontsize']) ? $wpaicg_chat_widget['fontsize'] : '13';
$wpaicg_chat_fontcolor = isset($wpaicg_chat_widget['fontcolor']) && !empty($wpaicg_chat_widget['fontcolor']) ? $wpaicg_chat_widget['fontcolor'] : '#fff';
$wpaicg_save_logs = isset($wpaicg_chat_widget['save_logs']) && !empty($wpaicg_chat_widget['save_logs']) ? $wpaicg_chat_widget['save_logs'] : false;
$wpaicg_log_notice = isset($wpaicg_chat_widget['log_notice']) && !empty($wpaicg_chat_widget['log_notice']) ? $wpaicg_chat_widget['log_notice'] : false;
$wpaicg_log_notice_message = isset($wpaicg_chat_widget['log_notice_message']) && !empty($wpaicg_chat_widget['log_notice_message']) ? $wpaicg_chat_widget['log_notice_message'] : esc_html__('Please note that your conversations will be recorded.','gpt3-ai-content-generator');
$wpaicg_audio_enable = isset($wpaicg_chat_widget['audio_enable']) ? $wpaicg_chat_widget['audio_enable'] : false;
$wpaicg_mic_color = isset($wpaicg_chat_widget['mic_color']) ? $wpaicg_chat_widget['mic_color'] : '#222';
$wpaicg_stop_color = isset($wpaicg_chat_widget['stop_color']) ? $wpaicg_chat_widget['stop_color'] : '#f00';
?>
<style>
    .wpaicg_chat_widget,.wpaicg_chat_widget_content{
        z-index: 99999;
    }
    .wpaicg-chatbox{
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        overflow: hidden;
    }
    .wpaicg-chatbox-content{
        position: relative;
    }
    .wpaicg-chatbox-content ul{
        height: 400px;
        overflow-y: auto;
        background: #222;
        margin: 0;
        padding: 0;
    }
    .wpaicg-chatbox-content ul li{
        color: #90EE90;
        display: flex;
        margin-bottom: 10px;
    }
    .wpaicg-chatbox-content ul li strong{
        font-weight: bold;
        margin-right: 5px;
        float: left;
    }
    .wpaicg-chatbox-content ul li p{
        margin: 0;
        padding: 0;
    }
    .wpaicg-chatbox-content ul li p:after{
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
    .wpaicg-chat-message{
        color: #90EE90;
        text-align: justify;
    }
    .wpaicg-jumping-dots span {
        position: relative;
        bottom: 0px;
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
    .wpaicg-chatbox-send{
        display: flex;
        align-items: center;
        color: #fff;
        padding: 2px 3px;
        cursor: pointer;
    }
    .wpaicg-chatbox-type{
        display: flex;
        align-items: center;
        padding: 5px;
        background: #141414;
        border-top: 1px solid #3e3e3e;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    input.wpaicg-chatbox-typing{
        flex: 1;
        border: 1px solid #ccc;
        border-radius: 3px;
        background: #fff;
        padding: 0 8px;
        min-height: 30px;
        line-height: 2;
        box-shadow: 0 0 0 transparent;
        color: #2c3338;
        margin: 0;
    }
    .wpaicg-chatbox-send svg{
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
        .wpaicg_chat_widget_content .wpaicg-chatbox{
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
    .wpaicg_chat_widget_content .wpaicg-chat-ai-message,
    .wpaicg_chat_widget_content .wpaicg-chat-ai-message *,
    .wpaicg_chat_widget_content .wpaicg-chat-user-message,
    .wpaicg_chat_widget_content .wpaicg-chat-user-message *,
    .wpaicg_chat_widget_content .wpaicg-chat-user-message .wpaicg-chat-message,
    .wpaicg_chat_widget_content .wpaicg-chat-ai-message .wpaicg-chat-message,
    .wpaicg_chat_widget_content .wpaicg-chat-ai-message a,
    .wpaicg_chat_widget_content .wpaicg-chat-user-message a
    {
        font-size: <?php echo esc_html($wpaicg_chat_fontsize)?>px;
        color: <?php echo esc_html($wpaicg_chat_fontcolor)?>;
    }
    .wpaicg-chat-user-message{
        padding: 10px;
        background: <?php echo esc_html($wpaicg_user_bg_color)?>;
    }
    .wpaicg-chat-ai-message{
        padding: 10px;
        background: <?php echo esc_html($wpaicg_ai_bg_color)?>;
    }
    .wpaicg_chat_widget_content .wpaicg-chatbox-messages{
        padding: 0;
    }
    .wpaicg-chatbox-content ul li.wpaicg-chat-ai-message,.wpaicg-chatbox-content ul li.wpaicg-chat-user-message{
        margin-bottom: 0;
    }
    .wpaicg-chatbox .wpaicg-mic-icon{
        color: <?php echo esc_html($wpaicg_mic_color)?>;
    }
    .wpaicg-chatbox .wpaicg-mic-icon.wpaicg-recording{
        color: <?php echo esc_html($wpaicg_stop_color)?>;
    }
    .wpaicg-chatbox .wpaicg-bot-thinking{
        width: 100%;
        background-color: <?php echo esc_html($wpaicg_chat_widget['bgcolor'])?>;
    }
</style>
<div class="wpaicg-chatbox"
     data-user-bg-color="<?php echo esc_html($wpaicg_user_bg_color)?>"
     data-color="<?php echo esc_html($wpaicg_chat_fontcolor)?>"
     data-fontsize="<?php echo esc_html($wpaicg_chat_fontsize)?>"
     data-use-avatar="<?php echo esc_html($wpaicg_use_avatar)?>"
     data-user-avatar="<?php echo esc_html($wpaicg_user_avatar_url)?>"
     data-you="<?php echo esc_html($wpaicg_you)?>"
     data-ai-avatar="<?php echo esc_html($wpaicg_ai_avatar_url)?>"
     data-ai-name="<?php echo esc_html($wpaicg_ai_name)?>"
     data-ai-bg-color="<?php echo esc_html($wpaicg_ai_bg_color)?>"
     data-nonce="<?php echo esc_html(wp_create_nonce( 'wpaicg-chatbox' ))?>"
     data-post-id="<?php echo get_the_ID()?>"
     data-url="<?php echo home_url( $wp->request )?>"
     data-bot-id="<?php echo esc_html($wpaicg_bot_id)?>"
>
    <div class="wpaicg-chatbox-content">
        <ul class="wpaicg-chatbox-messages">
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
            <li class="wpaicg-chat-ai-message">
                <p>
                    <strong style="float: left"><?php echo $wpaicg_use_avatar ? '<img src="'.$wpaicg_ai_avatar_url.'" height="40" width="40">' : esc_html($wpaicg_ai_name).':' ?></strong>
                    <span class="wpaicg-chat-message">
                        <?php echo esc_html($wpaicg_welcome_message)?>
                    </span>
                </p>
            </li>
        </ul>
        <span class="wpaicg-bot-thinking"><?php echo esc_html($wpaicg_ai_thinking)?>&nbsp;<span class="wpaicg-jumping-dots"><span class="wpaicg-dot-1">.</span><span class="wpaicg-dot-2">.</span><span class="wpaicg-dot-3">.</span></span></span>
    </div>
    <div class="wpaicg-chatbox-type">
        <input type="text" class="wpaicg-chatbox-typing" placeholder="<?php echo esc_html($wpaicg_typing_placeholder)?>">
        <?php
        if($wpaicg_audio_enable):
        ?>
        <span class="wpaicg-mic-icon" data-type="widget">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M176 0C123 0 80 43 80 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM48 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H104c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H200V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>
        </span>
        <?php
        endif;
        ?>
        <span class="wpaicg-chatbox-send">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5004 11.9998H5.00043M4.91577 12.2913L2.58085 19.266C2.39742 19.8139 2.3057 20.0879 2.37152 20.2566C2.42868 20.4031 2.55144 20.5142 2.70292 20.5565C2.87736 20.6052 3.14083 20.4866 3.66776 20.2495L20.3792 12.7293C20.8936 12.4979 21.1507 12.3822 21.2302 12.2214C21.2993 12.0817 21.2993 11.9179 21.2302 11.7782C21.1507 11.6174 20.8936 11.5017 20.3792 11.2703L3.66193 3.74751C3.13659 3.51111 2.87392 3.39291 2.69966 3.4414C2.54832 3.48351 2.42556 3.59429 2.36821 3.74054C2.30216 3.90893 2.3929 4.18231 2.57437 4.72906L4.91642 11.7853C4.94759 11.8792 4.96317 11.9262 4.96933 11.9742C4.97479 12.0168 4.97473 12.0599 4.96916 12.1025C4.96289 12.1506 4.94718 12.1975 4.91577 12.2913Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
    </div>
    <?php
    if(isset($wpaicg_chat_widget['footer_text']) && !empty($wpaicg_chat_widget['footer_text'])):
    ?>
    <div class="wpaicg-chatbox-footer">
        <?php
        echo esc_html($wpaicg_chat_widget['footer_text']);
        ?>
    </div>
    <?php
    endif;
    ?>
</div>
