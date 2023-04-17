<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\PostType;

use RestRoutes\Hooks\IHook;
use RestRoutes\Hooks\REST\CustomRoutes;

class Registration implements IHook
{
    public function registerHooks()
    {
        add_action('init', array($this, 'registerPostType'));
    }

    public function registerPostType()
    {
        $labels = array(
            'name'               => _x('Routes', 'post type general name', REST_ROUTES_TEXTDOMAIN),
            'singular_name'      => _x('Route', 'post type singular name', REST_ROUTES_TEXTDOMAIN),
            'menu_name'          => _x('Routes', 'admin menu', REST_ROUTES_TEXTDOMAIN),
            'name_admin_bar'     => _x('Route', 'add new on admin bar', REST_ROUTES_TEXTDOMAIN),
            'add_new'            => _x('Add New', 'book', REST_ROUTES_TEXTDOMAIN),
            'add_new_item'       => __('Add New Route', REST_ROUTES_TEXTDOMAIN),
            'new_item'           => __('New Route', REST_ROUTES_TEXTDOMAIN),
            'edit_item'          => __('Edit Route', REST_ROUTES_TEXTDOMAIN),
            'view_item'          => __('View Route', REST_ROUTES_TEXTDOMAIN),
            'all_items'          => __('All Routes', REST_ROUTES_TEXTDOMAIN),
            'search_items'       => __('Search Routes', REST_ROUTES_TEXTDOMAIN),
            'parent_item_colon'  => __('Parent Routes:', REST_ROUTES_TEXTDOMAIN),
            'not_found'          => __('No routes found.', REST_ROUTES_TEXTDOMAIN),
            'not_found_in_trash' => __('No routes found in Trash.', REST_ROUTES_TEXTDOMAIN)
        );

        $args = array(
            'labels'             => $labels,
            'description'        => __('Description.', REST_ROUTES_TEXTDOMAIN),
            'public'             => false,
            'publicly_queryable' => false,
            'show_ui'            => true,
            'show_in_menu'       => false,
            'query_var'          => false,
            'rewrite'            => array('slug' => 'rest-routes'),
            'capability_type'    => 'post',
            'has_archive'        => true,
            'hierarchical'       => false,
            'menu_position'      => null,
            'supports'           => array('title')
        );

        /** @phpstan-ignore-next-line */
        register_post_type(CustomRoutes::ROUTE_CPT, $args);
    }
}
