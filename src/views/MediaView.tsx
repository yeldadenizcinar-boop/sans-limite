import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Video,
  Download,
  ExternalLink,
  Mail,
  X,
  Play,
  FileText,
  ShieldAlert,
} from 'lucide-react';
import { SubPageId, CookiePreferences, Language } from '../types';
import { getLocalizedData, ASSOCIATION_INFO, ASSET_IMAGES } from '../data/content';
import { TRANSLATIONS } from '../data/translations';
import { PageBanner } from '../components/PageBanner';

interface MediaViewProps {
  language: Language;
  currentSubPage?: SubPageId;
  cookiePreferences: CookiePreferences;
  onOpenCookiePreferences: () => void;
  onToast: (type: 'success' | 'error' | 'info', title: string, message: string) => void;
}

export const MediaView: React.FC<MediaViewProps> = ({
  language,
  currentSubPage,
  cookiePreferences,
  onOpenCookiePreferences,
  onToast,
}) => {
  const t = TRANSLATIONS[language];
  const { pressArticles } = getLocalizedData(language);

  const [activeTab, setActiveTab] = useState<'galerie' | 'presse'>(
    currentSubPage === 'espace-presse' ? 'presse' : 'galerie',
  );

  const [activeLightbox, setActiveLightbox] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  const albums = [
    {
      id: 'alb-1',
      title:
        language === 'fr'
          ? 'Rencontres Interculturelles, Danses du Monde & Échanges Européens'
          : 'Intercultural Encounters, World Dance & European Exchanges',
      date: language === 'fr' ? 'Juillet 2026' : 'July 2026',
      photosCount: 10,
      cover: ASSET_IMAGES.i1,
      photos: [
        {
          url: ASSET_IMAGES.i1,
          caption:
            language === 'fr'
              ? 'Atelier de danses traditionnelles et expression corporelle interculturelle'
              : 'Traditional folk and world dance workshop: rhythm and body expression',
        },
        {
          url: ASSET_IMAGES.i2,
          caption:
            language === 'fr'
              ? 'Célébration festive, rythmes du monde et dynamique collective'
              : 'Festive cultural celebration, international folk beats, and group energy',
        },
        {
          url: ASSET_IMAGES.i3,
          caption:
            language === 'fr'
              ? 'Bibliothèque Vivante (Human Library) & dialogue contre les stéréotypes'
              : 'Human Library session: sharing life stories and dismantling stereotypes',
        },
        {
          url: ASSET_IMAGES.i4,
          caption:
            language === 'fr'
              ? 'Cercle de danse collective et cohésion interculturelle'
              : 'Intercultural circle dance fostering unity and mutual respect',
        },
        {
          url: ASSET_IMAGES.i5,
          caption:
            language === 'fr'
              ? 'Atelier créatif et expression artistique des diversités'
              : 'Creative artistic expression celebrating community diversity',
        },
        {
          url: ASSET_IMAGES.i6,
          caption:
            language === 'fr'
              ? 'Débat citoyen et écoute active entre jeunes d’horizons divers'
              : 'Civic dialogue, active listening, and open reflection among peers',
        },
        {
          url: ASSET_IMAGES.i7,
          caption:
            language === 'fr'
              ? 'Performance scénique participative et théâtre d’improvisation'
              : 'Participatory stage performance and forum theatre simulation',
        },
        {
          url: ASSET_IMAGES.i8,
          caption:
            language === 'fr'
              ? 'Convivialité et partage culinaire interculturel'
              : 'Warm convivial gathering and intercultural culinary treats',
        },
        {
          url: ASSET_IMAGES.i9,
          caption:
            language === 'fr'
              ? 'Chorégraphie collective et rassemblement de jeunesse'
              : 'Collective folk choreography and energetic youth unity',
        },
        {
          url: ASSET_IMAGES.i10,
          caption:
            language === 'fr'
              ? 'Échange interculturel et célébration de la fraternité'
              : 'Cross-cultural celebration, fellowship, and lasting European friendships',
        },
      ],
    },
    {
      id: 'alb-2',
      title:
        language === 'fr'
          ? 'Ateliers Éloquence & Expression Citoyenne'
          : 'Eloquence & Active Citizenship Workshops',
      date: language === 'fr' ? 'Septembre 2026' : 'September 2026',
      photosCount: 6,
      cover: ASSET_IMAGES.y1,
      photos: [
        {
          url: ASSET_IMAGES.y1,
          caption:
            language === 'fr'
              ? 'Atelier participatif de co-création et d’expression citoyenne'
              : 'Participatory co-creation and civic expression workshop',
        },
        {
          url: ASSET_IMAGES.y2,
          caption:
            language === 'fr'
              ? 'Travail en équipe et dynamique de groupe'
              : 'Teamwork dynamics and group reflection',
        },
        {
          url: ASSET_IMAGES.y3,
          caption:
            language === 'fr'
              ? 'Activités interactives et prise de parole'
              : 'Interactive activities and public speaking',
        },
        {
          url: ASSET_IMAGES.y4,
          caption:
            language === 'fr'
              ? 'Simulation de débat citoyen et écoute active'
              : 'Civic debate simulation and active listening',
        },
        {
          url: ASSET_IMAGES.y5,
          caption:
            language === 'fr'
              ? 'Co-conception de projets solidaires entre pairs'
              : 'Collaborative peer-to-peer solidarity project design',
        },
        {
          url: ASSET_IMAGES.y6,
          caption:
            language === 'fr'
              ? 'Célébration collective et remise des certificats'
              : 'Collective celebration and certificate handover',
        },
      ],
    },
    {
      id: 'alb-3',
      title:
        language === 'fr'
          ? 'Transition Écologique, Anti-Gaspillage & Jardins Partagés'
          : 'Ecological Transition, Anti-Waste Kitchen & Community Gardens',
      date: language === 'fr' ? 'Août 2026' : 'August 2026',
      photosCount: 10,
      cover: ASSET_IMAGES.c1,
      photos: [
        {
          url: ASSET_IMAGES.c1,
          caption:
            language === 'fr'
              ? 'Atelier cuisine anti-gaspillage : valorisation des surplus maraîchers et invendus'
              : 'Anti-food waste cooking workshop: rescuing surplus produce and market donations',
        },
        {
          url: ASSET_IMAGES.c2,
          caption:
            language === 'fr'
              ? 'Préparation culinaire collective et recettes créatives zéro déchet'
              : 'Collective community meal preparation and creative zero-waste culinary recipes',
        },
        {
          url: ASSET_IMAGES.c3,
          caption:
            language === 'fr'
              ? 'Repas partagé solidaire et convivial autour des plats préparés ensemble'
              : 'Warm solidarity meal sharing healthy dishes prepared together by volunteers',
        },
        {
          url: ASSET_IMAGES.c4,
          caption:
            language === 'fr'
              ? 'Sensibilisation à la réduction des déchets et tri sélectif'
              : 'Zero-waste awareness, composting techniques, and local waste reduction',
        },
        {
          url: ASSET_IMAGES.c5,
          caption:
            language === 'fr'
              ? 'Jardinage écologique et permaculture urbaine à Vitry'
              : 'Hands-on urban permaculture and organic planting in Vitry community garden',
        },
        {
          url: ASSET_IMAGES.c6,
          caption:
            language === 'fr'
              ? 'Récolte solidaire dans notre potager partagé de quartier'
              : 'Solidarity harvest of seasonal vegetables, fruits, and aromatic herbs',
        },
        {
          url: ASSET_IMAGES.c7,
          caption:
            language === 'fr'
              ? 'Atelier pratique de sensibilisation éco-citoyenne'
              : 'Interactive workshop on eco-citizenship and everyday sustainable habits',
        },
        {
          url: ASSET_IMAGES.c8,
          caption:
            language === 'fr'
              ? 'Repair Café solidaire : réparation collaborative d’objets du quotidien'
              : 'Community Repair Café: fixing everyday home appliances and reducing e-waste',
        },
        {
          url: ASSET_IMAGES.c9,
          caption:
            language === 'fr'
              ? 'Clean-walk citoyenne et collecte participative de déchets'
              : 'Grassroots clean-walk and participatory neighbourhood environmental action',
        },
        {
          url: ASSET_IMAGES.c10,
          caption:
            language === 'fr'
              ? 'Mobilisation collective pour la transition écologique locale'
              : 'Youth and family mobilisation driving tangible local ecological transition',
        },
      ],
    },
  ];

  const handleDownloadPressKit = () => {
    onToast(
      'success',
      language === 'fr' ? 'Dossier de presse téléchargé' : 'Press kit downloaded',
      language === 'fr'
        ? 'Le dossier de presse officiel (format PDF haute définition) a été téléchargé.'
        : 'The official high-resolution press kit (PDF) has been downloaded.',
    );
  };

  const handleDownloadLogo = (format: string) => {
    onToast(
      'success',
      language === 'fr' ? 'Logo téléchargé' : 'Logo downloaded',
      language === 'fr'
        ? `Le pack logo Sans Limite (format ${format}) a été téléchargé avec succès.`
        : `The Sans Limite logo pack (${format} format) has been downloaded.`,
    );
  };

  return (
    <div className="space-y-14 pb-16">
      <PageBanner
        title={t.mediaPage.title}
        subtitle={t.mediaPage.subtitle}
        backgroundImage={ASSET_IMAGES.hero}
        badge={t.mediaPage.badge}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('galerie')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'galerie'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{t.mediaPage.tabGallery}</span>
          </button>
          <button
            onClick={() => setActiveTab('presse')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 ${
              activeTab === 'presse'
                ? 'bg-[#1E3A8A] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.mediaPage.tabPress}</span>
          </button>
        </div>

        {/* 7a. GALERIE PHOTOS & VIDÉOS */}
        {activeTab === 'galerie' && (
          <div className="space-y-16">
            {/* Photo Albums */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                  {language === 'fr' ? 'Reportages terrain' : 'Field Reports'}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {language === 'fr' ? 'Albums photos par projet' : 'Photo Albums by Project'}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {albums.map((alb) => (
                  <div
                    key={alb.id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={alb.cover}
                          alt={alb.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 right-3 bg-black/60 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>
                            {alb.photos.length} {t.mediaPage.photosCount}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 space-y-2">
                        <span className="text-xs text-slate-500 font-semibold">{alb.date}</span>
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                          {alb.title}
                        </h4>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        onClick={() => setActiveLightbox(alb.photos[0])}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#1E3A8A] bg-blue-50/70 hover:bg-blue-100 transition-colors text-center"
                      >
                        {t.mediaPage.viewPhotos}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section with GDPR Cookie Gate */}
            <div className="space-y-6 pt-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                  {language === 'fr' ? 'Documentaires & Clips' : 'Documentaries & Video Stories'}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {t.mediaPage.videoTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.mediaPage.videoDesc}
                </p>
              </div>

              {cookiePreferences.thirdParty ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* YouTube Embed 1 */}
                  <div className="rounded-3xl overflow-hidden border border-slate-200 bg-black aspect-video relative shadow-xs">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                      title="Vidéo Sans Limite"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* YouTube Embed 2 */}
                  <div className="rounded-3xl overflow-hidden border border-slate-200 bg-black aspect-video relative shadow-xs">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/L_LUpnjgPso"
                      title="Projet Erasmus+ Sans Limite"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
                <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-4 max-w-2xl mx-auto border border-slate-800">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-[#F97316] flex items-center justify-center mx-auto">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold">
                    {language === 'fr' ? 'Contenu vidéo tiers bloqué' : 'Third-Party Video Content Blocked'}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t.mediaPage.cookieWarning}
                  </p>
                  <div>
                    <button
                      onClick={onOpenCookiePreferences}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#F97316] hover:bg-[#ea580c] text-white transition-colors"
                    >
                      {t.mediaPage.enableCookiesBtn}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 7b. ESPACE PRESSE */}
        {activeTab === 'presse' && (
          <div className="space-y-14">
            {/* Press Kit Banner */}
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#162a63] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
              <div className="space-y-3 max-w-xl">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-white/20 text-white inline-block">
                  {language === 'fr' ? 'Dossier Journalistes' : 'Media Kit'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black">{t.mediaPage.pressKitTitle}</h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {t.mediaPage.pressKitDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={handleDownloadPressKit}
                  className="px-5 py-3 rounded-xl text-xs font-bold text-[#1E3A8A] bg-white hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.mediaPage.downloadPressKit}</span>
                </button>
              </div>
            </div>

            {/* Official Logos Download */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900">
                    {language === 'fr' ? 'Charte Graphique & Logos Officiels' : 'Visual Identity & Official Logos'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === 'fr'
                      ? 'Téléchargez le logotype officiel « Sans Limite » (Slogo.png) haute définition pour vos publications.'
                      : 'Download the official “Sans Limite” logotype (Slogo.png) in high definition for publication.'}
                  </p>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-50 border border-slate-200 shrink-0">
                  <img
                    src="/assets/images/Slogo.png?v=2"
                    alt="Logo officiel Sans Limite"
                    className="w-14 h-11 object-contain"
                  />
                  <div className="text-left pr-2">
                    <span className="text-xs font-bold text-slate-900 block">Slogo.png</span>
                    <span className="text-[10px] text-emerald-600 font-semibold block">● Format Officiel HD</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/assets/images/Slogo.png?v=2"
                      alt="Sans Limite PNG"
                      className="w-8 h-8 object-contain shrink-0"
                    />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Logo PNG (Transparent)</span>
                      <span className="text-[11px] text-slate-500">Original · Slogo.png</span>
                    </div>
                  </div>
                  <a
                    href="/assets/images/Slogo.png"
                    download="Sans-Limite-Slogo.png"
                    onClick={() => handleDownloadLogo('PNG')}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors inline-flex items-center justify-center"
                    aria-label="Download PNG Logo"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Logo SVG (Vectoriel)</span>
                    <span className="text-[11px] text-slate-500">Idéal pour le web et l’impression</span>
                  </div>
                  <button
                    onClick={() => handleDownloadLogo('SVG')}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
                    aria-label="Download SVG Logo"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Pack Charte Complète (ZIP)</span>
                    <span className="text-[11px] text-slate-500">Guide des couleurs & typographies</span>
                  </div>
                  <button
                    onClick={() => handleDownloadLogo('ZIP')}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700"
                    aria-label="Download Full Brand Kit"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Press Releases & Clippings */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-slate-900">{t.mediaPage.pressArticlesTitle}</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pressArticles.map((art, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="font-bold text-[#1E3A8A]">{art.source}</span>
                        <span>{art.date}</span>
                      </div>
                      <h5 className="text-base font-bold text-slate-900">{art.title}</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">{art.excerpt}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <a
                        href={art.url}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:underline"
                      >
                        <span>{t.mediaPage.consultArticle}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Contact box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  {language === 'fr' ? 'Contact Presse Dédié' : 'Media Relations Contact'}
                </span>
                <p className="text-sm font-bold text-slate-900">
                  {language === 'fr'
                    ? "Pour toute demande d'interview ou de reportage sur le terrain :"
                    : 'For interview requests or field reporting inquiries:'}
                </p>
                <div className="text-xs text-slate-600">
                  Assia O. — Présidente · {ASSOCIATION_INFO.email}
                </div>
              </div>
              <a
                href={`mailto:${ASSOCIATION_INFO.email}`}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#162a63] transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{language === 'fr' ? 'Contacter le pôle presse' : 'Contact Press Office'}</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox for gallery images */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
        >
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black"
              aria-label={t.common.close}
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeLightbox.url}
              alt={activeLightbox.caption}
              className="w-full max-h-[75vh] object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 bg-slate-950 text-slate-200 text-xs text-center">
              {activeLightbox.caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
