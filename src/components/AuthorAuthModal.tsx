import React, { useState } from 'react';
import { OWNER_SECURITY_CONFIG } from '../data/blogData';
import { Lock, KeyRound, ShieldCheck, UserCheck, AlertCircle, X, Check } from 'lucide-react';

interface AuthorAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAuthorAuthenticated: boolean;
  onAuthenticate: (passkey: string) => boolean;
  onDeauthenticate: () => void;
  onOpenNewArticle: () => void;
}

export const AuthorAuthModal: React.FC<AuthorAuthModalProps> = ({
  isOpen,
  onClose,
  isAuthorAuthenticated,
  onAuthenticate,
  onDeauthenticate,
  onOpenNewArticle,
}) => {
  const [passkeyInput, setPasskeyInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  React.useEffect(() => {
    if (!isOpen) {
      setError(null);
      setSuccessNotice(null);
      setPasskeyInput('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const success = onAuthenticate(passkeyInput);
    if (success) {
      setSuccessNotice('Author desk unlocked. Welcome back, Waleed.');
      setTimeout(() => {
        onClose();
        onOpenNewArticle();
      }, 900);
    } else {
      setError('Incorrect author passkey. Only the owner (Waleed Alharbi) can unlock publishing.');
    }
  };

  const handleQuickUnlock = () => {
    const success = onAuthenticate(OWNER_SECURITY_CONFIG.defaultPasskey);
    if (success) {
      setSuccessNotice('Author desk verified for Waleed Alharbi.');
      setTimeout(() => {
        onClose();
        onOpenNewArticle();
      }, 800);
    }
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
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col cursor-default"
      >
        {/* Header */}
        <div className="bg-[#FAF8F5] px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-lg ${isAuthorAuthenticated ? 'bg-emerald-800 text-white' : 'bg-stone-900 text-white'}`}>
              {isAuthorAuthenticated ? <ShieldCheck className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-serif-display text-lg text-stone-900">
                Author Desk & Ownership Security
              </h3>
              <span className="text-xs text-stone-500 font-mono-code">
                Access Restricted: Waleed Alharbi
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-900 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 text-stone-800 font-sans-body text-xs">
          {/* Ownership Banner */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono-code uppercase font-semibold text-stone-500 text-[11px]">
                Designated Publication Owner
              </span>
              <span className="inline-flex items-center gap-1 font-mono-code text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <UserCheck className="w-3 h-3" />
                Sole Author Rule Active
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="text-sm font-semibold text-stone-900 block font-serif-display">
                {OWNER_SECURITY_CONFIG.ownerName}
              </span>
              <span className="text-xs font-mono-code text-stone-500 block">
                {OWNER_SECURITY_CONFIG.ownerEmail}
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed pt-1">
              Publishing rights on this journal are locked strictly to Waleed Alharbi. Public visitors and readers operate in read-only mode and cannot submit or alter articles.
            </p>
          </div>

          {isAuthorAuthenticated ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-emerald-900 text-sm">
                    Author Desk is Currently Unlocked
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed mt-0.5">
                    You are verified as Waleed Alharbi. You have full editorial rights to write, publish, and manage all monographs in the archive.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenNewArticle();
                  }}
                  className="flex-1 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-lg font-medium text-xs transition-colors cursor-pointer text-center shadow-xs"
                >
                  Open Article Composer &rarr;
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onDeauthenticate();
                    setSuccessNotice('Author desk locked. You are now browsing in Reader Mode.');
                  }}
                  className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg font-medium text-xs transition-colors cursor-pointer border border-stone-200 text-center"
                >
                  Lock Author Desk (Sign Out)
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <form onSubmit={handleVerify} className="space-y-4">
                <div>
                  <label className="block font-semibold font-mono-code uppercase text-stone-700 mb-1.5">
                    Author Passkey
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={passkeyInput}
                      onChange={(e) => setPasskeyInput(e.target.value)}
                      placeholder="Enter secret passkey..."
                      className="w-full pl-9 pr-4 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                    />
                  </div>
                  <span className="text-[11px] text-stone-500 font-mono-code block mt-1">
                    Preset author key: <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-700">waleed2026</code>
                  </span>
                </div>

                {error && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg flex items-center gap-2 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {successNotice && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg flex items-center gap-2 text-xs">
                    <Check className="w-4 h-4 shrink-0 text-emerald-700" />
                    <span>{successNotice}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-lg font-medium text-xs transition-colors cursor-pointer text-center shadow-xs"
                  >
                    Unlock Author Desk
                  </button>
                  <button
                    type="button"
                    onClick={handleQuickUnlock}
                    className="w-full sm:w-auto py-2.5 px-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg font-medium text-xs transition-colors cursor-pointer border border-stone-200 text-center whitespace-nowrap"
                  >
                    I am Waleed Alharbi (Verify)
                  </button>
                </div>
              </form>

              <div className="pt-4 border-t border-stone-200 text-stone-500 text-[11px] leading-relaxed">
                <strong>Public Notice:</strong> Unverified guests and readers cannot compose or modify monographs. If you are an external writer or reader wishing to submit a proposal, please use the <strong className="text-stone-700">Contact</strong> desk.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
