<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\EditUser;

use RestRoutes\Helpers\EndpointFinder;
use RestRoutes\Hooks\REST\Actions\CreatePosts\Handler\CustomFields;

class Callback
{
    private $endpointFinder;

    public function __construct(EndpointFinder $endpointFinder)
    {
        $this->endpointFinder = $endpointFinder;
    }

    public function getCallback(\WP_REST_Request $data)
    {
        $endpoint = $this->endpointFinder->getByMethod(
            $data->get_route(),
            $data->get_method()
        );

        if (!$endpoint) {
            wp_send_json_error(['error' => 'Endpoint could not be found']);
        }

        do_action('rest_routes_before_edit_user', $data, $endpoint);

        $user_id = 0;

        foreach ($endpoint->getEditUsers() as $editPost) {
            $user_id = (new EditUser())->edit($editPost, $data);

            if (!$user_id || is_wp_error($user_id)) {
                wp_send_json_error(['error' => 'User could not be updated']);
            }

            $shouldRunCustomFields = apply_filters(
                'rest_routes_should_process_cf_on_user_edit',
                true,
                $endpoint,
                $data,
                $user_id
            );

            if ($shouldRunCustomFields) {
                (new CustomFields())->run($editPost, $data, $user_id, 'user');
            }
        }

        do_action('rest_routes_after_edit_user', $data, $endpoint, $user_id);

        $result = ['message' => 'User updated', 'id' => $user_id];

        wp_send_json_success(
            apply_filters(
                'rest_routes_edit_user_result',
                $result,
                $data,
                $endpoint,
                $user_id
            )
        );
    }
}
