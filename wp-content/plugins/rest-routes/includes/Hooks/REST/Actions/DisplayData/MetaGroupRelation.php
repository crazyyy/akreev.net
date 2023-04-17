<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayData;

class MetaGroupRelation
{
    public function get($metaGroups, $groupName)
    {
        foreach ($metaGroups as $group) {
            if ($group['fields'][0]['value'] === $groupName) {
                return $group['fields'][1]['value'];
            }
        }

        return '';
    }
}
