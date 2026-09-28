import React, { useState } from 'react';
import { BLUEPRINT_SPEC } from '../data/blogData';
import {
  X,
  Compass,
  Copy,
  Check,
  Code2,
  Sparkles,
  Layers,
  Palette,
  Terminal,
  FileText,
} from 'lucide-react';

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlueprintModal: React.FC<BlueprintModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'schema' | 'prompts' | 'designTokens'>('architecture');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedKey(key);
          setTimeout(() => setCopiedKey(null), 2500);
        })
        .catch(() => {
          fallbackCopy(text, key);
        });
    } else {
      fallbackCopy(text, key);
    }
  };

  const fallbackCopy = (text: string, key: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const articleSchemaExample = `// Atelier Article Schema Blueprint
export interface Article {
  id: string;               // Unique monograph ID ('art-001')
  slug: string;             // URL-friendly identifier
  title: string;            // Main headline (Newsreader Serif)
  subtitle: string;         // Editorial deck / summary
  excerpt: string;          // Card preview text (max 180 chars)
  content: string;          // Full long-form markdown / prose
  pullQuote?: string;       // Central highlighted thesis quote
  publishedAt: string;      // Formatted date ('Sep 21, 2026')
  dateIso: string;          // ISO date for chronological sort
  readTime: string;         // Estimated duration ('6 min read')
  featured: boolean;        // Dominant hero position on Home
  isNew: boolean;           // Appears in Home "New Articles" section
  coverImage: string;       // High-res visual asset path
  coverCaption?: string;    // Figure attribution note
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  tags: string[];           // Searchable subject keywords
  likes: number;            // Reader appreciation counter
  views: number;            // Archival read count
}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh] cursor-default"
      >
        {/* Modal Header */}
        <div className="bg-[#FAF8F5] px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-stone-900 text-white rounded-lg">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-display text-lg sm:text-xl font-medium text-stone-900">
                Blog Website Blueprint & Google AI Studio Guide
              </h2>
              <span className="text-xs text-stone-500 font-mono-code block">
                Version {BLUEPRINT_SPEC.version} · Architectural Specification
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-md transition-colors cursor-pointer"
            aria-label="Close Blueprint"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-3 border-b border-stone-200 flex items-center gap-6 text-xs font-medium">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'border-b-2 border-stone-900 text-stone-900 font-semibold'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            4-Page Blueprint
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`pb-3 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'schema'
                ? 'border-b-2 border-stone-900 text-stone-900 font-semibold'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Articles Data Schema
          </button>
          <button
            onClick={() => setActiveTab('prompts')}
            className={`pb-3 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'prompts'
                ? 'border-b-2 border-stone-900 text-stone-900 font-semibold'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Google AI Studio Prompts
          </button>
          <button
            onClick={() => setActiveTab('designTokens')}
            className={`pb-3 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'designTokens'
                ? 'border-b-2 border-stone-900 text-stone-900 font-semibold'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            Design Tokens
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-stone-800">
          {/* TAB 1: 4-PAGE ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <h3 className="font-serif-display text-lg text-stone-900 mb-1">
                  How This 4-Page Blueprint Functions
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
                  Designed explicitly as a designer-grade template for Google AI Studio. The entire application runs on a shared, reactive articles store (`src/data/blogData.ts`), so any new essay added immediately updates both the Home page and the Articles Content directory.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BLUEPRINT_SPEC.architecture.corePages.map((page, index) => (
                  <div
                    key={page.id}
                    className="p-4 rounded-xl border border-stone-200 bg-white space-y-2 hover:border-stone-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-code text-stone-400 font-semibold uppercase">
                        Page 0{index + 1}
                      </span>
                      <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                        /{page.id}
                      </span>
                    </div>
                    <h4 className="font-serif-display text-lg text-stone-900">
                      {page.name}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
                      {page.purpose}
                    </p>
                    <div className="pt-2 border-t border-stone-100">
                      <span className="text-[11px] font-mono-code text-stone-400 block mb-1">
                        Key Components:
                      </span>
                      <div className="flex flex-wrap gap-1 text-[11px] font-mono-code text-stone-600">
                        {page.keyComponents.map((comp) => (
                          <span key={comp} className="bg-stone-50 px-1.5 py-0.5 rounded border border-stone-200">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: DATA SCHEMA */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif-display text-base text-stone-900">
                    TypeScript Interface & Data Model
                  </h4>
                  <p className="text-xs text-stone-500">
                    Copy this model into your project or use it with any headless CMS / Firebase database.
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(articleSchemaExample, 'schema')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer border border-stone-200"
                >
                  {copiedKey === 'schema' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied Schema</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Schema</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono-code overflow-x-auto leading-relaxed max-h-96">
                <code>{articleSchemaExample}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: GOOGLE AI STUDIO PROMPTS */}
          {activeTab === 'prompts' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600 font-sans-body">
                Ready-to-use prompts you can paste directly into Google AI Studio Build to customize or extend this blog applet:
              </p>

              <div className="space-y-3">
                {BLUEPRINT_SPEC.architecture.googleAiStudioPrompts.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-stone-900 font-sans-body">
                        {item.title}
                      </span>
                      <button
                        onClick={() => handleCopy(item.prompt, `prompt-${idx}`)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium bg-white hover:bg-stone-100 rounded border border-stone-200 text-stone-700 cursor-pointer"
                      >
                        {copiedKey === `prompt-${idx}` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-stone-600 font-mono-code bg-white p-2.5 rounded border border-stone-200 leading-relaxed">
                      "{item.prompt}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: DESIGN TOKENS */}
          {activeTab === 'designTokens' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-serif-display text-base text-stone-900">
                  Curated Editorial Palette
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-code">
                  <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <div className="w-8 h-8 rounded bg-[#FAF8F5] border border-stone-300 shrink-0" />
                    <div>
                      <span className="font-semibold block text-stone-900">Canvas (#FAF8F5)</span>
                      <span className="text-stone-500">Soft warm alabaster paper field</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <div className="w-8 h-8 rounded bg-[#1C1917] shrink-0" />
                    <div>
                      <span className="font-semibold block text-stone-900">Ink Charcoal (#1C1917)</span>
                      <span className="text-stone-500">Primary display and body prose</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <div className="w-8 h-8 rounded bg-[#9A3412] shrink-0" />
                    <div>
                      <span className="font-semibold block text-stone-900">Curatorial Terracotta (#9A3412)</span>
                      <span className="text-stone-500">Reserved active accents & callouts</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <div className="w-8 h-8 rounded bg-[#E7E5E4] shrink-0" />
                    <div>
                      <span className="font-semibold block text-stone-900">Hairline Rule (#E7E5E4)</span>
                      <span className="text-stone-500">Delicate 1px borders & dividers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-stone-200">
                <h4 className="font-serif-display text-base text-stone-900">
                  Anti-AI Slop & Typographic Discipline
                </h4>
                <ul className="text-xs text-stone-600 font-sans-body space-y-1.5 list-disc list-inside">
                  <li><strong>Zero-Pill Rule</strong>: Metadata is strictly unboxed with midpoint dots (<code>Sep 2026 · 6 min read</code>). No candy badge sandwiches.</li>
                  <li><strong>65–75ch Measure</strong>: Prose reading containers are bounded to avoid eye fatigue.</li>
                  <li><strong>Single-Level Elevation</strong>: Zero floating glass cards with nested translucent boxes. Clean whitespace separation.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF8F5] px-6 py-3.5 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs font-mono-code text-stone-500">
            Atelier Blueprint Engine · Ready for Google AI Studio
          </span>
          <button
            onClick={() => handleCopy(JSON.stringify(BLUEPRINT_SPEC, null, 2), 'fullBlueprint')}
            className="px-4 py-2 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            {copiedKey === 'fullBlueprint' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Blueprint Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Export Blueprint JSON</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
