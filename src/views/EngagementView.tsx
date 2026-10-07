import React, { useState } from 'react';
import {
  Heart,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Send,
  Lock,
  GraduationCap,
  Compass,
} from 'lucide-react';
import { SubPageId, Language } from '../types';
import { getLocalizedData, ASSET_IMAGES } from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { PageBanner } from '../components/PageBanner';

interface EngagementViewProps {
  language: Language;
  currentSubPage?: SubPageId;
  onToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const EngagementView: React.FC<EngagementViewProps> = ({
  language,
  currentSubPage,
  onToast,
}) => {
  const t = TRANSLATIONS[language];
  const { associationInfo } = getLocalizedData(language);

  const [activeTab, setActiveTab] = useState<'adherer' | 'benevole' | 'service-civique' | 'don'>(
    currentSubPage === 'faire-un-don'
      ? 'don'
      : currentSubPage === 'devenir-benevole'
      ? 'benevole'
      : currentSubPage === 'service-civique'
      ? 'service-civique'
      : 'adherer',
  );

  // Free Join / Registration Form State
  const [selectedRole, setSelectedRole] = useState<'volunteer' | 'member' | 'youthWorker' | 'training'>('member');
  const [memberForm, setMemberForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    city: '',
    age: '',
    motivation: '',
    interests: {
      youth: true,
      culture: true,
      ecology: false,
      inclusion: false,
      erasmus: true,
    },
    consent: false,
  });

