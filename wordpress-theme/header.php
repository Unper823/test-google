<?php
/**
 * Atelier Header Template
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Top Editorial Masthead Ticker -->
<aside class="top-masthead-ticker" aria-label="<?php esc_attr_e('Publication Ledger Status', 'atelier'); ?>">
  <div class="site-container">
    <div class="ticker-inner">
      <div class="ticker-left">
        <span class="ticker-dot"></span>
        <span class="ticker-text"><strong><?php bloginfo('name'); ?></strong> / <?php bloginfo('description'); ?></span>
        <span class="ticker-divider">&bull;</span>
        <span class="ticker-freq"><?php esc_html_e('Fortnightly Release', 'atelier'); ?></span>
      </div>
      <div class="ticker-right">
        <span class="ticker-badge"><?php esc_html_e('Sole Author: Side Atelier', 'atelier'); ?></span>
        <span class="ticker-divider">&bull;</span>
        <span class="ticker-location"><?php esc_html_e('Copenhagen &bull; Zurich', 'atelier'); ?></span>
      </div>
    </div>
  </div>
</aside>

<!-- Sticky Site Header -->
<header class="site-header" id="site-header">
  <div class="site-container">
    <div class="header-inner">
      <div class="header-brand-group">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-link">
          <span class="brand-title"><?php bloginfo('name'); ?></span>
          <span class="brand-subtitle"><?php bloginfo('description'); ?></span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="site-navigation" id="site-navigation">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container'      => false,
            'menu_class'     => 'nav-menu',
            'fallback_cb'    => function() {
                echo '<ul class="nav-menu">';
                echo '<li><a href="' . esc_url(home_url('/#ledger')) . '" class="nav-link active">Ledger</a></li>';
                echo '<li><a href="' . esc_url(home_url('/#archive')) . '" class="nav-link">Archive</a></li>';
                echo '<li><a href="' . esc_url(home_url('/#about')) . '" class="nav-link">About Curator</a></li>';
                echo '<li><a href="' . esc_url(home_url('/#dispatch')) . '" class="nav-link">Dispatch</a></li>';
                echo '<li><button type="button" class="btn-nav-contact" onclick="window.openContactModal();">Letters to Desk</button></li>';
                echo '</ul>';
            }
        ));
        ?>
      </nav>

      <!-- Action Buttons -->
      <div class="header-actions">
        <button type="button" class="btn-header-action" onclick="window.scrollToSearch();">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span>Search</span>
        </button>
        <button type="button" class="btn-header-action btn-atmosphere" onclick="window.cycleTheme();">
          <span id="theme-btn-label">Day</span>
        </button>
      </div>
    </div>
  </div>
</header>
