<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\CreateTaxonomies\Handler;

class CustomFields implements IHandler
{
    public function run(array $createTaxonomy, \WP_REST_Request $data, $term_id, $type = 'post')
    {
        foreach ($createTaxonomy['customFields'] as $customField) {
            $value = $data->get_param($customField['fields'][3]['value']);

            if ($customField['fields'][0]['value'] === 'fixedValue') {
                $value = $customField['fields'][1]['value'];
            }

            if (! $value) {
                continue;
            }

            update_term_meta($term_id, $customField['fields'][2]['value'], $value);
        }
    }
}
