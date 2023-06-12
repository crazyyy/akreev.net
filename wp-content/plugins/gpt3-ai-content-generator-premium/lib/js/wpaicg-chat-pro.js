var wpaicgPDFBtns = document.querySelectorAll('.wpaicg-pdf-icon');
var wpaicgPDFFiles = document.querySelectorAll('.wpaicg-pdf-file');
var wpaicgPDFRemoves = document.querySelectorAll('.wpaicg-pdf-remove');
function wpaicgPDFEvent(btn){
    var fileInput = btn.parentElement.querySelector('.wpaicg-pdf-file');
    fileInput.click();
}
function wpaicgPDFEmbedding(start,namespace,filename,nonce,contents,type,bot_id,chat,callback){
    var result = '';
    var next = start+1;
    var pageContent = contents[start];
    var embeddingData = new FormData();
    var embeddingRequest = new XMLHttpRequest();
    embeddingData.append('nonce', nonce);
    embeddingData.append('action', 'wpaicg_pdf_embedding');
    embeddingData.append('content', pageContent);
    embeddingData.append('page', next);
    embeddingData.append('namespace', namespace);
    embeddingData.append('type', type);
    embeddingData.append('bot_id', bot_id);
    embeddingData.append('filename', filename);
    embeddingRequest.open("POST", wpaicg_ajax_url,true);
    embeddingRequest.send(embeddingData);
    embeddingRequest.onreadystatechange = function (oEvent) {
        if (embeddingRequest.readyState === 4) {
            if (embeddingRequest.status === 200) {
                result = this.responseText;
                result = JSON.parse(result);
                if(result.status === 'success') {
                    if (next === contents.length) {
                        callback(result)
                    } else {
                        wpaicgPDFEmbedding(next, namespace, filename, nonce, contents, type, bot_id,chat, callback);
                    }
                }
                else{
                    alert(result.msg);
                }
            }
        }
    }
}
async function wpaicgPDFChange(input) {
    var type = input.getAttribute('data-type');
    var chat,class_ai_item;
    if(type === 'widget'){
        chat = input.closest('.wpaicg-chatbox');
        class_ai_item = 'wpaicg-chat-ai-message';
    }
    else{
        chat = input.closest('.wpaicg-chat-shortcode');
        class_ai_item = 'wpaicg-ai-message';
    }
    let wpaicg_ai_bg = chat.getAttribute('data-ai-bg-color');
    let wpaicg_font_color = chat.getAttribute('data-color');
    let wpaicg_font_size = chat.getAttribute('data-fontsize');
    let wpaicg_nonce = chat.getAttribute('data-nonce');
    let wpaicg_ai_name = chat.getAttribute('data-ai-name') + ':';
    let wpaicg_use_avatar = parseInt(chat.getAttribute('data-use-avatar'));
    let wpaicg_ai_avatar = chat.getAttribute('data-ai-avatar');
    if (wpaicg_use_avatar) {
        wpaicg_ai_name = '<img src="' + wpaicg_ai_avatar + '" height="40" width="40">';
    }
    var pdfLoading = input.parentElement.querySelector('.wpaicg-pdf-loading');
    var pdfIcon = input.parentElement.querySelector('.wpaicg-pdf-icon');
    var pdfRemove = input.parentElement.querySelector('.wpaicg-pdf-remove');
    var limitPage = parseInt(input.getAttribute('data-limit'));
    if (input.files.length) {
        pdfIcon.style.display = 'none';
        pdfRemove.style.display = 'none';
        pdfLoading.style.display = 'block';
        var _OBJECT_URL = URL.createObjectURL(input.files[0])
        var loadingTask = pdfjsLib.getDocument({url: _OBJECT_URL});
        var pageContents = [];
        var pdfTextContent = '';
        var pageNumbers = 0;

        var filename = input.files[0].name;
        await loadingTask.promise.then(async function (pdf) {
            pageNumbers = pdf.numPages;
            for (var i = 1; i <= pageNumbers; i++) {
                var page = await pdf.getPage(i);
                var textContent = await page.getTextContent();
                pageContents.push(textContent.items.map(u => u.str).join("\n"));
                pdfTextContent += textContent.items.map(u => u.str).join("\n");
            }
        });
        if(pageContents.length) {
            if (pageNumbers > limitPage) {
                pdfIcon.style.display = 'block';
                pdfLoading.style.display = 'none';
                pdfRemove.style.display = 'none';
                input.value = '';
                alert('Your PDF exceeds the page limit of '+limitPage+'. Please upload a smaller one.');
            } else {
                var namespace = 'gptpdf_'+Math.ceil(Math.random()*100000);
                var type = chat.getAttribute('data-type');
                var bot_id = parseInt(chat.getAttribute('data-bot-id'));
                wpaicgPDFEmbedding(0,namespace,filename,wpaicg_nonce,pageContents,type,bot_id,chat,function(result){
                    if (result.status === 'success') {
                        var firstWords = wpaicggetWords(pdfTextContent,1000);
                        var questionData = new FormData();
                        var questionRequest = new XMLHttpRequest();
                        questionData.append('type', type);
                        questionData.append('bot_id', bot_id);
                        questionData.append('nonce', wpaicg_nonce);
                        questionData.append('action', 'wpaicg_example_questions');
                        questionData.append('content', firstWords);
                        questionRequest.open("POST", wpaicg_ajax_url);
                        questionRequest.send(questionData);
                        questionRequest.onload = function (oEvent) {
                            result = this.responseText;
                            if(result !== '') {
                                result = result.replace(/\n/g, '<br>');
                                result = JSON.parse(result);
                                if (result.status === 'success') {
                                    var wpaicg_randomnum = Math.floor((Math.random() * 100000) + 1);
                                    result.data = result.data.replace(/\n/g,'<br>');
                                    var wpaicg_message = '<li class="' + class_ai_item + '" style="background-color:' + wpaicg_ai_bg + ';font-size: ' + wpaicg_font_size + 'px;color: ' + wpaicg_font_color + '"><p style="width:100%"><strong class="wpaicg-chat-avatar">' + wpaicg_ai_name + '</strong><span class="wpaicg-chat-message" id="wpaicg-chat-message-' + wpaicg_randomnum + '">'+result.data+'</span></p></li>';
                                    if(type === 'widget'){
                                        chat.querySelector('.wpaicg-chatbox-messages').innerHTML += wpaicg_message;
                                    }
                                    else{
                                        chat.querySelector('.wpaicg-chat-shortcode-messages').innerHTML += wpaicg_message;
                                    }
                                    chat.setAttribute('data-pdf', namespace);
                                    pdfIcon.style.display = 'none';
                                    pdfLoading.style.display = 'none';
                                    pdfRemove.style.display = 'flex';
                                } else {
                                    pdfRemove.style.display = 'none';
                                    pdfIcon.style.display = 'block';
                                    pdfLoading.style.display = 'none';
                                    alert(result.msg);
                                }
                            }
                        }
                    }
                    else{
                        pdfIcon.style.display = 'block';
                        pdfLoading.style.display = 'none';
                        pdfRemove.style.display = 'none';
                        alert(result.msg);
                    }
                });
            }
        }
        else{
            alert('Your pdf is empty.');
            pdfIcon.style.display = 'block';
            pdfLoading.style.display = 'none';
            input.value = '';
        }
    }
}
function wpaicggetWords(str,limit) {
    return str.split(/\s+/).slice(0,limit).join(" ");
}



