/**
 * Atelier Editorial — Interactive Engine
 * Pure TypeScript & JavaScript for the editorial monographs publication
 * Curated by Side Atelier
 */

interface Monograph {
  id: string;
  title: string;
  subtitle: string;
  kicker: string;
  date: string;
  readingTime: number;
  topic: string;
  image: string;
  excerpt: string;
  content: string;
  footnotes?: string[];
}

export const MONOGRAPHS: Monograph[] = [
  {
    id: 'restraint-in-typography',
    title: 'The Architecture of Restraint: Typographical Composure in a Noisy Web',
    subtitle: 'Why sustained reading requires the deliberate removal of algorithmic friction, category clutter, and cognitive fragmentation.',
    kicker: 'Lead Story • Featured Release',
    date: 'October 2, 2026',
    readingTime: 8,
    topic: 'typography',
    image: '/images/editorial_lead_hero_1790188809339.jpg',
    excerpt: 'An investigation into why modern web design abandoned the sanctity of the printed book, and how we can reclaim cognitive composure through disciplined proportion, Newsreader serifs, and the 65-character measure.',
    content: `
      <p>When Johannes Gutenberg set the forty-two line Bible at Mainz, the primary technical crisis was not how quickly letters could be stamped across calfskin vellum, but how harmoniously they would hold the eye across centuries. The measure of each line was neither arbitrary nor decorative; it was physiologically bound to human saccadic ocular movements—the quiet arc of vision travelling across forty-five to sixty-five characters before returning without exhaustion to the subsequent register.</p>

      <p>In our contemporary digital ecosystem, this hard-won physiological dignity has been violently abandoned. The contemporary webpage is rarely designed for reading; it is designed for extraction. It vibrates with sticky navigational appendages, tracking beacons, algorithmic recommendations, and arbitrary category taxonomies that demand immediate classification before a single paragraph has been absorbed.</p>

      <blockquote>
        “The highest virtue of an essay is not velocity, but resonance. Slow reading is not a luxury, but the deliberate reclamation of cognitive sovereignty.”
        <cite>— Side Atelier, Editorial Curator</cite>
      </blockquote>

      <h2>The Pathology of Infinite Categorization</h2>
      <p>Consider the modern corporate blog or digital magazine. Every thought is immediately subdivided into tags, taxonomies, hashtags, and promotional clusters. But genuine critical inquiry refuses to reside comfortably in a dropdown menu. When Montaigne wrote his <em>Essais</em> in the seclusion of his Périgord tower, he did not tag them #philosophy, #lifestyle, or #stoicism. The essay was an undivided territory—an authorial monograph whose sole boundary was the coherence of the author's mind.</p>

      <p>Atelier was established as a deliberate architectural protest against this fragmentation. By stripping away keywords, tags, and advertising networks, the reading surface is returned to its rightful classical role: a calm white folio where author and reader meet without third-party distraction.</p>

      <h2>The Spatial Ratio of the 65-Character Measure</h2>
      <p>Typographers from Jan Tschichold to Robert Bringhurst have maintained that the eye falters when a line of continuous prose exceeds seventy-five characters. If the measure is too wide, the reader expends cognitive energy simply locating the beginning of the next line; if too narrow, the rhythm of syntax is shattered by premature hyphens and unnatural breaks.</p>

      <p>In Atelier, prose containers are locked strictly to 720 pixels—rendering approximately sixty-five characters per line in Newsreader at sixteen to eighteen points. This optical baseline ensures that whether a monograph is studied on a high-density studio display in Zurich or a portable slate on a train through Scandinavia, the rhythm of thought remains unruffled.</p>
    `,
  },
  {
    id: '65-character-measure',
    title: 'On the 65-Character Measure & Optical Cadence',
    subtitle: 'The physiological science behind line lengths, ocular saccades, and sustained reading.',
    kicker: 'Typographical Science',
    date: 'September 24, 2026',
    readingTime: 6,
    topic: 'typography',
    image: '/images/article_typography_design_1790188823367.jpg',
    excerpt: 'Examining why line length dictates comprehension, how font leading influences psychological fatigue, and why optical margins must remain sacred.',
    content: `
      <p>The human eye does not glide seamlessly over lines of text; it moves in sudden, microscopic leaps termed saccades, pausing briefly at fixations where cognitive comprehension takes place. When the typographic measure is expanded indiscriminately across wide monitor displays, the ocular muscles must work twice as hard on the return sweep.</p>

      <p>By enforcing an unyielding 65-character rule, Atelier ensures that text flows at the natural cadence of speech. Reading ceases to feel like scanning a spreadsheet; it transforms into an immersive spatial meditation.</p>

      <blockquote>
        “A line of text should be long enough to contain an argument, but short enough to never lose the reader’s eye on the return journey.”
      </blockquote>

      <h2>Leading as Cognitive Breathing Room</h2>
      <p>Proportion between font size and line height (leading) is the typographical equivalent of phrasing in chamber music. When lines are crowded, text looks dense and intimidating; when lines are excessively distant, the paragraph breaks into disjointed stripes. A 1.85 line-height ratio in proportional serifs produces the optimal breathing space for reflective reading.</p>
    `,
  },
  {
    id: 'monograph-as-sanctuary',
    title: 'The Monograph as Sanctuary: Resisting Algorithmic Velocity',
    subtitle: 'Long-form writing as an intentional refuge from real-time feeds and snackable content.',
    kicker: 'Cognitive Space',
    date: 'September 15, 2026',
    readingTime: 10,
    topic: 'cognitive',
    image: '/images/article_creative_workspace_1790188835408.jpg',
    excerpt: 'How real-time notification loops eroded deep work, and why the singular monograph remains the most powerful format for complex, durable thought.',
    content: `
      <p>We are currently living through what historians may look back upon as the Great Distraction. When information is packaged into ninety-second video clips and 280-character outbursts, the capacity to hold an intricate thesis in one's mind for forty-five uninterrupted minutes begins to wither.</p>

      <p>A monograph is distinct from a casual blog post. It is an unhurried, exhaustive examination of a single premise. It demands that the author spend weeks pruning irrelevant digressions, and asks the reader to set aside twenty minutes of quiet stillness. In an era that celebrates haste, stillness is an act of defiance.</p>

      <blockquote>
        “Sanctuary is not a physical building; it is a boundary drawn around one’s attention.”
      </blockquote>

      <h2>The Fortnightly Discipline</h2>
      <p>Rather than publishing daily snippets to satisfy search engine crawlers, Atelier adheres strictly to a fortnightly publishing rhythm. This schedule provides the necessary silence for ideas to be drafted, critiqued, abandoned, and reconstructed before ever touching the public eye.</p>
    `,
  },
  {
    id: 'nordic-light-swiss-grids',
    title: 'Nordic Light, Swiss Grids: A Spatial Philosophy of the Page',
    subtitle: 'Translating the architectural minimalism of Copenhagen and Zurich into digital interfaces.',
    kicker: 'Architectural Prose',
    date: 'September 4, 2026',
    readingTime: 7,
    topic: 'architecture',
    image: '/images/editorial_lead_hero_1790188809339.jpg',
    excerpt: 'Lessons drawn from Scandinavian window embrasures, Swiss typographic geometry, and the intentional use of warm, unbleached negative space.',
    content: `
      <p>In Nordic architecture, light is not treated as a passive byproduct of a lightbulb; it is an invaluable material, captured through deep window embrasures and reflected across pale lime-washed oak. Similarly, on the editorial page, negative space is not the absence of content—it is the very structure that allows the words to resonate.</p>

      <p>Swiss graphic design in the tradition of Josef Müller-Brockmann taught us that a grid does not constrain creativity; it liberates it by establishing predictable mathematical harmonies. When a reader knows exactly where to look, their attention shifts from decoding layout to understanding substance.</p>
    `,
  },
  {
    id: 'death-of-category',
    title: 'The Death of the Category: Why Modern Portals Stifle Thought',
    subtitle: 'The liberation of author-driven ledgers from tags, taxonomies, and marketing silos.',
    kicker: 'Digital Ergonomics',
    date: 'August 28, 2026',
    readingTime: 5,
    topic: 'ergonomics',
    image: '/images/article_typography_design_1790188823367.jpg',
    excerpt: 'Why forcing essays into pre-defined categories flattens nuance, and how chronological ledgers cultivate richer, more serendipitous intellectual journeys.',
    content: `
      <p>When you walk into a traditional artist’s atelier or an architect’s library, you do not find drawings labeled with digital tags like #minimalism or #concrete. You find a chronological succession of sketchbooks—a ledger reflecting the organic evolution of a single craftsman over time.</p>

      <p>Atelier’s total rejection of category clutter is both aesthetic and philosophical. An essay that touches upon typography, Scandinavian literature, and software ethics should not be chopped into three arbitrary categories. It belongs in the unbroken chronological folio of the publication.</p>
    `,
  },
  {
    id: 'copenhagen-desk-notes',
    title: 'Notes from the Copenhagen Desk: In Praise of Fortnightly Writing',
    subtitle: 'Reflections on craftsmanship, fountain pens, and the physical ergonomics of long-form drafting.',
    kicker: 'Curatorial Dossier',
    date: 'August 14, 2026',
    readingTime: 9,
    topic: 'cognitive',
    image: '/images/author_portrait_studio_1790188847154.jpg',
    excerpt: 'A glimpse into the daily rituals, notebooks, and drafting practices behind Atelier’s monograph publication series.',
    content: `
      <p>Early morning in Copenhagen has a particular atmospheric clarity. Before the city’s bicycles fill the cobblestones of the inner canal, the only sound is the quiet scratching of a steel nib against unbleached Japanese cotton paper.</p>

      <p>Every essay published in Atelier begins on physical paper. Writing by hand forces an economy of expression; you cannot easily cut and paste eighty words, so you are forced to weigh the cadence of every sentence before committing ink to fiber. Only when an argument has survived two rounds of handwritten revision is it transferred into the digital monograph ledger.</p>
    `,
  },
];

