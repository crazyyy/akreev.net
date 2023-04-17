<?php

declare(strict_types=1);

namespace RestRoutes\Helpers;

class DynamicSourcesParser
{
    public function parse($type, $dataType)
    {
        return $this->parseToday($type, $dataType);
    }

    private function parseToday($type, $dataType)
    {
        if ($type !== '%%TODAY%%') {
            return '';
        }

        if ($dataType === 'TIME') {
            return strtotime(date('Y-m-d'));
        }

        if ($dataType === 'DATE') {
            return date('Y-m-d');
        }

        if ($dataType === 'DATETIME') {
            return strtotime(date('Y-m-d H:i:s'));
        }
    }
}
