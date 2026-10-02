<?php
/**
 * Generic Page Template
 */
get_header();

while (have_posts()) : the_post();
    ?>
    <article class="reader-wrapper" style="margin-top: 3rem;">
        <header class="reader-header">
            <h1 class="reader-title"><?php the_title(); ?></h1>
        </header>

        <div class="reader-content">
            <?php
            the_content();
            wp_link_pages([
                'before' => '<div class="page-links" style="margin-top:2rem;font-family:var(--font-mono);font-size:0.85rem;">' . esc_html__('Pages:', 'atelier-editorial'),
                'after'  => '</div>',
            ]);
            ?>
        </div>
    </article>
    <?php
endwhile;

get_footer();
