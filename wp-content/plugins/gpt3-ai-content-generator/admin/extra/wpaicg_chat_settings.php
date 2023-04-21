<?php
if ( ! defined( 'ABSPATH' ) ) exit;
$success = false;
if(isset($_POST['wpaicg_chat_save'])){
    // Check the nonce
    if ( ! isset( $_POST['_wpnonce'] ) || ! wp_verify_nonce( $_POST['_wpnonce'], 'wpaicg_chat_nonce' ) ) {
        wp_die( WPAICG_NONCE_ERROR );
    }
    if (isset($_POST['wpaicg_chat_enable_sale']) && !empty($_POST['wpaicg_chat_enable_sale'])) {
        update_option('wpaicg_chat_enable_sale', sanitize_text_field($_POST['wpaicg_chat_enable_sale']));
    } else {
        delete_option('wpaicg_chat_enable_sale');
    }
}
$wpaicg_chat_enable_sale = get_option('wpaicg_chat_enable_sale', false);
if($success){
    echo '<h4 id="setting_message" style="color: green;">'.esc_html__('Records successfully updated!','gpt3-ai-content-generator').'</h4>';
}
?>
<h3><?php echo esc_html__('Token Handling','gpt3-ai-content-generator')?></h3>
<form action="" method="post">
    <?php wp_nonce_field('wpaicg_chat_nonce'); ?>
    <table class="form-table">
        <tr>
            <th><?php echo esc_html__('Enable Token Sale?','gpt3-ai-content-generator')?></th>
            <td><input<?php echo $wpaicg_chat_enable_sale ? ' checked':''?> type="checkbox" class="wpaicg_chat_enable_sale" value="1" name="wpaicg_chat_enable_sale"></td>
        </tr>
        <tr>
            <th></th>
            <td><button class="button button-primary" name="wpaicg_chat_save"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button></td>
        </tr>
    </table>
</form>
