<?php
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<form class="wpaicg-help-form" data-form="assistant">
    <input type="hidden" name="action" value="wpaicg_help_assistant">
    <?php
    wp_nonce_field('wpaicg-ajax-action');
    ?>
    <div class="wpaicg-step wpaicg-assistant-openai">
        <?php
        include __DIR__.'/openai.php';
        ?>
        <div class="wpaicg-align-center wpaicg_btn_actions" style="display: none">
            <button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-assistant-setting"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-assistant-setting" style="display: none">
        <p class="wpaicg-align-center"><strong><?php echo esc_html__('Customize Prompts','gpt3-ai-content-generator')?></strong></p>
        <div class="wpaicg-help-assistant-menus">
            <div class="wpaicg-help-assistant-menu">
                <span>&times;</span>
                <input type="text" name="assistants[0][name]" value="<?php echo esc_html__('Write paragraph about this','gpt3-ai-content-generator')?>">
                <textarea name="assistants[0][prompt]">Write a paragraph about this: [text]</textarea>
                <small><?php echo sprintf(esc_html__('Ensure %s is included in your prompt.','gpt3-ai-content-generator'),'<code>[text]</code>')?></small>
            </div>
            <div class="wpaicg-help-assistant-menu">
                <span>&times;</span>
                <input placeholder="<?php echo esc_html__('Menu Name','gpt3-ai-content-generator')?>" type="text" name="assistants[1][name]" value="<?php echo esc_html__('Summarize','gpt3-ai-content-generator')?>">
                <textarea placeholder="<?php echo esc_html__('Enter your prompt','gpt3-ai-content-generator')?>" name="assistants[1][prompt]">Summarize this: [text]</textarea>
                <small><?php echo sprintf(esc_html__('Ensure %s is included in your prompt.','gpt3-ai-content-generator'),'<code>[text]</code>')?></small>
            </div>
        </div>
        <button type="button" class="button button-primary wpaicg-help-assistant-add-more"><?php echo esc_html__('Add More','gpt3-ai-content-generator')?></button>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-assistant-openai"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-help-save-assistant"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-help-assistant-success wpaicg-align-center" style="display: none">
        <p style="color:#187c00"><?php echo esc_html__('Congratulations!','gpt3-ai-content-generator')?></p>
        <p style="color:#187c00"><?php echo esc_html__('You are now ready to use AI Assistant!','gpt3-ai-content-generator')?></p>
        <p style="color:#187c00"><?php echo esc_html__('Open your classic editor or Gutenberg and look for AI Power logo!','gpt3-ai-content-generator')?></p>
        <p class="wpaicg-align-center">
            <a href="https://docs.aipower.org/docs/content-writer/ai-assistant" target="_blank"><?php echo esc_html__('Read Tutorial','gpt3-ai-content-generator')?></a>
        </p>
    </div>
    <div class="wpaicg-align-center wpaicg-action-message"></div>
</form>
