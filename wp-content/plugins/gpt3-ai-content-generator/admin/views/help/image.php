<?php
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<form class="wpaicg-help-form" data-form="image">
    <input type="hidden" name="action" value="wpaicg_help_image">
    <?php
    wp_nonce_field('wpaicg-ajax-action');
    ?>
    <div class="wpaicg-step wpaicg-image-openai">
        <?php
        include __DIR__.'/openai.php';
        ?>
        <div class="wpaicg-align-center wpaicg_btn_actions" style="display: none">
            <button type="button" class="button button-primary wpaicg-help-save-image"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-help-image-success wpaicg-align-center" style="display: none">
        <p style="color:#187c00"><?php echo esc_html__('Congratulations!','gpt3-ai-content-generator')?></p>
        <p style="color:#187c00"><?php echo esc_html__('You are now ready to generate images!','gpt3-ai-content-generator')?></p>
        <p><a href="<?php echo admin_url('admin.php?page=wpaicg_image_generator')?>"><?php echo esc_html__('Go to Image Generator and start generating!','gpt3-ai-content-generator')?></a></p>
        <p style="color:#187c00"><?php echo esc_html__('Alternatively you can add below shortcode to your website and let your users generate images.','gpt3-ai-content-generator')?></p>
        <p><strong style="color:#187c00">[wpcgai_img]</strong></p>
        <p class="wpaicg-align-center">
            <a href="https://docs.aipower.org/docs/image-generator" target="_blank"><?php echo esc_html__('Read Tutorial','gpt3-ai-content-generator')?></a>
        </p>
    </div>
    <div class="wpaicg-align-center wpaicg-action-message"></div>
</form>
