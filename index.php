<?php
/**
 * Main Index / Ledger Template for Atelier Editorial
 *
 * Conforms strictly to zero categories, tags, or hashtag clutter.
 * Single-author long-form publication architecture.
 *
 * @package AtelierEditorial
 * @author Side Atelier
 */
get_header();

if (have_posts()) :
    $post_count = 0;
    while (have_posts()) : the_post();
        $post_count++;

        // Render first post on page 1 as the Featured Asymmetric Lead Story
        if (1 === $post_count && !is_paged()) :
            ?>
            <section class="hero-lead-section" aria-label="<?php esc_attr_e('Featured Monograph', 'atelier-editorial'); ?>">
                <div class="hero-lead-grid">
                    <!-- Left: Lead Story Prose & Context -->
                    <div class="hero-lead-content">
                        <div class="hero-lead-kicker">
                            <span class="kicker-pill">Lead Story &bull; Featured Release</span>
                            <span class="kicker-date"><?php echo get_the_date('M j, Y'); ?></span>
                        </div>

                        <h1 class="hero-lead-title">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h1>

                        <div class="hero-lead-excerpt">
                            <?php the_excerpt(); ?>
                        </div>

                        <div class="hero-lead-footer">
                            <div class="hero-author-badge">
                                <div class="author-avatar-mini">W</div>
                                <div class="author-meta-text">
                                    <span class="author-name">Side Atelier</span>
                                    <span class="author-role"><?php echo esc_html(atelier_calculate_reading_time()); ?> min read</span>
                                </div>
                            </div>

                            <a href="<?php the_permalink(); ?>" class="hero-cta-button">
                                <span>Read Monograph</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Right: Lead Story Visual Canvas -->
                    <div class="hero-lead-media">
                        <a href="<?php the_permalink(); ?>" class="hero-media-anchor" tabindex="-1" aria-hidden="true">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('large', ['class' => 'hero-media-img']); ?>
                            <?php else : ?>
                                <div class="hero-media-placeholder">
                                    <span class="placeholder-kicker">Atelier Monograph</span>
                                    <span class="placeholder-title"><?php the_title(); ?></span>
                                </div>
                            <?php endif; ?>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Section Headline: Fresh Editions / Chronological Archive -->
            <div class="ledger-section-header" id="archive">
                <div>
                    <h2 class="ledger-section-title">Chronological Archive</h2>
                    <p class="ledger-section-desc">Monographs &amp; essays published on contemporary typography, architecture, and slow prose.</p>
                </div>
                <div class="ledger-count-indicator">
                    <span>Archival Catalogue</span>
                </div>
            </div>

            <div class="monographs-editorial-grid">
            <?php
            continue;
        endif;

        if (1 === $post_count && is_paged()) :
            ?>
            <div class="ledger-section-header" style="margin-top: 2rem;" id="archive">
                <div>
                    <h1 class="ledger-section-title">Chronological Archive</h1>
                    <p class="ledger-section-desc">Folio Volume IV &bull; Page <?php echo esc_html(max(1, get_query_var('paged'))); ?></p>
                </div>
            </div>
            <div class="monographs-editorial-grid">
            <?php
        endif;
        ?>

        <!-- Article Monograph Card -->
        <article id="post-<?php the_ID(); ?>" <?php post_class('monograph-card'); ?>>
            <div class="card-media-wrapper">
                <a href="<?php the_permalink(); ?>" class="card-media-link" aria-label="<?php the_title_attribute(); ?>">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('medium_large', ['class' => 'card-thumbnail-img']); ?>
                    <?php else : ?>
                        <div class="card-thumbnail-fallback">
                            <span>Atelier Folio</span>
                        </div>
                    <?php endif; ?>
                </a>
            </div>

            <div class="card-content-wrapper">
                <div class="card-unboxed-meta">
                    <span class="meta-date"><?php echo get_the_date('M j, Y'); ?></span>
                    <span class="meta-separator">&bull;</span>
                    <span class="meta-read-time"><?php echo esc_html(atelier_calculate_reading_time()); ?> min read</span>
                </div>

                <h3 class="card-monograph-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h3>

                <div class="card-monograph-excerpt">
                    <?php the_excerpt(); ?>
                </div>

                <div class="card-monograph-footer">
                    <span class="card-curator">Curated by Side Atelier</span>
                    <a href="<?php the_permalink(); ?>" class="card-read-link">Read Monograph &rarr;</a>
                </div>
            </div>
        </article>

        <?php
    endwhile;

    echo '</div><!-- .monographs-editorial-grid -->';

    // Curatorial Sections on Front Page
    if (!is_paged()) :
        ?>
        <!-- Curatorial Pull-Quote Break -->
        <section class="curatorial-quote-break" aria-label="<?php esc_attr_e('Curatorial Thesis', 'atelier-editorial'); ?>">
            <div class="quote-break-inner">
                <span class="quote-ornament">&ldquo;</span>
                <blockquote class="quote-break-text">
                    The highest virtue of an essay is not velocity, but resonance. Slow reading is the deliberate reclamation of cognitive sovereignty.
                </blockquote>
                <cite class="quote-break-author">&mdash; Side Atelier, Editorial Curator</cite>
            </div>
        </section>

        <!-- Archival Statistics / Publication Metrics -->
        <section class="archival-metrics-section" aria-label="<?php esc_attr_e('Publication Metrics', 'atelier-editorial'); ?>">
            <div class="metrics-grid">
                <div class="metric-card">
                    <span class="metric-num">100%</span>
                    <span class="metric-label">Sole-Author Curated</span>
                    <span class="metric-sub">Every monograph written by Side Atelier</span>
                </div>
                <div class="metric-card">
                    <span class="metric-num">0</span>
                    <span class="metric-label">Adverts or Algorithm Trackers</span>
                    <span class="metric-sub">Pure, distraction-free reading space</span>
                </div>
                <div class="metric-card">
                    <span class="metric-num">65 Chars</span>
                    <span class="metric-label">Classical Optical Measure</span>
                    <span class="metric-sub">Typeset strictly for natural eye scanning</span>
                </div>
                <div class="metric-card">
                    <span class="metric-num">Vol. IV</span>
                    <span class="metric-label">Autumn Archival Series</span>
                    <span class="metric-sub">Fortnightly dispatches from the desk</span>
                </div>
            </div>
        </section>

        <!-- Editorial Pillars Section -->
        <section class="editorial-pillars-section" id="pillars" aria-label="<?php esc_attr_e('Editorial Pillars', 'atelier-editorial'); ?>">
            <div class="pillars-header">
                <span class="pillars-kicker">CURATORIAL ARCHITECTURE</span>
                <h3 class="pillars-title">The Four Pillars of the Atelier</h3>
                <p class="pillars-desc">A deliberate departure from high-velocity digital clutter in favor of permanence, depth, and typographical composure.</p>
            </div>

            <div class="pillars-grid">
                <div class="pillar-box">
                    <div class="pillar-number">01</div>
                    <h4 class="pillar-box-title">Monograph Architecture</h4>
                    <p class="pillar-box-body">Long-form treatises exceeding 2,000 words designed for sustained, uninterrupted focus without cognitive fragmentation.</p>
                </div>
                <div class="pillar-box">
                    <div class="pillar-number">02</div>
                    <h4 class="pillar-box-title">Classical Typography</h4>
                    <p class="pillar-box-body">Carefully calibrated Newsreader serifs, JetBrains Mono metadata, proportional spacing, and the 65-character optical measure.</p>
                </div>
                <div class="pillar-box">
                    <div class="pillar-number">03</div>
                    <h4 class="pillar-box-title">Humane Ergonomics</h4>
                    <p class="pillar-box-body">Zero advertising banners, zero popups, zero tracking scripts, and absolute elimination of category, tag, or hashtag noise.</p>
                </div>
                <div class="pillar-box">
                    <div class="pillar-number">04</div>
                    <h4 class="pillar-box-title">Unhurried Velocity</h4>
                    <p class="pillar-box-body">A fortnightly publication cadence that allows concepts, arguments, and aesthetic treatises to mature prior to release.</p>
                </div>
            </div>
        </section>

        <!-- Postal Dispatch / Subscription Box -->
        <section class="postal-dispatch-section" aria-label="<?php esc_attr_e('Postal Dispatch Subscription', 'atelier-editorial'); ?>">
            <div class="postal-box-container">
                <div class="postal-box-text">
                    <span class="postal-kicker">MONOGRAPH POSTAL DISPATCH</span>
                    <h3 class="postal-heading">Subscribe to the Fortnightly Monograph Ledger</h3>
                    <p class="postal-sub">New long-form essays delivered quietly to your reader without promotional spam, tracking, or sponsored content.</p>
                </div>
                <div class="postal-box-form">
                    <form class="postal-subscribe-form" action="<?php echo esc_url(home_url('/')); ?>" method="get" onsubmit="event.preventDefault(); alert('Subscribed to the Atelier Monograph Dispatch.');">
                        <input type="email" placeholder="colleague@atelier.org" class="postal-email-input" required />
                        <button type="submit" class="postal-submit-btn">Receive Dispatches</button>
                    </form>
                    <span class="postal-guarantee">&bull; Strictly zero advertising &bull; Unsubscribe at any time</span>
                </div>
            </div>
        </section>
        <?php
    endif;

    // Numerical Pagination
    the_posts_pagination([
        'mid_size'           => 2,
        'prev_text'          => __('&larr; Earlier Monographs', 'atelier-editorial'),
        'next_text'          => __('Subsequent Monographs &rarr;', 'atelier-editorial'),
        'before_page_number' => '<span class="screen-reader-text">' . __('Page', 'atelier-editorial') . ' </span>',
    ]);

else :
    ?>
    <div class="empty-ledger-view">
        <h2 class="empty-title"><?php esc_html_e('No Monographs Registered Yet', 'atelier-editorial'); ?></h2>
        <p class="empty-desc"><?php esc_html_e('The publication ledger is being prepared. Check back shortly for new editions.', 'atelier-editorial'); ?></p>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="empty-home-link">&larr; Return to Front Ledger</a>
    </div>
    <?php
endif;

get_footer();
