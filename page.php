<?php
/**
 * Standalone Page Template for Atelier Editorial
 *
 * Designed for About, Manifesto, Colophon, and Correspondence pages.
 *
 * @package AtelierEditorial
 * @author Side Atelier
 */
get_header();

while (have_posts()) : the_post();
    ?>
    <article id="page-<?php the_ID(); ?>" <?php post_class('editorial-page-wrapper'); ?>>
        <header class="editorial-page-header">
            <span class="editorial-page-kicker">ATELIER FOLIO &bull; ARCHIVAL PAGE</span>
            <h1 class="editorial-page-title"><?php the_title(); ?></h1>
            <?php if (has_excerpt()) : ?>
                <p class="editorial-page-subtitle"><?php echo get_the_excerpt(); ?></p>
            <?php endif; ?>
        </header>

        <?php if (has_post_thumbnail()) : ?>
            <div class="editorial-page-media">
                <?php the_post_thumbnail('full'); ?>
            </div>
        <?php endif; ?>

        <div class="editorial-page-content">
            <?php
            the_content();

            wp_link_pages([
                'before' => '<div class="page-links">' . esc_html__('Pages:', 'atelier-editorial'),
                'after'  => '</div>',
            ]);
            ?>
        </div>
    </article>
    <?php
endwhile;

get_footer();
