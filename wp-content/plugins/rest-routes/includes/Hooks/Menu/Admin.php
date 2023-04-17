<?php

declare ( strict_types = 1 );
namespace RestRoutes\Hooks\Menu;

use  RestRoutes\Hooks\IHook ;
use  RestRoutes\Hooks\REST\CustomRoutes ;
class Admin implements  IHook 
{
    public function registerHooks()
    {
        add_action( 'admin_menu', [ $this, 'addMenus' ] );
        add_action( 'admin_menu', [ $this, 'fixRoutesLink' ] );
        add_action( 'network_admin_menu', [ $this, 'addMenus' ] );
        add_action( 'network_admin_menu', [ $this, 'fixRoutesLink' ] );
    }
    
    public function addMenus()
    {
        $menuTitle = 'Rest Routes';
        /** @phpstan-ignore-next-line */
        add_menu_page(
            $menuTitle,
            $menuTitle,
            'manage_options',
            'rest-routes-main',
            [ $this, 'main' ],
            'dashicons-share'
        );
        /** @phpstan-ignore-next-line */
        add_submenu_page(
            'rest-routes-main',
            'Rest Routes: Routes',
            'Routes',
            'manage_options',
            'my-routes',
            /** @phpstan-ignore-next-line */
            'my-routes-callback'
        );
        /** @phpstan-ignore-next-line */
        add_submenu_page(
            'rest-routes-main',
            'Rest Routes: Add New Route',
            'Add New Route',
            'manage_options',
            'rest-routes-add-new',
            [ $this, 'render' ]
        );
        /** @phpstan-ignore-next-line */
        add_submenu_page(
            /** @phpstan-ignore-next-line */
            null,
            'Rest Routes: Edit Route',
            'Rest Routes: Edit Route',
            'manage_options',
            'edit-rest-route',
            [ $this, 'render' ]
        );
    }
    
    public function render()
    {
        echo  '<div id="root" class="rest-routes-app"></div>' ;
    }
    
    public function main()
    {
        $menuTitle = 'Rest Routes';
        // @codingStandardsIgnoreStart
        $content = '
          <div class="wrap">
          <div style="float: left; width: 50%; background-color: white; border: 1px solid darkgray; padding: 15px; margin-right: 10px">
              <h1>Welcome to ' . $menuTitle . '</h1>
              <p>Manage your routes or create a fresh one.</p>
              <a style="background-color: #f07330; border: 1px solid #f07330; box-shadow: 0 2px 0 #d16129; text-shadow: 0 2px 0 #d16129" class="button button-primary button-hero" href="' . admin_url( 'admin.php' ) . '?page=rest-routes-add-new">Add New Route</a>
              <a class="button button-secondary button-hero" href="' . admin_url( 'edit.php' ) . '?post_type=' . CustomRoutes::ROUTE_CPT . '">My Routes</a>
              <br />
              <br />

              <h3>Front-end Developers</h3>
              <p>If you are a WordPress front-end developer or a mobile developer that uses WordPress as a back-end service you would take a lot from Rest Routes. You can build your front-end applications using any framework of your choice (React, Vue, etc.) and then use Rest Routes to design the custom endpoints that they will consume without the need of touching PHP code for it.</p>

              <h3>Integration with third-party APIs</h3>
              <p>This plugin is recommended for you that is developing WordPress applications that need to communicate with external servers. You can easily build custom routes that will both expose data to the third-party server and populate data into your WordPress application database.</p>

              <h3>WordPress Headless Applications</h3>
              <p>If you are simply using the WordPress as a back-end application, which means that you are not using anything related to the front-end of the WordPress, such as Themes, then this plugin is fully recommended for you. You can easily build custom routes that will let you expose your back-end data and also populate existing database tables.</p>

              <hr>
              <h3>Documentation & Help</h3>
              <p>All the features are fully covered in our <a href="https://rest-routes-documentation.readthedocs.io/en/latest/" target="_blank">Documentation</a>.
              If you need any further assistance you can reach us through the <a href="' . admin_url( 'admin.php?page=rest-routes-main-contact' ) . '" target="_blank">Contact Us</a> page or writing to hello@restroutes.com.</p>
              <p>Make sure to subscribe to <a href="https://restroutes.com/blog/" target="_blank">Our Blog</a> to receive hints, updates and announcements.</p>
             </div>
              <div style="float:left; width: 40%; background-color: white; border: 1px solid darkgray; padding: 15px">
              <h3>Building a route for displaying posts with a filter</h3>
              <iframe width="100%" height="250px" src="https://www.youtube.com/embed/HUa-AOvh998" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <h3>Building a route for creating custom posts, custom fields and terms</h3>
              <iframe width="100%" height="250px" src="https://www.youtube.com/embed/amfbMOr-jVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
        ';
        // @codingStandardsIgnoreEnd
        echo  $content ;
    }
    
    public function fixRoutesLink()
    {
        global  $submenu ;
        if ( !isset( $submenu['rest-routes-main'] ) ) {
            return $submenu;
        }
        $submenu['rest-routes-main'][1][2] = admin_url( 'edit.php' ) . '?post_type=' . CustomRoutes::ROUTE_CPT;
        $submenu['rest-routes-main'][0][0] = 'Dashboard';
        return $submenu;
    }

}