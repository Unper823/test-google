<?php
/**
 * 404 Error Template for Atelier Editorial
 *
 * @package AtelierEditorial
 * @author Waleed Alharbi
 */
get_header();
?>

<div class="error-404-container">
    <div class="error-404-inner">
        <span class="error-kicker">LEDGER ERROR 404</span>
        <h1 class="error-title">Folio Not Found in Archive</h1>
        <p class="error-desc">
            The essay, publication, or folio document you requested does not exist or has been relocated within the authorial ledger.
        </p>

        <div class="error-search-box">
            <?php get_search_form(); ?>
        </div>

        <div class="error-actions">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-return-home">
                &larr; Return to Archival Ledger
            </a>
        </div>
    </div>
</div>

<?php
get_footer();
