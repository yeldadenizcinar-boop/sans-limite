import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  List,
  Filter,
  MapPin,
  Share2,
  CalendarPlus,
  X,
} from 'lucide-react';
import { AgendaEvent, Language } from '../types';
import { getLocalizedData, ASSET_IMAGES } from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { PageBanner } from '../components/PageBanner';

interface AgendaViewProps {
  language: Language;
  selectedEvent: AgendaEvent | null;
  onSelectEvent: (event: AgendaEvent | null) => void;
  onToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const AgendaView: React.FC<AgendaViewProps> = ({
  language,
  selectedEvent,
  onSelectEvent,
  onToast,
}) => {
  const t = TRANSLATIONS[language];
  const { agendaEvents } = getLocalizedData(language);

  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  // Registration modal for single event
  const [registerEvent, setRegisterEvent] = useState<AgendaEvent | null>(null);
  const [regForm, setRegForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    nbPersonnes: 1,
    consent: false,
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.nom || !regForm.email) {
      onToast('error', language === 'fr' ? 'Champs requis' : 'Required fields', t.common.requiredFields);
      return;
    }
    if (!regForm.consent) {
      onToast('error', language === 'fr' ? 'Consentement requis' : 'Consent required', t.common.consentRequired);
      return;
    }

    onToast(
      'success',
      language === 'fr' ? 'Inscription validée !' : 'Registration confirmed!',
      language === 'fr'
        ? `Merci ${regForm.prenom} ! Votre place pour "${registerEvent?.title}" (${regForm.nbPersonnes} pers.) est bien réservée. Un email récapitulatif vous a été envoyé.`
        : `Thank you ${regForm.prenom}! Your spot for "${registerEvent?.title}" (${regForm.nbPersonnes} pers.) has been booked. A confirmation email has been sent.`,
    );
    setRegisterEvent(null);
    setRegForm({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      nbPersonnes: 1,
      consent: false,
    });
  };

