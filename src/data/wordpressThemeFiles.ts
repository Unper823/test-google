/**
 * Complete, production-ready WordPress Theme Files for "Atelier Editorial"
 * Conforming strictly to WordPress 6.x Theme Handbook standards:
 * - Zero categories (as explicitly requested)
 * - Exclusive author attribution to Waleed Alharbi
 * - Full responsive layout, Google Fonts enqueue, post thumbnails, comments, reader view
 */

export interface WPThemeFile {
  filename: string;
  description: string;
  code: string;
  language: 'php' | 'css' | 'markdown' | 'txt';
}

export const WP_THEME_STYLE_CSS = `/*
Theme Name: Atelier Editorial
Theme URI: https://atelier-editorial.local
Author: Waleed Alharbi
Author URI: https://waleedalharbi.com
Description: A refined editorial monograph theme for WordPress. Features Newsreader serifs, distraction-free reading views, drop caps, reading time indicators, and clean author-driven publishing with no keywords, hashtags, or category clutter.
Version: 1.0.0
Requires at least: 5.9
Tested up to: 6.7
Requires PHP: 7.4
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: atelier-editorial
*/

:root {
  --bg-primary: #FAF8F5;
  --bg-card: #FFFFFF;
  --text-primary: #1C1917;
  --text-muted: #78716C;
  --text-subtle: #A8A29E;
  --border-subtle: #E7E5E4;
  --border-dark: #1C1917;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.site-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* Header & Masthead */
.site-header {
  border-bottom: 1px solid var(--border-subtle);
  background-color: rgba(250, 248, 245, 0.95);
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(8px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.brand-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.brand-badge {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  border: 1px solid var(--border-subtle);
  padding: 0.15rem 0.5rem;
  margin-left: 0.75rem;
}

.site-navigation ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.site-navigation a {
  font-size: 0.875rem;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.site-navigation a:hover,
.site-navigation .current-menu-item a {
  color: var(--text-primary);
}

/* Hero Featured Section */
.hero-monograph {
  padding: 3rem 0 2rem;
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 3rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 860px) {
  .hero-grid {
    grid-template-columns: 1.15fr 1fr;
  }
}

.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  line-height: 1.15;
  font-weight: 400;
  letter-spacing: -0.025em;
  margin-bottom: 1rem;
}

.hero-title a:hover {
  text-decoration: underline;
  text-decoration-thickness: 1px;
}

.hero-excerpt {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-subtle);
}

.hero-image-wrap {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: var(--border-subtle);
  border: 1px solid var(--border-subtle);
}

.hero-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.hero-image-wrap:hover img {
  transform: scale(1.02);
}

/* Articles Section Grid */
.section-headline {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--border-dark);
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.section-headline h2 {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 400;
}

.section-headline span {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.monographs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 640px) {
  .monographs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .monographs-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card-monograph {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.card-monograph:hover {
  border-color: var(--border-dark);
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

.card-thumb {
  aspect-ratio: 16 / 10;
  background-color: var(--border-subtle);
  overflow: hidden;
}

.card-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-subtle);
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1.35rem;
  line-height: 1.25;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.card-title a:hover {
  text-decoration: underline;
}

.card-excerpt {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 1.25rem;
  flex: 1;
}

.card-author-line {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border-subtle);
  padding-top: 0.75rem;
}

/* Single Reader View */
.reader-wrapper {
  max-width: 760px;
  margin: 3rem auto 5rem;
  padding: 0 1.25rem;
}

.reader-header {
  text-align: center;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-subtle);
}

.reader-meta-bar {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.reader-title {
  font-family: var(--font-serif);
  font-size: 2.75rem;
  line-height: 1.15;
  font-weight: 400;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
}

.reader-author {
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: var(--text-primary);
  font-weight: 500;
}

.reader-image {
  margin-bottom: 3rem;
  border: 1px solid var(--border-subtle);
}

.reader-content {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  line-height: 1.8;
  color: #262422;
}

.reader-content p {
  margin-bottom: 1.75rem;
}

.editorial-drop-cap::first-letter {
  font-family: var(--font-serif);
  font-size: 4rem;
  line-height: 0.8;
  float: left;
  margin-right: 0.85rem;
  margin-top: 0.2rem;
  font-weight: 500;
  color: var(--text-primary);
}

.reader-content blockquote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.45rem;
  line-height: 1.5;
  border-left: 2px solid var(--border-dark);
  padding: 0.5rem 0 0.5rem 1.75rem;
  margin: 2.5rem 0;
  color: var(--text-primary);
}

/* Site Footer */
.site-footer {
  margin-top: auto;
  border-top: 1px solid var(--border-subtle);
  background-color: #F5F2ED;
  padding: 3rem 0;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .footer-inner {
    flex-direction: row;
    align-items: center;
  }
}

.footer-copy {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.footer-brand {
  font-family: var(--font-serif);
  font-size: 1.2rem;
}
`;

