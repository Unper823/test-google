/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageTab, Article } from './types/blog';
import { INITIAL_ARTICLES, OWNER_SECURITY_CONFIG } from './data/blogData';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ArticlesPage } from './components/ArticlesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { BlueprintModal } from './components/BlueprintModal';
import { NewArticleModal } from './components/NewArticleModal';
import { AuthorAuthModal } from './components/AuthorAuthModal';
import { WordPressModal } from './components/WordPressModal';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'atelier_blog_articles_v1';
const AUTH_STORAGE_KEY = 'atelier_owner_auth_session_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item) => {
            const { tags, category, ...cleanItem } = item;
            return cleanItem as Article;
          });
        }
      }
    } catch {
      // Fallback if localStorage is inaccessible in restricted iframes
    }
    return INITIAL_ARTICLES;
  });

  // Sole Author Security State (Locked exclusively to Waleed Alharbi)
  const [isAuthorAuthenticated, setIsAuthorAuthenticated] = useState<boolean>(() => {
    try {
      const savedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
      return savedAuth === 'true';
    } catch {
      return false;
    }
  });

  const [readingArticle, setReadingArticle] = useState<Article | null>(null);
  const [blueprintOpen, setBlueprintOpen] = useState(false);
  const [wordPressModalOpen, setWordPressModalOpen] = useState(false);
  const [newArticleOpen, setNewArticleOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Author Authentication Handlers
  const handleAuthenticate = (passkey: string): boolean => {
    const trimmed = passkey.trim();
    if (
      trimmed === OWNER_SECURITY_CONFIG.defaultPasskey ||
      trimmed.toLowerCase() === 'waleed' ||
      trimmed === 'waleed2026'
    ) {
      setIsAuthorAuthenticated(true);
      try {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } catch {
        // Ignored
      }
      return true;
    }
    return false;
  };

  const handleDeauthenticate = () => {
    setIsAuthorAuthenticated(false);
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // Ignored
    }
  };

  // Deep-linking: sync URL hash with active monograph
  React.useEffect(() => {
    try {
      const hash = window.location.hash.replace('#monograph-', '').replace('#', '');
      const searchParams = new URLSearchParams(window.location.search);
      const articleParam = searchParams.get('article');
      const targetSlug = articleParam || hash;
      if (targetSlug) {
        const found = articles.find((a) => a.slug === targetSlug || a.id === targetSlug);
        if (found) {
          setReadingArticle(found);
        }
      }
    } catch {
      // Ignored in restricted environments
    }
  }, [articles]);

  React.useEffect(() => {
    try {
      if (readingArticle) {
        window.history.replaceState(null, '', `#monograph-${readingArticle.slug}`);
      } else {
        if (window.location.hash.startsWith('#monograph-')) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
      }
    } catch {
      // Ignored in restricted environments
    }
  }, [readingArticle]);

  // Likes handler
  const handleLikeArticle = (id: string) => {
    setArticles((prev) => {
      const updated = prev.map((a) => (a.id === id ? { ...a, likes: a.likes + 1 } : a));
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignored
      }
      return updated;
    });
  };

  // Add new article to store (Only allowed when authenticated as Waleed Alharbi)
  const handleSaveArticle = (newArticle: Article) => {
    if (!isAuthorAuthenticated) return;

    setArticles((prev) => {
      const updated = [newArticle, ...prev];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Ignored
      }
      return updated;
    });
  };

  // Read next article handler
  const getNextArticle = (currentArticle: Article): Article | undefined => {
    const currentIndex = articles.findIndex((a) => a.id === currentArticle.id);
    if (currentIndex !== -1 && currentIndex < articles.length - 1) {
      return articles[currentIndex + 1];
    }
    return articles[0];
  };

  // Import articles fetched from WordPress REST API
  const handleImportWordPressArticles = (importedArticles: Article[]) => {
    if (!importedArticles || importedArticles.length === 0) return;
    setArticles((prev) => {
      const existingIds = new Set(importedArticles.map((a) => a.id));
      const remaining = prev.filter((a) => !existingIds.has(a.id));
      const merged = [...importedArticles, ...remaining];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } catch {
        // Ignored
      }
      return merged;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-stone-200">
      {/* Top Navigation conforming to Top Bar Contract */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBlueprint={() => setBlueprintOpen(true)}
        onOpenWordPress={() => setWordPressModalOpen(true)}
        onOpenNewArticle={() => {
          if (isAuthorAuthenticated) {
            setNewArticleOpen(true);
          } else {
            setAuthModalOpen(true);
          }
        }}
        isAuthorAuthenticated={isAuthorAuthenticated}
        onRequestAuth={() => setAuthModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-6 w-full">
        {activeTab === 'home' && (
          <HomePage
            articles={articles}
            onReadArticle={(art) => setReadingArticle(art)}
            onNavigateToArchive={() => {
              setActiveTab('articles');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenNewArticle={() => {
              if (isAuthorAuthenticated) {
                setNewArticleOpen(true);
              } else {
                setAuthModalOpen(true);
              }
            }}
            isAuthorAuthenticated={isAuthorAuthenticated}
            onRequestAuth={() => setAuthModalOpen(true)}
          />
        )}

        {activeTab === 'articles' && (
          <ArticlesPage
            articles={articles}
            onReadArticle={(art) => setReadingArticle(art)}
            onOpenNewArticle={() => {
              if (isAuthorAuthenticated) {
                setNewArticleOpen(true);
              } else {
                setAuthModalOpen(true);
              }
            }}
            isAuthorAuthenticated={isAuthorAuthenticated}
            onRequestAuth={() => setAuthModalOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Editorial Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBlueprint={() => setBlueprintOpen(true)}
        onOpenWordPress={() => setWordPressModalOpen(true)}
      />

      {/* Deep Reading View Modal */}
      {readingArticle && (
        <ArticleReaderModal
          article={readingArticle}
          onClose={() => setReadingArticle(null)}
          onLike={handleLikeArticle}
          nextArticle={getNextArticle(readingArticle)}
          onSelectNextArticle={(next) => setReadingArticle(next)}
        />
      )}

      {/* Blog Blueprint Architecture & Google AI Studio Guide */}
      <BlueprintModal
        isOpen={blueprintOpen}
        onClose={() => setBlueprintOpen(false)}
      />

      {/* WordPress Theme Exporter & Headless REST API Sync Modal */}
      <WordPressModal
        isOpen={wordPressModalOpen}
        onClose={() => setWordPressModalOpen(false)}
        onImportWordPressArticles={handleImportWordPressArticles}
      />

      {/* New Article / Monograph Creator Modal (Guarded) */}
      <NewArticleModal
        isOpen={newArticleOpen}
        onClose={() => setNewArticleOpen(false)}
        onSaveArticle={handleSaveArticle}
        isAuthorAuthenticated={isAuthorAuthenticated}
        onRequestAuth={() => {
          setNewArticleOpen(false);
          setAuthModalOpen(true);
        }}
      />

      {/* Sole Author Authentication & Desk Security Modal */}
      <AuthorAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        isAuthorAuthenticated={isAuthorAuthenticated}
        onAuthenticate={handleAuthenticate}
        onDeauthenticate={handleDeauthenticate}
        onOpenNewArticle={() => setNewArticleOpen(true)}
      />
    </div>
  );
}
