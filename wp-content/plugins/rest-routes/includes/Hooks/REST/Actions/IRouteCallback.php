<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions;

use RestRoutes\Helpers\EndpointFinder;

interface IRouteCallback
{
    public const SOURCE_TYPE                = 0;
    public const PARAMETER_VALUE            = 2;
    public const FIXED_VALUE                = 1;
    public const CUSTOM_FIELD_KEY           = 2;
    public const CUSTOM_FIELD_PARAMETER_KEY = 3;
    public const CUSTOM_FIELD_COMPARE_KEY   = 4;
    public const CUSTOM_FIELD_GROUP_KEY     = 6;
    public const TAX_GROUP_KEY              = 4;
    public const TAX_FIELD_KEY              = 3;
    public const TAX_TAXONOMY_KEY           = 2;
    public const TAX_VALUE                  = 5;

    public function __construct(
        IQueryBuilder $queryBuilder,
        EndpointFinder $endpointFinder
    );

    public function getCallback(\WP_REST_Request $data);
}
