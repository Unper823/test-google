<?php
/**
 * Minimalist Editorial Comments Template for Atelier Editorial
 *
 * @package AtelierEditorial
 * @author Side Atelier
 */

if (post_password_required()) {
    return;
}
?>
<section id="comments" class="comments-area" aria-label="<?php esc_attr_e('Monograph Reflections', 'atelier-editorial'); ?>">
    <?php if (have_comments()) : ?>
        <h3 class="comments-title">
            <?php
            $comment_count = get_comments_number();
            if ('1' === $comment_count) {
                esc_html_e('1 Reader Reflection', 'atelier-editorial');
            } else {
                printf(
                    /* translators: 1: comment count number. */
                    esc_html(_nx('%1$s Reader Reflection', '%1$s Reader Reflections', $comment_count, 'comments title', 'atelier-editorial')),
                    number_format_i18n($comment_count)
                );
            }
            ?>
        </h3>

        <ol class="comment-list">
            <?php
            wp_list_comments([
                'style'       => 'ol',
                'short_ping'  => true,
                'avatar_size' => 44,
            ]);
            ?>
        </ol>

        <?php the_comments_navigation(); ?>
    <?php endif; ?>

    <?php
    if (!comments_open() && get_comments_number() && post_type_supports(get_post_type(), 'comments')) :
        ?>
        <p class="no-comments"><?php esc_html_e('Reflections are closed for this monograph.', 'atelier-editorial'); ?></p>
        <?php
    endif;
    ?>

    <?php
    comment_form([
        'title_reply'          => __('Leave a Reply', 'atelier-editorial'),
        'title_reply_to'       => __('Reply to %s', 'atelier-editorial'),
        'title_reply_before'   => '<h3 id="reply-title" class="comment-reply-title">',
        'title_reply_after'    => '</h3>',
        'cancel_reply_before'  => ' <small>',
        'cancel_reply_after'   => '</small>',
        'class_container'      => 'comment-respond',
        'class_form'           => 'comment-form',
        'class_submit'         => 'submit btn-editorial-submit',
        'label_submit'         => __('Post Comment', 'atelier-editorial'),
        'submit_button'        => '<input name="%1$s" type="submit" id="%2$s" class="%3$s" value="%4$s" />',
        'comment_field'        => '<p class="comment-form-comment"><label for="comment">' . _x('Comment', 'noun', 'atelier-editorial') . ' <span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="5" maxlength="65525" required="required" placeholder="' . esc_attr__('Write your comment or reflection on this monograph...', 'atelier-editorial') . '"></textarea></p>',
    ]);
    ?>
</section><!-- #comments -->
