<?php
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<div class="wpaicg-mb-10 wpaicg-help-field wpaicg-align-center">
    <label class="wpaicg-mb-10 wpaicg-pb-10 wpaicg-fs-20"><strong><?php echo esc_html__('Enter Your OpenAI API Key','gpt3-ai-content-generator')?></strong></label><br/>
    <input class="wpaicg_openai_key" name="openai_key" type="text" value="<?php echo esc_html($wpaicg_openai->api_key)?>">
    <div class="wpaicg-flex wpaicg-space-between wpaicg-mb-10 wpaicg-fs-15">
        <a href="https://docs.aipower.org/docs/ai-engine/openai/api-key#how-to-generate-an-openai-api-key" target="_blank"><?php echo esc_html__('Watch Tutorial','gpt3-ai-content-generator')?></a>
        <a href="https://platform.openai.com/account/api-keys" target="_blank"><?php echo esc_html__('Get your API key','gpt3-ai-content-generator')?></a>
    </div>
</div>
<div class="wpaicg-align-center wpaicg-action-message"></div>
<div class="wpaicg-align-center">
    <button type="button" class="button button-primary wpaicg-validate-openai"><?php echo esc_html__('Validate','gpt3-ai-content-generator')?></button>
</div>
