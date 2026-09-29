<!DOCTYPE html>
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
