import React, { useState } from 'react';
import { Article } from '../types/blog';
import { ArrowUpRight, BookOpen, Heart } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onRead: (article: Article) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onRead,
  featured = false,
}) => {
  const [imageError, setImageError] = useState(false);

  if (featured) {
    return (
      <article
        onClick={() => onRead(article)}
        className="group relative cursor-pointer border-b border-stone-200 pb-12 transition-all"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Canvas (7 cols on desktop) */}
          <div className="lg:col-span-7 overflow-hidden rounded-xl bg-stone-200 aspect-[16/10] relative">
            {!imageError ? (
              <img
                src={article.coverImage}
                alt={article.title}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
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

          {/* Editorial Content (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {/* Zero-Pill Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs font-mono-code tracking-wider uppercase text-stone-500">
              <span>{article.publishedAt}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl font-normal leading-tight text-stone-900 group-hover:text-stone-700 transition-colors text-balance">
              {article.title}
            </h2>

            <p className="text-stone-600 text-base leading-relaxed line-clamp-3 font-sans-body">
              {article.excerpt}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full object-cover border border-stone-300"
                />
                <span className="text-xs font-medium text-stone-700">
                  {article.author.name}
                </span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-900 group-hover:translate-x-0.5 transition-transform">
                Read Monograph
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onRead(article)}
      className="group flex flex-col cursor-pointer bg-white rounded-xl border border-stone-200/90 overflow-hidden hover:border-stone-300 hover:shadow-xs transition-all p-5"
    >
      {/* Cover Image */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-stone-100 mb-4 relative">
        {!imageError ? (
          <img
            src={article.coverImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-103"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-stone-100 text-stone-500">
            <BookOpen className="w-8 h-8 stroke-[1.5] mb-1 opacity-40" />
            <span className="text-xs font-serif-display italic text-stone-600">
              Atelier Monograph
            </span>
          </div>
        )}
      </div>

      {/* Zero-Pill Unboxed Metadata */}
      <div className="flex items-center gap-2 text-xs font-mono-code tracking-wider uppercase text-stone-500 mb-2">
        <span>{article.publishedAt}</span>
      </div>

      <h3 className="font-serif-display text-xl sm:text-2xl font-normal leading-snug text-stone-900 group-hover:text-stone-700 transition-colors mb-2 text-balance">
        {article.title}
      </h3>

      <p className="text-stone-600 text-sm leading-relaxed line-clamp-2 mb-4 font-sans-body">
        {article.excerpt}
      </p>

      <div className="mt-auto pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <span className="font-medium text-stone-700">{article.readTime}</span>
        <span className="inline-flex items-center gap-1 font-medium text-stone-800 group-hover:text-stone-950">
          Read
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
};
