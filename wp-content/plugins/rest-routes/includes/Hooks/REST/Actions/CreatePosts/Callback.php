<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\CreatePosts;

use RestRoutes\Helpers\EndpointFinder;
use RestRoutes\Hooks\REST\Actions\CreatePosts\Handler\CustomFields;
use RestRoutes\Hooks\REST\Actions\CreatePosts\Handler\Taxonomies;
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

        do_action('rest_routes_before_create_posts_callback', $data, $endpoint);

        $post_id = 0;

        foreach ($endpoint->getCreatePost() as $createPost) {
            $post_id = (new PostCreation())->create($createPost, $data);

            if (!$post_id) {
                wp_send_json_error(['error' => 'Post could not be created']);
            }

            $shouldRunTaxonomies = apply_filters(
                'rest_routes_should_process_tax_on_post_creation',
                true,
                $endpoint,
                $data,
                $post_id
            );

            if ($shouldRunTaxonomies) {
                (new Taxonomies())->run($createPost, $data, $post_id);
            }

            $shouldRunCustomFields = apply_filters(
                'rest_routes_should_process_cf_on_post_creation',
                true,
                $endpoint,
                $data,
                $post_id
            );

            if ($shouldRunCustomFields) {
                (new CustomFields())->run($createPost, $data, $post_id);
            }
        }

        do_action(
            'rest_routes_after_create_posts_callback',
            $data,
            $endpoint,
            $post_id
        );

        $result = ['message' => 'Post created', 'id' => $post_id];

        wp_send_json_success(
            apply_filters(
                'rest_routes_create_posts_result',
                $result,
                $endpoint,
                $data,
                $post_id
            )
        );
    }
}
