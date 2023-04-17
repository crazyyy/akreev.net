<?php

declare(strict_types=1);

namespace RestRoutes\Models;

class Endpoint
{
    private $parameters;
    private $capability;
    private $method;
    private $callback;
    private $permissionCallback;
    private $action;
    private $createPost;
    private $displayData;
    private $displayTaxonomies;
    private $createTaxonomies;
    private $editTaxonomies;
    private $enabled;
    private $displayCustomTable;
    private $editPost;
    private $createCustomTable;
    private $editCustomTable;
    private $displayUsers;
    private $editUsers;
    private $restApiCall;
    private $customSQLQuery;

    public function getEditUsers()
    {
        return $this->editUsers;
    }

    public function setEditUsers($editUsers)
    {
        $this->editUsers = $editUsers;

        return $this;
    }

    public function getCreateUsers()
    {
        return $this->createUsers;
    }

    public function setCreateUsers($createUsers)
    {
        $this->createUsers = $createUsers;

        return $this;
    }
    private $createUsers;

    public function getDisplayUsers()
    {
        return $this->displayUsers;
    }

    public function setDisplayUsers($displayUsers)
    {
        $this->displayUsers = $displayUsers;

        return $this;
    }

    public function getEditCustomTable()
    {
        return $this->editCustomTable;
    }

    public function setEditCustomTable($editCustomTable)
    {
        $this->editCustomTable = $editCustomTable;

        return $this;
    }

    public function getDeleteCustomTable()
    {
        return $this->deleteCustomTable;
    }

    public function setDeleteCustomTable($deleteCustomTable)
    {
        $this->deleteCustomTable = $deleteCustomTable;

        return $this;
    }
    private $deleteCustomTable;

    public function getCreateCustomTable()
    {
        return $this->createCustomTable;
    }

    public function setCreateCustomTable($createCustomTable)
    {
        $this->createCustomTable = $createCustomTable;

        return $this;
    }

    public function getEditPost()
    {
        return $this->editPost;
    }

    public function setEditPost($editPost)
    {
        $this->editPost = $editPost;

        return $this;
    }

    public function getDisplayCustomTable()
    {
        return $this->displayCustomTable;
    }

    public function setDisplayCustomTable($displayCustomTable)
    {
        $this->displayCustomTable = $displayCustomTable;

        return $this;
    }

    public function getDisplayTaxonomies()
    {
        return $this->displayTaxonomies;
    }

    public function setDisplayTaxonomies($displayTaxonomies)
    {
        $this->displayTaxonomies = $displayTaxonomies;

        return $this;
    }

    public function setCreateTaxonomies($createTaxonomies)
    {
        $this->createTaxonomies = $createTaxonomies;

        return $this;
    }

    public function getCreateTaxonomies()
    {
        return $this->createTaxonomies;
    }

    public function getEnabled()
    {
        return $this->enabled;
    }

    public function setEnabled($enabled)
    {
        $this->enabled = $enabled;

        return $this;
    }

    public function getDisplayData()
    {
        return $this->displayData;
    }

    public function setDisplayData($displayData)
    {
        $this->displayData = $displayData;
    }

    public function getCreatePost()
    {
        return $this->createPost;
    }

    public function setCreatePost($createPost)
    {
        $this->createPost = $createPost;
    }

    public function getAction()
    {
        return $this->action;
    }

    public function setAction($action)
    {
        $this->action = $action;
    }

    public function getPermissionCallback()
    {
        return $this->permissionCallback;
    }

    public function setPermissionCallback($permissionCallback)
    {
        $this->permissionCallback = $permissionCallback;
    }

    public function getParameters()
    {
        return $this->parameters;
    }

    public function setParameters($parameters)
    {
        $this->parameters = $parameters;
    }

    public function getCapability()
    {
        return $this->capability;
    }

    public function setCapability($capability)
    {
        $this->capability = $capability;
    }

    public function getMethod()
    {
        return $this->method;
    }

    public function setMethod($method)
    {
        $this->method = $method;
    }

    public function getCallback()
    {
        return $this->callback;
    }

    public function setCallback($callback)
    {
        $this->callback = $callback;
    }

    public function getEditTaxonomies()
    {
        return $this->editTaxonomies;
    }

    public function setEditTaxonomies($editTaxonomies)
    {
        $this->editTaxonomies = $editTaxonomies;

        return $this;
    }

    public function getRestApiCall()
    {
        return $this->restApiCall;
    }

    public function setRestApiCall($restApiCall)
    {
        $this->restApiCall = $restApiCall;

        return $this;
    }

    public function getCustomSQLQuery()
    {
        return $this->customSQLQuery;
    }

    public function setCustomSQLQuery($customSQLQuery)
    {
        $this->customSQLQuery = $customSQLQuery;

        return $this;
    }
}