// App State
let activeTopicFilter = 'all';
let activeSearchQuery = '';
let activeThemeMode: 'canvas' | 'sepia' | 'dark' = 'canvas';
let readerFontSize = 17; // px

// Initialize DOM elements and event handlers
document.addEventListener('DOMContentLoaded', () => {
  renderLeadHero();
  renderMonographGrid();
  setupEventListeners();
  setupScrollSpy();
  handleUrlHashRouting();
});

function renderLeadHero(): void {
  const lead = MONOGRAPHS[0];
  const heroContainer = document.getElementById('hero-lead-mount');
  if (!heroContainer) return;

  heroContainer.innerHTML = `
    <div class="hero-lead-grid">
      <div class="hero-lead-content">
        <div class="hero-lead-kicker">
          <span class="kicker-pill">${lead.kicker}</span>
          <span class="kicker-date">${lead.date}</span>
        </div>
        <h1 class="hero-lead-title">
          <a href="#read/${lead.id}" onclick="event.preventDefault(); window.openMonograph('${lead.id}');">
            ${lead.title}
          </a>
        </h1>
        <p class="hero-lead-excerpt">${lead.excerpt}</p>
        <div class="hero-lead-footer">
          <div class="hero-author-badge">
            <div class="author-avatar-mini">S</div>
            <div class="author-meta-text">
              <span class="author-name">Side Atelier</span>
              <span class="author-role">${lead.readingTime} min read &bull; Sole Curator</span>
            </div>
          </div>
          <div class="hero-buttons-group">
            <button type="button" class="hero-cta-button" onclick="window.openMonograph('${lead.id}')">
              <span>Read Monograph</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <a href="#archive" class="hero-secondary-btn">
              <span>Browse Ledger</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="hero-lead-media" onclick="window.openMonograph('${lead.id}')" title="Click to read featured monograph">
        <img src="${lead.image}" alt="${lead.title}" class="hero-media-img" loading="eager" />
        <div class="hero-media-overlay-badge">
          <span>Read Monograph</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
      </div>
    </div>
  `;
}

