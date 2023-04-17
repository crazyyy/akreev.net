<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\CreateTaxonomies;

use RestRoutes\Helpers\EndpointFinder;
use RestRoutes\Hooks\REST\Actions\CreateTaxonomies\Handler\CustomFields;
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

        do_action(
            'rest_routes_before_create_taxonomies_callback',
            $data,
            $endpoint
        );

        $term_id = 0;

        foreach ($endpoint->getCreateTaxonomies() as $createTaxonomy) {
            $term_id = (new TaxonomyCreation())->create($createTaxonomy, $data);

            if (is_wp_error($term_id)) {
                wp_send_json_error(['error' => $term_id->get_error_message()]);
            }

            $term_id = $term_id['term_id'] ?? 0;

            if (!$term_id) {
                wp_send_json_error(
                    ['error' => 'Taxonomy term could not be created']
                );
            }

            $shouldRunCustomFields = apply_filters(
                'rest_routes_should_process_cf_on_taxonomy_creation',
                true,
                $endpoint,
                $data,
                $term_id
            );

            if ($shouldRunCustomFields) {
                (new CustomFields())->run($createTaxonomy, $data, $term_id);
            }
        }

        do_action(
            'rest_routes_after_create_taxonomies_callback',
            $data,
            $endpoint,
            $term_id
        );

        $result = ['message' => 'Taxonomy created', 'id' => $term_id];

        wp_send_json_success(
            apply_filters(
                'rest_routes_create_taxonomy_result',
                $result,
                $endpoint,
                $data,
                $term_id
            )
        );
    }
}
