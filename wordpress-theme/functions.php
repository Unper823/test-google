<?php
/**
 * Atelier Theme Functions and Definitions
 * For WordPress 6.0+
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function atelier_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('responsive-embeds');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Header Menu', 'atelier'),
        'footer'  => __('Footer Directory Menu', 'atelier'),
    ));

    // Custom image sizes for editorial cards and lead visual
    add_image_size('atelier-lead', 1200, 750, true);
    add_image_size('atelier-card', 640, 400, true);
}
add_action('after_setup_theme', 'atelier_theme_setup');

function atelier_enqueue_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'atelier-google-fonts',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
        array(),
        null
    );

    // Theme Stylesheet
    wp_enqueue_style('atelier-style', get_stylesheet_uri(), array(), '1.0.0');

    // Theme JavaScript (Reader controls, theme toggle, search)
    wp_enqueue_script('atelier-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'atelier_enqueue_scripts');

/**
 * Calculate estimated reading time in minutes
 */
function atelier_reading_time($post_id = null) {
    $content = get_post_field('post_content', $post_id);
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200);
    return max(1, $reading_time);
}