function renderMonographGrid(): void {
  const gridContainer = document.getElementById('monographs-grid-mount');
  const countIndicator = document.getElementById('monographs-count-badge');
  if (!gridContainer) return;

  const filtered = MONOGRAPHS.filter((m) => {
    const matchesTopic = activeTopicFilter === 'all' || m.topic === activeTopicFilter;
    const query = activeSearchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      m.title.toLowerCase().includes(query) ||
      m.excerpt.toLowerCase().includes(query) ||
      m.subtitle.toLowerCase().includes(query);
    return matchesTopic && matchesQuery;
  });

  if (countIndicator) {
    countIndicator.textContent = `${filtered.length} Archival Publication${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background-color: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem;">No Monographs Found</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">No essays correspond with the query "${activeSearchQuery}".</p>
        <button class="btn-filter-pill active" style="margin-top: 1rem;" onclick="window.resetSearchInput()">Clear Search &amp; Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered
    .map(
      (m) => `
    <article class="monograph-card" onclick="window.openMonograph('${m.id}')" tabindex="0" role="button" aria-label="Read monograph ${m.title}">
      <div class="card-media-wrapper">
        <img src="${m.image}" alt="${m.title}" class="card-thumbnail-img" loading="lazy" />
        <span class="card-readtime-badge">${m.readingTime} min read</span>
      </div>
      <div class="card-content-wrapper">
        <div class="card-unboxed-meta">
          <span>${m.date}</span>
          <span>&bull;</span>
          <span>${m.topic.toUpperCase()}</span>
        </div>
        <h3 class="card-monograph-title">${m.title}</h3>
        <p class="card-monograph-excerpt">${m.excerpt}</p>
        <div class="card-monograph-footer">
          <span class="card-curator">Curated by Side Atelier</span>
          <button type="button" class="card-action-btn" aria-label="Read ${m.title}">
            <span>Read Monograph</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    </article>
  `
    )
    .join('');
}

function setupEventListeners(): void {
  // Search input
  const searchInput = document.getElementById('archive-search-input') as HTMLInputElement | null;
  const clearBtn = document.getElementById('btn-clear-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = (e.target as HTMLInputElement).value;
      if (clearBtn) {
        clearBtn.style.display = activeSearchQuery ? 'flex' : 'none';
      }
      renderMonographGrid();
    });
  }

  // Filter pills
  const filterPills = document.querySelectorAll<HTMLButtonElement>('.btn-filter-pill');
  filterPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterPills.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeTopicFilter = btn.dataset.topic || 'all';
      renderMonographGrid();
    });
  });

  // Modal scroll progress bar
  const readerOverlay = document.getElementById('reader-modal-overlay');
  if (readerOverlay) {
    readerOverlay.addEventListener('scroll', () => {
      const scrollY = readerOverlay.scrollTop;
      const scrollHeight = readerOverlay.scrollHeight - readerOverlay.clientHeight;
      const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
      const progressBar = document.getElementById('reading-progress-bar');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    });
  }

  // Window scroll for floating scroll-to-top button
  const floatingTopBtn = document.getElementById('btn-floating-top');
  window.addEventListener('scroll', () => {
    if (floatingTopBtn) {
      if (window.scrollY > 400) {
        floatingTopBtn.classList.add('is-visible');
      } else {
        floatingTopBtn.classList.remove('is-visible');
      }
    }
  });

  // Keyboard escape handler
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeMonograph();
      window.closeContactModal();
      window.closeMobileMenu();
    }
  });

  // Postal form submit handler
  const postalForm = document.getElementById('postal-subscribe-form') as HTMLFormElement | null;
  if (postalForm) {
    postalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = postalForm.querySelector<HTMLInputElement>('input[type="email"]');
      if (input && input.value) {
        showToast(`Subscribed! The Fortnightly Ledger will be dispatched to ${input.value}`);
        input.value = '';
      }
    });
  }

  // Contact form submit handler
  const contactForm = document.getElementById('letters-contact-form') as HTMLFormElement | null;
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Your letter has been transmitted to Side Atelier’s desk.');
      window.closeContactModal();
      contactForm.reset();
    });
  }

  // Reader Reflection / Comment form submit handler
  const commentForm = document.getElementById('reader-comment-form') as HTMLFormElement | null;
  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const textarea = commentForm.querySelector<HTMLTextAreaElement>('#comment-text');
      if (textarea && textarea.value.trim()) {
        const commentList = document.getElementById('reader-comment-list');
        const countBadge = document.getElementById('reader-comments-count');
        const commentText = textarea.value.trim();
        const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

        if (commentList) {
          const newLi = document.createElement('li');
          newLi.className = 'comment-body';
          newLi.innerHTML = `
            <div class="comment-meta">
              <div class="author-avatar-mini">S</div>
              <span class="comment-author"><strong class="fn">SideAtelier</strong> <span style="font-size: 0.6875rem; background: var(--bg-subtle); padding: 0.15rem 0.45rem; border-radius: 4px; margin-left: 0.25rem;">Author</span></span>
              <span class="comment-metadata"><time>${dateStr}</time></span>
            </div>
            <div class="comment-content">
              <p>${commentText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
          `;
          commentList.appendChild(newLi);

          const currentCount = commentList.querySelectorAll('.comment-body').length;
          if (countBadge) {
            countBadge.textContent = `${currentCount} Reader Reflections`;
          }
        }

        showToast('Your reflection has been posted to the monograph.');
        commentForm.reset();
      }
    });
  }
}

function setupScrollSpy(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.site-navigation .nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });
}

// Global functions attached to window for direct HTML event bindings
declare global {
  interface Window {
    openMonograph: (id: string) => void;
    closeMonograph: () => void;
    openContactModal: () => void;
    closeContactModal: () => void;
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
    scrollToSearch: () => void;
    resetSearchInput: () => void;
    cycleTheme: () => void;
    toggleTheme: (mode: 'canvas' | 'sepia' | 'dark') => void;
    adjustFontSize: (delta: number) => void;
  }
}

window.openMonograph = function (id: string): void {
  const monograph = MONOGRAPHS.find((m) => m.id === id);
  if (!monograph) return;

  const overlay = document.getElementById('reader-modal-overlay');
  const titleMount = document.getElementById('reader-title-mount');
  const subtitleMount = document.getElementById('reader-subtitle-mount');
  const dateMount = document.getElementById('reader-date-mount');
  const readTimeMount = document.getElementById('reader-time-mount');
  const imageMount = document.getElementById('reader-image-mount') as HTMLImageElement | null;
  const proseMount = document.getElementById('reader-prose-mount');
  const progressBar = document.getElementById('reading-progress-bar');

  if (titleMount) titleMount.textContent = monograph.title;
  if (subtitleMount) subtitleMount.textContent = monograph.subtitle;
  if (dateMount) dateMount.textContent = monograph.date;
  if (readTimeMount) readTimeMount.textContent = `${monograph.readingTime} min read`;
  if (imageMount) {
    imageMount.src = monograph.image;
    imageMount.alt = monograph.title;
  }
  if (proseMount) {
    proseMount.innerHTML = monograph.content;
    proseMount.style.fontSize = `${readerFontSize}px`;
  }

  if (progressBar) progressBar.style.width = '0%';
  if (overlay) {
    overlay.classList.add('is-active');
    overlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  window.location.hash = `read/${id}`;
};

window.closeMonograph = function (): void {
  const overlay = document.getElementById('reader-modal-overlay');
  if (overlay) {
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }
  if (window.location.hash.startsWith('#read/')) {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  }
};

window.openContactModal = function (): void {
  const modal = document.getElementById('contact-modal-overlay');
  if (modal) {
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeContactModal = function (): void {
  const modal = document.getElementById('contact-modal-overlay');
  if (modal) {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }
};

window.toggleMobileMenu = function (): void {
  const drawer = document.getElementById('mobile-nav-drawer');
  const btn = document.getElementById('btn-mobile-menu');
  if (!drawer || !btn) return;

  const isOpen = drawer.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', String(isOpen));
  const iconHamb = btn.querySelector('.icon-hamburger') as HTMLElement | null;
  const iconClose = btn.querySelector('.icon-close') as HTMLElement | null;
  if (iconHamb) iconHamb.style.display = isOpen ? 'none' : 'block';
  if (iconClose) iconClose.style.display = isOpen ? 'block' : 'none';
};

window.closeMobileMenu = function (): void {
  const drawer = document.getElementById('mobile-nav-drawer');
  const btn = document.getElementById('btn-mobile-menu');
  if (drawer) drawer.classList.remove('is-open');
  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
    const iconHamb = btn.querySelector('.icon-hamburger') as HTMLElement | null;
    const iconClose = btn.querySelector('.icon-close') as HTMLElement | null;
    if (iconHamb) iconHamb.style.display = 'block';
    if (iconClose) iconClose.style.display = 'none';
  }
};

window.scrollToSearch = function (): void {
  const archiveSec = document.getElementById('archive');
  const searchInput = document.getElementById('archive-search-input');
  if (archiveSec) {
    archiveSec.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      searchInput?.focus();
    }, 450);
  }
};

window.resetSearchInput = function (): void {
  activeSearchQuery = '';
  activeTopicFilter = 'all';
  const searchInput = document.getElementById('archive-search-input') as HTMLInputElement | null;
  const clearBtn = document.getElementById('btn-clear-search');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';

  const filterPills = document.querySelectorAll<HTMLButtonElement>('.btn-filter-pill');
  filterPills.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.topic === 'all');
  });

  renderMonographGrid();
};

window.adjustFontSize = function (delta: number): void {
  readerFontSize = Math.min(24, Math.max(14, readerFontSize + delta));
  const proseMount = document.getElementById('reader-prose-mount');
  if (proseMount) {
    proseMount.style.fontSize = `${readerFontSize}px`;
  }
};

window.cycleTheme = function (): void {
  if (activeThemeMode === 'canvas') {
    window.toggleTheme('sepia');
  } else if (activeThemeMode === 'sepia') {
    window.toggleTheme('dark');
  } else {
    window.toggleTheme('canvas');
  }
};

window.toggleTheme = function (mode: 'canvas' | 'sepia' | 'dark'): void {
  activeThemeMode = mode;
  document.body.classList.remove('theme-sepia', 'theme-dark');

  const themeLabel = document.getElementById('theme-btn-label');
  const btnCanvas = document.getElementById('btn-theme-canvas');
  const btnSepia = document.getElementById('btn-theme-sepia');
  const btnDark = document.getElementById('btn-theme-dark');

  [btnCanvas, btnSepia, btnDark].forEach((b) => b?.classList.remove('active'));

  if (mode === 'sepia') {
    document.body.classList.add('theme-sepia');
    if (themeLabel) themeLabel.textContent = 'Sepia';
    btnSepia?.classList.add('active');
  } else if (mode === 'dark') {
    document.body.classList.add('theme-dark');
    if (themeLabel) themeLabel.textContent = 'Noir';
    btnDark?.classList.add('active');
  } else {
    if (themeLabel) themeLabel.textContent = 'Day';
    btnCanvas?.classList.add('active');
  }

  showToast(`Atmosphere switched to ${mode.toUpperCase()}`);
};

function handleUrlHashRouting(): void {
  const hash = window.location.hash;
  if (hash.startsWith('#read/')) {
    const id = hash.replace('#read/', '');
    window.openMonograph(id);
  }
}

function showToast(message: string): void {
  let toast = document.getElementById('atelier-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'atelier-toast';
    toast.className = 'atelier-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast?.classList.remove('show');
  }, 3500);
}
