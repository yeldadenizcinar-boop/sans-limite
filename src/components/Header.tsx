import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Heart,
  Globe,
} from 'lucide-react';
import { PageId, SubPageId, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPage: PageId;
  currentSubPage?: SubPageId;
  language: Language;
  onNavigate: (page: PageId, subPage?: SubPageId) => void;
  onToggleLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  currentSubPage,
  language,
  onNavigate,
  onToggleLanguage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId, subPage?: SubPageId) => {
    onNavigate(page, subPage);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const navDropdowns = {
    association: [
      { label: t.nav.subAssociation.mission, sub: 'mission-valeurs' as SubPageId },
      { label: t.nav.subAssociation.team, sub: 'equipe' as SubPageId },
      { label: t.nav.subAssociation.partners, sub: 'partenaires' as SubPageId },
    ],
    actions: [
      { label: t.nav.subActions.youth, sub: 'action-jeunesse' as SubPageId },
      { label: t.nav.subActions.culture, sub: 'action-culture' as SubPageId },
      { label: t.nav.subActions.environment, sub: 'action-environnement' as SubPageId },
    ],
    medias: [
      { label: t.nav.subMedia.gallery, sub: 'galerie' as SubPageId },
      { label: t.nav.subMedia.press, sub: 'espace-presse' as SubPageId },
    ],
    engager: [
      { label: t.nav.subEngage.join, sub: 'adherer' as SubPageId },
      { label: t.nav.subEngage.volunteer, sub: 'devenir-benevole' as SubPageId },
      { label: t.nav.subEngage.civicService, sub: 'service-civique' as SubPageId },
      { label: t.nav.subEngage.donate, sub: 'faire-un-don' as SubPageId },
    ],
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div
        ref={dropdownRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4"
      >
        {/* Left: Brand Logo from src/assets/images/Slogo.png and Name */}
        <button
          onClick={() => handleNavClick('accueil')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          {/* Logo with Slogo.png embedded */}
          <BrandLogo size="md" />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#1E3A8A] group-hover:text-[#F97316] transition-colors font-display">
              Sans Limite
            </span>
            <span className="text-[10px] font-medium text-slate-500 tracking-wide uppercase">
              Paris · Vitry
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation */}
        <nav
          aria-label="Navigation principale"
          className="hidden xl:flex items-center gap-1 text-[13px] font-medium text-slate-700"
        >
          {/* 1. Accueil / Home */}
          <button
            onClick={() => handleNavClick('accueil')}
            className={`px-2.5 py-1.5 rounded-lg transition-colors hover:text-[#1E3A8A] hover:bg-slate-50 ${
              currentPage === 'accueil' ? 'text-[#1E3A8A] font-semibold bg-blue-50/70' : ''
            }`}
          >
            {t.nav.home}
          </button>

          {/* 2. L'Association / The Association */}
          <div className="relative">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === 'association' ? null : 'association')
              }
              aria-expanded={activeDropdown === 'association'}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-colors hover:text-[#1E3A8A] hover:bg-slate-50 ${
                currentPage === 'association' ? 'text-[#1E3A8A] font-semibold bg-blue-50/70' : ''
              }`}
            >
              <span>{t.nav.association}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeDropdown === 'association' && (
              <div className="absolute top-full left-0 mt-1.5 w-56 rounded-xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in duration-150">
                <button
                  onClick={() => handleNavClick('association')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-[#1E3A8A] hover:bg-blue-50/50 border-b border-slate-100 mb-1"
                >
                  {t.nav.subAssociation.overview}
                </button>
                {navDropdowns.association.map((item) => (
                  <button
                    key={item.sub}
                    onClick={() => handleNavClick('association', item.sub)}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:text-[#1E3A8A] hover:bg-slate-50 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 3. Nos Actions / Our Actions */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'actions' ? null : 'actions')}
              aria-expanded={activeDropdown === 'actions'}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-colors hover:text-[#1E3A8A] hover:bg-slate-50 ${
                currentPage === 'actions' ? 'text-[#1E3A8A] font-semibold bg-blue-50/70' : ''
              }`}
            >
              <span>{t.nav.actions}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeDropdown === 'actions' && (
              <div className="absolute top-full left-0 mt-1.5 w-64 rounded-xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in duration-150">
                <button
                  onClick={() => handleNavClick('actions')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-[#1E3A8A] hover:bg-blue-50/50 border-b border-slate-100 mb-1"
                >
                  {t.nav.subActions.overview}
                </button>
                {navDropdowns.actions.map((item) => (
                  <button
                    key={item.sub}
                    onClick={() => handleNavClick('actions', item.sub)}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:text-[#1E3A8A] hover:bg-slate-50 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. Agenda */}
          <button
            onClick={() => handleNavClick('agenda')}
            className={`px-2.5 py-1.5 rounded-lg transition-colors hover:text-[#1E3A8A] hover:bg-slate-50 ${
              currentPage === 'agenda' ? 'text-[#1E3A8A] font-semibold bg-blue-50/70' : ''
            }`}
          >
            {t.nav.agenda}
          </button>

          {/* 5. Médias / Media */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'medias' ? null : 'medias')}
              aria-expanded={activeDropdown === 'medias'}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-colors hover:text-[#1E3A8A] hover:bg-slate-50 ${
                currentPage === 'medias' ? 'text-[#1E3A8A] font-semibold bg-blue-50/70' : ''
              }`}
            >
              <span>{t.nav.media}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeDropdown === 'medias' && (
              <div className="absolute top-full left-0 mt-1.5 w-52 rounded-xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in duration-150">
                {navDropdowns.medias.map((item) => (
                  <button
                    key={item.sub}
                    onClick={() => handleNavClick('medias', item.sub)}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:text-[#1E3A8A] hover:bg-slate-50 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 8. S'engager / Get Involved */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'engager' ? null : 'engager')}
              aria-expanded={activeDropdown === 'engager'}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-colors hover:text-[#1E3A8A] hover:bg-slate-50 ${
                currentPage === 's-engager' ? 'text-[#1E3A8A] font-semibold bg-blue-50/70' : ''
              }`}
            >
              <span>{t.nav.engage}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeDropdown === 'engager' && (
              <div className="absolute top-full left-0 mt-1.5 w-56 rounded-xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in duration-150">
                <button
                  onClick={() => handleNavClick('s-engager')}
                  className="w-full text-left px-4 py-2 text-xs font-semibold text-[#1E3A8A] hover:bg-blue-50/50 border-b border-slate-100 mb-1"
                >
                  {t.nav.subEngage.overview}
                </button>
                {navDropdowns.engager.map((item) => (
                  <button
                    key={item.sub}
                    onClick={() => handleNavClick('s-engager', item.sub)}
                    className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:text-[#1E3A8A] hover:bg-slate-50 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 9. Contact */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-2.5 py-1.5 rounded-lg transition-colors hover:text-[#1E3A8A] hover:bg-slate-50 ${
              currentPage === 'contact' ? 'text-[#1E3A8A] font-semibold bg-blue-50/70' : ''
            }`}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Right: Language Switcher (FR / EN) & Highlighted Faire un don button & Mobile Menu trigger */}
        <div className="flex items-center gap-2.5">
          {/* Language Switcher Button (FR / EN / ING) */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 shadow-2xs">
            <button
              onClick={() => onToggleLanguage('fr')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                language === 'fr'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Passer en Français (FR)"
            >
              FR
            </button>
            <button
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                language === 'en'
                  ? 'bg-[#1E3A8A] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Switch to English (ING)"
            >
              ING
            </button>
          </div>

          <button
            onClick={() => handleNavClick('s-engager', 'faire-un-don')}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#F97316] hover:bg-[#ea580c] active:scale-95 transition-all shadow-xs"
          >
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            <span className="whitespace-nowrap">{t.nav.donate}</span>
          </button>

          {/* Hamburger trigger for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bottom-0 z-50 bg-white overflow-y-auto px-5 py-6 border-t border-slate-200 animate-in fade-in duration-200">
          <div className="flex flex-col gap-5 max-w-lg mx-auto pb-16">
            {/* Language toggle inside mobile menu */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#1E3A8A]" />
                <span>Langue / Language :</span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onToggleLanguage('fr')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    language === 'fr' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-slate-700 border'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => onToggleLanguage('en')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    language === 'en' ? 'bg-[#1E3A8A] text-white' : 'bg-white text-slate-700 border'
                  }`}
                >
                  ING / EN
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNavClick('accueil')}
              className={`text-left text-base font-semibold py-2 px-3 rounded-lg ${
                currentPage === 'accueil' ? 'bg-blue-50 text-[#1E3A8A]' : 'text-slate-800'
              }`}
            >
              {t.nav.home}
            </button>

            {/* L'Association Mobile */}
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider px-3">
                {t.nav.association}
              </span>
              <div className="mt-1 flex flex-col gap-1 pl-2">
                <button
                  onClick={() => handleNavClick('association')}
                  className="text-left text-sm py-1.5 px-3 rounded-md text-slate-700 hover:text-[#1E3A8A]"
                >
                  {t.nav.subAssociation.overview}
                </button>
                {navDropdowns.association.map((item) => (
                  <button
                    key={item.sub}
                    onClick={() => handleNavClick('association', item.sub)}
                    className="text-left text-sm py-1.5 px-3 rounded-md text-slate-600 hover:text-[#1E3A8A]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Nos Actions Mobile */}
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider px-3">
                {t.nav.actions}
              </span>
              <div className="mt-1 flex flex-col gap-1 pl-2">
                <button
                  onClick={() => handleNavClick('actions')}
                  className="text-left text-sm py-1.5 px-3 rounded-md text-slate-700 hover:text-[#1E3A8A]"
                >
                  {t.nav.subActions.overview}
                </button>
                {navDropdowns.actions.map((item) => (
                  <button
                    key={item.sub}
                    onClick={() => handleNavClick('actions', item.sub)}
                    className="text-left text-sm py-1.5 px-3 rounded-md text-slate-600 hover:text-[#1E3A8A]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Agenda Mobile */}
            <div className="border-b border-slate-100 pb-3">
              <button
                onClick={() => handleNavClick('agenda')}
                className="w-full text-left text-sm font-semibold py-2 px-3 rounded-lg bg-slate-50 text-slate-800 hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors"
              >
                {t.nav.agenda}
              </button>
            </div>

            {/* Médias Mobile */}
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider px-3">
                {t.nav.media}
              </span>
              <div className="mt-1 flex flex-col gap-1 pl-2">
                {navDropdowns.medias.map((item) => (
                  <button
                    key={item.sub}
                    onClick={() => handleNavClick('medias', item.sub)}
                    className="text-left text-sm py-1.5 px-3 rounded-md text-slate-600 hover:text-[#1E3A8A]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* S'engager Mobile */}
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider px-3">
                {t.nav.engage}
              </span>
              <div className="mt-1 flex flex-col gap-1 pl-2">
                {navDropdowns.engager.map((item) => (
                  <button
                    key={item.sub}
                    onClick={() => handleNavClick('s-engager', item.sub)}
                    className="text-left text-sm py-1.5 px-3 rounded-md text-slate-600 hover:text-[#1E3A8A]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="text-left text-base font-semibold py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-50"
            >
              {t.nav.contact}
            </button>

            {/* Action buttons inside drawer */}
            <div className="mt-4 flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('s-engager', 'adherer')}
                className="w-full py-2.5 px-4 rounded-xl border border-[#1E3A8A] text-[#1E3A8A] font-semibold text-sm hover:bg-blue-50 text-center"
              >
                {t.nav.subEngage.join}
              </button>
              <button
                onClick={() => handleNavClick('s-engager', 'faire-un-don')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#F97316] text-white font-semibold text-sm hover:bg-[#ea580c] text-center shadow-xs"
              >
                {t.nav.donate}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
