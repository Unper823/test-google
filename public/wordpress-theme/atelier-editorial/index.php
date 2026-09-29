<?php
/**
 * Main Index / Ledger Template
 * Conforms strictly to zero categories constraint
 */
get_header();

if (have_posts()) :
    $post_count = 0;
    while (have_posts()) : the_post();
        $post_count++;

        // Render first post as the Featured Hero Monograph
        if (1 === $post_count && !is_paged()) :
            ?>
            <section class="hero-monograph">
                <div class="hero-grid">
                    <div>
                        <div class="hero-eyebrow">
                            <span>Featured Lead</span>
                            <span>&bull;</span>
                            <span><?php echo get_the_date('M d, Y'); ?></span>
                        </div>
                        <h1 class="hero-title">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h1>
                        <p class="hero-excerpt"><?php echo get_the_excerpt(); ?></p>
                        <div class="hero-meta">
                            <span><?php echo esc_html(atelier_calculate_reading_time()); ?> min read</span>
                            <span>&bull;</span>
                            <span>Waleed Alharbi</span>
                        </div>
                    </div>

                    <div class="hero-image-wrap">
                        <a href="<?php the_permalink(); ?>">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('large'); ?>
                            <?php else : ?>
                                <div style="display:flex;align-items:center;justify-content:center;height:100%;background:#F0ECE4;color:#78716C;font-family:var(--font-mono);font-size:0.85rem;">
                                    Atelier Monograph
                                </div>
                            <?php endif; ?>
                        </a>
                    </div>
                </div>
            </section>

            <div class="section-headline">
                <h2>Chronological Archive</h2>
                <span>Monographs Index</span>
            </div>

            <div class="monographs-grid">
            <?php
            continue;
        endif;

        if (1 === $post_count && is_paged()) :
            ?>
            <div class="section-headline" style="margin-top: 2rem;">
                <h2>Archive</h2>
                <span>Page <?php echo esc_html(max(1, get_query_var('paged'))); ?></span>
            </div>
            <div class="monographs-grid">
            <?php
        endif;
        ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class('card-monograph'); ?>>
            <div class="card-thumb">
                <a href="<?php the_permalink(); ?>">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('medium_large'); ?>
                    <?php else : ?>
                        <div style="display:flex;align-items:center;justify-content:center;height:100%;background:#F0ECE4;color:#78716C;font-family:var(--font-mono);font-size:0.75rem;">
                            Monograph
                        </div>
                    <?php endif; ?>
                </a>
            </div>

            <div class="card-body">
                <div class="card-meta">
                    <span><?php echo get_the_date('M d, Y'); ?></span>
                    <span>&bull;</span>
                    <span><?php echo esc_html(atelier_calculate_reading_time()); ?> min read</span>
                </div>

                <h3 class="card-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h3>

                <p class="card-excerpt"><?php echo get_the_excerpt(); ?></p>

                <div class="card-author-line">
                    By Waleed Alharbi
                </div>
            </div>
        </article>

        <?php
    endwhile;

    echo '</div><!-- .monographs-grid -->';

    // Pagination
    the_posts_pagination([
        'mid_size'  => 2,
        'prev_text' => __('&larr; Newer', 'atelier-editorial'),
        'next_text' => __('Older &rarr;', 'atelier-editorial'),
    ]);

else :
    ?>
    <div style="text-align: center; padding: 6rem 0;">
        <h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 1rem;">No Monographs Found</h2>
        <p style="color: var(--text-muted);">Please check back soon for essays and publications.</p>
    </div>
    <?php
endif;

get_footer();
