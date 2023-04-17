<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\CreateUsers;

use RestRoutes\Helpers\EndpointFinder;
use RestRoutes\Hooks\REST\Actions\CreatePosts\Handler\CustomFields;
use WP_REST_Request;

class Callback
{
    private $endpointFinder;

    public function __construct(EndpointFinder $endpointFinder)
    {
        $this->endpointFinder = $endpointFinder;
    }

    public function getCallback(WP_REST_Request $data)
    {
        $endpoint = $this->endpointFinder->getByMethod(
            $data->get_route(),
            $data->get_method()
        );

        if (!$endpoint) {
            wp_send_json_error(['error' => 'Endpoint could not be found']);
        }

        do_action('rest_routes_before_create_users', $data, $endpoint);

        $user_id = 0;

        foreach ($endpoint->getCreateUsers() as $createUser) {
            $user_id = (new UserCreation())->create($createUser, $data);

            if (is_wp_error($user_id)) {
                wp_send_json_error($user_id);
            }

            if (!$user_id) {
                wp_send_json_error(['error' => 'User could not be created']);
            }

            $shouldRunCustomFields = apply_filters(
                'rest_routes_should_process_cf_on_user_create',
                true,
                $endpoint,
                $data,
                $user_id
            );

            if ($shouldRunCustomFields) {
                (new CustomFields())->run($createUser, $data, $user_id, 'user');
            }
        }

        do_action('rest_routes_after_create_users', $data, $endpoint, $user_id);

        $results = ['message' => 'User created', 'id' => $user_id];

        wp_send_json_success(
            apply_filters(
                'rest_routes_create_users_result',
                $results,
                $endpoint,
                $data,
                $user_id
            )
        );
    }
}
