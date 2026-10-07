import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  ZoomIn,
  X,
  MessageCircle,
  Send,
  ArrowRight,
  Phone,
  Mail,
  User,
  Monitor,
  AlertCircle,
  ExternalLink,
  BookOpen,
  Heart,
  Brain,
} from 'lucide-react';
import { Language, AgendaEvent } from '../types';
import {
  ASSET_IMAGES,
  FORMATION_DA1_INFO,
  FORMATION_DA4_INFO,
  FORMATION_DA3_INFO,
  FORMATION_DA2_INFO,
} from '../data/content';

interface FormationSpotlightProps {
  language: Language;
  onNavigateContact: (prefillSubject?: string) => void;
  onSelectEvent?: (event: AgendaEvent) => void;
  onToast?: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const FormationSpotlight: React.FC<FormationSpotlightProps> = ({
  language,
  onNavigateContact,
  onSelectEvent,
  onToast,
}) => {
  const [selectedProgram, setSelectedProgram] = useState<'da4' | 'da1' | 'arabe'>('da4');
  const [activeFlyer, setActiveFlyer] = useState<'da4' | 'da1' | 'da3' | 'da2'>('da4');
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    programType: 'da4-methodes',
    message: '',
  });

  const isFr = language === 'fr';

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || (!contactForm.phone && !contactForm.email)) {
      if (onToast) {
        onToast(
          'error',
          isFr ? 'Champs incomplets' : 'Missing fields',
          isFr
            ? 'Veuillez indiquer votre nom et au moins un moyen de contact (SMS/téléphone ou email).'
            : 'Please provide your name and phone or email.',
        );
      }
      return;
    }

    if (onToast) {
      onToast(
        'success',
        isFr ? 'Message transmis avec succès !' : 'Message sent successfully!',
        isFr
          ? `Merci ${contactForm.name}. Votre demande d'échange en privé a bien été reçue. Nous vous contacterons très vite.`
          : `Thank you ${contactForm.name}. Your inquiry has been received. We will contact you shortly.`,
      );
    }

    setIsContactModalOpen(false);
    setContactForm({
      name: '',
      phone: '',
      email: '',
      programType: 'da1-pedagogie',
      message: '',
    });
  };

  const currentZoomImage =
    activeFlyer === 'da1'
      ? ASSET_IMAGES.da1
      : activeFlyer === 'da4'
      ? ASSET_IMAGES.da4
      : activeFlyer === 'da3'
      ? ASSET_IMAGES.da3
      : ASSET_IMAGES.da2;

  const currentZoomTitle =
    activeFlyer === 'da1'
      ? isFr
        ? 'Affiche DA1 · Apprendre Autrement (5 axes)'
        : 'Flyer DA1 · Learning Differently (5 pillars)'
      : activeFlyer === 'da4'
      ? isFr
        ? 'Affiche DA4 · Formation 3 mois (Dès 12 ans)'
        : 'Flyer DA4 · 3-Month Training (Ages 12+)'
      : activeFlyer === 'da3'
      ? isFr
        ? 'Affiche DA3 · Cours d’Arabe & Lecture du Coran'
        : 'Flyer DA3 · Arabic & Quran Reading Courses'
      : isFr
      ? 'Affiche DA2 · Méthodes d’Apprentissage (Urgent)'
      : 'Flyer DA2 · Learning Methods (Urgent)';

  return (
    <section className="relative overflow-hidden py-14 bg-gradient-to-b from-amber-50/70 via-orange-50/40 to-white border-y border-orange-200/80">
      {/* Background glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        {/* Program Switcher Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-orange-200/60">
          <div>
            <span className="text-[11px] font-bold text-[#1E3A8A] uppercase tracking-wider block">
              {isFr ? 'Formations & Cours en ligne' : 'Trainings & Online Courses'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {isFr ? 'Inscriptions Ouvertes · Choisissez votre parcours' : 'Open Registrations · Choose your path'}
            </h3>
          </div>

          {/* 3 Main Program Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/90 backdrop-blur-xs rounded-2xl border border-orange-200 shadow-xs shrink-0">
            {/* Tab 1: DA4 */}
            <button
              type="button"
              onClick={() => {
                setSelectedProgram('da4');
                setActiveFlyer('da4');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedProgram === 'da4'
                  ? 'bg-[#F97316] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>{isFr ? 'Formation 3 mois (DA4 · Dès 12 ans)' : '3-Month Training (DA4 · Ages 12+)'}</span>
            </button>

            {/* Tab 2: DA1 */}
            <button
              type="button"
              onClick={() => {
                setSelectedProgram('da1');
                setActiveFlyer('da1');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedProgram === 'da1'
                  ? 'bg-[#1E3A8A] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isFr ? 'Apprendre Autrement (DA1)' : 'Learning Differently (DA1)'}</span>
            </button>

            {/* Tab 3: DA3 */}
            <button
              type="button"
              onClick={() => {
                setSelectedProgram('arabe');
                setActiveFlyer('da3');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedProgram === 'arabe'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isFr ? 'Arabe & Coran (DA3)' : 'Arabic & Quran (DA3)'}</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: FORMATION DA1 (Apprendre Autrement, 5 Axes Pédagogiques) */}
        {/* ============================================================== */}
        {selectedProgram === 'da1' && (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Exact DA1 Text & Details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider border border-red-200 animate-pulse">
                  <AlertCircle className="w-4 h-4" />
                  <span>
                    {isFr ? 'Les inscriptions se terminent bientôt !' : 'Registrations closing soon!'}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[#1E3A8A] text-xs font-semibold border border-blue-200">
                  <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>
                    {isFr ? 'La rentrée est le 28 septembre' : 'Start: September 28'}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isFr ? 'Il reste encore quelques places' : 'A few spots remaining'}</span>
                </span>
              </div>

              {/* Title & Introduction */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {isFr ? 'Les inscriptions se terminent bientôt !' : 'Registrations are closing soon!'}
                </h2>
                <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                  {isFr
                    ? 'Si ton enfant a parfois du mal à mémoriser, s’organiser, rester efficace dans ses apprentissages ou manque de confiance en lui, cette formation peut lui apporter des outils concrets pour avancer autrement.'
                    : 'If your child sometimes struggles with memorising, getting organized, staying effective in their learning, or lacks self-confidence, this training can provide tangible tools to progress differently.'}
                </p>
              </div>

              {/* Pendant 3 mois, nous allons travailler ensemble sur : (5 Points DA1) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-3">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#1E3A8A]">
                  <Clock className="w-4 h-4 text-[#F97316]" />
                  <span>
                    {isFr
                      ? 'Pendant 3 mois, nous allons travailler ensemble sur :'
                      : 'Over 3 months, we will work together on:'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {[
                    {
                      icon: '📖',
                      titleFr: 'la lecture rapide',
                      titleEn: 'speed reading',
                      descFr: 'Fluidité, déchiffrage et compréhension immédiate',
                    },
                    {
                      icon: '🧠',
                      titleFr: 'la mémorisation autrement',
                      titleEn: 'memorisation done differently',
                      descFr: 'Méthodes mnémotechniques et ancrage durable',
                    },
                    {
                      icon: '🗺️',
                      titleFr: 'le Mind Mapping',
                      titleEn: 'Mind Mapping',
                      descFr: 'Schémas visuels stimulants et synthèses claires',
                    },
                    {
                      icon: '💪',
                      titleFr: 'la confiance en soi',
                      titleEn: 'self-confidence',
                      descFr: 'Dédramatisation de l’erreur et dépassement du stress',
                    },
                    {
                      icon: '🎯',
                      titleFr: 'l’autonomie',
                      titleEn: 'autonomy',
                      descFr: 'Organisation méthodique et travail personnel régulier',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-blue-100 shadow-2xs hover:border-blue-300 transition-colors"
                    >
                      <span className="text-xl shrink-0">{item.icon}</span>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-slate-900">
                          {isFr ? item.titleFr : item.titleEn}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {item.descFr}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-blue-200/60 text-xs font-semibold text-slate-700 flex items-center justify-between">
                  <span className="text-[#1E3A8A]">
                    🗓️ <strong>{isFr ? 'La rentrée est le 28 septembre et il reste encore quelques places.' : 'Starts September 28, a few spots remaining.'}</strong>
                  </span>
                  <span className="text-orange-700 font-bold">
                    {isFr ? 'Cycle de 3 mois' : '3-Month Cycle'}
                  </span>
                </div>
              </div>

              {/* Call to Action note from DA1 */}
              <div className="space-y-4 pt-1">
                <p className="text-sm sm:text-base font-semibold text-slate-800 italic">
                  💬 «{' '}
                  {isFr
                    ? 'Si tu souhaites en savoir plus ou échanger sur les besoins de ton enfant, écris-moi en privé.'
                    : 'If you would like to know more or discuss your child’s needs, message me privately.'}{' '}
                  »
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setContactForm((prev) => ({ ...prev, programType: 'da1' }));
                      setIsContactModalOpen(true);
                    }}
                    className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#ea580c] shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                  >
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{isFr ? 'Écris-moi en privé' : 'Message me privately'}</span>
                  </button>

                  <a
                    href="tel:0629240981"
                    className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>06 29 24 09 81</span>
                  </a>

                  <a
                    href="sms:0629240981"
                    className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>SMS</span>
                  </a>

                  <button
                    onClick={() => onNavigateContact('Formation DA1 : Apprendre Autrement')}
                    className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    {isFr ? 'Formulaire de contact' : 'Contact form'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Poster DA1 */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
              <div
                onClick={() => {
                  setActiveFlyer('da1');
                  setIsPhotoZoomed(true);
                }}
                className="relative group cursor-pointer w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-200/60"
              >
                <img
                  src={ASSET_IMAGES.da1}
                  alt="Affiche DA1 : Apprendre Autrement, Mémorisation & Confiance en soi"
                  className="w-full h-auto object-cover max-h-[520px]"
                  loading="eager"
                />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-xs border border-white/20">
                    Affiche DA1
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-red-600 shadow-sm animate-pulse">
                    {isFr ? 'Clôture proche' : 'Closing soon'}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-xs font-semibold text-orange-300">
                        {isFr ? 'Lecture rapide • Mind Mapping • Confiance' : 'Reading • Mind Mapping • Confidence'}
                      </p>
                      <p className="text-sm font-bold text-white">
                        {isFr ? 'Rentrée le 28 septembre' : 'Starts September 28'}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-full bg-white/20 group-hover:bg-[#F97316] text-white transition-colors">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-2">
                    {isFr ? 'Cliquez pour agrandir l’affiche DA1 en haute résolution' : 'Click to zoom DA1 flyer in high resolution'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <span>{isFr ? 'Affiche officielle DA1' : 'Official Flyer DA1'}</span>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFlyer('da1');
                    setIsPhotoZoomed(true);
                  }}
                  className="text-[#1E3A8A] hover:underline font-bold"
                >
                  {isFr ? 'Agrandir en plein écran' : 'Enlarge'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: FORMATION DA4 & DA2 (Méthodes, Cerveau & Autonomie) */}
        {/* ============================================================== */}
        {selectedProgram === 'da4' && (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-orange-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Monitor className="w-4 h-4" />
                  <span>{isFr ? '100 % en ligne · Dès 12 ans' : '100% Online · Ages 12+'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-100 text-orange-950 text-xs font-semibold border border-orange-200">
                  <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{isFr ? 'Début : 28 septembre 2026' : 'Start: September 28, 2026'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isFr ? 'Places limitées · Inscription sur RDV tél.' : 'Limited spots · Phone booking'}</span>
                </span>
                {activeFlyer === 'da2' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold animate-pulse">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{isFr ? 'Il reste seulement 2 jours !' : 'Only 2 days left!'}</span>
                  </span>
                )}
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  🧠 {isFr ? 'Formation de 3 mois pour les jeunes à partir de 12 ans' : '3-Month Training for Youth from 12 Years Old'}
                </h2>
                <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                  {isFr
                    ? 'Une formation 100 % en ligne pour aider les jeunes à mieux comprendre leur façon d’apprendre, mémoriser efficacement et gagner en autonomie.'
                    : 'A 100% online training to help young people better understand how they learn, memorise effectively, and gain autonomy.'}
                </p>
              </div>

              {/* 5 Core Learning Bullets from DA4 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 border border-orange-200/80 space-y-3">
                <div className="text-sm font-bold text-[#1E3A8A] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#F97316]" />
                  <span>{isFr ? 'Au programme :' : 'Curriculum:'}</span>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      textFr: 'Lire plus rapidement et retenir l’essentiel',
                      textEn: 'Read faster and retain the essentials',
                      icon: '📖',
                    },
                    {
                      textFr: 'Mémoriser efficacement',
                      textEn: 'Memorise effectively',
                      icon: '🧠',
                    },
                    {
                      textFr: 'Structurer ses cours avec le Mind Mapping',
                      textEn: 'Structure school courses with Mind Mapping',
                      icon: '🗺️',
                    },
                    {
                      textFr: 'Reprendre confiance en ses capacités',
                      textEn: 'Regain confidence in one’s abilities',
                      icon: '💪',
                    },
                    {
                      textFr: 'Développer ses propres stratégies d’apprentissage',
                      textEn: 'Develop personal learning strategies',
                      icon: '🎯',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-orange-100 shadow-2xs hover:border-orange-300 transition-colors"
                    >
                      <span className="text-lg shrink-0">{item.icon}</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        • {isFr ? item.textFr : item.textEn}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-orange-200/60 text-xs font-semibold text-slate-700">
                  <span className="inline-flex items-center gap-1.5 text-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                    <strong>🗓️ {isFr ? 'Début : 28 septembre 2026' : 'Start: September 28, 2026'}</strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" />
                    <span>⏰ {isFr ? '1h30 par semaine, en petit groupe, pendant 3 mois' : '1h30 per week, small group, 3 months'}</span>
                  </span>
                </div>
              </div>

              {/* Brain pedagogy note */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm font-semibold text-amber-950 flex items-start gap-2.5">
                <span className="text-lg shrink-0">🧠</span>
                <span>
                  {isFr
                    ? 'Une approche qui respecte le fonctionnement du cerveau et le rythme de chaque jeune.'
                    : 'An approach that respects brain functioning and each youth’s rhythm.'}
                </span>
              </div>

              {/* Pitch & Call to Action text */}
              <div className="space-y-4 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      <strong>{isFr ? 'Les places sont limitées. Inscription sur rendez-vous téléphonique.' : 'Spots are limited. Registration upon telephone appointment.'}</strong>
                    </span>
                  </div>
                  <a
                    href="tel:0629240981"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 font-bold hover:bg-emerald-100 transition-colors border border-emerald-200 shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>06 29 24 09 81</span>
                  </a>
                </div>

                <div className="text-xs sm:text-sm text-slate-800 font-medium italic">
                  💬 «{' '}
                  {isFr
                    ? 'N’hésitez pas à me contacter au 0629240981 pour plus d’informations.'
                    : 'Do not hesitate to contact me at 0629240981 for more information.'}{' '}
                  »
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setContactForm((prev) => ({ ...prev, programType: 'methodes' }));
                      setIsContactModalOpen(true);
                    }}
                    className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#ea580c] shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                  >
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{isFr ? 'Écris-moi en privé' : 'Message me privately'}</span>
                  </button>

                  <a
                    href="sms:0629240981"
                    className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>SMS : 06 29 24 09 81</span>
                  </a>

                  <a
                    href={FORMATION_DA2_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                  </a>

                  <button
                    onClick={() => onNavigateContact('Formation Méthodes & Confiance (DA4)')}
                    className="px-4 py-3 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    {isFr ? 'Formulaire de contact' : 'Contact form'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Poster with DA4 and DA2 Switcher */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveFlyer('da4')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeFlyer === 'da4'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isFr ? 'Affiche DA4' : 'Flyer DA4'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFlyer('da2')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeFlyer === 'da2'
                      ? 'bg-[#F97316] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {isFr ? 'Affiche DA2 (Urgent)' : 'Flyer DA2'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProgram('da1');
                    setActiveFlyer('da1');
                  }}
                  className="px-3 py-1 rounded-lg text-xs font-bold transition-all text-slate-600 hover:text-slate-900"
                >
                  {isFr ? 'Affiche DA1' : 'Flyer DA1'}
                </button>
              </div>

              <div
                onClick={() => setIsPhotoZoomed(true)}
                className="relative group cursor-pointer w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-200/50"
              >
                <img
                  src={activeFlyer === 'da2' ? ASSET_IMAGES.da2 : ASSET_IMAGES.da4}
                  alt={currentZoomTitle}
                  className="w-full h-auto object-cover max-h-[500px]"
                  loading="eager"
                />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-xs border border-white/20">
                    {activeFlyer === 'da2' ? 'Affiche DA2' : 'Affiche DA4'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-amber-600 shadow-sm">
                    {isFr ? 'Dès 12 ans' : 'Ages 12+'}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-xs font-semibold text-orange-300">
                        {isFr ? '100 % en ligne • Petit groupe' : '100% Online'}
                      </p>
                      <p className="text-sm font-bold text-white">
                        {isFr ? 'Formation de 3 mois' : '3-Month Training'}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-full bg-white/20 group-hover:bg-[#F97316] text-white transition-colors">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: ARABE & CORAN (DA3) */}
        {/* ============================================================== */}
        {selectedProgram === 'arabe' && (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  <Heart className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isFr ? 'Apprentissage Bienveillant' : 'Kind & Caring Learning'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-[#1E3A8A] text-xs font-semibold border border-blue-200">
                  <Monitor className="w-3.5 h-3.5" />
                  <span>{isFr ? 'Cours 100% en ligne' : '100% Online Courses'}</span>
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {isFr
                    ? 'Apprendre l’arabe avec bienveillance et lire le Coran plus facilement'
                    : 'Learn Arabic with kindness and read the Quran more easily'}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {isFr
                    ? 'J’ouvre les inscriptions pour mes cours en ligne, adaptés au niveau et au rythme de chacun.'
                    : 'Registrations are open for my online courses, adapted to everyone’s level and pace.'}
                </p>
              </div>

              {/* Two Tracks Grid */}
              <div className="space-y-4">
                {/* 1. Track Femmes Adultes */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                  <div className="flex items-center gap-2 text-base font-bold text-emerald-950">
                    <span className="text-xl">👩</span>
                    <span>{isFr ? 'Pour les femmes adultes' : 'For adult women'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs space-y-1.5">
                      <div className="font-bold text-slate-900">
                        🌱 {isFr ? 'Session intensive — 3 mois' : 'Intensive session — 3 months'}
                      </div>
                      <div className="text-emerald-700 font-semibold">
                        ⏰ {isFr ? '4 fois par semaine — 1h' : '4 times per week — 1h'}
                      </div>
                      <ul className="text-slate-600 space-y-1 pt-1">
                        <li>• {isFr ? 'Parcours débutante : apprendre l’arabe et apprendre à lire le Coran' : 'Beginner track: learn Arabic & read Quran'}</li>
                        <li>• {isFr ? 'Parcours intermédiaire : consolider sa lecture et gagner en fluidité' : 'Intermediate track: consolidate & gain fluency'}</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs space-y-1.5">
                      <div className="font-bold text-slate-900">
                        📚 {isFr ? 'Cours à l’année — d’octobre à juin' : 'Year-round course — Oct to June'}
                      </div>
                      <div className="text-emerald-700 font-semibold">
                        ⏰ {isFr ? '2 fois par semaine — 1h et 1h30' : '2 times per week — 1h and 1h30'}
                      </div>
                      <p className="text-slate-600 pt-1">
                        • {isFr
                          ? 'Pour apprendre ou consolider les bases avec un accompagnement régulier et progressif.'
                          : 'To learn or consolidate basics with steady and progressive support.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Track Enfants & Ados */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                  <div className="flex items-center gap-2 text-base font-bold text-amber-950">
                    <span className="text-xl">👧🧑</span>
                    <span>
                      {isFr
                        ? 'Pour les enfants & adolescents à partir de 7 ans'
                        : 'For children & teenagers from 7 years old'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-amber-100 shadow-2xs space-y-1">
                      <div className="font-bold text-slate-900">
                        ⚡ {isFr ? 'Parcours intensif — 3 mois' : 'Intensive — 3 months'}
                      </div>
                      <div className="text-amber-800 font-semibold">
                        ⏰ {isFr ? '4 fois par semaine — 1h' : '4x/week — 1h'}
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        • {isFr ? 'Apprentissage structuré & ludique de la lecture arabe et du Coran.' : 'Structured & playful Arabic reading.'}
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-amber-100 shadow-2xs space-y-1">
                      <div className="font-bold text-slate-900">
                        📖 {isFr ? 'Parcours 6 mois' : '6-Month Track'}
                      </div>
                      <div className="text-amber-800 font-semibold">
                        ⏰ {isFr ? '2 fois / semaine — 1h et 1h30' : '2x/week — 1h & 1h30'}
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        • {isFr ? 'Consolider les acquis et améliorer progressivement la fluidité.' : 'Reinforce skills & improve reading flow.'}
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-amber-100 shadow-2xs space-y-1">
                      <div className="font-bold text-slate-900">
                        📚 {isFr ? 'Parcours à l’année' : 'Year-round Track'}
                      </div>
                      <div className="text-amber-800 font-semibold">
                        ⏰ {isFr ? 'D’octobre à juin' : 'Oct to June'}
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        • {isFr ? 'Accompagnement régulier et adapté à l’âge et au niveau.' : 'Tailored support adapted to age and level.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goal Highlight */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 flex items-start gap-2.5">
                <span className="text-lg">🎯</span>
                <span>
                  {isFr
                    ? 'L’objectif de ces parcours : apprendre l’arabe avec bienveillance, consolider les acquis et pouvoir lire le Coran plus facilement.'
                    : 'The goal of these tracks: learn Arabic with kindness, consolidate knowledge, and read the Quran more easily.'}
                </span>
              </div>

              {/* Contact Notice & Action Buttons */}
              <div className="space-y-3 pt-1">
                <div className="text-xs sm:text-sm text-slate-700 italic">
                  📩 {isFr
                    ? 'Si vous souhaitez connaître les modalités ou savoir quel parcours correspond le mieux à votre situation, contactez moi par sms au 0629240981'
                    : 'If you wish to know terms or find out which track suits you best, contact me by SMS at 0629240981'}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="sms:0629240981"
                    className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>SMS : 06 29 24 09 81</span>
                  </a>

                  <a
                    href="tel:0629240981"
                    className="px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>06 29 24 09 81</span>
                  </a>

                  <a
                    href={FORMATION_DA3_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      setContactForm((prev) => ({ ...prev, programType: 'arabe' }));
                      setIsContactModalOpen(true);
                    }}
                    className="px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    {isFr ? 'Formulaire en ligne' : 'Inquiry form'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Poster DA3 */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
              <div
                onClick={() => {
                  setActiveFlyer('da3');
                  setIsPhotoZoomed(true);
                }}
                className="relative group cursor-pointer w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-200/60"
              >
                <img
                  src={ASSET_IMAGES.da3}
                  alt="Affiche DA3 : Apprendre l'arabe avec bienveillance et lire le Coran plus facilement"
                  className="w-full h-auto object-cover max-h-[520px]"
                  loading="eager"
                />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-xs border border-white/20">
                    Affiche DA3
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-emerald-600 shadow-sm">
                    {isFr ? 'Inscriptions Ouvertes' : 'Open'}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-xs font-semibold text-emerald-300">
                        {isFr ? 'Femmes adultes & Enfants dès 7 ans' : 'Women & Children 7+'}
                      </p>
                      <p className="text-sm font-bold text-white">
                        {isFr ? 'Sessions 3 mois & À l’année' : '3-Month & Year-round'}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-full bg-white/20 group-hover:bg-emerald-600 text-white transition-colors">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <span>{isFr ? 'Affiche officielle DA3' : 'Official Flyer DA3'}</span>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFlyer('da3');
                    setIsPhotoZoomed(true);
                  }}
                  className="text-emerald-700 hover:underline font-bold"
                >
                  {isFr ? 'Agrandir en grand écran' : 'Enlarge'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* FULLSCREEN PHOTO ZOOM MODAL WITH SWITCHER FOR ALL 4 FLYERS */}
      {/* ============================================================== */}
      {isPhotoZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsPhotoZoomed(false)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                  {currentZoomTitle}
                </span>
                <span className="text-xs text-slate-400">·</span>
                {/* 4 Poster Switcher in Modal */}
                <div className="flex gap-1">
                  <button
                    onClick={() => setActiveFlyer('da1')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                      activeFlyer === 'da1' ? 'bg-[#1E3A8A] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    DA1
                  </button>
                  <button
                    onClick={() => setActiveFlyer('da4')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                      activeFlyer === 'da4' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    DA4
                  </button>
                  <button
                    onClick={() => setActiveFlyer('da2')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                      activeFlyer === 'da2' ? 'bg-[#F97316] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    DA2
                  </button>
                  <button
                    onClick={() => setActiveFlyer('da3')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                      activeFlyer === 'da3' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    DA3 (Arabe)
                  </button>
                </div>
              </div>
              <button
                onClick={() => setIsPhotoZoomed(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 flex justify-center bg-slate-100">
              <img
                src={currentZoomImage}
                alt={currentZoomTitle}
                className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-md"
              />
            </div>

            <div className="p-4 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-600">
                <strong>📞 Contact SMS / Tél : 06 29 24 09 81 (0033629240981)</strong>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="sms:0629240981"
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  SMS
                </a>
                <a
                  href="tel:0629240981"
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  {isFr ? 'Appeler' : 'Call'}
                </a>
                <button
                  onClick={() => {
                    setIsPhotoZoomed(false);
                    setIsContactModalOpen(true);
                  }}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors"
                >
                  {isFr ? 'Écris-moi en privé' : 'Message'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* PRIVATE MESSAGE / CONTACT MODAL */}
      {/* ============================================================== */}
      {isContactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 max-h-[92vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5" />
                  {isFr ? 'Échanger en privé' : 'Private inquiry'}
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  {selectedProgram === 'da1'
                    ? isFr
                      ? 'Formation : Apprendre Autrement (DA1)'
                      : 'Training: Learning Differently (DA1)'
                    : selectedProgram === 'da4'
                    ? isFr
                      ? 'Formation : Méthodes & Confiance (DA4)'
                      : 'Training: Methods & Confidence (DA4)'
                    : isFr
                    ? 'Cours d’Arabe & Lecture du Coran (DA3)'
                    : 'Arabic & Quran Reading Courses (DA3)'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isFr ? 'Contact direct : 06 29 24 09 81' : 'Direct contact: 06 29 24 09 81'}
                </p>
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 space-y-1 text-xs text-slate-700">
              <p>
                <strong>📞 Téléphone / WhatsApp / SMS direct :</strong>{' '}
                <a href="tel:0629240981" className="font-bold text-[#F97316] underline">
                  06 29 24 09 81
                </a>{' '}
                (0033629240981)
              </p>
              <p className="text-slate-600">
                {isFr
                  ? 'Posez vos questions ou exprimez les besoins de votre enfant. Nous vous répondrons très rapidement.'
                  : 'Ask your questions or share your child’s needs. We will respond promptly.'}
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isFr ? 'Votre nom & prénom *' : 'Your full name *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder={isFr ? 'Ex: Sophie Martin' : 'e.g. Sarah Connor'}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isFr ? 'Téléphone *' : 'Phone *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="06 12 34 56 78"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isFr ? 'Email' : 'Email'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-hidden"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isFr ? 'Formation concernée' : 'Relevant program'}
                </label>
                <select
                  value={contactForm.programType}
                  onChange={(e) => setContactForm({ ...contactForm, programType: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-hidden bg-white"
                >
                  <option value="da1-pedagogie">📖 Formation DA1 : Apprendre Autrement (Lecture, Mémorisation, Mind Mapping)</option>
                  <option value="da4-methodes">🧠 Formation DA4 : Méthodes & Confiance (100% en ligne dès 12 ans)</option>
                  <option value="da3-arabe">🌙 Cours DA3 : Apprendre l’Arabe & Lecture du Coran</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isFr ? 'Besoins ou message' : 'Needs or message'}
                </label>
                <textarea
                  rows={3}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder={
                    isFr
                      ? 'Ex: Mon enfant a du mal à mémoriser ses leçons, manque d’organisation et de confiance...'
                      : 'e.g. My child struggles to memorise, lacks organization and confidence...'
                  }
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] outline-hidden"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  {isFr ? 'Annuler' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isFr ? 'Envoyer en privé' : 'Send privately'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
