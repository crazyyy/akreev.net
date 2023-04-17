<?php

declare(strict_types=1);

namespace RestRoutes\Repository;

use RestRoutes\CustomTable\DbConnection;

class CustomTable
{
    private $wpdb;

    public function __construct(\wpdb $wpdb)
    {
        $this->wpdb = $wpdb;
    }

    public function getAllTablesWithColumns()
    {
        $this->wpdb = (new DbConnection($this->wpdb))->create();

        $res = [];
        foreach ($this->getAllTables() as $table) {
            $res[$table] = $this->getColumnsFromTable($table);
        }
        return $res;
    }

    public function getAllTables()
    {
        $tables = $this->wpdb->get_results(
            'SHOW TABLES',
            ARRAY_A
        );

        $tables = array_map(static function ($table) {
            return array_values($table)[0];
        }, $tables);

        return $this->getOnlyValidTables($tables);
    }

    private function getOnlyValidTables($tables)
    {
        $tablesToExclude = [
            'CHARACTER_SETS',
            'COLLATIONS',
            'COLLATION_CHARACTER_SET_APPLICABILITY',
            'COLUMNS',
            'COLUMN_PRIVILEGES',
            'ENGINES',
            'EVENTS',
            'FILES',
            'GLOBAL_STATUS',
            'GLOBAL_VARIABLES',
            'KEY_COLUMN_USAGE',
            'OPTIMIZER_TRACE',
            'PARAMETERS',
            'PARTITIONS',
            'PLUGINS',
            'PROCESSLIST',
            'PROFILING',
            'REFERENTIAL_CONSTRAINTS',
            'ROUTINES',
            'SCHEMATA',
            'SCHEMA_PRIVILEGES',
            'SESSION_STATUS',
            'SESSION_VARIABLES',
            'STATISTICS',
            'TABLES',
            'TABLESPACES',
            'TABLE_CONSTRAINTS',
            'TABLE_PRIVILEGES',
            'TRIGGERS',
            'USER_PRIVILEGES',
            'VIEWS',
        ];

        return array_filter(
            $tables,
            static function ($table) use ($tablesToExclude) {
                return ! in_array($table, $tablesToExclude, true)
                    && false === strpos($table, 'INNODB');
            }
        );
    }

    public function getColumnsFromTable($table)
    {
        $columns = $this->wpdb->get_results(
            "SHOW COLUMNS FROM `{$table}`",
            ARRAY_A
        );

        return $this->extractColumnName($columns);
    }

    private function extractColumnName($columns)
    {
        return array_map(
            static function ($column) {
                return $column['Field'];
            },
            $columns
        );
    }
}
