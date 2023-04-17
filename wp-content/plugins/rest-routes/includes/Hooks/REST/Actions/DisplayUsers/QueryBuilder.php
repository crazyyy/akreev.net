<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayUsers;

use RestRoutes\Hooks\REST\Actions\DisplayUsers\Parser\Output;
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
        $query = new \WP_User_Query($this->parseArguments($request, $endpoint));

        $results = (new Output())->parse(
            $endpoint->getDisplayUsers()[0],
            $query->get_results(),
            $request
        );

        return apply_filters('rest_routes_display_users_results', $results, $request, $endpoint);
    }

    private function parseArguments(\WP_REST_Request $data, Endpoint $endpoint)
    {
        $args = [];
        foreach ($endpoint->getDisplayUsers() as $displayData) {
            foreach ($this->queryObjects as $queryArgument) {
                $args = $queryArgument->parse($args, $data, $displayData);
            }
        }

        if (isset($args['has_published_posts'])) {
            $args['has_published_posts'] = $args['has_published_posts'] === 'yes';
        }

        return $args;
    }
}
