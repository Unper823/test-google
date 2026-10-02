import React, { useState } from 'react';
import { PageTab } from '../types/blog';
import { OWNER_SECURITY_CONFIG } from '../data/blogData';
import { Compass, PenLine, Menu, X, Lock, ShieldCheck, FolderArchive, Layers } from 'lucide-react';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenBlueprint: () => void;
  onOpenWordPress: () => void;
  onOpenNewArticle: () => void;
  isAuthorAuthenticated: boolean;
  onRequestAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBlueprint,
  onOpenWordPress,
  onOpenNewArticle,
  isAuthorAuthenticated,
  onRequestAuth,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'articles', label: 'Articles Content' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single Brand Anchor */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleTabClick('home')}
            className="group flex flex-col items-start text-left focus:outline-none cursor-pointer"
          >
            <span className="font-serif-display text-2xl tracking-tight text-stone-900 font-medium group-hover:text-stone-700 transition-colors">
              ATELIER
            </span>
            <span className="text-[10px] uppercase font-mono-code tracking-widest text-stone-400">
              Journal & Blueprint
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Centrally Anchored) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-colors relative cursor-pointer ${
                  isActive
                    ? 'text-stone-900 font-semibold'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-200/40 rounded-md'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900 transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Clean Primary Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {isAuthorAuthenticated ? (
            <div className="flex items-center gap-2">
              <button
                onClick={onRequestAuth}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono-code text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200 cursor-pointer"
                title="Author Desk Unlocked — Click to manage session"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span className="truncate max-w-[120px]">Waleed (Author)</span>
              </button>

              <button
                onClick={onOpenNewArticle}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer border border-stone-200"
                title="Draft a new monograph as Waleed Alharbi"
              >
                <PenLine className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Draft Monograph</span>
                <span className="sm:hidden">Write</span>
              </button>
            </div>
          ) : (
            <button
              onClick={onRequestAuth}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer border border-stone-200"
              title="Author Desk: Restricted to Waleed Alharbi"
            >
              <Lock className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline">Author Desk</span>
              <span className="sm:hidden">Author</span>
            </button>
          )}

          <button
            onClick={onOpenWordPress}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-[#F2EDE4] hover:bg-[#EAE3D6] rounded-lg transition-colors border border-stone-300 cursor-pointer whitespace-nowrap shadow-2xs"
            title="Download WordPress Theme (.zip), Elementor JSON Kit, or connect Headless WordPress REST API"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-800" />
            <span className="hidden sm:inline">WordPress &amp; Elementor</span>
            <span className="sm:hidden">WP / Elementor</span>
          </button>

          <button
            onClick={onOpenBlueprint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            title="View Blog Blueprint Architecture and Google AI Studio Prompts"
          >
            <Compass className="w-3.5 h-3.5 text-stone-300" />
            <span className="hidden sm:inline">Blueprint Guide</span>
            <span className="sm:hidden">Guide</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAF8F5] px-6 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeTab === link.id
                    ? 'bg-stone-200/70 font-semibold text-stone-900'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            {isAuthorAuthenticated ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenNewArticle();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-lg cursor-pointer border border-emerald-200"
              >
                <PenLine className="w-4 h-4" />
                <span>Draft as Waleed Alharbi</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestAuth();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg cursor-pointer"
              >
                <Lock className="w-4 h-4 text-stone-500" />
                <span>Author Desk (Unlock for Waleed)</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWordPress();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-stone-800 bg-[#F2EDE4] hover:bg-[#EAE3D6] border border-stone-300 rounded-lg cursor-pointer shadow-xs"
            >
              <FolderArchive className="w-4 h-4 text-stone-700" />
              <span>WordPress Theme & Sync</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBlueprint();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg cursor-pointer shadow-xs"
            >
              <Compass className="w-4 h-4 text-stone-300" />
              <span>Open Blueprint Guide</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
