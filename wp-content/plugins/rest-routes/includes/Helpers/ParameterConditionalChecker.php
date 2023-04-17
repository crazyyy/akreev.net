<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

class ParameterConditionalChecker
{
    public function conditionalMatched(array $outputField, \WP_REST_Request $request): bool
    {
        $conditionalComparison = FieldValueParser::getFieldValue(
            $outputField['fields'],
            'compare'
        );

        $conditionalValue = FieldValueParser::getFieldValue(
            $outputField['fields'],
            'conditionalValue'
        );

        if ($conditionalValue === '' || $conditionalComparison === '') {
            return true;
        }

        $parameter = $request->get_param(
            FieldValueParser::getFieldValueByLabel(
                $outputField['fields'],
                'Conditional Parameter'
            )
        );

        switch ($conditionalComparison) {
            case '=':
                return $parameter == $conditionalValue;
            case '!=':
                return $parameter != $conditionalValue;
            case '<':
                return $parameter < $conditionalValue;
            case '<=':
                return $parameter <= $conditionalValue;
            case '>':
                return $parameter > $conditionalValue;
            case '>=':
                return $parameter >= $conditionalValue;
            case 'LIKE':
                return false !== strpos($conditionalValue, $parameter);
            case 'NOT LIKE':
                return false === strpos($conditionalValue, $parameter);
            case 'IN':
                $values = explode(',', $conditionalValue);
                return in_array($parameter, $values);
            case 'NOT IN':
                $values = explode(',', $conditionalValue);
                return !in_array($parameter, $values);
            default:
                return true;
        }
    }
}
