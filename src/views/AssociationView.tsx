import React, { useState } from 'react';
import {
  HeartHandshake,
  Users,
  Globe,
  Leaf,
  Sparkles,
  Palette,
  Linkedin,
  Building,
} from 'lucide-react';
import { SubPageId, Language } from '../types';
import {
  getLocalizedData,
  ASSET_IMAGES,
} from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { PageBanner } from '../components/PageBanner';

interface AssociationViewProps {
  language: Language;
  currentSubPage?: SubPageId;
  onToast?: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const AssociationView: React.FC<AssociationViewProps> = ({
  language,
  currentSubPage,
}) => {
  const [selectedPartnerCountry, setSelectedPartnerCountry] = useState<string | null>(null);

  const t = TRANSLATIONS[language];
  const { associationInfo, teamMembers, partnersData } = getLocalizedData(language);

  const valueIcons: Record<string, React.ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#1E3A8A]" />,
    Users: <Users className="w-6 h-6 text-[#F97316]" />,
    Globe: <Globe className="w-6 h-6 text-[#10B981]" />,
    Leaf: <Leaf className="w-6 h-6 text-[#10B981]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#F97316]" />,
    Palette: <Palette className="w-6 h-6 text-[#1E3A8A]" />,
  };

  return (
    <div className="space-y-16 pb-16">
      <PageBanner
        title={t.associationPage.title}
        subtitle={t.associationPage.subtitle}
        backgroundImage={ASSET_IMAGES.hero}
        badge={t.associationPage.badge}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 2b. Mission, vision & valeurs */}
        <section id="mission-valeurs" className="scroll-mt-24 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
              {t.associationPage.missionKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.associationPage.missionTitle}
            </h2>
          </div>

          {/* Mission & Vision 2-col box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-[#1E3A8A]">{t.associationPage.missionBoxTitle}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {associationInfo.mission}
              </p>
            </div>
            <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-[#ea580c]">{t.associationPage.visionBoxTitle}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {associationInfo.vision}
              </p>
            </div>
          </div>

          {/* 6 Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {associationInfo.values.map((v, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-slate-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {valueIcons[v.icon]}
                </div>
                <h3 className="text-base font-bold text-slate-900">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2c. L'équipe (Bureau & Bénévoles) */}
        <section id="equipe" className="scroll-mt-24 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
              {t.associationPage.teamKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.associationPage.teamTitle}
            </h2>
            <p className="text-sm text-slate-600">
              {t.associationPage.teamDesc}
            </p>
          </div>

          {/* Group 1: Le Bureau */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#1E3A8A] flex items-center gap-2">
              <Building className="w-5 h-5 text-[#1E3A8A]" />
              <span>{t.associationPage.bureauTitle}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.filter((m) => m.category === 'bureau').map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                      <p className="text-xs font-semibold text-[#F97316]">{member.role}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                  </div>
                  {member.linkedin && (
                    <div className="pt-2 border-t border-slate-100">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-blue-700 transition-colors"
                        aria-label={`Profil LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Équipe opérationnelle */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#10B981]" />
              <span>{t.associationPage.operationalTitle}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.filter((m) => m.category === 'operationnel').map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
                      <p className="text-xs font-semibold text-[#10B981]">{member.role}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                  </div>
                  {member.linkedin && (
                    <div className="pt-2 border-t border-slate-100">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2d. Nos partenaires */}
        <section id="partenaires" className="scroll-mt-24 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
              {t.associationPage.partnersKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.associationPage.partnersTitle}
            </h2>
            <p className="text-sm text-slate-600">
              {t.associationPage.partnersDesc}
            </p>
          </div>

          {/* Partenaires locaux et nationaux */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              {t.associationPage.localPartners}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {partnersData.local.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs"
                >
                  <div className="text-xs font-semibold text-[#1E3A8A]">{p.category}</div>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">{p.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partenaires européens + Interactive Europe map */}
          <div className="space-y-4 pt-4">
            <h3 className="text-base font-bold text-slate-900">
              {t.associationPage.europeanPartners}
            </h3>

            {/* Interactive European Network Visualizer */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-emerald-400" />
                    <span>{t.associationPage.mapTitle}</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {t.associationPage.mapDesc}
                  </p>
                </div>
                {selectedPartnerCountry && (
                  <button
                    onClick={() => setSelectedPartnerCountry(null)}
                    className="text-xs text-orange-400 underline underline-offset-2 self-start"
                  >
                    {t.associationPage.viewAllCountries}
                  </button>
                )}
              </div>

              {/* Country tags */}
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(partnersData.european.map((p) => p.country))).map((country) => {
                  const partner = partnersData.european.find((p) => p.country === country);
                  const isSelected = selectedPartnerCountry === country;
                  return (
                    <button
                      key={country}
                      onClick={() =>
                        setSelectedPartnerCountry(isSelected ? null : country)
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        isSelected
                          ? 'bg-[#F97316] text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <span>{partner?.flag}</span>
                      <span>{country}</span>
                    </button>
                  );
                })}
              </div>

              {/* Partners list filtered */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                {partnersData.european
                  .filter(
                    (p) => !selectedPartnerCountry || p.country === selectedPartnerCountry,
                  )
                  .map((p, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/90 border border-slate-700 p-3.5 rounded-xl space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{p.flag}</span>
                        <span className="text-xs font-bold text-slate-200">{p.country}</span>
                      </div>
                      <div className="text-xs font-semibold text-white leading-snug">{p.name}</div>
                      <div className="text-[11px] text-slate-400">{p.city}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
