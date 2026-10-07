import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    association: string;
    actions: string;
    projects: string;
    agenda: string;
    news: string;
    media: string;
    engage: string;
    contact: string;
    donate: string;
    subAssociation: {
      overview: string;
      history: string;
      mission: string;
      team: string;
      partners: string;
      reports: string;
    };
    subActions: {
      overview: string;
      youth: string;
      culture: string;
      environment: string;
      inclusion: string;
    };
    subProjects: {
      overview: string;
      erasmus: string;
      ongoing: string;
      completed: string;
      calls: string;
      partner: string;
    };
    subMedia: {
      gallery: string;
      press: string;
    };
    subEngage: {
      overview: string;
      join: string;
      volunteer: string;
      civicService: string;
      donate: string;
    };
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    btnJoin: string;
    btnActions: string;
  };
  aboutBrief: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    link: string;
    caption: string;
  };
  domainsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    discover: string;
  };
  impactSection: {
    participants: string;
    participantsNote: string;
    projects: string;
    projectsNote: string;
    countries: string;
    countriesNote: string;
    volunteers: string;
    volunteersNote: string;
  };
  projectsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewDetail: string;
  };
  agendaSection: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAll: string;
    register: string;
    location: string;
  };
  newsSection: {
    kicker: string;
    title: string;
    subtitle: string;
    viewAll: string;
    readTime: string;
    readMore: string;
  };
  testimonialsSection: {
    kicker: string;
    title: string;
  };
  partnersSection: {
    kicker: string;
    title: string;
  };
  instaSection: {
    kicker: string;
    title: string;
    subtitle: string;
    btn: string;
  };
  ctaBand: {
    title: string;
    subtitle: string;
    btnVolunteer: string;
    btnDonate: string;
  };
  footer: {
    mission: string;
    legalNote: string;
    quickLinks: string;
    contactUs: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    newsletterConsent: string;
    euCofunded: string;
    euDisclaimer: string;
    copyright: string;
    legalNotice: string;
    privacyPolicy: string;
    cookieSettings: string;
    accessibility: string;
  };
  cookies: {
    title: string;
    desc: string;
    acceptAll: string;
    refuseAll: string;
    customize: string;
    save: string;
    necessaryTitle: string;
    necessaryDesc: string;
    analyticsTitle: string;
    analyticsDesc: string;
    thirdPartyTitle: string;
    thirdPartyDesc: string;
    alwaysActive: string;
  };
  associationPage: {
    title: string;
    subtitle: string;
    badge: string;
    historyKicker: string;
    historyTitle: string;
    historyDesc: string;
    missionKicker: string;
    missionTitle: string;
    missionBoxTitle: string;
    visionBoxTitle: string;
    teamKicker: string;
    teamTitle: string;
    teamDesc: string;
    bureauTitle: string;
    operationalTitle: string;
    partnersKicker: string;
    partnersTitle: string;
    partnersDesc: string;
    localPartners: string;
    europeanPartners: string;
    mapTitle: string;
    mapDesc: string;
    viewAllCountries: string;
    reportsKicker: string;
    reportsTitle: string;
    reportsDesc: string;
    preview: string;
    downloadPdf: string;
  };
  actionsPage: {
    title: string;
    subtitle: string;
    badge: string;
    allDomainsBtn: string;
    contextKicker: string;
    contextTitle: string;
    observationTitle: string;
    activitiesKicker: string;
    activitiesTitle: string;
    freeAccess: string;
    audienceKicker: string;
    audienceTitle: string;
    galleryKicker: string;
    galleryTitle: string;
    relatedKicker: string;
    relatedProjectsTitle: string;
    relatedEventsTitle: string;
    overviewKicker: string;
    overviewTitle: string;
    overviewSubtitle: string;
    discoverDomain: string;
  };
  projectsPage: {
    title: string;
    subtitle: string;
    badge: string;
    tabs: {
      all: string;
      ongoing: string;
      completed: string;
      calls: string;
      partner: string;
    };
    filterAction: string;
    filterYear: string;
    viewDetails: string;
    applyCallBtn: string;
    datesLabel: string;
    locationLabel: string;
    modalClose: string;
    objectivesTitle: string;
    targetGroupTitle: string;
    programmeTitle: string;
    resultsTitle: string;
    partnersTitle: string;
    downloadInfopack: string;
    callsTitle: string;
    callsSubtitle: string;
    deadlineLabel: string;
    spotsLabel: string;
    ageLabel: string;
    conditionsLabel: string;
    partnerTitle: string;
    partnerSubtitle: string;
    orgLabel: string;
    countryLabel: string;
    contactLabel: string;
    emailLabel: string;
    websiteLabel: string;
    picLabel: string;
    actionTypeLabel: string;
    messageLabel: string;
    consentText: string;
    sendPartnerBtn: string;
  };
  agendaPage: {
    title: string;
    subtitle: string;
    badge: string;
    viewList: string;
    viewCalendar: string;
    filterType: string;
    filterMonth: string;
    freeAccess: string;
    locationLabel: string;
    timeLabel: string;
    registerBtn: string;
    addToCalendar: string;
    spotsAvailable: string;
    modalTitle: string;
    modalDesc: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    attendeesLabel: string;
    consentText: string;
    confirmRegister: string;
    cancelBtn: string;
  };
  blogPage: {
    title: string;
    subtitle: string;
    badge: string;
    searchPlaceholder: string;
    allCategories: string;
    readTime: string;
    readArticle: string;
    backToList: string;
    shareBtn: string;
    similarTitle: string;
  };
  mediaPage: {
    title: string;
    subtitle: string;
    badge: string;
    tabGallery: string;
    tabPress: string;
    photosCount: string;
    viewPhotos: string;
    pressKitTitle: string;
    pressKitDesc: string;
    downloadPressKit: string;
    pressArticlesTitle: string;
    consultArticle: string;
    videoTitle: string;
    videoDesc: string;
    cookieWarning: string;
    enableCookiesBtn: string;
  };
  engagementPage: {
    title: string;
    subtitle: string;
    badge: string;
    tabs: {
      join: string;
      volunteer: string;
      civicService: string;
      donate: string;
    };
    joinTitle: string;
    joinDesc: string;
    joinTiersTitle: string;
    freeNotice: string;
    freeNoticeBadge: string;
    options: {
      volunteer: {
        title: string;
        desc: string;
        tag: string;
      };
      member: {
        title: string;
        desc: string;
        tag: string;
      };
      youthWorker: {
        title: string;
        desc: string;
        tag: string;
      };
      training: {
        title: string;
        desc: string;
        tag: string;
      };
    };
    form: {
      title: string;
      subtitle: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      city: string;
      age: string;
      selectedRole: string;
      motivation: string;
      motivationPlaceholder: string;
      interests: string;
      interestsList: {
        youth: string;
        culture: string;
        ecology: string;
        inclusion: string;
        erasmus: string;
      };
      consent: string;
      submitBtn: string;
      successTitle: string;
      successMsg: string;
    };
    volunteerTitle: string;
    volunteerDesc: string;
    volunteerAreasTitle: string;
    volunteerAvailTitle: string;
    sendVolBtn: string;
    civicTitle: string;
    civicDesc: string;
    donateTitle: string;
    donateDesc: string;
    oneOff: string;
    monthly: string;
    taxReductionNote: string;
    taxCostNote: string;
    customAmountLabel: string;
    donateBtn: string;
    secureLabel: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    formKicker: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    subjectLabel: string;
    messageLabel: string;
    consentText: string;
    sendBtn: string;
    detailsTitle: string;
    hqLabel: string;
    emailContactLabel: string;
    phoneContactLabel: string;
    hoursLabel: string;
    faqKicker: string;
    faqTitle: string;
    faqDesc: string;
  };
  legalPage: {
    legalNoticeTitle: string;
    legalNoticeSubtitle: string;
    privacyTitle: string;
    privacySubtitle: string;
    cookiesTitle: string;
    cookiesSubtitle: string;
    accessibilityTitle: string;
    accessibilitySubtitle: string;
  };
  notFoundPage: {
    badge: string;
    title: string;
    desc: string;
    searchPlaceholder: string;
    searchBtn: string;
    backHome: string;
  };
  common: {
    freeAccess: string;
    close: string;
    backHome: string;
    allRightsReserved: string;
    requiredFields: string;
    consentRequired: string;
    actionType: string;
    all: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      association: "L'Association",
      actions: 'Nos Actions',
      projects: 'Projets Européens',
      agenda: 'Agenda',
      news: 'Actualités',
      media: 'Médias',
      engage: "S'engager",
      contact: 'Contact',
      donate: 'Faire un don',
      subAssociation: {
        overview: "Vue d'ensemble",
        history: 'Notre histoire',
        mission: 'Mission & valeurs',
        team: "L'équipe",
        partners: 'Nos partenaires',
        reports: 'Statuts & rapports',
      },
      subActions: {
        overview: 'Tous nos domaines',
        youth: 'Jeunesse & Éducation non formelle',
        culture: 'Culture & Interculturalité',
        environment: 'Environnement & Développement durable',
        inclusion: 'Inclusion sociale & Numérique',
      },
      subProjects: {
        overview: 'Pôle Erasmus+ & Europe',
        erasmus: 'Erasmus+ & nous',
        ongoing: 'Projets en cours',
        completed: 'Projets réalisés',
        calls: 'Appels à participation',
        partner: 'Devenir partenaire',
      },
      subMedia: {
        gallery: 'Galerie photos & vidéos',
        press: 'Espace presse',
      },
      subEngage: {
        overview: 'Toutes les opportunités',
        join: 'Adhérer',
        volunteer: 'Devenir bénévole',
        civicService: 'Service Civique & stages',
        donate: 'Faire un don',
      },
    },
    hero: {
      badge: 'Association loi 1901 · Paris & Vitry-sur-Seine',
      title: 'Ensemble, sans limite.',
      subtitle:
        "Sans Limite œuvre pour que les jeunes et les personnes ayant moins d'opportunités accèdent à l'éducation, à la culture et à l'engagement citoyen — sans limite.",
      btnJoin: 'Adhérer',
      btnActions: 'Découvrir nos actions',
    },
    aboutBrief: {
      kicker: 'Qui sommes-nous ?',
      title: "Une passerelle vers l'autonomie, l'Europe et la solidarité",
      p1: "Fondée en 2025 à Vitry-sur-Seine au cœur de la métropole parisienne, l'association loi 1901 Sans Limite agit pour que chaque individu, et en particulier les jeunes ayant moins d'opportunités, puisse développer ses compétences, élargir ses horizons culturels et s'engager activement dans la société.",
      p2: "Nous allions des actions de proximité ancrées dans nos quartiers avec l'ouverture internationale offerte par le programme européen Erasmus+, convaincus que la mixité des expériences brise toutes les barrières.",
      link: 'En savoir plus sur notre histoire et nos valeurs',
      caption: 'Ateliers participatifs et bienveillants à Vitry-sur-Seine',
    },
    domainsSection: {
      kicker: "Champs d'intervention",
      title: "Nos 4 domaines d'action",
      subtitle: 'Des réponses concrètes et adaptées aux réalités des jeunes et des habitants.',
      discover: 'Découvrir ce pôle',
    },
    impactSection: {
      participants: 'Participants accompagnés',
      participantsNote: 'Jeunes et habitants',
      projects: 'Projets & ateliers réalisés',
      projectsNote: 'En France et en Europe',
      countries: 'Pays partenaires européens',
      countriesNote: 'Réseau Erasmus+',
      volunteers: 'Bénévoles engagés',
      volunteersNote: 'Au quotidien',
    },
    projectsSection: {
      kicker: 'Ouverture Internationale',
      title: 'Projets Erasmus+ en cours',
      subtitle:
        "Des mobilités et des coopérations financées par l'Union européenne pour se former, voyager et déconstruire les frontières.",
      viewAll: 'Voir tous les projets',
      viewDetail: 'Voir le projet en détail',
    },
    agendaSection: {
      kicker: 'Calendrier associatif',
      title: 'Prochains événements & ateliers',
      subtitle: 'Rejoignez nos sessions gratuites pour apprendre, échanger et vous engager.',
      viewAll: "Consulter l'agenda complet",
      register: "S'inscrire à l'événement",
      location: 'Lieu :',
    },
    newsSection: {
      kicker: "Le Journal de l'Association",
      title: 'Dernières actualités',
      subtitle: "Retours d'expériences, articles de fond et vie de nos projets.",
      viewAll: 'Lire tous les articles',
      readTime: 'de lecture',
      readMore: 'Lire la suite',
    },
    testimonialsSection: {
      kicker: 'Paroles de participants',
      title: "Ce qu'ils disent de Sans Limite",
    },
    partnersSection: {
      kicker: 'Écosystème & Soutiens institutionnels',
      title: 'Ils nous font confiance',
    },
    instaSection: {
      kicker: 'En direct des réseaux',
      title: 'Suivez nos aventures sur Instagram',
      subtitle: '@sanslimiteong · Moments de vie, projets & coulisses en direct',
      btn: 'Suivez-nous sur Instagram',
    },
    ctaBand: {
      title: 'Envie de vous engager à nos côtés ?',
      subtitle:
        "Que ce soit en donnant quelques heures de votre temps comme bénévole ou en soutenant nos actions par un don défiscalisé, chaque geste compte pour briser les limites.",
      btnVolunteer: 'Devenir bénévole',
      btnDonate: 'Faire un don',
    },
    footer: {
      mission:
        "Sans Limite œuvre pour que les jeunes et les personnes ayant moins d'opportunités accèdent à l'éducation, à la culture et à l'engagement citoyen — sans limite.",
      legalNote: 'Association loi 1901',
      quickLinks: 'Liens rapides',
      contactUs: 'Nous contacter',
      newsletterTitle: "Lettre d'information",
      newsletterDesc:
        "Restez informé·e de nos prochains ateliers, des appels à candidatures Erasmus+ et des événements à Paris.",
      newsletterPlaceholder: 'Votre adresse email...',
      newsletterConsent:
        "J'accepte que Sans Limite conserve mon email pour m'adresser ses actualités. Désinscription possible à tout moment.",
      euCofunded: "Cofinancé par l'Union européenne",
      euDisclaimer:
        "Financé par l'Union européenne. Les points de vue et avis exprimés n'engagent toutefois que leur(s) auteur(s) et ne reflètent pas nécessairement ceux de l'Union européenne ou de l'Agence exécutive européenne pour l'éducation et la culture (EACEA). Ni l'Union européenne ni l'autorité chargée de l'octroi ne peuvent en être tenues pour responsables.",
      copyright: 'Sans Limite — Association loi 1901 · Vitry-sur-Seine / Paris',
      legalNotice: 'Mentions légales',
      privacyPolicy: 'Politique de confidentialité',
      cookieSettings: 'Gestion des cookies',
      accessibility: 'Accessibilité (WCAG AA)',
    },
    cookies: {
      title: 'Respect de votre vie privée et gestion des cookies',
      desc: "L'association Sans Limite utilise des cookies et traceurs nécessaires au bon fonctionnement du site, à la mesure anonyme d'audience et à l'intégration de médias interactifs (vidéos, cartes). Vous pouvez choisir de tout accepter, de tout refuser ou de personnaliser vos consentements à tout moment selon les recommandations de la CNIL.",
      acceptAll: 'Tout accepter',
      refuseAll: 'Tout refuser',
      customize: 'Personnaliser',
      save: 'Enregistrer mes choix',
      necessaryTitle: 'Cookies strictement nécessaires',
      necessaryDesc:
        'Ces cookies garantissent les fonctions indispensables du site (sécurité, session, navigation et mémorisation de vos choix de consentement). Ils ne peuvent pas être désactivés.',
      analyticsTitle: "Mesure d'audience anonyme",
      analyticsDesc:
        "Permet d'évaluer la fréquentation et d'améliorer l'ergonomie du site Sans Limite sans suivi nominatif.",
      thirdPartyTitle: 'Contenus tiers & Réseaux sociaux',
      thirdPartyDesc:
        "Nécessaires pour afficher directement les cartes interactives (OpenStreetMap / Google Maps) et les vidéos pédagogiques YouTube sur le site.",
      alwaysActive: 'Toujours actif',
    },
    associationPage: {
      title: "L'Association Sans Limite",
      subtitle:
        "Découvrez notre genèse citoyenne, nos valeurs humanistes, notre équipe engagée et nos partenaires en France et en Europe.",
      badge: 'Association loi 1901',
      historyKicker: '2a. Genèse & Évolution',
      historyTitle: 'Notre histoire',
      historyDesc:
        "Une ambition née de la conviction profonde que la solidarité locale et la mobilité européenne doivent être accessibles à tous, sans exception.",
      missionKicker: "2b. Raison d'Être",
      missionTitle: 'Mission, vision & valeurs',
      missionBoxTitle: 'Notre Mission',
      visionBoxTitle: 'Notre Vision',
      teamKicker: '2c. Gouvernance & Bénévoles',
      teamTitle: "L'équipe Sans Limite",
      teamDesc:
        "Des professionnels de l'éducation populaire, de la gestion de projets européens et des bénévoles investis au quotidien.",
      bureauTitle: "Le Bureau de l'Association",
      operationalTitle: "L'équipe opérationnelle & coordinateurs",
      partnersKicker: '2d. Réseau & Coopération',
      partnersTitle: 'Nos partenaires',
      partnersDesc:
        'Des partenariats institutionnels solides en France et un réseau de coopération européenne actif.',
      localPartners: 'Partenaires locaux et nationaux',
      europeanPartners: 'Partenaires européens (Erasmus+)',
      mapTitle: 'Cartographie interactive de notre réseau européen',
      mapDesc: 'Cliquez sur un pays partenaire pour voir les organisations associées.',
      viewAllCountries: 'Voir tous les pays',
      reportsKicker: '2e. Transparence & Démocratie',
      reportsTitle: 'Statuts & rapports officiels',
      reportsDesc:
        "Conformément à nos engagements de transparence républicaine et aux exigences du programme Erasmus+, l'ensemble de nos bilans moraux, financiers et statuts sont en libre consultation.",
      preview: 'Aperçu',
      downloadPdf: 'Télécharger (PDF)',
    },
    actionsPage: {
      title: "Nos Domaines d'Action",
      subtitle: "Trois piliers fondamentaux pour accompagner les parcours de vie et briser les inégalités.",
      badge: "Champs d'intervention",
      allDomainsBtn: "← Tous les domaines",
      contextKicker: "1. Contexte & Approche",
      contextTitle: "Pourquoi cette action est essentielle",
      observationTitle: "Le constat de terrain",
      activitiesKicker: "2. Programmes Concrets",
      activitiesTitle: "Ce que nous faisons au quotidien",
      freeAccess: "Accès libre & gratuit",
      audienceKicker: "3. Publics Accompagnés",
      audienceTitle: "Pour qui ?",
      galleryKicker: "4. Galerie de Terrain",
      galleryTitle: "En images : nos ateliers & moments forts",
      relatedKicker: "5. Projets associés & Agenda",
      relatedProjectsTitle: "Projets européens en lien",
      relatedEventsTitle: "Prochains ateliers de ce pôle",
      overviewKicker: "Nos Pôles d'Activités",
      overviewTitle: "Des réponses concrètes et adaptées à chaque besoin",
      overviewSubtitle: "Explorez nos 3 grands domaines d'intervention pour participer ou soutenir nos projets.",
      discoverDomain: "Découvrir ce pôle en détail",
    },
    projectsPage: {
      title: "Projets Européens & Erasmus+",
      subtitle: "La mobilité internationale comme accélérateur d'émancipation, de citoyenneté et de découverte.",
      badge: "Pôle Europe",
      tabs: {
        all: "Tous les projets",
        ongoing: "Projets en cours",
        completed: "Projets réalisés",
        calls: "Appels à candidatures",
        partner: "Devenir partenaire",
      },
      filterAction: "Tous les types d'action",
      filterYear: "Toutes les années",
      viewDetails: "Voir la fiche projet",
      applyCallBtn: "Postuler à cet échange",
      datesLabel: "Dates :",
      locationLabel: "Lieu :",
      modalClose: "Fermer",
      objectivesTitle: "Objectifs du projet",
      targetGroupTitle: "Public cible",
      programmeTitle: "Aperçu du programme",
      resultsTitle: "Résultats & Productions",
      partnersTitle: "Organisations partenaires",
      downloadInfopack: "Télécharger l'infopack (PDF)",
      callsTitle: "Appels à participation ouverts",
      callsSubtitle: "Rejoignez une aventure interculturelle inoubliable entièrement financée par l'Union européenne.",
      deadlineLabel: "Date limite :",
      spotsLabel: "Places disponibles :",
      ageLabel: "Âge requis :",
      conditionsLabel: "Prise en charge :",
      partnerTitle: "Construisons ensemble votre prochain projet Erasmus+",
      partnerSubtitle: "Vous êtes une ONG, une collectivité ou un centre de jeunesse ? Devenons partenaires.",
      orgLabel: "Nom de l'organisation *",
      countryLabel: "Pays *",
      contactLabel: "Personne de contact *",
      emailLabel: "Email *",
      websiteLabel: "Site web ou réseaux",
      picLabel: "Numéro OID / PIC (si disponible)",
      actionTypeLabel: "Type d'action envisagée",
      messageLabel: "Votre proposition de coopération *",
      consentText: "J'accepte que Sans Limite traite ces données dans le cadre de nos échanges de partenariats.",
      sendPartnerBtn: "Envoyer la proposition de partenariat",
    },
    agendaPage: {
      title: "Agenda & Événements",
      subtitle: "Retrouvez tous nos ateliers participatifs, conférences citoyennes et événements à venir.",
      badge: "Calendrier associatif",
      viewList: "Vue liste",
      viewCalendar: "Vue calendrier",
      filterType: "Tous les formats",
      filterMonth: "Tous les mois",
      freeAccess: "Gratuit",
      locationLabel: "Lieu :",
      timeLabel: "Horaire :",
      registerBtn: "S'inscrire gratuitement",
      addToCalendar: "Ajouter au calendrier (.ics)",
      spotsAvailable: "places restantes",
      modalTitle: "Inscription à l'événement",
      modalDesc: "Remplissez ce formulaire pour réserver votre place gratuite.",
      nameLabel: "Nom et prénom *",
      emailLabel: "Adresse email *",
      phoneLabel: "Téléphone (facultatif)",
      attendeesLabel: "Nombre de participants",
      consentText: "J'accepte que mes données soient utilisées pour gérer mon inscription à cet événement.",
      confirmRegister: "Confirmer mon inscription",
      cancelBtn: "Annuler",
    },
    blogPage: {
      title: "Actualités & Retours d'Expérience",
      subtitle: "Plongez dans le quotidien de notre association : récits de voyages Erasmus+, focus thématiques et vie locale.",
      badge: "Journal associatif",
      searchPlaceholder: "Rechercher un article, un mot-clé...",
      allCategories: "Toutes les catégories",
      readTime: "de lecture",
      readArticle: "Lire l'article",
      backToList: "← Retour à tous les articles",
      shareBtn: "Partager l'article",
      similarTitle: "Articles similaires",
    },
    mediaPage: {
      title: "Espace Médias & Presse",
      subtitle: "Explorez nos reportages photos de terrain, nos vidéos immersives et les parutions de presse.",
      badge: "Médiathèque",
      tabGallery: "Galerie photos & vidéos",
      tabPress: "Espace presse",
      photosCount: "photos",
      viewPhotos: "Voir les photos de l'album",
      pressKitTitle: "Kit de Presse Officiel 2026",
      pressKitDesc: "Dossier de présentation complet de Sans Limite, logos HD, fiches projets et contacts officiels pour les journalistes.",
      downloadPressKit: "Télécharger le dossier de presse (PDF)",
      pressArticlesTitle: "Dans les médias",
      consultArticle: "Consulter l'article",
      videoTitle: "Documentaires & Vidéos pédagogiques",
      videoDesc: "Retrouvez nos projets filmés et témoignages de participants.",
      cookieWarning: "Les vidéos interactives YouTube nécessitent votre consentement pour les cookies tiers.",
      enableCookiesBtn: "Gérer mes préférences cookies",
    },
    engagementPage: {
      title: "S'engager avec Sans Limite",
      subtitle: "Adhérer, donner de son temps ou faire un don : découvrez comment faire vivre la solidarité.",
      badge: "Engagement citoyen",
      tabs: {
        join: "Nous rejoindre (Gratuit)",
        volunteer: "Devenir bénévole",
        civicService: "Service Civique & stages",
        donate: "Faire un don",
      },
      joinTitle: "Rejoignez la communauté Sans Limite — 100% Gratuit",
      joinDesc: "Chez Sans Limite, l'argent ne doit jamais être un frein. L'adhésion et la participation sont entièrement gratuites et ouvertes à toutes et tous.",
      joinTiersTitle: "Choisissez comment vous souhaitez participer :",
      freeNoticeBadge: "Accessibilité universelle",
      freeNotice: "Aucune cotisation ni frais d'adhésion : toutes nos opportunités, ateliers et mobilités sont 100% gratuits.",
      options: {
        volunteer: {
          title: "Bénévolat de terrain & Vie associative",
          desc: "Participez à nos actions locales, co-animez des ateliers participatifs ou donnez un coup de main lors de nos événements citoyens.",
          tag: "Bénévolat actif",
        },
        member: {
          title: "Membre adhérent·e & Vie démocratique",
          desc: "Faites entendre votre voix lors de nos Assemblées Générales, proposez des initiatives et participez à la gouvernance de l'association.",
          tag: "Adhésion gratuite",
        },
        youthWorker: {
          title: "Devenir travailleur·se de jeunesse / Mentor",
          desc: "Accompagnez des jeunes vers l'autonomie, animez des projets éducatifs et partagez vos compétences avec notre communauté.",
          tag: "Jeunesse & Mentorat",
        },
        training: {
          title: "Bénéficier des opportunités de formation & Erasmus+",
          desc: "Prenez part à nos formations gratuites, stages méthodologiques et échanges européens de jeunes entièrement financés.",
          tag: "Formations & Mobilités",
        },
      },
      form: {
        title: "Formulaire d'inscription & d'engagement",
        subtitle: "Remplissez ce formulaire gratuit pour nous faire part de vos envies. Notre équipe vous contactera chaleureusement.",
        firstName: "Prénom *",
        lastName: "Nom *",
        email: "Adresse email *",
        phone: "Téléphone",
        city: "Ville de résidence",
        age: "Âge / Tranche d'âge",
        selectedRole: "Votre choix principal d'engagement :",
        motivation: "Parlez-nous de vous et de vos motivations :",
        motivationPlaceholder: "Quelles activités vous inspirent ? Quels savoirs ou projets aimeriez-vous explorer ou partager ?",
        interests: "Thématiques qui vous tiennent à cœur :",
        interestsList: {
          youth: "Jeunesse & Éducation populaire",
          culture: "Culture & Échanges interculturels",
          ecology: "Environnement & Transition écologique",
          inclusion: "Inclusion sociale & Numérique",
          erasmus: "Mobilité européenne & Erasmus+",
        },
        consent: "J'accepte que Sans Limite enregistre ces informations pour me contacter et m'intégrer aux activités de l'association (conformément au RGPD).",
        submitBtn: "Valider mon inscription gratuite",
        successTitle: "Bienvenue parmi nous !",
        successMsg: "Votre inscription a bien été enregistrée. Notre équipe vous contactera très rapidement pour faire connaissance et vous accueillir !",
      },
      volunteerTitle: "Devenez bénévole à nos côtés",
      volunteerDesc: "Partagez vos passions, développez de nouvelles compétences et donnez du sens à votre temps libre.",
      volunteerAreasTitle: "Domaines qui vous intéressent",
      volunteerAvailTitle: "Vos disponibilités",
      sendVolBtn: "Envoyer ma candidature bénévole",
      civicTitle: "Missions de Service Civique & Stages",
      civicDesc: "Vous avez entre 16 et 25 ans (jusqu'à 30 ans en situation de handicap) ? Engagez-vous pour une mission de 6 à 8 mois indemnisée par l'État.",
      donateTitle: "Soutenez nos actions par un don défiscalisé",
      donateDesc: "Vos dons permettent d'acheter du matériel pour les ateliers, de financer le départ de jeunes aux projets européens et de préserver la gratuité de nos services.",
      oneOff: "Don ponctuel",
      monthly: "Don mensuel",
      taxReductionNote: "Réduction fiscale de 66 % : un don de 50 € ne vous coûte en réalité que 17 € après déduction sur votre impôt sur le revenu (dans la limite de 20 % du revenu imposable).",
      taxCostNote: "Coût réel pour vous :",
      customAmountLabel: "Autre montant (€)",
      donateBtn: "Procéder au paiement sécurisé",
      secureLabel: "Paiement sécurisé et reçu fiscal automatique Cerfa",
    },
    contactPage: {
      title: 'Contactez Sans Limite',
      subtitle:
        'Une question sur nos activités, envie de monter un projet ou de nous rencontrer à Vitry ? Écrivez-nous !',
      formKicker: 'Formulaire direct',
      formTitle: 'Envoyez-nous un message',
      formDesc: 'Nous nous engageons à vous apporter une réponse sous 48 heures ouvrées.',
      nameLabel: 'Nom et Prénom *',
      emailLabel: 'Email *',
      phoneLabel: 'Téléphone (facultatif)',
      subjectLabel: 'Objet *',
      messageLabel: 'Votre message *',
      consentText:
        "En soumettant ce formulaire, j'accepte que les informations saisies soient utilisées par Sans Limite pour me recontacter.",
      sendBtn: 'Envoyer le message',
      detailsTitle: 'Coordonnées officielles',
      hqLabel: 'Siège associatif',
      emailContactLabel: 'Courrier électronique',
      phoneContactLabel: 'Téléphone',
      hoursLabel: 'Horaires de permanence',
      faqKicker: 'Réponses Claires',
      faqTitle: 'Foire Aux Questions (FAQ)',
      faqDesc: 'Retrouvez les réponses aux questions les plus fréquemment posées sur nos activités.',
    },
    legalPage: {
      legalNoticeTitle: "Mentions Légales",
      legalNoticeSubtitle: "Informations juridiques, identification de l'éditeur et conditions générales d'utilisation du site.",
      privacyTitle: "Politique de Confidentialité",
      privacySubtitle: "Protection des données personnelles et conformité RGPD de l'association Sans Limite.",
      cookiesTitle: "Gestion des Cookies",
      cookiesSubtitle: "Détails sur l'utilisation des traceurs, durées de conservation et configuration de vos choix.",
      accessibilityTitle: "Déclaration d'Accessibilité",
      accessibilitySubtitle: "Nos engagements pour rendre ce site accessible à tous selon le référentiel RGAA et les normes WCAG AA.",
    },
    notFoundPage: {
      badge: "Erreur 404",
      title: "Oups, cette page n'existe pas…",
      desc: "… mais nos possibilités sont sans limite ! L'adresse demandée est peut-être erronée ou a été déplacée.",
      searchPlaceholder: "Rechercher une action, un projet, un atelier...",
      searchBtn: "Chercher",
      backHome: "Retour à l'accueil",
    },
    common: {
      freeAccess: 'Accès libre & gratuit',
      close: 'Fermer',
      backHome: "Retour à l'accueil",
      allRightsReserved: 'Tous droits réservés',
      requiredFields: 'Veuillez renseigner tous les champs obligatoires.',
      consentRequired: 'Veuillez accepter le traitement de vos données.',
      actionType: "Type d'action",
      all: 'Tous',
    },
  },
  en: {
    nav: {
      home: 'Home',
      association: 'About Us',
      actions: 'Our Initiatives',
      projects: 'European Projects',
      agenda: 'Events & Agenda',
      news: 'News & Stories',
      media: 'Media Room',
      engage: 'Get Involved',
      contact: 'Contact Us',
      donate: 'Donate',
      subAssociation: {
        overview: 'Overview',
        history: 'Our Story',
        mission: 'Mission & Values',
        team: 'Our Team',
        partners: 'Partners',
        reports: 'Statutes & Annual Reports',
      },
      subActions: {
        overview: 'All Fields of Action',
        youth: 'Youth & Non-Formal Education',
        culture: 'Culture & Intercultural Dialogue',
        environment: 'Environment & Sustainability',
        inclusion: 'Social & Digital Inclusion',
      },
      subProjects: {
        overview: 'Erasmus+ & Europe Hub',
        erasmus: 'Erasmus+ & Sans Limite',
        ongoing: 'Current Projects',
        completed: 'Completed Projects',
        calls: 'Open Calls for Participants',
        partner: 'Become a Partner',
      },
      subMedia: {
        gallery: 'Photos & Videos',
        press: 'Press Room',
      },
      subEngage: {
        overview: 'All Opportunities',
        join: 'Become a Member',
        volunteer: 'Become a Volunteer',
        civicService: 'Civic Service & Internships',
        donate: 'Make a Donation',
      },
    },
    hero: {
      badge: 'French Non-Profit Association (Loi 1901) · Paris & Vitry-sur-Seine',
      title: 'Together, without limits.',
      subtitle:
        'Sans Limite works to ensure that youth and individuals with fewer opportunities have access to education, culture, and active citizenship — without limits.',
      btnJoin: 'Join Us',
      btnActions: 'Explore Our Initiatives',
    },
    aboutBrief: {
      kicker: 'Who We Are',
      title: 'A bridge toward personal empowerment, Europe, and community solidarity',
      p1: 'Founded in 2025 in Vitry-sur-Seine in the Greater Paris area, the non-profit association Sans Limite empowers every individual, especially youth with fewer opportunities, to build essential life skills, expand their cultural horizons, and take an active role in civic life.',
      p2: 'We combine local grassroots initiatives in our neighbourhoods with international mobility supported by the European Erasmus+ programme, grounded in the conviction that diverse shared experiences break down all barriers.',
      link: 'Discover our journey, vision, and core values',
      caption: 'Empowering workshops and intercultural exchanges in Vitry-sur-Seine (Paris)',
    },
    domainsSection: {
      kicker: 'Fields of Action',
      title: 'Our 4 Core Fields of Action',
      subtitle: 'Hands-on initiatives tailored to local communities and young people.',
      discover: 'Explore this field',
    },
    impactSection: {
      participants: 'Supported participants',
      participantsNote: 'Youth and local residents',
      projects: 'Projects & workshops completed',
      projectsNote: 'In France and across Europe',
      countries: 'European partner countries',
      countriesNote: 'Erasmus+ network',
      volunteers: 'Dedicated volunteers',
      volunteersNote: 'On a daily basis',
    },
    projectsSection: {
      kicker: 'International Horizons',
      title: 'Current Erasmus+ Projects',
      subtitle:
        'European Union-funded mobilities and cross-border cooperations to train, travel, and dismantle cultural prejudice.',
      viewAll: 'View all projects',
      viewDetail: 'View project details',
    },
    agendaSection: {
      kicker: 'Community Calendar',
      title: 'Upcoming Events & Workshops',
      subtitle: 'Join our free sessions to learn, connect, and take action.',
      viewAll: 'Browse full calendar',
      register: 'Register for event',
      location: 'Venue:',
    },
    newsSection: {
      kicker: 'Association Journal',
      title: 'Latest News & Stories',
      subtitle: 'Field reports, in-depth articles, and stories from our projects.',
      viewAll: 'Read all articles',
      readTime: 'read',
      readMore: 'Read full story',
    },
    testimonialsSection: {
      kicker: 'Voices of Participants',
      title: 'What They Say About Sans Limite',
    },
    partnersSection: {
      kicker: 'Ecosystem & Institutional Backing',
      title: 'They Trust Us',
    },
    instaSection: {
      kicker: 'Live from Social Media',
      title: 'Follow our journey on Instagram',
      subtitle: '@sanslimiteong · Behind the scenes, daily stories & projects',
      btn: 'Follow us on Instagram',
    },
    ctaBand: {
      title: 'Ready to take action alongside us?',
      subtitle:
        'Whether giving a few hours of your time as a volunteer or supporting our mission through a tax-deductible donation, every gesture helps break boundaries.',
      btnVolunteer: 'Become a volunteer',
      btnDonate: 'Make a donation',
    },
    footer: {
      mission:
        'Sans Limite works to ensure that youth and individuals with fewer opportunities have access to education, culture, and active citizenship — without limits.',
      legalNote: 'Registered Non-Profit Association (Loi 1901)',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      newsletterTitle: 'Newsletter',
      newsletterDesc:
        'Stay updated on our upcoming workshops, Erasmus+ open calls, and community events in Paris.',
      newsletterPlaceholder: 'Your email address...',
      newsletterConsent:
        'I agree to let Sans Limite store my email address to send monthly updates. You can unsubscribe at any time.',
      euCofunded: 'Co-funded by the European Union',
      euDisclaimer:
        'Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor the granting authority can be held responsible for them.',
      copyright: 'Sans Limite — Non-Profit Association (Loi 1901) · Vitry-sur-Seine / Paris',
      legalNotice: 'Legal Notice',
      privacyPolicy: 'Privacy Policy',
      cookieSettings: 'Cookie Settings',
      accessibility: 'Accessibility (WCAG AA)',
    },
    cookies: {
      title: 'Respecting your privacy and cookie management',
      desc: 'The Sans Limite association uses cookies necessary for the proper functioning of the site, anonymous audience measurement, and interactive embedded media (videos, maps). You can accept all, refuse all, or customize your preferences in compliance with GDPR guidelines.',
      acceptAll: 'Accept all',
      refuseAll: 'Refuse all',
      customize: 'Customize',
      save: 'Save preferences',
      necessaryTitle: 'Strictly necessary cookies',
      necessaryDesc:
        'These cookies ensure fundamental website operations (security, session management, and consent storage). They cannot be turned off.',
      analyticsTitle: 'Anonymous audience measurement',
      analyticsDesc:
        'Helps us understand website traffic and improve usability without tracking personal identities.',
      thirdPartyTitle: 'Third-party media & embedded content',
      thirdPartyDesc:
        'Required to display interactive maps and YouTube video documentaries directly within our website.',
      alwaysActive: 'Always active',
    },
    associationPage: {
      title: 'Sans Limite Association',
      subtitle:
        'Discover our civic origins, humanist values, passionate team, and partner network in France and across Europe.',
      badge: 'French Non-Profit (Loi 1901)',
      historyKicker: '2a. Origins & Milestones',
      historyTitle: 'Our Story',
      historyDesc:
        'An ambition born from the deep conviction that grassroots solidarity and European mobility must be accessible to everyone, without exception.',
      missionKicker: '2b. Purpose & Values',
      missionTitle: 'Mission, Vision & Values',
      missionBoxTitle: 'Our Mission',
      visionBoxTitle: 'Our Vision',
      teamKicker: '2c. Governance & Volunteers',
      teamTitle: 'The Sans Limite Team',
      teamDesc:
        'Community educators, European project coordinators, and dedicated local volunteers.',
      bureauTitle: 'Board of Directors',
      operationalTitle: 'Operational Team & Coordinators',
      partnersKicker: '2d. Network & Cooperation',
      partnersTitle: 'Our Partners',
      partnersDesc:
        'Strong institutional backing in France paired with an active European Erasmus+ cooperation network.',
      localPartners: 'Local & National Partners',
      europeanPartners: 'European Partners (Erasmus+)',
      mapTitle: 'Interactive Map of our European Network',
      mapDesc: 'Click on any partner country to see associated partner organisations.',
      viewAllCountries: 'View all countries',
      reportsKicker: '2e. Transparency & Governance',
      reportsTitle: 'Official Statutes & Reports',
      reportsDesc:
        'In line with our commitment to democratic transparency and Erasmus+ guidelines, all our activity reports, financial audits, and official statutes are openly accessible.',
      preview: 'Preview',
      downloadPdf: 'Download (PDF)',
    },
    actionsPage: {
      title: 'Our Fields of Action',
      subtitle: 'Three fundamental pillars to support youth, foster ecological transition, and celebrate intercultural culture.',
      badge: 'Core Initiatives',
      allDomainsBtn: '← All Fields of Action',
      contextKicker: '1. Context & Approach',
      contextTitle: 'Why this initiative matters',
      observationTitle: 'Field observations',
      activitiesKicker: '2. Concrete Programmes',
      activitiesTitle: 'What we do on a daily basis',
      freeAccess: 'Free & Open Access',
      audienceKicker: '3. Beneficiaries',
      audienceTitle: 'Who is this for?',
      galleryKicker: '4. Field Gallery',
      galleryTitle: 'In pictures: our workshops & key moments',
      relatedKicker: '5. Associated Projects & Calendar',
      relatedProjectsTitle: 'Related European Projects',
      relatedEventsTitle: 'Upcoming workshops in this field',
      overviewKicker: 'Our Activity Pillars',
      overviewTitle: 'Concrete solutions tailored to every community need',
      overviewSubtitle: 'Explore our 3 core action fields to participate or support our programmes.',
      discoverDomain: 'Discover this field in detail',
    },
    projectsPage: {
      title: 'European Projects & Erasmus+',
      subtitle: 'International mobility as a catalyst for youth empowerment, active citizenship, and self-confidence.',
      badge: 'Europe Hub',
      tabs: {
        all: 'All Projects',
        ongoing: 'Current Projects',
        completed: 'Past Projects',
        calls: 'Open Calls',
        partner: 'Become a Partner',
      },
      filterAction: 'All Action Types',
      filterYear: 'All Years',
      viewDetails: 'View Project Details',
      applyCallBtn: 'Apply for this Exchange',
      datesLabel: 'Dates:',
      locationLabel: 'Location:',
      modalClose: 'Close',
      objectivesTitle: 'Project Objectives',
      targetGroupTitle: 'Target Group',
      programmeTitle: 'Programme Overview',
      resultsTitle: 'Results & Deliverables',
      partnersTitle: 'Partner Organisations',
      downloadInfopack: 'Download Infopack (PDF)',
      callsTitle: 'Open Calls for Participants',
      callsSubtitle: 'Join an unforgettable intercultural mobility fully funded by the European Union.',
      deadlineLabel: 'Application Deadline:',
      spotsLabel: 'Available spots:',
      ageLabel: 'Age requirement:',
      conditionsLabel: 'Funding & Coverage:',
      partnerTitle: "Let's build your next Erasmus+ project together",
      partnerSubtitle: 'Are you an NGO, municipality, or youth centre? Let us become long-term partners.',
      orgLabel: 'Organisation Name *',
      countryLabel: 'Country *',
      contactLabel: 'Contact Person *',
      emailLabel: 'Email Address *',
      websiteLabel: 'Website or Social Media',
      picLabel: 'OID / PIC Number (if available)',
      actionTypeLabel: 'Envisioned Action Type',
      messageLabel: 'Your cooperation proposal *',
      consentText: 'I agree that Sans Limite may process this information to discuss partnership opportunities.',
      sendPartnerBtn: 'Send Partnership Proposal',
    },
    agendaPage: {
      title: 'Events & Community Agenda',
      subtitle: 'Explore all our upcoming interactive workshops, debates, and community meetings in Paris.',
      badge: 'Community Calendar',
      viewList: 'List View',
      viewCalendar: 'Calendar View',
      filterType: 'All Formats',
      filterMonth: 'All Months',
      freeAccess: 'Free',
      locationLabel: 'Venue:',
      timeLabel: 'Time:',
      registerBtn: 'Register for Free',
      addToCalendar: 'Add to Calendar (.ics)',
      spotsAvailable: 'spots left',
      modalTitle: 'Event Registration',
      modalDesc: 'Complete this form to reserve your free spot.',
      nameLabel: 'Full Name *',
      emailLabel: 'Email Address *',
      phoneLabel: 'Phone (optional)',
      attendeesLabel: 'Number of participants',
      consentText: 'I agree that my details will be used to manage my registration for this event.',
      confirmRegister: 'Confirm Registration',
      cancelBtn: 'Cancel',
    },
    blogPage: {
      title: 'News & Field Stories',
      subtitle: 'Discover what is happening at Sans Limite: Erasmus+ exchange travel diaries, thematic insights, and local updates.',
      badge: 'Association Journal',
      searchPlaceholder: 'Search an article or topic...',
      allCategories: 'All Categories',
      readTime: 'read',
      readArticle: 'Read Story',
      backToList: '← Back to all stories',
      shareBtn: 'Share Article',
      similarTitle: 'Related Stories',
    },
    mediaPage: {
      title: 'Media & Press Room',
      subtitle: 'Browse our high-resolution photo galleries, short documentaries, and press coverage.',
      badge: 'Media Library',
      tabGallery: 'Photos & Videos Gallery',
      tabPress: 'Press Room',
      photosCount: 'photos',
      viewPhotos: 'View Album Photos',
      pressKitTitle: 'Official Press Kit 2026',
      pressKitDesc: 'Comprehensive presentation of Sans Limite, HD logos, project datasheets, and media contact info.',
      downloadPressKit: 'Download Press Kit (PDF)',
      pressArticlesTitle: 'In the Press',
      consultArticle: 'Read Press Clipping',
      videoTitle: 'Documentaries & Educational Videos',
      videoDesc: 'Watch short films and participant video testimonials from our mobilities.',
      cookieWarning: 'YouTube video embeds require your consent for third-party interactive media cookies.',
      enableCookiesBtn: 'Manage Cookie Preferences',
    },
    engagementPage: {
      title: 'Get Involved with Sans Limite',
      subtitle: 'Become a member, volunteer your time, or make a donation: join our solidarity movement.',
      badge: 'Civic Engagement',
      tabs: {
        join: 'Join Us (Free)',
        volunteer: 'Volunteer',
        civicService: 'Civic Service & Internships',
        donate: 'Donate',
      },
      joinTitle: 'Join the Sans Limite Community — 100% Free',
      joinDesc: 'At Sans Limite, finances must never be a barrier. Membership and participation in all our activities and Erasmus+ projects are completely free.',
      joinTiersTitle: 'Select how you want to take part:',
      freeNoticeBadge: 'Universal Accessibility',
      freeNotice: 'No membership fees or dues: all our educational opportunities, workshops, and European mobilities are 100% free of charge.',
      options: {
        volunteer: {
          title: 'Grassroots Volunteering & Community Life',
          desc: 'Participate in local initiatives, co-facilitate workshops, or lend a hand during community events and cultural gatherings.',
          tag: 'Active Volunteering',
        },
        member: {
          title: 'Full Voting Member & Democratic Governance',
          desc: 'Have your say during General Assemblies, propose new community projects, and help guide the association’s vision.',
          tag: 'Free Membership',
        },
        youthWorker: {
          title: 'Become a Youth Worker / Mentor',
          desc: 'Guide young people on their path to autonomy, run non-formal educational activities, and share your expertise.',
          tag: 'Youth Work & Mentoring',
        },
        training: {
          title: 'Access Training Opportunities & Erasmus+ Mobilities',
          desc: 'Participate in free capacity-building training, methodological seminars, and fully funded European youth exchanges.',
          tag: 'Training & Mobilities',
        },
      },
      form: {
        title: 'Registration & Engagement Form',
        subtitle: 'Fill in this free registration form. Our team will get back to you with a warm welcome!',
        firstName: 'First Name *',
        lastName: 'Last Name *',
        email: 'Email Address *',
        phone: 'Phone Number',
        city: 'City of Residence',
        age: 'Age / Age Group',
        selectedRole: 'Your primary engagement interest:',
        motivation: 'Tell us a bit about yourself and your aspirations:',
        motivationPlaceholder: 'Which activities inspire you? What skills, ideas, or projects would you like to explore or share with us?',
        interests: 'Topics and causes you care about:',
        interestsList: {
          youth: 'Youth & Non-Formal Education',
          culture: 'Culture & Intercultural Dialogue',
          ecology: 'Environment & Ecological Transition',
          inclusion: 'Social & Digital Inclusion',
          erasmus: 'European Mobility & Erasmus+',
        },
        consent: 'I agree that Sans Limite may process this information to contact me and invite me to associative activities (GDPR compliant).',
        submitBtn: 'Submit Free Registration',
        successTitle: 'Welcome to Sans Limite!',
        successMsg: 'Your registration has been successfully received. Our team will reach out shortly to get to know you and welcome you!',
      },
      volunteerTitle: 'Volunteer with Us',
      volunteerDesc: 'Share your skills, learn project coordination, and give meaningful purpose to your spare time.',
      volunteerAreasTitle: 'Fields that interest you',
      volunteerAvailTitle: 'Your availability',
      sendVolBtn: 'Submit Volunteer Application',
      civicTitle: 'Civic Service & Internships',
      civicDesc: 'Are you aged 16 to 25 (up to 30 for youth with disabilities)? Undertake an 8-month state-funded mission in Paris with us.',
      donateTitle: 'Support our mission through a tax-deductible donation',
      donateDesc: 'Your donations help purchase workshop supplies, fund youth mobilities, and ensure all services remain 100% free.',
      oneOff: 'One-off donation',
      monthly: 'Monthly donation',
      taxReductionNote: '66% Tax Deduction in France: a €50 donation costs you only €17 after income tax reduction (up to 20% of taxable income).',
      taxCostNote: 'Actual cost to you:',
      customAmountLabel: 'Custom amount (€)',
      donateBtn: 'Proceed to Secure Payment',
      secureLabel: 'Secure payment & automatic official French Cerfa tax receipt',
    },
    contactPage: {
      title: 'Contact Sans Limite',
      subtitle:
        'Have a question about our activities, want to launch a project, or meet us in Vitry? Send us a message!',
      formKicker: 'Direct Message Form',
      formTitle: 'Send Us a Message',
      formDesc: 'We commit to responding within 48 business hours.',
      nameLabel: 'Full Name *',
      emailLabel: 'Email Address *',
      phoneLabel: 'Phone (optional)',
      subjectLabel: 'Subject *',
      messageLabel: 'Your message *',
      consentText:
        'By submitting this form, I agree that the information entered will be used by Sans Limite to respond to my enquiry.',
      sendBtn: 'Send Message',
      detailsTitle: 'Official Contact Info',
      hqLabel: 'Headquarters',
      emailContactLabel: 'Email address',
      phoneContactLabel: 'Phone number',
      hoursLabel: 'Opening hours',
      faqKicker: 'Clear Answers',
      faqTitle: 'Frequently Asked Questions (FAQ)',
      faqDesc: 'Find answers to the most common questions about our programmes and activities.',
    },
    legalPage: {
      legalNoticeTitle: 'Legal Notice',
      legalNoticeSubtitle: 'Legal entity information, publisher details, and terms of service of the Sans Limite website.',
      privacyTitle: 'Privacy Policy',
      privacySubtitle: 'Personal data protection and GDPR compliance standards implemented by Sans Limite.',
      cookiesTitle: 'Cookie Settings & Management',
      cookiesSubtitle: 'Information regarding tracker categories, storage duration, and configuring your consent preferences.',
      accessibilityTitle: 'Accessibility Statement',
      accessibilitySubtitle: 'Our commitment to ensuring this website complies with RGAA and WCAG AA accessibility standards.',
    },
    notFoundPage: {
      badge: 'Error 404',
      title: 'Oops, this page does not exist…',
      desc: '… but our possibilities are limitless! The requested page may have moved or been typed incorrectly.',
      searchPlaceholder: 'Search an initiative, project, workshop...',
      searchBtn: 'Search',
      backHome: 'Back to Home',
    },
    common: {
      freeAccess: 'Free & Open Access',
      close: 'Close',
      backHome: 'Back to Home',
      allRightsReserved: 'All rights reserved',
      requiredFields: 'Please fill in all required fields.',
      consentRequired: 'Please accept the data processing terms.',
      actionType: 'Action Type',
      all: 'All',
    },
  },
};
