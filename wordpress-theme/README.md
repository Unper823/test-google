# Atelier Editorial — WordPress Compatibility Test & Integration Guide

## Compatibility Test Verdict: **100% Compatible**

This website architecture is completely compatible with WordPress. In fact, WordPress was designed specifically for editorial blogs, monographs, and long-form publications like Atelier.

---

## 2 Ways to Run Atelier with WordPress

### Option 1: As a Native WordPress Theme (Provided in `/wordpress-theme`)
You can upload the `wordpress-theme/` folder directly to any WordPress site (`wp-content/themes/atelier`):

1. **`style.css`**: Standard WordPress theme stylesheet with complete CSS variables (`--bg-canvas`, `--text-primary`, Newsreader & Plus Jakarta Sans typography).
2. **`functions.php`**: Enqueues Google Fonts, registers menus, supports post thumbnails, and calculates reading time dynamically.
3. **`header.php`**: Includes WordPress `wp_head()`, top masthead ticker, navigation with `wp_nav_menu()`, and search/theme controls.
4. **`front-page.php`**: Renders the 7:5 asymmetric lead monograph, chronological archive grid via `WP_Query`, curatorial quote break, author bio, and newsletter dispatch form.
5. **`single.php`**: Renders the distraction-free monograph reader for individual articles, complete with drop-cap styling and classical 65-character measure.
6. **`footer.php`**: Standard 3-column directory footer, RSS feed link, and `wp_footer()`.

#### Installation Steps:
1. Zip the `wordpress-theme` directory into `atelier.zip`.
2. Go to your WordPress Admin Dashboard &rarr; **Appearance** &rarr; **Themes** &rarr; **Add New** &rarr; **Upload Theme**.
3. Select `atelier.zip` and click **Install Now** &rarr; **Activate**.
4. Every post you write in the WordPress Gutenberg editor will automatically be formatted with Atelier's typography, drop caps, and reading times.

---

### Option 2: As a Headless WordPress Application (REST API)
You can also keep this React / Vite frontend exactly as it is, and connect it to a WordPress backend using the **WordPress REST API**:

- WordPress Endpoint: `https://your-domain.com/wp-json/wp/v2/posts`
- Whenever Side Atelier publishes a new post in WordPress, this frontend fetches it automatically:

```typescript
// Example: Fetching live posts from WordPress REST API
async function fetchWordPressMonographs() {
  const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed');
  const posts = await response.json();
  
  return posts.map(post => ({
    id: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    date: new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/editorial_lead_hero_1790188809339.jpg',
    readingTime: Math.ceil(post.content.rendered.split(' ').length / 200),
    topic: post._embedded?.['wp:term']?.[0]?.[0]?.name.toLowerCase() || 'typography'
  }));
}
```

---

## Compatibility Checklist

| Feature | WordPress Support | How It Works |
| :--- | :--- | :--- |
| **Typography & Fonts** | Full Support | Google Fonts (`Newsreader`, `Plus Jakarta Sans`, `JetBrains Mono`) loaded in `functions.php` |
| **Hero Lead Story** | Full Support | Powered by `WP_Query` fetching the newest published post |
| **Chronological Archive** | Full Support | Powered by the standard WordPress Loop (`have_posts()`, `the_post()`) |
| **Individual Post Reader** | Full Support | Handled by `single.php` with 720px reading measure and drop-caps |
| **Search Functionality** | Full Support | Connects to WordPress native search (`?s=query`) or client-side filter |
| **Email Subscriptions** | Full Support | Compatible with Mailchimp for WP, Jetpack Subscriptions, or standard POST |
| **Contact Modal** | Full Support | Compatible with Contact Form 7, WPForms, or `admin-post.php` |
| **Theme / Atmosphere Modes** | Full Support | Client-side CSS custom properties switch (`Day`, `Sepia`, `Dark`) stored in `localStorage` |
