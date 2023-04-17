<?php

declare(strict_types=1);

namespace RestRoutes\CustomTable;

class DbConnection
{
    private $wpdb;

    public function __construct(\wpdb $wpdb)
    {
        $this->wpdb = $wpdb;
    }

    public function create()
    {
        $customConnection = apply_filters('rest_routes_custom_table_db_credentials', []);

        if (
            isset(
                $customConnection['username'],
                $customConnection['password'],
                $customConnection['database'],
                $customConnection['host']
            )
        ) {
            return new \wpdb(
                $customConnection['username'],
                $customConnection['password'],
                $customConnection['database'],
                $customConnection['host']
            );
        }

        return $this->wpdb;
    }
}
