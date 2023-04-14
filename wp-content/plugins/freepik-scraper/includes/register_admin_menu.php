<?php
add_action( 'admin_menu', 'register_freepik_menu' );

function register_freepik_menu() {
    add_submenu_page(
        'tools.php', // Parent slug
        'Freepik`er', // Page title
        'Freepik`er', // Menu title
        'manage_options', // Capability
        'freepiker-settings', // Menu slug
        'freepiker_settings_page' // Function callback
    );
}

function freepiker_settings_page() { ?>
<div class="wrap">
  <h2>Freepik`er Settings</h2>
  <p>Welcome to Freepik`er, the ultimate tool for WordPress developers!</p>
  <h3>Sample Text</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel convallis augue. Vivamus tortor sapien, dictum
    vitae risus at, dapibus auctor ante.</p>
  <h3>Sample Buttons</h3>
  <p><a href="#" class="button button-primary">Primary Button</a> <a href="#" class="button">Regular Button</a></p>
</div>
<?php }
?>
