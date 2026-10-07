import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Send } from 'lucide-react';
import { PageId, SubPageId, Language } from '../types';
import { ASSOCIATION_INFO } from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  language: Language;
  onNavigate: (page: PageId, subPage?: SubPageId) => void;
  onOpenCookiePreferences: () => void;
  onToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenCookiePreferences,
  onToast,
}) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);

  const t = TRANSLATIONS[language];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onToast(
        'error',
        language === 'fr' ? 'Email invalide' : 'Invalid email',
        language === 'fr'
          ? 'Veuillez renseigner une adresse email valide.'
          : 'Please enter a valid email address.',
      );
      return;
    }
    if (!consent) {
      onToast(
        'error',
        language === 'fr' ? 'Consentement requis' : 'Consent required',
        language === 'fr'
          ? 'Veuillez accepter de recevoir les actualités de Sans Limite.'
          : 'Please agree to receive updates from Sans Limite.',
      );
      return;
    }

    onToast(
      'success',
      language === 'fr' ? 'Inscription confirmée !' : 'Subscribed!',
      language === 'fr'
        ? 'Merci ! Vous recevrez désormais notre lettre d’information mensuelle.'
        : 'Thank you! You will now receive our monthly newsletter.',
    );
    setEmail('');
    setConsent(false);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Logo from src/assets/images/Slogo.png & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <BrandLogo size="md" />
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Sans Limite
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.mission}
            </p>
            <div className="text-xs text-slate-400">
              <span className="text-slate-200 font-semibold">{t.footer.legalNote}</span>
              <br />
              SIRET : {ASSOCIATION_INFO.siret}
            </div>

            {/* Social icons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={ASSOCIATION_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-[#F97316] hover:bg-slate-700 transition-colors text-xs font-semibold"
                aria-label="Instagram @sanslimiteong"
                title="Suivez @sanslimiteong sur Instagram"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@sanslimiteong</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn de Sans Limite"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${ASSOCIATION_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:bg-slate-700 transition-colors"
                aria-label="Envoyer un email à Sans Limite"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Liens rapides */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('accueil')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('association')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.association}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('actions')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.actions}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agenda')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.agenda}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Nous contacter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span>
                  Sans Limite
                  <br />
                  {ASSOCIATION_INFO.fullAddress}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                <a
                  href={`mailto:${ASSOCIATION_INFO.email}`}
                  className="hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {ASSOCIATION_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>{ASSOCIATION_INFO.phone}</span>
              </li>
              <li className="text-[11px] text-slate-400 pt-1">
                {ASSOCIATION_INFO.openingHours}
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              {t.footer.newsletterDesc}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder}
                  required
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#F97316]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-xs font-semibold rounded-lg bg-[#F97316] text-white hover:bg-[#ea580c] transition-colors shrink-0 flex items-center justify-center"
                  aria-label="S'inscrire"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <label className="flex items-start gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-slate-700 bg-slate-800 text-[#F97316] focus:ring-0"
                />
                <span className="text-[11px] text-slate-400 leading-tight">
                  {t.footer.newsletterConsent}
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('mentions-legales')}
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.legalNotice}
            </button>
            <span aria-hidden="true" className="text-slate-600">
              ·
            </span>
            <button
              onClick={() => onNavigate('politique-confidentialite')}
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.privacyPolicy}
            </button>
            <span aria-hidden="true" className="text-slate-600">
              ·
            </span>
            <button
              onClick={onOpenCookiePreferences}
              className="hover:text-slate-200 transition-colors underline-offset-2 hover:underline"
            >
              {t.footer.cookieSettings}
            </button>
            <span aria-hidden="true" className="text-slate-600">
              ·
            </span>
            <button
              onClick={() => onNavigate('accessibilite')}
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.accessibility}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
