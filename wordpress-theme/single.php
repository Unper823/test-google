<?php
/**
 * Atelier Single Monograph Post Template
 */
get_header();
?>

<main class="site-main" id="content">
  <div class="site-container">
    <?php while (have_posts()) : the_post(); ?>
      <article class="reader-content-body" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="reader-header">
          <div class="reader-meta-line">
            <span><?php echo get_the_date('F j, Y'); ?></span>
            <span>&bull;</span>
            <span><?php echo atelier_reading_time(); ?> min read</span>
            <span>&bull;</span>
            <span>Sole Author: <?php the_author(); ?></span>
          </div>

          <h1 class="reader-title"><?php the_title(); ?></h1>
          <?php if (has_excerpt()) : ?>
            <p class="reader-subtitle"><?php echo get_the_excerpt(); ?></p>
          <?php endif; ?>

          <div class="reader-byline">
            <div class="author-avatar-mini"><?php echo strtoupper(substr(get_the_author(), 0, 1)); ?></div>
            <div class="author-meta-text">
              <span class="author-name"><?php the_author(); ?></span>
              <span class="author-role"><?php esc_html_e('Curated Monograph &bull; Copenhagen &amp; Zurich', 'atelier'); ?></span>
            </div>
          </div>
        </header>

        <?php if (has_post_thumbnail()) : ?>
          <div class="reader-image-frame">
            <?php the_post_thumbnail('atelier-lead'); ?>
          </div>
        <?php endif; ?>

        <div class="reader-prose-text">
          <?php the_content(); ?>
        </div>

        <div class="reader-footer-author">
          <span class="curator-bio-kicker"><?php esc_html_e('CURATORIAL COLOPHON', 'atelier'); ?></span>
          <h4 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.5rem;"><?php printf(esc_html__('Written by %s', 'atelier'), get_the_author()); ?></h4>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            <?php esc_html_e('Drafted slowly in Copenhagen and set in Newsreader serifs at a 65-character measure. Letters and reflections regarding this monograph may be directed directly to the author’s desk.', 'atelier'); ?>
          </p>
          <div class="reader-footer-actions">
            <button type="button" class="btn-curator-primary" onclick="window.openContactModal();">
              <span><?php esc_html_e('Send Letter to Author\'s Desk', 'atelier'); ?></span>
            </button>
            <a href="<?php echo esc_url(home_url('/#archive')); ?>" class="btn-curator-secondary">
              <span>&larr; <?php esc_html_e('Return to Ledger', 'atelier'); ?></span>
            </a>
          </div>
        </div>
      </article>
    <?php endwhile; ?>
  </div>
</main>

<?php get_footer(); ?>
