<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitdf2ae46301f4573d07a68bb090e3e922
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'No3x\\WPML\\Tests\\Helper\\' => 23,
            'No3x\\WPML\\Tests\\' => 16,
            'No3x\\WPML\\Helpers\\' => 18,
            'No3x\\WPML\\Admin\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'No3x\\WPML\\Tests\\Helper\\' => 
        array (
            0 => __DIR__ . '/../..' . '/tests/helper',
        ),
        'No3x\\WPML\\Tests\\' => 
        array (
            0 => __DIR__ . '/../..' . '/tests/phpunit/tests',
        ),
        'No3x\\WPML\\Helpers\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/inc/Helpers',
        ),
        'No3x\\WPML\\Admin\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/inc/Admin',
        ),
    );

    public static $classMap = array (
        'No3x\\WPML\\Admin\\EmailLogsTab' => __DIR__ . '/../..' . '/src/inc/Admin/EmailLogsTab.php',
        'No3x\\WPML\\Admin\\SMTPTab' => __DIR__ . '/../..' . '/src/inc/Admin/SMTPTab.php',
        'No3x\\WPML\\Admin\\SettingsTab' => __DIR__ . '/../..' . '/src/inc/Admin/SettingsTab.php',
        'No3x\\WPML\\Helpers\\PluginSilentUpgrader' => __DIR__ . '/../..' . '/src/inc/Helpers/PluginSilentUpgrader.php',
        'No3x\\WPML\\Helpers\\PluginSilentUpgraderSkin' => __DIR__ . '/../..' . '/src/inc/Helpers/PluginSilentUpgraderSkin.php',
        'No3x\\WPML\\Tests\\Helper\\WPML_IntegrationTestCase' => __DIR__ . '/../..' . '/tests/helper/WPML_IntegrationTestCase.php',
        'No3x\\WPML\\Tests\\Helper\\WPMailArrayBuilder' => __DIR__ . '/../..' . '/tests/helper/WPMailArrayBuilder.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitdf2ae46301f4573d07a68bb090e3e922::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitdf2ae46301f4573d07a68bb090e3e922::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitdf2ae46301f4573d07a68bb090e3e922::$classMap;

        }, null, ClassLoader::class);
    }
}
