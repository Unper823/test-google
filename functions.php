<?php
/**
 * Atelier Editorial Theme Functions
 *
 * @package AtelierEditorial
 * @author Side Atelier
 */

if (!defined('ABSPATH')) {
    exit;
}

function atelier_theme_setup() {
    // Set global content width
    global $content_width;
    if (!isset($content_width)) {
        $content_width = 760;
    }

    // Add default title tag support
    add_theme_support('title-tag');

    // Add featured post thumbnail support
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 750, true);

    // Add HTML5 markup support
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ]);

    // Register primary navigation
    register_nav_menus([
        'primary' => __('Primary Navigation', 'atelier-editorial'),
        'footer'  => __('Footer Navigation', 'atelier-editorial'),
    ]);
}
add_action('after_setup_theme', 'atelier_theme_setup');

/**
 * Enqueue Google Fonts, stylesheets, and JavaScript files
 */
function atelier_enqueue_scripts() {
    // 1. External Typography: Newsreader, Plus Jakarta Sans, JetBrains Mono
    wp_enqueue_style(
        'theme-google-fonts',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
        [],
        null
    );

    // 2. Main root stylesheet
    wp_enqueue_style(
        'theme-main-style',
        get_template_directory_uri() . '/style.css',
        ['theme-google-fonts'],
        '1.0.1'
    );

    // 3. Layout and custom stylesheet
    wp_enqueue_style(
        'theme-custom-style',
        get_template_directory_uri() . '/assets/css/main.css',
        ['theme-main-style'],
        '1.0.1'
    );

    // 4. Interactive scripts (atmosphere switcher, search drawer, reading progress)
    wp_enqueue_script(
        'theme-main-script',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0.1',
        true
    );

    // 5. Threaded comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'atelier_enqueue_scripts');

/**
 * Calculate reading time in minutes for any monograph content
 */
function atelier_calculate_reading_time($content = null) {
    if (null === $content) {
        $content = get_post_field('post_content', get_the_ID());
    }
    $clean_content = strip_shortcodes($content);
    $clean_content = wp_strip_all_tags($clean_content);
    $word_count = str_word_count($clean_content);
    $minutes = ceil($word_count / 200);
    return max(1, $minutes);
}

/**
 * Ensure excerpt has custom clean length
 */
function atelier_excerpt_length($length) {
    return 26;
}
add_filter('excerpt_length', 'atelier_excerpt_length');

function atelier_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'atelier_excerpt_more');

/**
 * REST API enhancements for headless usage
 */
add_action('rest_api_init', function () {
    register_rest_field('post', 'reading_time', [
        'get_callback' => function ($post_arr) {
            return atelier_calculate_reading_time($post_arr['content']['rendered']);
        },
        'schema' => [
            'description' => 'Estimated reading time in minutes',
            'type'        => 'integer',
        ],
    ]);
});
