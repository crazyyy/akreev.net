<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST;

use RestRoutes\Helpers\RoutesCollection;
use RestRoutes\Hooks\IHook;
use RestRoutes\Models\Route;

class CustomRoutes implements IHook
{
    public const ROUTE_CPT      = 'rest-route';
    public const ROUTE_SETTINGS = 'rest_route_settings';

    private $routesCollection;

    public function __construct(RoutesCollection $routesCollection)
    {
        $this->routesCollection = $routesCollection;
    }

    public function registerHooks()
    {
        add_action('rest_api_init', array($this, 'registerRoutes'));
    }

    public function registerRoutes()
    {
        $routes = $this->routesCollection->get();

        foreach ($routes as $route) {
            if (! $route->getEnabled()) {
                continue;
            }

            register_rest_route(
                $route->getNamespace(),
                '/' . $route->getRestBase(),
                $this->registerEndpoints($route)
            );
        }
    }

    private function registerEndpoints(Route $route)
    {
        $args = [];
        foreach ($route->getEndpoints() as $endpoint) {
            if (! $endpoint->getEnabled()) {
                continue;
            }

            $parameters = array();

            foreach ($endpoint->getParameters() as $parameter) {
                $parameters[$parameter->getName()] = array(
                    'default'           => $parameter->getDefault(),
                    'required'          => $parameter->getRequired(),
                    'validate_callback' => $parameter->getValidateCallback(),
                );
            }

            $args[] = array(
                'methods'             => $endpoint->getMethod(),
                'args'                => $parameters,
                'permission_callback' => $endpoint->getPermissionCallback(),
                'callback'            => $endpoint->getCallback(),
            );
        }

        return $args;
    }
}
