<?php get_header(); ?>
<div class="page-container">

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

  <section id="post-<?php the_ID(); ?>" <?php post_class("page standard-modules"); ?>>
    <header class="page-header content">
      <h1 class="title e2e-site-logo-text">
        <?php the_title(); ?>
      </h1>
      <p class="description"></p>
    </header>

    <div class="page-content js-page-content">
      <div id="project-canvas" class="js-project-modules modules content">
        <div id="project-modules">

          <div
            class="project-module module text project-module-text align-center js-project-module e2e-site-project-module-text">
            <div class="rich-text js-text-editable module-text">
              <?php the_content(); ?>

              <div>
                All set is here:
                <a href="<?php the_field("collection_url") ?>" target="_blank" rel="nofollow">
                  <?php the_field("collection_size") ?>
                </a>
              </div>
            </div>
          </div>
          <!-- project-module module text project-module-text align-center js-project-module e2e-site-project-module-text -->

          <?php $images = get_field('gallery'); if ($images) { ?>
          <div class="project-module module media_collection project-module-media_collection">
            <div class="grid--main js-grid-main grid--ready">

              <?php foreach ($images as $image) {
                $image_id = $image['id'];
                $image_src = $image['url'];
                $image_src_medium = $image['sizes']['medium'];
                $image_original_id = get_field('id', $image_id);
                $image_original_link = get_field('original_image_link', $image_id);
                $image_sizes = wp_get_attachment_image_srcset($image_id, 'medium');
              ?>
              <div class="grid__item-container lightbox-link hoverable">
                <img class="grid__item-image js-grid__item-image grid__item-image-lazy js-lazy image-loaded"
                  data-full-size="<?php echo esc_url($image_src); ?>" data-id="<?php echo esc_url($image_id); ?>"
                  data-original-id="<?php echo esc_url($image_original_id); ?>"
                  data-original-link="<?php echo esc_url($image_original_link); ?>"
                  src="<?php echo esc_url($image_src_medium); ?>" />
                <span class="grid__item-filler" style="padding-bottom:74%;"></span>
              </div>
              <?php } # end foreach ?>

              <div class="js-grid-spacer" style="display: none;"></div>
            </div> <!-- ./grid--main js-grid-main grid--ready -->
          </div> <!-- ./project-module module media_collection project-module-media_collection -->
          <?php } # end $images ?>

          <div
            class="project-module module text project-module-text align-center js-project-module e2e-site-project-module-text">
            <div class="rich-text js-text-editable module-text">
              <div>
                All set is here:
                <a href="<?php the_field("collection_url") ?>" target="_blank" rel="nofollow">
                  <?php the_field("collection_size") ?>
                </a>
              </div>
            </div> <!-- ./rich-text js-text-editable module-text -->
          </div>
          <!-- ./project-module module text project-module-text align-center js-project-module e2e-site-project-module-text -->

        </div> <!-- /#project-modules -->
      </div>
      <!-- /#project-canvas .js-project-modules modules content -->
    </div> <!-- /.page-content js-page-content -->

  </section>
  <?php endwhile; endif; ?>

</div><!-- /.page-container -->
<?php get_footer(); ?>
