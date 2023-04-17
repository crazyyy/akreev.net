<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

class EndpointFinder
{
    public function getByMethod($route, $method)
    {
        $routeObject = (new RouteFactory())->create($route);

        if (!$routeObject) {
            return null;
        }

        foreach ($routeObject->getEndpoints() as $endpoint) {
            if (false !== strpos($endpoint->getMethod(), $method)) {
                return $endpoint;
            }
        }

        return null;
    }
}
