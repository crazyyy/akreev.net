<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayTaxonomies;

use RestRoutes\Hooks\REST\Actions\DisplayTaxonomies\Parser\Output;
use RestRoutes\Hooks\REST\Actions\IQueryBuilder;
use RestRoutes\Models\Endpoint;

class QueryBuilder implements IQueryBuilder
{
    private $queryObjects;

    public function __construct(array $queryObjects)
    {
        $this->queryObjects = $queryObjects;
    }

    public function getResults($request, Endpoint $endpoint)
    {
        $query = new \WP_Term_Query($this->parseArguments($request, $endpoint));

        $results = (new Output())->parse(
            $endpoint->getDisplayTaxonomies()[0],
            $query->get_terms(),
            $request
        );

        return apply_filters('rest_routes_display_taxonomies_results', $results, $request, $endpoint);
    }

    private function parseArguments(\WP_REST_Request $data, Endpoint $endpoint)
    {
        $args = [];
        foreach ($endpoint->getDisplayTaxonomies() as $displayData) {
            foreach ($this->queryObjects as $queryArgument) {
                $args = $queryArgument->parse($args, $data, $displayData);
            }
        }

        if (isset($args['hide_empty'])) {
            $args['hide_empty'] = $args['hide_empty'] === 'yes';
        }

        return $args;
    }
}
