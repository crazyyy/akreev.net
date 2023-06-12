<?php
if ( ! defined( 'ABSPATH' ) ) exit;
if(isset($_POST['save_rss'])){
    check_admin_referer('wpaicg_setting_save');
    $wpaicg_rss_feeds = array();
    if(isset($_POST['wpaicg_rss_feeds'])){
        $new_wpaicg_rss_feeds = \WPAICG\wpaicg_util_core()->sanitize_text_or_array_field($_POST['wpaicg_rss_feeds']);
        foreach($new_wpaicg_rss_feeds as $new_wpaicg_rss_feed){
            if(isset($new_wpaicg_rss_feed['url']) && !empty($new_wpaicg_rss_feed['url'])){
                $wpaicg_rss_feeds[] = $new_wpaicg_rss_feed;
            }
        }
    }
    update_option('wpaicg_rss_feeds',$wpaicg_rss_feeds);
}
$wpaicg_rss_last_run = get_option('wpaicg_rss_last_run','');
$wpaicg_all_categories = get_terms(array(
    'taxonomy' => 'category',
    'hide_empty' => false
));
$wpaicg_rss_feeds = get_option('wpaicg_rss_feeds', []);
include __DIR__.'/wpaicg_rss_alert.php';
$wpaicg_cron_rss_added = get_option('_wpaicg_cron_rss_added','');
$wpaicg_xml_enabled = extension_loaded('xml');
if(!$wpaicg_xml_enabled){
    $wpaicg_cron_rss_added = '';
}
?>
<form action="" method="post" class="wpaicg_rss_form">
    <?php
    wp_nonce_field('wpaicg_setting_save');
    ?>
<div class="wpaicg-d-flex wpaicg-align-items-center mb-5">
    <strong style="padding: 5px;width: 20px;">&nbsp;</strong>
    <div style="width: 360px"><strong><?php echo esc_html__('RSS URL','gpt3-ai-content-generator')?></strong></div>
    <div style="width: 120px"><strong><?php echo esc_html__('Category','gpt3-ai-content-generator')?></strong></div>
    <div style="width: 120px"><strong><?php echo esc_html__('Author','gpt3-ai-content-generator')?></strong></div>
    <div style="padding-left: 20px;"><strong><?php echo esc_html__('Status','gpt3-ai-content-generator')?></strong></div>
</div>
    <?php
    for($i=0;$i<$wpaicg_number_title; $i++){
    ?>
        <div class="wpaicg-d-flex wpaicg-align-items-center wpaicg-mb-10">
            <strong style="padding: 5px;width: 20px;"><?php echo esc_attr($i+1);?></strong>
            <input<?php echo empty($wpaicg_cron_rss_added) ? ' disabled':''?> value="<?php echo isset($wpaicg_rss_feeds[$i]['url']) ? esc_html($wpaicg_rss_feeds[$i]['url']) : '' ?>" type="text" name="wpaicg_rss_feeds[<?php echo esc_html($i);?>][url]" class="regular-text wpaicg_rss_url">
            <select<?php echo empty($wpaicg_cron_rss_added) ? ' disabled':''?> name="wpaicg_rss_feeds[<?php echo esc_html($i);?>][category]" style="width: 120px">
                <option value="">Category</option>
                <?php
                foreach($wpaicg_all_categories as $wpaicg_all_category){
                    echo '<option'.(isset($wpaicg_rss_feeds[$i]['category']) && $wpaicg_rss_feeds[$i]['category'] == $wpaicg_all_category->term_id ? ' selected':'').' value="'.esc_html($wpaicg_all_category->term_id).'">'.esc_html($wpaicg_all_category->name).'</option>';
                }
                ?>
            </select>
            <select<?php echo empty($wpaicg_cron_rss_added) ? ' disabled':''?> name="wpaicg_rss_feeds[<?php echo esc_html($i);?>][author]" style="width: 120px">
                <?php
                foreach(get_users() as $user){
                    echo '<option'.((isset($wpaicg_rss_feeds[$i]['author']) && $wpaicg_rss_feeds[$i]['author'] == $user->ID) || (!isset($wpaicg_rss_feeds[$i]['author']) && $user->ID == get_current_user_id()) ? ' selected':'').' value="'.esc_html($user->ID).'">'.esc_html($user->display_name).'</option>';
                }
                ?>
            </select>
            <div style="padding-left: 20px;">
                <label><input<?php echo empty($wpaicg_cron_rss_added) ? ' disabled':''?><?php echo !isset($wpaicg_rss_feeds[$i]['status']) || $wpaicg_rss_feeds[$i]['status'] == 'draft' ? ' checked':'' ?> type="radio" name="wpaicg_rss_feeds[<?php echo esc_html($i);?>][status]" value="draft"> Draft</label>
                <label><input<?php echo empty($wpaicg_cron_rss_added) ? ' disabled':''?><?php echo isset($wpaicg_rss_feeds[$i]['status']) && $wpaicg_rss_feeds[$i]['status'] == 'publish' ? ' checked':'';?> type="radio" name="wpaicg_rss_feeds[<?php echo esc_html($i);?>][status]" value="publish"> Publish</label>
            </div>
        </div>
    <?php
    }
    ?>
    <div class="wpaicg-d-flex wpaicg-align-items-center mb-5">
        <strong style="padding: 5px;width: 20px;">&nbsp;</strong>
        <button class="button button-primary" name="save_rss"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
    </div>
    <?php
    if(!\WPAICG\wpaicg_util_core()->wpaicg_is_pro()){
        ?>
    <div class="wpaicg-d-flex wpaicg-align-items-center mb-5">
        <strong style="padding: 5px;width: 20px;">&nbsp;</strong>
        <a href="<?php echo esc_url(admin_url('admin.php?page=wpaicg-pricing'))?>"><img src="<?php echo esc_url(WPAICG_PLUGIN_URL)?>admin/images/pro_img.png"></a>
    </div>
        <?php
    }
    ?>
</form>
<script>
    jQuery(document).ready(function ($){
        function wpaicgValidUrl(string) {
            try {
                new URL(string);
                return true;
            } catch (err) {
                return false;
            }
        }
        $('.wpaicg_rss_form').on('submit', function (e){
            let has_error = false;
            $('.wpaicg_rss_url').each(function (idx, item){
                let url = $(item).val();
                if(url !== ''){
                    if(!wpaicgValidUrl(url)){
                        has_error = '<?php echo esc_html__('Please insert valid URL','gpt3-ai-content-generator')?>';
                    }
                }
            });
            if(has_error){
                e.preventDefault();
                alert(has_error);
                return false;
            }
        })
    })
</script>
