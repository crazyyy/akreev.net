<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayData\Parser;

use RestRoutes\Helpers\FieldValueParser;
use RestRoutes\Hooks\REST\Actions\ICallbackParser;

class OffsetLimit implements ICallbackParser
{
    public function parse(
        array $args,
        \WP_REST_Request $request_data,
        array $endpoint
    ) {
        if (isset($endpoint['offset'])) {
            $args = $this->buildOffsetLimit(
                $args,
                $request_data,
                $endpoint['offset'],
                'offset'
            );
        }

        if (isset($endpoint['limit'])) {
            $args = $this->buildOffsetLimit(
                $args,
                $request_data,
                $endpoint['limit'],
                'posts_per_page'
            );
            $args = $this->buildOffsetLimit(
                $args,
                $request_data,
                $endpoint['limit'],
                'number'
            );
        }

        return $args;
    }

    private function buildOffsetLimit(
        $args,
        \WP_REST_Request $data,
        $fields,
        $field
    ) {
        if (FieldValueParser::getFieldValue($fields[0]['fields'], 'source') === '') {
            if ($field === 'posts_per_page') {
                $args['posts_per_page'] = -1;
            }
            return $args;
        }

        $value = $data->get_param(FieldValueParser::getFieldValue($fields[0]['fields'], 'parameters'));

        if (
            FieldValueParser::getFieldValue($fields[0]['fields'], 'source')
            === 'fixedValue'
        ) {
            $value = FieldValueParser::getFieldValue($fields[0]['fields'], 'value');
        }

        if ($field === 'posts_per_page') {
            $args[$field] = $value !== '' ? $value : -1;
        } else {
            $args[$field] = $value;
        }

        return $args;
    }
}
