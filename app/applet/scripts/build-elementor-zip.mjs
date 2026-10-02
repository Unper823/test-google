import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

const outDir = '/app/applet/public/elementor-kit';
fs.mkdirSync(outDir, { recursive: true });

// Read elementorTemplates.ts and parse the exported templates
const srcContent = fs.readFileSync('/app/applet/src/data/elementorTemplates.ts', 'utf8');

const zip = new JSZip();
const folder = zip.folder('atelier-elementor-kit');

// Extract all ELEMENTOR_*_TEMPLATE objects
const templateMatches = srcContent.matchAll(/export const (ELEMENTOR_[A-Z0-9_]+): ElementorTemplateFile = {[\s\S]*?id:\s*'([^']+)'[\s\S]*?filename:\s*'([^']+)'[\s\S]*?(?:jsonContent:\s*(JSON\.stringify\([\s\S]*?\n  \}, null, 2\)|\`[\s\S]*?\`))/g);

let count = 0;
for (const match of templateMatches) {
  const filename = match[3];
  const rawContent = match[4];
  let content = '';

  if (rawContent.startsWith('JSON.stringify(')) {
    const jsonStrMatch = rawContent.slice(15, rawContent.lastIndexOf(', null, 2)'));
    try {
      const obj = Function(`"use strict"; return (${jsonStrMatch});`)();
      content = JSON.stringify(obj, null, 2);
    } catch {
      content = jsonStrMatch;
    }
  } else if (rawContent.startsWith('`')) {
    content = rawContent.slice(1, -1);
  }

  if (content && filename) {
    fs.writeFileSync(path.join(outDir, filename), content, 'utf8');
    folder.file(filename, content);
    count++;
  }
}

const readme = `ATELIER EDITORIAL — ELEMENTOR PRO & FREE TEMPLATE KIT
=====================================================
Curated for: Waleed Alharbi (Sole Author & Curator)
Palette: #FAF8F5 (Canvas), #1C1917 (Obsidian Text), #E7E5E4 (Dividers)
Fonts: Newsreader (Serif Display), Plus Jakarta Sans (Body), JetBrains Mono (Ledger)

FILES INCLUDED IN THIS KIT:
1. atelier-site-settings-kit.json - Global typography, palette, and container widths.
2. atelier-header-elementor.json - Global sticky header with branding & navigation.
3. atelier-footer-elementor.json - Global footer with 3-column publication directory.
4. atelier-home-elementor.json - Full editorial home page (lead story, posts grid).
5. atelier-single-post-elementor.json - Single post monograph reader with drop caps.
6. atelier-archive-elementor.json - Archival ledger with search & pagination.
7. atelier-about-elementor.json - Author manifesto, statistics, and editorial pillars.
8. atelier-contact-elementor.json - Letters to the desk inquiry form & FAQ.
9. atelier-elementor-custom-css.css - Custom CSS for drop caps and optical measures.

HOW TO IMPORT INTO WORDPRESS:
1. Open your WordPress Admin.
2. Go to: Templates -> Saved Templates -> Import Templates.
3. Choose any of the JSON files from this kit to import.
4. For Theme Builder (Pro), go to: Templates -> Theme Builder -> Header / Footer / Single Post.
5. Set Display Conditions:
   - Header: Entire Site
   - Footer: Entire Site
   - Single Post: All Posts
   - Archive: All Archives
6. Paste the contents of atelier-elementor-custom-css.css into:
   Elementor -> Site Settings -> Custom CSS.
`;

fs.writeFileSync(path.join(outDir, 'README.txt'), readme, 'utf8');
folder.file('README.txt', readme);

const buf = await zip.generateAsync({ type: 'nodebuffer' });
fs.writeFileSync('/app/applet/public/atelier-elementor-kit.zip', buf);
console.log(`Elementor Kit zip successfully created! Files: ${count}, Size: ${buf.length} bytes`);
