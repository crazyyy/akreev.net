<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayTaxonomies\Parser;

use RestRoutes\Helpers\FieldValueParser;
use RestRoutes\Helpers\OutputSorter;
use RestRoutes\Helpers\ParameterConditionalChecker;
use WP_REST_Request;

class Output
{
    const DEFAULT_FIELDS_WP_POST
        = array(
            'term_id',
            'name',
            'slug',
            'term_group',
            'term_taxonomy_id',
            'taxonomy',
            'description',
            'parent',
            'count',
        );

    public function parse($endpoint, $results, WP_REST_Request $request)
    {
        if (! $endpoint['output']) {
            return $results;
        }

        $newOutput = array();

        foreach ($results as $term) {
            $newData = [];
            $outputFields = $endpoint['output'];
            $outputFields = OutputSorter::sort($outputFields);
            foreach ($outputFields as $outputField) {
                if (!(new ParameterConditionalChecker())->conditionalMatched($outputField, $request)) {
                    continue;
                }

                $wp_post_field = in_array(
                    $outputField['name'],
                    self::DEFAULT_FIELDS_WP_POST,
                    true
                ) ? $outputField['name'] : null;
                if ($wp_post_field) {
                    $newData[$wp_post_field] = $term->$wp_post_field;
                } elseif ($outputField['name'] === 'custom-field') {
                    $customFieldVal = get_term_meta(
                        $term->term_id,
                        $outputField['fields'][0]['value']
                    );

                    $customFieldVal = apply_filters(
                        'rest_routes_output_custom_field',
                        $customFieldVal,
                        $outputField,
                        $term->taxonomy . '_' . $term->term_id
                    );

                    if ($customFieldVal) {
                        $customFieldDisplay = FieldValueParser::getFieldValue(
                            $outputField['fields'],
                            'customFieldNameDisplay'
                        );
                        $newData[$customFieldDisplay ?: $outputField['fields'][0]['value']] = $customFieldVal;
                    }
                }
            }
            $newOutput[] = $newData;
        }

        return $newOutput;
    }
}
