<?php

declare(strict_types=1);

namespace RestRoutes\Compatibility;

use RestRoutes\Helpers\RouteFactory;
use RestRoutes\Helpers\RoutesCollection;

class WPRestCache
{
    public function registerHooks()
    {
        add_filter('wp_rest_cache/allowed_endpoints', array($this, 'appendCustomEndpoints'), 10, 1);
    }

    public function appendCustomEndpoints($allowed_endpoints)
    {
        $cacheDisabled = apply_filters('rest_routes_disable_wp_rest_route_cache', false);

        if ($cacheDisabled) {
            return $allowed_endpoints;
        }

        $routes = (new RoutesCollection(new RouteFactory()))->get();

        foreach ($routes as $route) {
            if (
                ! isset($allowed_endpoints[ $route->getNamespace() ])
                || ! in_array($route->getRestBase(), $allowed_endpoints[$route->getNamespace()], true)
            ) {
                $allowed_endpoints[ $route->getNamespace() ][] = $route->getRestBase();
            }
        }


        return $allowed_endpoints;
    }
}
