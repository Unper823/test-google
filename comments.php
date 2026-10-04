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

<!-- Scoped Editorial Comment Styles to guarantee pristine rendering across all environments -->
<style id="atelier-comments-inline-styles">
  .comments-area,
  #comments {
    margin-top: 4.5rem;
    padding-top: 3rem;
    border-top: 1px solid var(--border-subtle, #E7E5E4);
    max-width: var(--reader-measure, 720px);
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }

  .comments-title,
  .comments-area h3,
  #comments h3 {
    font-family: var(--font-serif, 'Newsreader', Georgia, serif);
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-primary, #1C1917);
    margin: 0 0 1.75rem 0;
    letter-spacing: -0.01em;
  }

  /* Leave a Reply Card */
  .comment-respond,
  #respond {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    padding: 2.25rem;
    background-color: var(--bg-card, #FFFFFF);
    border: 1px solid var(--border-subtle, #E7E5E4);
    border-radius: var(--radius-md, 10px);
    box-shadow: 0 4px 20px -6px rgba(28, 25, 23, 0.06);
    box-sizing: border-box;
  }

  .comment-reply-title,
  #reply-title {
    font-family: var(--font-serif, 'Newsreader', Georgia, serif);
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-primary, #1C1917);
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: -0.01em;
  }

  .comment-reply-title small a {
    font-family: var(--font-sans, 'Plus Jakarta Sans', sans-serif);
    font-size: 0.75rem;
    font-weight: 500;
    color: #DC2626;
    text-decoration: underline;
    margin-left: 1rem;
  }

  .comment-notes,
  .logged-in-as {
    font-family: var(--font-sans, 'Plus Jakarta Sans', -apple-system, sans-serif);
    font-size: 0.8125rem;
    color: var(--text-muted, #78716C);
    line-height: 1.5;
    margin: 0 0 1.5rem 0;
  }

  .logged-in-as a {
    color: var(--text-primary, #1C1917);
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 500;
  }

  .logged-in-as a:hover {
    color: var(--accent-emerald, #065F46);
  }

  /* Form Elements - Strictly Block Aligned */
  .comment-form {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.25rem !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .comment-form p,
  .comment-form .comment-form-field {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  .comment-form label,
  .comment-form-comment label {
    display: block !important;
    font-family: var(--font-sans, 'Plus Jakarta Sans', -apple-system, sans-serif) !important;
    font-size: 0.8125rem !important;
    font-weight: 600 !important;
    color: var(--text-secondary, #57534E) !important;
    margin-bottom: 0.45rem !important;
    letter-spacing: 0.01em !important;
    text-align: left !important;
  }

  .comment-form label .required {
    color: #DC2626 !important;
    font-weight: 700 !important;
  }

  .comment-form textarea,
  .comment-form-comment textarea,
  .comment-form input[type="text"],
  .comment-form input[type="email"],
  .comment-form input[type="url"] {
    display: block !important;
    width: 100% !important;
    box-sizing: border-box !important;
    font-family: var(--font-sans, 'Plus Jakarta Sans', -apple-system, sans-serif) !important;
    font-size: 0.9375rem !important;
    color: var(--text-primary, #1C1917) !important;
    background-color: var(--bg-canvas, #FAF8F5) !important;
    border: 1px solid var(--border-strong, #D6D3D1) !important;
    border-radius: 6px !important;
    padding: 0.85rem 1rem !important;
    line-height: 1.6 !important;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease !important;
    margin: 0 !important;
  }

  .comment-form textarea,
  .comment-form-comment textarea {
    min-height: 140px !important;
    resize: vertical !important;
  }

  .comment-form textarea:focus,
  .comment-form-comment textarea:focus,
  .comment-form input[type="text"]:focus,
  .comment-form input[type="email"]:focus,
  .comment-form input[type="url"]:focus {
    outline: none !important;
    background-color: #FFFFFF !important;
    border-color: var(--text-primary, #1C1917) !important;
    box-shadow: 0 0 0 3px rgba(28, 25, 23, 0.08) !important;
  }

  .comment-form-cookies-consent {
    flex-direction: row !important;
    align-items: center !important;
    gap: 0.5rem !important;
    font-size: 0.8125rem !important;
    color: var(--text-muted, #78716C) !important;
  }

  .comment-form-cookies-consent input[type="checkbox"] {
    accent-color: var(--text-primary, #1C1917) !important;
    width: 1rem !important;
    height: 1rem !important;
    cursor: pointer !important;
    margin: 0 !important;
  }

  .comment-form-cookies-consent label {
    margin-bottom: 0 !important;
    font-weight: 400 !important;
    cursor: pointer !important;
  }

  /* Submit Button - Atelier Black Editorial Pill */
  .form-submit,
  p.form-submit {
    margin-top: 0.5rem !important;
    margin-bottom: 0 !important;
    display: flex !important;
    justify-content: flex-start !important;
  }

  #submit,
  .submit,
  .comment-form input[type="submit"],
  .comment-form button[type="submit"],
  .comment-respond input[type="submit"],
  .btn-editorial-submit {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: #1C1917 !important;
    color: #FFFFFF !important;
    border: 1px solid transparent !important;
    border-radius: 6px !important;
    padding: 0.75rem 1.6rem !important;
    font-family: var(--font-sans, 'Plus Jakarta Sans', -apple-system, sans-serif) !important;
    font-size: 0.875rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.02em !important;
    line-height: 1.2 !important;
    cursor: pointer !important;
    box-shadow: 0 2px 8px -2px rgba(28, 25, 23, 0.18) !important;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
    text-decoration: none !important;
    appearance: none !important;
    -webkit-appearance: none !important;
    width: auto !important;
  }

  #submit:hover,
  .submit:hover,
  .comment-form input[type="submit"]:hover,
  .comment-form button[type="submit"]:hover,
  .comment-respond input[type="submit"]:hover,
  .btn-editorial-submit:hover {
    background-color: #383532 !important;
    color: #FFFFFF !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 6px 16px -4px rgba(28, 25, 23, 0.25) !important;
  }

  #submit:active,
  .submit:active,
  .comment-form input[type="submit"]:active,
  .btn-editorial-submit:active {
    transform: translateY(0) !important;
    box-shadow: 0 1px 4px rgba(28, 25, 23, 0.12) !important;
  }

  /* Comments List */
  .comment-list,
  ol.comment-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .comment-list .comment-body {
    padding: 1.5rem;
    background-color: var(--bg-card, #FFFFFF);
    border: 1px solid var(--border-subtle, #E7E5E4);
    border-radius: var(--radius-md, 10px);
    box-sizing: border-box;
  }

  .comment-list .comment-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 0.8125rem;
  }

  .comment-list .comment-author .fn {
    font-weight: 600;
    color: var(--text-primary, #1C1917);
    font-style: normal;
  }

  .comment-list .comment-metadata a {
    color: var(--text-muted, #78716C);
    text-decoration: none;
  }

  .comment-list .comment-content {
    font-family: var(--font-sans, 'Plus Jakarta Sans', -apple-system, sans-serif);
    font-size: 0.9375rem;
    line-height: 1.65;
    color: var(--text-secondary, #57534E);
  }
</style>

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
    $commenter     = wp_get_current_commenter();
    $consent_state = empty($commenter['comment_author_email']) ? '' : ' checked="checked"';

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
        'submit_field'         => '<p class="form-submit">%1$s %2$s</p>',
        'comment_notes_before' => '',
        'comment_field'        => '<p class="comment-form-comment"><label for="comment">' . esc_html__('Comment', 'atelier-editorial') . ' <span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="5" maxlength="65525" required="required" placeholder="' . esc_attr__('Write your comment or reflection on this monograph...', 'atelier-editorial') . '"></textarea></p>',
        'fields'               => [
            'author'  => '<p class="comment-form-author"><label for="author">' . esc_html__('Name', 'atelier-editorial') . ' <span class="required">*</span></label><input id="author" name="author" type="text" value="' . esc_attr($commenter['comment_author']) . '" size="30" maxlength="245" required="required" placeholder="' . esc_attr__('Your full name', 'atelier-editorial') . '" /></p>',
            'email'   => '<p class="comment-form-email"><label for="email">' . esc_html__('Email', 'atelier-editorial') . ' <span class="required">*</span></label><input id="email" name="email" type="email" value="' . esc_attr($commenter['comment_author_email']) . '" size="30" maxlength="100" aria-describedby="email-notes" required="required" placeholder="name@example.com" /></p>',
            'url'     => '<p class="comment-form-url"><label for="url">' . esc_html__('Website (Optional)', 'atelier-editorial') . '</label><input id="url" name="url" type="url" value="' . esc_attr($commenter['comment_author_url']) . '" size="30" maxlength="200" placeholder="https://..." /></p>',
            'cookies' => '<p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"' . $consent_state . ' /><label for="wp-comment-cookies-consent">' . esc_html__('Save my name and email in this browser for the next time I comment.', 'atelier-editorial') . '</label></p>',
        ],
    ]);
    ?>
</section><!-- #comments -->
