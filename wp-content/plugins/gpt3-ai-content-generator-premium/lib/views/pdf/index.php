<?php
if ( ! defined( 'ABSPATH' ) ) exit;
global $wpdb;
$wpaicg_embedding_page = isset($_GET['wpage']) && !empty($_GET['wpage']) ? sanitize_text_field($_GET['wpage']) : 1;
$wpaicg_sub_action = isset($_GET['sub']) && !empty($_GET['sub']) ? sanitize_text_field($_GET['sub']) : false;
if($wpaicg_sub_action == 'deleteall'){
    $ids = $wpdb->get_results("SELECT ID FROM ".$wpdb->posts." WHERE post_type='wpaicg_pdfadmin'");
    $ids = wp_list_pluck($ids,'ID');
    if(count($ids)) {
        WPAICG\WPAICG_PDF::get_instance()->wpaicg_delete_embeddings_ids($ids,'wpaicg_pdfadmin');
    }
    echo '<script>window.location.href = "'.admin_url('admin.php?page=wpaicg_embeddings&action=pdf').'";</script>';
    exit;
}
?>
<style>
    .wpaicg_pdf{
        max-width: 500px;
    }
    .wpaicg_pdf_progress{
        height: 15px;
        width: 100%;
        position: relative;
        background: #d9d9d9;
        border-radius: 4px;
        overflow:hidden;
    }
    .wpaicg_pdf_progress span{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: #2271b1;
        -webkit-transition: width 0.5s ease-in-out;
        -moz-transition: width 0.5s ease-in-out;
        -o-transition: width 0.5s ease-in-out;
        transition: width 0.5s ease-in-out;
    }
    .wpaicg_pdf_progress.wpaicg_error span{
        background: #d63638;
    }
    .wpaicg_modal{
        top: 5%;
        height: 90%;
        position: relative;
    }
    .wpaicg_modal_content{
        max-height: calc(100% - 103px);
        overflow-y: auto;
    }
    .wp-core-ui .button.wpaicg-danger-btn{
        background: #c90000;
        color: #fff;
        border-color: #cb0000;
    }
    .wpaicg_pdf_message{
        margin-bottom: 20px;
    }
</style>
<div class="wpaicg_pdf">
    <p>
        <strong><?php echo esc_html__('Select PDF File','gpt3-ai-content-generator')?>: </strong>
        <input type="file" class="wpaicg_pdf_file" accept="application/pdf">
        <button class="button button-primary wpaicg_pdf_start"><?php echo esc_html__('Start','gpt3-ai-content-generator')?></button>
    </p>
    <div class="wpaicg_pdf_progress" style="display: none">
        <span></span>
    </div>
    <div class="wpaicg_pdf_message"></div>
</div>
<?php
$wpaicg_embeddings = new WP_Query(array(
    'post_type' => 'wpaicg_pdfadmin',
    'posts_per_page' => 40,
    'paged' => $wpaicg_embedding_page,
    'order' => 'DESC',
    'orderby' => 'date'
));
?>
<?php
if($wpaicg_embeddings->have_posts()):
    ?>
    <div class="tablenav top wpaicg-mb-10">
        <div class="alignleft actions bulkactions">
            <a onclick="return confirm('<?php echo esc_html__('Warning! All indexes will be deleted from Pinecone and elsewhere. Are you sure?','gpt3-ai-content-generator')?>')" href="<?php echo admin_url('admin.php?page=wpaicg_embeddings&action=pdf&sub=deleteall')?>" class="button wpaicg-danger-btn"><?php echo esc_html__('Delete Everything','gpt3-ai-content-generator')?></a>
            <button class="button btn-delete-embeddings wpaicg-danger-btn"><?php echo esc_html__('Delete Selected','gpt3-ai-content-generator')?></button>
        </div>
    </div>
