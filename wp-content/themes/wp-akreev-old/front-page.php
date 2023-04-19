<?php /* Template Name: Home Page */ get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>

      <!-- <h1 class="page-title inner-title"><?php the_title(); ?></h1>
      <?php the_content(); ?>
      <?php edit_post_link(); ?>
 -->

      <!--=============== content-holder ===============-->
      <div class="content-holder scale-bg2">
        <!--=============== navigation ===============-->
        <div class="nav-inner isDown">
          <div class="nav-decor nav-decor-tl"></div>
          <div class="nav-decor nav-decor-br"></div>
          <div class="overlay"></div>
        </div>
        <!-- navigation  end -->
        <!--=============== fixed-column ===============-->
        <div class="fixed-column">
          <!-- animation bacground -->
          <div class="bg-wrapper">
            <div class="bg" style="background-image:url(<?php echo get_template_directory_uri(); ?>/img/bg/long/1.jpg)"></div>
            <div class="title-btn-box">
              <a href="http://akreev.net/contact.html" class="title-btn-write">Email me</a>
              <a href="https://www.upwork.com/freelancers/~018bfbfec4275a7872" class="title-btn-write" target="_blank">Via
                Upwork</a>
            </div>

          </div>
        </div>
        <!-- fixed-column end -->
        <!--=============== wrapper-inner ===============-->
        <div class="wrapper-inner folio-wrap">

          <div class="content">
            <!-- section -->
            <section class="no-padding">
              <!-- portfolio filters -->
              <div class="filter-holder fixed-filter">
                <div class="gallery-filters">
                  <ul>
                    <li>
                      <a href="#" class="gallery-filter gallery-filter-active" data-filter="*"><span>All Design</span></a>
                    </li>
                    <li>
                      <a href="#" class="gallery-filter " data-filter=".graphic"><span>Graphics</span></a>
                    </li>
                    <li>
                      <a href="#" class="gallery-filter " data-filter=".web"><span>Web</span></a>
                    </li>
                    <li>
                      <a href="#" class="gallery-filter" data-filter=".print"><span>Print</span></a>
                    </li>
                    <li>
                      <a href="#" class="gallery-filter" data-filter=".infographic"><span>Infographics</span></a>
                    </li>
                    <li>
                      <a href="#" class="gallery-filter" data-filter=".icon"><span>Icon</span></a>
                    </li>
                    <li>
                      <a href="#" class="gallery-filter" data-filter=".animation"><span>Animation Ads</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- portfolio filters end -->

              <!-- portfolio start -->
              <div class="gallery-items spad">

                <?php query_posts("showposts=50&post_type=portfolio"); ?>
                  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                    <?php $term_list = wp_get_post_terms($post->ID, 'type', array("fields" => "all")); ?>
                    <div class="gallery-item <?php echo $term_list[0]->slug; ?>">
                      <div class="grid-item-holder">
                        <a class="image-popup box-popup" href="<?php echo the_post_thumbnail_url('large'); ?>"></a>
                        <div class="folio-img">
                          <span class="overlay"></span>
                          <img src="<?php echo the_post_thumbnail_url('medium'); ?>" title="<?php echo $term_list[0]->name; ?>: <?php the_title(); ?>" alt="<?php the_title(); ?> in <?php echo $term_list[0]->name; ?>" />
                        </div>
                        <div class="grid-item">
                          <h3><?php the_title(); ?></h3>
                          <span><?php echo $term_list[0]->name; ?></span>
                          <i class="fa fa-area-chart"></i>
                        </div>
                      </div>
                    </div>

                  <?php endwhile; endif; ?>
                <?php wp_reset_query(); ?>



                <!--infographic 1 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_1.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_1_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>BENEFITS OF IP CCTV</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 1 end-->
                <!--infographic 2 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_2.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_2_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>MINI CLUBMAN</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 2 end-->
                <!--infographic 3 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_3.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_3_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>TESLA MODEL S 70D</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 3 end-->
                <!--infographic 4 -->
                <div class="gallery-item infographic gallery-item-second">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_4.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_4.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>DOZOR-B</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 4 end-->
                <!--infographic 5 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_5.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_5.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>THE POLICE RIGHTS</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 5 end-->
                <!--infographic 6 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_6.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_6_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>MITSUBISHI PAJERO SPORT</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 6 end-->
                <!--infographic 7 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_7.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_7_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>TOP 5 STRANGEST THINGS COUGHT ON CCTV</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 7 end-->
                <!--infographic 8 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_8.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_8_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>NEW MAZDA 6</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 8 end-->
                <!--infographic 9 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_9.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_9_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>THE HISTORY OF VIDEO SURVEILLANCE</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 9 end-->
                <!--infographic 10 -->
                <div class="gallery-item infographic gallery-item-second">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_10.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_10.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>INTERESTING PLACES</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 10 end-->
                <!--infographic 11 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_11.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_11_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>MAYBACH SALES</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 11 end-->
                <!--infographic 13 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_13.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_13_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>SET VEHICLE SPEED</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 13 end-->
                <!--infographic 14 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_14.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_14_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>KOENIGSEGG ONE 1</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 14 end-->
                <!--infographic 15 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_15.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_15_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>KOENIGSEGG REGERA</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 15 end-->
                <!--infographic 16 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_16.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_16_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>HORRIFIC 4ORROR</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 16 end-->
                <!--infographic 17 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_17.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_17_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>HARLEY-DAVIDSON 750 STREET</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 17 end-->
                <!--infographic 18 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_18.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_18_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>THE BEST ATHLETES IN THE WORLD</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 18 end-->
                <!--infographic 19 -->
                <div class="gallery-item infographic">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/infographic/infographic_19.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/infographic/infographic_19_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>FUEL CONSUMPTION</h3>
                      <span>infographics</span>
                      <i class="fa fa-area-chart"></i>
                    </div>
                  </div>
                </div>
                <!--infographic 19 end-->
                <!--print 1 -->
                <div class="gallery-item print">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/print/print_1.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/print/print_1_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>FLYER AUTO.RIA.UA</h3>
                      <span>Print</span>
                      <i class="fa fa-picture-o"></i>
                    </div>
                  </div>
                </div>
                <!--print 1 end-->
                <!--print 2 -->
                <div class="gallery-item print">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/print/print_2.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/print/print_2_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>PROFORTE M: MUSCLE & JOINT </h3>
                      <span>Print</span>
                      <i class="fa fa-picture-o"></i>
                    </div>
                  </div>
                </div>
                <!--print 2 end-->
                <!--print 3 -->
                <div class="gallery-item print">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/print/print_3.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/print/print_3.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>FLYER RIA.COM</h3>
                      <span>Print</span>
                      <i class="fa fa-picture-o"></i>
                    </div>
                  </div>
                </div>
                <!--print 3 end-->
                <!--print 4 -->
                <div class="gallery-item print">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/print/print_4.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/print/print_4_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>Label for the fitness roller: FOAMROLLER</h3>
                      <span>Print</span>
                      <i class="fa fa-picture-o"></i>
                    </div>
                  </div>
                </div>
                <!--print 4 end-->
                <!--print 5 -->
                <div class="gallery-item print">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/print/print_5.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/print/print_5_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>ADVERTISING IN THE MAGAZINE</h3>
                      <span>Print</span>
                      <i class="fa fa-picture-o"></i>
                    </div>
                  </div>
                </div>
                <!--print 5 end-->
                <!--print 6 -->
                <div class="gallery-item print">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/print/print_6.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/print/print_6_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>Printed Product Ad for Bus Station</h3>
                      <span>Print</span>
                      <i class="fa fa-picture-o"></i>
                    </div>
                  </div>
                </div>
                <!--print 6 end-->
                <!--print 7 -->
                <div class="gallery-item print">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/print/print_7.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/print/print_7.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>FLYER RIA.COM</h3>
                      <span>Print</span>
                      <i class="fa fa-picture-o"></i>
                    </div>
                  </div>
                </div>
                <!--print 7 end-->
                <!--print 8 -->
                <div class="gallery-item print">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/print/print_8.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/print/print_8.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>FLYER AUTO.RIA.UA</h3>
                      <span>Print</span>
                      <i class="fa fa-picture-o"></i>
                    </div>
                  </div>
                </div>
                <!--print 8 end-->
                <!--icon 1 -->
                <div class="gallery-item icon">
                  <div class="grid-item-holder">
                    <a class="image-popup box-popup" href="img/folio/icon/icon_1.jpg"></a>
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/icon/icon_1_prev.jpg" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>STAR WARS ICON SET</h3>
                      <span>Icon</span>
                      <i class="fa fa-bookmark-o"></i>
                    </div>
                  </div>
                </div>
                <!--icon 1 end-->


                <div class="gallery-item animation">
                  <div class="grid-item-holder">
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/ads/ads_4.gif" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>THE BMW EOFY SALE EVENT</h3>
                      <span>Animation Ads</span>
                      <i class="fa fa-play-circle-o"></i>
                    </div>
                  </div>
                </div>
                <!--animation 4 -->
                <!--animation 5 -->
                <div class="gallery-item animation">
                  <div class="grid-item-holder">
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/ads/ads_5.gif" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>MITSUBISHI PAJERO SPORT</h3>
                      <span>Animation Ads</span>
                      <i class="fa fa-play-circle-o"></i>
                    </div>
                  </div>
                </div>
                <!--animation 5 -->
                <!--animation 6 -->
                <div class="gallery-item animation">
                  <div class="grid-item-holder">
                    <!--  <a class="image-popup box-popup" href="img/folio/ads/ads_6.gif"></a> -->
                    <div class="folio-img">
                      <span class="overlay"></span>
                      <img src="<?php echo get_template_directory_uri(); ?>/img/folio/ads/ads_6.gif" alt="">
                    </div>
                    <div class="grid-item">
                      <h3>TESLA MODEL S</h3>
                      <span>Animation Ads</span>
                      <i class="fa fa-play-circle-o"></i>
                    </div>
                  </div>
                </div>

              </div>
              <!-- portfolio end -->
            </section>
            <!-- section end -->
          </div>
          <!-- content end -->
        </div>
        <!-- wrapper-inner end  -->


  <?php endwhile; endif; ?>


<?php get_footer(); ?>
