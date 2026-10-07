import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Linkedin,
  Send,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Language } from '../types';
import { ASSOCIATION_INFO, FAQ_DATA, ASSET_IMAGES } from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { PageBanner } from '../components/PageBanner';

interface ContactViewProps {
  language: Language;
  onToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  language,
  onToast,
}) => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    objet: 'Information générale',
    message: '',
    consent: false,
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const t = TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.email || !formData.message) {
      onToast(
        'error',
        language === 'fr' ? 'Champs obligatoires' : 'Required fields',
        language === 'fr'
          ? 'Veuillez renseigner votre nom, email et message.'
          : 'Please provide your name, email, and message.',
      );
      return;
    }
    if (!formData.consent) {
      onToast(
        'error',
        language === 'fr' ? 'Consentement requis' : 'Consent required',
        language === 'fr'
          ? 'Veuillez accepter le traitement de vos données.'
          : 'Please accept the data processing terms.',
      );
      return;
    }

    onToast(
      'success',
      language === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!',
      language === 'fr'
        ? `Merci ${formData.nom}. Votre message concernant "${formData.objet}" a bien été transmis. Nous vous répondrons sous 48h à ${formData.email}.`
        : `Thank you ${formData.nom}. Your message regarding "${formData.objet}" was received. We will get back to you within 48h at ${formData.email}.`,
    );

    setFormData({
      nom: '',
      email: '',
      telephone: '',
      objet: 'Information générale',
      message: '',
      consent: false,
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems =
    language === 'fr'
      ? FAQ_DATA
      : [
          {
            q: 'Who can take part in your activities?',
            a: 'All our local activities are open to everyone: youth (13-30), adults, families, seniors, and local residents, regardless of background or educational level. For Erasmus+ European projects, specific age criteria (typically 18-26 or 18-30) are stated in each open call.',
          },
          {
            q: 'Are the activities free of charge?',
            a: 'Yes! The vast majority of our workshops, open digital sessions, and community events are 100% free. Erasmus+ projects also cover all travel, accommodation, and food costs. An annual membership starting at €10 helps support the association.',
          },
          {
            q: 'How can I take part in an Erasmus+ exchange?',
            a: 'It is very simple: check the European Projects > Open Calls section, pick the project that inspires you, and fill out the online application. No specific English level is required—only your enthusiasm and motivation!',
          },
          {
            q: 'How can I volunteer with Sans Limite?',
            a: 'Visit the Get Involved > Volunteer section to discover our missions (workshop animation, digital mentoring, gardening, communication, or project management). You can give a few hours a month or get involved regularly.',
          },
          {
            q: 'Is my donation tax-deductible?',
            a: 'Yes. As a non-profit association for general public benefit under French law (loi 1901), your donations are eligible for a 66% tax reduction in France within 20% of taxable income. An official Cerfa tax receipt is automatically emailed to you.',
          },
        ];

  return (
    <div className="space-y-16 pb-16">
      <PageBanner
        title={t.contactPage.title}
        subtitle={t.contactPage.subtitle}
        backgroundImage={ASSET_IMAGES.hero}
        badge={language === 'fr' ? 'Écoute & Proximité' : 'Community & Dialogue'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Two Columns: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                {t.contactPage.formKicker}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {t.contactPage.formTitle}
              </h2>
              <p className="text-xs text-slate-500">
                {t.contactPage.formDesc}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  {t.contactPage.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  placeholder="ex. Camille Dupont"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.contactPage.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="camille@exemple.fr"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.contactPage.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    placeholder="06 00 00 00 00"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  {t.contactPage.subjectLabel}
                </label>
                <select
                  value={formData.objet}
                  onChange={(e) => setFormData({ ...formData, objet: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                >
                  <option value="Information générale">
                    {language === 'fr' ? 'Information générale' : 'General Enquiry'}
                  </option>
                  <option value="Adhésion">
                    {language === 'fr' ? "Adhésion à l'association" : 'Membership & Joining'}
                  </option>
                  <option value="Bénévolat">
                    {language === 'fr' ? 'Devenir bénévole' : 'Volunteering'}
                  </option>
                  <option value="Projets européens">
                    {language === 'fr' ? 'Projets européens & Erasmus+' : 'European & Erasmus+ Projects'}
                  </option>
                  <option value="Presse">
                    {language === 'fr' ? 'Presse & Médias' : 'Press & Media'}
                  </option>
                  <option value="Autre">
                    {language === 'fr' ? 'Autre demande' : 'Other'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  {t.contactPage.messageLabel}
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === 'fr'
                      ? 'Comment pouvons-nous vous aider ? Détaillez votre projet ou question...'
                      : 'How can we help you? Describe your question or project...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <label className="flex items-start gap-2 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded text-[#1E3A8A] focus:ring-0"
                />
                <span className="text-slate-600 leading-tight">
                  {t.contactPage.consentText}
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#162a63] transition-colors flex items-center justify-center gap-2 shadow-2xs"
              >
                <Send className="w-4 h-4" />
                <span>{t.contactPage.sendBtn}</span>
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900">{t.contactPage.detailsTitle}</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">{t.contactPage.hqLabel}</span>
                    <p className="text-slate-600 leading-relaxed">
                      Sans Limite — {language === 'fr' ? 'Association loi 1901' : 'Non-profit association'}
                      <br />
                      {ASSOCIATION_INFO.fullAddress}
                      <br />
                      SIRET : {ASSOCIATION_INFO.siret}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">{t.contactPage.emailContactLabel}</span>
                    <a
                      href={`mailto:${ASSOCIATION_INFO.email}`}
                      className="text-[#1E3A8A] hover:underline font-medium"
                    >
                      {ASSOCIATION_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">{t.contactPage.phoneContactLabel}</span>
                    <span className="text-slate-600">{ASSOCIATION_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">{t.contactPage.hoursLabel}</span>
                    <p className="text-slate-600 leading-relaxed">{ASSOCIATION_INFO.openingHours}</p>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-slate-700">
                  {language === 'fr' ? 'Réseaux :' : 'Socials:'}
                </span>
                <a
                  href={ASSOCIATION_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold text-xs transition-colors border border-pink-200"
                  aria-label="Instagram @sanslimiteong"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>@sanslimiteong</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#1E3A8A] text-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Interactive Location Vector Map Box */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xs p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs font-bold text-slate-900">
                    Vitry-sur-Seine (94490)
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">Paris Sud</span>
              </div>

              <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative text-center p-4 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center mx-auto shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {language === 'fr'
                      ? 'Maison des Associations & Tiers-Lieu'
                      : 'Community Hub & Non-Profit Center'}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    RER C Gare de Vitry-sur-Seine · Tram T9
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Short FAQ Accordion (5 questions) */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
              {t.contactPage.faqKicker}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.contactPage.faqTitle}
            </h2>
            <p className="text-sm text-slate-600">
              {t.contactPage.faqDesc}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-[#1E3A8A] transition-colors"
                >
                  <span>{item.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#F97316] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
