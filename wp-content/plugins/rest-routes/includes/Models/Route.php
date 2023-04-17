<?php

declare(strict_types=1);

namespace RestRoutes\Models;

class Route
{
    private $namespace;
    private $restBase;
    private $endpoints;
    private $enabled;

    /**
     * @return bool
     */
    public function getEnabled()
    {
        return $this->enabled;
    }

    /**
     * @param bool $enabled
     *
     * @return $this
     */
    public function setEnabled($enabled)
    {
        $this->enabled = $enabled;

        return $this;
    }

    public function getNamespace()
    {
        return $this->namespace;
    }

    public function getRestBase()
    {
        return $this->restBase;
    }

    /**
     * @return Endpoint[]
     */
    public function getEndpoints()
    {
        return $this->endpoints;
    }

    public function setEndpoints($endpoints)
    {
        $this->endpoints = $endpoints;
    }

    public function setNamespace($namespace)
    {
        $this->namespace = $namespace;
    }

    public function setRestBase($restBase)
    {
        $this->restBase = $restBase;
    }
}
