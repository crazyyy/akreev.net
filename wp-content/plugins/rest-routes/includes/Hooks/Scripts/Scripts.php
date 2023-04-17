<?php

declare ( strict_types = 1 );
namespace RestRoutes\Hooks\Scripts;

use  RestRoutes\Capabilities\CapList ;
use  RestRoutes\Hooks\IHook ;
use  RestRoutes\Hooks\REST\CustomRoutes ;
class Scripts implements  IHook 
{
    private  $cap_list ;
    public function __construct( CapList $cap_list )
    {
        $this->cap_list = $cap_list;
    }
    
    public function registerHooks()
    {
        if ( isset( $_GET['page'] ) && in_array( $_GET['page'], array( 'rest-routes-add-new', 'edit-rest-route' ) ) ) {
            add_action( 'admin_enqueue_scripts', array( $this, 'enqueueResources' ) );
        }
    }
    
    public function enqueueResources()
    {
        wp_enqueue_script(
            'custom-route',
            REST_ROUTES_PLUGIN_URL . '/dist-basic/js/custom-route/app.js',
            array( 'wp-api' ),
            false,
            true
        );
        wp_enqueue_style( 'custom-route', REST_ROUTES_PLUGIN_URL . '/dist-basic/css/custom-route/styles.css' );
        wp_localize_script( 'custom-route', 'capList', $this->cap_list->get() );
        wp_localize_script( 'custom-route', 'restRoutesPostTypes', array_values( get_post_types() ) );
        wp_localize_script( 'custom-route', 'restRoutesRoles', $this->getRoles() );
        wp_localize_script( 'custom-route', 'restRoutesTaxonomies', $this->mapTaxonomies( get_taxonomies( [], 'objects' ) ) );
        
        if ( 'edit-rest-route' === $_GET['page'] ) {
            wp_localize_script( 'custom-route', 'routeSettings', get_post_meta( $_GET['id'], CustomRoutes::ROUTE_SETTINGS ) );
            wp_localize_script( 'custom-route', 'routeId', [
                'id' => $_GET['id'],
            ] );
        }
    
    }
    
    private function getRoles()
    {
        $roles = [];
        foreach ( get_editable_roles() as $key => $role ) {
            $roles[] = $key;
        }
        return $roles;
    }
    
    public function mapTaxonomies( $taxonomies )
    {
        $res = [];
        foreach ( $taxonomies as $tax ) {
            $res[] = [
                'name'  => $tax->label,
                'value' => $tax->name,
            ];
        }
        return $res;
    }

}