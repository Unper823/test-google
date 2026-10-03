<?php
/**
 * Single Monograph Reader Template for Atelier Editorial
 *
 * Dedicated to deep, distraction-free reading with 65-character optical measures,
 * classical drop caps, unboxed metadata, and zero category clutter.
 *
 * @package AtelierEditorial
 * @author Side Atelier
 */
get_header();

while (have_posts()) : the_post();
    ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class('reader-monograph-article'); ?>>
        
        <!-- Reader Navigation & Status Bar -->
        <nav class="reader-top-bar" aria-label="<?php esc_attr_e('Monograph Navigation', 'atelier-editorial'); ?>">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="reader-back-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                <span>Back to Archival Ledger</span>
            </a>

            <div class="reader-folio-indicator">
                <span class="folio-dot"></span>
                <span>Monograph #<?php the_ID(); ?> &bull; Sole Edition</span>
            </div>
        </nav>

        <!-- Monograph Header -->
        <header class="reader-monograph-header">
            <div class="reader-unboxed-meta">
                <span class="meta-date">Published on <?php echo get_the_date('F j, Y'); ?></span>
                <span class="meta-dot">&bull;</span>
                <span class="meta-read-time"><?php echo esc_html(atelier_calculate_reading_time()); ?> min read</span>
                <span class="meta-dot">&bull;</span>
                <span class="meta-author">Sole Author &amp; Curator</span>
            </div>

            <h1 class="reader-monograph-title"><?php the_title(); ?></h1>

            <?php if (has_excerpt()) : ?>
                <p class="reader-monograph-subtitle"><?php echo get_the_excerpt(); ?></p>
            <?php endif; ?>

            <div class="reader-byline-strip">
                <div class="byline-avatar">W</div>
                <div class="byline-details">
                    <span class="byline-name">Side Atelier</span>
                    <span class="byline-desc">Curated Monograph &bull; Copenhagen &amp; Zurich</span>
                </div>
            </div>
        </header>

        <!-- Featured Media Container -->
        <?php if (has_post_thumbnail()) : ?>
            <figure class="reader-featured-figure">
                <?php the_post_thumbnail('full', ['class' => 'reader-featured-img']); ?>
                <?php if ($caption = get_the_post_thumbnail_caption()) : ?>
                    <figcaption class="reader-featured-caption"><?php echo esc_html($caption); ?></figcaption>
                <?php endif; ?>
            </figure>
        <?php endif; ?>

        <!-- Monograph Body Prose (Constrained to 65-char optimal measure) -->
        <div class="reader-prose-container editorial-drop-cap">
            <?php
            the_content();

            wp_link_pages([
                'before'      => '<nav class="reader-page-pagination" aria-label="' . esc_attr__('Monograph Pages', 'atelier-editorial') . '"><span class="page-links-title">' . esc_html__('Monograph Folios:', 'atelier-editorial') . '</span>',
                'after'       => '</nav>',
                'link_before' => '<span class="page-number">',
                'link_after'  => '</span>',
            ]);
            ?>
        </div>

        <!-- Colophon & Author Attribution Card -->
        <section class="reader-author-card">
            <div class="author-card-inner">
                <div class="author-portrait-wrap">
                    <div class="author-portrait-placeholder">W</div>
                </div>
                <div class="author-card-content">
                    <span class="author-card-role">SOLE AUTHOR &bull; ARCHIVAL CURATOR</span>
                    <h3 class="author-card-name">Side Atelier</h3>
                    <p class="author-card-bio">
                        Architectural essayist, digital typographer, and curator of Atelier. Writing slowly on cognitive restraint, humane software ergonomics, and classical editorial craft free from algorithmic velocity.
                    </p>
                    <div class="author-card-actions">
                        <a href="<?php echo esc_url(home_url('/about')); ?>" class="author-card-link">About Publication &rarr;</a>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="author-card-link">Send Letter to Desk &rarr;</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Previous / Next Monograph Navigation -->
        <nav class="reader-post-navigation" aria-label="<?php esc_attr_e('Adjacent Monographs', 'atelier-editorial'); ?>">
            <div class="nav-adjacent-grid">
                <div class="nav-adjacent-cell nav-prev">
                    <?php
                    $prev_post = get_previous_post();
                    if ($prev_post) :
                        ?>
                        <span class="nav-cell-label">&larr; Previous Monograph</span>
                        <a href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>" class="nav-cell-title">
                            <?php echo esc_html(get_the_title($prev_post->ID)); ?>
                        </a>
                        <?php
                    endif;
                    ?>
                </div>

                <div class="nav-adjacent-cell nav-next">
                    <?php
                    $next_post = get_next_post();
                    if ($next_post) :
                        ?>
                        <span class="nav-cell-label">Next Monograph &rarr;</span>
                        <a href="<?php echo esc_url(get_permalink($next_post->ID)); ?>" class="nav-cell-title">
                            <?php echo esc_html(get_the_title($next_post->ID)); ?>
                        </a>
                        <?php
                    endif;
                    ?>
                </div>
            </div>
        </nav>

        <!-- Comments / Discussions -->
        <?php
        if (comments_open() || get_comments_number()) :
            ?>
            <div class="reader-comments-section">
                <?php comments_template(); ?>
            </div>
            <?php
        endif;
        ?>

    </article>
    <?php
endwhile;

get_footer();
