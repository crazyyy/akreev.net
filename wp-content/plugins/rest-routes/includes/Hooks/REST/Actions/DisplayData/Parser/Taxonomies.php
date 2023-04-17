<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayData\Parser;

use RestRoutes\Helpers\Normalizer;
use RestRoutes\Hooks\REST\Actions\DisplayData\MetaGroupRelation;
use RestRoutes\Hooks\REST\Actions\ICallbackParser;
use RestRoutes\Hooks\REST\Actions\IRouteCallback;

class Taxonomies implements ICallbackParser
{
    public function parse(
        array $args,
        \WP_REST_Request $request_data,
        array $endpoint
    ) {
        if (! $endpoint['taxonomies']) {
            return $args;
        }

        $groups = [];
        $no_group = [];

        foreach ($endpoint['taxonomies'] as $field) {
            $value = $request_data->get_param(
                $field['fields'][IRouteCallback::TAX_VALUE]['value']
            );

            if (
                $field['fields'][IRouteCallback::SOURCE_TYPE]['value']
                === 'fixedValue'
            ) {
                $value = $field['fields'][IRouteCallback::FIXED_VALUE]['value'];
            }

            if (! $value) {
                continue;
            }

            $value = (new Normalizer())->normalizeValue($value);

            if ($field['fields'][IRouteCallback::TAX_GROUP_KEY]['value']) {
                if (! isset($groups[$field['fields'][IRouteCallback::TAX_GROUP_KEY]['value']]['relation'])) {
                    $groups[$field['fields'][IRouteCallback::TAX_GROUP_KEY]['value']]['relation']
                        = (new MetaGroupRelation())->get(
                            $endpoint['queryGroups'],
                            $field['fields'][IRouteCallback::CUSTOM_FIELD_COMPARE_KEY]['value']
                        );
                }
                $groups[$field['fields'][IRouteCallback::TAX_GROUP_KEY]['value']][]
                    = array(
                    'taxonomy' => $field['fields'][IRouteCallback::TAX_TAXONOMY_KEY]['value'],
                    'field'    => $field['fields'][IRouteCallback::TAX_FIELD_KEY]['value'],
                    'terms'    => $value,
                    );
            } else {
                $no_group[] = array(
                    'taxonomy' => $field['fields'][IRouteCallback::TAX_TAXONOMY_KEY]['value'],
                    'field'    => $field['fields'][IRouteCallback::TAX_FIELD_KEY]['value'],
                    'terms'    => $value,
                );
            }
        }

        $args['tax_query'] = array(
            'relation' => $endpoint['taxonomyRelationType'],
        );

        $args['tax_query'] = array_merge(
            $args['tax_query'],
            $no_group,
            $groups
        );

        return $args;
    }
}
