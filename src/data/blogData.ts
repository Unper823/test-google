import { Article, Author } from '../types/blog';
import leadHeroImg from '../assets/images/editorial_lead_hero_1790188809339.jpg';
import typographyImg from '../assets/images/article_typography_design_1790188823367.jpg';
import workspaceImg from '../assets/images/article_creative_workspace_1790188835408.jpg';
import authorImg from '../assets/images/author_portrait_studio_1790188847154.jpg';

export const PRIMARY_AUTHOR: Author = {
  name: 'Waleed Alharbi',
  role: 'Editor-in-Chief & Sole Author',
  avatar: authorImg,
  bio: 'Founder and principal author of Atelier. Writes at the intersection of spatial composition, digital typography, and humane software craftsmanship.',
  location: 'Copenhagen & Zurich',
  email: 'waleedalharbi58@gmail.com',
};

export const OWNER_SECURITY_CONFIG = {
  ownerName: 'Waleed Alharbi',
  ownerEmail: 'waleedalharbi58@gmail.com',
  ownerRole: 'Editor-in-Chief & Sole Author',
  defaultPasskey: 'waleed2026',
};

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-001',
    slug: 'the-architecture-of-light-spatial-cadence',
    title: 'The Architecture of Light: Designing Spatial Cadence in Digital Mediums',
    subtitle: 'On structural void, quiet contrast, and the enduring influence of Scandinavian mid-century forms on interfaces.',
    excerpt: 'How treating digital screens not as illuminated canvases, but as spatial chambers with natural illumination curves, transforms digital reading into an unhurried sensory experience.',
    content: `During the mid-century transition, light became recognized not merely as an illuminant, but as an active structural element defining volumetric boundaries. When Alvar Aalto sculpted the skylights of the Viipuri Library, he was not searching for peak lumens; he was orchestrating how photons gently cascade down birch balustrades to preserve focus without ocular fatigue.

In digital editorial design, we frequently commit the error of maximum luminance. We flood viewports with relentless white light, saturated accent ribbons, and animated telemetry tickers. We treat the browser as a neon billboard competing for involuntary attention, rather than a sanctuary where ideas settle and expand.

When we introduce quiet limestone tones, measured typographic hierarchies, and organic negative space, the viewport ceases to vibrate. The reader's breathing decelerates. Sentences are granted the room to echo across the page.

Spatial cadence is not the absence of density; it is the deliberate pacing of visual rest. Just as a musical composition requires rests to articulate melody, a long-form monograph demands generous margins, disciplined hairlines, and typography that respects the ocular saccade.`,
    pullQuote: 'Light is not merely an illuminant, but an active structural element that defines volumetric boundaries and emotional resonance.',
    category: 'Architecture',
    publishedAt: 'Sep 21, 2026',
    dateIso: '2026-09-21',
    readTime: '6 min read',
    featured: true,
    isNew: true,
    coverImage: leadHeroImg,
    coverCaption: 'Figure 1. Natural light study in Nordic architectural studio, capturing diffuse luminance across oak surfaces.',
    author: PRIMARY_AUTHOR,
    tags: ['Spatial Design', 'Editorial', 'Scandinavian Modernism', 'Lighting'],
    likes: 142,
    views: 1840,
    bookmarksCount: 68,
  },
  {
    id: 'art-002',
    slug: 'renaissance-of-the-reading-column',
    title: 'The Renaissance of the Reading Column: Why Width and Measure Still Govern Meaning',
    subtitle: 'Reclaiming the classical 65-character line in an era of fluid-width chaos and infinite viewport sprawl.',
    excerpt: 'An investigation into typographic measure, optical saccades, and why the timeless principles of Jan Tschichold remain indispensable for contemporary digital publications.',
    content: `When Jan Tschichold published Die Neue Typographie in 1928, he articulated a law that optical science has since repeatedly verified: the human eye experiences cognitive fatigue when tracking lines exceeding seventy-five characters. Beyond this threshold, the return journey to find the subsequent line begins to falter.

Yet modern web frameworks frequently stretch paragraphs across expansive 1440-pixel viewports without constraint. Sentences become endless linear highways, forcing the neck and eyes to sweep horizontally in an unnatural mechanical patrol.

By anchoring reading containers to a disciplined 65 to 72 character measure (approximately 680 to 720 pixels), we restore natural cadence. Coupled with an optical line height between 1.7 and 1.8, paragraphs feel less like dense text bricks and more like comfortable spoken thoughts.

Furthermore, we must liberate our layouts from the ubiquitous candy-colored pill badges. Metadata—dates, categories, read times—belongs in quiet typographic prose, divided by subtle midpoint dots rather than bordered containers that shout for unwarranted salience.`,
    pullQuote: 'When we constrain line measure, we are not restricting space—we are protecting the cognitive sanctuary of the reader.',
    category: 'Typography',
    publishedAt: 'Sep 18, 2026',
    dateIso: '2026-09-18',
    readTime: '5 min read',
    featured: false,
    isNew: true,
    coverImage: typographyImg,
    coverCaption: 'Figure 2. Swiss grid studies and typographic specimens evaluated on warm paper stocks.',
    author: PRIMARY_AUTHOR,
    tags: ['Typography', 'Grid Systems', 'Book Design', 'Jan Tschichold'],
    likes: 98,
    views: 1220,
    bookmarksCount: 45,
  },
  {
    id: 'art-003',
    slug: 'the-creative-workspace-as-monastery',
    title: 'The Workspace as Monastery: Spatial Discipline for Sustained Deep Synthesis',
    subtitle: 'Physical environment, tactile tools, and the deliberate curation of analog resistance in creative research.',
    excerpt: 'Why physical surfaces, dedicated reading nooks, and tactile constraints remain the sharpest defense against digital attention fragmentation.',
    content: `To enter a monastic scriptorium was to cross a deliberate cognitive threshold. There were no competing visual interruptions, no peripheral notifications, no ambient chatter. Every tool—the scraping knife, the horn inkpot, the ruling lead—had an exact, unvarying placement.

In modern creative practice, our desks frequently resemble transit stations: multiple monitors blinking with synchronous channels, charging cords coiled in disorder, books stacked precariously beside cold coffee.

When we strip the workspace down to tactile fundamentals—a single notebook with archival Japanese paper, a fountain pen with pigmented sepia ink, and a single screen dedicated to a single document—the quality of synthesis undergoes a profound phase change.

Analog friction is not an indulgence or a nostalgic fetish. It is a pacing mechanism. The physical act of turning a printed sheet or sketching a structural hierarchy with charcoal introduces micro-delays that permit ideas to ferment before they are crystallized into prose.`,
    pullQuote: 'Physical friction is not an impediment to thought; it is the ballast that prevents our attention from drifting into vapor.',
    category: 'Creative Process',
    publishedAt: 'Sep 14, 2026',
    dateIso: '2026-09-14',
    readTime: '7 min read',
    featured: false,
    isNew: true,
    coverImage: workspaceImg,
    coverCaption: 'Figure 3. Natural shadow casting over an archival drafting studio in Copenhagen.',
    author: PRIMARY_AUTHOR,
    tags: ['Studio Practice', 'Deep Work', 'Analog Tools', 'Cognitive Focus'],
    likes: 187,
    views: 2410,
    bookmarksCount: 92,
  },
  {
    id: 'art-004',
    slug: 'design-systems-as-living-literature',
    title: 'Design Systems as Living Literature: Beyond Component Token Inventories',
    subtitle: 'Why the most durable design languages read like cohesive anthologies rather than mechanical software parts catalogs.',
    excerpt: 'Reframing design systems as editorial philosophy. How shared narrative principles, linguistic rhythm, and moral clarity prevent visual drift.',
    content: `Most corporate design systems resemble industrial parts catalogs: hundreds of button variants, radio states, and hex codes organized in rigid tabular spreadsheets. They answer the question of "what can be built," but completely abdicate the question of "what deserves to be expressed."

When Massimo Vignelli designed the Unigrid system for the National Park Service in 1977, he didn't merely provide dimensions; he provided a visual syntax that bound together volcanoes, historic battlefields, and fragile desert ecosystems under one dignified voice.

A design system should be treated as living literature. It must possess an overarching aesthetic thesis, an unshakeable editorial stance, and a clear moral boundary regarding what visual noise will never be tolerated.

When engineers and designers share a literary vocabulary—speaking of rhythm, focal gravity, and typographic cadence rather than mere padding tokens—the resulting digital products feel unified by a single guiding intellect.`,
    pullQuote: 'A great design system does not tell you what buttons you can press; it tells you what kind of culture you are building.',
    category: 'Design Systems',
    publishedAt: 'Aug 29, 2026',
    dateIso: '2026-08-29',
    readTime: '8 min read',
    featured: false,
    isNew: false,
    coverImage: typographyImg,
    coverCaption: 'Figure 4. Unigrid organizational layouts and structured visual guidelines.',
    author: PRIMARY_AUTHOR,
    tags: ['Design Systems', 'Vignelli', 'Visual Syntax', 'Philosophy'],
    likes: 215,
    views: 3100,
    bookmarksCount: 114,
  },
  {
    id: 'art-005',
    slug: 'humane-interfaces-and-the-speed-of-thought',
    title: 'Humane Interfaces and the Speed of Thought: The Jef Raskin Legacy',
    subtitle: 'Re-evaluating the foundational tenets of The Humane Interface in an age of generative conversational overload.',
    excerpt: 'Looking back at Jef Raskin’s vision of modeless interaction, cognitive locus of attention, and why simple transparent tools outperform bloated assistants.',
    content: `In 2000, Jef Raskin published The Humane Interface, laying down a rigorous cognitive architecture for computing. Central to Raskin's thesis was the concept of the locus of attention: human consciousness can focus intently on only one object or idea at any given millisecond.

Whenever software forces a user to toggle modes, navigate nested dialogs, or ponder which dropdown to expand, it forcibly fractures that fragile locus.

Today, interfaces are increasingly cluttered with unsolicited conversational prompts, floating helper badges, and artificial intelligence tickers that insert themselves between the human creator and their raw material.

The most humane software is transparent. It recedes into the background. It respects the user's intelligence by offering immediate, predictable affordances without demanding applause for its own cleverness.`,
    pullQuote: 'The highest compliment one can pay an interface is that during hours of intense creation, one never once noticed it was there.',
    category: 'Technology & Culture',
    publishedAt: 'Aug 12, 2026',
    dateIso: '2026-08-12',
    readTime: '6 min read',
    featured: false,
    isNew: false,
    coverImage: leadHeroImg,
    coverCaption: 'Figure 5. Architectural simplicity and uninterrupted lines of sight.',
    author: PRIMARY_AUTHOR,
    tags: ['Humane Technology', 'Jef Raskin', 'Cognitive Ergonomics', 'Simplicity'],
    likes: 164,
    views: 2180,
    bookmarksCount: 78,
  },
  {
    id: 'art-006',
    slug: 'the-dignity-of-archival-paper',
    title: 'The Dignity of Archival Paper: Material Lessons for Long-Term Digital Preservation',
    subtitle: 'Examining rag paper, iron gall ink, and how digital archives can resist link rot and ephemeral degradation.',
    excerpt: 'What five hundred years of European bookmaking can teach web craftspeople about persistence, permanent URLs, and lightweight formats.',
    content: `Stand before an incunabulum printed in Venice in 1475, and you are immediately struck by a sensory paradox: the rag paper made from linen remnants is more supple, more vibrant, and more chemically stable than a paper manufactured in 1982.

In contrast, our digital artifacts are notoriously fragile. Frameworks break every eighteen months. Dependencies deprecate. Domain names expire. Millions of thoughtful essays published between 2005 and 2015 have simply evaporated into digital ether.

If we wish our writings to endure, we must adopt an archival mentality. This means clean semantic HTML that renders gracefully without script dependencies, lightweight static blueprints that can be archived into a single file, and an architectural humility that values durability over fleeting visual trends.`,
    pullQuote: 'True luxury in technology is not instant ephemeral novelty; it is quiet permanence that survives across decades.',
    category: 'Architecture',
    publishedAt: 'Jul 24, 2026',
    dateIso: '2026-07-24',
    readTime: '9 min read',
    featured: false,
    isNew: false,
    coverImage: workspaceImg,
    coverCaption: 'Figure 6. Archival storage bindings and hand-bound folio prototypes.',
    author: PRIMARY_AUTHOR,
    tags: ['Preservation', 'Paper Craft', 'Web History', 'Archival Standards'],
    likes: 192,
    views: 2750,
    bookmarksCount: 88,
  },
  {
    id: 'art-007',
    slug: 'manifesto-of-the-unhurried-web',
    title: 'Manifesto of the Unhurried Web: A Counter-Offensive Against Infinite Feeds',
    subtitle: 'Nine principles for building digital reading environments that foster reflection rather than compulsive engagement.',
    excerpt: 'A structured blueprint for slow publishing, discrete publication boundaries, and replacing algorithm-driven feeds with curated editorial editions.',
    content: `The modern internet was engineered around the hydraulic logic of the slot machine: continuous variable rewards, pull-to-refresh mechanics, and algorithmic recommendation loops engineered to extract finite human consciousness.

The Unhurried Web proposes an alternative paradigm:
1. Every publication has a defined ending. When you reach the bottom of the page, there is silence, not an automated endless reel.
2. Form follows contemplation. Typography is sized for effortless reading, not rapid skimming.
3. No manipulative urgency badges, no simulated countdown timers, no intrusive popups that block the text after three seconds.
4. Open accessibility: ideas should be readable on modest connections without multi-megabyte script payloads.

When we build digital spaces with these values, we invite readers to engage with nuance, patience, and reciprocal respect.`,
    pullQuote: 'A good publication knows when to end, granting the reader the dignity of completion.',
    category: 'Creative Process',
    publishedAt: 'Jul 02, 2026',
    dateIso: '2026-07-02',
    readTime: '5 min read',
    featured: false,
    isNew: false,
    coverImage: typographyImg,
    coverCaption: 'Figure 7. Hand-set letterpress forms and typographic galley proofs.',
    author: PRIMARY_AUTHOR,
    tags: ['Slow Web', 'Editorial Manifesto', 'Publishing', 'Digital Wellbeing'],
    likes: 310,
    views: 4200,
    bookmarksCount: 165,
  },
];

