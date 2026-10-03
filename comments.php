<?php
/**
 * Minimalist Editorial Comments Template
 */
if (post_password_required()) {
    return;
}
?>
<div id="comments" style="margin-top: 4rem; border-top: 1px solid var(--border-subtle); padding-top: 2rem;">
    <?php if (have_comments()) : ?>
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 1.5rem;">
            Reader Reflections (<?php echo get_comments_number(); ?>)
        </h3>

        <ol style="list-style: none; display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2.5rem;">
            <?php
            wp_list_comments([
                'style'       => 'ol',
                'short_ping'  => true,
                'avatar_size' => 40,
            ]);
            ?>
        </ol>
    <?php endif; ?>

    <?php comment_form(); ?>
</div>