<?php
endif;
?>
<table class="wp-list-table widefat fixed striped table-view-list posts">
    <thead>
    <tr>
        <td id="cb" class="manage-column column-cb check-column" scope="col"><input type="checkbox" class="wpaicg-select-all"></td>
        <th scope="col"><?php echo esc_html__('Filename','gpt3-ai-content-generator')?></th>
        <th scope="col"><?php echo esc_html__('Token','gpt3-ai-content-generator')?></th>
        <th scope="col"><?php echo esc_html__('Date','gpt3-ai-content-generator')?></th>
        <th scope="col"><?php echo esc_html__('Action','gpt3-ai-content-generator')?></th>
    </tr>
    </thead>
    <tbody>
    <?php
    if($wpaicg_embeddings->have_posts()){
        foreach ($wpaicg_embeddings->posts as $wpaicg_embedding){
            $token = get_post_meta($wpaicg_embedding->ID,'wpaicg_embedding_token',true);
            ?>
            <tr id="wpaicg-builder-<?php echo esc_html($wpaicg_embedding->ID)?>">
                <th scope="row" class="check-column">
                    <input class="cb-select-embedding" id="cb-select-<?php echo esc_html($wpaicg_embedding->ID);?>" type="checkbox" name="ids[]" value="<?php echo esc_html($wpaicg_embedding->ID);?>">
                </th>
                <td><a data-content="<?php echo htmlentities(wp_kses_post($wpaicg_embedding->post_content),ENT_QUOTES,'UTF-8')?>" href="javascript:void()" class="wpaicg-embedding-content"><?php echo esc_html($wpaicg_embedding->post_title)?></a></td>
                <td><?php echo esc_html($token)?></td>
                <td><?php echo esc_html($wpaicg_embedding->post_date)?></td>
                <td><button data-id="<?php echo esc_html($wpaicg_embedding->ID)?>" class="button button-link-delete wpaicg_delete button-small"><?php echo esc_html__('Delete','gpt3-ai-content-generator')?></button></td>
            </tr>
            <?php
        }
    }
    ?>
    </tbody>
</table>
<div class="wpaicg-paginate">
    <?php
    echo paginate_links( array(
        'base'         => admin_url('admin.php?page=wpaicg_embeddings&action=pdf&wpage=%#%'),
        'total'        => $wpaicg_embeddings->max_num_pages,
        'current'      => $wpaicg_embedding_page,
        'format'       => '?wpage=%#%',
        'show_all'     => false,
        'prev_next'    => false,
        'add_args'     => false,
    ));
    ?>
