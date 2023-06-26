<?php
if ( ! defined( 'ABSPATH' ) ) exit;
$wpaicg_chat_language = 'en';
?>
<form class="wpaicg-help-form" data-form="chatgpt">
    <input type="hidden" name="action" value="wpaicg_help_chatgpt">
    <?php
    wp_nonce_field('wpaicg-ajax-action');
    ?>
    <div class="wpaicg-step wpaicg-chatgpt-openai">
        <?php
        include __DIR__.'/openai.php';
        ?>
        <div class="wpaicg-align-center wpaicg_btn_actions" style="display: none">
            <button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-chatgpt-language"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-chatgpt-language" style="display: none">
        <div class="wpaicg-mb-10 wpaicg-help-field wpaicg-align-center">
            <label class="wpaicg-mb-10"><strong><?php echo esc_html__('Choose Bot Language','gpt3-ai-content-generator')?></strong></label><br/>
            <select name="chatgpt[language]">
                <option value="en" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'en' ? 'selected' : '' ) ;
                ?>>English</option>
                <option value="af" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'af' ? 'selected' : '' ) ;
                ?>>Afrikaans</option>
                <option value="ar" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ar' ? 'selected' : '' ) ;
                ?>>Arabic</option>
                <option value="bg" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'bg' ? 'selected' : '' ) ;
                ?>>Bulgarian</option>
                <option value="zh" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'zh' ? 'selected' : '' ) ;
                ?>>Chinese</option>
                <option value="hr" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'hr' ? 'selected' : '' ) ;
                ?>>Croatian</option>
                <option value="cs" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'cs' ? 'selected' : '' ) ;
                ?>>Czech</option>
                <option value="da" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'da' ? 'selected' : '' ) ;
                ?>>Danish</option>
                <option value="nl" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'nl' ? 'selected' : '' ) ;
                ?>>Dutch</option>
                <option value="et" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'et' ? 'selected' : '' ) ;
                ?>>Estonian</option>
                <option value="fil" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'fil' ? 'selected' : '' ) ;
                ?>>Filipino</option>
                <option value="fi" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'fi' ? 'selected' : '' ) ;
                ?>>Finnish</option>
                <option value="fr" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'fr' ? 'selected' : '' ) ;
                ?>>French</option>
                <option value="de" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'de' ? 'selected' : '' ) ;
                ?>>German</option>
                <option value="el" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'el' ? 'selected' : '' ) ;
                ?>>Greek</option>
                <option value="he" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'he' ? 'selected' : '' ) ;
                ?>>Hebrew</option>
                <option value="hi" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'hi' ? 'selected' : '' ) ;
                ?>>Hindi</option>
                <option value="hu" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'hu' ? 'selected' : '' ) ;
                ?>>Hungarian</option>
                <option value="id" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'id' ? 'selected' : '' ) ;
                ?>>Indonesian</option>
                <option value="it" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'it' ? 'selected' : '' ) ;
                ?>>Italian</option>
                <option value="ja" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ja' ? 'selected' : '' ) ;
                ?>>Japanese</option>
                <option value="ko" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ko' ? 'selected' : '' ) ;
                ?>>Korean</option>
                <option value="lv" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'lv' ? 'selected' : '' ) ;
                ?>>Latvian</option>
                <option value="lt" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'lt' ? 'selected' : '' ) ;
                ?>>Lithuanian</option>
                <option value="ms" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ms' ? 'selected' : '' ) ;
                ?>>Malay</option>
                <option value="no" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'no' ? 'selected' : '' ) ;
                ?>>Norwegian</option>
                <option value="fa" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'fa' ? 'selected' : '' ) ;
                ?>>Persian</option>
                <option value="pl" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'pl' ? 'selected' : '' ) ;
                ?>>Polish</option>
                <option value="pt" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'pt' ? 'selected' : '' ) ;
                ?>>Portuguese</option>
                <option value="ro" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ro' ? 'selected' : '' ) ;
                ?>>Romanian</option>
                <option value="ru" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'ru' ? 'selected' : '' ) ;
                ?>>Russian</option>
                <option value="sr" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'sr' ? 'selected' : '' ) ;
                ?>>Serbian</option>
                <option value="sk" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'sk' ? 'selected' : '' ) ;
                ?>>Slovak</option>
                <option value="sl" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'sl' ? 'selected' : '' ) ;
                ?>>Slovenian</option>
                <option value="sv" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'sv' ? 'selected' : '' ) ;
                ?>>Swedish</option>
                <option value="es" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'es' ? 'selected' : '' ) ;
                ?>>Spanish</option>
                <option value="th" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'th' ? 'selected' : '' ) ;
                ?>>Thai</option>
                <option value="tr" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'tr' ? 'selected' : '' ) ;
                ?>>Turkish</option>
                <option value="uk" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'uk' ? 'selected' : '' ) ;
                ?>>Ukrainian</option>
                <option value="vi" <?php
                echo  ( esc_html( $wpaicg_chat_language ) == 'vi' ? 'selected' : '' ) ;
                ?>>Vietnamese</option>
            </select>
            <p class="wpaicg_chat_instruction">
                <?php echo esc_html__("Can't find your language? No worries. Just select English as the default. Then, in the next step, you can give your bot special instructions to use a different language.",'gpt3-ai-content-generator')?>
            </p>
        </div>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-chatgpt-openai"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-chatgpt-addition"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-chatgpt-addition" style="display: none">
        <?php
        $wpaicg_additions_json = file_get_contents(WPAICG_PLUGIN_DIR.'admin/chat/context.json');
        $wpaicg_additions = json_decode($wpaicg_additions_json, true);
        ?>
        <div class="wpaicg-mb-10 wpaicg-help-field wpaicg-align-center">
            <label><strong><?php echo esc_html__('Give instructions to your bot','gpt3-ai-content-generator')?></strong></label><br/>
            <p class="wpaicg_chat_instruction">
                <?php echo esc_html__("Tell your bot what to do. Simply write your instructions in the box or select a template. It's just like giving directions to a friend!",'gpt3-ai-content-generator')?>
            </p>
            <select class="wpaicg_chat_addition_template">
                <option value=""><?php echo esc_html__('Select Template','gpt3-ai-content-generator')?></option>
                <?php
                foreach($wpaicg_additions as $key=>$wpaicg_addition){
                    echo '<option value="'.esc_html($wpaicg_addition).'">'.esc_html($key).'</option>';
                }
                ?>
            </select>
        </div>
        <div class="wpaicg-mb-10 wpaicg-help-field wpaicg-align-center">
            <textarea class="" name="chatgpt[chat_addition_text]" rows="8"><?php echo esc_html__('You are a helpful AI assistant..')?></textarea>
        </div>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-chatgpt-language"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-chatgpt-type"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-chatgpt-type" style="display: none">
        <div class="wpaicg-mb-10 wpaicg-help-field wpaicg-align-center">
            <label class="wpaicg-mb-10"><strong><?php echo esc_html__('Do you want to add shortcode or widget','gpt3-ai-content-generator')?></strong></label><br/>
            <p class="wpaicg_chat_instruction">
                <?php echo esc_html__("In this step, you decide if you want to use a shortcut or a widget for your bot. A shortcut is a quick way to use the bot. A widget is a small icon that appears on your screen. Choose the one that you find easier.",'gpt3-ai-content-generator')?>
            </p>
            <p>
                <label><input name="chatgpt[type]" value="shortcode" checked type="radio">&nbsp;<?php echo esc_html__('Shortcode','gpt3-ai-content-generator')?></label>
                &nbsp;&nbsp;<label><input name="chatgpt[type]" value="widget" type="radio">&nbsp;<?php echo esc_html__('Widget','gpt3-ai-content-generator')?></label>
            </p>
        </div>
        <div class="wpaicg-align-center wpaicg-action-message"></div>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-chatgpt-addition"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-help-save-chatgpt" data-step="wpaicg-chatgpt-success-shortcode"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-chatgpt-position" style="display: none">
        <div class="wpaicg-mb-10 wpaicg-help-field wpaicg-align-center">
            <label class="wpaicg-mb-10"><strong><?php echo esc_html__('Choose Your Widget Location','gpt3-ai-content-generator')?></strong></label>
        </div>
        <p class="wpaicg_chat_instruction">
            <?php echo esc_html__("Decide where you want the widget to appear on your site. You can either place it on your entire website or just on specific pages. Additionally, choose if you want it to be positioned at the bottom left or bottom right.",'gpt3-ai-content-generator')?>
        </p>
        <div class="wpaicg-mb-10 wpaicg-align-center">
            <label><input name="chatgpt[widget]" value="whole" checked type="radio">&nbsp;<?php echo esc_html__('Whole website','gpt3-ai-content-generator')?></label>
            &nbsp;&nbsp;<label><input name="chatgpt[widget]" value="page" type="radio">&nbsp;<?php echo esc_html__('Specific pages','gpt3-ai-content-generator')?></label>
        </div>
        <p class="wpaicg-help-field wpaicg-chatgpt-post-id" style="display: none">
            <label class="wpaicg-mb-10"><strong><?php echo esc_html__('Page/Post ID','gpt3-ai-content-generator')?></strong></label>
            <input type="text" name="chatgpt[pages]">
        </p>
        <div class="wpaicg-mb-10 wpaicg-align-center" style="margin-top: 20px">
            <label><strong><?php echo esc_html__('Position of Widget','gpt3-ai-content-generator')?></strong></label><br>
            <label><input name="chatgpt[position]" value="left" checked type="radio">&nbsp;<?php echo esc_html__('Bottom Left','gpt3-ai-content-generator')?></label>
            &nbsp;&nbsp;<label><input name="chatgpt[position]" value="right" type="radio">&nbsp;<?php echo esc_html__('Bottom Right','gpt3-ai-content-generator')?></label>
        </div>
        <div class="wpaicg-align-center wpaicg-action-message"></div>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-chatgpt-type"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-help-save-chatgpt" data-step="wpaicg-chatgpt-success-widget"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-chatgpt-success-shortcode wpaicg-align-center" style="display: none">
        <p style="color:#187c00"><?php echo esc_html__('Congratulations! Your bot is ready!','gpt3-ai-content-generator')?></p>
        <p style="color:#187c00"><?php echo esc_html__('Copy and paste below code in your page','gpt3-ai-content-generator')?></p>
        <p><strong style="color:#187c00">[wpaicg_chatgpt]</strong></p>
        <p class="wpaicg-align-center">
            <a href="https://docs.aipower.org/docs/ChatGPT/chatgpt-wordpress" target="_blank"><?php echo esc_html__('Read Tutorial','gpt3-ai-content-generator')?></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="<?php echo admin_url('admin.php?page=wpaicg_chatgpt&action=bots')?>"><?php echo esc_html__('Go to Settings','gpt3-ai-content-generator')?></a>
        </p>
    </div>
    <div class="wpaicg-step wpaicg-chatgpt-success-widget wpaicg-align-center" style="display: none">
        <p style="color:#187c00"><?php echo esc_html__('Congratulations! Your bot is ready!','gpt3-ai-content-generator')?></p>
        <p class="wpaicg-align-center">
           <a href="https://docs.aipower.org/docs/ChatGPT/chatgpt-wordpress" target="_blank"><?php echo esc_html__('Read Tutorial','gpt3-ai-content-generator')?></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="<?php echo admin_url('admin.php?page=wpaicg_chatgpt&action=bots')?>"><?php echo esc_html__('Go to Settings','gpt3-ai-content-generator')?></a>
        </p>
    </div>
    <div class="wpaicg-align-center wpaicg-action-message"></div>
</form>

