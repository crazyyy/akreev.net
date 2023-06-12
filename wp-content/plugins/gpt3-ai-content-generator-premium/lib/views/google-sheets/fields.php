<?php
if ( ! defined( 'ABSPATH' ) ) exit;
$wpaicg_google_sheets_url = get_option('wpaicg_google_sheets_url','');
$wpaicg_google_sheets_status = get_option('wpaicg_google_sheets_status','');
$wpaicg_google_sheets_cron = get_option('wpaicg_google_sheets_cron','yes');
$wpaicg_cron_sheets_added = get_option('wpaicg_cron_sheets_added','');
$wpaicg_google_sheets_limitation = get_option('wpaicg_google_sheets_limitation',60);
?>
<tr>
    <td colspan="2">
        <p><?php echo esc_html__('Download sample file','gpt3-ai-content-generator')?>: <a href="https://docs.google.com/spreadsheets/d/1jDFT2kytGW_Qq1L4VSOW4z6OWvk8rbzpNnZt85zPo_4/edit" target="_blank"><?php echo esc_html__('sample file','gpt3-ai-content-generator')?></a></p>
        <p><?php echo esc_html__('Read tutorial','gpt3-ai-content-generator')?> <a href="https://aipower.org/?p=3624" target="_blank"><?php echo esc_html__('here','gpt3-ai-content-generator')?></a></p>
    </td>
</tr>
<tr>
    <th><?php echo esc_html__('Re-upload Credentials','gpt3-ai-content-generator')?></th>
    <td><input type="file" name="file"></td>
</tr>
<tr>
    <th><?php echo esc_html__('Google Sheet URL','gpt3-ai-content-generator')?></th>
    <td>
        <input<?php echo empty($wpaicg_cron_sheets_added) ? ' disabled':''?> class="regular-text wpaicg_google_sheets_url" type="text" name="url" value="<?php echo isset($wpaicg_google_sheets_url) ? esc_html($wpaicg_google_sheets_url) : ''?>">
        <?php
        if($wpaicg_google_sheets_status == 'accessible'):
            ?>
            <span style="display: inline-block;width: 20px;height: 20px;background: #24A148;position: relative;top: 5px;border-radius: 50%;"></span> <?php echo esc_html__('File is accessible!','gpt3-ai-content-generator')?>
            <a href="<?php echo esc_url($wpaicg_google_sheets_url); ?>" target="_blank" style="margin-left: 10px;"><?php echo esc_html__('Open','gpt3-ai-content-generator')?></a>
        <?php
        else:
            ?>
            <span style="display: inline-block;width: 20px;height: 20px;background: #F44337;position: relative;top: 5px;border-radius: 50%;"></span> <?php echo esc_html__('The file cannot be accessed. Check permissions or url.','gpt3-ai-content-generator')?>
        <?php
        endif;
        ?>
        <span style="display: block;font-style: italic;font-size: 12px;margin-top: 2px"><?php echo esc_html__('Example: https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxx/edit','gpt3-ai-content-generator')?></span>
    </td>
</tr>
<tr>
    <th><?php echo esc_html__('Row Update per Minute','gpt3-ai-content-generator')?></th>
    <td>
        <input type="number" value="<?php echo esc_html($wpaicg_google_sheets_limitation)?>" name="limitation">
        <span style="display: block;font-style: italic;font-size: 12px;margin-top: 2px"><?php echo esc_html__('Default: 60 - Do not change this value unless you have a special quota from','gpt3-ai-content-generator')?> <a href="https://cloud.google.com/docs/quota#requesting_higher_quota" target="_blank">Google</a></span>
    </td>
</tr>
<tr>
    <th><?php echo esc_html__('Constant Crawling','gpt3-ai-content-generator')?></th>
    <td>
        <select<?php echo empty($wpaicg_cron_sheets_added) ? ' disabled':''?> name="status">
            <option<?php echo isset($wpaicg_google_sheets_cron) && $wpaicg_google_sheets_cron == 'yes' ? ' selected':''?> value="yes"><?php echo esc_html__('Yes','gpt3-ai-content-generator')?></option>
            <option<?php echo isset($wpaicg_google_sheets_cron) && $wpaicg_google_sheets_cron == 'no' ? ' selected':''?> value="no"><?php echo esc_html__('No','gpt3-ai-content-generator')?></option>
        </select>
    </td>
</tr>
<tr>
    <th></th>
    <td><button<?php echo empty($wpaicg_cron_sheets_added) ? ' disabled':''?> class="button button-primary wpaicg_sheets_save"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button></td>
</tr>
