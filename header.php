<?php
/**
 * Header Template for Atelier Editorial
 *
 * @package AtelierEditorial
 * @author Waleed Alharbi
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to monograph content', 'atelier-editorial'); ?></a>

<!-- Top Editorial Ledger Masthead Ticker -->
<div class="top-masthead-ticker">
    <div class="site-container">
        <div class="ticker-inner">
            <div class="ticker-left">
                <span class="ticker-dot"></span>
                <span class="ticker-text"><strong>Vol. IV &bull; No. 2</strong> / Autumn Archival Ledger</span>
                <span class="ticker-divider">&bull;</span>
                <span class="ticker-freq">Updated Fortnightly</span>
            </div>
            <div class="ticker-right">
                <span class="ticker-badge">Sole Author: Waleed Alharbi</span>
                <span class="ticker-divider">&bull;</span>
                <span class="ticker-location">Copenhagen &bull; Zurich</span>
            </div>
        </div>
    </div>
</div>

<!-- Main Sticky Header -->
<header class="site-header" id="site-header">
    <div class="site-container">
        <div class="header-inner">
            <!-- Brand Wordmark -->
            <div class="header-brand-group">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-link" rel="home">
                    <span class="brand-title"><?php bloginfo('name'); ?></span>
                    <span class="brand-subtitle">Journal &bull; Archival Blueprint</span>
                </a>
                <span class="brand-author-pill">Waleed Alharbi &bull; Author</span>
            </div>

            <!-- Primary Navigation -->
            <nav class="site-navigation" id="site-navigation" aria-label="<?php esc_attr_e('Primary Navigation', 'atelier-editorial'); ?>">
                <?php
                if (has_nav_menu('primary')) {
                    wp_nav_menu([
                        'theme_location' => 'primary',
                        'container'      => false,
                        'menu_class'     => 'nav-menu',
                        'fallback_cb'    => false,
                        'depth'          => 2,
                    ]);
                } else {
                    ?>
                    <ul class="nav-menu">
                        <li class="<?php echo is_home() || is_front_page() ? 'current-menu-item' : ''; ?>">
                            <a href="<?php echo esc_url(home_url('/')); ?>">Ledger</a>
                        </li>
                        <li>
                            <a href="<?php echo esc_url(home_url('/#archive')); ?>">Archive</a>
                        </li>
                        <li>
                            <a href="<?php echo esc_url(home_url('/#pillars')); ?>">Pillars</a>
                        </li>
                        <li class="<?php echo is_page('about') ? 'current-menu-item' : ''; ?>">
                            <a href="<?php echo esc_url(home_url('/about')); ?>">About Curator</a>
                        </li>
                        <li class="<?php echo is_page('contact') ? 'current-menu-item' : ''; ?>">
                            <a href="<?php echo esc_url(home_url('/contact')); ?>">Letters to Desk</a>
                        </li>
                    </ul>
                    <?php
                }
                ?>
            </nav>

            <!-- Header Utility Actions -->
            <div class="header-actions">
                <button type="button" class="btn-search-toggle" aria-label="<?php esc_attr_e('Open search ledger', 'atelier-editorial'); ?>" onclick="const sf = document.getElementById('header-search-drawer'); if (sf) sf.classList.toggle('is-open');">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <span>Search</span>
                </button>

                <a href="<?php echo esc_url(get_feed_link()); ?>" class="btn-rss" title="<?php esc_attr_e('Subscribe via RSS', 'atelier-editorial'); ?>">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                    <span>RSS</span>
                </a>
            </div>
        </div>

        <!-- Collapsible Search Drawer -->
        <div id="header-search-drawer" class="header-search-drawer">
            <?php get_search_form(); ?>
        </div>
    </div>
</header>

<main id="content" class="site-main">
    <div class="site-container">