</div>
<script>
    jQuery(document).ready(function ($){
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
        var wpaicg_pdf_start = $('.wpaicg_pdf_start');
        var wpaicg_pdf_file = $('.wpaicg_pdf_file');
        var wpaicg_pdf_message = $('.wpaicg_pdf_message');
        var wpaicg_pdf_progress = $('.wpaicg_pdf_progress');
        function wpaicgDoPDFPage(start,filename, contents,callback){
            var content = contents[start];
            var page = start+1;
            $.ajax({
                url: '<?php echo admin_url('admin-ajax.php')?>',
                type:'POST',
                dataType: 'JSON',
                beforeSend: function(){
                    wpaicg_pdf_message.html('<?php echo esc_html__('Embedding page: ','gpt3-ai-content-generator')?>'+page);
                },
                data: {
                    nonce: '<?php echo wp_create_nonce('wpaicg-ajax-action')?>',
                    content: content,
                    action: 'wpaicg_admin_pdf',
                    page: page,
                    filename: filename
                },
                success: function(res){
                    if(res.status === 'success'){
                        var width = wpaicg_pdf_progress.width();
                        var readWidth = width*0.1;
                        var leftWidth = width - (width*0.1);
                        var perWidth = leftWidth/contents.length;
                        var progressWidth = readWidth+(perWidth*page);
                        wpaicg_pdf_progress.find('span').width(progressWidth);
                        if(page === contents.length){
                            callback(res);
                        }
                        else{
                            wpaicgDoPDFPage(page,filename,contents,callback);
                        }
                    }
                    else{
                        wpaicgRmLoading(wpaicg_pdf_start);
                        wpaicg_pdf_file.val('');
                        wpaicg_pdf_progress.addClass('wpaicg_error');
                        wpaicg_pdf_message.html(res.msg);
                    }
                }
            })
        }
        wpaicg_pdf_start.on('click',async function (){
            if(wpaicg_pdf_file[0].files.length){
                var file = wpaicg_pdf_file[0].files[0];
                if(file.type === 'application/pdf'){
                    wpaicgLoading(wpaicg_pdf_start);
                    wpaicg_pdf_message.show();
                    wpaicg_pdf_progress.show();
                    wpaicg_pdf_message.html('<?php echo esc_html__('Reading PDF file','gpt3-ai-content-generator')?>');
                    wpaicg_pdf_progress.removeClass('wpaicg_error');
                    wpaicg_pdf_progress.find('span').width('10%');
                    var _OBJECT_URL = URL.createObjectURL(file);
                    var loadingTask = pdfjsLib.getDocument({url: _OBJECT_URL});
                    var pageContents = [];
                    var pageNumbers = 0;
                    await loadingTask.promise.then(async function (pdf) {
                        pageNumbers = pdf.numPages;
                        for (var i = 1; i <= pageNumbers; i++) {
                            var page = await pdf.getPage(i);
                            var textContent = await page.getTextContent();
                            pageContents.push(textContent.items.map(u => u.str).join("\n"));
                        }
                    });
                    if(pageContents.length) {
                        wpaicgDoPDFPage(0,file.name,pageContents,function(res){
                            wpaicgRmLoading(wpaicg_pdf_start);
                            wpaicg_pdf_file.val('');
                            if(res.status === 'success'){
                                wpaicg_pdf_message.html('<?php echo esc_html__('Your PDF embedded successfully','gpt3-ai-content-generator')?>')
                                setTimeout(function (){
                                    window.location.reload();
                                },2000)
                            }
                            else{
                                wpaicg_pdf_progress.addClass('wpaicg_error');
                                wpaicg_pdf_message.html(res.msg);
                            }
                        })
                    }
                    else{
                        wpaicgRmLoading(wpaicg_pdf_start);
                        wpaicg_pdf_file.val('');
                        alert('<?php echo esc_html__('Your PDF file empty','gpt3-ai-content-generator')?>')
                    }
                }
                else{
                    alert('<?php echo esc_html__('Please select PDF file','gpt3-ai-content-generator')?>')
                }
            }
            else{
                alert('<?php echo esc_html__('Please select PDF file before start','gpt3-ai-content-generator')?>')
            }
        });
        $('.wpaicg_modal_close').click(function () {
            $('.wpaicg_modal_close').closest('.wpaicg_modal').hide();
            $('.wpaicg-overlay').hide();
        })
        $('.wpaicg-embedding-content').click(function () {
            var content = $(this).attr('data-content');
            content = content.replace(/\n/g, "<br />");
            $('.wpaicg_modal_title').html('<?php echo esc_html__('Embedding Content', 'gpt3-ai-content-generator')?>');
            $('.wpaicg_modal_content').html(content);
            $('.wpaicg-overlay').show();
            $('.wpaicg_modal').show();
        });
        $('.btn-delete-embeddings').click(function (){
            var conf = confirm('<?php echo esc_html__('Warning! Entries will be deleted from Pinecone and elsewhere. Are you sure?','gpt3-ai-content-generator')?>')
            if(conf) {
                var btn = $(this);
                var ids = [];
                $('.cb-select-embedding:checked').each(function (idx, item) {
                    ids.push($(item).val())
                });
                if (ids.length) {
                    $.ajax({
                        url: '<?php echo admin_url('admin-ajax.php')?>',
                        data: {type: 'wpaicg_pdfadmin',action: 'wpaicg_pdfs_delete', ids: ids,'nonce': '<?php echo wp_create_nonce('wpaicg-ajax-nonce')?>'},
                        dataType: 'JSON',
                        type: 'POST',
                        beforeSend: function () {
                            wpaicgLoading(btn);
                        },
                        success: function (res) {
                            window.location.reload();
                        },
                        error: function () {

                        }
                    });
                } else {
                    alert('<?php echo esc_html__('Nothing to do','gpt3-ai-content-generator')?>');
                }
            }
        });
        $(document).on('click','.wpaicg_delete' ,function (e){
            var btn = $(e.currentTarget);
            var id = btn.attr('data-id');
            var conf = confirm('<?php echo esc_html__('Are you sure?','gpt3-ai-content-generator')?>');
            if(conf){
                $.ajax({
                    url: '<?php echo admin_url('admin-ajax.php')?>',
                    data: {type: 'wpaicg_pdfadmin',action: 'wpaicg_pdfs_delete', ids: [id],'nonce': '<?php echo wp_create_nonce('wpaicg-ajax-nonce')?>'},
                    dataType: 'JSON',
                    type: 'POST',
                    beforeSend: function (){
                        wpaicgLoading(btn);
                    },
                    success: function (res){
                        wpaicgRmLoading(btn);
                        if(res.status === 'success'){
                            $('#wpaicg-builder-'+id).remove();
                        }
                        else{
                            alert(res.msg);
                        }
                    },
                    error: function (){
                        wpaicgRmLoading(btn);
                        alert('<?php echo esc_html__('Something went wrong','gpt3-ai-content-generator')?>');
                    }
                })
            }
        });
    })
</script>
