import React, { useState } from 'react';
import { ShieldCheck, X, Cookie } from 'lucide-react';
import { CookiePreferences, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface CookieBannerProps {
  language: Language;
  preferences: CookiePreferences;
  isOpen: boolean;
  onSavePreferences: (prefs: CookiePreferences) => void;
  onClose: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  language,
  preferences,
  isOpen,
  onSavePreferences,
  onClose,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [localAnalytics, setLocalAnalytics] = useState(preferences.analytics);
  const [localThirdParty, setLocalThirdParty] = useState(preferences.thirdParty);

  const t = TRANSLATIONS[language].cookies;

  if (!isOpen && !showModal) return null;

  const handleAcceptAll = () => {
    onSavePreferences({
      necessary: true,
      analytics: true,
      thirdParty: true,
      answered: true,
    });
    setShowModal(false);
    onClose();
  };

  const handleRefuseAll = () => {
    onSavePreferences({
      necessary: true,
      analytics: false,
      thirdParty: false,
      answered: true,
    });
    setShowModal(false);
    onClose();
  };

  const handleSaveCustom = () => {
    onSavePreferences({
      necessary: true,
      analytics: localAnalytics,
      thirdParty: localThirdParty,
      answered: true,
    });
    setShowModal(false);
    onClose();
  };

  return (
    <>
      {/* Banner at bottom */}
      {isOpen && !showModal && (
        <aside
          role="dialog"
          aria-live="polite"
          aria-label={t.title}
          className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl transition-transform duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3 max-w-3xl">
              <Cookie className="w-6 h-6 text-[#F97316] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{t.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{t.desc}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 transition-colors shadow-2xs"
              >
                {t.acceptAll}
              </button>
              <button
                onClick={handleRefuseAll}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors"
              >
                {t.refuseAll}
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                {t.customize}
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Modal Customize */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1E3A8A]" />
                <h3 id="cookie-modal-title" className="text-lg font-bold text-slate-900">
                  {t.customize}
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm">
                    {t.necessaryTitle}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                    {t.alwaysActive}
                  </span>
                </div>
                <p className="text-slate-600 mt-1 leading-relaxed">
                  {t.necessaryDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-slate-900 text-sm">
                      {t.analyticsTitle}
                    </span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {t.analyticsDesc}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={localAnalytics}
                      onChange={(e) => setLocalAnalytics(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1E3A8A]"></div>
                  </label>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-slate-900 text-sm">
                      {t.thirdPartyTitle}
                    </span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {t.thirdPartyDesc}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={localThirdParty}
                      onChange={(e) => setLocalThirdParty(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1E3A8A]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-4 border-t border-slate-200">
              <button
                onClick={handleRefuseAll}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors"
              >
                {t.refuseAll}
              </button>
              <button
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {t.save}
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 transition-colors"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
