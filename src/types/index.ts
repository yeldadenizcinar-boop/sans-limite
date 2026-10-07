export type Language = 'fr' | 'en';

export type PageId =
  | 'accueil'
  | 'association'
  | 'actions'
  | 'projets-europeens'
  | 'agenda'
  | 'actualites'
  | 'medias'
  | 's-engager'
  | 'contact'
  | 'mentions-legales'
  | 'politique-confidentialite'
  | 'gestion-cookies'
  | 'accessibilite'
  | '404';

export type SubPageId =
  // Association
  | 'histoire'
  | 'mission-valeurs'
  | 'equipe'
  | 'partenaires'
  | 'statuts-rapports'
  // Actions
  | 'action-jeunesse'
  | 'action-culture'
  | 'action-environnement'
  | 'action-inclusion'
  // Projets Européens
  | 'erasmus-nous'
  | 'projets-en-cours'
  | 'projets-realises'
  | 'appels-participation'
  | 'devenir-partenaire'
  // Médias
  | 'galerie'
  | 'espace-presse'
  // S'engager
  | 'adherer'
  | 'devenir-benevole'
  | 'service-civique'
  | 'faire-un-don';

export interface ActionDomain {
  id: string;
  slug: SubPageId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  accentColor: string;
  whyItMatters: string;
  activities: {
    title: string;
    description: string;
    frequency: string;
  }[];
  targetAudience: string[];
  galleryImages: {
    url: string;
    caption: string;
  }[];
}

export interface EuropeanProject {
  id: string;
  acronym: string;
  title: string;
  actionType: 'KA152' | 'KA210' | 'KA153' | 'Autre';
  actionTypeLabel: string;
  projectNumber: string;
  dates: string;
  year: number;
  location: string;
  country: string;
  status: 'en-cours' | 'realise';
  theme: string;
  summary: string;
  image: string;
  objectives: string[];
  targetGroup: string;
  participantCount: number;
  programmeOverview: string[];
  partners: {
    name: string;
    country: string;
    flag: string;
    role: 'Coordinateur' | 'Partenaire';
    website?: string;
  }[];
  results: {
    title: string;
    type: string;
    description: string;
  }[];
  testimonials: {
    name: string;
    age: number;
    city: string;
    quote: string;
    avatar?: string;
  }[];
}

export interface OpenCall {
  id: string;
  title: string;
  projectAcronym: string;
  dates: string;
  location: string;
  country: string;
  eligibleAges: string;
  placesAvailable: number;
  deadline: string;
  financialConditions: string;
  description: string;
  profile: string[];
}

export interface AgendaEvent {
  id: string;
  title: string;
  type: 'atelier' | 'echange' | 'conference' | 'culturel';
  typeLabel: string;
  date: string;
  month: string; // e.g., '2026-10'
  dayNumber: string;
  monthLabel: string;
  time: string;
  place: string;
  address: string;
  price: string;
  accessibility: string;
  shortDesc: string;
  fullDesc: string;
  programme: string[];
  image?: string;
  availablePlaces: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  authorRole: string;
  category: 'Actualités' | 'Projets' | 'Témoignages' | 'Ateliers';
  image: string;
  readTime: string;
  gallery?: string[];
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'bureau' | 'operationnel';
  bio: string;
  image: string;
  linkedin?: string;
}

export interface MediaAlbum {
  id: string;
  title: string;
  category: string;
  date: string;
  coverImage: string;
  photos: {
    url: string;
    caption: string;
  }[];
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  thirdParty: boolean;
  answered: boolean;
}
