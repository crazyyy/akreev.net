<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\PostType;

use RestRoutes\Hooks\IHook;
use RestRoutes\Hooks\REST\CustomRoutes;

class RouteDuplication implements IHook
{
    public function registerHooks()
    {
        add_filter(
            'post_row_actions',
            array($this, 'duplicateRouteLink'),
            10,
            2
        );
        add_action(
            'admin_action_rest_routes_duplicate_route',
            array($this, 'duplicateRoute')
        );
    }

    public function duplicateRouteLink($actions, $post)
    {
        if (
            current_user_can('edit_posts')
            && $post->post_type === CustomRoutes::ROUTE_CPT
        ) {
            $actions['duplicate'] = '<a href="'
                . wp_nonce_url('admin.php?action=rest_routes_duplicate_route&post='
                    . $post->ID, basename(__FILE__), 'duplicate_nonce')
                . '" title="Duplicate this item" rel="permalink">Duplicate</a>';
        }

        return $actions;
    }

    public function duplicateRoute()
    {
        if (
            ! (isset($_GET['post']) || isset($_POST['post'])
            || (isset($_REQUEST['action'])
                && 'rd_duplicate_post_as_draft' == $_REQUEST['action']))
        ) {
            wp_die('No post to duplicate has been supplied!');
        }

        if (
            ! isset($_GET['duplicate_nonce'])
            || ! wp_verify_nonce($_GET['duplicate_nonce'], basename(__FILE__))
        ) {
            return;
        }

        $post_id = (isset($_GET['post']) ? absint($_GET['post'])
            : absint($_POST['post']));
        $post    = get_post($post_id);

        $current_user = wp_get_current_user();
        $new_post_author = $current_user->ID;

        if (isset($post) && $post !== null) {
            $args = array(
                'comment_status' => $post->comment_status,
                'ping_status'    => $post->ping_status,
                'post_author'    => $new_post_author,
                'post_content'   => $post->post_content,
                'post_excerpt'   => $post->post_excerpt,
                'post_name'      => $post->post_name,
                'post_parent'    => $post->post_parent,
                'post_password'  => $post->post_password,
                'post_status'    => 'draft',
                'post_title'     => $post->post_title,
                'post_type'      => $post->post_type,
                'to_ping'        => $post->to_ping,
                'menu_order'     => $post->menu_order
            );

            $new_post_id = wp_insert_post($args);
            update_post_meta(
                $new_post_id,
                CustomRoutes::ROUTE_SETTINGS,
                get_post_meta($post_id, CustomRoutes::ROUTE_SETTINGS, true)
            );
            wp_redirect($link
                = admin_url(sprintf(
                    'admin.php?page=edit-rest-route&id=%d',
                    $new_post_id
                )));
            exit;
        }

        wp_die('Route creation failed, could not find original post: '
            . $post_id);
    }
}
