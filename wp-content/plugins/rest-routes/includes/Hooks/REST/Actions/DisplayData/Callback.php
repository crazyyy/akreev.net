<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayData;

use RestRoutes\Helpers\EndpointFinder;
use RestRoutes\Hooks\REST\Actions\IQueryBuilder;
use RestRoutes\Hooks\REST\Actions\IRouteCallback;

class Callback implements IRouteCallback
{
    private $queryBuilder;
    private $endpointFinder;

    public function __construct(IQueryBuilder $queryBuilder, EndpointFinder $endpointFinder)
    {
        $this->queryBuilder = $queryBuilder;
        $this->endpointFinder = $endpointFinder;
    }

    public function getCallback(\WP_REST_Request $data)
    {
        $endpoint = $this->endpointFinder->getByMethod($data->get_route(), $data->get_method());

        if (! $endpoint) {
            return null;
        }

        $results = $this->queryBuilder->getResults($data, $endpoint);

        return apply_filters('rest_routes_display_posts_results', $results, $data, $endpoint);
    }
}
