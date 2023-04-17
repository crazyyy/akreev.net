<?php

declare(strict_types=1);

namespace RestRoutes\Capabilities;

class CapList
{
    public function get()
    {
        $roles        = get_editable_roles();
        $capabilities = array();

        foreach ($roles as $role) {
            if (isset($role['capabilities'])) {
                foreach ($role['capabilities'] as $key => $cap) {
                    if (! in_array($key, $capabilities)) {
                        $capabilities[] = $key;
                    }
                }
            }
        }

        sort($capabilities);

        return $capabilities;
    }
}