if (wpaicgPDFBtns && wpaicgPDFBtns.length) {
    for (let i = 0; i < wpaicgPDFBtns.length; i++) {
        wpaicgPDFBtns[i].addEventListener('click', function () {
            wpaicgPDFEvent(wpaicgPDFBtns[i]);
        });
    }
}

if (wpaicgPDFFiles && wpaicgPDFFiles.length) {
    for (let i = 0; i < wpaicgPDFFiles.length; i++) {
        wpaicgPDFFiles[i].addEventListener('change', function (e) {
            wpaicgPDFChange(e.currentTarget);
        });
    }
}
if (wpaicgPDFRemoves && wpaicgPDFRemoves.length) {
    for (let i = 0; i < wpaicgPDFRemoves.length; i++) {
        wpaicgPDFRemoves[i].addEventListener('click', function (e) {
            var chat;
            var btn = e.currentTarget;
            var type = btn.getAttribute('data-type');
            if(type === 'shortcode'){
                chat = btn.closest('.wpaicg-chat-shortcode');
                chat.setAttribute('data-pdf','');
                chat.querySelector('.wpaicg-chat-shortcode-messages').innerHTML += '<li class="wpaicg_chatbox_line">'+wpaicgParams.languages.removed_pdf+'</li>';
            }
            else{
                chat = btn.closest('.wpaicg-chatbox');
                chat.setAttribute('data-pdf','')
                chat.querySelector('.wpaicg-chatbox-messages').innerHTML += '<li class="wpaicg_chatbox_line">'+wpaicgParams.languages.removed_pdf+'</li>';
            }
            btn.style.display = 'none';
            btn.parentElement.querySelector('.wpaicg-pdf-icon').style.display = 'block';
        });
    }
}
