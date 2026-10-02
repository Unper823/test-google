<?php
/**
 * Footer Template for Atelier Editorial
 *
 * 3-column publication directory, RSS label, colophon, and back-to-top trigger.
 *
 * @package AtelierEditorial
 * @author Waleed Alharbi
 */
?>
    </div><!-- .site-container -->
</main><!-- .site-main -->

<footer class="site-footer" id="site-footer">
    <div class="site-container">
        <!-- 3-Column Publication Directory Grid -->
        <div class="footer-columns-grid">
            <!-- Column 1: Brand & Curation Scope -->
            <div class="footer-col footer-col-brand">
                <span class="footer-brand-title"><?php bloginfo('name'); ?></span>
                <p class="footer-brand-desc">
                    An archival blog publication dedicated to slow reading, humane digital ergonomics, and classical editorial craft. Curated and written solely by Waleed Alharbi.
                </p>
                <div class="footer-brand-desk">
                    <span class="desk-indicator-dot"></span>
                    <span class="desk-indicator-text">Editorial Desk &bull; Copenhagen &amp; Zurich</span>
                </div>
            </div>

            <!-- Column 2: Publication Directory Navigation -->
            <div class="footer-col footer-col-directory">
                <h4 class="footer-heading">PUBLICATION DIRECTORY</h4>
                <nav class="footer-navigation" aria-label="<?php esc_attr_e('Footer Directory', 'atelier-editorial'); ?>">
                    <?php
                    if (has_nav_menu('footer')) {
                        wp_nav_menu([
                            'theme_location' => 'footer',
                            'container'      => false,
                            'menu_class'     => 'footer-links-list',
                            'fallback_cb'    => false,
                            'depth'          => 1,
                        ]);
                    } else {
                        ?>
                        <ul class="footer-links-list">
                            <li><a href="<?php echo esc_url(home_url('/')); ?>">Archival Ledger</a></li>
                            <li><a href="<?php echo esc_url(home_url('/about')); ?>">About the Curator</a></li>
                            <li><a href="<?php echo esc_url(home_url('/manifesto')); ?>">Editorial Manifesto</a></li>
                            <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Letters to the Desk</a></li>
                            <li><a href="<?php echo esc_url(get_feed_link()); ?>">Monograph RSS Feed</a></li>
                        </ul>
                        <?php
                    }
                    ?>
                </nav>
            </div>

            <!-- Column 3: Archival Colophon & Integrity Note -->
            <div class="footer-col footer-col-colophon">
                <h4 class="footer-heading">ARCHIVAL BLUEPRINT</h4>
                <p class="footer-colophon-text">
                    Zero advertising, zero analytics trackers, and zero category clutter. All prose adheres to the 65-character classical optical reading measure.
                </p>
                <div class="footer-typography-spec">
                    <span>Typeset in Newsreader, Plus Jakarta Sans, and JetBrains Mono.</span>
                </div>
            </div>
        </div>

        <!-- Footer Bottom Sub-Bar -->
        <div class="footer-subbar">
            <div class="footer-subbar-left">
                <span class="footer-copyright">
                    &copy; 2024&ndash;<?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Curated by Waleed Alharbi. All rights reserved.
                </span>
            </div>

            <div class="footer-subbar-right">
                <a href="<?php echo esc_url(get_feed_link()); ?>" class="footer-rss-badge">
                    <span class="rss-dot"></span>
                    <span>RSS 2.0 Ledger</span>
                </a>

                <button type="button" class="btn-back-to-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'});" aria-label="<?php esc_attr_e('Back to top of page', 'atelier-editorial'); ?>">
                    <span>Top</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                </button>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