export const BLUEPRINT_SPEC = {
  version: '2.4.0',
  name: 'Atelier Editorial Blog Blueprint',
  architecture: {
    corePages: [
      {
        id: 'home',
        name: 'Home / Front Page',
        purpose: 'Showcases new articles with editorial hierarchy (Lead story marquee, latest articles grid, columnist dispatch, newsletter capture).',
        keyComponents: ['LeadStoryHero', 'LatestArticlesGrid', 'EditorsColumn', 'NewsletterSection'],
      },
      {
        id: 'articles',
        name: 'Articles Content / Complete Archive',
        purpose: 'Searchable, sorted archive of all articles with search index, sorting, and grid/list view toggles.',
        keyComponents: ['SearchAndSortControls', 'ArticleArchiveGrid', 'ArticleReaderModal'],
      },
      {
        id: 'about',
        name: 'About / Editorial Profile',
        purpose: 'Deep author and publication biography, 4-pillar editorial manifesto, publishing statistics, and colophon stack.',
        keyComponents: ['AuthorHeroPortrait', 'PublicationStatement', 'EditorialPillars', 'PublishingStatsGrid', 'Colophon'],
      },
      {
        id: 'contact',
        name: 'Contact / Correspondence',
        purpose: 'Thoughtful inquiry intake form, direct editorial contact channels, office location details, and comprehensive reader FAQ.',
        keyComponents: ['InquiryForm', 'ContactChannels', 'CuratorialFaqAccordion'],
      },
    ],
    designTokens: {
      palette: {
        canvas: '#FAF8F5 (Warm Alabaster Canvas)',
        surface: '#FFFFFF (Pure Paper Surface)',
        border: '#E7E5E4 (Delicate Hairline Stone-200)',
        primaryText: '#1C1917 (Antique Ink Stone-900)',
        mutedText: '#78716C (Warm Stone-500)',
        accent: '#9A3412 (Editorial Terracotta)',
      },
      typography: {
        headings: 'Newsreader / Cormorant Garamond (Editorial Serif)',
        body: 'Plus Jakarta Sans (65–72ch reading measure, 1.75 line-height)',
        metadata: 'JetBrains Mono / Plus Jakarta Sans (Unboxed text with · dividers)',
      },
    },
    googleAiStudioPrompts: [
      {
        title: 'Connect Firebase Firestore for Dynamic CMS',
        prompt: 'Transform this blog blueprint to persist articles and subscriber emails to Firebase Firestore. Add an authenticated admin dashboard where I can write, edit, and publish new markdown essays directly with preview mode.',
      },
      {
        title: 'Generate Full AI Articles with Gemini API',
        prompt: 'Integrate the @google/genai SDK to add an AI writing assistant modal: enter a topic or rough notes, and have Gemini draft a deep long-form editorial essay matching the voice, structure, and pull-quote style of Elena Vance.',
      },
      {
        title: 'Add Reader Comments & Social Discussions',
        prompt: 'Add an interactive comments section at the bottom of the article reader with threaded replies, markdown formatting, upvoting, and moderation filters.',
      },
      {
        title: 'Dark / Night Reading Mode',
        prompt: 'Add an optical dark mode toggle that switches the canvas to deep obsidian (#121110) with warm antique cream typography (#E7E5E4) and soft 1px charcoal borders, respecting prefers-color-scheme.',
      },
    ],
  },
};
