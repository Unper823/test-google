import React, { useState } from 'react';
import { Article } from '../types/blog';
import { PRIMARY_AUTHOR, OWNER_SECURITY_CONFIG } from '../data/blogData';
import typographyImg from '../assets/images/article_typography_design_1790188823367.jpg';
import { X, PenLine, Lock, ShieldCheck, UserCheck } from 'lucide-react';

interface NewArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveArticle: (newArticle: Article) => void;
  isAuthorAuthenticated: boolean;
  onRequestAuth: () => void;
}

export const NewArticleModal: React.FC<NewArticleModalProps> = ({
  isOpen,
  onClose,
  onSaveArticle,
  isAuthorAuthenticated,
  onRequestAuth,
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [pullQuote, setPullQuote] = useState('');
  const [readTime, setReadTime] = useState('5 min read');

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

  // If not authenticated as the sole author (Waleed Alharbi), display the security shield barrier
  if (!isAuthorAuthenticated) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        onClick={onClose}
        className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in cursor-pointer"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col cursor-default p-6 text-center space-y-5"
        >
          <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-300 mx-auto flex items-center justify-center text-stone-800">
            <Lock className="w-6 h-6" />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-mono-code uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Author Protected Desk
            </span>
            <h3 className="font-serif-display text-2xl text-stone-900 pt-1">
              Sole Author Permission Required
            </h3>
            <p className="text-xs text-stone-600 font-sans-body leading-relaxed max-w-xs mx-auto">
              Only the verified publication owner, <strong>{OWNER_SECURITY_CONFIG.ownerName}</strong> (<span className="font-mono-code text-[11px]">{OWNER_SECURITY_CONFIG.ownerEmail}</span>), has permission to write and publish articles on Atelier.
            </p>
          </div>

          <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-600 font-mono-code text-left space-y-1">
            <div className="flex items-center justify-between text-stone-800 font-semibold">
              <span>Author: {OWNER_SECURITY_CONFIG.ownerName}</span>
              <span className="text-emerald-700 font-normal">Active Rule</span>
            </div>
            <p className="text-[11px] text-stone-500 font-sans-body">
              External readers and visitors are strictly restricted to reading and correspondence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-3 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              Back to Reading
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestAuth();
              }}
              className="flex-1 py-2.5 px-4 text-xs font-medium bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Unlock Author Desk
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const newArticle: Article = {
      id: `art-${Date.now()}`,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      title,
      subtitle: subtitle || 'A contemporary exploration on design and thought.',
      excerpt: excerpt || content.slice(0, 140) + '...',
      content,
      pullQuote: pullQuote || undefined,
      publishedAt: 'Today',
      dateIso: new Date().toISOString(),
      readTime: readTime || '4 min read',
      featured: false,
      isNew: true, // Marked as new so it appears on the Home page immediately!
      coverImage: typographyImg,
      coverCaption: `Figure. Archival monograph written by ${PRIMARY_AUTHOR.name}.`,
      author: PRIMARY_AUTHOR, // Explicitly authored by Waleed Alharbi!
      likes: 1,
      views: 12,
    };

    onSaveArticle(newArticle);
    onClose();
  };

  const handlePreloadSample = () => {
    setTitle('Spatial Rhythm: Why White Space Is Never Truly Empty');
    setSubtitle('Treating margins as acoustic chambers for the human eye.');
    setExcerpt('An exploration into spatial rhythm, interval architecture, and why negative space functions as the oxygen of written language.');
    setPullQuote('Empty space is not silence; it is the resonance that allows words to speak.');
    setContent(`When we compose a layout, we are not simply placing elements onto an empty screen. We are modulating tension. Every line of text, every image frame, and every divider exerts a gravitational pull on the surrounding canvas.

In traditional Japanese aesthetics, the concept of ma (間) refers to the negative space between structural elements. It is not an absence, but a presence filled with quiet potential.

By honoring this negative space, we invite the reader to slow down, absorb each proposition, and experience reading as a peaceful intellectual pursuit.`);
    setReadTime('4 min read');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh] cursor-default"
      >
        <div className="bg-[#FAF8F5] px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PenLine className="w-4 h-4 text-stone-700" />
            <div>
              <h3 className="font-serif-display text-lg text-stone-900">
                Author Desk — Draft & Publish Monograph
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-mono-code">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Sole Author: {PRIMARY_AUTHOR.name} ({PRIMARY_AUTHOR.email})</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePreloadSample}
              className="text-xs font-mono-code text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-2.5 py-1 rounded transition-colors cursor-pointer"
            >
              Fill Sample
            </button>
            <button
              onClick={onClose}
              className="p-1 text-stone-500 hover:text-stone-900 rounded cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs font-sans-body">
          <div>
            <label className="block font-semibold font-mono-code uppercase text-stone-700 mb-1">
              Article Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="The Architecture of Quiet Surfaces..."
              className="w-full px-3.5 py-2 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>

          <div>
            <label className="block font-semibold font-mono-code uppercase text-stone-700 mb-1">
              Subtitle / Deck
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="A brief curatorial thesis summarizing the essay..."
              className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>

          <div>
            <label className="block font-semibold font-mono-code uppercase text-stone-700 mb-1">
              Card Excerpt (Preview text)
            </label>
            <textarea
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short 2-line summary displayed on Home and Article cards..."
              className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>

          <div>
            <label className="block font-semibold font-mono-code uppercase text-stone-700 mb-1">
              Central Pull Quote (Optional)
            </label>
            <input
              type="text"
              value={pullQuote}
              onChange={(e) => setPullQuote(e.target.value)}
              placeholder="A memorable statement highlighted in large serif italic..."
              className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>

          <div>
            <label className="block font-semibold font-mono-code uppercase text-stone-700 mb-1">
              Essay Body Content (Paragraphs separated by blank lines) *
            </label>
            <textarea
              required
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write or paste your long-form paragraphs here..."
              className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 leading-relaxed font-sans-body"
            />
          </div>

          <div>
            <label className="block font-semibold font-mono-code uppercase text-stone-700 mb-1">
              Estimated Reading Time
            </label>
            <input
              type="text"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              placeholder="4 min read"
              className="w-full px-3 py-2 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg"
            />
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <span className="text-[11px] text-emerald-800 font-mono-code flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5" />
              Will publish under sole author {PRIMARY_AUTHOR.name}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Publish to Archive
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
