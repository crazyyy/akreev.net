<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\CreateUsers;

class UserCreation
{
    public function create($endpoint, \WP_REST_Request $request_data)
    {
        $defaultFields = array();
        foreach ($endpoint['defaultFields'] as $defaultField) {
            $value = '';
            foreach ($defaultField['fields'] as $field) {
                if ($field['id'] === 'source') {
                    if ($field['value'] === 'fixedValue') {
                        $value = $defaultField['fields'][1]['value'];
                    } elseif ($field['value'] === 'parameter') {
                        $value
                            = $request_data->get_param($defaultField['fields'][2]['value']);
                    }
                }
            }

            if ($defaultField['name'] === 'roles') {
                $defaultFields['role'] = $value;
            }

            $defaultFields[$defaultField['name']] = $value;
        }

        if (!isset($defaultFields['user_pass'])) {
            return new \WP_Error('password_is_missing', 'Password is a required parameter');
        }

        return wp_insert_user($defaultFields);
    }
}
