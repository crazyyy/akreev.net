<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayUsers\Parser;

use RestRoutes\Helpers\FieldValueParser;
use RestRoutes\Helpers\OutputSorter;
use RestRoutes\Helpers\ParameterConditionalChecker;
use WP_REST_Request;

class Output
{
    public const DEFAULT_FIELDS_WP_POST
        = [
            'ID',
            'user_login',
            'user_nicename',
            'roles',
            'user_email',
            'user_url',
            'user_registered',
            'user_status',
            'display_name',
        ];

    public function parse($endpoint, $results, WP_REST_Request $request)
    {
        if (!$endpoint['output']) {
            return $results;
        }

        $newOutput         = [];
        $firstLevelSkipped = false;

        foreach ($results as $user) {
            $newData      = [];
            $outputFields = $endpoint['output'];
            $outputFields = OutputSorter::sort($outputFields);
            foreach ($outputFields as $outputField) {
                if (
                    !(new ParameterConditionalChecker())->conditionalMatched(
                        $outputField,
                        $request
                    )
                ) {
                    continue;
                }

                $wp_post_field = in_array(
                    $outputField['name'],
                    self::DEFAULT_FIELDS_WP_POST,
                    true
                ) ? $outputField['name'] : null;
                if ($wp_post_field) {
                    $newData[$wp_post_field] = $user->$wp_post_field;
                } elseif ($outputField['name'] === 'custom-field') {
                    $customFieldVal = get_user_meta(
                        $user->ID,
                        $outputField['fields'][0]['value'],
                        true
                    );

                    $customFieldVal = apply_filters(
                        'rest_routes_output_custom_field',
                        $customFieldVal,
                        $outputField,
                        'user_' . $user->ID
                    );

                    if (
                        is_array($customFieldVal)
                        && $this->shouldSkipFirstLevel($outputField)
                    ) {
                        $res               = array_merge(
                            $newData,
                            $customFieldVal
                        );
                        $newData           = $res;
                        $firstLevelSkipped = true;
                    } elseif ($customFieldVal) {
                        $customFieldDisplay = FieldValueParser::getFieldValue(
                            $outputField['fields'],
                            'customFieldNameDisplay'
                        );

                        $newData[$customFieldDisplay ?: $outputField['fields'][0]['value']]
                            = $customFieldVal;
                    }
                }
            }
            $newOutput[] = $newData;
        }

        if ($firstLevelSkipped && count($newOutput) === 1) {
            return $newOutput[0];
        } else {
            return $newOutput;
        }
    }

    private function shouldSkipFirstLevel($outputField)
    {
        return isset($outputField['fields'][1]['value'])
            && $outputField['fields'][1]['value'] === 'yes';
    }
}
