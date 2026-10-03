<?php
/**
 * Search Results Template for Atelier Editorial
 *
 * @package AtelierEditorial
 * @author Side Atelier
 */
get_header();
?>

<header class="archive-ledger-header">
    <div class="archive-kicker">SEARCH LEDGER RESULTS</div>
    <h1 class="archive-title">
        <?php
        /* translators: %s: search query */
        printf(esc_html__('Query: &ldquo;%s&rdquo;', 'atelier-editorial'), '<span>' . get_search_query() . '</span>');
        ?>
    </h1>
    <p class="archive-desc">
        <?php
        global $wp_query;
        $total_results = $wp_query->found_posts;
        printf(
            esc_html(_n('%d archival monograph located', '%d archival monographs located', $total_results, 'atelier-editorial')),
            $total_results
        );
        ?>
    </p>

    <!-- Search Form Input -->
    <div class="search-page-form-wrap">
        <?php get_search_form(); ?>
    </div>
</header>

<?php if (have_posts()) : ?>
    <div class="monographs-editorial-grid">
        <?php
        while (have_posts()) : the_post();
            ?>
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
                        <a href="<?php the_permalink(); ?>" class="card-read-link">Read &rarr;</a>
                    </div>
                </div>
            </article>
            <?php
        endwhile;
        ?>
    </div>

    <?php
    the_posts_pagination([
        'mid_size'  => 2,
        'prev_text' => __('&larr; Earlier Results', 'atelier-editorial'),
        'next_text' => __('More Results &rarr;', 'atelier-editorial'),
    ]);
else :
    ?>
    <div class="empty-ledger-view">
        <h2 class="empty-title"><?php esc_html_e('No Matches Found in the Monograph Ledger', 'atelier-editorial'); ?></h2>
        <p class="empty-desc"><?php esc_html_e('No published monographs correspond with this search query. Try broader keywords or return to the main ledger.', 'atelier-editorial'); ?></p>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="empty-home-link">&larr; Return to Front Ledger</a>
    </div>
<?php
endif;

get_footer();
