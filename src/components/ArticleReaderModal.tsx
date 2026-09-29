import React, { useState, useEffect, useRef } from 'react';
import { Article } from '../types/blog';
import {
  X,
  Heart,
  Bookmark,
  Share2,
  Check,
  Type,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  onLike: (id: string) => void;
  onSelectNextArticle?: (article: Article) => void;
  nextArticle?: Article;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onLike,
  onSelectNextArticle,
  nextArticle,
}) => {
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [fontSize, setFontSize] = useState<'standard' | 'large'>('standard');
  const [hasLiked, setHasLiked] = useState(false);
  const [coverError, setCoverError] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Prevent background scrolling while reader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  // Track reading progress on scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const totalHeight = target.scrollHeight - target.clientHeight;
    if (totalHeight > 0) {
      const progress = Math.min(100, Math.max(0, (target.scrollTop / totalHeight) * 100));
      setScrollProgress(progress);
    }
  };

  if (!article) return null;

  const handleShare = () => {
    const textToCopy = window.location.href;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {
          fallbackCopy(textToCopy);
        });
    } else {
      fallbackCopy(textToCopy);
    }
  };

  const fallbackCopy = (text: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      onLike(article.id);
      setHasLiked(true);
    }
  };

  // Split paragraphs
  const paragraphs = article.content.split('\n\n');
  const wordCount = article.content.split(/\s+/).filter(Boolean).length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex justify-center p-0 sm:p-4 md:p-8 animate-fade-in cursor-pointer"
    >
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#FAF8F5] sm:rounded-2xl shadow-2xl border border-stone-200 overflow-y-auto flex flex-col max-h-screen sm:max-h-[92vh] cursor-default"
      >
        {/* Sticky Utility Header */}
        <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-3.5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-mono-code text-stone-500 truncate">
            <span className="truncate font-semibold text-stone-900">{article.readTime}</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{wordCount} words</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font size toggle */}
            <button
              onClick={() => setFontSize(fontSize === 'standard' ? 'large' : 'standard')}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-md transition-colors cursor-pointer"
              title="Toggle reading text size"
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                isBookmarked
                  ? 'text-stone-900 bg-stone-200/80'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Save for later'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-stone-900' : ''}`} />
            </button>

            {/* Share / Copy link */}
            <button
              onClick={handleShare}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-md transition-colors cursor-pointer"
              title="Copy monograph link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-md transition-colors ml-2 cursor-pointer"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Reading Depth Progress Indicator */}
          <div
            className="absolute bottom-0 left-0 h-0.5 bg-stone-900 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Reader Canvas */}
        <div className="p-6 sm:p-12 md:p-16 max-w-3xl mx-auto w-full space-y-8">
          {/* Metadata & Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-stone-500">
              <span>Published {article.publishedAt}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-stone-900 tracking-tight text-balance">
              {article.title}
            </h1>

            <p className="text-stone-600 text-lg sm:text-xl font-serif-display italic leading-relaxed text-balance">
              {article.subtitle}
            </p>

            {/* Author Bylines */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-stone-300"
                />
                <div>
                  <span className="text-xs font-semibold text-stone-900 block">
                    {article.author.name}
                  </span>
                  <span className="text-xs text-stone-500">
                    {article.author.role}
                  </span>
                </div>
              </div>

              <button
                onClick={handleLike}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  hasLiked
                    ? 'bg-rose-50 border-rose-200 text-rose-700'
                    : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-rose-600 text-rose-600' : ''}`} />
                <span className="font-mono-code">{article.likes + (hasLiked ? 1 : 0)}</span>
              </button>
            </div>
          </div>

          {/* Primary Featured Image */}
          <div className="space-y-2">
            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-stone-200 border border-stone-200 relative">
              {!coverError ? (
                <img
                  src={article.coverImage}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  onError={() => setCoverError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-stone-200 text-stone-600">
                  <BookOpen className="w-12 h-12 stroke-[1.5] mb-2 opacity-50" />
                  <span className="font-serif-display text-lg italic text-stone-700">
                    Archival Monograph
                  </span>
                </div>
              )}
            </div>
            {article.coverCaption && (
              <p className="text-xs font-serif-display italic text-stone-500 text-center">
                {article.coverCaption}
              </p>
            )}
          </div>

          {/* Body Prose with Classical Reading Measure and Drop Cap */}
          <div
            className={`font-sans-body space-y-6 text-stone-800 ${
              fontSize === 'large'
                ? 'text-lg sm:text-xl leading-relaxed'
                : 'text-base sm:text-lg leading-relaxed'
            }`}
          >
            {paragraphs.map((para, idx) => {
              // Opening paragraph gets drop cap
              if (idx === 0) {
                return (
                  <p key={idx} className="editorial-drop-cap">
                    {para}
                  </p>
                );
              }

              // Heading markdown syntax support
              if (para.startsWith('### ') || para.startsWith('## ')) {
                const headingText = para.replace(/^#{2,3}\s+/, '');
                return (
                  <h3 key={idx} className="font-serif-display text-2xl sm:text-3xl font-medium text-stone-900 pt-4 pb-1">
                    {headingText}
                  </h3>
                );
              }

              // List items detection
              if (para.includes('\n1. ') || para.startsWith('1. ')) {
                const lines = para.split('\n');
                return (
                  <div key={idx} className="space-y-2 my-4">
                    {lines.map((line, lIdx) => {
                      if (/^\d+\.\s+/.test(line)) {
                        const num = line.match(/^(\d+)\.\s+/)?.[1];
                        const text = line.replace(/^\d+\.\s+/, '');
                        return (
                          <div key={lIdx} className="flex items-start gap-3 pl-2">
                            <span className="font-mono-code text-xs text-stone-500 font-semibold pt-1">
                              0{num}.
                            </span>
                            <span className="flex-1">{text}</span>
                          </div>
                        );
                      }
                      return <p key={lIdx}>{line}</p>;
                    })}
                  </div>
                );
              }

              // Insert pull quote after second paragraph if present
              if (idx === 1 && article.pullQuote) {
                return (
                  <React.Fragment key={idx}>
                    <p>{para}</p>
                    <div className="my-8 py-6 border-y border-stone-300 text-center px-4 sm:px-8">
                      <blockquote className="font-serif-display text-2xl sm:text-3xl italic text-stone-900 leading-snug">
                        "{article.pullQuote}"
                      </blockquote>
                    </div>
                  </React.Fragment>
                );
              }

              return <p key={idx}>{para}</p>;
            })}
          </div>

          {/* Author Card & Next Reading */}
          <div className="pt-8 border-t border-stone-200 space-y-6">
            <div className="p-6 rounded-xl bg-stone-100/70 border border-stone-200 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-14 h-14 rounded-full object-cover border border-stone-300 shrink-0"
              />
              <div className="space-y-1">
                <span className="text-xs font-mono-code uppercase text-stone-500 block">
                  About the Author
                </span>
                <h4 className="font-serif-display text-lg text-stone-900">
                  {article.author.name}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
                  {article.author.bio}
                </p>
              </div>
            </div>

            {nextArticle && onSelectNextArticle && (
              <div
                onClick={() => onSelectNextArticle(nextArticle)}
                className="group p-5 rounded-xl border border-stone-200 hover:border-stone-300 bg-white transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="space-y-1">
                  <span className="text-xs font-mono-code uppercase tracking-wider text-stone-400">
                    Next Monograph in Archive
                  </span>
                  <h5 className="font-serif-display text-base sm:text-lg text-stone-900 group-hover:text-stone-700">
                    {nextArticle.title}
                  </h5>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
