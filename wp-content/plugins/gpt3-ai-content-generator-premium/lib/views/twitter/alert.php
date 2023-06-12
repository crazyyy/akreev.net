<?php
if ( ! defined( 'ABSPATH' ) ) exit;
$wpaicg_cron_tweet_last_time = get_option('wpaicg_cron_tweet_last_time','');
$wpaicg_cron_tweet_added = get_option('wpaicg_cron_tweet_added','');
if (isset($_POST['wpaicg_delete_tweet_running']) && check_admin_referer('wpaicg_delete_tweet_running', 'wpaicg_delete_running_nonce')) {
    update_option('wpaicg_cron_tweet_last_time', time());
    @unlink(WPAICG_PLUGIN_DIR.'wpaicg_tweet.txt');
    echo '<script>window.location.reload()</script>';
    exit;
}
if(!empty($wpaicg_cron_tweet_last_time)){
    $wpaicg_timestamp_diff = time() - $wpaicg_cron_tweet_last_time;
    if($wpaicg_timestamp_diff > 600){
        ?>
        <div class="wpaicg-alert">
            <p style="color: #f00">
                <?php echo esc_html__('You can use the button below to restart your queue if it is stuck.','gpt3-ai-content-generator')?>
            </p>
            <form action="" method="post">
                <?php wp_nonce_field('wpaicg_delete_tweet_running', 'wpaicg_delete_running_nonce'); ?>
                <button name="wpaicg_delete_tweet_running" class="button button-primary"><?php echo esc_html__('Force Refresh','gpt3-ai-content-generator')?></button>
            </form>
        </div>
        <?php
    }
}
?>
<div class="wpaicg-alert">
    <?php
    if(empty($wpaicg_cron_tweet_added)):
        ?>
        <h4><?php echo esc_html__('Important','gpt3-ai-content-generator')?></h4>
        <p>
            <?php sprintf(esc_html__('You must configure a %sCron Job%s on your hosting/server. If this is not done, the Index Builder feature will not be available for use.','gpt3-ai-content-generator'),'<a href="https://www.hostgator.com/help/article/what-are-cron-jobs" target="_blank">','</a>')?>
        </p>
    <?php
    endif;
    ?>
    <?php
    if(empty($wpaicg_cron_tweet_added)){
        echo '<p style="color: #f00"><strong>'.esc_html__('It appears that you have not activated Cron Job on your server, which means you will not be able to use the Twitter bot feature. If you have already activated Cron Job, please allow a few minutes to pass before refreshing the page.','gpt3-ai-content-generator').'</strong></p>';
    }
    else{
        echo '<p style="color: #10922c"><strong>'.esc_html__('Great! It looks like your Cron Job is running properly. You should now be able to use the Twitter bot.','gpt3-ai-content-generator').'</strong></p>';
    }
    ?>
    <?php
    if(!empty($wpaicg_cron_tweet_last_time)):
        $wpaicg_current_timestamp = time();

        $wpaicg_time_diff = human_time_diff( $wpaicg_cron_tweet_last_time, $wpaicg_current_timestamp );

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
        <p><?php echo sprintf(esc_html__('The last time, the Cron Job ran on your website %s (%s ago)','gpt3-ai-content-generator'),date('Y-m-d H:i:s',$wpaicg_cron_tweet_last_time),$wpaicg_output)?></p>
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
    <p><code>* * * * * php <?php echo esc_html(ABSPATH)?>index.php -- wpaicg_tweet=yes</code></p>
    <?php
    //    endif;
    ?>
</div>

