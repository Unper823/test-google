import fs from 'fs';
import JSZip from 'jszip';

const filesToSync = [
  {
    filename: 'style.css',
    description: 'Core stylesheet: editorial CSS variables, typography tokens, responsive 3-column layout, and drop caps',
    language: 'css',
    path: '/app/applet/style.css'
  },
  {
    filename: 'functions.php',
    description: 'Theme setup: Google Fonts (Newsreader, Plus Jakarta Sans, JetBrains Mono), menus, and reading-time calculator',
    language: 'php',
    path: '/app/applet/functions.php'
  },
  {
    filename: 'header.php',
    description: 'Top masthead ticker, sticky frosted header, brand wordmark, search drawer, and navigation',
    language: 'php',
    path: '/app/applet/header.php'
  },
  {
    filename: 'footer.php',
    description: '3-column publication directory, RSS 2.0 indicator, back-to-top trigger, and colophon',
    language: 'php',
    path: '/app/applet/footer.php'
  },
  {
    filename: 'index.php',
    description: 'Primary ledger: 7:5 asymmetric featured lead story, 3-column dispatches grid, curatorial quote, and postal dispatch',
    language: 'php',
    path: '/app/applet/index.php'
  },
  {
    filename: 'single.php',
    description: 'Monograph reader view: 65-character optical measure, drop cap, author card, and folio navigation',
    language: 'php',
    path: '/app/applet/single.php'
  },
  {
    filename: 'page.php',
    description: 'Editorial layout for standalone pages (About, Curator Manifesto, Colophon)',
    language: 'php',
    path: '/app/applet/page.php'
  },
  {
    filename: 'archive.php',
    description: 'Historical archive catalogue with zero-category compliance and 3-column grid',
    language: 'php',
    path: '/app/applet/archive.php'
  },
  {
    filename: 'search.php',
    description: 'Search ledger template with results query count, input form, and monograph cards',
    language: 'php',
    path: '/app/applet/search.php'
  },
  {
    filename: '404.php',
    description: 'Archival 404 screen: Folio not found notice, search form, and ledger return action',
    language: 'php',
    path: '/app/applet/404.php'
  },
  {
    filename: 'comments.php',
    description: 'Minimalist reader reflections list and submission form',
    language: 'php',
    path: '/app/applet/comments.php'
  },
  {
    filename: 'readme.txt',
    description: 'WordPress Theme documentation and installation guide',
    language: 'txt',
    path: '/app/applet/readme.txt'
  }
];

// Build updated typescript file
let tsContent = `/**
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
\n`;

for (const f of filesToSync) {
  const code = fs.readFileSync(f.path, 'utf8');
  const constName = 'WP_THEME_' + f.filename.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();
  tsContent += `export const ${constName} = ${JSON.stringify(code)};\n\n`;
}

tsContent += `export const ALL_WP_THEME_FILES: WPThemeFile[] = [\n`;
for (const f of filesToSync) {
  const constName = 'WP_THEME_' + f.filename.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();
  tsContent += `  {
    filename: '${f.filename}',
    description: '${f.description.replace(/'/g, "\\'")}',
    code: ${constName},
    language: '${f.language}',
  },\n`;
}
tsContent += `];\n`;

fs.writeFileSync('/app/applet/src/data/wordpressThemeFiles.ts', tsContent, 'utf8');
console.log('src/data/wordpressThemeFiles.ts updated successfully with', filesToSync.length, 'files!');

// Also generate the zip
const zip = new JSZip();
const folder = zip.folder('atelier-editorial');

for (const f of filesToSync) {
  const code = fs.readFileSync(f.path, 'utf8');
  folder.file(f.filename, code);
}

// Add screenshot if exists
if (fs.existsSync('/app/applet/screenshot.png')) {
  folder.file('screenshot.png', fs.readFileSync('/app/applet/screenshot.png'));
}

const buf = await zip.generateAsync({ type: 'nodebuffer' });
fs.writeFileSync('/app/applet/public/atelier-editorial-theme.zip', buf);
console.log('public/atelier-editorial-theme.zip updated! Size:', buf.length, 'bytes');
