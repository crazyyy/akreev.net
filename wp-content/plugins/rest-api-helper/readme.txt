=== REST API Helper ===

Contributors: JasmanXcrew 
Donate link: https://ihsana.com/
Tags: rest-api, mobile app, ionic, json, json-api, cors, ionicframework, preflight, onesignal, acf, visual composer
Requires at least: 4.0
Tested up to: 5.3
Stable tag: 2.2.4
License: GNU General Public License v2
License URI: http://www.gnu.org/licenses/license-list.html#GPLCompatibleLicenses

== Description ==
This plugin help REST API for display featured media source, author, categories, and custom fields. 
This plugin is made for [Ionic Mobile App Builder](https://goo.gl/qznlXo), suitable used for ionic framework. 
This plugin also support for display custom field in metabox and also make it allow crossorigin only for json files. Compatible with wp-restapi2 and json-api.

Features:
* Product listing without Woo API
* REST-API Auth Basic
* Fix CORS and Preflight CORS (Example Issue: Request header field ....... is not allowed by Access-Control-Allow-Headers in preflight response.)
* Woo ACF Gallery
* Gallery JSON Array or Object
* One Signal Push
* Custom Field Support
* Fix issue render VisualComposer ([vc_row]Hello World . . .[/vc_row])


=== Woocommerce ===
for enable Woo product and categories without authorization, add this code in wp-config.php
	
	define("IMH_WOO", true);
	
You can changing custom field for gallery (default woo using _product_image_gallery metakey), add this line
	
	define("IMH_WOO_ACF_GALLERY", 'images'); 
	
and for type data object or string (default string, separator with coma)
	
	define("IMH_WOO_ACF_GALLERY_OBJECT", false);
	
-----------------

=== OneSignal Sender ===
for enable oneSignal Sender add this code in wp-config.php
	
	define("IMH_ONESIGNAL_PUSH", true);
	
then fix your app_id and app_key
	
	define("IMH_ONESIGNAL_PUSH", false);
	define("IMH_ONESIGNAL_PAGE_IN_APP", 'post_singles'); //this additional data (key: page and value: post_singles/post_id)
	define("IMH_ONESIGNAL_APP_ID", '31ee45e2-c63d-4048-903a-89ca43f3afa2');
	define("IMH_ONESIGNAL_APP_KEY", 'YzUzNmZkOTAtMmVlMC00OWIzLThlNGQtMzQyYzzyNmFhZjcw');
	
----------------- 

=== Anonymous Comments ===
You can allow anonymous comments using configuration:
	
	define("IMH_ALLOW_PREFLIGHT_CORS",true); //required for method post
	define("IMH_ANONYMOUS_COMMENTS",true);
	
send comment using url like this:
	
	http://wordpress.co.id/wp-json/wp/v2/comments?author_name=Your Name Here&author_email=your-email-address@website-address-here.com&author_name=Your Name Here&content=Your Comment Here&post=20
	
-----------------
=== Register REST-API ===
You can allow register new user using configuration:
	
	define("IMH_RESTAPI_REGISTER",true); 
	

End Point:
	
	https://wordpress.co.id/wp-json/wp/v2/users/register
	

-----------------
=== Visual Composer ===
Fix issue render VisualComposer Content

Response is:
[vc_row]Hello World . . .[/vc_row]
Response should be:
<div class="row">Hello World . . .</div>

add this code in wp-config.php
	
	define("IMH_VC_SHORTCODE",true);
	
	
-----------------


== Installation ==
1. Unzip and Upload `rest-api-helper.zip` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress


== Changelog ==
here are some of the changes that have been made:

	Changelog 1.7 
	* add option page
	* content render for shortcode visual composer

	Changelog 1.8 
	* add woo support

	Changelog 2.1.1 
	* fix woo issue

	Changelog 2.1.2 
	* add custom field support

	Changelog 2.1.3 
	* add custom field for gallery support 

	Changelog 2.1.4 
	* fix permalink for woo

	Changelog 2.1.5 
	* Add onesignal sender

	Changelog 2.1.6 
	* Add Woocommerce attributes

	Changelog 2.1.7 
	* Fix issue attributes

	Changelog 2.1.8 
	* Improved: support Very Simple Event List

	Changelog 2.1.9 
	* Improved: for keep configuration is not lost after update, save your config in wp-config.php

	Changelog 2.2.0 
	* Add Basic Auth Support

	Changelog 2.2.1 
	* Add preflight support for post

	Changelog 2.2.2 
	* Add OneSignal Sender Page

	Changelog 2.2.3 
	* Add option allow anonymous comments

	Changelog 2.2.4 
	* Fix error on post-edit

	Changelog 2.2.5 
	* Improved content render for shortcode visual composer

	Changelog 2.2.6 
	* Fix bug: blank page on edit post

	Changelog 2.2.7 
	* Add register API
	
	Changelog 2.2.8 
	* Fix image featured issue 
	
== Credits ==
* [Ihsana Global Solusindo](https://ihsana.com)
* [IMA BuildeRz - Ionic Mobile App Builder + Code Generator ](ihsana.com/i/?u=imabuilder)
* [iWP-DevToolz - WordPress Plugin Maker + Code Generator ](https://ihsana.com/i/?u=iwpdev)

== Upgrade Notice == 
