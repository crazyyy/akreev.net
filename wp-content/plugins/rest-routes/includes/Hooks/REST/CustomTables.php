<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST;

use RestRoutes\Repository\CustomTable;

class CustomTables extends \WP_REST_Controller
{
    private $customTableRepository;

    public function __construct(CustomTable $customTableRepository)
    {
        $this->namespace             = 'rest-routes/v2';
        $this->customTableRepository = $customTableRepository;
    }

    public function registerHooks()
    {
        add_action('rest_api_init', array($this, 'registerRoutes'));
    }

    public function registerRoutes()
    {
        register_rest_route(
            $this->namespace,
            '/' . 'custom-tables/tables',
            array(
                array(
                    'methods'  => \WP_REST_Server::READABLE,
                    'callback' => array($this, 'getTables'),
                    'permission_callback' => '__return_true',
                ),
                'schema' => array($this, 'get_public_item_schema'),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . 'custom-tables/tables/(?P<table_name>.+)',
            array(
                array(
                    'methods'  => \WP_REST_Server::READABLE,
                    'callback' => array($this, 'getColumns'),
                    'permission_callback' => '__return_true',
                ),
                'schema' => array($this, 'get_public_item_schema'),
            )
        );

        register_rest_route(
            $this->namespace,
            '/' . 'custom-tables/tables-full/',
            array(
                array(
                    'methods'  => \WP_REST_Server::READABLE,
                    'callback' => array($this, 'getFullTables'),
                    'permission_callback' => '__return_true',
                ),
                'schema' => array($this, 'get_public_item_schema'),
            )
        );
    }

    public function getFullTables()
    {
        return $this->customTableRepository->getAllTablesWithColumns();
    }

    public function getTables()
    {
        return $this->customTableRepository->getAllTables();
    }

    public function getColumns(\WP_REST_Request $request)
    {
        return $this->customTableRepository->getColumnsFromTable(
            $request->get_param('table_name')
        );
    }
}
