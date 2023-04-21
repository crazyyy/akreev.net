<?php get_header(); ?>
<div class="page-container">

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

  <section id="post-<?php the_ID(); ?>" <?php post_class("page standard-modules"); ?>>
    <header class="page-header content">
      <h1 class="title e2e-site-logo-text">
        <?php the_category(', '); ?>
      </h1>
      <p class="description"></p>
    </header>

    <div class="page-content js-page-content">
      <div id="project-canvas" class="js-project-modules modules content">
        <div id="project-modules">

          <div
            class="project-module module text project-module-text align-center js-project-module e2e-site-project-module-text">
            <div class="rich-text js-text-editable module-text">
              <?php get_template_part('loop'); ?>
              <?php get_template_part('pagination'); ?>
            </div>
          </div>
          <!-- project-module module text project-module-text align-center js-project-module e2e-site-project-module-text -->

        </div> <!-- /#project-modules -->
      </div>
      <!-- /#project-canvas .js-project-modules modules content -->
    </div> <!-- /.page-content js-page-content -->

  </section>
  <?php endwhile; endif; ?>

</div><!-- /.page-container -->
<?php get_footer(); ?>
