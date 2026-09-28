import React, { useState } from 'react';
import { Article } from '../types/blog';
import { ArticleCard } from './ArticleCard';
import { PRIMARY_AUTHOR } from '../data/blogData';
import { ArrowRight, Check, Mail } from 'lucide-react';

interface HomePageProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
  onNavigateToArchive: () => void;
  onOpenNewArticle: () => void;
  isAuthorAuthenticated?: boolean;
  onRequestAuth?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  articles,
  onReadArticle,
  onNavigateToArchive,
  onOpenNewArticle,
  isAuthorAuthenticated = false,
  onRequestAuth,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // New articles for the home page
  const newArticles = articles.filter((a) => a.isNew);
  const leadArticle = articles.find((a) => a.featured) || articles[0];
  const secondaryNewArticles = newArticles.filter((a) => a.id !== leadArticle?.id);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <div className="space-y-16 py-8">
      {/* Editorial Masthead Bar */}
      <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 font-mono-code uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-stone-900">Vol. IV · No. 2</span>
          <span aria-hidden="true">/</span>
          <span>Autumn 2026 Archive</span>
        </div>
        <div className="mt-1 sm:mt-0 flex items-center gap-4">
          <span>Updated Weekly</span>
          <span aria-hidden="true">·</span>
          <span>Copenhagen · Zurich</span>
        </div>
      </div>

      {/* Hero / Lead Story Section */}
      {leadArticle && (
        <section aria-labelledby="lead-story-heading">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest font-mono-code text-stone-500">
              Lead Story · Featured Release
            </span>
            <span className="text-xs text-stone-400 font-mono-code">Acc. 2026.09</span>
          </div>
          <ArticleCard article={leadArticle} onRead={onReadArticle} featured={true} />
        </section>
      )}

      {/* New Articles Section */}
      <section aria-labelledby="new-articles-heading" className="space-y-6">
        <div className="flex items-end justify-between border-b border-stone-200 pb-3">
          <div>
            <span className="text-xs font-mono-code tracking-widest uppercase text-stone-500 block mb-1">
              Fresh Editions
            </span>
            <h2 id="new-articles-heading" className="font-serif-display text-2xl sm:text-3xl text-stone-900">
              New Articles & Dispatches
            </h2>
          </div>
          <button
            onClick={onNavigateToArchive}
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
          >
            <span>View all {articles.length} articles</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 2-column or 3-column Grid of New Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryNewArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onRead={onReadArticle}
            />
          ))}
        </div>
      </section>

      {/* Editor's Note & Curatorial Column */}
      <section className="bg-stone-100/80 rounded-2xl p-8 sm:p-10 border border-stone-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono-code tracking-widest uppercase text-stone-500">
              Curatorial Note · {PRIMARY_AUTHOR.name} ({PRIMARY_AUTHOR.role})
            </span>
            <blockquote className="font-serif-display text-2xl sm:text-3xl text-stone-800 leading-snug">
              "We have engineered a digital culture obsessed with instant velocity. Atelier exists to practice slow inquiry: treating words with typographical dignity, and refusing the lure of algorithmic distraction."
            </blockquote>
            <p className="text-sm text-stone-600 font-sans-body max-w-2xl leading-relaxed">
              Every monograph published here undergoes rigorous drafting, typesetting in humanely measured columns, and is preserved as an archival blueprint accessible to thinkers and designers worldwide.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="text-left lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-stone-300 pl-4 lg:pl-0 lg:pr-4 py-1">
              <span className="text-xs font-mono-code uppercase tracking-wider text-stone-500 block">
                Editorial Frequency
              </span>
              <span className="font-serif-display text-xl text-stone-900">
                Fortnightly Monograph
              </span>
              <span className="text-xs text-stone-500 block mt-1">
                Zero spam · Unsubscribe anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-t border-stone-200 pt-12 pb-6">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono-code tracking-widest uppercase text-stone-500">
            The Monograph Postal
          </span>
          <h3 className="font-serif-display text-3xl text-stone-900">
            Receive the Next Edition Directly
          </h3>
          <p className="text-sm text-stone-600 font-sans-body leading-relaxed">
            A quiet bi-weekly dispatch delivering architectural reflections, typography essays, and design system blueprints to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
            <div className="relative flex-1 max-w-md">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="reader@studio.com"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all font-sans-body"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer shrink-0"
            >
              {subscribed ? (
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Subscribed
                </span>
              ) : (
                'Join Reader Dispatch'
              )}
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-emerald-700 font-mono-code animate-fade-in">
              Thank you. The autumn collection has been scheduled for dispatch.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
