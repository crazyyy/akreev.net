<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\PostType;

use RestRoutes\Hooks\IHook;
use RestRoutes\Hooks\REST\CustomRoutes;

class PostLinks implements IHook
{
    public function registerHooks()
    {
        add_filter(
            'get_edit_post_link',
            array($this, 'addEditRouteLink'),
            10,
            3
        );
        add_filter('admin_url', array($this, 'fixAddNewRoute'), 10, 3);
    }

    public function addEditRouteLink($link, $postId)
    {
        if (CustomRoutes::ROUTE_CPT === get_post_type($postId)) {
            $link = admin_url(sprintf(
                'admin.php?page=edit-rest-route&id=%d',
                $postId
            ));
        }

        return $link;
    }

    public function fixAddNewRoute($link, $path)
    {
        if ($path === 'post-new.php?post_type=rest-route') {
            $link = admin_url('admin.php?page=rest-routes-add-new');
        }

        return $link;
    }
}
