              <section class="back-to-top">
                <a class="back-to-topa" href="/#">
                  <span class="arrow">↑</span> Back to Top
                </a>
              </section>

              <footer class="site-footer">
                <div class="footer-nav-container">
                  <nav>
                    <?php wpeSideNav(); ?>
                  </nav>
                </div>
                <div class="footer-text">
                  &copy; <?php echo date("Y"); ?> Powered by <?php bloginfo('name'); ?>
                </div>
              </footer>

            </main>

          </div> <!-- ./site-wrap cfix js-site-wrap -->
        </div> <!-- ./site-container -->
      </div> <!-- ./site-content e2e-site-content -->
    <?php wp_footer(); ?>
    <!-- The modal lightbox with the full-size image -->
    <div class="img-modal">
      <button class="close-btn">Close</button>
      <img class="lightbox-img" src="" alt="">
     <p class="original-link"></p>
    </div><!-- ./img-modal -->
  </body>
</html>
