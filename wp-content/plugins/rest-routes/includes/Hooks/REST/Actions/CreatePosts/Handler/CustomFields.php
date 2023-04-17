<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\CreatePosts\Handler;

use RestRoutes\Helpers\FieldValueParser;
use WP_REST_Request;

class CustomFields implements IHandler
{
    public function run(
        array $createPost,
        WP_REST_Request $data,
        $post_id,
        $type = 'post'
    ) {
        foreach ($createPost['customFields'] as $key => $customField) {
            $value = $data->get_param(
                FieldValueParser::getFieldValue(
                    $customField['fields'],
                    'parameters'
                )
            );

            if (
                FieldValueParser::getFieldValue(
                    $customField['fields'],
                    'source'
                ) === 'fixedValue'
            ) {
                $value = $customField['fields'][1]['value'];
            }

            if (!$value) {
                continue;
            }

            if ($type === 'post') {
                update_post_meta(
                    $post_id,
                    FieldValueParser::getFieldValue(
                        $customField['fields'],
                        'customFieldName'
                    ),
                    $value
                );
            } else {
                if (is_array($value)) {
                    $oldValue = get_user_meta(
                        $post_id,
                        $customField['fields'][2]['value'],
                        true
                    );
                    $oldValue = array_merge($oldValue, $value);
                    $value    = $oldValue;
                }

                update_user_meta(
                    $post_id,
                    $customField['fields'][2]['value'],
                    $value
                );
            }

            do_action(
                'rest_routes_create_edit_post_updated_custom_field',
                $customField,
                $post_id,
                $value,
                $key
            );
        }
    }
}
