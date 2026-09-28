import React, { useState } from 'react';
import { ContactMessage } from '../types/blog';
import { Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    topic: 'Editorial Inquiry',
    message: '',
    submittedAt: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    // In a real backend, this forwards to Firestore or SendGrid.
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        topic: 'Editorial Inquiry',
        message: '',
        submittedAt: '',
      });
    }, 4000);
  };

  const faqs = [
    {
      q: 'Do you accept unsolicited essay submissions or guest monographs?',
      a: 'We welcome scholarly and practitioner submissions focused on digital typography, spatial computing, and architectural theory. Drafts must be complete essays between 1,500 and 3,500 words with proper bibliographic citations.',
    },
    {
      q: 'Can these monographs be republished or used for academic coursework?',
      a: 'All essays may be cited and excerpted under standard fair use. For course syllabus anthologies or complete translations, please select "Syndication & Rights" to receive our open-access permissions packet.',
    },
    {
      q: 'How frequently does Atelier publish new writings?',
      a: 'We operate on a fortnightly editorial cadence (one substantive monograph every two weeks), accompanied by occasional short dispatches on studio discoveries.',
    },
    {
      q: 'How can this Contact page be connected to a live backend in Google AI Studio?',
      a: 'Using Google AI Studio, you can prompt the agent to integrate Firebase Firestore to store submissions in a `contact_messages` collection, or configure an Express `/api/contact` proxy with Resend or Nodemailer.',
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <div className="border-b border-stone-200 pb-8">
        <span className="text-xs font-mono-code tracking-widest uppercase text-stone-500 block mb-2">
          Correspondence & Registry
        </span>
        <h1 className="font-serif-display text-4xl sm:text-5xl text-stone-900 tracking-tight">
          Letters to the Editorial Desk
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl font-sans-body">
          We welcome thoughtful discourse, critical challenges to our essays, editorial commissions, and research inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-800">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif-display text-2xl text-stone-900">
                Correspondence Received
              </h3>
              <p className="text-sm text-stone-600 max-w-sm mx-auto font-sans-body">
                Thank you for taking the time to write. Your note has been logged in the studio registry. We aim to reply to substantive inquiries within 48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                Send Another Letter
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold font-mono-code uppercase text-stone-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Clara Wieck"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all font-sans-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold font-mono-code uppercase text-stone-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="clara@institute.org"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all font-sans-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold font-mono-code uppercase text-stone-700 mb-1.5">
                  Nature of Inquiry
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all font-sans-body cursor-pointer text-stone-800"
                >
                  <option value="Editorial Inquiry">Editorial & Monograph Submission</option>
                  <option value="Commission & Project">Design System Commission / Speaking</option>
                  <option value="Syndication & Rights">Syndication, Translation & Academic Rights</option>
                  <option value="Reader Letter">Reader Reflection / Marginalia</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold font-mono-code uppercase text-stone-700 mb-1.5">
                  Message / Essay Proposal
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your thoughts, commission details, or reaction to a recent monograph..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all font-sans-body resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5 text-stone-300" />
                <span>Submit to Studio</span>
              </button>
            </form>
          )}
        </div>

        {/* Studio Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-6 rounded-xl bg-stone-100/70 border border-stone-200 space-y-4">
            <span className="text-xs font-mono-code uppercase tracking-wider text-stone-500 block">
              Curatorial Desk
            </span>

            <div className="space-y-3 text-xs text-stone-600 font-sans-body">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-stone-900 block">Studio Quarters</span>
                  <span>Bredgade 28, 1260 København K, Denmark</span>
                  <span className="block text-stone-400">Archival Depot: Zurich, Switzerland</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-stone-900 block">Reading & Review Hours</span>
                  <span>Tuesday – Friday · 10:00 – 16:00 CET</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Mail className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-stone-900 block">Direct Channel</span>
                  <span className="font-mono-code text-stone-800">dispatch@atelier-journal.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reader FAQ Accordion */}
          <div className="space-y-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-stone-500 block">
              Editorial Inquiries FAQ
            </span>

            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-stone-200 rounded-lg bg-white overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between gap-2 text-xs font-medium text-stone-900 hover:text-stone-700 cursor-pointer"
                    >
                      <span className="font-serif-display text-sm">{faq.q}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-stone-400 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-3.5 pt-1 text-xs text-stone-600 font-sans-body leading-relaxed border-t border-stone-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
