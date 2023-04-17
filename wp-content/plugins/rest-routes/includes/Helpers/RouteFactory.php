<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

use RestRoutes\Hooks\REST\Actions\RouteCallbackFactory;
use RestRoutes\Hooks\REST\CustomRoutes;
use RestRoutes\Models\Endpoint;
use RestRoutes\Models\Parameter;
use RestRoutes\Models\Route;

class RouteFactory
{
    public function create($route = null, $routePost = null)
    {
        if (! $route && ! $routePost) {
            throw new \InvalidArgumentException('Route name or route post must be passed.');
        }

        $routePost = $routePost ?: get_posts(array(
            'title' => $route,
            'post_type' => CustomRoutes::ROUTE_CPT
        ));

        $routeObj  = new Route();

        if (is_array($routePost) && isset($routePost[0])) {
            $routePost = $routePost[0];
        }

        $settings = get_post_meta($routePost->ID, CustomRoutes::ROUTE_SETTINGS, true);

        if (!is_array($settings) || !$settings) {
            return null;
        }

        $routeObj->setEndpoints($this->getEndpoints($settings));
        $routeObj->setNamespace($settings['namespace']);
        $routeObj->setRestBase($settings['routeName']);
        $routeObj->setEnabled($settings['enabled']);

        return $routeObj;
    }

    private function getEndpoints(array $settings)
    {
        $endpoints = [];

        foreach ($settings['endpoints'] as $endpoint) {
            $endpointObj = new Endpoint();
            $endpointObj->setMethod($endpoint['method']);
            $endpointObj->setCapability($endpoint['capability']);
            $endpointObj->setParameters($this->getParameters($endpoint['parameters']));
            $endpointObj->setAction($endpoint['action']);

            if ('create_post' === $endpointObj->getAction()) {
                $endpointObj->setCreatePost($endpoint['createPosts']);
            }

            if ('display_data' === $endpointObj->getAction()) {
                $endpointObj->setDisplayData($endpoint['displayData']);
            }

            if ('display_taxonomies' === $endpointObj->getAction()) {
                $endpointObj->setDisplayTaxonomies($endpoint['displayTaxonomies']);
            }

            if ('create_taxonomies' === $endpointObj->getAction()) {
                $endpointObj->setCreateTaxonomies($endpoint['createTaxonomies']);
            }

            if ('edit_taxonomies' === $endpointObj->getAction()) {
                $endpointObj->setCreateTaxonomies($endpoint['editTaxonomies']);
            }

            if ('display_custom_table' === $endpointObj->getAction()) {
                $endpointObj->setDisplayCustomTable($endpoint['displayCustomTable']);
            }

            if ('edit_post' === $endpointObj->getAction()) {
                $endpointObj->setEditPost($endpoint['editPost']);
            }

            if ('edit_post' === $endpointObj->getAction()) {
                $endpointObj->setEditPost($endpoint['editPost']);
            }

            if ('create_custom_table' === $endpointObj->getAction()) {
                $endpointObj->setCreateCustomTable($endpoint['createCustomTable']);
            }

            if ('edit_custom_table' === $endpointObj->getAction()) {
                $endpointObj->setEditCustomTable($endpoint['editCustomTable']);
            }

            if ('delete_custom_table' === $endpointObj->getAction()) {
                $endpointObj->setDeleteCustomTable($endpoint['deleteCustomTable']);
            }

            if ('display_users' === $endpointObj->getAction()) {
                $endpointObj->setDisplayUsers($endpoint['displayUsers']);
            }

            if ('edit_users' === $endpointObj->getAction()) {
                $endpointObj->setEditUsers($endpoint['editUsers']);
            }

            if ('create_users' === $endpointObj->getAction()) {
                $endpointObj->setCreateUsers($endpoint['createUsers']);
            }

            if ('rest_api_call' === $endpointObj->getAction()) {
                $endpointObj->setRestApiCall($endpoint['restApiCall']);
            }

            if ('custom_sql_query' === $endpointObj->getAction()) {
                $endpointObj->setCustomSQLQuery($endpoint['customSQLQuery']);
            }

            $endpointObj->setEnabled($endpoint['enabled']);

            $endpointObj->setCallback(array(
                (new RouteCallbackFactory())->create($endpoint['action']),
                'getCallback'
            ));
            $endpointObj->setPermissionCallback(isset($endpoint['capability'])
                ? static function () use ($endpoint) {
                    return $endpoint['capability'] !== 'all'
                        ? current_user_can($endpoint['capability']) : true;
                } : '');

            $endpoints[] = $endpointObj;
        }

        return $endpoints;
    }

    private function getParameters(array $parameters)
    {
        $parametersObj = [];

        foreach ($parameters as $parameter) {
            $parameter_obj = new Parameter();
            $parameter_obj->setType($parameter['type']);
            $parameter_obj->setRequired($parameter['required']);
            $parameter_obj->setDefault($parameter['default']);
            $parameter_obj->setName($parameter['name']);

            if (isset($parameter['type'])) {
                if ('number' === $parameter['type']) {
                    $parameter_obj->setValidateCallback(
                        static function ($param) {
                            if (empty($param)) {
                                return true;
                            }

                            if (is_array($param)) {
                                $res = array_filter($param, static function ($item) {
                                    return is_numeric($item);
                                });

                                if ($res) {
                                    return true;
                                }
                            }

                            return is_numeric($param);
                        }
                    );
                } elseif ('boolean' === $parameter['type']) {
                    $parameter_obj->setValidateCallback(
                        static function ($param) {
                            if ($param === '') {
                                return true;
                            }

                            return in_array($param, array('true', 'false'));
                        }
                    );
                }
            }
            $parametersObj[] = $parameter_obj;
        }

        return $parametersObj;
    }
}
