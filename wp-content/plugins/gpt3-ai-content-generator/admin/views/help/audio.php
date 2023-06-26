<?php
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<form class="wpaicg-help-form" data-form="audio">
    <input type="hidden" name="action" value="wpaicg_help_audio">
    <?php
    wp_nonce_field('wpaicg-ajax-action');
    ?>
    <div class="wpaicg-step wpaicg-audio-openai">
        <?php
        include __DIR__.'/openai.php';
        ?>
        <div class="wpaicg-align-center wpaicg_btn_actions" style="display: none">
            <button type="button" class="button button-primary wpaicg-btn-next" data-step="wpaicg-audio-setting"><?php echo esc_html__('Next','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-audio-setting" style="display: none">
        <table class="wpaicg-mb-10">
            <tr>
                <td><div class="wpaicg-mb-10"><?php echo esc_html__('What do you want to do','gpt3-ai-content-generator')?></div></td>
                <td>
                    <div class="wpaicg-mb-10">
                        <select name="purpose">
                            <option value="transcriptions"><?php echo esc_html__('Transcription','gpt3-ai-content-generator')?></option>
                            <option value="translations"><?php echo esc_html__('Translation','gpt3-ai-content-generator')?></option>
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td><div class="wpaicg-mb-10"><?php echo esc_html__('Output Format','gpt3-ai-content-generator')?></div></td>
                <td>
                    <div class="wpaicg-mb-10">
                        <select name="response">
                            <option value="post">post</option>
                            <option value="page">page</option>
                            <option value="json">json</option>
                            <option value="text">text</option>
                            <option value="srt">srt</option>
                            <option value="verbose_json">verbose_json</option>
                            <option value="vtt">vtt</option>
                        </select>
                    </div>
                </td>
            </tr>
        </table>
        <div class="wpaicg-align-center wpaicg_btn_actions">
            <button type="button" class="button button-primary wpaicg-btn-prev" data-step="wpaicg-audio-openai"><?php echo esc_html__('Previous','gpt3-ai-content-generator')?></button>
            &nbsp;<button type="button" class="button button-primary wpaicg-help-save-audio"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
        </div>
    </div>
    <div class="wpaicg-step wpaicg-help-audio-success wpaicg-align-center" style="display: none">
        <p style="color:#187c00"><?php echo esc_html__('Congratulations!','gpt3-ai-content-generator')?></p>
        <p style="color:#187c00"><?php echo esc_html__('You are now ready to use Audio Converter','gpt3-ai-content-generator')?></p>
        <p><a href="<?php echo admin_url('admin.php?page=wpaicg_audio')?>"><?php echo esc_html__('Start converting!','gpt3-ai-content-generator')?></a></p>
        <p class="wpaicg-align-center">
            <a href="https://docs.aipower.org/docs/audio-converter" target="_blank"><?php echo esc_html__('Read Tutorial','gpt3-ai-content-generator')?></a>
        </p>
    </div>
    <div class="wpaicg-align-center wpaicg-action-message"></div>
</form>
