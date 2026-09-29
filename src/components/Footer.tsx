import React from 'react';
import { PageTab } from '../types/blog';
import { Compass, ArrowUp, Rss, FolderArchive } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: PageTab) => void;
  onOpenBlueprint: () => void;
  onOpenWordPress?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateTab,
  onOpenBlueprint,
  onOpenWordPress,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 bg-[#FAF8F5] pt-12 pb-8 mt-20 text-stone-600">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif-display text-2xl font-medium tracking-tight text-stone-900 block">
              ATELIER
            </span>
            <p className="text-xs text-stone-600 font-sans-body max-w-sm leading-relaxed">
              An archival blog publication and website blueprint engineered for Google AI Studio. Dedicated to slow reading, humane digital ergonomics, and classical editorial craft.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-mono-code text-stone-500">
              <span className="inline-flex items-center gap-1">
                <Rss className="w-3.5 h-3.5 text-stone-400" />
                RSS Available
              </span>
              <span aria-hidden="true">·</span>
              <span>Copenhagen & Zurich</span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono-code uppercase tracking-wider text-stone-900 block font-semibold">
              Publication Directory
            </span>
            <ul className="space-y-1.5 text-xs font-sans-body">
              <li>
                <button
                  onClick={() => onNavigateTab('home')}
                  className="hover:text-stone-950 transition-colors cursor-pointer text-stone-600"
                >
                  Home — New Articles & Dispatches
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('articles')}
                  className="hover:text-stone-950 transition-colors cursor-pointer text-stone-600"
                >
                  Articles Content — Full Archival Ledger
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('about')}
                  className="hover:text-stone-950 transition-colors cursor-pointer text-stone-600"
                >
                  About — Editorial Manifesto & Author Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('contact')}
                  className="hover:text-stone-950 transition-colors cursor-pointer text-stone-600"
                >
                  Contact — Letters to the Desk & Commissions
                </button>
              </li>
            </ul>
          </div>

          {/* Blueprint Tooling */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono-code uppercase tracking-wider text-stone-900 block font-semibold">
              AI Studio Blueprint
            </span>
            <p className="text-xs text-stone-500 font-sans-body leading-relaxed">
              Explore the architectural schematic, JSON schemas, and ready-to-run prompt recipes.
            </p>
            {onOpenWordPress && (
              <button
                onClick={onOpenWordPress}
                className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-[#F2EDE4] hover:bg-[#EAE3D6] rounded-lg transition-colors border border-stone-300 cursor-pointer w-full justify-center"
              >
                <FolderArchive className="w-3.5 h-3.5 text-stone-700" />
                <span>WordPress Theme Package</span>
              </button>
            )}
            <button
              onClick={onOpenBlueprint}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-200 cursor-pointer w-full justify-center"
            >
              <Compass className="w-3.5 h-3.5 text-stone-600" />
              <span>Open Blueprint Guide</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-mono-code gap-4">
          <div>
            © 2024–2026 Atelier Journal. Open Architectural Blueprint.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
