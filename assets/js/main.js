/**
 * Atelier Editorial Theme JavaScript
 * Handles atmosphere switcher (Day, Sepia, Dark), search drawer, and reading progress.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Atmosphere Theme Toggle (Day, Sepia, Dark)
  const savedTheme = localStorage.getItem('atelier_theme') || 'day';
  applyTheme(savedTheme);

  const themeToggleBtns = document.querySelectorAll('.btn-atmosphere-toggle, #theme-btn-label');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.body.classList.contains('theme-dark')
        ? 'dark'
        : document.body.classList.contains('theme-sepia')
        ? 'sepia'
        : 'day';

      const nextTheme = current === 'day' ? 'sepia' : current === 'sepia' ? 'dark' : 'day';
      applyTheme(nextTheme);
      localStorage.setItem('atelier_theme', nextTheme);
    });
  });

  function applyTheme(theme) {
    document.body.classList.remove('theme-sepia', 'theme-dark');
    if (theme === 'sepia') document.body.classList.add('theme-sepia');
    if (theme === 'dark') document.body.classList.add('theme-dark');

    const labels = document.querySelectorAll('#theme-btn-label, .theme-state-text');
    labels.forEach(el => {
      el.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    });
  }

  // 2. Search Drawer Toggle
  const searchToggle = document.querySelector('.btn-search-toggle');
  const searchDrawer = document.getElementById('header-search-drawer');
  if (searchToggle && searchDrawer) {
    searchToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      searchDrawer.classList.toggle('is-open');
      const input = searchDrawer.querySelector('input[type="search"]');
      if (searchDrawer.classList.contains('is-open') && input) {
        setTimeout(() => input.focus(), 100);
      }
    });

    document.addEventListener('click', (e) => {
      if (searchDrawer.classList.contains('is-open') && !searchDrawer.contains(e.target) && !searchToggle.contains(e.target)) {
        searchDrawer.classList.remove('is-open');
      }
    });
  }

  // 3. Monograph Reading Progress Indicator
  const readingProgressBar = document.getElementById('reading-progress-bar');
  if (readingProgressBar) {
    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        readingProgressBar.style.width = progress + '%';
      }
    }, { passive: true });
  }
});
