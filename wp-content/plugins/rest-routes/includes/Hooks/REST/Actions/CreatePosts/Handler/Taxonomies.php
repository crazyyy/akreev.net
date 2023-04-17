<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\CreatePosts\Handler;

use RestRoutes\Helpers\FieldValueParser;
use WP_REST_Request;

class Taxonomies
{
    public function run($endpoint, WP_REST_Request $request_data, $postId)
    {
        foreach ($endpoint['taxonomies'] as $term) {
            $value = $request_data->get_param($term['fields'][4]['value']);

            if ($term['fields'][0]['value'] === 'fixedValue') {
                $value = $term['fields'][1]['value'];
            }

            if (!$value) {
                continue;
            }

            if (!is_array($value)) {
                $value = [$value];
            }

            foreach ($value as $val) {
                $fieldType = FieldValueParser::getFieldValue(
                    $term['fields'],
                    'field-type'
                ) ?: 'name';
                $term_found = get_term_by(
                    $fieldType,
                    $val,
                    $term['fields'][2]['value'],
                    ARRAY_A
                );

                if (!$term_found) {
                    $term_found = wp_insert_term(
                        $val,
                        $term['fields'][2]['value']
                    );
                }

                $append = true;

                if (isset($endpoint['shouldAppendTerms'])) {
                    $append = $endpoint['shouldAppendTerms'];
                }

                $shouldRunTaxonomyCustomField = apply_filters(
                    'rest_routes_should_process_tax_cf_on_post_creation',
                    true,
                    $endpoint,
                    $request_data,
                    $postId
                );

                if ($shouldRunTaxonomyCustomField) {
                    update_term_meta(
                        $term_found['term_id'],
                        FieldValueParser::getFieldValue(
                            $term['fields'],
                            'customFieldName'
                        ),
                        FieldValueParser::getFieldValue(
                            $term['fields'],
                            'customFieldValue'
                        )
                    );
                }

                wp_set_post_terms(
                    $postId,
                    [$term_found['term_id']],
                    $term['fields'][2]['value'],
                    $append
                );
            }
        }
    }
}
