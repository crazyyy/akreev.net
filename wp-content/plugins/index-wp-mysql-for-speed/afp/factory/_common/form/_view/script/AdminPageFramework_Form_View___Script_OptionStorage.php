<?php 
/**
	Admin Page Framework v3.8.34 by Michael Uno 
	Generated by PHP Class Files Script Generator <https://github.com/michaeluno/PHP-Class-Files-Script-Generator>
	<http://en.michaeluno.jp/index-wp-mysql-for-speed>
	Copyright (c) 2013-2021, Michael Uno; Licensed under MIT <http://opensource.org/licenses/MIT> */
class Imfs_AdminPageFramework_Form_View___Script_OptionStorage extends Imfs_AdminPageFramework_Form_View___Script_Base {
    static public function getScript() {
        return <<<JAVASCRIPTS
(function ( $ ) {
            
    $.fn.aImfs_AdminPageFrameworkInputOptions = {}; 
                            
    $.fn.storeImfs_AdminPageFrameworkInputOptions = function( sID, vOptions ) {
        var sID = sID.replace( /__\d+_/, '___' );	// remove the section index. The g modifier is not used so it will replace only the first occurrence.
        $.fn.aImfs_AdminPageFrameworkInputOptions[ sID ] = vOptions;
    };	
    $.fn.getImfs_AdminPageFrameworkInputOptions = function( sID ) {
        var sID = sID.replace( /__\d+_/, '___' ); // remove the section index
        return ( 'undefined' === typeof $.fn.aImfs_AdminPageFrameworkInputOptions[ sID ] )
            ? null
            : $.fn.aImfs_AdminPageFrameworkInputOptions[ sID ];
    }

}( jQuery ));
JAVASCRIPTS;
        
    }
    }
    