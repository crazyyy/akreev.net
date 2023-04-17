<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

use WP_REST_Request;

use function array_filter;
use function current;
use function date;
use function is_array;
use function str_replace;
use function strpos;
use function strtotime;
use function strtoupper;
use function substr;

class FieldValueParser
{
    public static function getFieldValue(array $fields, string $id)
    {
        $field = current(array_filter($fields, static function ($f) use ($id) {
            return $f['id'] === $id;
        }));

        return $field['value'] ?? '';
    }

    public static function getFieldValueByLabel(array $fields, string $label)
    {
        $field = current(array_filter($fields, static function ($f) use ($label) {
            return $f['label'] === $label;
        }));

        return $field['value'] ?? '';
    }

    public static function getFieldsByName(array $fields, string $name)
    {
        $field = current(array_filter($fields, static function ($f) use ($name) {
            return $f['name'] === $name;
        }));

        return $field['fields'] ?? '';
    }

    public static function getValue(WP_REST_Request $request, $field)
    {
		if (!isset($field['fields'])) {
			return '';
		}

        $value = self::getValueFromParameter($request, $field['fields']);

        if (self::isFixedValue($field['fields'])) {
            $fixed = current(array_filter($field['fields'], static function ($f) {
                return $f['id'] === 'value';
            }));

            $value = $fixed['value'];
        }

        if (self::isDynamicValue($field['fields'])) {
            $type = self::getFieldValue($field['fields'], 'dynamicValues');

            if (! $type) {
                $type = $field['fields'][3]['value'] ?? '';
            }

            self::processCurrentUser($type, $value);
            self::processCurrentDate($type, $value);
        }

        if (! is_array($value)) {
            $value = esc_sql(sanitize_text_field($value));
        }

        if (! $value && $field['fields'][0]['value'] === 'body') {
            $value = $request->get_body();
        }

        return $value;
    }

    private static function processCurrentDate($type, &$value): void
    {
        if (strpos($type, 'current_date_') === false) {
            return;
        }

        $dateField = str_replace('current_date_', '', $type);

        if ($dateField === 'date') {
            $value = date('Y-m-d');

            return;
        }

        if ($dateField === 'date_time') {
            $value = date('Y-m-d h:i:s');

            return;
        }

        if ($dateField === 'timestamp') {
            $value = strtotime(date('Y-m-d h:i:s'));

            return;
        }

        $value = date(substr($type, -1));
    }

    private static function processCurrentUser($type, &$value): void
    {
        if (strpos($type, 'current_user_') === false) {
            return;
        }

        $currentUser = get_current_user_id();

        if (! $currentUser) {
            return;
        }

        $currentUser = get_userdata($currentUser);

        if (! $currentUser) {
            return;
        }

        $userField = str_replace('current_user_', '', $type);
        $userField = $userField === 'id' ? strtoupper($userField) : $userField;

        $value = $currentUser->$userField;
    }

    private static function isFixedValue($fields)
    {
        $fixed = current(array_filter($fields, static function ($f) {
            return $f['id'] === 'source';
        }));

        return $fixed['value'] === 'fixedValue';
    }

    private static function isDynamicValue($fields)
    {
        $dynamic = current(array_filter($fields, static function ($f) {
            return $f['id'] === 'source';
        }));

        return $dynamic['value'] === 'dynamic';
    }

    private static function getValueFromParameter(WP_REST_Request $request, $fields)
    {
        $parameter = current(array_filter($fields, static function ($f) {
            return $f['id'] === 'parameters';
        }));

        return $request->get_param($parameter['value']);
    }
}
