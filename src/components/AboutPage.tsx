import React, { useState } from 'react';
import { PRIMARY_AUTHOR } from '../data/blogData';
import { PageTab } from '../types/blog';
import { ArrowUpRight, BookOpen, Feather, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onNavigateTab: (tab: PageTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateTab }) => {
  const [imageError, setImageError] = useState(false);

  const stats = [
    { label: 'Published Monographs', value: '48' },
    { label: 'Circulation / Subscribers', value: '14.2k' },
    { label: 'Curated Editions', value: '100%' },
    { label: 'Archival Year Established', value: '2024' },
  ];

  const pillars = [
    {
      index: '01',
      title: 'Pacing & Cognitive Restraint',
      description:
        'Interfaces should not compete with human consciousness for involuntary dopamine. We practice quiet visual design where text rests naturally and the ocular nerves are spared from constant strobe-like stimuli.',
    },
    {
      index: '02',
      title: 'The Classical 65-Character Measure',
      description:
        'Following centuries of typographic science from the Renaissance to Jan Tschichold, our prose is strictly constrained to 65–75 characters per line to guarantee natural saccadic tracking.',
    },
    {
      index: '03',
      title: 'Zero Algorithmic Pollution',
      description:
        'No endless reels, no unsolicited push alerts, and no synthetic engagement metrics. Readers arrive by intention, read with depth, and leave when an essay concludes.',
    },
    {
      index: '04',
      title: 'Archival Permanence',
      description:
        'Written artifacts should outlive framework churn. Our blueprints prioritize semantic markup, permanent URLs, and lightweight structures that can be read fifty years from now.',
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Editorial Profile Header */}
      <section className="border-b border-stone-200 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Author Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-stone-200 border border-stone-300 shadow-sm">
              {!imageError ? (
                <img
                  src={PRIMARY_AUTHOR.avatar}
                  alt={PRIMARY_AUTHOR.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover grayscale contrast-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-stone-200 text-stone-600">
                  <Feather className="w-12 h-12 stroke-[1.5] mb-2 opacity-50" />
                  <span className="font-serif-display text-base text-stone-700">
                    {PRIMARY_AUTHOR.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Author Statement */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-stone-500">
              <span className="font-semibold text-stone-900">About the Publication</span>
              <span aria-hidden="true">·</span>
              <span>{PRIMARY_AUTHOR.location}</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
              {PRIMARY_AUTHOR.name}
            </h1>

            <p className="text-stone-700 text-base sm:text-lg font-serif-display italic leading-relaxed">
              {PRIMARY_AUTHOR.role}
            </p>

            <p className="text-stone-600 text-sm sm:text-base font-sans-body leading-relaxed max-w-2xl">
              {PRIMARY_AUTHOR.bio} Atelier was conceived as an independent digital sanctuary—a curated journal where long-form essays on typography, spatial architecture, and software humanism could be published free from advertising clutter and synthetic velocity.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigateTab('contact')}
                className="px-4 py-2 text-xs font-medium bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors cursor-pointer"
              >
                Send Correspondence
              </button>
              <button
                onClick={() => onNavigateTab('articles')}
                className="px-4 py-2 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors cursor-pointer border border-stone-200"
              >
                Browse Archive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quantitative Benchmarks / Archival Ledger */}
      <section className="bg-white rounded-xl border border-stone-200 p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {stats.map((stat, i) => (
            <div key={i} className={`pt-4 sm:pt-0 ${i > 0 ? 'sm:pl-6' : ''}`}>
              <div className="font-serif-display text-3xl sm:text-4xl text-stone-900 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-stone-500 font-sans-body mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 4 Editorial Pillars */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-mono-code tracking-widest uppercase text-stone-500 block mb-1">
            Core Manifesto
          </span>
          <h2 className="font-serif-display text-3xl text-stone-900">
            Four Tenets of the Unhurried Medium
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="p-6 rounded-xl bg-white border border-stone-200/90 space-y-2 hover:border-stone-300 transition-colors"
            >
              <span className="text-xs font-mono-code text-stone-400 font-semibold">
                {pillar.index}
              </span>
              <h3 className="font-serif-display text-xl text-stone-900">
                {pillar.title}
              </h3>
              <p className="text-stone-600 text-sm font-sans-body leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Colophon & Architectural Specification */}
      <section className="border-t border-stone-200 pt-12 space-y-6">
        <div>
          <span className="text-xs font-mono-code tracking-widest uppercase text-stone-500 block mb-1">
            Colophon & Production Notes
          </span>
          <h2 className="font-serif-display text-2xl text-stone-900">
            Design Tokens & Publishing Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600 font-sans-body leading-relaxed">
          <div className="p-5 rounded-lg bg-stone-100/70 border border-stone-200 space-y-2">
            <span className="font-semibold text-stone-900 block font-mono-code uppercase">
              Typography
            </span>
            <p>
              Headlines typeset in <em>Newsreader</em> (optical sizing adjusted for titles). Body prose set in <em>Plus Jakarta Sans</em> at 16px with 1.75 line-height. Tabular metadata rendered in <em>JetBrains Mono</em>.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-stone-100/70 border border-stone-200 space-y-2">
            <span className="font-semibold text-stone-900 block font-mono-code uppercase">
              Chromatic Canvas
            </span>
            <p>
              Warm Alabaster (#FAF8F5) backdrop calibrated to mimic archival 90gsm rag paper, paired with deep carbon ink typography (#1C1917) and subtle terracotta curatorial highlights.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-stone-100/70 border border-stone-200 space-y-2">
            <span className="font-semibold text-stone-900 block font-mono-code uppercase">
              Architecture Blueprint
            </span>
            <p>
              Built for seamless expansion in Google AI Studio. Modular data schemas permit direct hydration from Firebase Firestore, GitHub Markdown repositories, or local headless CMS engines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
