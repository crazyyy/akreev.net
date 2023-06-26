<?php
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<form class="wpaicg-help-form" data-form="woocommerce">
    <input type="hidden" name="action" value="wpaicg_help_woocommerce">
    <?php
    wp_nonce_field('wpaicg-ajax-action');
    ?>
    <div class="wpaicg-step wpaicg-woocommerce-openai">
        <?php
        include __DIR__.'/openai.php';
        ?>
        <div class="wpaicg-align-center wpaicg_btn_actions" style="display: none">
            <button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-woocommerce-setting"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-woocommerce-setting" style="display: none;padding: 0 30px">
        <p class="wpaicg-align-center"><strong><?php echo esc_html__('Select your preferences','gpt3-ai-content-generator')?></strong></p>
        <table class="wpaicg-mb-10">
            <tr>
                <td><div class="wpaicg-mb-10"><?php echo esc_html__('Generate Product Title','gpt3-ai-content-generator')?></div></td>
                <td><div class="wpaicg-mb-10">&nbsp;&nbsp;&nbsp;<input checked type="checkbox" name="woocommerce[wpaicg_woo_generate_title]" value="1"></div></td>
            </tr>
            <tr>
                <td><div  class="wpaicg-mb-10"><?php echo esc_html__('Generate Product Description','gpt3-ai-content-generator')?></div></td>
                <td><div class="wpaicg-mb-10">&nbsp;&nbsp;&nbsp;<input checked type="checkbox" name="woocommerce[wpaicg_woo_generate_description]" value="1"></div></td>
            </tr>
            <tr>
                <td><div class="wpaicg-mb-10"><?php echo esc_html__('Generate Product Short Description','gpt3-ai-content-generator')?></div></td>
                <td><div class="wpaicg-mb-10">&nbsp;&nbsp;&nbsp;<input checked type="checkbox" name="woocommerce[wpaicg_woo_generate_short]" value="1"></div></td>
            </tr>
            <tr>
                <td><div class="wpaicg-mb-10"><?php echo esc_html__('Generate Meta Description','gpt3-ai-content-generator')?></div></td>
                <td><div class="wpaicg-mb-10">&nbsp;&nbsp;&nbsp;<input checked type="checkbox" name="woocommerce[wpaicg_woo_meta_description]" value="1"></div></td>
            </tr>
            <tr>
                <td><div class="wpaicg-mb-10"><?php echo esc_html__('Generate Product Tags','gpt3-ai-content-generator')?></div></td>
                <td><div class="wpaicg-mb-10">&nbsp;&nbsp;&nbsp;<input checked type="checkbox" name="woocommerce[wpaicg_woo_generate_tags]" value="1"></div></td>
            </tr>
        </table>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-woocommerce-openai"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-woocommerce-adjust"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-woocommerce-adjust" style="display: none;padding: 0 30px">
        <div class="wpaicg-mb-10">
            <p class="wpaicg-align-center"><strong><?php echo esc_html__('Adjust Your Prompt','gpt3-ai-content-generator')?></strong></p>
            <p>
                <?php echo esc_html__('Do you want to use your own prompt?','gpt3-ai-content-generator')?>
                &nbsp;&nbsp;&nbsp;<input class="wpaicg-help-woocommerce-custom" type="checkbox" name="woocommerce[wpaicg_woo_custom_prompt]" value="1">
            </p>
        </div>
        <div class="wpaicg-help-woocommerce-custom-prompt" style="display: none">
            <div class="wpaicg-help-field wpaicg-mb-10">
                <label><strong><?php echo esc_html__('Title Prompt','gpt3-ai-content-generator')?></strong></label><br>
                <textarea name="woocommerce[wpaicg_woo_custom_prompt_title]" rows="6">Compose an SEO-optimized title in English for the following product: %s. Ensure it is engaging, concise, and includes relevant keywords to maximize its visibility on search engines..</textarea>
            </div>
            <div class="wpaicg-help-field wpaicg-mb-10">
                <label><strong><?php echo esc_html__('Description Prompt','gpt3-ai-content-generator')?></strong></label><br>
                <textarea name="woocommerce[wpaicg_woo_custom_prompt_description]" rows="6">Craft a comprehensive and engaging product description in English for: %s. Include specific details, features, and benefits, as well as the value it offers to the customer, thereby creating a compelling narrative around the product.</textarea>
            </div>
            <div class="wpaicg-help-field wpaicg-mb-10">
                <label><strong><?php echo esc_html__('Short Description Prompt','gpt3-ai-content-generator')?></strong></label><br>
                <textarea name="woocommerce[wpaicg_woo_custom_prompt_short]" rows="6">Provide a compelling and concise summary in English for the following product: %s, highlighting its key features, benefits, and unique selling points.</textarea>
            </div>
            <div class="wpaicg-help-field wpaicg-mb-10">
                <label><strong><?php echo esc_html__('Meta Description Prompt','gpt3-ai-content-generator')?></strong></label><br>
                <textarea name="woocommerce[wpaicg_woo_custom_prompt_meta]" rows="6">Craft a compelling and concise meta description in English for: %s. Aim to highlight its key features and benefits within a limit of 155 characters, while incorporating relevant keywords for SEO effectiveness.</textarea>
            </div>
            <div class="wpaicg-help-field wpaicg-mb-10">
                <label><strong><?php echo esc_html__('Tags Prompt','gpt3-ai-content-generator')?></strong></label><br>
                <textarea name="woocommerce[wpaicg_woo_custom_prompt_keywords]" rows="6">Propose a set of relevant keywords in English for the following product: %s. The keywords should be directly related to the product, enhancing its discoverability. Please present these keywords in a comma-separated format, avoiding the use of symbols such as -, #, etc.</textarea>
            </div>
        </div>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-woocommerce-setting"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-help-save-woocommerce"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-help-woocommerce-success wpaicg-align-center" style="display: none">
        <p style="color:#187c00"><?php echo esc_html__('Congratulations!','gpt3-ai-content-generator')?></p>
        <p style="color:#187c00"><?php echo esc_html__('You are now ready to optimize your products!','gpt3-ai-content-generator')?></p>
        <p><a href="<?php echo admin_url('edit.php?post_type=product')?>"><?php echo esc_html__('Go to products page!','gpt3-ai-content-generator')?></a></p>
        <p class="wpaicg-align-center">
            <a href="https://docs.aipower.org/docs/woocommerce" target="_blank"><?php echo esc_html__('Read Tutorial','gpt3-ai-content-generator')?></a>
        </p>
    </div>
    <div class="wpaicg-align-center wpaicg-action-message"></div>
</form>
