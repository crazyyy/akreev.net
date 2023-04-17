<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

class TrimProcessor
{
    public function process(array $results, $fields): array
    {
        $fieldsToStrip = [];

        foreach ($fields as $field) {
            $shouldTrimText = FieldValueParser::getFieldValue($field['fields'], 'trimText');

            if ($shouldTrimText === 'yes') {
                $fieldsToStrip[] = $field['name'][0];
            }
        }

        $results = array_map(static function ($item) use ($fieldsToStrip) {
            foreach ($fieldsToStrip as $field) {
                $item->{$field} = trim($item->{$field});
            }
            return $item;
        }, $results);

        return $results;
    }
}
