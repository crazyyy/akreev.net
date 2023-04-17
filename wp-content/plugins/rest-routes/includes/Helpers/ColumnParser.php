<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

class ColumnParser
{
    public static function getColumns($fields, $request, $group)
    {
        $columns = self::buildColumns($fields, $request, $group);

        $columnsOutput = [];
        foreach ($columns as $key => $val) {
            $columnKey       = esc_sql($val['key']);
            $columnValue     = esc_sql($val['value']);
            $columnsOutput[] = "{$columnKey}='{$columnValue}'";
        }

        return $columnsOutput;
    }

    public static function buildColumns($fields, $request, $group)
    {
        $columns = [];

        foreach ($fields[ $group ] as $field) {
            $value = FieldValueParser::getValue($request, $field);

            if (isset($field['fields'][4]) && $field['fields'][4]) {
                if ($field['fields'][4]['value'] === 'json') {
                    $value = json_encode($value);
                }

                if ($field['fields'][4]['value'] === 'serialized') {
                    $value = serialize($value);
                }
            }

            $columns[] = [ 'key' => $field['name'][0], 'value' => $value ];
        }

        return $columns;
    }
}
