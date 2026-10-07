import React, { useState } from 'react';
import {
  Compass,
  Palette,
  Leaf,
  Laptop,
  CheckCircle,
  ArrowRight,
  Users,
  X,
} from 'lucide-react';
import { PageId, SubPageId, EuropeanProject, AgendaEvent, Language } from '../types';
import { getLocalizedData, ASSET_IMAGES } from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { PageBanner } from '../components/PageBanner';

interface ActionsViewProps {
  language: Language;
  currentSubPage?: SubPageId;
  onNavigate: (page: PageId, subPage?: SubPageId) => void;
  onSelectProject: (project: EuropeanProject) => void;
  onSelectEvent: (event: AgendaEvent) => void;
}

export const ActionsView: React.FC<ActionsViewProps> = ({
  language,
  currentSubPage,
  onNavigate,
  onSelectProject,
  onSelectEvent,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; caption: string } | null>(
    null,
  );

  const t = TRANSLATIONS[language];
  const { actionDomains } = getLocalizedData(language);

  // Determine if a specific sub-action is selected
  const activeDomain = actionDomains.find((d) => d.slug === currentSubPage);

  const domainIcons: Record<string, React.ReactNode> = {
    jeunesse: <Compass className="w-8 h-8 text-[#1E3A8A]" />,
    culture: <Palette className="w-8 h-8 text-[#F97316]" />,
    environnement: <Leaf className="w-8 h-8 text-[#10B981]" />,
    inclusion: <Laptop className="w-8 h-8 text-[#1E3A8A]" />,
  };

  // If a specific subpage is chosen, render the structured sub-page template
  if (activeDomain) {
    return (
      <div className="space-y-14 pb-16">
        <PageBanner
          title={activeDomain.title}
          subtitle={activeDomain.shortDesc}
          backgroundImage={activeDomain.galleryImages[0]?.url || ASSET_IMAGES.hero}
          badge={t.actionsPage.badge}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Sub-nav quick switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
            <button
              onClick={() => onNavigate('actions')}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-900 shrink-0"
            >
              {t.actionsPage.allDomainsBtn}
            </button>
            {actionDomains.map((dom) => (
              <button
                key={dom.id}
                onClick={() => onNavigate('actions', dom.slug)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0 transition-colors ${
                  dom.slug === activeDomain.slug
                    ? 'bg-[#1E3A8A] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dom.title}
              </button>
            ))}
          </div>

          {/* 1. Intro (Why this matters) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                {t.actionsPage.contextKicker}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {t.actionsPage.contextTitle}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {activeDomain.fullDesc}
              </p>
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                  {t.actionsPage.observationTitle}
                </span>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                  {activeDomain.whyItMatters}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={activeDomain.galleryImages[1]?.url || ASSET_IMAGES.hero}
                alt={activeDomain.title}
                className="w-full h-72 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          {/* 2. Activities */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                {t.actionsPage.activitiesKicker}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {t.actionsPage.activitiesTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeDomain.activities.map((act, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-[#F97316] uppercase tracking-wide">
                      {act.frequency}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{act.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{act.description}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.actionsPage.freeAccess}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Target audience */}
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-4">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
              {t.actionsPage.audienceKicker}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {t.actionsPage.audienceTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {activeDomain.targetAudience.map((aud, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3"
                >
                  <Users className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-800 leading-snug">{aud}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Photo gallery */}
          <section className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                {t.actionsPage.galleryKicker}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {t.actionsPage.galleryTitle}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeDomain.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPhoto(img)}
                  className="group relative rounded-2xl overflow-hidden aspect-4/3 border border-slate-200 bg-slate-100 cursor-pointer"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs">
                    <p className="line-clamp-2">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call-to-action block */}
          <section className="bg-blue-50/70 p-8 rounded-3xl border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#1E3A8A]">
                {language === 'fr'
                  ? `Envie de participer à nos ateliers ${activeDomain.title} ?`
                  : `Want to join our ${activeDomain.title} workshops?`}
              </h3>
              <p className="text-xs text-slate-600">
                {language === 'fr'
                  ? 'Rejoignez-nous gratuitement chaque semaine ou proposez une idée d’atelier !'
                  : 'Join us for free every week or propose a workshop topic!'}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('agenda')}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors"
              >
                {t.nav.agenda}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1E3A8A] bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                {t.nav.contact}
              </button>
            </div>
          </section>
        </div>

        {/* Lightbox for gallery images */}
        {selectedPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
          >
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black"
                aria-label={t.common.close}
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full max-h-[75vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-950 text-slate-200 text-xs text-center">
                {selectedPhoto.caption}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Otherwise, Overview page: intro paragraph + grid of all fields of action
  return (
    <div className="space-y-16 pb-16">
      <PageBanner
        title={t.actionsPage.title}
        subtitle={t.actionsPage.subtitle}
        backgroundImage={ASSET_IMAGES.eco}
        badge={t.actionsPage.badge}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
            {t.actionsPage.overviewKicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.actionsPage.overviewTitle}
          </h2>
          <p className="text-base text-slate-700 leading-relaxed">
            {t.actionsPage.overviewSubtitle}
          </p>
        </div>

        {/* Grid of all fields of action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actionDomains.map((domain) => (
            <div
              key={domain.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {domainIcons[domain.id]}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{domain.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{domain.shortDesc}</p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-800 block">
                    {language === 'fr' ? 'Exemples d’activités :' : 'Sample activities:'}
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {domain.activities.map((act, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                        <span>{act.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('actions', domain.slug)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#162a63] transition-colors flex items-center justify-center gap-2"
                >
                  <span>{t.actionsPage.discoverDomain}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
