import React, { useState, useMemo } from 'react';
import { Article } from '../types/blog';
import { ArticleCard } from './ArticleCard';
import { Search, LayoutGrid, List, ArrowUpRight, RotateCcw } from 'lucide-react';

interface ArticlesPageProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
  onOpenNewArticle: () => void;
  isAuthorAuthenticated?: boolean;
  onRequestAuth?: () => void;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  articles,
  onReadArticle,
  onOpenNewArticle,
  isAuthorAuthenticated = false,
  onRequestAuth,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'likes' | 'views'>('latest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filtered & Sorted Articles
  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const matchesSearch =
          searchQuery.trim() === '' ||
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'latest') return new Date(b.dateIso).getTime() - new Date(a.dateIso).getTime();
        if (sortBy === 'oldest') return new Date(a.dateIso).getTime() - new Date(b.dateIso).getTime();
        if (sortBy === 'likes') return b.likes - a.likes;
        if (sortBy === 'views') return b.views - a.views;
        return 0;
      });
  }, [articles, searchQuery, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSortBy('latest');
  };

  return (
    <div className="space-y-10 py-8">
      {/* Archive Header */}
      <div className="border-b border-stone-200 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono-code tracking-widest uppercase text-stone-500 block mb-2">
              Complete Editorial Archive · Vol I–IV
            </span>
            <h1 className="font-serif-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
              Articles & Monographs
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl font-sans-body">
              An archival collection of essays exploring architecture, digital typography, ergonomic tool design, and humane software philosophy.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-code text-stone-500">
            <div>
              <span className="text-stone-900 font-semibold">{articles.length}</span> Total Essays
            </div>
            <span aria-hidden="true">·</span>
            <div>
              <span className="text-emerald-800 font-semibold">Sole Author</span> Collection
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Search, Sort & View Mode */}
      <div className="space-y-4">
        {/* Search, Sort and View Mode */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays, keywords, or topics..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all font-sans-body"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs font-sans-body">
              <span className="text-stone-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-stone-200 rounded-lg px-2.5 py-2 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-stone-900 cursor-pointer"
              >
                <option value="latest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="likes">Most Applauded</option>
                <option value="views">Most Read</option>
              </select>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Grid presentation"
                aria-label="Grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Archival ledger list"
                aria-label="List view"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Result Status Indicator */}
      <div className="text-xs font-mono-code text-stone-500 flex items-center justify-between">
        <span>
          Showing {filteredArticles.length} of {articles.length} articles
          {searchQuery && ` matching "${searchQuery}"`}
        </span>
        {searchQuery !== '' && (
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-950 underline underline-offset-2 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Reset query
          </button>
        )}
      </div>

      {/* Main Articles View */}
      {filteredArticles.length > 0 ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onRead={onReadArticle}
              />
            ))}
          </div>
        ) : (
          /* Archival Ledger List Mode */
          <div className="border border-stone-200 rounded-xl bg-white divide-y divide-stone-100 overflow-hidden shadow-xs">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onReadArticle(article)}
                className="group p-5 sm:p-6 hover:bg-stone-50/80 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-stone-500">
                    <span>{article.publishedAt}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl text-stone-900 group-hover:text-stone-700 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-stone-600 text-sm max-w-3xl line-clamp-1 font-sans-body">
                    {article.excerpt}
                  </p>
                </div>

                <div className="sm:self-center shrink-0 flex items-center gap-4 text-xs font-medium text-stone-800">
                  <span className="font-mono-code text-stone-500">{article.views} reads</span>
                  <span className="inline-flex items-center gap-1 group-hover:text-stone-950">
                    Open <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-6 bg-white rounded-xl border border-stone-200 space-y-4">
          <p className="font-serif-display text-2xl text-stone-800">No articles matched your criteria</p>
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            Try adjusting your search terms or resetting the search query.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-xs font-medium bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            Clear search query
          </button>
        </div>
      )}

      {/* Blueprint Extension Banner */}
      <div className="border-t border-stone-200 pt-8 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-stone-100/60 rounded-xl">
        <div>
          <span className="text-xs font-mono-code uppercase text-stone-500 block mb-1">
            Sole Author Publication · Waleed Alharbi
          </span>
          <p className="text-sm text-stone-800 font-medium">
            Articles and monographs are curated and written exclusively by Waleed Alharbi.
          </p>
          <p className="text-xs text-stone-500 mt-0.5">
            External readers and researchers operate in read-only access. Inquiries may be addressed via Contact.
          </p>
        </div>
        <button
          onClick={isAuthorAuthenticated ? onOpenNewArticle : (onRequestAuth || onOpenNewArticle)}
          className="px-4 py-2 text-xs font-semibold bg-white border border-stone-300 text-stone-900 rounded-lg hover:bg-stone-50 shadow-xs transition-colors shrink-0 cursor-pointer"
        >
          {isAuthorAuthenticated ? 'Draft Monograph as Author' : 'Unlock Author Desk (Waleed)'}
        </button>
      </div>
    </div>
  );
};