export const WP_THEME_FUNCTIONS_PHP = `<?php
/**
 * Atelier Editorial Theme Functions
 *
 * @package AtelierEditorial
 * @author Waleed Alharbi
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
 * Enqueue Google Fonts and theme stylesheet
 */
function atelier_enqueue_scripts() {
    // Google Fonts: Newsreader, Plus Jakarta Sans, JetBrains Mono
    wp_enqueue_style(
        'atelier-google-fonts',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap',
        [],
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'atelier-main-style',
        get_stylesheet_uri(),
        ['atelier-google-fonts'],
        '1.0.0'
    );

    // Threaded comment reply script
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
`;

export const WP_THEME_HEADER_PHP = `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link screen-reader-text" href="#content" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;"><?php esc_html_e('Skip to content', 'atelier-editorial'); ?></a>

<header class="site-header">
    <div class="site-container">
        <div class="header-inner">
            <div style="display: flex; align-items: baseline;">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-title">
                    <?php bloginfo('name'); ?>
                </a>
                <span class="brand-badge">Waleed Alharbi &bull; Author</span>
            </div>

            <nav class="site-navigation" aria-label="<?php esc_attr_e('Primary', 'atelier-editorial'); ?>">
                <?php
                if (has_nav_menu('primary')) {
                    wp_nav_menu([
                        'theme_location' => 'primary',
                        'container'      => false,
                        'fallback_cb'    => false,
                        'depth'          => 1,
                    ]);
                } else {
                    echo '<ul>';
                    echo '<li><a href="' . esc_url(home_url('/')) . '">Ledger</a></li>';
                    echo '<li><a href="' . esc_url(home_url('/about')) . '">About</a></li>';
                    echo '<li><a href="' . esc_url(home_url('/contact')) . '">Contact</a></li>';
                    echo '</ul>';
                }
                ?>
            </nav>
        </div>
    </div>
</header>

<main id="content" class="site-main">
    <div class="site-container">
`;

export const WP_THEME_FOOTER_PHP = `    </div><!-- .site-container -->
</main><!-- .site-main -->

<footer class="site-footer">
    <div class="site-container">
        <div class="footer-inner">
            <div>
                <p class="footer-brand"><?php bloginfo('name'); ?></p>
                <p class="footer-copy">Curated, single-author monographs by Waleed Alharbi &copy; <?php echo date('Y'); ?></p>
            </div>
            <div>
                <p class="footer-copy" style="font-family: var(--font-mono); font-size: 0.75rem;">
                    Atelier WordPress Theme &bull; Zero Categories Architecture
                </p>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
`;

export const WP_THEME_INDEX_PHP = `<?php
/**
 * Main Index / Ledger Template
 * Conforms strictly to zero categories constraint
 */
get_header();

if (have_posts()) :
    $post_count = 0;
    while (have_posts()) : the_post();
        $post_count++;

        // Render first post as the Featured Hero Monograph
        if (1 === $post_count && !is_paged()) :
            ?>
            <section class="hero-monograph">
                <div class="hero-grid">
                    <div>
                        <div class="hero-eyebrow">
                            <span>Featured Lead</span>
                            <span>&bull;</span>
                            <span><?php echo get_the_date('M d, Y'); ?></span>
                        </div>
                        <h1 class="hero-title">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h1>
                        <p class="hero-excerpt"><?php echo get_the_excerpt(); ?></p>
                        <div class="hero-meta">
                            <span><?php echo esc_html(atelier_calculate_reading_time()); ?> min read</span>
                            <span>&bull;</span>
                            <span>Waleed Alharbi</span>
                        </div>
                    </div>

                    <div class="hero-image-wrap">
                        <a href="<?php the_permalink(); ?>">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('large'); ?>
                            <?php else : ?>
                                <div style="display:flex;align-items:center;justify-content:center;height:100%;background:#F0ECE4;color:#78716C;font-family:var(--font-mono);font-size:0.85rem;">
                                    Atelier Monograph
                                </div>
                            <?php endif; ?>
                        </a>
                    </div>
                </div>
            </section>

            <div class="section-headline">
                <h2>Chronological Archive</h2>
                <span>Monographs Index</span>
            </div>

            <div class="monographs-grid">
            <?php
            continue;
        endif;

        if (1 === $post_count && is_paged()) :
            ?>
            <div class="section-headline" style="margin-top: 2rem;">
                <h2>Archive</h2>
                <span>Page <?php echo esc_html(max(1, get_query_var('paged'))); ?></span>
            </div>
            <div class="monographs-grid">
            <?php
        endif;
        ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class('card-monograph'); ?>>
            <div class="card-thumb">
                <a href="<?php the_permalink(); ?>">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('medium_large'); ?>
                    <?php else : ?>
                        <div style="display:flex;align-items:center;justify-content:center;height:100%;background:#F0ECE4;color:#78716C;font-family:var(--font-mono);font-size:0.75rem;">
                            Monograph
                        </div>
                    <?php endif; ?>
                </a>
            </div>

            <div class="card-body">
                <div class="card-meta">
                    <span><?php echo get_the_date('M d, Y'); ?></span>
                    <span>&bull;</span>
                    <span><?php echo esc_html(atelier_calculate_reading_time()); ?> min read</span>
                </div>

                <h3 class="card-title">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h3>

                <p class="card-excerpt"><?php echo get_the_excerpt(); ?></p>

                <div class="card-author-line">
                    By Waleed Alharbi
                </div>
            </div>
        </article>

        <?php
    endwhile;

    echo '</div><!-- .monographs-grid -->';

    // Pagination
    the_posts_pagination([
        'mid_size'  => 2,
        'prev_text' => __('&larr; Newer', 'atelier-editorial'),
        'next_text' => __('Older &rarr;', 'atelier-editorial'),
    ]);

else :
    ?>
    <div style="text-align: center; padding: 6rem 0;">
        <h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 1rem;">No Monographs Found</h2>
        <p style="color: var(--text-muted);">Please check back soon for essays and publications.</p>
    </div>
    <?php
endif;

get_footer();
`;

