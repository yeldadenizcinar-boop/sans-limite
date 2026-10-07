import React, { useState } from 'react';
import {
  Filter,
  CheckCircle,
  Clock,
  ExternalLink,
  Download,
  Send,
  X,
  Sparkles,
  MapPin,
  Calendar,
  Users,
} from 'lucide-react';
import { SubPageId, EuropeanProject, OpenCall, Language } from '../types';
import { getLocalizedData, ASSET_IMAGES } from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { PageBanner } from '../components/PageBanner';

interface ProjectsViewProps {
  language: Language;
  currentSubPage?: SubPageId;
  selectedProject: EuropeanProject | null;
  onSelectProject: (project: EuropeanProject | null) => void;
  onToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  language,
  currentSubPage,
  selectedProject,
  onSelectProject,
  onToast,
}) => {
  const t = TRANSLATIONS[language];
  const { europeanProjects, openCalls } = getLocalizedData(language);

  const [activeTab, setActiveTab] = useState<'tous' | 'en-cours' | 'realises' | 'appels' | 'partenaire'>(
    currentSubPage === 'appels-participation'
      ? 'appels'
      : currentSubPage === 'devenir-partenaire'
      ? 'partenaire'
      : currentSubPage === 'projets-realises'
      ? 'realises'
      : currentSubPage === 'projets-en-cours'
      ? 'en-cours'
      : 'tous',
  );

  // Filters for projects
  const [filterAction, setFilterAction] = useState<string>('all');
  const [filterYear, setFilterYear] = useState<string>('all');

  // Application Modal state
  const [applyingCall, setApplyingCall] = useState<OpenCall | null>(null);
  const [appForm, setAppForm] = useState({
    nom: '',
    prenom: '',
    dob: '',
    email: '',
    telephone: '',
    ville: '',
    motivation: '',
    besoinsSpecifiques: '',
    consent: false,
  });

  // Partner Form state
  const [partnerForm, setPartnerForm] = useState({
    organisation: '',
    pays: '',
    contactName: '',
    email: '',
    website: '',
    picOid: '',
    actionType: 'KA152',
    message: '',
    consent: false,
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appForm.nom || !appForm.email || !appForm.motivation) {
      onToast(
        'error',
        language === 'fr' ? 'Champs requis' : 'Required fields',
        t.common.requiredFields,
      );
      return;
    }
    if (!appForm.consent) {
      onToast(
        'error',
        language === 'fr' ? 'Consentement requis' : 'Consent required',
        t.common.consentRequired,
      );
      return;
    }

    onToast(
      'success',
      language === 'fr' ? 'Candidature envoyée !' : 'Application submitted!',
      language === 'fr'
        ? `Félicitations ${appForm.prenom}, votre candidature pour "${applyingCall?.title}" a bien été enregistrée. Notre équipe vous contactera sous 5 jours.`
        : `Congratulations ${appForm.prenom}, your application for "${applyingCall?.title}" has been received. Our team will contact you within 5 days.`,
    );
    setApplyingCall(null);
    setAppForm({
      nom: '',
      prenom: '',
      dob: '',
      email: '',
      telephone: '',
      ville: '',
      motivation: '',
      besoinsSpecifiques: '',
      consent: false,
    });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.organisation || !partnerForm.email || !partnerForm.message) {
      onToast(
        'error',
        language === 'fr' ? 'Champs requis' : 'Required fields',
        t.common.requiredFields,
      );
      return;
    }
    if (!partnerForm.consent) {
      onToast(
        'error',
        language === 'fr' ? 'Consentement requis' : 'Consent required',
        t.common.consentRequired,
      );
      return;
    }

    onToast(
      'success',
      language === 'fr' ? 'Demande de partenariat transmise' : 'Partnership proposal sent',
      language === 'fr'
        ? `Merci ! Notre pôle Europe étudie votre proposition pour ${partnerForm.organisation} et reviendra vers vous avec nos accords OID/PIC.`
        : `Thank you! Our Europe department is reviewing your proposal for ${partnerForm.organisation} and will be in touch shortly.`,
    );
    setPartnerForm({
      organisation: '',
      pays: '',
      contactName: '',
      email: '',
      website: '',
      picOid: '',
      actionType: 'KA152',
      message: '',
      consent: false,
    });
  };

  // Filter logic
  const filteredProjects = europeanProjects.filter((p) => {
    if (activeTab === 'en-cours' && p.status !== 'en-cours') return false;
    if (activeTab === 'realises' && p.status !== 'realise') return false;
    if (filterAction !== 'all' && p.actionType !== filterAction) return false;
    if (filterYear !== 'all' && p.year.toString() !== filterYear) return false;
    return true;
  });

  return (
    <div className="space-y-14 pb-16">
      <PageBanner
        title={t.projectsPage.title}
        subtitle={t.projectsPage.subtitle}
        backgroundImage={ASSET_IMAGES.erasmus}
        badge={t.projectsPage.badge}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('tous')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              activeTab === 'tous'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.projectsPage.tabs.all}
          </button>
          <button
            onClick={() => setActiveTab('en-cours')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              activeTab === 'en-cours'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.projectsPage.tabs.ongoing}
          </button>
          <button
            onClick={() => setActiveTab('realises')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              activeTab === 'realises'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.projectsPage.tabs.completed}
          </button>
          <button
            onClick={() => setActiveTab('appels')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'appels'
                ? 'bg-[#F97316] text-white shadow-sm'
                : 'bg-orange-50 text-[#F97316] hover:bg-orange-100 border border-orange-200/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.projectsPage.tabs.calls} ({openCalls.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('partenaire')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              activeTab === 'partenaire'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.projectsPage.tabs.partner}
          </button>
        </div>

        {/* 4a. Erasmus+ & nous (Educational Intro) */}
        {(activeTab === 'tous' || activeTab === 'en-cours') && (
          <section className="bg-blue-50/60 border border-blue-200/80 rounded-3xl p-6 sm:p-10 space-y-4">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
              {language === 'fr' ? '4a. Comprendre notre engagement' : '4a. Understanding our mission'}
            </span>
            <h2 className="text-2xl font-extrabold text-[#1E3A8A] tracking-tight">
              {language === 'fr'
                ? "Erasmus+ & nous : l'Europe pour toutes et tous"
                : 'Erasmus+ & Sans Limite: Europe open to everyone'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">
                  {language === 'fr' ? "Qu'est-ce qu'Erasmus+ Jeunesse ?" : 'What is Erasmus+ Youth?'}
                </h3>
                <p>
                  {language === 'fr'
                    ? "Ce programme finance des mobilités d'apprentissage non formel à travers l'Europe. Il prend en charge l'intégralité des frais (voyage, logement, repas), garantissant l'accessibilité aux jeunes qui n'ont jamais voyagé."
                    : 'This EU programme funds non-formal learning mobilities across Europe. It covers 100% of all expenses (international travel, accommodation, meals, activities), guaranteeing equal access for youth with fewer opportunities.'}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">
                  {language === 'fr' ? 'Notre Rôle' : 'Our Role'}
                </h3>
                <p>
                  {language === 'fr'
                    ? "Sans Limite agit à la fois comme organisateur coordinateur en France et comme partenaire d'envoi vers des projets de qualité chez nos partenaires européens agréés."
                    : 'Sans Limite acts both as a coordinating host in the Paris region and as an accredited sending partner preparing participants for high-quality European projects.'}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">
                  {language === 'fr' ? "Pourquoi c'est capital ?" : 'Why is it transformative?'}
                </h3>
                <p>
                  {language === 'fr'
                    ? "Participer développe l'autonomie, renforce la confiance, améliore les langues étrangères et délivre le certificat Youthpass reconnu dans toute l'UE."
                    : 'Participating fosters self-reliance, boosts confidence, develops foreign languages, and grants the officially recognized European Youthpass certificate.'}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 4b & 4c. Filterable Project Grid */}
        {activeTab !== 'appels' && activeTab !== 'partenaire' && (
          <section className="space-y-6">
            {/* Filter controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span>{language === 'fr' ? 'Filtrer :' : 'Filter:'}</span>
                </div>
                <select
                  value={filterAction}
                  onChange={(e) => setFilterAction(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none"
                >
                  <option value="all">{t.projectsPage.filterAction}</option>
                  <option value="KA152">KA152 ({language === 'fr' ? 'Échanges de jeunes' : 'Youth Exchanges'})</option>
                  <option value="KA210">KA210 ({language === 'fr' ? 'Partenariats simplifiés' : 'Small-scale Partnerships'})</option>
                  <option value="KA153">KA153 ({language === 'fr' ? 'Mobilité animateurs' : 'Youth Workers Mobility'})</option>
                </select>

                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none"
                >
                  <option value="all">{t.projectsPage.filterYear}</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                </select>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                {filteredProjects.length} {language === 'fr' ? 'projet(s) trouvé(s)' : 'project(s) found'}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#1E3A8A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow">
                        {p.actionTypeLabel}
                      </div>
                      <div className="absolute top-3 right-3 bg-white/95 text-slate-900 text-[11px] font-bold px-2 py-0.5 rounded shadow">
                        {p.status === 'en-cours'
                          ? language === 'fr' ? 'En cours' : 'Ongoing'
                          : language === 'fr' ? 'Réalisé' : 'Completed'}
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="text-xs text-slate-500 font-medium">
                        <span>{p.dates}</span>
                        <span aria-hidden="true"> · </span>
                        <span>{p.location}</span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug">
                        {p.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {p.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => onSelectProject(p)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#1E3A8A] bg-blue-50/70 hover:bg-blue-100 hover:text-[#1E3A8A] transition-colors text-center"
                    >
                      {t.projectsPage.viewDetails}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4e. Appels à participation (Open Calls) */}
        {activeTab === 'appels' && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                {t.projectsPage.callsTitle}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {language === 'fr' ? 'Rejoignez un projet européen financé' : 'Join a Fully-Funded European Exchange'}
              </h2>
              <p className="text-sm text-slate-600">
                {t.projectsPage.callsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openCalls.map((call) => (
                <div
                  key={call.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-orange-300 transition-all space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-orange-100 text-[#F97316]">
                        {call.projectAcronym}
                      </span>
                      <span className="text-xs font-semibold text-rose-600 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{t.projectsPage.deadlineLabel} {call.deadline}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-snug">{call.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{call.description}</p>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 space-y-1">
                        <span className="text-slate-400 block flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{t.projectsPage.datesLabel}</span>
                        </span>
                        <span className="font-semibold text-slate-900">{call.dates}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 space-y-1">
                        <span className="text-slate-400 block flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{t.projectsPage.locationLabel}</span>
                        </span>
                        <span className="font-semibold text-slate-900">{call.location}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 space-y-1">
                        <span className="text-slate-400 block flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-slate-500" />
                          <span>{t.projectsPage.spotsLabel}</span>
                        </span>
                        <span className="font-semibold text-emerald-700">
                          {call.placesAvailable} {language === 'fr' ? 'places' : 'spots'} ({call.eligibleAges})
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 space-y-1">
                        <span className="text-slate-400 block">
                          {t.projectsPage.conditionsLabel}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {call.financialConditions}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-semibold text-slate-800 block mb-2">
                        {language === 'fr' ? 'Profil recherché :' : 'Participant profile:'}
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {call.profile.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => setApplyingCall(call)}
                      className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{t.projectsPage.applyCallBtn}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4f. Devenir partenaire (ONG Form) */}
        {activeTab === 'partenaire' && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs max-w-3xl mx-auto space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                {t.projectsPage.partnerTitle}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {language === 'fr' ? 'Formulaire de proposition de coopération' : 'Partnership Proposal Form'}
              </h2>
              <p className="text-xs text-slate-500">
                {t.projectsPage.partnerSubtitle}
              </p>
            </div>

            <form onSubmit={handlePartnerSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">{t.projectsPage.orgLabel}</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.organisation}
                    onChange={(e) =>
                      setPartnerForm({ ...partnerForm, organisation: e.target.value })
                    }
                    placeholder="ex. Youth Empowerment NGO"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">{t.projectsPage.countryLabel}</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.pays}
                    onChange={(e) => setPartnerForm({ ...partnerForm, pays: e.target.value })}
                    placeholder="ex. Espagne, Allemagne..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">{t.projectsPage.contactLabel}</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.contactName}
                    onChange={(e) =>
                      setPartnerForm({ ...partnerForm, contactName: e.target.value })
                    }
                    placeholder={language === 'fr' ? 'Prénom et nom' : 'Full name'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">{t.projectsPage.emailLabel}</label>
                  <input
                    type="email"
                    required
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    placeholder="contact@ngo.org"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">{t.projectsPage.websiteLabel}</label>
                  <input
                    type="url"
                    value={partnerForm.website}
                    onChange={(e) => setPartnerForm({ ...partnerForm, website: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">{t.projectsPage.picLabel}</label>
                  <input
                    type="text"
                    value={partnerForm.picOid}
                    onChange={(e) => setPartnerForm({ ...partnerForm, picOid: e.target.value })}
                    placeholder="ex. E10283921"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  {t.projectsPage.actionTypeLabel}
                </label>
                <select
                  value={partnerForm.actionType}
                  onChange={(e) => setPartnerForm({ ...partnerForm, actionType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                >
                  <option value="KA152">{language === 'fr' ? 'Échange de jeunes (KA152)' : 'Youth Exchange (KA152)'}</option>
                  <option value="KA210">{language === 'fr' ? 'Partenariat simplifié (KA210)' : 'Small-scale Partnership (KA210)'}</option>
                  <option value="KA153">{language === 'fr' ? 'Mobilité pour travailleurs de jeunesse (KA153)' : 'Youth Workers Mobility (KA153)'}</option>
                  <option value="Autre">{language === 'fr' ? 'Autre coopération' : 'Other cooperation'}</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">{t.projectsPage.messageLabel}</label>
                <textarea
                  rows={4}
                  required
                  value={partnerForm.message}
                  onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                  placeholder={
                    language === 'fr'
                      ? 'Décrivez votre structure, vos thématiques et la collaboration souhaitée...'
                      : 'Describe your organisation, your priorities, and your partnership ideas...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <label className="flex items-start gap-2 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={partnerForm.consent}
                  onChange={(e) => setPartnerForm({ ...partnerForm, consent: e.target.checked })}
                  className="mt-0.5 rounded text-[#1E3A8A] focus:ring-0"
                />
                <span className="text-slate-600 leading-tight">
                  {t.projectsPage.consentText}
                </span>
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#162a63] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.projectsPage.sendPartnerBtn}</span>
                </button>
              </div>
            </form>
          </section>
        )}
      </div>

      {/* 4d. SINGLE PROJECT PAGE MODAL */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
        >
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto space-y-8">
            {/* Header modal */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A8A]">
                  <span className="px-2.5 py-0.5 rounded bg-blue-50">
                    {selectedProject.actionTypeLabel}
                  </span>
                  <span>·</span>
                  <span>{selectedProject.projectNumber}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  {selectedProject.title} ({selectedProject.acronym})
                </h3>
              </div>
              <button
                onClick={() => onSelectProject(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                aria-label={t.projectsPage.modalClose}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Hero image and quick meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 rounded-2xl overflow-hidden h-64 border border-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-slate-500 block">
                    {language === 'fr' ? 'Dates de réalisation :' : 'Project dates:'}
                  </span>
                  <span className="font-bold text-slate-900">{selectedProject.dates}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">
                    {t.projectsPage.locationLabel}
                  </span>
                  <span className="font-bold text-slate-900">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">
                    {t.projectsPage.targetGroupTitle} :
                  </span>
                  <span className="text-slate-700">{selectedProject.targetGroup}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block">
                    {language === 'fr' ? 'Nombre de participants :' : 'Participants:'}
                  </span>
                  <span className="font-bold text-emerald-700">
                    {selectedProject.participantCount} {language === 'fr' ? 'personnes' : 'participants'}
                  </span>
                </div>
              </div>
            </div>

            {/* Summary & Objectives */}
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                {language === 'fr' ? 'Résumé du projet' : 'Project Summary'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedProject.summary}
              </p>

              <h4 className="text-base font-bold text-slate-900 pt-2">
                {t.projectsPage.objectivesTitle}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {selectedProject.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner Table with flags */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900">
                {t.projectsPage.partnersTitle}
              </h4>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-4">{language === 'fr' ? 'Organisation' : 'Organisation'}</th>
                      <th className="py-2.5 px-4">{language === 'fr' ? 'Pays' : 'Country'}</th>
                      <th className="py-2.5 px-4">{language === 'fr' ? 'Rôle' : 'Role'}</th>
                      <th className="py-2.5 px-4">{language === 'fr' ? 'Site web' : 'Website'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedProject.partners.map((pt, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="py-2.5 px-4 font-semibold text-slate-900">{pt.name}</td>
                        <td className="py-2.5 px-4">
                          <span className="mr-1.5">{pt.flag}</span>
                          <span>{pt.country}</span>
                        </td>
                        <td className="py-2.5 px-4">
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                              pt.role === 'Coordinateur'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {language === 'en' && pt.role === 'Coordinateur'
                              ? 'Coordinator'
                              : language === 'en' && pt.role === 'Partenaire'
                              ? 'Partner'
                              : pt.role}
                          </span>
                        </td>
                        <td className="py-2.5 px-4">
                          {pt.website && (
                            <a
                              href={pt.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#1E3A8A] hover:underline flex items-center gap-1"
                            >
                              <span>{language === 'fr' ? 'Visiter' : 'Visit'}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Programme Overview */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900">
                {t.projectsPage.programmeTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedProject.programmeOverview.map((item, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Results & Outputs */}
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900">
                {t.projectsPage.resultsTitle}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedProject.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1 text-xs"
                  >
                    <span className="font-semibold text-[#1E3A8A]">{res.type}</span>
                    <h5 className="font-bold text-slate-900">{res.title}</h5>
                    <p className="text-slate-600">{res.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {selectedProject.testimonials.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-slate-900">
                  {language === 'fr' ? 'Témoignages des participants' : 'Participant Testimonials'}
                </h4>
                <div className="space-y-3">
                  {selectedProject.testimonials.map((tItem, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-1.5"
                    >
                      <p className="text-xs text-slate-800 italic font-serif leading-relaxed">
                        &ldquo;{tItem.quote}&rdquo;
                      </p>
                      <div className="text-[11px] font-bold text-[#F97316]">
                        {tItem.name}, {tItem.age} {language === 'fr' ? 'ans' : 'years old'} · {tItem.city}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EU Funding Disclaimer Box */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-center gap-4 text-xs text-slate-600">
              <div className="w-12 h-8 bg-[#003399] rounded flex items-center justify-center text-[#FFCC00] text-[9px] font-bold shrink-0">
                ★★★★
              </div>
              <p className="leading-relaxed">
                {t.footer.euDisclaimer}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => onSelectProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                {t.projectsPage.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {applyingCall && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                  {language === 'fr' ? 'Candidature Erasmus+' : 'Erasmus+ Application'}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  {language === 'fr' ? 'Postuler à :' : 'Apply for:'} {applyingCall.title}
                </h3>
              </div>
              <button
                onClick={() => setApplyingCall(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {language === 'fr' ? 'Nom *' : 'Last Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={appForm.nom}
                    onChange={(e) => setAppForm({ ...appForm, nom: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {language === 'fr' ? 'Prénom *' : 'First Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={appForm.prenom}
                    onChange={(e) => setAppForm({ ...appForm, prenom: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {language === 'fr' ? 'Date de naissance *' : 'Date of Birth *'}
                  </label>
                  <input
                    type="date"
                    required
                    value={appForm.dob}
                    onChange={(e) => setAppForm({ ...appForm, dob: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {language === 'fr' ? 'Ville de résidence *' : 'City of Residence *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={appForm.ville}
                    onChange={(e) => setAppForm({ ...appForm, ville: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={appForm.email}
                    onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {language === 'fr' ? 'Téléphone *' : 'Phone *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={appForm.telephone}
                    onChange={(e) => setAppForm({ ...appForm, telephone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  {language === 'fr' ? 'Vos motivations pour ce projet *' : 'Your motivation for this project *'}
                </label>
                <textarea
                  rows={3}
                  required
                  value={appForm.motivation}
                  onChange={(e) => setAppForm({ ...appForm, motivation: e.target.value })}
                  placeholder={
                    language === 'fr'
                      ? 'Pourquoi souhaitez-vous participer ? Qu’espérez-vous apprendre ou partager ?'
                      : 'Why do you wish to join? What do you hope to learn or contribute?'
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  {language === 'fr' ? 'Besoins spécifiques ou régime alimentaire' : 'Special needs or dietary requirements'}
                </label>
                <input
                  type="text"
                  value={appForm.besoinsSpecifiques}
                  onChange={(e) => setAppForm({ ...appForm, besoinsSpecifiques: e.target.value })}
                  placeholder={language === 'fr' ? 'ex. Végétarien, allergies, accès PMR...' : 'e.g., Vegetarian, allergies, accessibility...'}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <label className="flex items-start gap-2 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={appForm.consent}
                  onChange={(e) => setAppForm({ ...appForm, consent: e.target.checked })}
                  className="mt-0.5 rounded text-[#1E3A8A] focus:ring-0"
                />
                <span className="text-slate-600 leading-tight">
                  {language === 'fr'
                    ? "J'atteste de l'exactitude de ces informations et j'accepte d'être recontacté·e par Sans Limite pour l'organisation de la mobilité."
                    : 'I certify that this information is accurate and agree to be contacted by Sans Limite regarding this mobility project.'}
                </span>
              </label>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setApplyingCall(null)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100"
                >
                  {t.common.close}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-bold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors"
                >
                  {language === 'fr' ? 'Envoyer ma candidature' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
