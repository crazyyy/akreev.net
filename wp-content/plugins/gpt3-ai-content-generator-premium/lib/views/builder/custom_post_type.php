<?php
if ( ! defined( 'ABSPATH' ) ) exit;
if(isset($_POST['wpaicg_save_builder_settings'])){
    if(isset($_POST['wpaicg_builder_custom'])){
        $wpaicg_builder_customs = \WPAICG\wpaicg_util_core()->sanitize_text_or_array_field($_POST['wpaicg_builder_custom']);
        foreach ($wpaicg_builder_customs as $key=>$wpaicg_builder_custom) {
            update_option('wpaicg_builder_custom_'.$key,$wpaicg_builder_custom);
        }
    }
}
$wpaicg_all_post_types = get_post_types(array(
    'public'   => true,
    '_builtin' => false,
),'objects');
$wpaicg_custom_types = [];
foreach($wpaicg_all_post_types as $key=>$all_post_type){
    if($key != 'product'){
        $wpaicg_assigns = get_option('wpaicg_builder_custom_'.$key,'');
        $meta_keys = \WPAICG\wpaicg_util_core()->wpaicg_get_meta_keys($key);
        $taxonomies = \WPAICG\wpaicg_util_core()->wpaicg_existing_taxonomies($key);
        $post_type = array(
            'assigns' => $wpaicg_assigns,
            'label' => $all_post_type->label,
            'standard' => array(
                'wpaicgp_ID' => esc_html__('ID','gpt3-ai-content-generator'),
                'wpaicgp_post_title' => esc_html__('Title','gpt3-ai-content-generator'),
                'wpaicgp_post_content' => esc_html__('Content','gpt3-ai-content-generator'),
                'wpaicgp_post_excerpt' => esc_html__('Excerpt','gpt3-ai-content-generator'),
                'wpaicgp_post_date' => esc_html__('Date','gpt3-ai-content-generator'),
                'wpaicgp_post_type' => esc_html__('Post Type','gpt3-ai-content-generator'),
                'wpaicgp_post_parent' => esc_html__('Parent','gpt3-ai-content-generator'),
                'wpaicgp_post_status' => esc_html__('Status','gpt3-ai-content-generator'),
                'wpaicgp_permalink' => esc_html__('Permalink','gpt3-ai-content-generator'),
            ),
            'custom_fields' => $meta_keys,
            'taxonomies' => $taxonomies,
            'users' => array(
                'wpaicgauthor_user_login' => esc_html__('User Login','gpt3-ai-content-generator'),
                'wpaicgauthor_user_nicename' => esc_html__('Nicename','gpt3-ai-content-generator'),
                'wpaicgauthor_user_email' => esc_html__('Email','gpt3-ai-content-generator'),
                'wpaicgauthor_display_name' => esc_html__('Display Name','gpt3-ai-content-generator'),
            )
        );
        $wpaicg_custom_types[$key] = $post_type;
    }
}
if(count($wpaicg_custom_types)){
    foreach($wpaicg_custom_types as $key=>$wpaicg_custom_type){
        ?>
        <div class="mb-5">
            <label>
                <input<?php echo \WPAICG\wpaicg_util_core()->wpaicg_is_pro() ? '' : ' disabled'?><?php echo in_array($key,$wpaicg_builder_types) && \WPAICG\wpaicg_util_core()->wpaicg_is_pro() ? ' checked':'';?> type="checkbox" name="wpaicg_builder_types[]" value="<?php echo esc_html($key)?>">&nbsp;<?php echo esc_html($wpaicg_custom_type['label'])?>
            </label>
            <input class="wpaicg_builder_custom_<?php echo esc_html($key)?>" type="hidden" name="<?php echo (\WPAICG\wpaicg_util_core()->wpaicg_is_pro()) ? 'wpaicg_builder_custom['.esc_html($key).']' : '';?>" value="<?php echo esc_html($wpaicg_custom_type['assigns'])?>">
            <a<?php echo \WPAICG\wpaicg_util_core()->wpaicg_is_pro() ? '' : ' disabled'; ?>
                class="<?php echo \WPAICG\wpaicg_util_core()->wpaicg_is_pro() ? 'wpaicg_assignments' : '';?> wpaicg_assignments_<?php echo esc_html($key)?>"
                data-assigns="<?php echo esc_html($wpaicg_custom_type['assigns'])?>"
                data-post-type="<?php echo esc_html($key)?>"
                data-post-name="<?php echo esc_html($wpaicg_custom_type['label'])?>"
                data-custom-fields="<?php echo isset($wpaicg_custom_type['custom_fields']) && is_array($wpaicg_custom_type['custom_fields']) && count($wpaicg_custom_type['custom_fields']) ? esc_html(json_encode($wpaicg_custom_type['custom_fields'])) : ''?>"
                data-taxonomies="<?php echo isset($wpaicg_custom_type['taxonomies']) && is_array($wpaicg_custom_type['taxonomies']) && count($wpaicg_custom_type['taxonomies']) ? esc_html(json_encode($wpaicg_custom_type['taxonomies'])) : ''?>"
                data-users="<?php echo isset($wpaicg_custom_type['users']) && is_array($wpaicg_custom_type['users']) && count($wpaicg_custom_type['users']) ? esc_html(json_encode($wpaicg_custom_type['users'])) : ''?>"
                data-standards="<?php echo isset($wpaicg_custom_type['standard']) && is_array($wpaicg_custom_type['standard']) && count($wpaicg_custom_type['standard']) ? esc_html(json_encode($wpaicg_custom_type['standard'])) : ''?>"
                href="javascript:void(0)">
                [<?php echo esc_html__('Select Fields','gpt3-ai-content-generator')?>]
            </a>
            <?php
            if(!\WPAICG\wpaicg_util_core()->wpaicg_is_pro()){
                ?>
                <span style="font-size: 13px;display: inline-block;margin: 0 5px;background: #ffba00;padding: 2px 5px;border-radius: 3px;color: #000;font-weight: bold;"><?php echo esc_html__('Pro','gpt3-ai-content-generator')?></span>
                <?php
            }
            ?>
        </div>
        <?php
    }
}
?>
<script>
    jQuery(document).ready(function ($){
        function wpaicggetFields(btn){
            let custom_fields = btn.attr('data-custom-fields');
            let taxonomies = btn.attr('data-taxonomies');
            let users = btn.attr('data-users');
            let standards = btn.attr('data-standards');
            let fields = {};
            if(standards !== ''){
                standards = JSON.parse(standards);
                fields['1standards'] = standards;
            }
            if(custom_fields !== ''){
                custom_fields = JSON.parse(custom_fields);
                fields['2custom'] = {};
                $.each(custom_fields, function(idx, item){
                    fields['2custom'][item] = item.replace(/wpaicgcf_/g,'');
                })
            }
            if(taxonomies !== ''){
                taxonomies = JSON.parse(taxonomies);
                fields['3taxonomies'] = {};
                $.each(taxonomies, function(idx, item){
                    fields['3taxonomies'][item.label] = item.name;
                });
            }
            if(users !== ''){
                users = JSON.parse(users);
                fields['4users'] = users;
            }
            return fields;
        }
        $('.wpaicg_modal_close').click(function (){
            $('.wpaicg_modal_close').closest('.wpaicg_modal').hide();
            $('.wpaicg-overlay').hide();
        });
        function wpaicgAddField(fields, selected_field){
            let field_selected = false;
            let field_name = false;
            if(typeof selected_field !== "undefined"){
                field_selected = selected_field[0];
                field_name = selected_field[1].replace(/\\/g,'');
            }
            let html = '<div class="wpaicg_assign_field" style="display: flex;justify-content: space-between;padding: 5px;border: 1px solid #ccc;border-radius: 3px;margin-bottom: 10px;background: #f1f1f1;">';
            html += '<select class="regular-text">';
            $.each(fields, function (idx, item){
                if(idx === '1standards'){
                    html += '<optgroup label="<?php echo esc_html__('Standard','gpt3-ai-content-generator')?>">';
                }
                if(idx === '2custom'){
                    html += '<optgroup label="<?php echo esc_html__('Custom Fields','gpt3-ai-content-generator')?>">';
                }
                if(idx === '3taxonomies'){
                    html += '<optgroup label="<?php echo esc_html__('Taxonomies','gpt3-ai-content-generator')?>">';
                }
                if(idx === '4users'){
                    html += '<optgroup label="<?php echo esc_html__('Users','gpt3-ai-content-generator')?>">';
                }
                $.each(item, function(idy, name){
                    html += '<option'+(field_selected && field_selected === idy ? ' selected':'')+' value="'+idy+'">'+name+'</option>';
                })
                html += '</optgroup>';
            })
            html += '</select>';
            html += '<input type="text" class="regular-text" value="'+(field_name ?  field_name : '')+'" placeholder="<?php echo esc_html__('Label','gpt3-ai-content-generator')?>">';
            html += '<span class="wpaicg_assign_delete dashicons dashicons-trash" style="height: 29px;width: 36px;background: #cf0000;border-radius: 2px;cursor: pointer;display: flex;align-items: center;justify-content: center;color: #fff;"></span>';
            html += '</div>';
            return html;
        }
        $(document).on('click','.wpaicg_assign_delete', function (e){
            $(e.currentTarget).parent().remove();
        })
        $(document).on('click','.wpaicg_assign_field_btn', function (e){
            let btn = $(e.currentTarget);
            let post_type = btn.attr('data-post-type');
            let assignBtn = $('.wpaicg_assignments_'+post_type);
            let fields = wpaicggetFields(assignBtn);
            let html = wpaicgAddField(fields);
            $('.wpaicg_assigns_fields').append(html);
        })
        $(document).on('click','.wpaicg_assignments', function (e){
            let btn = $(e.currentTarget);
            let content = '';
            let post_name = btn.attr('data-post-name');
            let post_type = btn.attr('data-post-type');
            let assigns = btn.attr('data-assigns');
            let fields = wpaicggetFields(btn);
            content += '<div class="wpaicg_assigns_fields" data-post-type="'+post_type+'">';
            if(assigns !== ''){
                let assigns_lists = [];
                assigns = assigns.split('||');
                $.each(assigns, function (idx, item){
                    let assign_item = item.split('##');
                    assigns_lists.push(assign_item[0]);
                    content += wpaicgAddField(fields,assign_item);
                });

            }
            content += '</div>';
            content += '<div class="wpaicg_assign_footer"><button data-post-type="'+post_type+'" class="button button-link-delete wpaicg_assign_field_btn" style="display: block;width: 48%;"><?php echo esc_html__('Add Field','gpt3-ai-content-generator')?></button>';
            content += '<button class="button button-primary wpaicg_assign_field_save" data-post-type="'+post_type+'" style="display: block;width: 48%"><?php echo esc_html__('Save','gpt3-ai-content-generator')?></button></div>';
            $('.wpaicg_modal_title').html('<?php echo esc_html__('Select Fields','gpt3-ai-content-generator')?>: '+post_name);
            $('.wpaicg_modal_content').html(content);
            $('.wpaicg-overlay').show();
            $('.wpaicg_modal').show();
        });
        $(document).on('click','.wpaicg_assign_field_save', function (e){
            let btn = $(e.currentTarget);
            let post_type = btn.attr('data-post-type');
            let assigns = [];
            let has_error = false;
            $('.wpaicg_assigns_fields .wpaicg_assign_field').each(function (idx, item){
                let field_id = $(item).find('select').val();
                let field_name = $(item).find('input').val();
                if(field_name === ''){
                    has_error = '<?php echo esc_html__('Please insert all fields or remove empty fields','gpt3-ai-content-generator')?>';
                }
                else{
                    assigns.push(field_id+'##'+field_name);
                }
            })
            if(has_error){
                alert(has_error);
            }
            else{
                $('.wpaicg_builder_custom_'+post_type).val(assigns.join('||'));
                $('.wpaicg_assignments_'+post_type).attr('data-assigns',assigns.join('||'));
                $('.wpaicg_modal_content').empty();
                $('.wpaicg-overlay').hide();
                $('.wpaicg_modal').hide();
            }
        });
    })
</script>
