import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Compass,
  Palette,
  Leaf,
  Laptop,
  Instagram,
} from 'lucide-react';
import { PageId, SubPageId, EuropeanProject, AgendaEvent, BlogPost, Language } from '../types';
import {
  ASSET_IMAGES,
  getLocalizedData,
} from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { BrandLogo } from '../components/BrandLogo';
import { LocalYouthCarousel } from '../components/LocalYouthCarousel';
import { FormationSpotlight } from '../components/FormationSpotlight';

interface HomeViewProps {
  language: Language;
  onNavigate: (page: PageId, subPage?: SubPageId) => void;
  onSelectProject: (project: EuropeanProject) => void;
  onSelectEvent: (event: AgendaEvent) => void;
  onSelectArticle?: (article: BlogPost) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  language,
  onNavigate,
  onSelectProject,
  onSelectEvent,
}) => {
  const t = TRANSLATIONS[language];
  const {
    associationInfo,
    impactStats,
    actionDomains,
    agendaEvents,
    partnersData,
  } = getLocalizedData(language);

  // Animated counters trigger
  const [counters, setCounters] = useState(impactStats.map(() => 0));

  useEffect(() => {
    setCounters(impactStats.map((s) => s.value));
  }, [language, impactStats]);

  const domainIcons: Record<string, React.ReactNode> = {
    jeunesse: <Compass className="w-6 h-6 text-[#1E3A8A]" />,
    culture: <Palette className="w-6 h-6 text-[#F97316]" />,
    environnement: <Leaf className="w-6 h-6 text-[#10B981]" />,
    inclusion: <Laptop className="w-6 h-6 text-[#1E3A8A]" />,
  };

  return (
    <div className="space-y-20 sm:space-y-24 pb-12">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#1E3A8A] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={ASSET_IMAGES.hero}
            alt="Jeunes participants réunis lors d'un atelier Sans Limite à Paris"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/90 to-[#1E3A8A]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Col: Main Hero Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <BrandLogo size="md" />
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                  <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
                  <span>{t.hero.badge}</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {t.hero.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
                {t.hero.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('s-engager', 'adherer')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-white bg-[#F97316] hover:bg-[#ea580c] active:scale-95 transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm sm:text-base"
                >
                  <span>{t.hero.btnJoin}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('actions')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-white border-2 border-white/80 hover:bg-white/10 active:scale-95 transition-all text-sm sm:text-base"
                >
                  {t.hero.btnActions}
                </button>
              </div>
            </div>

            {/* Right Col: Prominent Official Logo Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-sm w-full">
                {/* Glowing aura */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/25 via-blue-400/20 to-orange-500/25 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center">
                  {/* Real Official Emblem (Slogo.png) */}
                  <div className="p-4 bg-white rounded-3xl shadow-2xl border-4 border-white/40 mb-4 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                    <img
                      src="/assets/images/Slogo.png?v=2"
                      alt="Logo officiel Sans Limite"
                      className="w-40 sm:w-48 h-auto max-h-36 object-contain drop-shadow-sm"
                      loading="eager"
                    />
                  </div>

                  <span className="text-2xl font-black tracking-tight text-white font-display">
                    Sans Limite
                  </span>
                  <span className="text-xs font-bold text-orange-300 uppercase tracking-widest mt-1">
                    Association Loi 1901 · Paris / Vitry
                  </span>
                  <p className="text-xs text-slate-200 mt-2.5 leading-relaxed">
                    {language === 'fr'
                      ? "Organisation d'intérêt général engagée pour l'émancipation des jeunes et la coopération européenne."
                      : "Official non-profit empowering youth through non-formal education & European exchanges."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Instagram Social Spotlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="bg-gradient-to-r from-orange-50 via-pink-50/40 to-amber-50/50 rounded-3xl p-6 sm:p-8 border border-orange-200/80 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md shrink-0">
              <Instagram className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  {t.instaSection.kicker}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-pink-100 text-pink-700 border border-pink-200">
                  @sanslimiteong
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {t.instaSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {t.instaSection.subtitle}
              </p>
            </div>
          </div>

          <a
            href={associationInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 active:scale-95 transition-all shadow-md hover:shadow-lg text-xs sm:text-sm shrink-0"
          >
            <Instagram className="w-4 h-4 fill-white" />
            <span>@sanslimiteong · {t.instaSection.btn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 3. Qui sommes-nous ? / Who we are */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
              {t.aboutBrief.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.aboutBrief.title}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {t.aboutBrief.p1}
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              {t.aboutBrief.p2}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('association')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#F97316] transition-colors group"
              >
                <span>{t.aboutBrief.link}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={ASSET_IMAGES.hero}
                alt="Équipe et participants de l'association Sans Limite lors d'un atelier"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Floating official logo badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-slate-100 flex items-center gap-3">
                <img
                  src="/assets/images/Slogo.png?v=2"
                  alt="Sans Limite Logo"
                  className="w-11 h-9 object-contain shrink-0"
                />
                <div className="pr-1">
                  <span className="text-xs font-bold text-slate-900 block leading-tight">Sans Limite</span>
                  <span className="text-[10px] text-orange-600 font-semibold uppercase tracking-wider">Logo Officiel</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-xs sm:text-sm font-medium">
                  {t.aboutBrief.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nos domaines d'action */}
      <section className="bg-slate-100/60 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
              {t.domainsSection.kicker}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.domainsSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {t.domainsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionDomains.map((domain) => (
              <div
                key={domain.id}
                className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    {domainIcons[domain.id]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {domain.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <button
                    onClick={() => onNavigate('actions', domain.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] hover:text-[#F97316] transition-colors"
                  >
                    <span>{t.domainsSection.discover}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact Counters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E3A8A] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-blue-800/80 text-center">
            {impactStats.map((stat, idx) => {
              const label =
                idx === 0
                  ? t.impactSection.participants
                  : idx === 1
                  ? t.impactSection.projects
                  : idx === 2
                  ? t.impactSection.countries
                  : t.impactSection.volunteers;
              const note =
                idx === 0
                  ? t.impactSection.participantsNote
                  : idx === 1
                  ? t.impactSection.projectsNote
                  : idx === 2
                  ? t.impactSection.countriesNote
                  : t.impactSection.volunteersNote;

              return (
                <div key={idx} className="pt-6 lg:pt-0 lg:px-4 space-y-1">
                  <div className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white tabular-nums">
                    {counters[idx]}
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-semibold text-orange-300 mt-1">
                    {label}
                  </div>
                  <div className="text-xs text-blue-200">
                    {note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Inscription Formation Pédagogique Spéciale (Affiche DA1 · Apprendre Autrement) */}
      <FormationSpotlight
        language={language}
        onNavigateContact={() => onNavigate('contact')}
        onSelectEvent={onSelectEvent}
      />

      {/* 6. Prochains événements (Agenda) */}
      <section className="bg-slate-100/60 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                {t.agendaSection.kicker}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t.agendaSection.title}
              </h2>
              <p className="text-sm text-slate-600">
                {t.agendaSection.subtitle}
              </p>
            </div>
            <button
              onClick={() => onNavigate('agenda')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] hover:text-[#F97316] transition-colors"
            >
              <span>{t.agendaSection.viewAll}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agendaEvents.slice(0, 3).map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Date badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex flex-col items-center justify-center text-center">
                      <span className="text-xs font-bold text-[#F97316] uppercase leading-none">
                        {evt.monthLabel.slice(0, 3)}
                      </span>
                      <span className="text-lg font-black text-slate-900 leading-none mt-1">
                        {evt.dayNumber}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase">
                        {evt.typeLabel}
                      </span>
                      <div className="text-xs text-slate-600">{evt.time}</div>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {evt.shortDesc}
                  </p>

                  <div className="text-xs text-slate-500 pt-1 flex items-center gap-1.5">
                    <span className="font-semibold text-slate-700">{t.agendaSection.location}</span>
                    <span className="truncate">{evt.place}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <button
                    onClick={() => onSelectEvent(evt)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors text-center"
                  >
                    {t.agendaSection.register}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Carrousel des Actions Locales & Voix des Participants (Gaspillage Alimentaire, Move & Connect, Éco-Défis) */}
      <LocalYouthCarousel
        language={language}
        onNavigateContact={() => onNavigate('contact')}
        onNavigateEvents={() => onNavigate('agenda')}
      />

      {/* 8. Partenaires & Bailleurs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t.partnersSection.kicker}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {t.partnersSection.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {partnersData.local.map((partner, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-slate-200 bg-white text-center shadow-2xs flex flex-col items-center justify-center min-h-[90px]"
            >
              <span className="text-xs font-bold text-slate-800 leading-snug">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-500 mt-1">{partner.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Call-to-Action Band */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A] to-[#162a63] rounded-3xl p-8 sm:p-14 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              {t.ctaBand.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {t.ctaBand.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('s-engager', 'devenir-benevole')}
              className="px-5 py-3 rounded-xl font-semibold text-white bg-[#10B981] hover:bg-[#059669] active:scale-95 transition-all text-xs sm:text-sm shadow-xs"
            >
              {t.ctaBand.btnVolunteer}
            </button>
            <button
              onClick={() => onNavigate('s-engager', 'faire-un-don')}
              className="px-5 py-3 rounded-xl font-semibold text-white bg-[#F97316] hover:bg-[#ea580c] active:scale-95 transition-all text-xs sm:text-sm shadow-xs flex items-center gap-1.5"
            >
              <span>{t.ctaBand.btnDonate}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
