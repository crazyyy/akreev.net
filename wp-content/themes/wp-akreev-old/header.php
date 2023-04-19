<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

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
</head>
<body <?php body_class(); ?>>
  <!--================= loader start ================-->
  <div class="loader-holder">
    <div class="loader-inner loader-vis">
      <div class="loader"></div>
    </div>
  </div>
  <!-- loader end -->
  <!--================= main start ================-->
  <div id="main">
    <!--=============== header ===============-->
    <header>
      <div class="logo-holder">
          <?php if ( !is_front_page() && !is_home() ){ ?>
            <a href="<?php echo home_url(); ?>">
          <?php } ?>
              <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
          <?php if ( !is_front_page() && !is_home() ){ ?>
            </a>
          <?php } ?>
      </div>
      <div class="mob_head_btn">
        <a href="http://akreev.net/contact.html" class="title-btn-write">Email me</a>
        <a href="https://www.upwork.com/freelancers/~018bfbfec4275a7872" class="title-btn-write" target="_blank">Via
          Upwork</a>
      </div>
      <?php /* wpeHeadNav(); */ ?>
      <div class="nav-button">
        <span class="nos"></span>
        <span class="ncs"></span>
        <span class="nbs"></span>
      </div>
    </header>
    <!-- header  end -->
    <!--=============== wrapper ===============-->
    <div id="wrapper">
