<?php
/**
 * Atelier Footer Template
 */
?>
    <footer class="site-footer" id="site-footer">
      <div class="site-container">
        <div class="footer-columns-grid">
          <div class="footer-col">
            <span class="footer-brand-title"><?php bloginfo('name'); ?></span>
            <p class="footer-brand-desc">
              <?php esc_html_e('An archival blog publication dedicated to slow reading, humane digital ergonomics, and classical editorial craft. Curated and written solely by Side Atelier.', 'atelier'); ?>
            </p>
            <div class="footer-brand-desk">
              <span class="desk-indicator-dot"></span>
              <span class="desk-indicator-text"><?php esc_html_e('Editorial Desk • Copenhagen & Zurich', 'atelier'); ?></span>
            </div>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading"><?php esc_html_e('PUBLICATION DIRECTORY', 'atelier'); ?></h4>
            <ul class="footer-links-list">
              <li><a href="<?php echo esc_url(home_url('/#ledger')); ?>">Archival Ledger</a></li>
              <li><a href="<?php echo esc_url(home_url('/#archive')); ?>">Chronological Archive</a></li>
              <li><a href="<?php echo esc_url(home_url('/#about')); ?>">About the Curator</a></li>
              <li><button type="button" class="footer-contact-link" onclick="window.openContactModal();">Letters to the Desk</button></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading"><?php esc_html_e('ARCHIVAL BLUEPRINT', 'atelier'); ?></h4>
            <p class="footer-colophon-text">
              <?php esc_html_e('Zero advertising, zero analytics trackers, and zero category clutter. All prose adheres to the 65-character classical optical reading measure.', 'atelier'); ?>
            </p>
          </div>
        </div>

        <div class="footer-subbar">
          <div class="footer-subbar-left">
            <span class="footer-copyright">
              &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('Curated by Side Atelier. Powered by WordPress.', 'atelier'); ?>
            </span>
          </div>
          <div class="footer-subbar-right">
            <a href="<?php bloginfo('rss2_url'); ?>" class="footer-rss-badge">
              <span class="rss-dot"></span>
              <span>RSS 2.0 Feed</span>
            </a>
            <button type="button" class="btn-back-to-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'});">
              <span>Top &uarr;</span>
            </button>
          </div>
        </div>
      </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
