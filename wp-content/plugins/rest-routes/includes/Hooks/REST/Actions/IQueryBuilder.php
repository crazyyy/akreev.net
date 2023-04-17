<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions;

use RestRoutes\Models\Endpoint;

interface IQueryBuilder
{
    public function __construct(array $queryObjects);

    public function getResults($request, Endpoint $endpoint);
}
