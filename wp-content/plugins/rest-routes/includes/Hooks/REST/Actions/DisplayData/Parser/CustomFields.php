<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayData\Parser;

use RestRoutes\Helpers\DynamicSourcesParser;
use RestRoutes\Helpers\FieldValueParser;
use RestRoutes\Hooks\REST\Actions\DisplayData\MetaGroupRelation;
use RestRoutes\Hooks\REST\Actions\ICallbackParser;
use WP_REST_Request;

use function array_merge;
use function is_array;
use function strpos;

class CustomFields implements ICallbackParser
{
    public function parse(
        array $args,
        WP_REST_Request $request_data,
        array $endpoint
    ) {
        if (! $endpoint['customFields']) {
            return $args;
        }

        $groups   = [];
        $no_group = [];

        foreach ($endpoint['customFields'] as $field) {
            $value  = $request_data->get_param(FieldValueParser::getFieldValue($field['fields'], 'parameters'));
            $source = FieldValueParser::getFieldValue($field['fields'], 'source');

            if ($source === 'fixedValue') {
                $value = FieldValueParser::getFieldValue($field['fields'], 'value');
            }

            if ($source === 'dynamic') {
                $value = FieldValueParser::getValue($request_data, $field);
            }

            if (strpos(FieldValueParser::getFieldValue($field['fields'], 'value'), '%%') !== false) {
                $value = (new DynamicSourcesParser())->parse(
                    FieldValueParser::getFieldValue($field['fields'], 'value'),
                    FieldValueParser::getFieldValue($field['fields'], 'type')
                );
            }

            if (! $value) {
                continue;
            }

            $cfGroup = FieldValueParser::getFieldValue($field['fields'], 'queryGroup');
            $key     = FieldValueParser::getFieldValue($field['fields'], 'customFieldName');
            $compare = FieldValueParser::getFieldValue($field['fields'], 'compare');
            $type    = FieldValueParser::getFieldValue($field['fields'], 'type');

            if (is_array($value) && ! $compare) {
                $compare = 'IN';
            }

            if (! is_array($value)) {
                $value = [$value];
            }

            foreach ($value as $val) {
                if ($cfGroup) {
                    if (! isset($groups[$cfGroup]['relation'])) {
                        $groups[$cfGroup]['relation']
                            = (new MetaGroupRelation())->get(
                                $endpoint['queryGroups'],
                                $cfGroup
                            );
                    }

                    $groups[$cfGroup][]
                        = [
                            'key'     => $key,
                            'value'   => $val,
                            'compare' => $compare,
                            'type'    => $type,
                        ];
                } else {
                    $no_group[] = [
                        'key'     => $key,
                        'value'   => $val,
                        'compare' => $compare,
                        'type'    => $type,
                    ];
                }
            }
        }

        $args['meta_query'] = [
            'relation' => $endpoint['mainRelationType'],
        ];

        $args['meta_query'] = array_merge(
            $args['meta_query'],
            $no_group,
            $groups
        );

        return $args;
    }
}
