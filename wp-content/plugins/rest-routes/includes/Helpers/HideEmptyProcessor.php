<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

class HideEmptyProcessor
{
    public function process($results, $fields)
    {
        $fieldsToHide = [];

        foreach ($fields as $field) {
            $shouldStripTags = FieldValueParser::getFieldValue($field['fields'], 'hideEmpty');

            if ($shouldStripTags === 'yes') {
                $fieldsToHide[] = $field['name'][0];
            }
        }

        $results = array_map(static function ($item) use ($fieldsToHide) {
            foreach ($fieldsToHide as $field) {
                if ($item->{$field} === '') {
                    unset($item->{$field});
                }
            }
            return $item;
        }, $results);

        return $results;
    }
}
