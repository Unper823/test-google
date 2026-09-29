<?php
/**
 * Single Monograph Reader Template
 */
get_header();

while (have_posts()) : the_post();
    ?>
    <article id="post-<?php the_ID(); ?>" class="reader-wrapper">
        <header class="reader-header">
            <div class="reader-meta-bar">
                <span>Published <?php echo get_the_date('F j, Y'); ?></span>
                <span>&bull;</span>
                <span><?php echo esc_html(atelier_calculate_reading_time()); ?> min read</span>
            </div>

            <h1 class="reader-title"><?php the_title(); ?></h1>

            <p class="reader-author">Monograph by Waleed Alharbi</p>
        </header>

        <?php if (has_post_thumbnail()) : ?>
            <div class="reader-image">
                <?php the_post_thumbnail('full'); ?>
            </div>
        <?php endif; ?>

        <div class="reader-content editorial-drop-cap">
            <?php
            the_content();
            wp_link_pages([
                'before' => '<div class="page-links" style="margin-top:2rem;font-family:var(--font-mono);font-size:0.85rem;">' . esc_html__('Pages:', 'atelier-editorial'),
                'after'  => '</div>',
            ]);
            ?>
        </div>

        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.8rem;">
            <div>
                <?php previous_post_link('&larr; Previous: %link'); ?>
            </div>
            <div>
                <?php next_post_link('Next: %link &rarr;'); ?>
            </div>
        </div>

        <?php
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;
        ?>
    </article>
    <?php
endwhile;

get_footer();
