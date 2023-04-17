<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST;

use RestRoutes\Hooks\IHook;

class NewRoute extends \WP_REST_Controller implements IHook
{
    public function __construct()
    {
        $this->namespace = 'rest-routes/v2';
        $this->rest_base = 'routes';
    }

    public function registerHooks()
    {
        add_action('rest_api_init', array($this, 'registerRoute'));
    }

    public function registerRoute()
    {
        wp_localize_script(
            'wp-api',
            'wpApiSettings',
            array(
                'root'  => esc_url_raw(rest_url()),
                'nonce' => wp_create_nonce('wp_rest')
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base,
            array(
                array(
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => array($this, 'get_items'),
                    'permission_callback' => array(
                        $this,
                        'getItemsPermissionsCheck'
                    ),
                    'args'                => $this->get_collection_params(),
                ),
                array(
                    'methods'             => \WP_REST_Server::CREATABLE,
                    'callback'            => array($this, 'createItem'),
                    'permission_callback' => array(
                        $this,
                        'createItemPermissionsCheck'
                    ),
                    'args'                => $this->get_endpoint_args_for_item_schema(
                        \WP_REST_Server::CREATABLE
                    ),
                ),
                array(
                    'methods'             => array(
                        \WP_REST_Server::CREATABLE,
                        'GET'
                    ),
                    'callback'            => array($this, 'createItem'),
                    'permission_callback' => array(
                        $this,
                        'createItemPermissionsCheck'
                    ),
                    'args'                => $this->get_endpoint_args_for_item_schema(
                        \WP_REST_Server::CREATABLE
                    ),
                ),
                'schema' => array($this, 'get_public_item_schema'),
            )
        );
    }

    public function getItemsPermissionsCheck($request)
    {
        return true;
    }

    public function createItemPermissionsCheck($request)
    {
        if (! current_user_can('manage_options')) {
            return new \WP_Error(
                'rest_cannot_create_route',
                __('Sorry, you are not allowed to create new routes.'),
                array('status' => rest_authorization_required_code())
            );
        }

        return true;
    }

    public function createItem($request)
    {
        if (! empty($request['id'])) {
            return new \WP_Error(
                'rest_route_exists',
                __('Cannot create existing route.'),
                array('status' => 400)
            );
        }

        $rest_server = rest_get_server();
        $settings    = $request->get_param('settings');
        $route_name  = sprintf(
            '/%s/%s',
            $settings['namespace'],
            $settings['routeName']
        );

        if ($request->get_param('routeId')) {
            $saved_settings = get_post_meta(
                $request->get_param('routeId'),
                'rest_route_settings',
                $settings
            );
            $saved_route    = '/' . $saved_settings['namespace'] . '/'
                . $saved_settings['routeName'];

            if (
                isset($rest_server->get_routes()[$route_name])
                && $route_name !== $saved_route
            ) {
                wp_send_json_error(array('message' => 'Route already exists'));
            }

            $route = wp_update_post(
                array(
                    'ID'          => $request->get_param('routeId'),
                    'post_title'  => $route_name,
                    'post_type'   => CustomRoutes::ROUTE_CPT,
                    'post_status' => 'publish',
                )
            );
        } else {
            if (isset($rest_server->get_routes()[$route_name])) {
                wp_send_json_error(array('message' => 'Route already exists'));
            }

            $route = wp_insert_post(
                array(
                    'post_title'  => $route_name,
                    'post_type'   => CustomRoutes::ROUTE_CPT,
                    'post_status' => 'publish',
                )
            );
        }

        update_post_meta($route, 'rest_route_settings', $settings);
        wp_send_json_success(array('route_id' => $route));
    }
}
