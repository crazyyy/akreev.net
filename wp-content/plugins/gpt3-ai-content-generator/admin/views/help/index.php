<?php
if ( ! defined( 'ABSPATH' ) ) exit;
$wpaicg_openai = \WPAICG\WPAICG_OpenAI::get_instance()->openai();
?>
<style>
    .wpaicg-help{
        padding-right: 20px;
    }
    .wpaicg-help h1,.wpaicg-help h2{
        text-align: center;
    }
    .wpaicg-help-grid{
        grid-template-columns: repeat(5,1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        display: grid;
        grid-template-rows: auto auto;
    }
    .wpaicg-help-grid-item{
        background-color: #4F81BD;
        color: #fff;
        padding: 20px;
        text-align: center;
        border-radius: 8px;
        position: relative;
        grid-column: span 1/span 1;
        width: calc(100% - 40px);
        cursor: pointer;
        min-height: 150px;
    }
    .wpaicg-help-grid-item a{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-decoration: none;
        font-size: 25px;
        line-height: 35px;
    }
    .wpaicg-help-grid-item:hover{
        background-color: #385884;
    }
    .wpaicg-align-center{
        text-align: center;
    }
    .wpaicg-step label{
        display: inline-block;
        margin-bottom: 10px;
        font-size: 18px;
    }
    .wpaicg-step,.wpaicg-step p{
        font-size: 18px;
    }
    .wpaicg-help-field input[type=text],
    .wpaicg-help-field select{
        font-size: 20px;
        height: 45px;
        width: 100%;
        max-width: 100%;
        display: inline-block;
        margin-bottom: 10px;
    }
    .wpaicg-help-field textarea{
        font-size: 18px;
    }
    .wp-core-ui .wpaicg-step .button{
        font-size: 20px;
        padding: 0 30px;
    }
    .wpaicg_modal{
        width: 600px;
        top: auto;
        left: auto;
    }
    .wpaicg_modal_content{
        padding: 20px;
    }
    button .spinner{
        margin-top: 12px;
    }
    .wpaicg-overlay{
        background: rgb(0 0 0 / 80%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wpaicg_modal_content{
        height: 500px;
        display: flex;
        align-items: center;
        overflow-y: auto;
    }
    .wpaicg_modal_content > form{
        width: 100%;
        max-height: 100%;
    }
    .wpaicg-fs-20{
        font-size: 20px!important;
    }
    .wpaicg-pb-10{
        padding-bottom: 10px;
    }
    .wpaicg-flex{
        display: flex;
    }
    .wpaicg-space-between{
        justify-content: space-between;
    }
    .wpaicg-fs-15{
        font-size: 15px;
    }
    .wpaicg_btn_actions{
        margin-top: 20px;
        padding-bottom: 20px;
    }
    .wpaicg-help-assistant-add-more{
        width: 100%;
        margin-top: 10px!important;
        display: block!important;
    }
    .wpaicg-help-assistant-menu{
        position: relative;
        margin-bottom: 10px;
        padding: 5px;
        border-radius: 5px;
        background: #d1d1d1;
    }
    .wpaicg-help-assistant-menu span{
        position: absolute;
        top: 5px;
        right: 5px;
        width: 35px;
        height: 35px;
        background: #cd0000;
        border-radius: 2px;
        color: #fff;
        font-size: 33px;
        text-align: center;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Time;
    }
    .wpaicg-help-assistant-menu input{
        width: 100%;
        margin-bottom: 5px;
        height: 35px;
        font-size: 17px;
    }
    .wpaicg-help-assistant-menu textarea{
        font-size: 17px;
    }
    .wpaicg-help-assistant-menu small{
        font-size: 13px;
    }
    p.wpaicg_chat_instruction {
        font-size: 0.7em; /* Adjust as needed */
    }
    .wpaicg-manual-setup {
    text-align: center;
    margin-top: 20px;
    }

    .wpaicg-manual-setup span, .wpaicg-manual-setup a {
        display: inline-block;
        font-size: 20px; /* adjust this value to your needs */
        line-height: 1.4; /* adjust this value to your needs */
    }

    .wpaicg-manual-setup a {
        color: #0073aa; /* adjust this value to your needs */
        text-decoration: none;
    }
    .wpaicg-manual-setup a:hover {
        color: #00a0d2; /* adjust this value to your needs */
    }

</style>
<div class="wpaicg-help">
    <h1>Welcome to AI Power</h1>
    <h1>What would you like to do?</h1>
    <hr>
    <div class="wpaicg-help-grid">
        <?php
        if(current_user_can('wpaicg_help_chatgpt')):
            ?>
            <div class="wpaicg-help-grid-item wpaicg-help-item" data-form="chatgpt" data-title="<?php echo esc_html__('Add ChatGPT to My Website','gpt3-ai-content-generator')?>"><a href="javascript:void(0)"><?php echo esc_html__('Add ChatGPT to My Website','gpt3-ai-content-generator')?></a></div>
        <?php
        endif;
        if(current_user_can('wpaicg_help_article')):
            ?>
            <div class="wpaicg-help-grid-item wpaicg-help-item" data-form="article" data-title="<?php echo esc_html__('Create a Blog Post','gpt3-ai-content-generator')?>"><a href="javascript:void(0)"><?php echo esc_html__('Create a Blog Post','gpt3-ai-content-generator')?></a></div>
        <?php
        endif;
        if(current_user_can('wpaicg_help_woocommerce')):
            ?>
            <div class="wpaicg-help-grid-item wpaicg-help-item" data-form="woocommerce" data-title="<?php echo esc_html__('Optimize WooCommerce Product','gpt3-ai-content-generator')?>"><a href="javascript:void(0)"><?php echo esc_html__('Optimize WooCommerce Products','gpt3-ai-content-generator')?></a></div>
        <?php
        endif;
        if(current_user_can('wpaicg_help_autogpt')):
            ?>
            <div class="wpaicg-help-grid-item wpaicg-help-item" data-form="autogpt" data-title="<?php echo esc_html__('Automate Content Creation','gpt3-ai-content-generator')?>"><a href="javascript:void(0)"><?php echo esc_html__('Automate Content Creation','gpt3-ai-content-generator')?></a></div>
        <?php
        endif;
        if(current_user_can('wpaicg_help_image')):
            ?>
            <div class="wpaicg-help-grid-item wpaicg-help-item" data-form="image" data-title="<?php echo esc_html__('Generate Images','gpt3-ai-content-generator')?>"><a href="javascript:void(0)"><?php echo esc_html__('Generate Images','gpt3-ai-content-generator')?></a></div>
        <?php
        endif;
        if(current_user_can('wpaicg_help_aiform')):
            ?>
            <div class="wpaicg-help-grid-item wpaicg-help-item" data-form="aiform" data-title="<?php echo esc_html__('Create AI Form','gpt3-ai-content-generator')?>"><a href="javascript:void(0)"><?php echo esc_html__('Create AI Form','gpt3-ai-content-generator')?></a></div>
        <?php
        endif;
        if(current_user_can('wpaicg_help_assistant')):
            ?>
            <div class="wpaicg-help-grid-item wpaicg-help-item" data-form="assistant" data-title="<?php echo esc_html__('AI Assistant Setup','gpt3-ai-content-generator')?>"><a href="javascript:void(0)"><?php echo esc_html__('Use AI Assistant','gpt3-ai-content-generator')?></a></div>
        <?php
        endif;
        if(current_user_can('wpaicg_help_audio')):
            ?>
            <div class="wpaicg-help-grid-item wpaicg-help-item" data-form="audio" data-title="<?php echo esc_html__('Convert an Audio','gpt3-ai-content-generator')?>"><a href="javascript:void(0)"><?php echo esc_html__('Convert Audio','gpt3-ai-content-generator')?></a></div>
        <?php
        endif;
        if(current_user_can('wpaicg_help_compare')):
            ?>
            <div class="wpaicg-help-grid-item wpaicg-help-item" data-form="compare" data-title="<?php echo esc_html__('Compare AI Models','gpt3-ai-content-generator')?>"><a href="javascript:void(0)"><?php echo esc_html__('Compare AI Models','gpt3-ai-content-generator')?></a></div>
        <?php
        endif;
        ?>
        <div class="wpaicg-help-grid-item"><a href="https://docs.aipower.org/" target="_blank"><?php echo esc_html__('Get Help','gpt3-ai-content-generator')?></a></div>
    </div>
    <hr>
</div>
<div class="wpaicg-manual-setup">
    <span>or</span><br>
    <a href="<?php echo esc_url(admin_url('admin.php?page=wpaicg')); ?>">Go to Manual Setup</a>
</div>
<div class="wpaicg_help_chatgpt" style="display: none">
    <?php
    include __DIR__.'/chatgpt.php';
    ?>
</div>
<div class="wpaicg_help_article" style="display: none">
    <?php
    include __DIR__.'/article.php';
    ?>
</div>
<div class="wpaicg_help_woocommerce" style="display: none">
    <?php
    include __DIR__.'/woocommerce.php';
    ?>
</div>
<div class="wpaicg_help_autogpt" style="display: none">
    <?php
    include __DIR__.'/autogpt.php';
    ?>
</div>
<div class="wpaicg_help_image" style="display: none">
    <?php
    include __DIR__.'/image.php';
    ?>
</div>
<div class="wpaicg_help_aiform" style="display: none">
    <?php
    include __DIR__.'/aiform.php';
    ?>
</div>
<div class="wpaicg_help_compare" style="display: none">
    <?php
    include __DIR__.'/compare.php';
    ?>
</div>
<div class="wpaicg_help_audio" style="display: none">
    <?php
    include __DIR__.'/audio.php';
    ?>
</div>
<div class="wpaicg_help_assistant" style="display: none">
    <?php
    include __DIR__.'/assistant.php';
    ?>
</div>
<script>
    jQuery(document).ready(function($){
        function wpaicgLoading(btn){
            btn.attr('disabled','disabled');
            if(!btn.find('spinner').length){
                btn.append('<span class="spinner"></span>');
            }
            btn.find('.spinner').css('visibility','unset');
        }
        function wpaicgRmLoading(btn){
            btn.removeAttr('disabled');
            btn.find('.spinner').remove();
        }
        $('.wpaicg-help-item').click(function (){
            var form = $(this).attr('data-form');
            var title = $(this).attr('data-title');
            $('.wpaicg_modal_content').html($('.wpaicg_help_'+form).html());
            $('.wpaicg-overlay').show();
            $('.wpaicg_modal').show();
            $('.wpaicg_modal_title').html(title)
        });
        $(document).on('click','.wpaicg-validate-openai',function(e){
            var btn = $(e.currentTarget);
            var step = btn.closest('.wpaicg-step');
            var form = btn.closest('form');
            var type = form.attr('data-form');
            var message = step.find('.wpaicg-action-message');
            var wpaicg_openai_key = step.find('.wpaicg_openai_key').val();
            if(wpaicg_openai_key === ''){
                message.html('<p style="color: #db0000;font-weight: bold;"><?php echo esc_html__('Please enter OpenAI API Key','gpt3-ai-content-generator')?></p>')
            }
            else{
                $.ajax({
                    url: 'https://api.openai.com/v1/models',
                    headers: {"Authorization": 'Bearer '+wpaicg_openai_key},
                    dataType: 'json',
                    beforeSend: function (){
                        wpaicgLoading(btn)
                    },
                    success: function (res){
                        wpaicgRmLoading(btn);
                        step.find('.wpaicg_btn_actions').show();
                        step.find('.wpaicg_openai_key').attr('readonly','readonly');
                        btn.hide();
                        if(type === 'image' || type === 'aiform' || type === 'compare'){
                            message.html('<p style="color: #00850b;font-weight: bold;"><?php echo esc_html__('Great! Your API key is valid! Click save button to update.', 'gpt3-ai-content-generator')?></p>')
                        }
                        else {
                            message.html('<p style="color: #00850b;font-weight: bold;"><?php echo esc_html__('Great! Your API key is valid! Click next button to proceed.', 'gpt3-ai-content-generator')?></p>')
                        }
                    },
                    error: function (e){
                        wpaicgRmLoading(btn);
                        message.html('<p style="color: #db0000;font-weight: bold;"><?php echo esc_html__('Please enter a valid OpenAI API Key','gpt3-ai-content-generator')?></p>');
                    }
                });
            }
        });
        $(document).on('click','.wpaicg-btn-next',function(e){
            var btn = $(e.currentTarget);
            var step = btn.closest('.wpaicg-step');
            var nextStep = btn.attr('data-step');
            step.hide();
            step.parent().find('.'+nextStep).show();
        });
        $(document).on('click','.wpaicg-btn-prev',function(e){
            var btn = $(e.currentTarget);
            var step = btn.closest('.wpaicg-step');
            var prevStep = btn.attr('data-step');
            step.hide();
            step.parent().find('.'+prevStep).show();
        });
        $(document).on('change','.wpaicg_chat_addition_template',function (e){
            var sel = $(e.currentTarget);
            sel.parent().parent().find('textarea').val(sel.val());
        });
        $(document).on('click','.wpaicg-help-assistant-menu span',function(e){
            var menus = $(e.currentTarget).closest('.wpaicg-help-assistant-menus');
            $(e.currentTarget).closest('.wpaicg-help-assistant-menu').remove();
            sortAssistantMenus(menus);
        });
        $(document).on('click','.wpaicg-help-assistant-add-more',function (e){
            var step = $(e.currentTarget).closest('.wpaicg-step');
            var menus = step.find('.wpaicg-help-assistant-menus');
            menus.append('<div class="wpaicg-help-assistant-menu"><span>×</span><input placeholder="<?php echo esc_html__('Menu Name','gpt3-ai-content-generator')?>" type="text" name="assistants[0][name]" value=""><textarea name="assistants[0][prompt]" placeholder="<?php echo esc_html__('Enter your prompt','gpt3-ai-content-generator')?>"></textarea><small><?php echo sprintf(esc_html__('Ensure %s is included in your prompt.','gpt3-ai-content-generator'),'<code>[text]</code>')?></small></div>')
            sortAssistantMenus(menus);
        })
        function sortAssistantMenus(menus){

            menus.find('.wpaicg-help-assistant-menu').each(function (idx, menu){
                $(menu).find('input').attr('name','assistants['+idx+'][name]');
                $(menu).find('textarea').attr('name','assistants['+idx+'][prompt]');
            })
        }
        $(document).on('click','.wpaicg-chatgpt-type input',function(e){
            var chatgpt_type = $(e.currentTarget);
            var step = chatgpt_type.closest('.wpaicg-step');
            if(chatgpt_type.val() === 'shortcode'){
                var nextbtn = step.find('.wpaicg-btn-next');
                nextbtn.removeClass('wpaicg-btn-next');
                nextbtn.addClass('wpaicg-help-save-chatgpt');
                nextbtn.html('<?php echo esc_html__('Save','gpt3-ai-content-generator')?>');
                nextbtn.attr('data-step','wpaicg-chatgpt-success-shortcode');
            }
            else{
                var nextbtn = step.find('.wpaicg-help-save-chatgpt');
                nextbtn.addClass('wpaicg-btn-next');
                nextbtn.removeClass('wpaicg-help-save-chatgpt');
                nextbtn.html('<?php echo esc_html__('Next','gpt3-ai-content-generator')?>');
                nextbtn.attr('data-step','wpaicg-chatgpt-position');
            }
        });
        $(document).on('input','.wpaicg-chatgpt-post-id input',function(e){
            var input = $(e.currentTarget);
            var step = input.closest('.wpaicg-step');
            var val = input.val();
            if(val !== ''){
                step.find('.wpaicg-help-save-chatgpt').removeAttr('disabled');
            }
            else{
                step.find('.wpaicg-help-save-chatgpt').attr('disabled','disabled');
            }
        })
        $(document).on('click','.wpaicg-chatgpt-position input[value=page],.wpaicg-chatgpt-position input[value=whole]',function(e){
            var chatgpt_type = $(e.currentTarget);
            var step = chatgpt_type.closest('.wpaicg-step');
            if(chatgpt_type.val() === 'whole'){
                step.find('.wpaicg-chatgpt-post-id').hide();
                step.find('.wpaicg-chatgpt-post-id input').val('');
                step.find('.wpaicg-help-save-chatgpt').removeAttr('disabled');
            }
            else{
                step.find('.wpaicg-chatgpt-post-id').show();
                step.find('.wpaicg-chatgpt-post-id input').val('');
                step.find('.wpaicg-help-save-chatgpt').attr('disabled','disabled');
            }
        });
        $(document).on('click','.wpaicg-help-save-audio,.wpaicg-help-save-assistant,.wpaicg-help-save-compare,.wpaicg-help-save-article,.wpaicg-help-save-chatgpt,.wpaicg-help-save-woocommerce,.wpaicg-help-save-autogpt,.wpaicg-help-save-image,.wpaicg-help-save-aiform',function (e){
            var form = $(e.currentTarget).closest('form');
            form.submit();
        });
        $(document).on('click','.wpaicg-help-woocommerce-custom',function (e){
            var form = $(e.currentTarget).closest('form');
            if($(e.currentTarget).prop('checked')){
                form.find('.wpaicg-help-woocommerce-custom-prompt').show();
            }
            else{
                form.find('.wpaicg-help-woocommerce-custom-prompt').hide();
            }
        })
        $(document).on('submit','.wpaicg-help-form',function (e){
            e.preventDefault();
            var form = $(e.currentTarget);
            var type = form.attr('data-form');
            var btn = form.find('.wpaicg-help-save-'+type);
            var data = form.serialize();
            var step = btn.closest('.wpaicg-step');
            var message = step.find('.wpaicg-action-message');
            var wpaicg_openai_key = form.find('.wpaicg_openai_key').val();
            $.ajax({
                url: '<?php echo admin_url('admin-ajax.php')?>',
                data: data,
                beforeSend: function () {
                    wpaicgLoading(btn);
                },
                dataType: 'JSON',
                type: 'POST',
                success: function (res) {
                    wpaicgRmLoading(btn);
                    if(res.status === 'success'){
                        if(type === 'chatgpt'){
                            form.find('.wpaicg-step').hide();
                            $('.wpaicg_openai_key').val(wpaicg_openai_key);
                            if(res.type === 'shortcode'){
                                form.find('.wpaicg-chatgpt-success-shortcode p strong').html('[wpaicg_chatgpt id='+res.id+']');
                                form.find('.wpaicg-chatgpt-success-shortcode').show();
                            }
                            else{
                                form.find('.wpaicg-chatgpt-success-widget').show();
                            }
                        }
                        else{
                            $('.wpaicg_openai_key').val(wpaicg_openai_key);
                            form.find('.wpaicg-step').hide();
                            form.find('.wpaicg-help-'+type+'-success').show();
                        }
                    }
                    else{
                        message.html('<p style="color: #db0000;font-weight: bold;">'+res.msg+'</p>');
                    }
                },
                error: function (){
                    wpaicgRmLoading(btn);
                }
            });
        });
    });
</script>
