function wpaicgChatInit() {
    let wpaicgMicIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M176 0C123 0 80 43 80 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM48 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H104c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H200V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>';
    let wpaicgStopIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>';
    var wpaicgChatStream;
    var wpaicgChatRec;
    var wpaicgInput;
    var wpaicgChatAudioContext = window.AudioContext || window.webkitAudioContext;
    var wpaicgaudioContext;
    var wpaicgMicBtns = document.querySelectorAll('.wpaicg-mic-icon');
    var wpaicgChatTyping = document.querySelectorAll('.wpaicg-chatbox-typing');
    var wpaicgShortcodeTyping = document.querySelectorAll('.wpaicg-chat-shortcode-typing');
    var wpaicgChatSend = document.querySelectorAll('.wpaicg-chatbox-send');
    var wpaicgShortcodeSend = document.querySelectorAll('.wpaicg-chat-shortcode-send');

    function wpaicgescapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function wpaicgstartChatRecording() {
        let constraints = {audio: true, video: false}
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            wpaicgaudioContext = new wpaicgChatAudioContext();
            wpaicgChatStream = stream;
            wpaicgInput = wpaicgaudioContext.createMediaStreamSource(stream);
            wpaicgChatRec = new Recorder(wpaicgInput, {numChannels: 1});
            wpaicgChatRec.record();
        })
    }

    function wpaicgstopChatRecording(mic) {
        wpaicgChatRec.stop();
        wpaicgChatStream.getAudioTracks()[0].stop();
        wpaicgChatRec.exportWAV(function (blob) {
            let type = mic.getAttribute('data-type');
            let parentChat;
            let chatContent;
            let chatTyping;
            if (type === 'widget') {
                parentChat = mic.closest('.wpaicg-chatbox');
                chatContent = parentChat.querySelectorAll('.wpaicg-chatbox-content')[0];
                chatTyping = parentChat.querySelectorAll('.wpaicg-chatbox-typing')[0];
            } else {
                parentChat = mic.closest('.wpaicg-chat-shortcode');
                chatContent = parentChat.querySelectorAll('.wpaicg-chat-shortcode-content')[0];
                chatTyping = parentChat.querySelectorAll('.wpaicg-chat-shortcode-typing')[0];
            }
            wpaicgSendChatMessage(parentChat, chatTyping, type, blob);
        });
    }

    function wpaicgSendChatMessage(chat, typing, type, blob) {
        let wpaicg_box_typing = typing;
        let wpaicg_ai_thinking, wpaicg_messages_box, class_user_item, class_ai_item;
        let wpaicgMessage = '';
        let wpaicgData = new FormData();
        let wpaicg_you = chat.getAttribute('data-you') + ':';
        let wpaicg_ai_name = chat.getAttribute('data-ai-name') + ':';
        let wpaicg_nonce = chat.getAttribute('data-nonce');
        let wpaicg_use_avatar = parseInt(chat.getAttribute('data-use-avatar'));
        let wpaicg_bot_id = parseInt(chat.getAttribute('data-bot-id'));
        let wpaicg_user_avatar = chat.getAttribute('data-user-avatar');
        let wpaicg_ai_avatar = chat.getAttribute('data-ai-avatar');
        let wpaicg_user_bg = chat.getAttribute('data-user-bg-color');
        let wpaicg_font_size = chat.getAttribute('data-fontsize');
        let url = chat.getAttribute('data-url');
        let post_id = chat.getAttribute('data-post-id');
        let wpaicg_ai_bg = chat.getAttribute('data-ai-bg-color');
        let wpaicg_font_color = chat.getAttribute('data-color');
        if (type === 'widget') {
            wpaicg_ai_thinking = chat.getElementsByClassName('wpaicg-bot-thinking')[0];
            wpaicg_messages_box = chat.getElementsByClassName('wpaicg-chatbox-messages')[0];
            class_user_item = 'wpaicg-chat-user-message';
            class_ai_item = 'wpaicg-chat-ai-message';
        } else {
            wpaicg_ai_thinking = chat.getElementsByClassName('wpaicg-bot-thinking')[0];
            wpaicg_messages_box = chat.getElementsByClassName('wpaicg-chat-shortcode-messages')[0];
            class_user_item = 'wpaicg-user-message';
            class_ai_item = 'wpaicg-ai-message';
        }
        if (wpaicg_use_avatar) {
            wpaicg_you = '<img src="' + wpaicg_user_avatar + '" height="40" width="40">';
            wpaicg_ai_name = '<img src="' + wpaicg_ai_avatar + '" height="40" width="40">';
        }
        wpaicg_ai_thinking.style.display = 'block';
        let wpaicg_question = wpaicgescapeHtml(wpaicg_box_typing.value);
        wpaicgMessage += '<li class="' + class_user_item + '" style="background-color:' + wpaicg_user_bg + ';font-size: ' + wpaicg_font_size + 'px;color: ' + wpaicg_font_color + '">';
        wpaicgMessage += '<strong class="wpaicg-chat-avatar">' + wpaicg_you + '</strong>';
        wpaicgData.append('_wpnonce', wpaicg_nonce);
        wpaicgData.append('post_id', post_id);
        wpaicgData.append('url', url);
        if (type === 'widget') {
            wpaicgData.append('action', 'wpaicg_chatbox_message');
        } else {
            wpaicgData.append('action', 'wpaicg_chat_shortcode_message');
        }
        if (blob !== undefined) {
            let url = URL.createObjectURL(blob);
            wpaicgMessage += '<audio src="' + url + '" controls="true"></audio>';
            wpaicgData.append('audio', blob, 'wpaicg-chat-recording.wav');
        } else if (wpaicg_question !== '') {
            wpaicgData.append('message', wpaicg_question);
            wpaicgMessage += wpaicg_question;
        }
        wpaicgData.append('bot_id',wpaicg_bot_id);
        wpaicgMessage += '</li>';
        wpaicg_messages_box.innerHTML += wpaicgMessage;
        wpaicg_messages_box.scrollTop = wpaicg_messages_box.scrollHeight;
        const xhttp = new XMLHttpRequest();
        wpaicg_box_typing.value = '';
        xhttp.open('POST', wpaicg_ajax_url, true);
        xhttp.send(wpaicgData);
        xhttp.onreadystatechange = function (oEvent) {
            if (xhttp.readyState === 4) {
                var wpaicg_message = '';
                var wpaicg_response_text = '';
                var wpaicg_randomnum = Math.floor((Math.random() * 100000) + 1);
                if (xhttp.status === 200) {
                    var wpaicg_response = this.responseText;
                    if (wpaicg_response !== '') {
                        wpaicg_response = JSON.parse(wpaicg_response);
                        wpaicg_ai_thinking.style.display = 'none'
                        if (wpaicg_response.status === 'success') {
                            wpaicg_response_text = wpaicg_response.data;
                            wpaicg_message = '<li class="' + class_ai_item + '" style="background-color:' + wpaicg_ai_bg + ';font-size: ' + wpaicg_font_size + 'px;color: ' + wpaicg_font_color + '"><p><strong class="wpaicg-chat-avatar">' + wpaicg_ai_name + '</strong><span class="wpaicg-chat-message" id="wpaicg-chat-message-' + wpaicg_randomnum + '"></span></p></li>';
                        } else {
                            wpaicg_response_text = wpaicg_response.msg;
                            wpaicg_message = '<li class="' + class_ai_item + '" style="background-color:' + wpaicg_ai_bg + ';font-size: ' + wpaicg_font_size + 'px;color: ' + wpaicg_font_color + '"><p><strong class="wpaicg-chat-avatar">' + wpaicg_ai_name + '</strong><span class="wpaicg-chat-message wpaicg-chat-message-error" id="wpaicg-chat-message-' + wpaicg_randomnum + '"></span></p></li>';
                        }
                    }
                } else {
                    wpaicg_message = '<li class="' + class_ai_item + '" style="background-color:' + wpaicg_ai_bg + ';font-size: ' + wpaicg_font_size + 'px;color: ' + wpaicg_font_color + '"><p><strong class="wpaicg-chat-avatar">' + wpaicg_ai_name + '</strong><span class="wpaicg-chat-message wpaicg-chat-message-error" id="wpaicg-chat-message-' + wpaicg_randomnum + '"></span></p></li>';
                    wpaicg_response_text = 'Something went wrong';
                }
                if (wpaicg_response_text === 'null' || wpaicg_response_text === null) {
                    wpaicg_response_text = 'The model predicted a completion that begins with a stop sequence, resulting in no output. Consider adjusting your prompt or stop sequences.';
                }
                if (wpaicg_response_text !== '' && wpaicg_message !== '') {
                    wpaicg_messages_box.innerHTML += wpaicg_message;
                    var wpaicg_current_message = document.getElementById('wpaicg-chat-message-' + wpaicg_randomnum);
                    var i = 0;
                    var wpaicg_speed = 20;

                    function wpaicgLinkify(inputText) {
                        var replacedText, replacePattern1, replacePattern2, replacePattern3;

                        //URLs starting with http://, https://, or ftp://
                        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
                        replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

                        //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
                        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
                        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

                        //Change email addresses to mailto:: links.
                        replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
                        replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

                        return replacedText;
                    }
                    if(wpaicg_response_text !== ''){
                        wpaicg_response_text = wpaicg_response_text.trim();
                    }
                    wpaicg_response_text = wpaicg_response_text.replace(/\n/g, '≈');

                    function wpaicg_typeWriter() {
                        if (i < wpaicg_response_text.length) {
                            if (wpaicg_response_text.charAt(i) === '≈') {
                                wpaicg_current_message.innerHTML += '<br>';
                            }
                            else {
                                wpaicg_current_message.innerHTML += wpaicg_response_text.charAt(i);
                            }
                            i++;
                            setTimeout(wpaicg_typeWriter, wpaicg_speed);
                            wpaicg_messages_box.scrollTop = wpaicg_messages_box.scrollHeight;
                        } else {
                            wpaicg_current_message.innerHTML = wpaicgLinkify(wpaicg_current_message.innerHTML);
                            wpaicg_current_message.innerHTML = wpaicg_current_message.innerHTML.replace(/```([\s\S]*?)```/g,'<code>$1</code>');
                        }
                    }

                    wpaicg_typeWriter();
                }
            }
        }
    }

    function wpaicgMicEvent(mic) {
        if (mic.classList.contains('wpaicg-recording')) {
            mic.innerHTML = '';
            mic.innerHTML = wpaicgMicIcon;
            mic.classList.remove('wpaicg-recording');
            wpaicgstopChatRecording(mic)
        } else {
            let checkRecording = document.querySelectorAll('.wpaicg-recording');
            if (checkRecording && checkRecording.length) {
                alert('Please finish previous recording');
            } else {
                mic.innerHTML = '';
                mic.innerHTML = wpaicgStopIcon;
                mic.classList.add('wpaicg-recording');
                wpaicgstartChatRecording();
            }
        }
    }

    if (wpaicgChatTyping && wpaicgChatTyping.length) {
        for (let i = 0; i < wpaicgChatTyping.length; i++) {
            wpaicgChatTyping[i].addEventListener('keyup', function (event) {
                if (event.which === 13 || event.keyCode === 13) {
                    let parentChat = wpaicgChatTyping[i].closest('.wpaicg-chatbox');
                    let chatTyping = parentChat.querySelectorAll('.wpaicg-chatbox-typing')[0];
                    wpaicgSendChatMessage(parentChat, chatTyping, 'widget');
                }
            })
        }
    }
    if (wpaicgShortcodeTyping && wpaicgShortcodeTyping.length) {
        for (let i = 0; i < wpaicgShortcodeTyping.length; i++) {
            wpaicgShortcodeTyping[i].addEventListener('keyup', function (event) {
                if (event.which === 13 || event.keyCode === 13) {
                    let parentChat = wpaicgShortcodeTyping[i].closest('.wpaicg-chat-shortcode');
                    let chatTyping = parentChat.querySelectorAll('.wpaicg-chat-shortcode-typing')[0];
                    wpaicgSendChatMessage(parentChat, chatTyping, 'shortcode');
                }
            })
        }
    }
    if (wpaicgChatSend && wpaicgChatSend.length) {
        for (let i = 0; i < wpaicgChatSend.length; i++) {
            wpaicgChatSend[i].addEventListener('click', function (event) {
                let parentChat = wpaicgChatSend[i].closest('.wpaicg-chatbox');
                let chatTyping = parentChat.querySelectorAll('.wpaicg-chatbox-typing')[0];
                wpaicgSendChatMessage(parentChat, chatTyping, 'widget');
            })
        }
    }
    if (wpaicgShortcodeSend && wpaicgShortcodeSend.length) {
        for (let i = 0; i < wpaicgShortcodeSend.length; i++) {
            wpaicgShortcodeSend[i].addEventListener('click', function (event) {
                let parentChat = wpaicgShortcodeSend[i].closest('.wpaicg-chat-shortcode');
                let chatTyping = parentChat.querySelectorAll('.wpaicg-chat-shortcode-typing')[0];
                wpaicgSendChatMessage(parentChat, chatTyping, 'shortcode');
            })
        }
    }

    if (wpaicgMicBtns && wpaicgMicBtns.length) {
        for (let i = 0; i < wpaicgMicBtns.length; i++) {
            wpaicgMicBtns[i].addEventListener('click', function () {
                wpaicgMicEvent(wpaicgMicBtns[i]);
            });
        }
    }
}
wpaicgChatInit();
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Recorder = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
        "use strict";

        module.exports = require("./recorder").Recorder;

    },{"./recorder":2}],2:[function(require,module,exports){
        'use strict';

        var _createClass = (function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        })();

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Recorder = undefined;

        var _inlineWorker = require('inline-worker');

        var _inlineWorker2 = _interopRequireDefault(_inlineWorker);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var Recorder = exports.Recorder = (function () {
            function Recorder(source, cfg) {
                var _this = this;

                _classCallCheck(this, Recorder);

                this.config = {
                    bufferLen: 4096,
                    numChannels: 2,
                    mimeType: 'audio/wav'
                };
                this.recording = false;
                this.callbacks = {
                    getBuffer: [],
                    exportWAV: []
                };

                Object.assign(this.config, cfg);
                this.context = source.context;
                this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, this.config.bufferLen, this.config.numChannels, this.config.numChannels);

                this.node.onaudioprocess = function (e) {
                    if (!_this.recording) return;

                    var buffer = [];
                    for (var channel = 0; channel < _this.config.numChannels; channel++) {
                        buffer.push(e.inputBuffer.getChannelData(channel));
                    }
                    _this.worker.postMessage({
                        command: 'record',
                        buffer: buffer
                    });
                };

                source.connect(this.node);
                this.node.connect(this.context.destination); //this should not be necessary

                var self = {};
                this.worker = new _inlineWorker2.default(function () {
                    var recLength = 0,
                        recBuffers = [],
                        sampleRate = undefined,
                        numChannels = undefined;

                    self.onmessage = function (e) {
                        switch (e.data.command) {
                            case 'init':
                                init(e.data.config);
                                break;
                            case 'record':
                                record(e.data.buffer);
                                break;
                            case 'exportWAV':
                                exportWAV(e.data.type);
                                break;
                            case 'getBuffer':
                                getBuffer();
                                break;
                            case 'clear':
                                clear();
                                break;
                        }
                    };

                    function init(config) {
                        sampleRate = config.sampleRate;
                        numChannels = config.numChannels;
                        initBuffers();
                    }

                    function record(inputBuffer) {
                        for (var channel = 0; channel < numChannels; channel++) {
                            recBuffers[channel].push(inputBuffer[channel]);
                        }
                        recLength += inputBuffer[0].length;
                    }

                    function exportWAV(type) {
                        var buffers = [];
                        for (var channel = 0; channel < numChannels; channel++) {
                            buffers.push(mergeBuffers(recBuffers[channel], recLength));
                        }
                        var interleaved = undefined;
                        if (numChannels === 2) {
                            interleaved = interleave(buffers[0], buffers[1]);
                        } else {
                            interleaved = buffers[0];
                        }
                        var dataview = encodeWAV(interleaved);
                        var audioBlob = new Blob([dataview], { type: type });

                        self.postMessage({ command: 'exportWAV', data: audioBlob });
                    }

                    function getBuffer() {
                        var buffers = [];
                        for (var channel = 0; channel < numChannels; channel++) {
                            buffers.push(mergeBuffers(recBuffers[channel], recLength));
                        }
                        self.postMessage({ command: 'getBuffer', data: buffers });
                    }

                    function clear() {
                        recLength = 0;
                        recBuffers = [];
                        initBuffers();
                    }

                    function initBuffers() {
                        for (var channel = 0; channel < numChannels; channel++) {
                            recBuffers[channel] = [];
                        }
                    }

                    function mergeBuffers(recBuffers, recLength) {
                        var result = new Float32Array(recLength);
                        var offset = 0;
                        for (var i = 0; i < recBuffers.length; i++) {
                            result.set(recBuffers[i], offset);
                            offset += recBuffers[i].length;
                        }
                        return result;
                    }

                    function interleave(inputL, inputR) {
                        var length = inputL.length + inputR.length;
                        var result = new Float32Array(length);

                        var index = 0,
                            inputIndex = 0;

                        while (index < length) {
                            result[index++] = inputL[inputIndex];
                            result[index++] = inputR[inputIndex];
                            inputIndex++;
                        }
                        return result;
                    }

                    function floatTo16BitPCM(output, offset, input) {
                        for (var i = 0; i < input.length; i++, offset += 2) {
                            var s = Math.max(-1, Math.min(1, input[i]));
                            output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
                        }
                    }

                    function writeString(view, offset, string) {
                        for (var i = 0; i < string.length; i++) {
                            view.setUint8(offset + i, string.charCodeAt(i));
                        }
                    }

                    function encodeWAV(samples) {
                        var buffer = new ArrayBuffer(44 + samples.length * 2);
                        var view = new DataView(buffer);

                        /* RIFF identifier */
                        writeString(view, 0, 'RIFF');
                        /* RIFF chunk length */
                        view.setUint32(4, 36 + samples.length * 2, true);
                        /* RIFF type */
                        writeString(view, 8, 'WAVE');
                        /* format chunk identifier */
                        writeString(view, 12, 'fmt ');
                        /* format chunk length */
                        view.setUint32(16, 16, true);
                        /* sample format (raw) */
                        view.setUint16(20, 1, true);
                        /* channel count */
                        view.setUint16(22, numChannels, true);
                        /* sample rate */
                        view.setUint32(24, sampleRate, true);
                        /* byte rate (sample rate * block align) */
                        view.setUint32(28, sampleRate * 4, true);
                        /* block align (channel count * bytes per sample) */
                        view.setUint16(32, numChannels * 2, true);
                        /* bits per sample */
                        view.setUint16(34, 16, true);
                        /* data chunk identifier */
                        writeString(view, 36, 'data');
                        /* data chunk length */
                        view.setUint32(40, samples.length * 2, true);

                        floatTo16BitPCM(view, 44, samples);

                        return view;
                    }
                }, self);

                this.worker.postMessage({
                    command: 'init',
                    config: {
                        sampleRate: this.context.sampleRate,
                        numChannels: this.config.numChannels
                    }
                });

                this.worker.onmessage = function (e) {
                    var cb = _this.callbacks[e.data.command].pop();
                    if (typeof cb == 'function') {
                        cb(e.data.data);
                    }
                };
            }

            _createClass(Recorder, [{
                key: 'record',
                value: function record() {
                    this.recording = true;
                }
            }, {
                key: 'stop',
                value: function stop() {
                    this.recording = false;
                }
            }, {
                key: 'clear',
                value: function clear() {
                    this.worker.postMessage({ command: 'clear' });
                }
            }, {
                key: 'getBuffer',
                value: function getBuffer(cb) {
                    cb = cb || this.config.callback;
                    if (!cb) throw new Error('Callback not set');

                    this.callbacks.getBuffer.push(cb);

                    this.worker.postMessage({ command: 'getBuffer' });
                }
            }, {
                key: 'exportWAV',
                value: function exportWAV(cb, mimeType) {
                    mimeType = mimeType || this.config.mimeType;
                    cb = cb || this.config.callback;
                    if (!cb) throw new Error('Callback not set');

                    this.callbacks.exportWAV.push(cb);

                    this.worker.postMessage({
                        command: 'exportWAV',
                        type: mimeType
                    });
                }
            }], [{
                key: 'forceDownload',
                value: function forceDownload(blob, filename) {
                    var url = (window.URL || window.webkitURL).createObjectURL(blob);
                    var link = window.document.createElement('a');
                    link.href = url;
                    link.download = filename || 'output.wav';
                    var click = document.createEvent("Event");
                    click.initEvent("click", true, true);
                    link.dispatchEvent(click);
                }
            }]);

            return Recorder;
        })();

        exports.default = Recorder;

    },{"inline-worker":3}],3:[function(require,module,exports){
        "use strict";

        module.exports = require("./inline-worker");
    },{"./inline-worker":4}],4:[function(require,module,exports){
        (function (global){
            "use strict";

            var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            var WORKER_ENABLED = !!(global === global.window && global.URL && global.Blob && global.Worker);

            var InlineWorker = (function () {
                function InlineWorker(func, self) {
                    var _this = this;

                    _classCallCheck(this, InlineWorker);

                    if (WORKER_ENABLED) {
                        var functionBody = func.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
                        var url = global.URL.createObjectURL(new global.Blob([functionBody], { type: "text/javascript" }));

                        return new global.Worker(url);
                    }

                    this.self = self;
                    this.self.postMessage = function (data) {
                        setTimeout(function () {
                            _this.onmessage({ data: data });
                        }, 0);
                    };

                    setTimeout(function () {
                        func.call(self);
                    }, 0);
                }

                _createClass(InlineWorker, {
                    postMessage: {
                        value: function postMessage(data) {
                            var _this = this;

                            setTimeout(function () {
                                _this.self.onmessage({ data: data });
                            }, 0);
                        }
                    }
                });

                return InlineWorker;
            })();

            module.exports = InlineWorker;
        }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{}]},{},[1])(1)
});
