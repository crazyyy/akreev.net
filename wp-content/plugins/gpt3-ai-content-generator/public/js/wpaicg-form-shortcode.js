var eventGenerator = false;
var wpaicg_limited_token = false;
function wpaicgBasicEditor(){
    var basicEditor = true;
    if(wpaicg_prompt_logged){
        var editor = tinyMCE.get('wpaicg-prompt-result');
        if ( document.getElementById('wp-wpaicg-prompt-result-wrap').classList.contains('tmce-active') && editor ) {
            basicEditor = false;
        }
    }
    return basicEditor;
}
function wpaicgSetContent(value){
    if(wpaicgResponseType === 'textarea') {
        if (wpaicgBasicEditor()) {
            document.getElementById('wpaicg-prompt-result').value = value;
        } else {
            var editor = tinyMCE.get('wpaicg-prompt-result');
            editor.setContent(value);
        }
    }
    else{
        document.getElementById('wpaicg-prompt-result').innerHTML = value;
    }
}
function wpaicgGetContent(){
    if(wpaicgResponseType === 'textarea') {
        if (wpaicgBasicEditor()) {
            return document.getElementById('wpaicg-prompt-result').value
        } else {
            var editor = tinyMCE.get('wpaicg-prompt-result');
            var content = editor.getContent();
            content = content.replace(/<\/?p(>|$)/g, "");
            return content;
        }
    }
    else return document.getElementById('wpaicg-prompt-result').innerHTML;
}
function wpaicgLoadingBtn(btn){
    btn.setAttribute('disabled','disabled');
    btn.innerHTML += '<span class="wpaicg-loader"></span>';
}
function wpaicgRmLoading(btn){
    btn.removeAttribute('disabled');
    btn.removeChild(btn.getElementsByTagName('span')[0]);
}
function wpaicgEventClose(){
    wpaicgStop.style.display = 'none';
    if(!wpaicg_limited_token) {
        wpaicgSaveResult.style.display = 'block';
    }
    wpaicgRmLoading(wpaicgGenerateBtn);
    eventGenerator.close();
}
function wpaicgValidEmail(email){
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
function wpaicgValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}
var wpaicg_break_newline = wpaicgUserLoggedIn ? '<br/><br />': '\n\n';
if(typeof wpaicgForm !== "undefined" && wpaicgForm != undefined && wpaicgForm.length) {
    wpaicgForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var max_tokens = wpaicgMaxToken.value;
        var temperature = wpaicgTemperature.value;
        var top_p = wpaicgTopP.value;
        var best_of = wpaicgBestOf.value;
        var frequency_penalty = wpaicgFP.value;
        var presence_penalty = wpaicgPP.value;
        var error_message = false;
        var title = wpaicgPromptTitle.value;
        if (title === '') {
            error_message = 'Please insert prompt';
        } else if (max_tokens === '') {
            error_message = 'Please enter max tokens';
        } else if (parseFloat(max_tokens) < 1 || parseFloat(max_tokens) > 8000) {
            error_message = 'Please enter a valid max tokens value between 1 and 8000';
        } else if (temperature === '') {
            error_message = 'Please enter temperature';
        } else if (parseFloat(temperature) < 0 || parseFloat(temperature) > 1) {
            error_message = 'Please enter a valid temperature value between 0 and 1';
        } else if (top_p === '') {
            error_message = 'Please enter Top P';
        } else if (parseFloat(top_p) < 0 || parseFloat(top_p) > 1) {
            error_message = 'Please enter a valid Top P value between 0 and 1';
        } else if (best_of === '') {
            error_message = 'Please enter best of';
        } else if (parseFloat(best_of) < 1 || parseFloat(best_of) > 20) {
            error_message = 'Please enter a valid best of value between 0 and 1';
        } else if (frequency_penalty === '') {
            error_message = 'Please enter frequency penalty';
        } else if (parseFloat(frequency_penalty) < 0 || parseFloat(frequency_penalty) > 2) {
            error_message = 'Please enter a valid frequency penalty value between 0 and 2';
        } else if (presence_penalty === '') {
            error_message = 'Please enter presence penalty';
        } else if (parseFloat(presence_penalty) < 0 || parseFloat(presence_penalty) > 2) {
            error_message = 'Please enter a valid presence penalty value between 0 and 2';
        }
        if (error_message) {
            alert(error_message);
        } else {
            if (typeof wpaicgFormFields === 'object') {
                for (var i = 0; i < wpaicgFormFields.length; i++) {
                    var form_field = wpaicgFormFields[i];
                    var field = document.getElementById('wpaicg-form-field-' + i);
                    var field_type = form_field['type'] !== undefined ? form_field['type'] : 'text';
                    var field_label = form_field['label'] !== undefined ? form_field['label'] : '';
                    var field_min = form_field['min'] !== undefined ? form_field['min'] : '';
                    var field_max = form_field['max'] !== undefined ? form_field['max'] : '';
                    if (field_type !== 'radio' && field_type !== 'checkbox') {
                        var field_value = field.value;
                        if (field_type === 'text' || field_type === 'textarea' || field_type === 'email' || field_type === 'url') {
                            if (field_min !== '' && field_value.length < parseInt(field_min)) {
                                error_message = field_label + ' minimum ' + field_min + ' characters';
                            } else if (field_max !== '' && field_value.length > parseInt(field_max)) {
                                error_message = field_label + ' maximum ' + field_max + ' characters';
                            } else if (field_type === 'email' && !wpaicgValidEmail(field_value)) {
                                error_message = field_label + ' must be email address';
                            } else if (field_type === 'url' && !wpaicgValidUrl(field_value)) {
                                error_message = field_label + ' must be url';
                            }
                        } else if (field_type === 'number') {
                            if (field_min !== '' && parseFloat(field_value) < parseInt(field_min)) {
                                error_message = field_label + ' minimum ' + field_min;
                            } else if (field_max !== '' && parseFloat(field_value) > parseInt(field_max)) {
                                error_message = field_label + ' maximum ' + field_max;
                            }
                        }
                    } else if (field_type === 'checkbox' || field_type === 'radio') {
                        var field_inputs = field.getElementsByTagName('input');
                        var field_checked = false;
                        if (field_inputs && field_inputs.length) {
                            for (var y = 0; y < field_inputs.length; y++) {
                                var field_input = field_inputs[y];
                                if (field_input.checked) {
                                    field_checked = true;
                                }
                            }
                        }
                        if (!field_checked) {
                            error_message = field_label + ' is required';
                        }
                    }
                }
            }
            if (error_message) {
                alert(error_message);
            } else {
                let startTime = new Date();
                if (typeof wpaicgFormFields === 'object') {
                    for (var i = 0; i < wpaicgFormFields.length; i++) {
                        var form_field = wpaicgFormFields[i];
                        var field_type = form_field.type;
                        var field = document.getElementById('wpaicg-form-field-' + i);
                        var field_name = form_field['id'] !== undefined ? form_field['id'] : '';
                        var field_value;
                        if (field_type === 'checkbox' || field_type === 'radio') {
                            field_value = '';
                            var field_inputs = field.getElementsByTagName('input');
                            if (field_inputs && field_inputs.length) {
                                for (var y = 0; y < field_inputs.length; y++) {
                                    var field_input = field_inputs[y];
                                    if (field_input.checked) {
                                        var current_field_value = field_input.value;
                                        if (current_field_value !== undefined && current_field_value !== '') {
                                            field_value += (field_value === '' ? '' : ', ') + current_field_value;
                                        }
                                    }
                                }
                            }
                        } else {
                            field_value = field.value;
                        }
                        var sRegExInput = new RegExp('{' + field_name + '}', 'g');
                        title = title.replace(sRegExInput, field_value);
                    }
                }
                wpaicgPromptTitleFilled.value = title + ".\n\n";
                let queryString = new URLSearchParams(new FormData(wpaicgForm)).toString();
                wpaicgLoadingBtn(wpaicgGenerateBtn);
                wpaicgSaveResult.style.display = 'none';
                wpaicgStop.style.display = 'inline';
                wpaicgSetContent('');
                var wpaicg_limitLines = parseFloat(wpaicgMaxLines.value);
                var count_line = 0;
                var currentContent = '';
                queryString += '&source_stream=form&nonce='+wpaicgAjaxNonce;
                eventGenerator = new EventSource(wpaicgEventURL + '&' + queryString);
                var wpaicg_response_events = 0;
                var wpaicg_newline_before = false;
                let prompt_response = '';
                wpaicg_limited_token = false;
                eventGenerator.onmessage = function (e) {
                    currentContent = wpaicgGetContent();
                    if (e.data === "[DONE]") {
                        count_line += 1;
                        wpaicgSetContent(currentContent + wpaicg_break_newline);
                        wpaicg_response_events = 0;
                    }
                    else if (e.data === "[LIMITED]") {
                        wpaicg_limited_token = true;
                        count_line += 1;
                        wpaicgSetContent(currentContent + wpaicg_break_newline);
                        wpaicg_response_events = 0;
                    } else {
                        var result = JSON.parse(e.data);
                        var content_generated = '';
                        if (result.error !== undefined) {
                            content_generated = result.error.message;
                        } else {
                            content_generated = result.choices[0].delta !== undefined ? (result.choices[0].delta.content !== undefined ? result.choices[0].delta.content : '') : result.choices[0].text;
                        }
                        prompt_response += content_generated;
                        if ((content_generated === '\n' || content_generated === ' \n' || content_generated === '.\n' || content_generated === '\n\n' || content_generated === '.\n\n') && wpaicg_response_events > 0 && currentContent !== '') {
                            console.log(currentContent);
                            if (!wpaicg_newline_before) {
                                wpaicg_newline_before = true;
                                wpaicgSetContent(currentContent + wpaicg_break_newline);
                            }
                        } else if (content_generated === '\n' && wpaicg_response_events === 0 && currentContent === '') {

                        } else {
                            wpaicg_newline_before = false;
                            wpaicg_response_events += 1;
                            wpaicgSetContent(currentContent + content_generated);
                        }
                    }
                    if (count_line === wpaicg_limitLines) {
                        if(!wpaicg_limited_token) {
                            let endTime = new Date();
                            let timeDiff = endTime - startTime;
                            timeDiff = timeDiff / 1000;
                            queryString += '&action=wpaicg_form_log&prompt_id=' + wpaicgFormId + '&prompt_name=' + wpaicgFormName + '&prompt_response=' + prompt_response + '&duration=' + timeDiff + '&_wpnonce=' + wpaicgFormNonce + '&source_id=' + wpaicgFormSourceID;
                            const xhttp = new XMLHttpRequest();
                            xhttp.open('POST', wpaicgAjaxUrl);
                            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            xhttp.send(queryString);
                            xhttp.onreadystatechange = function (oEvent) {
                                if (xhttp.readyState === 4) {

                                }
                            }
                        }
                        wpaicgEventClose();
                    }
                }
            }
        }
        return false;
    });
}
if(typeof wpaicgStop  !== 'undefined') {
    wpaicgStop.addEventListener('click', function (e) {
        e.preventDefault();
        wpaicgEventClose();
    });
}
if(typeof wpaicgClearBtn !== 'undefined') {
    wpaicgClearBtn.addEventListener('click', function (e) {
        e.preventDefault();
        wpaicgSetContent('');
        wpaicgSaveResult.style.display = 'none';
    });
}
if(wpaicgUserLoggedIn && typeof wpaicgSaveDraftBtn != 'undefined'){
    wpaicgSaveDraftBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var title = document.getElementById('wpaicg-prompt-post_title').value;
        var content = wpaicgGetContent();
        if (title === '') {
            alert('Please insert title');
        } else if (content === '') {
            alert('Please wait generate content')
        } else {
            const xhttp = new XMLHttpRequest();
            xhttp.open('POST', wpaicgAjaxUrl);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send('action=wpaicg_save_draft_post_extra&title=' + title + '&content=' + content+'&save_source=promptbase&nonce='+wpaicgAjaxNonce);
            wpaicgLoadingBtn(wpaicgSaveDraftBtn);
            xhttp.onreadystatechange = function (oEvent) {
                if (xhttp.readyState === 4) {
                    wpaicgRmLoading(wpaicgSaveDraftBtn);
                    if (xhttp.status === 200) {
                        var wpaicg_response = this.responseText;
                        wpaicg_response = JSON.parse(wpaicg_response);
                        if (wpaicg_response.status === 'success') {
                            window.location.href = wpaicgAdminPost+'?post=' + wpaicg_response.id + '&action=edit';
                        } else {
                            alert(wpaicg_response.msg);
                        }
                    } else {
                        alert('Something went wrong');
                    }
                }
            }
        }
    })
}
