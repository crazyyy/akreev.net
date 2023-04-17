<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

class Normalizer
{
    public function normalizeValue($value)
    {
        if (is_array($value)) {
            return $value;
        }

        $value = trim($value);

        if (false !== strpos($value, ',')) {
            $value = explode(',', $value);
        }

        return $value;
    }
}