export const WP_THEME_SINGLE_PHP = `<?php
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
`;

export const WP_THEME_PAGE_PHP = `<?php
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
`;

export const WP_THEME_COMMENTS_PHP = `<?php
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
`;

export const WP_THEME_README_TXT = `=== Atelier Editorial ===
Contributors: Waleed Alharbi
Requires at least: 5.9
Tested up to: 6.7
Requires PHP: 7.4
License: GPLv2 or later

== Description ==
Atelier Editorial is an authoritative single-author publication theme crafted for deep reading and clear monograph presentation.

== Key Features ==
* 100% Pure Publication Architecture: Direct publication without categories, tags, keywords, or hashtag clutter.
* Editorial Serif Display: Scaled Newsreader typography with automatic drop-caps and pull-quotes.
* Reading Time Calculations: Automatically computed for every monograph.
* Headless REST API Ready: Native reading_time endpoint registration for React or mobile frontends.
* Responsive & Lightweight: Clean, zero-dependency CSS.

== Installation ==
1. Download or zip the 'atelier-editorial' folder into 'atelier-editorial.zip'.
2. In your WordPress admin panel, go to: Appearance -> Themes -> Add New -> Upload Theme.
3. Choose 'atelier-editorial.zip' and click 'Install Now'.
4. Click 'Activate'.
5. Go to Appearance -> Menus to create your Primary navigation menu if desired.
`;

export const ALL_WP_THEME_FILES: WPThemeFile[] = [
  {
    filename: 'style.css',
    description: 'Theme identity header, typography reset, responsive grid, drop-cap, and styling',
    code: WP_THEME_STYLE_CSS,
    language: 'css',
  },
  {
    filename: 'functions.php',
    description: 'Setup, Google Fonts enqueuing, reading-time calculator, thumbnail support, REST API extensions',
    code: WP_THEME_FUNCTIONS_PHP,
    language: 'php',
  },
  {
    filename: 'header.php',
    description: 'HTML5 semantic header, masthead, author badge, and responsive navigation',
    code: WP_THEME_HEADER_PHP,
    language: 'php',
  },
  {
    filename: 'footer.php',
    description: 'Editorial colophon, copyright attribution to Waleed Alharbi, and wp_footer hooks',
    code: WP_THEME_FOOTER_PHP,
    language: 'php',
  },
  {
    filename: 'index.php',
    description: 'Editorial ledger template: hero monograph highlight, chronological archive, zero-categories grid',
    code: WP_THEME_INDEX_PHP,
    language: 'php',
  },
  {
    filename: 'single.php',
    description: 'Full reader view: drop caps, pull-quotes, author attribution, reading time, next/prev navigation',
    code: WP_THEME_SINGLE_PHP,
    language: 'php',
  },
  {
    filename: 'page.php',
    description: 'Universal page template for WordPress pages (About, Contact, Colophon)',
    code: WP_THEME_PAGE_PHP,
    language: 'php',
  },
  {
    filename: 'comments.php',
    description: 'Minimalist reader reflections list and submission form',
    code: WP_THEME_COMMENTS_PHP,
    language: 'php',
  },
  {
    filename: 'readme.txt',
    description: 'WordPress Theme documentation and installation guide',
    code: WP_THEME_README_TXT,
    language: 'txt',
  },
];
