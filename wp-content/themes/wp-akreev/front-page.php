<?php /* Template Name: Home Page */ get_header(); ?>

<section class="project-covers">

  <?php
    $args = array(
        'post_type' => 'collection',
        'posts_per_page' => 24,
    );
    $collection_query = new WP_Query( $args );
  ?>
  <?php if ( $collection_query->have_posts() ) : ?>
  <?php while ( $collection_query->have_posts() ) : $collection_query->the_post(); ?>

  <a class="project-cover js-project-cover-touch hold-space" href="<?php the_permalink(); ?>"
    title="<?php the_title(); ?>">
    <div class="cover-content-container">
      <div class="cover-image-wrap">
        <div class="cover-image">
          <div class="cover cover-normal">
            <?php
              if ( has_post_thumbnail() ) {
                $image_id = get_post_thumbnail_id();
                $image_src = wp_get_attachment_image_src( $image_id, 'full' );
                $image_srcset = wp_get_attachment_image_srcset( $image_id, 'full' );
            ?>
            <img src="<?php echo esc_url( $image_src[0] ); ?>" srcset="<?php echo esc_attr( $image_srcset ); ?>"
              alt="<?php echo esc_attr( get_the_title() ); ?>" class="cover__img" />
            <?php } ?>
          </div><!-- ./cover cover-normal -->
        </div><!-- ./cover-image -->
      </div><!-- ./cover-image-wrap -->
      <div class="details-wrap">
        <div class="details">
          <div class="details-inner">
            <div class="title preserve-whitespace">
              <?php the_title(); ?>
            </div>
            <div class="date">2023</div>
          </div>
        </div>
      </div><!-- ./details-wrap -->
    </div><!-- ./cover-content-container -->
  </a><!-- ./project-cover js-project-cover-touch hold-space -->

  <?php endwhile; ?>
  <?php endif; ?>

</section>

<?php get_footer(); ?>
