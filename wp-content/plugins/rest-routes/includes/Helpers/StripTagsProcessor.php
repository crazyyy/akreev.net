<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

class StripTagsProcessor
{
    public function process(array $results, $fields): array
    {
        $fieldsToStrip = [];

        foreach ($fields as $field) {
            $shouldStripTags = FieldValueParser::getFieldValue($field['fields'], 'stripTags');

            if ($shouldStripTags === 'yes') {
                $fieldsToStrip[] = $field['name'][0];
            }
        }

        $results = array_map(static function ($item) use ($fieldsToStrip) {
            foreach ($fieldsToStrip as $field) {
                $item->{$field} = trim(strip_tags($item->{$field}));
            }
            return $item;
        }, $results);

        return $results;
    }
}
