import React, { useState, useEffect } from 'react';
import {
  PageId,
  SubPageId,
  EuropeanProject,
  AgendaEvent,
  BlogPost,
  CookiePreferences,
  Language,
} from './types';
import { TRANSLATIONS } from './data/translations';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Breadcrumbs } from './components/Breadcrumbs';
import { BackToTop } from './components/BackToTop';
import { ToastContainer, ToastMessage } from './components/Toast';

// Views
import { HomeView } from './views/HomeView';
import { AssociationView } from './views/AssociationView';
import { ActionsView } from './views/ActionsView';
import { ProjectsView } from './views/ProjectsView';
import { AgendaView } from './views/AgendaView';
import { BlogView } from './views/BlogView';
import { MediaView } from './views/MediaView';
import { EngagementView } from './views/EngagementView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';
import { NotFoundView } from './views/NotFoundView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('accueil');
  const [currentSubPage, setCurrentSubPage] = useState<SubPageId | undefined>();

  // Language state (fr | en)
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('sanslimite_lang');
      if (savedLang === 'en' || savedLang === 'fr') return savedLang;
    } catch {
      // Ignore
    }
    return 'fr';
  });

  const handleToggleLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('sanslimite_lang', lang);
    } catch {
      // Ignore
    }
    document.documentElement.lang = lang;
    addToast(
      'info',
      lang === 'fr' ? 'Langue changée' : 'Language changed',
      lang === 'fr' ? 'Le site est maintenant en Français.' : 'The website is now in English.',
    );
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Modals & single views
  const [selectedProject, setSelectedProject] = useState<EuropeanProject | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Cookie management
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>(() => {
    try {
      const saved = localStorage.getItem('sanslimite_cookie_consent');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore localStorage errors
    }
    return {
      necessary: true,
      analytics: false,
      thirdParty: false,
      answered: false,
    };
  });
  const [cookieBannerOpen, setCookieBannerOpen] = useState(!cookiePreferences.answered);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, type, title, message }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSaveCookiePreferences = (prefs: CookiePreferences) => {
    setCookiePreferences(prefs);
    try {
      localStorage.setItem('sanslimite_cookie_consent', JSON.stringify(prefs));
    } catch {
      // Ignore
    }
    addToast(
      'info',
      language === 'fr' ? 'Préférences enregistrées' : 'Preferences saved',
      language === 'fr'
        ? 'Vos préférences de cookies ont bien été mises à jour.'
        : 'Your cookie preferences have been updated.',
    );
  };

  const handleNavigate = (page: PageId, subPage?: SubPageId) => {
    setCurrentPage(page);
    setCurrentSubPage(subPage);
    setSelectedProject(null);
    setSelectedEvent(null);
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: EuropeanProject | null) => {
    setSelectedProject(project);
    if (project && currentPage !== 'projets-europeens') {
      setCurrentPage('projets-europeens');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEvent = (event: AgendaEvent | null) => {
    setSelectedEvent(event);
    if (event && currentPage !== 'agenda') {
      setCurrentPage('agenda');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (article: BlogPost | null) => {
    setSelectedArticle(article);
    if (article && currentPage !== 'actualites') {
      setCurrentPage('actualites');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Breadcrumbs items calculation
  const getBreadcrumbs = () => {
    if (currentPage === 'accueil') return [];

    const t = TRANSLATIONS[language];

    const pageLabels: Record<PageId, string> = {
      accueil: t.nav.home,
      association: t.nav.association,
      actions: t.nav.actions,
      'projets-europeens': t.nav.projects,
      agenda: t.nav.agenda,
      actualites: t.nav.news,
      medias: t.nav.media,
      's-engager': t.nav.engage,
      contact: t.nav.contact,
      'mentions-legales': t.footer.legalNotice,
      'politique-confidentialite': t.footer.privacyPolicy,
      'gestion-cookies': t.footer.cookieSettings,
      accessibilite: t.footer.accessibility,
      '404': '404',
    };

    const subPageLabels: Partial<Record<SubPageId, string>> = {
      histoire: t.nav.subAssociation.history,
      'mission-valeurs': t.nav.subAssociation.mission,
      equipe: t.nav.subAssociation.team,
      partenaires: t.nav.subAssociation.partners,
      'statuts-rapports': t.nav.subAssociation.reports,
      'action-jeunesse': t.nav.subActions.youth,
      'action-culture': t.nav.subActions.culture,
      'action-environnement': t.nav.subActions.environment,
      'action-inclusion': t.nav.subActions.inclusion,
      'erasmus-nous': t.nav.subProjects.erasmus,
      'projets-en-cours': t.nav.subProjects.ongoing,
      'projets-realises': t.nav.subProjects.completed,
      'appels-participation': t.nav.subProjects.calls,
      'devenir-partenaire': t.nav.subProjects.partner,
      galerie: t.nav.subMedia.gallery,
      'espace-presse': t.nav.subMedia.press,
      adherer: t.nav.subEngage.join,
      'devenir-benevole': t.nav.subEngage.volunteer,
      'service-civique': t.nav.subEngage.civicService,
      'faire-un-don': t.nav.subEngage.donate,
    };

    const crumbs = [];

    if (currentSubPage && subPageLabels[currentSubPage]) {
      crumbs.push({
        label: pageLabels[currentPage],
        onClick: () => handleNavigate(currentPage),
      });
      crumbs.push({
        label: subPageLabels[currentSubPage]!,
        active: true,
      });
    } else if (selectedArticle) {
      crumbs.push({
        label: t.nav.news,
        onClick: () => handleSelectArticle(null),
      });
      crumbs.push({
        label: selectedArticle.title,
        active: true,
      });
    } else {
      crumbs.push({
        label: pageLabels[currentPage],
        active: true,
      });
    }

    return crumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#F97316]/20 selection:text-[#1E3A8A]">
      {/* Sticky Top Header with BrandLogo and Language Switcher */}
      <Header
        currentPage={currentPage}
        currentSubPage={currentSubPage}
        language={language}
        onNavigate={handleNavigate}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Breadcrumbs for inner pages */}
      {breadcrumbs.length > 0 && (
        <Breadcrumbs
          items={breadcrumbs}
          onNavigateHome={() => handleNavigate('accueil')}
        />
      )}

      {/* Main View Container */}
      <main className="flex-1">
        {currentPage === 'accueil' && (
          <HomeView
            language={language}
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onSelectEvent={handleSelectEvent}
            onSelectArticle={handleSelectArticle}
          />
        )}

        {currentPage === 'association' && (
          <AssociationView
            language={language}
            currentSubPage={currentSubPage}
            onToast={addToast}
          />
        )}

        {currentPage === 'actions' && (
          <ActionsView
            language={language}
            currentSubPage={currentSubPage}
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onSelectEvent={handleSelectEvent}
          />
        )}

        {currentPage === 'projets-europeens' && (
          <ProjectsView
            language={language}
            currentSubPage={currentSubPage}
            selectedProject={selectedProject}
            onSelectProject={handleSelectProject}
            onToast={addToast}
          />
        )}

        {currentPage === 'agenda' && (
          <AgendaView
            language={language}
            selectedEvent={selectedEvent}
            onSelectEvent={handleSelectEvent}
            onToast={addToast}
          />
        )}

        {currentPage === 'actualites' && (
          <BlogView
            language={language}
            selectedArticle={selectedArticle}
            onSelectArticle={handleSelectArticle}
            onToast={addToast}
          />
        )}

        {currentPage === 'medias' && (
          <MediaView
            language={language}
            currentSubPage={currentSubPage}
            cookiePreferences={cookiePreferences}
            onOpenCookiePreferences={() => setCookieBannerOpen(true)}
            onToast={addToast}
          />
        )}

        {currentPage === 's-engager' && (
          <EngagementView
            language={language}
            currentSubPage={currentSubPage}
            onToast={addToast}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView language={language} onToast={addToast} />
        )}

        {(currentPage === 'mentions-legales' ||
          currentPage === 'politique-confidentialite' ||
          currentPage === 'gestion-cookies' ||
          currentPage === 'accessibilite') && (
          <LegalView
            language={language}
            pageType={currentPage}
            onOpenCookiePreferences={() => setCookieBannerOpen(true)}
          />
        )}

        {currentPage === '404' && (
          <NotFoundView
            language={language}
            onNavigate={handleNavigate}
            onSearch={() => {
              handleNavigate('actualites');
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        language={language}
        onNavigate={handleNavigate}
        onOpenCookiePreferences={() => setCookieBannerOpen(true)}
        onToast={addToast}
      />

      {/* Cookie Banner (GDPR / CNIL) */}
      <CookieBanner
        language={language}
        isOpen={cookieBannerOpen}
        preferences={cookiePreferences}
        onSavePreferences={handleSaveCookiePreferences}
        onClose={() => setCookieBannerOpen(false)}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Floating Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