  // Generate .ics calendar file download
  const handleAddToCalendar = (evt: AgendaEvent) => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sans Limite//Agenda//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${evt.title}`,
      `DESCRIPTION:${evt.shortDesc}`,
      `LOCATION:${evt.address}`,
      `DTSTART:20261014T183000Z`,
      `DTEND:20261014T203000Z`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${evt.id}-sans-limite.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onToast(
      'success',
      language === 'fr' ? 'Événement ajouté' : 'Event added',
      language === 'fr'
        ? 'Le fichier .ics a été généré et téléchargé pour votre calendrier (Google Calendar, Outlook, Apple Calendar).'
        : 'The .ics file was generated and downloaded for your calendar (Google Calendar, Outlook, Apple Calendar).',
    );
  };

  const handleShare = (evt: AgendaEvent) => {
    navigator.clipboard?.writeText(window.location.href);
    onToast(
      'info',
      language === 'fr' ? 'Lien copié !' : 'Link copied!',
      language === 'fr'
        ? 'Le lien de cet événement a été copié dans votre presse-papier.'
        : 'The link to this event has been copied to your clipboard.',
    );
  };

  // Filter events
  const filteredEvents = agendaEvents.filter((evt) => {
    if (selectedType !== 'all' && evt.type !== selectedType) return false;
    if (selectedMonth !== 'all' && evt.month !== selectedMonth) return false;
    return true;
  });

  return (
    <div className="space-y-14 pb-16">
      <PageBanner
        title={t.agendaPage.title}
        subtitle={t.agendaPage.subtitle}
        backgroundImage={ASSET_IMAGES.hero}
        badge={t.agendaPage.badge}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Controls: View Switcher and Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>{language === 'fr' ? 'Type :' : 'Type:'}</span>
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none"
            >
              <option value="all">{t.agendaPage.filterType}</option>
              <option value="atelier">{language === 'fr' ? 'Ateliers pratiques' : 'Practical Workshops'}</option>
              <option value="conference">{language === 'fr' ? 'Conférences & Débats' : 'Talks & Debates'}</option>
              <option value="culturel">{language === 'fr' ? 'Événements culturels' : 'Cultural Events'}</option>
              <option value="echange">{language === 'fr' ? 'Échanges de jeunes' : 'Youth Exchanges'}</option>
            </select>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none"
            >
              <option value="all">{t.agendaPage.filterMonth}</option>
              <option value="2026-09">{language === 'fr' ? 'Septembre 2026' : 'September 2026'}</option>
              <option value="2026-10">{language === 'fr' ? 'Octobre 2026' : 'October 2026'}</option>
              <option value="2026-11">{language === 'fr' ? 'Novembre 2026' : 'November 2026'}</option>
            </select>
          </div>

          {/* Toggle Calendar / List View */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === 'list'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>{t.agendaPage.viewList}</span>
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                viewMode === 'calendar'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>{t.agendaPage.viewCalendar}</span>
            </button>
          </div>
        </div>

        {/* LIST VIEW */}
        {viewMode === 'list' ? (
          <div className="space-y-4">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-5">
                  {/* Big Date Badge or Image thumbnail */}
                  {evt.image ? (
                    <button
                      type="button"
                      onClick={() => onSelectEvent(evt)}
                      className="relative w-16 sm:w-20 h-20 rounded-2xl overflow-hidden border-2 border-orange-300 shrink-0 shadow-xs cursor-pointer group text-left"
                    >
                      <img
                        src={evt.image}
                        alt={evt.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1">
                        <span className="text-[10px] font-black text-white leading-tight">
                          {evt.dayNumber} {evt.monthLabel.slice(0, 3)}
                        </span>
                      </div>
                    </button>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200/80 flex flex-col items-center justify-center text-center shrink-0">
                      <span className="text-[11px] font-bold text-[#F97316] uppercase leading-none">
                        {evt.monthLabel.slice(0, 3)}
                      </span>
                      <span className="text-2xl font-black text-slate-900 leading-none mt-1">
                        {evt.dayNumber}
                      </span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-[#1E3A8A]">{evt.typeLabel}</span>
                      <span aria-hidden="true" className="text-slate-300">
                        ·
                      </span>
                      <span className="text-slate-500">{evt.time}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">{evt.title}</h3>

                    <p className="text-xs text-slate-600 line-clamp-2 max-w-2xl whitespace-pre-line">
                      {evt.shortDesc}
                    </p>

                    <div className="text-xs text-slate-500 flex items-center gap-2 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{evt.place}</span>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-row md:flex-col gap-2 shrink-0">
                  <button
                    onClick={() => setRegisterEvent(evt)}
                    className="flex-1 md:flex-none px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors text-center"
                  >
                    {t.agendaPage.registerBtn}
                  </button>
                  <button
                    onClick={() => onSelectEvent(evt)}
                    className="flex-1 md:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
                  >
                    {language === 'fr' ? 'Détails' : 'Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* CALENDAR MONTH GRID VIEW */
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'fr' ? 'Planning des ateliers' : 'Workshop Calendar Schedule'}
              </h3>
              <span className="text-xs text-slate-500">{language === 'fr' ? 'Automne 2026' : 'Autumn 2026'}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  onClick={() => onSelectEvent(evt)}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-blue-50/50 hover:border-[#1E3A8A]/30 cursor-pointer transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#F97316]">
                        {evt.dayNumber} {evt.monthLabel}
                      </span>
                      <span className="text-slate-500">{evt.time}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{evt.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{evt.shortDesc}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-[#1E3A8A] font-semibold">
                    <span>{evt.place}</span>
                    <span className="text-orange-600">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SINGLE EVENT MODAL / DETAIL VIEW */}
      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  {selectedEvent.typeLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                onClick={() => onSelectEvent(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Practical info badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div>
                <span className="font-semibold text-slate-500 block">Date :</span>
                <span className="font-bold text-slate-900">{selectedEvent.date}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-500 block">{t.agendaPage.timeLabel}</span>
                <span className="font-bold text-slate-900">{selectedEvent.time}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-500 block">{language === 'fr' ? 'Tarif :' : 'Price:'}</span>
                <span className="font-bold text-emerald-700">{selectedEvent.price}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-500 block">{language === 'fr' ? 'Places :' : 'Spots:'}</span>
                <span className="font-bold text-orange-600">
                  {selectedEvent.availablePlaces} {language === 'fr' ? 'places' : 'spots'}
                </span>
              </div>
            </div>

            {/* Location & Map box */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-[#1E3A8A]">
                <MapPin className="w-4 h-4" />
                <span>{language === 'fr' ? 'Adresse & Accès' : 'Venue & Access'}</span>
              </div>
              <p className="text-slate-700">
                {selectedEvent.place} — {selectedEvent.address}
              </p>
              <p className="text-slate-600 italic">
                {language === 'fr' ? 'Accessibilité :' : 'Accessibility:'} {selectedEvent.accessibility}
              </p>
            </div>

            {/* Description & Programme */}
            <div className="space-y-3">
              {/* Event Image / Flyer preview */}
              {selectedEvent.image && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex justify-center max-h-80 shadow-xs mb-3">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="max-h-80 w-auto object-contain rounded-xl"
                  />
                </div>
              )}

              <h4 className="text-base font-bold text-slate-900">
                {language === 'fr' ? 'Présentation' : 'About the Event'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {selectedEvent.fullDesc}
              </p>

              <h4 className="text-base font-bold text-slate-900 pt-2">
                {language === 'fr' ? 'Programme détaillé' : 'Detailed Programme'}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedEvent.programme.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions: Add to Calendar, Share, Register */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAddToCalendar(selectedEvent)}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
                >
                  <CalendarPlus className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.agendaPage.addToCalendar}</span>
                </button>
                <button
                  onClick={() => handleShare(selectedEvent)}
                  className="p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  aria-label="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  setRegisterEvent(selectedEvent);
                  onSelectEvent(null);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors"
              >
                {t.agendaPage.registerBtn}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EVENT REGISTRATION FORM MODAL */}
      {registerEvent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                  {t.agendaPage.modalTitle}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  {registerEvent.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {registerEvent.date} · {registerEvent.time}
                </p>
              </div>
              <button
                onClick={() => setRegisterEvent(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {language === 'fr' ? 'Nom *' : 'Last Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={regForm.nom}
                    onChange={(e) => setRegForm({ ...regForm, nom: e.target.value })}
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
                    value={regForm.prenom}
                    onChange={(e) => setRegForm({ ...regForm, prenom: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">{t.agendaPage.emailLabel}</label>
                <input
                  type="email"
                  required
                  value={regForm.email}
                  onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">{t.agendaPage.phoneLabel}</label>
                  <input
                    type="tel"
                    value={regForm.telephone}
                    onChange={(e) => setRegForm({ ...regForm, telephone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.agendaPage.attendeesLabel}
                  </label>
                  <select
                    value={regForm.nbPersonnes}
                    onChange={(e) =>
                      setRegForm({ ...regForm, nbPersonnes: parseInt(e.target.value) || 1 })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#1E3A8A]"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4+</option>
                  </select>
                </div>
              </div>

              <label className="flex items-start gap-2 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={regForm.consent}
                  onChange={(e) => setRegForm({ ...regForm, consent: e.target.checked })}
                  className="mt-0.5 rounded text-[#1E3A8A] focus:ring-0"
                />
                <span className="text-slate-600 leading-tight">
                  {t.agendaPage.consentText}
                </span>
              </label>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setRegisterEvent(null)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100"
                >
                  {t.agendaPage.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-bold text-white bg-[#F97316] hover:bg-[#ea580c] transition-colors"
                >
                  {t.agendaPage.confirmRegister}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
