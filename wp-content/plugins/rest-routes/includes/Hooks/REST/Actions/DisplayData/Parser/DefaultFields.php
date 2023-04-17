<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayData\Parser;

use RestRoutes\Helpers\FieldValueParser;
use RestRoutes\Helpers\Normalizer;
use RestRoutes\Hooks\REST\Actions\ICallbackParser;

class DefaultFields implements ICallbackParser
{
    public function parse(
        array $args,
        \WP_REST_Request $request_data,
        array $endpoint
    ) {
        if (! $endpoint['defaultFields']) {
            return $args;
        }

        foreach ($endpoint['defaultFields'] as $defaultField) {
            $value = FieldValueParser::getValue($request_data, $defaultField);

            if ('' === $value) {
                continue;
            }

			if ($defaultField['name'] === 'post_date_exactly') {
				$date = new \DateTimeImmutable($value);

				$args = array_merge_recursive($args, [
					'date_query' => [
						'year' => $date->format('Y'),
						'month' => $date->format('m'),
						'day' => $date->format('d'),
					]
				]);
			}

			if ($defaultField['name'] === 'post_date_before') {
				$date = new \DateTimeImmutable($value);

				$args = array_merge_recursive($args, [
					'date_query' => [
						'before' => [
							'year' => $date->format('Y'),
							'month' => $date->format('m'),
							'day' => $date->format('d'),
						]
					]
				]);
			}

			if ($defaultField['name'] === 'post_date_after') {
				$date = new \DateTimeImmutable($value);

				$args = array_merge_recursive($args, [
					'date_query' => [
						'after' => [
							'year' => $date->format('Y'),
							'month' => $date->format('m'),
							'day' => $date->format('d'),
						]
					]
				]);
			}

            if (
                ! is_array($value)
                && false === strpos($value, ',')
                && in_array(
                    $defaultField['name'],
                    [
                        'author__in',
                        'post_parent__not_in',
                        'post_parent__in',
                        'post__in',
                        'post__not_in',
                        'post_name__in'
                    ]
                )
            ) {
                $value = [$value];
            }

            $value = (new Normalizer())->normalizeValue($value);

            if ($defaultField['label'] === 'User ID in') {
                $args['include'] = $value;
            }

            if (in_array($defaultField['name'], ['user_login', 'user_nicename', 'user_email', 'user_url'])) {
                $args['search'] = $value;
                $args['search_columns'][] = $defaultField['name'];
            }

            if ($defaultField['name'] === 'roles') {
                $args['role'] = $value;
            }

            $args[$defaultField['name']] = $value;
        }

        return $args;
    }
}
