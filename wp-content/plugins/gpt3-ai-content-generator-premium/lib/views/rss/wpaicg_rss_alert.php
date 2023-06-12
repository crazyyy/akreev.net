<?php
if ( ! defined( 'ABSPATH' ) ) exit;

$wpaicg_xml_enabled = extension_loaded('xml');
if(!$wpaicg_xml_enabled){
    ?>
    <div class="wpaicg-alert">
        <p style="color: #f00">
            <?php echo esc_html__('Please enable XML php extension','gpt3-ai-content-generator')?>
        </p>
    </div>
    <?php
}
?>
<?php
$wpaicg_crojob_rss_last_time = get_option('_wpaicg_crojob_rss_last_time','');
$wpaicg_cron_rss_added = get_option('_wpaicg_cron_rss_added','');
if (isset($_POST['wpaicg_delete_rss_running']) && check_admin_referer('wpaicg_delete_rss_running', 'wpaicg_delete_running_nonce')) {
    update_option('wpaicg_crojob_sheets_last_time', time());
    @unlink(WPAICG_PLUGIN_DIR.'wpaicg_rss.txt');
    echo '<script>window.location.reload()</script>';
    exit;
}
if(!empty($wpaicg_crojob_rss_last_time)){
    $wpaicg_timestamp_diff = time() - $wpaicg_crojob_rss_last_time;
    if($wpaicg_timestamp_diff > 600){
        ?>
        <div class="wpaicg-alert">
            <p style="color: #f00">
                <?php echo esc_html__('You can use the button below to restart your queue if it is stuck.','gpt3-ai-content-generator')?>
            </p>
            <form action="" method="post">
                <?php wp_nonce_field('wpaicg_delete_rss_running', 'wpaicg_delete_running_nonce'); ?>
                <button name="wpaicg_delete_rss_running" class="button button-primary"><?php echo esc_html__('Force Refresh','gpt3-ai-content-generator')?></button>
            </form>
        </div>
        <?php
    }
}
?>
<div class="wpaicg-alert">
    <?php
    if(empty($wpaicg_cron_rss_added)):
        ?>
        <h4><?php echo esc_html__('Important','gpt3-ai-content-generator')?></h4>
        <p>
            <?php sprintf(esc_html__('You must configure a %sCron Job%s on your hosting/server. If this is not done, the Index Builder feature will not be available for use.','gpt3-ai-content-generator'),'<a href="https://www.hostgator.com/help/article/what-are-cron-jobs" target="_blank">','</a>')?>
        </p>
    <?php
    endif;
    ?>
    <?php
    if(empty($wpaicg_cron_rss_added)){
        echo '<p style="color: #f00"><strong>'.esc_html__('It appears that you have not activated Cron Job on your server, which means you will not be able to use the Bulk Editor feature. If you have already activated Cron Job, please allow a few minutes to pass before refreshing the page.','gpt3-ai-content-generator').'</strong></p>';
    }
    else{
        echo '<p style="color: #10922c"><strong>'.esc_html__('Great! It looks like your Cron Job is running properly. You should now be able to use the Bulk Editor.','gpt3-ai-content-generator').'</strong></p>';
    }
    ?>
    <?php
    if(!empty($wpaicg_crojob_rss_last_time)):
        $wpaicg_current_timestamp = time();

        $wpaicg_time_diff = human_time_diff( $wpaicg_crojob_rss_last_time, $wpaicg_current_timestamp );

        if ( strpos( $wpaicg_time_diff, 'hour' ) !== false ) {
            $wpaicg_output = str_replace( 'hours', esc_html__('hours','gpt3-ai-content-generator'), $wpaicg_time_diff );
            $wpaicg_output = str_replace( 'hour', esc_html__('hour','gpt3-ai-content-generator'), $wpaicg_time_diff );
        } elseif ( strpos( $wpaicg_time_diff, 'day' ) !== false ) {
            $wpaicg_output = str_replace( 'days', esc_html__('days','gpt3-ai-content-generator'), $wpaicg_time_diff );
            $wpaicg_output = str_replace( 'day', esc_html__('day','gpt3-ai-content-generator'), $wpaicg_time_diff );
        } elseif ( strpos( $wpaicg_time_diff, 'min' ) !== false ) {
            $wpaicg_output = str_replace( 'minutes', esc_html__('minutes','gpt3-ai-content-generator'), $wpaicg_time_diff );
            $wpaicg_output = str_replace( 'minute', esc_html__('minute','gpt3-ai-content-generator'), $wpaicg_time_diff );
        } else {
            $wpaicg_output = $wpaicg_time_diff;
        }
        ?>
        <p><?php echo sprintf(esc_html__('The last time, the Cron Job ran on your website %s (%s ago)','gpt3-ai-content-generator'),date('Y-m-d H:i:s',$wpaicg_crojob_rss_last_time),$wpaicg_output)?></p>
    <?php
    endif;
    ?>
    <?php
    //    if(empty($wpaicg_cron_added)):
    ?>
    <hr>
    <p></p>
    <p><strong><?php echo esc_html__('Cron Job Configuration','gpt3-ai-content-generator')?></strong></p>
    <p></p>
    <p><?php echo sprintf(esc_html__('If you are using a Linux/Unix server, copy the code below and paste it into the crontab. Read the detailed guide %shere%s','gpt3-ai-content-generator'),'<a href="'.esc_url("https://docs.aipower.org/docs/AutoGPT/gpt-agents#cron-job-setup").'" target="_blank">','</a>')?>.</p>
    <p><code>0 * * * * php <?php echo esc_html(ABSPATH)?>index.php -- wpaicg_rss=yes</code></p>
    <p><?php echo esc_html__('Please note 0 * * * * means this cron job will run every hour. You can change it to 0 */2 * * * to run every 2 hours. You can also change it to 0 0 * * * to run every day.','gpt3-ai-content-generator')?></p>
    <p><?php echo sprintf(esc_html__('Once you setup the cronjob %syou need to wait for 1 hour%s to see the results.','gpt3-ai-content-generator'),'<b>','</b>')?></p>
    <?php
    //    endif;
    ?>
</div>
<div class="wpaicg-alert">
<p><?php echo sprintf(esc_html__('Please remember: It\'s important to say that using this module for content based on %snews sources%s is not a good idea. It works better for %sblog posts%s. News is about recent events, and GPT models might give wrong information, make up details, and imagine things. So, don\'t use this module for news-related content.','gpt3-ai-content-generator'),'<b><u>','</b></u>','<b><u>','</b></u>')?></p>
<br>
<p><?php echo esc_html__('For example, imagine you use CNN as your RSS source, and our plugin gets the newest news from CNN, like "300 million jobs could be affected by latest wave of AI, says Goldman Sachs". Our plugin will make a blog post with that title, and the content will be made by GPT. But, the content made by GPT might not be right and could have imagined things. Because it is a very recent event. So, don\'t use this module for news-related content.','gpt3-ai-content-generator')?></p>
<br>
<p><?php echo esc_html__('On the other hand, imagine you use an RSS from a blog talking about YouTube-related content, like "how to create a successful YouTube channel". Our plugin will make a blog post with that title, and the content will be made by GPT. In this case, the content made by GPT will be more correct and won\'t have imagined things.','gpt3-ai-content-generator')?></p>
</div>