  // Volunteer form state
  const [volForm, setVolForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    age: '',
    dispoSemaine: false,
    dispoWeekend: false,
    dispoSoir: false,
    interetJeunesse: false,
    interetNumerique: false,
    interetEcologie: false,
    interetEurope: false,
    message: '',
    consent: false,
  });

  // Donation state
  const [donationFrequency, setDonationFrequency] = useState<'ponctuel' | 'mensuel'>('ponctuel');
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorForm, setDonorForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    adresse: '',
  });

  const handleMemberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberForm.prenom || !memberForm.nom || !memberForm.email) {
      onToast(
        'error',
        language === 'fr' ? 'Champs requis' : 'Required fields',
        language === 'fr'
          ? 'Veuillez renseigner votre prénom, votre nom et votre adresse email.'
          : 'Please enter your first name, last name, and email address.',
      );
      return;
    }
    if (!memberForm.consent) {
      onToast(
        'error',
        language === 'fr' ? 'Consentement requis' : 'Consent required',
        t.common.consentRequired,
      );
      return;
    }

    onToast(
      'success',
      t.engagementPage.form.successTitle,
      `${t.engagementPage.form.successMsg} (${memberForm.prenom} ${memberForm.nom})`,
    );
    setMemberForm({
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      city: '',
      age: '',
      motivation: '',
      interests: {
        youth: true,
        culture: true,
        ecology: false,
        inclusion: false,
        erasmus: true,
      },
      consent: false,
    });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volForm.nom || !volForm.email || !volForm.message) {
      onToast(
        'error',
        language === 'fr' ? 'Champs requis' : 'Required fields',
        language === 'fr'
          ? 'Veuillez renseigner tous les champs obligatoires.'
          : 'Please fill in all required fields.',
      );
      return;
    }
    if (!volForm.consent) {
      onToast(
        'error',
        language === 'fr' ? 'Consentement requis' : 'Consent required',
        language === 'fr'
          ? 'Veuillez accepter la charte des bénévoles.'
          : 'Please accept the volunteer charter.',
      );
      return;
    }

    onToast(
      'success',
      language === 'fr' ? 'Candidature bénévole reçue !' : 'Volunteer application received!',
      language === 'fr'
        ? `Merci pour votre engagement, ${volForm.prenom} ! Notre coordinateur associatif vous contactera sous 48h pour un premier échange autour d’un café.`
        : `Thank you for your commitment, ${volForm.prenom}! Our coordinator will reach out within 48h for an initial welcome conversation.`,
    );
    setVolForm({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      age: '',
      dispoSemaine: false,
      dispoWeekend: false,
      dispoSoir: false,
      interetJeunesse: false,
      interetNumerique: false,
      interetEcologie: false,
      interetEurope: false,
      message: '',
      consent: false,
    });
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : donationAmount;
    if (!finalAmount || finalAmount <= 0) {
      onToast(
        'error',
        language === 'fr' ? 'Montant requis' : 'Amount required',
        language === 'fr'
          ? 'Veuillez spécifier un montant de don valide.'
          : 'Please specify a valid donation amount.',
      );
      return;
    }
    if (!donorForm.email || !donorForm.nom) {
      onToast(
        'error',
        language === 'fr' ? 'Coordonnées requises' : 'Details required',
        language === 'fr'
          ? 'Veuillez renseigner vos coordonnées pour le reçu fiscal.'
          : 'Please provide your details for the official tax receipt.',
      );
      return;
    }

    const netCost = (finalAmount * 0.34).toFixed(2);
    onToast(
      'success',
      language === 'fr' ? 'Don enregistré avec succès !' : 'Donation successfully received!',
      language === 'fr'
        ? `Un immense merci pour votre générosité de ${finalAmount} € (${donationFrequency}). Après déduction fiscale de 66%, ce don ne vous coûte réellement que ${netCost} €. Votre reçu fiscal officiel Cerfa a été envoyé à ${donorForm.email}.`
        : `A heartfelt thank you for your generous gift of €${finalAmount} (${donationFrequency}). After the 66% French tax deduction, this donation actually costs you only €${netCost}. Your official Cerfa tax receipt has been emailed to ${donorForm.email}.`,
    );
    setDonorForm({ prenom: '', nom: '', email: '', adresse: '' });
  };

  return (
    <div className="space-y-14 pb-16">
      <PageBanner
        title={t.engagementPage.title}
        subtitle={t.engagementPage.subtitle}
        backgroundImage={ASSET_IMAGES.hero}
        badge={t.engagementPage.badge}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('adherer')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'adherer'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>{t.engagementPage.tabs.join}</span>
          </button>
          <button
            onClick={() => setActiveTab('benevole')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'benevole'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.engagementPage.tabs.volunteer}</span>
          </button>
          <button
            onClick={() => setActiveTab('service-civique')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'service-civique'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.engagementPage.tabs.civicService}</span>
          </button>
          <button
            onClick={() => setActiveTab('don')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'don'
                ? 'bg-[#F97316] text-white shadow-sm'
                : 'bg-orange-50 text-[#F97316] hover:bg-orange-100 border border-orange-200/60'
            }`}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>{t.engagementPage.tabs.donate}</span>
          </button>
        </div>

        {/* 8a. ADHÉRER / REJOINDRE (100% GRATUIT) */}
        {activeTab === 'adherer' && (
          <div className="space-y-12">
            {/* Header intro with free badge */}
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.engagementPage.freeNoticeBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {t.engagementPage.joinTitle}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.engagementPage.joinDesc}
              </p>
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-[#1E3A8A] font-medium leading-relaxed">
                💡 {t.engagementPage.freeNotice}
              </div>
            </div>

            {/* Selection of 4 Free Roles / Engagement Types */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                {t.engagementPage.joinTiersTitle}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Gönüllülük / Bénévolat */}
                <div
                  onClick={() => setSelectedRole('volunteer')}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                    selectedRole === 'volunteer'
                      ? 'border-[#1E3A8A] bg-blue-50/50 shadow-md ring-2 ring-[#1E3A8A]/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-orange-100 text-[#F97316]">
                        {t.engagementPage.options.volunteer.tag}
                      </span>
                      <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {language === 'fr' ? 'Gratuit' : 'Free'}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#F97316]" />
                      <span>{t.engagementPage.options.volunteer.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.engagementPage.options.volunteer.desc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#1E3A8A]">
                    <span>{selectedRole === 'volunteer' ? '✓ ' + (language === 'fr' ? 'Sélectionné' : 'Selected') : (language === 'fr' ? 'Choisir cette option' : 'Select this option')}</span>
                  </div>
                </div>

                {/* 2. Üyelik / Adhésion citoyenne */}
                <div
                  onClick={() => setSelectedRole('member')}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                    selectedRole === 'member'
                      ? 'border-[#1E3A8A] bg-blue-50/50 shadow-md ring-2 ring-[#1E3A8A]/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-100 text-[#1E3A8A]">
                        {t.engagementPage.options.member.tag}
                      </span>
                      <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {language === 'fr' ? 'Gratuit' : 'Free'}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#1E3A8A]" />
                      <span>{t.engagementPage.options.member.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.engagementPage.options.member.desc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#1E3A8A]">
                    <span>{selectedRole === 'member' ? '✓ ' + (language === 'fr' ? 'Sélectionné' : 'Selected') : (language === 'fr' ? 'Choisir cette option' : 'Select this option')}</span>
                  </div>
                </div>

                {/* 3. Gençlik Çalışanı Olma / Travailleur de jeunesse */}
                <div
                  onClick={() => setSelectedRole('youthWorker')}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                    selectedRole === 'youthWorker'
                      ? 'border-[#1E3A8A] bg-blue-50/50 shadow-md ring-2 ring-[#1E3A8A]/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-purple-100 text-purple-700">
                        {t.engagementPage.options.youthWorker.tag}
                      </span>
                      <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {language === 'fr' ? 'Gratuit' : 'Free'}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-purple-600" />
                      <span>{t.engagementPage.options.youthWorker.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.engagementPage.options.youthWorker.desc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#1E3A8A]">
                    <span>{selectedRole === 'youthWorker' ? '✓ ' + (language === 'fr' ? 'Sélectionné' : 'Selected') : (language === 'fr' ? 'Choisir cette option' : 'Select this option')}</span>
                  </div>
                </div>

                {/* 4. Eğitim Fırsatlarından Yararlanma / Formations & Erasmus+ */}
                <div
                  onClick={() => setSelectedRole('training')}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-3 ${
                    selectedRole === 'training'
                      ? 'border-[#1E3A8A] bg-blue-50/50 shadow-md ring-2 ring-[#1E3A8A]/20'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800">
                        {t.engagementPage.options.training.tag}
                      </span>
                      <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {language === 'fr' ? 'Gratuit' : 'Free'}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                      <span>{t.engagementPage.options.training.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.engagementPage.options.training.desc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center text-xs font-bold text-[#1E3A8A]">
                    <span>{selectedRole === 'training' ? '✓ ' + (language === 'fr' ? 'Sélectionné' : 'Selected') : (language === 'fr' ? 'Choisir cette option' : 'Select this option')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form (No payment, 100% Free) */}
            <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                    {t.engagementPage.form.title}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    ✓ {language === 'fr' ? 'Adhésion 100% Gratuite' : '100% Free Participation'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {t.engagementPage.form.subtitle}
                </p>
              </div>

              <form onSubmit={handleMemberSubmit} className="space-y-5 text-xs">
                {/* Active Choice Notification */}
                <div className="p-3.5 bg-blue-50/70 border border-blue-200/80 rounded-2xl flex items-center justify-between text-slate-800">
                  <span>
                    <strong className="text-slate-600">{t.engagementPage.form.selectedRole}</strong>{' '}
                    <span className="text-[#1E3A8A] font-bold">
                      {selectedRole === 'volunteer'
                        ? t.engagementPage.options.volunteer.title
                        : selectedRole === 'member'
                        ? t.engagementPage.options.member.title
                        : selectedRole === 'youthWorker'
                        ? t.engagementPage.options.youthWorker.title
                        : t.engagementPage.options.training.title}
                    </span>
                  </span>
                  <span className="text-xs font-black text-emerald-700 uppercase bg-white px-2 py-0.5 rounded shadow-2xs">
                    0 €
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.engagementPage.form.firstName}
                    </label>
                    <input
                      type="text"
                      required
                      value={memberForm.prenom}
                      onChange={(e) => setMemberForm({ ...memberForm, prenom: e.target.value })}
                      placeholder="Jean / Maria"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.engagementPage.form.lastName}
                    </label>
                    <input
                      type="text"
                      required
                      value={memberForm.nom}
                      onChange={(e) => setMemberForm({ ...memberForm, nom: e.target.value })}
                      placeholder="Dupont"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.engagementPage.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={memberForm.email}
                      onChange={(e) => setMemberForm({ ...memberForm, email: e.target.value })}
                      placeholder="jean.dupont@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.engagementPage.form.phone}
                    </label>
                    <input
                      type="tel"
                      value={memberForm.telephone}
                      onChange={(e) => setMemberForm({ ...memberForm, telephone: e.target.value })}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.engagementPage.form.city}
                    </label>
                    <input
                      type="text"
                      value={memberForm.city}
                      onChange={(e) => setMemberForm({ ...memberForm, city: e.target.value })}
                      placeholder="Vitry-sur-Seine / Paris..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.engagementPage.form.age}
                    </label>
                    <input
                      type="text"
                      value={memberForm.age}
                      onChange={(e) => setMemberForm({ ...memberForm, age: e.target.value })}
                      placeholder="e.g. 22 ans / 18-30 ans"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                </div>

                {/* Thematic Interests */}
                <div className="space-y-2 pt-1">
                  <span className="block font-semibold text-slate-800">
                    {t.engagementPage.form.interests}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                    <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={memberForm.interests.youth}
                        onChange={(e) =>
                          setMemberForm({
                            ...memberForm,
                            interests: { ...memberForm.interests, youth: e.target.checked },
                          })
                        }
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>{t.engagementPage.form.interestsList.youth}</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={memberForm.interests.culture}
                        onChange={(e) =>
                          setMemberForm({
                            ...memberForm,
                            interests: { ...memberForm.interests, culture: e.target.checked },
                          })
                        }
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>{t.engagementPage.form.interestsList.culture}</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={memberForm.interests.ecology}
                        onChange={(e) =>
                          setMemberForm({
                            ...memberForm,
                            interests: { ...memberForm.interests, ecology: e.target.checked },
                          })
                        }
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>{t.engagementPage.form.interestsList.ecology}</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={memberForm.interests.inclusion}
                        onChange={(e) =>
                          setMemberForm({
                            ...memberForm,
                            interests: { ...memberForm.interests, inclusion: e.target.checked },
                          })
                        }
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>{t.engagementPage.form.interestsList.inclusion}</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer sm:col-span-2">
                      <input
                        type="checkbox"
                        checked={memberForm.interests.erasmus}
                        onChange={(e) =>
                          setMemberForm({
                            ...memberForm,
                            interests: { ...memberForm.interests, erasmus: e.target.checked },
                          })
                        }
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>{t.engagementPage.form.interestsList.erasmus}</span>
                    </label>
                  </div>
                </div>

                {/* Motivation message */}
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.engagementPage.form.motivation}
                  </label>
                  <textarea
                    rows={3}
                    value={memberForm.motivation}
                    onChange={(e) => setMemberForm({ ...memberForm, motivation: e.target.value })}
                    placeholder={t.engagementPage.form.motivationPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>

                {/* Consent checkbox */}
                <label className="flex items-start gap-2 pt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={memberForm.consent}
                    onChange={(e) => setMemberForm({ ...memberForm, consent: e.target.checked })}
                    className="mt-0.5 rounded text-[#1E3A8A] focus:ring-0"
                  />
                  <span className="text-slate-600 leading-tight">
                    {t.engagementPage.form.consent}
                  </span>
                </label>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#ea580c] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.engagementPage.form.submitBtn}</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 8b. DEVENIR BÉNÉVOLE */}
        {activeTab === 'benevole' && (
          <div className="space-y-12">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                Force Collective
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Devenir bénévole : donnez du sens à votre temps libre
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pas besoin d&apos;être un expert : votre sourire, votre envie d&apos;écouter et votre
                énergie sont nos plus belles richesses. Rejoignez notre communauté de plus de 35
                bénévoles actifs !
              </p>
            </div>

            {/* Available missions cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold text-[#F97316] uppercase">Médiation sociale</span>
                <h4 className="text-base font-bold text-slate-900">Animateur / Mentore Numérique</h4>
                <p className="text-xs text-slate-600">
                  Aidez un senior ou une personne en recherche d&apos;emploi à dompter son smartphone
                  ou à effectuer une démarche administrative.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 font-semibold border-t border-slate-100">
                  Engagement : 2h par semaine ou quinzaine
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold text-[#10B981] uppercase">Écologie & Ville</span>
                <h4 className="text-base font-bold text-slate-900">Bricoleur Repair Café & Jardin</h4>
                <p className="text-xs text-slate-600">
                  Partagez vos astuces de bricolage pour réparer des objets ou venez semer des graines
                  dans nos bacs partagés à Vitry.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 font-semibold border-t border-slate-100">
                  Engagement : 1 samedi par mois
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                <span className="text-[11px] font-bold text-[#1E3A8A] uppercase">Europe & Jeunesse</span>
                <h4 className="text-base font-bold text-slate-900">Accompagnateur Mobilités Erasmus+</h4>
                <p className="text-xs text-slate-600">
                  Co-animez la préparation au départ des jeunes ou aidez à l&apos;accueil des délégations
                  étrangères à Paris.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 font-semibold border-t border-slate-100">
                  Engagement : Ponctuel selon les projets
                </div>
              </div>
            </div>

            {/* Volunteer Registration Form */}
            <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold text-slate-900">Formulaire d&apos;engagement bénévole</h3>
                <p className="text-xs text-slate-500">
                  Remplissez ce court questionnaire pour que nous fassions connaissance.
                </p>
              </div>

              <form onSubmit={handleVolunteerSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">Nom *</label>
                    <input
                      type="text"
                      required
                      value={volForm.nom}
                      onChange={(e) => setVolForm({ ...volForm, nom: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">Prénom *</label>
                    <input
                      type="text"
                      required
                      value={volForm.prenom}
                      onChange={(e) => setVolForm({ ...volForm, prenom: e.target.value })}
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
                      value={volForm.email}
                      onChange={(e) => setVolForm({ ...volForm, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      value={volForm.telephone}
                      onChange={(e) => setVolForm({ ...volForm, telephone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                    />
                  </div>
                </div>

                {/* Disponibilités */}
                <div className="space-y-1.5">
                  <span className="block font-semibold text-slate-800">Vos disponibilités :</span>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={volForm.dispoSemaine}
                        onChange={(e) => setVolForm({ ...volForm, dispoSemaine: e.target.checked })}
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>En semaine (journée)</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={volForm.dispoSoir}
                        onChange={(e) => setVolForm({ ...volForm, dispoSoir: e.target.checked })}
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>En soirée</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={volForm.dispoWeekend}
                        onChange={(e) => setVolForm({ ...volForm, dispoWeekend: e.target.checked })}
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>Le week-end</span>
                    </label>
                  </div>
                </div>

                {/* Domaines d'intérêt */}
                <div className="space-y-1.5">
                  <span className="block font-semibold text-slate-800">Domaines d&apos;intérêt :</span>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={volForm.interetJeunesse}
                        onChange={(e) => setVolForm({ ...volForm, interetJeunesse: e.target.checked })}
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>Jeunesse & Prise de parole</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={volForm.interetNumerique}
                        onChange={(e) => setVolForm({ ...volForm, interetNumerique: e.target.checked })}
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>Inclusion numérique</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={volForm.interetEcologie}
                        onChange={(e) => setVolForm({ ...volForm, interetEcologie: e.target.checked })}
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>Environnement & Zéro Déchet</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={volForm.interetEurope}
                        onChange={(e) => setVolForm({ ...volForm, interetEurope: e.target.checked })}
                        className="rounded text-[#1E3A8A]"
                      />
                      <span>Projets Erasmus+ & Mobilité</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Quelques mots sur vous et vos motivations *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={volForm.message}
                    onChange={(e) => setVolForm({ ...volForm, message: e.target.value })}
                    placeholder="Parlez-nous de vos envies, de vos passions ou de ce que vous aimeriez partager..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>

                <label className="flex items-start gap-2 pt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={volForm.consent}
                    onChange={(e) => setVolForm({ ...volForm, consent: e.target.checked })}
                    className="mt-0.5 rounded text-[#1E3A8A] focus:ring-0"
                  />
                  <span className="text-slate-600 leading-tight">
                    J&apos;accepte que Sans Limite traite mes informations pour me contacter au sujet
                    du bénévolat.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#10B981] hover:bg-[#059669] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma proposition de bénévolat</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 8c. SERVICE CIVIQUE & STAGES */}
        {activeTab === 'service-civique' && (
          <div className="space-y-12">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                Jeunesse & Insertion
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Missions de Service Civique & Stages
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sans Limite accueille régulièrement des volontaires en Service Civique (16-25 ans,
                indemnisés par l&apos;État) ainsi que des stagiaires en médiation socioculturelle,
                communication et gestion de projets européens.
              </p>
            </div>

            {/* Current Offers List */}
            <div className="space-y-4">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded font-bold bg-blue-100 text-[#1E3A8A]">
                      Service Civique (8 mois)
                    </span>
                    <span className="text-slate-500">Démarrage : Novembre 2026</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Ambassadeur de la citoyenneté européenne & mobilités jeunes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                    Sensibiliser les jeunes de Vitry et de Paris aux programmes Erasmus+, animer des
                    cafés-rencontres et participer à l&apos;organisation logistique des délégations.
                  </p>
                  <div className="text-xs text-emerald-700 font-semibold">
                    Indemnité légale ~620 €/mois · 24h par semaine · Aucun diplôme requis
                  </div>
                </div>

                <button
                  onClick={() =>
                    onToast(
                      'info',
                      'Candidature Service Civique',
                      'Veuillez envoyer votre CV et quelques lignes de motivation à assia.oh@yahoo.com avec en objet "Candidature Service Civique Europe".',
                    )
                  }
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#162a63] transition-colors shrink-0"
                >
                  Candidater à cette offre
                </button>
              </div>
            </div>

            {/* Spontaneous Application CTA */}
            <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 text-center space-y-3 max-w-2xl mx-auto">
              <h4 className="text-base font-bold text-slate-900">
                Vous recherchez un stage ou une mission spécifique ?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nous étudions avec bienveillance toutes les candidatures spontanées d&apos;étudiants
                (DUT Carrières Sociales, Master Projets Européens, BTS Communication...).
              </p>
              <a
                href={`mailto:${associationInfo.email}?subject=Candidature%20spontanee%20stage%20Sans%20Limite`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <span>Envoyer une candidature spontanée</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* 8d. FAIRE UN DON */}
        {activeTab === 'don' && (
          <div className="space-y-12">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                Générosité publique
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Votre soutien décuple notre impact sur le terrain
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chaque euro compte pour financer le matériel des ateliers numériques, acheter des
                graines pour les jardins partagés et accompagner vers l&apos;autonomie les jeunes qui en
                ont le plus besoin.
              </p>
            </div>

            {/* "À quoi sert votre don ?" 3 tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                <div className="text-2xl font-black text-[#F97316]">30 €</div>
                <h4 className="text-sm font-bold text-slate-900">
                  Kit de rentrée numérique pour 1 personne
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Finance 1 mois d&apos;accompagnement individuel personnalisé aux démarches
                  administratives dématérialisées.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700">
                  Coût réel après déduction : <strong>10,20 €</strong>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                <div className="text-2xl font-black text-[#F97316]">50 €</div>
                <h4 className="text-sm font-bold text-slate-900">
                  1 atelier d&apos;éloquence complet
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Permet à 12 jeunes d&apos;accéder à une séance de coaching scénique et de prise de
                  parole avec un professionnel.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700">
                  Coût réel après déduction : <strong>17,00 €</strong>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
                <div className="text-2xl font-black text-[#F97316]">100 €</div>
                <h4 className="text-sm font-bold text-slate-900">
                  Bourse tremplin pour 1 jeune en mobilité
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Couvre les frais annexes de passeport et d&apos;équipements pour un jeune partant en
                  échange Erasmus+.
                </p>
                <div className="text-[11px] font-semibold text-emerald-700">
                  Coût réel après déduction : <strong>34,00 €</strong>
                </div>
              </div>
            </div>

            {/* Donation Form + Tax notice */}
            <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Formulaire HelloAsso — Don sécurisé
                </span>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Paiement crypté SSL</span>
                </div>
              </div>

              {/* Tax Deduction Callout */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Réduction fiscale de 66 %</span>
                </div>
                <p className="leading-relaxed">
                  Votre don est déductible à 66 % de vos impôts dans la limite de 20 % de votre
                  revenu imposable. Un reçu fiscal Cerfa officiel vous sera automatiquement envoyé par
                  email.
                </p>
              </div>

              <form onSubmit={handleDonationSubmit} className="space-y-5 text-xs">
                {/* One-off / Monthly Toggle */}
                <div className="flex rounded-xl bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setDonationFrequency('ponctuel')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${
                      donationFrequency === 'ponctuel'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Don ponctuel
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationFrequency('mensuel')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${
                      donationFrequency === 'mensuel'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Don mensuel
                  </button>
                </div>

                {/* Amount buttons */}
                <div className="space-y-1.5">
                  <span className="block font-semibold text-slate-800">
                    Choisissez le montant :
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {[20, 30, 50, 100].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setDonationAmount(amt);
                          setCustomAmount('');
                        }}
                        className={`py-3 rounded-xl font-black text-sm transition-all ${
                          donationAmount === amt && !customAmount
                            ? 'bg-[#F97316] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                        }`}
                      >
                        {amt} €
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <input
                      type="number"
                      placeholder="Ou montant libre en €..."
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#F97316]"
                    />
                  </div>
                </div>

                {/* Donor info */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">Prénom *</label>
                    <input
                      type="text"
                      required
                      value={donorForm.prenom}
                      onChange={(e) => setDonorForm({ ...donorForm, prenom: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#F97316]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">Nom *</label>
                    <input
                      type="text"
                      required
                      value={donorForm.nom}
                      onChange={(e) => setDonorForm({ ...donorForm, nom: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#F97316]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Email pour le reçu fiscal *
                  </label>
                  <input
                    type="email"
                    required
                    value={donorForm.email}
                    onChange={(e) => setDonorForm({ ...donorForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#F97316]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>
                    Confirmer mon don de{' '}
                    {customAmount ? customAmount : donationAmount} €
                  </span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
