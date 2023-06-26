<?php
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<form class="wpaicg-help-form" data-form="compare">
    <input type="hidden" name="action" value="wpaicg_help_compare">
    <?php
    wp_nonce_field('wpaicg-ajax-action');
    ?>
    <div class="wpaicg-step wpaicg-compare-openai">
        <?php
        include __DIR__.'/openai.php';
        ?>
        <div class="wpaicg-align-center wpaicg_btn_actions" style="display: none">
            <button type="button" class="button button-primary wpaicg-help-save-compare"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-help-compare-success wpaicg-align-center" style="display: none">
        <p style="color:#187c00"><?php echo esc_html__('Congratulations!','gpt3-ai-content-generator')?></p>
        <p style="color:#187c00"><?php echo esc_html__('You are now ready to use comparison tool!','gpt3-ai-content-generator')?></p>
        <p><a href="<?php echo admin_url('admin.php?page=wpaicg_single_content&action=comparison')?>"><?php echo esc_html__('Start comparing!','gpt3-ai-content-generator')?></a></p>
        <p class="wpaicg-align-center">
            <a href="https://docs.aipower.org/docs/ai-engine/openai/gpt-models#how-to-use-the-comparison-tool" target="_blank"><?php echo esc_html__('Read Tutorial','gpt3-ai-content-generator')?></a>
        </p>
    </div>
    <div class="wpaicg-align-center wpaicg-action-message"></div>
</form>
