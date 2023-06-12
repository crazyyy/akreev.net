<?php
if ( ! defined( 'ABSPATH' ) ) exit;
define('WPAICG_LIBS_DIR',__DIR__.'/');
require_once __DIR__.'/vendor/autoload.php';
require_once WPAICG_LIBS_DIR.'modules/wpaicg_chat_pro.php';
require_once WPAICG_LIBS_DIR.'modules/wpaicg_google_sheets.php';
require_once WPAICG_LIBS_DIR.'modules/wpaicg_rss.php';
require_once WPAICG_LIBS_DIR.'modules/wpaicg_pdf.php';
require_once WPAICG_LIBS_DIR.'modules/wpaicg_twitter.php';
require_once WPAICG_LIBS_DIR.'modules/wpaicg_custom_prompt_pro.php';
