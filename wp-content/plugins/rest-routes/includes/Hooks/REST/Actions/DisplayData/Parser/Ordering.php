<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayData\Parser;

use RestRoutes\Helpers\FieldValueParser;
use RestRoutes\Hooks\REST\Actions\ICallbackParser;

class Ordering implements ICallbackParser
{
    public function parse(
        array $args,
        \WP_REST_Request $request_data,
        array $endpoint
    ) {
        if (isset($endpoint['order'])) {
            $args = $this->buildOrdering(
                $args,
                $request_data,
                $endpoint['order'],
                'order'
            );
        }

        if (isset($endpoint['orderby'])) {
            $args = $this->buildOrdering(
                $args,
                $request_data,
                $endpoint['orderby'],
                'orderby'
            );
        }

        return $args;
    }

    private function buildOrdering(
        $args,
        \WP_REST_Request $data,
        $fields,
        $field
    ) {
        if (FieldValueParser::getFieldValue($fields[0]['fields'], 'source') === '') {
            return $args;
        }

        $value = FieldValueParser::getFieldValue($fields[0]['fields'], 'parameters');

        if (
            FieldValueParser::getFieldValue($fields[0]['fields'], 'source')
            === 'fixedValue'
        ) {
            $value = FieldValueParser::getFieldValue($fields[0]['fields'], 'value');
        }

        if (!$value) {
            $args['order'] = 'asc';
            return $args;
        }

        if ($value === 'custom_field') {
            $args['meta_key'] = FieldValueParser::getFieldValue($fields[0]['fields'], 'customFieldOrderBy');
            $args['orderby'] = 'meta_value';
        } else {
            $args[$field] = $value;
        }

        return $args;
    }
}
