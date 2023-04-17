<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

class OutputSorter
{
    public static function sort($arr)
    {
        usort($arr, static function ($a, $b) {
            if (!isset($a['fields'], $b['fields'])) {
                return 0;
            }

            $positionA = (int) (($a['order'] ?? '') !== '' ? $a['order'] : 999);
            $positionB = (int) (($b['order'] ?? '') !== '' ? $b['order'] : 999);

            if ($positionA === $positionB) {
                return 0;
            }

            return $positionA < $positionB ? -1 : 1;
        });

        return $arr;
    }
}
