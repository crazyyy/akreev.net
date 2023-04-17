<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

use RestRoutes\Hooks\REST\CustomRoutes;

class RoutesCollection
{
    private $routeFactory;

    public function __construct(RouteFactory $routeFactory)
    {
        $this->routeFactory = $routeFactory;
    }

    public function get()
    {
        $routes_posts = get_posts([
            'post_type'   => CustomRoutes::ROUTE_CPT,
            'numberposts' => -1
        ]);

        $routes = [];

        foreach ($routes_posts as $route_post) {
            $route = $this->routeFactory->create(null, $route_post);

            if (!$route) {
                continue;
            }

            $routes[] = $this->routeFactory->create(null, $route_post);
        }

        return $routes;
    }
}
