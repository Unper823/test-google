<?php
/**
 * Atelier Front Page / Archive Template
 */
get_header();

// Fetch latest featured lead post
$lead_query = new WP_Query(array(
    'posts_per_page'      => 1,
    'ignore_sticky_posts' => 1,
));
?>

<main class="site-main" id="content">
  <div class="site-container">

    <!-- 1. Featured Lead Story (7:5 Asymmetric) -->
    <?php if ($lead_query->have_posts()) : while ($lead_query->have_posts()) : $lead_query->the_post(); ?>
      <section class="hero-lead-section" id="ledger" aria-label="<?php esc_attr_e('Lead Monograph', 'atelier'); ?>">
        <div class="hero-lead-grid">
          <div class="hero-lead-content">
            <div class="hero-lead-kicker">
              <span class="kicker-pill"><?php esc_html_e('Lead Story &bull; Featured Release', 'atelier'); ?></span>
              <span class="kicker-date"><?php echo get_the_date('F j, Y'); ?></span>
            </div>
            <h1 class="hero-lead-title">
              <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </h1>
            <p class="hero-lead-excerpt"><?php echo get_the_excerpt(); ?></p>
            <div class="hero-lead-footer">
              <div class="hero-author-badge">
                <div class="author-avatar-mini"><?php echo strtoupper(substr(get_the_author(), 0, 1)); ?></div>
                <div class="author-meta-text">
                  <span class="author-name"><?php the_author(); ?></span>
                  <span class="author-role"><?php echo atelier_reading_time(); ?> min read &bull; <?php esc_html_e('Sole Curator', 'atelier'); ?></span>
                </div>
              </div>
              <div class="hero-buttons-group">
                <a href="<?php the_permalink(); ?>" class="hero-cta-button">
                  <span><?php esc_html_e('Read Monograph', 'atelier'); ?></span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                <a href="#archive" class="hero-secondary-btn">
                  <span><?php esc_html_e('Browse Ledger', 'atelier'); ?></span>
                </a>
              </div>
            </div>
          </div>
          <?php if (has_post_thumbnail()) : ?>
            <div class="hero-lead-media">
              <a href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail('atelier-lead', array('class' => 'hero-media-img')); ?>
                <div class="hero-media-overlay-badge">
                  <span><?php esc_html_e('Read Monograph', 'atelier'); ?></span>
                </div>
              </a>
            </div>
          <?php endif; ?>
        </div>
      </section>
    <?php endwhile; wp_reset_postdata(); endif; ?>

    <!-- 2. Chronological Archive & Monograph Grid -->
    <section class="archive-section" id="archive" aria-label="<?php esc_attr_e('Chronological Archive', 'atelier'); ?>">
      <div class="ledger-section-header">
        <div class="ledger-header-text">
          <span class="archive-kicker-label"><?php esc_html_e('HISTORICAL LEDGER', 'atelier'); ?></span>
          <h2 class="ledger-section-title"><?php esc_html_e('Chronological Archive', 'atelier'); ?></h2>
          <p class="ledger-section-desc"><?php esc_html_e('Monographs & essays published on contemporary typography, architecture, and slow prose.', 'atelier'); ?></p>
        </div>
      </div>

      <!-- Monograph Cards Grid -->
      <div class="monographs-editorial-grid">
        <?php
        $archive_query = new WP_Query(array(
            'posts_per_page' => 12,
            'offset'         => 1, // Skip the lead story
        ));

        if ($archive_query->have_posts()) : while ($archive_query->have_posts()) : $archive_query->the_post();
        ?>
          <article class="monograph-card" onclick="window.location='<?php the_permalink(); ?>';">
            <?php if (has_post_thumbnail()) : ?>
              <div class="card-media-wrapper">
                <?php the_post_thumbnail('atelier-card', array('class' => 'card-thumbnail-img')); ?>
                <span class="card-readtime-badge"><?php echo atelier_reading_time(); ?> min read</span>
              </div>
            <?php endif; ?>
            <div class="card-content-wrapper">
              <div class="card-unboxed-meta">
                <span><?php echo get_the_date('M j, Y'); ?></span>
              </div>
              <h3 class="card-monograph-title"><?php the_title(); ?></h3>
              <p class="card-monograph-excerpt"><?php echo get_the_excerpt(); ?></p>
              <div class="card-monograph-footer">
                <span class="card-curator"><?php printf(esc_html__('Curated by %s', 'atelier'), get_the_author()); ?></span>
                <a href="<?php the_permalink(); ?>" class="card-action-btn">
                  <span><?php esc_html_e('Read Monograph', 'atelier'); ?> &rarr;</span>
                </a>
              </div>
            </div>
          </article>
        <?php endwhile; wp_reset_postdata(); else : ?>
          <p><?php esc_html_e('No archival publications found.', 'atelier'); ?></p>
        <?php endif; ?>
      </div>
    </section>

    <!-- 3. Curatorial Quote Break -->
    <section class="curatorial-quote-break" aria-label="<?php esc_attr_e('Curatorial Manifesto Quote', 'atelier'); ?>">
      <div class="quote-break-inner">
        <span class="quote-ornament">&ldquo;</span>
        <blockquote class="quote-break-text">
          <?php esc_html_e('The highest virtue of an essay is not velocity, but resonance. Slow reading is the deliberate reclamation of cognitive sovereignty.', 'atelier'); ?>
        </blockquote>
        <cite class="quote-break-author">&mdash; <?php esc_html_e('Side Atelier, Editorial Curator', 'atelier'); ?></cite>
      </div>
    </section>

    <!-- 4. About the Curator Section -->
    <section class="about-curator-section" id="about" aria-label="<?php esc_attr_e('About Side Atelier', 'atelier'); ?>">
      <div class="curator-card">
        <div class="curator-portrait-wrap">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/author_portrait.jpg" alt="<?php esc_attr_e('Side Atelier in the studio', 'atelier'); ?>" loading="lazy" />
        </div>
        <div class="curator-content">
          <span class="curator-bio-kicker"><?php esc_html_e('SOLE AUTHOR &bull; ARCHIVAL CURATOR', 'atelier'); ?></span>
          <h3 class="curator-bio-title"><?php esc_html_e('Side Atelier', 'atelier'); ?></h3>
          <p class="curator-bio-lead">
            <?php esc_html_e('Architectural essayist, digital typographer, and founder of Atelier. Exploring the quiet intersection of cognitive restraint, classical book design, and humane software ergonomics.', 'atelier'); ?>
          </p>
          <div class="curator-actions">
            <button type="button" class="btn-curator-primary" onclick="window.openContactModal();">
              <span><?php esc_html_e('Transmit Letter to Desk', 'atelier'); ?></span>
            </button>
            <a href="#archive" class="btn-curator-secondary">
              <span><?php esc_html_e('Browse Author Ledger', 'atelier'); ?> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Postal Dispatch Subscription -->
    <section class="postal-dispatch-section" id="dispatch" aria-label="<?php esc_attr_e('Postal Dispatch Subscription', 'atelier'); ?>">
      <div class="postal-box-container">
        <div class="postal-box-text">
          <span class="postal-kicker"><?php esc_html_e('MONOGRAPH POSTAL DISPATCH', 'atelier'); ?></span>
          <h3 class="postal-heading"><?php esc_html_e('Subscribe to the Fortnightly Monograph Ledger', 'atelier'); ?></h3>
          <p class="postal-sub"><?php esc_html_e('New long-form essays delivered quietly to your inbox without promotional spam, tracking, or sponsored content.', 'atelier'); ?></p>
        </div>
        <div class="postal-box-form">
          <form class="postal-subscribe-form" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
            <input type="email" name="dispatch_email" placeholder="colleague@atelier.org" class="postal-email-input" required />
            <button type="submit" class="postal-submit-btn">
              <span><?php esc_html_e('Receive Dispatches', 'atelier'); ?> &rarr;</span>
            </button>
          </form>
          <span class="postal-guarantee">&bull; <?php esc_html_e('Strictly zero advertising • Unsubscribe at any time', 'atelier'); ?></span>
        </div>
      </div>
    </section>

  </div>
</main>

<?php get_footer(); ?>
