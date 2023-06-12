<?php
if ( ! defined( 'ABSPATH' ) ) exit;
include __DIR__.'/alert.php';
if(isset($_POST['wpaicg_tweet_settings'])){
    check_admin_referer('wpaicg_tweet_setting');
    $wpaicg_tweet_settings = \WPAICG\wpaicg_util_core()->sanitize_text_or_array_field($_POST['wpaicg_tweet_settings']);
    update_option('wpaicg_tweet_settings',$wpaicg_tweet_settings);
}
$wpaicg_tweet_settings = get_option('wpaicg_tweet_settings',[]);
$wpaicg_all_post_types = get_post_types(array(
    'public'   => true,
    '_builtin' => false,
),'objects');
$post_prompts_template = array(
    'Sarcastic' => "Compose a tweet to promote a fresh blog post titled [post_title] in English. The tweet should be dripping with sarcasm, but at the same time effectively draw attention to the post's topic and lure readers into clicking through to read. Maintain character limit [number].",
    'Cheerful' => "Craft a cheerful tweet in English promoting a new blog post named [post_title] in English. The tweet must radiate positivity, succinctly introduce the blog's subject, and inspire readers to click and delve into the post. Ensure the character count does not exceed [number].",
    'Humorous' => "Write a light-hearted, joking tweet that promotes the newest blog post entitled [post_title] in English. The tweet should employ humor to captivate attention, briefly outline the post's topic, and entice readers to click and consume the full post. The tweet should not exceed [number] characters.",
    'Professional' => "Craft a professional and concise tweet to publicize a new blog post titled [post_title] in English. The tweet should succinctly highlight the main topic of the post and invite readers to explore more by clicking through. Be sure to adhere to the character limit of [number].",
    'Inspirational' => "Compose an inspiring tweet in English to promote a new blog post titled [post_title]. The tweet should resonate with positive energy, briefly touch on the topic of the post, and motivate readers to click and engage with the full post. Ensure that the character limit [number] is maintained.",
    'Informative' => "Write a clear and informative tweet announcing the latest blog post titled [post_title] in English. The tweet should succinctly encapsulate the essence of the post's topic and encourage readers to click through to read more. The tweet should not exceed [number] characters."
);
$keyword_prompts_template = array(
    'Question' => "Formulate a tweet that poses an intriguing question about [keyword]. Ensure it doesn't exceed [number] characters.",
    'Fact' => "Craft a tweet stating an interesting fact or piece of information related to [keyword]. The tweet should not surpass [number] characters.",
    'Opinion' => "Write a tweet expressing a personal viewpoint or opinion about [keyword]. Make sure to stay within [number] characters.",
    'Sarcastic' => "Compose a sarcastic tweet concerning [keyword], oozing with irony but still relevant to the topic. Make sure it doesn't exceed [number] characters.",
    'Cheerful' => "Create a cheerful tweet about [keyword], brimming with positivity and warmth. Ensure the tweet stays within [number] characters.",
    'Humorous' => "Write a humorous tweet involving [keyword], aiming to entertain and amuse while still relating to the topic. Keep the character count under [number]."
);
?>
<p>Read tutorial on how to use this feature <a href="https://docs.aipower.org/docs/AutoGPT/social-poster/twitter" target="_blank">here</a>.</p>
<form action="" method="post">
    <?php
    wp_nonce_field('wpaicg_tweet_setting');
    ?>
    <h3><?php echo esc_html__('API Settings','gpt3-ai-content-generator')?></h3>
    <table class="form-table">
        <tr>
            <th><?php echo esc_html__('Access Token','gpt3-ai-content-generator')?></th>
            <td><input<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?> value="<?php echo isset($wpaicg_tweet_settings['access_token']) ? esc_html($wpaicg_tweet_settings['access_token']) : ''?>" type="text" class="regular-text" name="wpaicg_tweet_settings[access_token]" required></td>
        </tr>
        <tr>
            <th><?php echo esc_html__('Access Token Secret','gpt3-ai-content-generator')?></th>
            <td><input<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?> value="<?php echo isset($wpaicg_tweet_settings['access_token_secret']) ? esc_html($wpaicg_tweet_settings['access_token_secret']) : ''?>" type="text" class="regular-text" name="wpaicg_tweet_settings[access_token_secret]" required></td>
        </tr>
        <tr>
            <th><?php echo esc_html__('API Key','gpt3-ai-content-generator')?></th>
            <td><input<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?> value="<?php echo isset($wpaicg_tweet_settings['consumer_key']) ? esc_html($wpaicg_tweet_settings['consumer_key']) : ''?>" type="text" class="regular-text" name="wpaicg_tweet_settings[consumer_key]" required></td>
        </tr>
        <tr>
            <th><?php echo esc_html__('API Key Secret','gpt3-ai-content-generator')?></th>
            <td><input<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?> value="<?php echo isset($wpaicg_tweet_settings['consumer_secret']) ? esc_html($wpaicg_tweet_settings['consumer_secret']) : ''?>" type="text" class="regular-text" name="wpaicg_tweet_settings[consumer_secret]" required></td>
        </tr>
    </table>
    <h3><?php echo esc_html__('Blog2Tweet','gpt3-ai-content-generator')?></h3>
    <table class="form-table">
        <tr>
            <th><?php echo esc_html__('Send Tweet For','gpt3-ai-content-generator')?></th>
            <td>
                <div class="mb-5"><label><input<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?><?php echo isset($wpaicg_tweet_settings['post']) && $wpaicg_tweet_settings['post'] ? ' checked':''?> type="checkbox" name="wpaicg_tweet_settings[post]" value="1"> Post</label></div>
                <div class="mb-5"><label><input<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?><?php echo isset($wpaicg_tweet_settings['page']) && $wpaicg_tweet_settings['page'] ? ' checked':''?> type="checkbox" name="wpaicg_tweet_settings[page]" value="1"> Page</label></div>
                <?php
                foreach ($wpaicg_all_post_types as $key=>$all_post_type){
                    ?>
                    <div class="mb-5"><label><input<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?><?php echo isset($wpaicg_tweet_settings[$key]) && $wpaicg_tweet_settings[$key] ? ' checked':''?> type="checkbox" name="wpaicg_tweet_settings[<?php echo esc_html($key)?>]" value="1"> <?php echo esc_html($all_post_type->label)?></label></div>
                    <?php
                }
                ?>
            </td>
        </tr>
        <tr>
            <th><?php echo esc_html__('Include Post Link','gpt3-ai-content-generator')?></th>
            <td><input<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?><?php echo isset($wpaicg_tweet_settings['link']) && $wpaicg_tweet_settings['link'] ? ' checked':''?> type="checkbox" name="wpaicg_tweet_settings[link]" value="1"></td>
        </tr>
        <tr>
            <th><?php echo esc_html__('Prompt','gpt3-ai-content-generator')?></th>
            <td>
                <div class="mb-5">
                    <select class="wpaicg_post_prompts_template">
                        <option value=""><?php echo esc_html__('Select Template','gpt3-ai-content-generator')?></option>
                        <?php
                        foreach($post_prompts_template as $key=>$item){
                            echo '<option value="'.esc_html($item).'">'.esc_html($key).'</option>';
                        }
                        ?>
                    </select>
                </div>
                <textarea<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?> name="wpaicg_tweet_settings[post_prompt]" rows="5" class="wpaicg_post_prompt"><?php echo isset($wpaicg_tweet_settings['post_prompt']) ? str_replace("\\",'',esc_html($wpaicg_tweet_settings['post_prompt'])) : esc_html__('Write a compelling and engaging tweet in English that promotes a new blog post. The title of the blog post is [post_title]. The tweet should grab attention, introduce the topic and invite readers to click and read the post. Please remember to craft the tweet strictly within [number] characters.','gpt3-ai-content-generator')?></textarea>
                <small><?php echo sprintf(esc_html__('Ensure %s and %s are included in your prompt. You can add your language by just replacing in English with yours.','gpt3-ai-content-generator'),'<code>[post_title]</code>','<code>[number]</code>')?></small>
            </td>
        </tr>
    </table>
    <h3><?php echo esc_html__('Tweet Writer','gpt3-ai-content-generator')?></h3>
    <table class="form-table">
        <tr>
            <th><?php echo esc_html__('Keywords','gpt3-ai-content-generator')?></th>
            <td>
                <textarea<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?> name="wpaicg_tweet_settings[keywords]" rows="5"><?php echo isset($wpaicg_tweet_settings['keywords']) ? esc_html($wpaicg_tweet_settings['keywords']) : ''?></textarea>
                <small><?php echo esc_html__('By separating keywords with commas, you can add multiple options for the agent to choose from. The agent will select a keyword at random from the list and compose a tweet.','gpt3-ai-content-generator')?></small>
            </td>
        </tr>
        <tr>
            <th><?php echo esc_html__('Interval','gpt3-ai-content-generator')?></th>
            <td>
                <select<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?> name="wpaicg_tweet_settings[interval]">
                    <?php
                    for($i=1;$i<=12;$i++){
                        $interval_name = $i == 1 ? __('Every hour','gpt3-ai-content-generator') : sprintf('%d hours',$i);
                        echo '<option'.(isset($wpaicg_tweet_settings['interval']) && $wpaicg_tweet_settings['interval'] == $i ? ' selected':'').' value="'.esc_html($i).'">'.esc_html($interval_name).'</option>';
                    }
                    echo '<option'.(isset($wpaicg_tweet_settings['interval']) && $wpaicg_tweet_settings['interval'] == 24 ? ' selected':'').' value="24">'.esc_html(sprintf('%d hours',24)).'</option>';
                    ?>
                </select>
            </td>
        </tr>
        <tr>
            <th><?php echo esc_html__('Prompt','gpt3-ai-content-generator')?></th>
            <td>
                <div class="mb-5">
                    <select class="wpaicg_keyword_prompts_template">
                        <option value=""><?php echo esc_html__('Select Template','gpt3-ai-content-generator')?></option>
                        <?php
                        foreach($keyword_prompts_template as $key=>$item){
                            echo '<option value="'.esc_html($item).'">'.esc_html($key).'</option>';
                        }
                        ?>
                    </select>
                </div>
                <textarea<?php echo !$wpaicg_cron_tweet_added ? ' disabled':''?> name="wpaicg_tweet_settings[writer_prompt]" rows="5" class="wpaicg_keyword_prompt"><?php echo isset($wpaicg_tweet_settings['writer_prompt']) ? str_replace("\\",'',esc_html($wpaicg_tweet_settings['writer_prompt'])) : esc_html__('Write a compelling and engaging tweet in English about [keyword]. Please remember to craft the tweet strictly within [number] characters.','gpt3-ai-content-generator')?></textarea>
                <small><?php echo sprintf(esc_html__('Ensure %s and %s are included in your prompt.','gpt3-ai-content-generator'),'<code>[keyword]</code>','<code>[number]</code>')?></small>
            </td>
        </tr>
    </table>
    <button class="button-primary button"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button>
</form>
<script>
    jQuery(document).ready(function ($){
        $('.wpaicg_keyword_prompts_template').on('change',function (){
            $('.wpaicg_keyword_prompt').val($(this).val());
        })
        $('.wpaicg_post_prompts_template').on('change',function (){
            $('.wpaicg_post_prompt').val($(this).val());
        })
    })
</script>
