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
    <div id="lightbox-modal" class="lightbox-modal">
      <div class="lightbox-content">
        <img id="lightbox-image" class="lightbox-image" src="">
        <div class="download-link--container">
          <a id="download-link" class="download-link" href="" rel="nofollow" target="_blank">Download</a>
        </div>
        <!-- /.download-link--container -->
        <button id="close-button" class="close-button">x</button>
        <button id="prev-button" class="prev-button">&lt;</button>
        <button id="next-button" class="next-button">&gt;</button>
      </div>
    </div>
  </body>
</html>
