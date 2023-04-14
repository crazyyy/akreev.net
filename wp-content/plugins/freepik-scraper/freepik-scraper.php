<?php
/**
 * @package Freepik`er
 * @version 2023.04.13
 */
/*
  Plugin Name: Freepik`er
  Text Domain: freepik-scraper
  Plugin URI: https://github.com/crazyyy/akreev
  Description: Freepik`er is a WordPress plugin that periodically monitors a user's collections on the freepik.com service and downloads new images to the WP website.
  Author: Vitalii A.
  Author URI: https://github.com/crazyyy
  Version: 2023.04.13
  License: GPL2
  License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Initialize the plugin
 */
function freepik_scraper_initialize() {
    // Register Custom Post Types
    include_once plugin_dir_path( __FILE__ ) . 'includes/cptui_register_my_cpts_collection.php';

    // Register Custom Taxonomies
    include_once plugin_dir_path( __FILE__ ) . 'includes/cptui_register_my_taxes_galleries.php';

    // Register WP Admin Console Menu
    include_once plugin_dir_path( __FILE__ ) . 'includes/register_admin_menu.php';

    // Register REST API for Collections CPT
    // include_once plugin_dir_path( __FILE__ ) . 'includes/rest_api.php';

}

/**
 * Enqueue plugin scripts and styles
 */
function freepik_scraper_enqueue_scripts() {
    wp_enqueue_style( 'freepik-styles', plugins_url( 'assets/css/freepik-styles.css', __FILE__ ), array(), '1.0.0', 'all' );
    wp_enqueue_script( 'freepik-scripts', plugins_url( 'assets/js/freepik-scripts.js', __FILE__ ), array( 'jquery' ), '1.0.0', true );
}

// Initialize the plugin
add_action( 'init', 'freepik_scraper_initialize' );

// Enqueue plugin scripts and styles
add_action( 'wp_enqueue_scripts', 'freepik_scraper_enqueue_scripts' );
