<?php

/*
Plugin Name: Rest Routes – Custom Endpoints for WP REST API
Plugin URI: https://www.restroutes.com
Description: Extend the WP REST API by creating unlimited advanced custom routes for your site.
Author: Rest Routes
Author URI: https://www.restroutes.com
Version: 5.5.2
*/
use  RestRoutes\Bootstrap\App ;
if ( !defined( 'ABSPATH' ) ) {
    exit;
}

if ( function_exists( 'rrp_fs' ) ) {
    rrp_fs()->set_basename( false, __FILE__ );
} else {
    
    if ( !function_exists( 'rrp_fs' ) ) {
        // Create a helper function for easy SDK access.
        function rrp_fs()
        {
            global  $rrp_fs ;
            
            if ( !isset( $rrp_fs ) ) {
                // Include Freemius SDK.
                require_once dirname( __FILE__ ) . '/freemius/start.php';
                $rrp_fs = fs_dynamic_init( array(
                    'id'             => '4240',
                    'slug'           => 'rest-routes',
                    'premium_slug'   => 'rest-routes-pro',
                    'type'           => 'plugin',
                    'public_key'     => 'pk_91e1555b869017df753cbef6c552a',
                    'is_premium'     => false,
                    'premium_suffix' => 'Pro',
                    'has_addons'     => false,
                    'has_paid_plans' => true,
                    'menu'           => array(
                    'slug'       => 'rest-routes-main',
                    'first-path' => 'plugins.php',
                ),
                    'is_live'        => true,
                ) );
            }
            
            return $rrp_fs;
        }
        
        // Init Freemius.
        rrp_fs();
        // Signal that SDK was initiated.
        do_action( 'rrp_fs_loaded' );
    }
    
    $rest_routes_url = untrailingslashit( plugin_dir_url( __FILE__ ) );
    define( 'REST_ROUTES_PLUGIN_PATH', __DIR__ );
    define( 'REST_ROUTES_PLUGIN_URL', $rest_routes_url );
    define( 'REST_ROUTES_TEXTDOMAIN', 'rest-routes' );
    require_once REST_ROUTES_PLUGIN_PATH . '/vendor/autoload.php';
    $rest_routes_pro = new App();
    $rest_routes_pro->init();
}
