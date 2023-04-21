<!doctype html>
<html <?php language_attributes(); ?> class="no-js">

  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?>
    </title>

    <link href="//www.google-analytics.com/" rel="dns-prefetch">
    <link href="//fonts.googleapis.com" rel="dns-prefetch">
    <link href="//cdnjs.cloudflare.com" rel="dns-prefetch">

    <!-- icons -->
    <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">

    <!--[if lt IE 9]>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- css + javascript -->
    <?php wp_head(); ?>
    <!-- <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/proto.css" type="text/css"> -->
    <!-- <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/index.css" type="text/css"> -->
    <!-- <link rel="stylesheet" href="css/merged.css" type="text/css"> -->
  </head>

  <body <?php body_class(); ?>>
    <div class="js-responsive-nav">
      <div class="responsive-nav has-social">
        <div class="close-responsive-click-area js-close-responsive-nav">
          <div class="close-responsive-button"></div>
        </div>
        <div class="nav-container">
          <nav>
            <div class="gallery-title"><a href="/work" class="active">PSD sssMockups</a>
            </div>
            <div class="gallery-title"><a href="/jpg">3D Render assets</a></div>
            <div class="page-title">
              <a href="/contact">Contact</a>
            </div>
            <div class="social pf-nav-social">
              <ul>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div><!-- ./js-responsive-nav -->

    <div class="site-wrap cfix js-site-wrap">
      <div class="site-container">
        <div class="site-content e2e-site-content">

          <header class="site-header">
            <div class="logo-container">
              <div class="logo-wrap">
                <div class="logo e2e-site-logo-text logo-text">
                  <?php if ( !is_front_page() && !is_home() ){ ?>
                  <a href="<?php echo home_url(); ?>">
                    <?php } ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>"
                      title="<?php wp_title( '' ); ?>" class="logo-img">
                    <?php if ( !is_front_page() && !is_home() ){ ?>
                  </a>
                  <?php } ?>
                </div>
              </div>
              <div class="hamburger-click-area js-hamburger">
                <div class="hamburger">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>
            </div>
            <div class="nav-container">
              <nav>
                <?php wpeHeadNav(); ?>
              </nav>
            </div>
          </header>

          <main>
