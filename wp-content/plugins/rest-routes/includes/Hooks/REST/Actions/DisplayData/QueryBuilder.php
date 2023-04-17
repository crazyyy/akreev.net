<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayData;

use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\Output;
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
        $query = new \WP_Query($this->parseArguments($request, $endpoint));

        return (new Output())->build(
            $endpoint->getDisplayData()[0],
            $query->get_posts(),
            $request
        );
    }

    private function parseArguments(\WP_REST_Request $data, Endpoint $endpoint)
    {
        $args = [];

        foreach ($endpoint->getDisplayData() as $displayData) {
            foreach ($this->queryObjects as $queryArgument) {
                $args = $queryArgument->parse($args, $data, $displayData);
            }
        }

        return $args;
    }
}
