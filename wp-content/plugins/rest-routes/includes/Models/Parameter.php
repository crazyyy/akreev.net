<?php

declare(strict_types=1);

namespace RestRoutes\Models;

class Parameter
{
    private $default;
    private $required;
    private $name;
    private $type;
    private $validateCallback;

    /**
     * @return mixed
     */
    public function getValidateCallback()
    {
        return $this->validateCallback;
    }

    /**
     * @param mixed $validateCallback
     */
    public function setValidateCallback($validateCallback)
    {
        $this->validateCallback = $validateCallback;
    }

    /**
     * @return mixed
     */
    public function getDefault()
    {
        return $this->default;
    }

    /**
     * @param mixed $default
     */
    public function setDefault($default)
    {
        $this->default = $default;
    }

    /**
     * @return mixed
     */
    public function getRequired()
    {
        return $this->required;
    }

    /**
     * @param mixed $required
     */
    public function setRequired($required)
    {
        $this->required = $required;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param mixed $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }
}
