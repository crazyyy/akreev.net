<?php

namespace RestRoutes\Hooks\Authentication;

use  RestRoutes\Hooks\IHook ;
class BasicAuthentication implements  IHook 
{
    public function registerHooks()
    {
    }
    
    function json_basic_auth_error( $error )
    {
        if ( !empty($error) ) {
            return $error;
        }
        global  $wp_json_basic_auth_error ;
        return $wp_json_basic_auth_error;
    }
    
    function json_basic_auth_handler( $user )
    {
    }

}