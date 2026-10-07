import {
  ActionDomain,
  EuropeanProject,
  OpenCall,
  AgendaEvent,
  BlogPost,
  TeamMember,
  MediaAlbum,
  Language,
} from '../types';

import heroImg from '../assets/images/hero_youth_paris_1791054500853.jpg';
import erasmusImg from '../assets/images/erasmus_exchange_1791054512780.jpg';
import ecoImg from '../assets/images/eco_citizenship_1791054524027.jpg';
import inclusionImg from '../assets/images/inclusion_numerique_1791054534063.jpg';
import y1Img from '../assets/images/Y1.jpg';
import y2Img from '../assets/images/Y2.jpg';
import y3Img from '../assets/images/Y3.jpg';
import y4Img from '../assets/images/Y4.jpg';
import y5Img from '../assets/images/Y5.jpg';
import y6Img from '../assets/images/Y6.jpg';
import y7Img from '../assets/images/Y7.jpg';

import c1Img from '../assets/images/C1.jpg';
import c2Img from '../assets/images/C2.jpg';
import c3Img from '../assets/images/C3.jpg';
import c4Img from '../assets/images/C4.jpg';
import c5Img from '../assets/images/C5.jpg';
import c6Img from '../assets/images/C6.jpg';
import c7Img from '../assets/images/C7.jpg';
import c8Img from '../assets/images/C8.jpg';
import c9Img from '../assets/images/C9.jpg';
import c10Img from '../assets/images/C10.jpg';

import i1Img from '../assets/images/I1.jpg';
import i2Img from '../assets/images/I2.jpg';
import i3Img from '../assets/images/I3.jpg';
import i4Img from '../assets/images/I4.jpg';
import i5Img from '../assets/images/I5.jpg';
import i6Img from '../assets/images/I6.jpg';
import i7Img from '../assets/images/I7.jpeg';
import i8Img from '../assets/images/I8.JPG';
import i9Img from '../assets/images/I9.JPG';
import i10Img from '../assets/images/I10.JPG';
import da1Img from '../assets/images/DA1.jpg';
import da2Img from '../assets/images/DA2.jpeg';
import da3Img from '../assets/images/DA3.jpeg';
import da4Img from '../assets/images/DA4.jpeg';
import sLogoImg from '../assets/images/Slogo.png';

export const ASSET_IMAGES = {
  logo: sLogoImg,
  hero: heroImg,
  erasmus: erasmusImg,
  eco: ecoImg,
  inclusion: inclusionImg,
  da1: da1Img,
  da2: da2Img,
  da3: da3Img,
  da4: da4Img,
  y1: y1Img,
  y2: y2Img,
  y3: y3Img,
  y4: y4Img,
  y5: y5Img,
  y6: y6Img,
  y7: y7Img,
  c1: c1Img,
  c2: c2Img,
  c3: c3Img,
  c4: c4Img,
  c5: c5Img,
  c6: c6Img,
  c7: c7Img,
  c8: c8Img,
  c9: c9Img,
  c10: c10Img,
  i1: i1Img,
  i2: i2Img,
  i3: i3Img,
  i4: i4Img,
  i5: i5Img,
  i6: i6Img,
  i7: i7Img,
  i8: i8Img,
  i9: i9Img,
  i10: i10Img,
};

export const ASSOCIATION_INFO_BASE = {
  name: 'Sans Limite',
  foundedYear: 2025,
  city: 'Paris',
  fullAddress: 'Vitry-sur-Seine, 94490, France',
  postalCode: '94490',
  siret: '431 498 856',
  email: 'assia.oh@yahoo.com',
  phone: '+33 (0)1 46 80 25 10',
  instagram: 'https://www.instagram.com/sanslimiteong/',
  instagramHandle: '@sanslimiteong',
  logoUrl: '/assets/images/Slogo.png',
};

// Base French Content
export const ASSOCIATION_INFO = {
  ...ASSOCIATION_INFO_BASE,
  legalForm: 'Association loi 1901',
  openingHours: 'Lundi au Vendredi : 09h30 - 18h00 · Samedi lors des ateliers',
  mission:
    "Sans Limite œuvre pour que les jeunes et les personnes ayant moins d'opportunités accèdent à l'éducation, à la culture et à l'engagement citoyen — sans limite.",
  vision:
    "Nous envisageons une société inclusive et solidaire où l'origine sociale, géographique ou culturelle ne constitue plus jamais un frein à l'épanouissement personnel, à la mobilité internationale et à la réalisation des rêves de chacun.",
  values: [
    {
      title: 'Inclusion & Équité',
      desc: "Chaque personne, quels que soient son parcours ou sa situation, a sa place et peut s'exprimer pleinement au sein de nos actions.",
      icon: 'HeartHandshake',
    },
    {
      title: 'Solidarité Active',
      desc: "L'entraide intergénérationnelle et la coopération locale sont le socle de toutes nos initiatives citoyennes.",
      icon: 'Users',
    },
    {
      title: 'Ouverture Européenne',
      desc: "Faire tomber les frontières physiques et mentales grâce au programme Erasmus+ et aux dialogues interculturels.",
      icon: 'Globe',
    },
    {
      title: 'Durabilité & Écologie',
      desc: 'Sensibiliser aux enjeux climatiques et promouvoir des pratiques éco-responsables concrètes et partagées.',
      icon: 'Leaf',
    },
    {
      title: 'Pouvoir d’Agir',
      desc: 'Donner aux jeunes les outils, la confiance et la voix nécessaires pour devenir acteurs de leur propre futur.',
      icon: 'Sparkles',
    },
    {
      title: 'Créativité & Expression',
      desc: "Valoriser l'éducation non formelle, l'art et les médias comme catalyseurs d'émancipation collective.",
      icon: 'Palette',
    },
  ],
  milestones: [
    {
      year: 'Janvier 2025',
      title: 'Fondation de Sans Limite',
      desc: "Création officielle de l'association à Vitry-sur-Seine (Paris) par un collectif passionné d'acteurs de jeunesse et d'animateurs socioculturels.",
    },
    {
      year: 'Printemps 2025',
      title: 'Premiers ateliers de quartier & numérique',
      desc: 'Lancement des ateliers de remédiation numérique et de soutien à la créativité pour 60 jeunes et seniors du bassin parisien.',
    },
    {
      year: 'Automne 2025',
      title: 'Accréditation et premier projet Erasmus+ KA152',
      desc: "Obtention du financement européen pour l'échange de jeunes interculturel 'Horizons Sans Frontières' réunissant 5 pays partenaires.",
    },
    {
      year: '2026',
      title: 'Élargissement des partenariats européens & Hub Jeunesse',
      desc: 'Déploiement de 4 nouveaux projets européens, accueil de volontaires en Service Civique et inauguration du pôle éco-citoyenneté.',
    },
  ],
};

// English Association Info
export const ASSOCIATION_INFO_EN = {
  ...ASSOCIATION_INFO_BASE,
  legalForm: 'Non-profit Association (Loi 1901)',
  openingHours: 'Monday to Friday: 09:30 AM - 06:00 PM · Saturdays during workshops',
  mission:
    'Sans Limite strives so that young people and individuals with fewer opportunities can access education, culture, and civic engagement — without limits.',
  vision:
    'We envision an inclusive, supportive society where social, geographical, or cultural backgrounds never stand in the way of personal growth, European mobility, and achieving one’s dreams.',
  values: [
    {
      title: 'Inclusion & Equity',
      desc: 'Every person, regardless of their background or current situation, has a rightful place and voice in all our initiatives.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Active Solidarity',
      desc: 'Intergenerational mutual aid and local community cooperation form the backbone of all our civic actions.',
      icon: 'Users',
    },
    {
      title: 'European Openness',
      desc: 'Breaking down physical and mental borders through the Erasmus+ programme and intercultural dialogue.',
      icon: 'Globe',
    },
    {
      title: 'Sustainability & Ecology',
      desc: 'Raising climate awareness and promoting practical, community-driven eco-responsible habits.',
      icon: 'Leaf',
    },
    {
      title: 'Youth Empowerment',
      desc: 'Equipping youth with the tools, confidence, and voice they need to become changemakers in their own future.',
      icon: 'Sparkles',
    },
    {
      title: 'Creativity & Self-Expression',
      desc: 'Harnessing non-formal learning, arts, and digital media as powerful catalysts for personal emancipation.',
      icon: 'Palette',
    },
  ],
  milestones: [
    {
      year: 'January 2025',
      title: 'Founding of Sans Limite',
      desc: 'Official establishment of the association in Vitry-sur-Seine (Paris) by passionate youth workers and community leaders.',
    },
    {
      year: 'Spring 2025',
      title: 'First Community & Digital Workshops',
      desc: 'Launch of weekly digital inclusion and creative skill-building sessions for 60 youth and seniors in the Paris area.',
    },
    {
      year: 'Autumn 2025',
      title: 'Accreditation & First Erasmus+ KA152 Project',
      desc: "Securing European grant funding for the intercultural youth exchange 'Horizons Without Borders' uniting 5 partner countries.",
    },
    {
      year: '2026',
      title: 'European Partnerships Expansion & Youth Hub',
      desc: 'Implementation of 4 new European mobilities, welcoming Civic Service volunteers, and inaugurating the urban eco-citizenship hub.',
    },
  ],
};

export const IMPACT_STATS = [
  { value: 480, suffix: '+', label: 'Participants accompagnés', note: 'Jeunes et habitants' },
  { value: 18, suffix: '', label: 'Projets & ateliers réalisés', note: 'En France et en Europe' },
  { value: 12, suffix: '', label: 'Pays partenaires européens', note: 'Réseau Erasmus+' },
  { value: 35, suffix: '+', label: 'Bénévoles engagés', note: 'Au quotidien' },
];

export const IMPACT_STATS_EN = [
  { value: 480, suffix: '+', label: 'Supported participants', note: 'Youth and local residents' },
  { value: 18, suffix: '', label: 'Projects & workshops', note: 'In France & across Europe' },
  { value: 12, suffix: '', label: 'European partner countries', note: 'Erasmus+ network' },
  { value: 35, suffix: '+', label: 'Active volunteers', note: 'On a daily basis' },
];

export const ACTION_DOMAINS_FR: ActionDomain[] = [
  {
    id: 'jeunesse',
    slug: 'action-jeunesse',
    title: 'Jeunesse & Éducation non formelle',
    shortDesc:
      'Ateliers participatifs, développement des compétences de vie, prise de parole en public et autonomie pour tous les 13–30 ans.',
    fullDesc:
      "L'éducation non formelle est au cœur de notre pédagogie : nous apprenons en faisant, en échangeant et en expérimentant. À travers des simulations, des jeux de rôle et des projets collaboratifs, nous permettons aux jeunes de révéler leur potentiel, de développer leur esprit critique et de bâtir une solide confiance en eux.",
    iconName: 'Compass',
    accentColor: '#1E3A8A',
    whyItMatters:
      "De nombreux jeunes issus des quartiers prioritaires ou de milieux défavorisés manquent d'opportunités pour exprimer leur créativité et acquérir des compétences transversales essentielles pour leur avenir professionnel et personnel.",
    activities: [
      {
        title: 'Académies du Leadership & Prise de parole',
        description: 'Sessions hebdomadaires pour surmonter le trac, structurer une argumentation et défendre ses projets.',
        frequency: 'Chaque mardi soir',
      },
      {
        title: 'Cafés Débats Citoyens & Esprit Critique',
        description: 'Discussions ouvertes sur l’actualité, la lutte contre la désinformation et la citoyenneté active.',
        frequency: '2 fois par mois',
      },
      {
        title: 'Laboratoire de Projets Jeunes',
        description: 'Accompagnement individualisé pour monter sa propre initiative solidaire ou associative.',
        frequency: 'Sur rendez-vous',
      },
    ],
    targetAudience: [
      'Jeunes de 13 à 30 ans',
      'Jeunes ayant moins d’opportunités (NEETs, quartiers prioritaires)',
      'Étudiants et lycéens en recherche d’orientation et de sens',
      'Animateurs de jeunesse et éducateurs spécialisés',
    ],
    galleryImages: [
      { url: ASSET_IMAGES.y1, caption: 'Atelier participatif de co-création et d’apprentissage non formel à Vitry' },
      { url: ASSET_IMAGES.y2, caption: 'Dynamique d’équipe, expression collective et compétences de vie' },
      { url: ASSET_IMAGES.y3, caption: 'Session d’échange interculturel et activités d’éducation non formelle' },
      { url: ASSET_IMAGES.y4, caption: 'Prise de parole, écoute active et simulation de débat citoyen' },
      { url: ASSET_IMAGES.y5, caption: 'Co-conception de projets solidaires et émancipation des jeunes' },
      { url: ASSET_IMAGES.y6, caption: 'Clôture de l’atelier, remise des certificats et célébration collective' },
    ],
  },
  {
    id: 'culture',
    slug: 'action-culture',
    title: 'Culture & Interculturalité',
    shortDesc:
      'Échanges interculturels, danses du monde, bibliothèque vivante, cuisine partagée, théâtre forum et dialogue citoyen.',
    fullDesc:
      "La culture est un pont indispensable entre les peuples. À travers des méthodologies actives d’éducation populaire (bibliothèque vivante, débats mouvants, théâtre forum, cuisines du monde, danses traditionnelles), nous créons des espaces de dialogue bienveillants pour déconstruire les stéréotypes, célébrer la diversité et faire de l’art un puissant levier d’émancipation.",
    iconName: 'Palette',
    accentColor: '#F97316',
    whyItMatters:
      'Dans une société trop souvent polarisée, la rencontre directe avec d’autres cultures et l’expérimentation vécue (jeux de rôle sur les privilèges, immersion urbaine, danses partagées) favorisent l’empathie, déconstruisent les discriminations et renforcent le vivre-ensemble.',
    activities: [
      {
        title: 'Ateliers de Danses Traditionnelles & Danses du Monde',
        description:
          'Apprentissage participatif de danses folkloriques et danses du monde (dabké, danses balkaniques, sirtaki, danses traditionnelles, afrobeats). Le mouvement et le rythme comme langage universel transcendant les frontières.',
        frequency: 'Tous les mercredis soir',
      },
      {
        title: 'Bibliothèque Vivante (Human Library)',
        description:
          'Les participants deviennent des « livres vivants » et partagent un récit personnel face aux préjugés (parcours migratoire, langue minoritaire, ruralité, identité). Les « lecteurs » posent des questions dans un cadre intime et bienveillant.',
        frequency: '1 samedi par mois',
      },
      {
        title: 'Débats Mouvants & Prise de Position (« Where Do You Stand »)',
        description:
          'Des affirmations stimulantes sur la société et les identités sont lues : les participants se déplacent physiquement dans l’espace entre « d’accord » et « pas d’accord » pour confronter leurs arguments dans le respect mutuel.',
        frequency: 'Bimensuel',
      },
      {
        title: 'Atelier « Un Pas en Avant » (Take a Step Forward)',
        description:
          'Attribution de cartes de rôles diversifiés ; les participants avancent à chaque question sur l’égalité d’accès aux droits. Une simulation frappante sur les inégalités systémiques et les privilèges invisibles.',
        frequency: 'Trimestriel',
      },
      {
        title: 'World Café Interculturel & Dialogues Citoyens',
        description:
          'Des tables de discussion tournantes animées par des questions porteuses de sens (ex. « Qu’est-ce qui définit notre sentiment d’appartenance ? »), favorisant l’intelligence collective et le croisement des regards.',
        frequency: 'Mensuel',
      },
      {
        title: 'Cuisine Interculturelle Participative (Intercultural Kitchen)',
        description:
          'Des brigades mixtes de jeunes cuisinent ensemble des spécialités traditionnelles de chaque pays. Un atelier culinaire immersif et chaleureux, bien plus interactif qu’une soirée passive.',
        frequency: '1 vendredi par mois',
      },
      {
        title: 'Récits Numériques & Mémoires Partagées (Digital Storytelling)',
        description:
          'Création collective de podcasts, courtes vidéos ou reportages photos documentant les mémoires d’exil, les parcours de vie et la richesse multiculturelle de nos quartiers.',
        frequency: 'Cycle semestriel',
      },
      {
        title: 'Théâtre Forum & Résolution de Conflits (Forum Theatre)',
        description:
          'Mise en scène de situations concrètes de malentendus culturels ou de discriminations. Les spectateurs peuvent arrêter la scène, monter sur le plateau et expérimenter des solutions alternatives.',
        frequency: 'Tous les samedis matin',
      },
      {
        title: 'Balades Urbaines Interculturelles & Enquêtes Citoyennes (City Walk)',
        description:
          'Exploration guidée de nos quartiers : immersion auprès des associations et commerces des diasporas, rencontres avec les habitant·es et découverte des traces multiculturelles de la ville.',
        frequency: 'Sorties mensuelles',
      },
      {
        title: 'Café des Langues & Tandems Linguistiques (Language Café)',
        description:
          'Ateliers conviviaux où chaque participant enseigne des expressions clés, des proverbes et les subtilités de sa langue d’origine à travers des jeux en binômes.',
        frequency: 'Tous les mardis soir',
      },
    ],
    targetAudience: [
      'Jeunes, adultes et familles du quartier',
      'Personnes migrantes et demandeuses d’asile',
      'Artistes émergents et passionnés de culture',
      'Curieux de tous horizons',
    ],
    galleryImages: [
      { url: ASSET_IMAGES.i1, caption: 'Atelier de danses traditionnelles et expression corporelle interculturelle' },
      { url: ASSET_IMAGES.i2, caption: 'Célébration festive, rythmes du monde et dynamique de groupe' },
      { url: ASSET_IMAGES.i3, caption: 'Bibliothèque Vivante (Human Library) & dialogue contre les stéréotypes' },
      { url: ASSET_IMAGES.i4, caption: 'Cercle de danse collective et cohésion interculturelle' },
      { url: ASSET_IMAGES.i5, caption: 'Atelier créatif et expression artistique des diversités' },
      { url: ASSET_IMAGES.i6, caption: 'Débat citoyen et écoute active entre jeunes d’horizons divers' },
      { url: ASSET_IMAGES.i7, caption: 'Performance scénique participative et théâtre d’improvisation' },
      { url: ASSET_IMAGES.i8, caption: 'Convivialité et partage culinaire interculturel' },
      { url: ASSET_IMAGES.i9, caption: 'Chorégraphie collective et rassemblement de jeunesse' },
      { url: ASSET_IMAGES.i10, caption: 'Échange interculturel et célébration de la fraternité' },
    ],
  },
  {
    id: 'environnement',
    slug: 'action-environnement',
    title: 'Environnement & Développement durable',
    shortDesc:
      'Transition écologique locale, lutte contre le gaspillage alimentaire, ateliers zéro déchet, végétalisation urbaine et éco-citoyenneté active.',
    fullDesc:
      'La justice sociale et la justice climatique sont indissociables. Nous engageons les habitants dans des actions concrètes pour transformer notre cadre de vie urbain, lutter contre le gaspillage alimentaire à travers des cuisines solidaires et la valorisation d’invendus maraîchers, réduire les pollutions et adopter collectivement des modes de consommation sobres et durables.',
    iconName: 'Leaf',
    accentColor: '#10B981',
    whyItMatters:
      'Chaque année, des millions de tonnes de nourriture consommable sont gaspillées pendant que de nombreux ménages subissent l’inflation et que nos villes manquent d’espaces verts. Récupérer les surplus alimentaires, cuisiner anti-gaspi, composter les biodéchets et végétaliser le quartier allient transition écologique concrète et solidarité de proximité.',
    activities: [
      {
        title: 'Cuisine Anti-Gaspillage & Récupération Solidaire',
        description: 'Ateliers culinaires créatifs à partir d’invendus maraîchers des marchés locaux, recettes zéro déchet, conservation et repas partagés solidaires.',
        frequency: 'Le 3e samedi du mois',
      },
      {
        title: 'Jardins Partagés & Végétalisation de Rue',
        description: 'Plantation de semis, permaculture urbaine et entretien participatif d’espaces verts partagés.',
        frequency: 'Chaque dimanche après-midi',
      },
      {
        title: 'Repair Café & Ateliers Zéro Déchet',
        description: 'Apprendre à réparer son petit électroménager et fabriquer ses produits ménagers naturels.',
        frequency: 'Le 2e samedi du mois',
      },
      {
        title: 'Clean-Walks & Fresques du Climat',
        description: 'Collectes citoyennes de déchets associées à des temps de sensibilisation scientifique ludiques.',
        frequency: 'Trimestriel',
      },
    ],
    targetAudience: [
      'Familles et riverains de Vitry et de Paris',
      'Éco-délégués et collégiens / lycéens',
      'Commerçants des marchés et bénévoles engagés contre le gaspillage',
      'Bénévoles passionnés de transition écologique',
    ],
    galleryImages: [
      { url: ASSET_IMAGES.c1, caption: 'Atelier cuisine anti-gaspillage : valorisation des surplus maraîchers et invendus' },
      { url: ASSET_IMAGES.c2, caption: 'Préparation culinaire collective et recettes créatives zéro déchet' },
      { url: ASSET_IMAGES.c3, caption: 'Repas partagé solidaire et convivial autour des plats préparés ensemble' },
      { url: ASSET_IMAGES.c4, caption: 'Sensibilisation à la réduction des déchets et tri sélectif' },
      { url: ASSET_IMAGES.c5, caption: 'Jardinage écologique et permaculture urbaine à Vitry' },
      { url: ASSET_IMAGES.c6, caption: 'Récolte solidaire dans notre potager partagé de quartier' },
      { url: ASSET_IMAGES.c7, caption: 'Atelier pratique de sensibilisation éco-citoyenne' },
      { url: ASSET_IMAGES.c8, caption: 'Repair Café solidaire : réparation collaborative d’objets du quotidien' },
      { url: ASSET_IMAGES.c9, caption: 'Clean-walk citoyenne et collecte participative de déchets' },
      { url: ASSET_IMAGES.c10, caption: 'Mobilisation collective pour la transition écologique locale' },
    ],
  },
];

export const ACTION_DOMAINS_EN: ActionDomain[] = [
  {
    id: 'jeunesse',
    slug: 'action-jeunesse',
    title: 'Youth & Non-Formal Education',
    shortDesc:
      'Interactive workshops, life skills empowerment, public speaking, and self-confidence building for youth aged 13–30.',
    fullDesc:
      'Non-formal education is the bedrock of our pedagogy: we learn by doing, sharing, and testing ideas together. Through simulations, role-playing, and collaborative projects, we empower youth to unlock their potential, develop critical thinking, and build lasting self-reliance.',
    iconName: 'Compass',
    accentColor: '#1E3A8A',
    whyItMatters:
      'Many young people from suburban working-class areas face limited access to transversal skills and self-expression opportunities essential for their career and personal development.',
    activities: [
      {
        title: 'Leadership & Public Speaking Academies',
        description: 'Weekly sessions to overcome stage fright, structure arguments, and pitch ideas with conviction.',
        frequency: 'Every Tuesday evening',
      },
      {
        title: 'Civic Debates & Critical Thinking Cafés',
        description: 'Open discussions addressing disinformation, European citizenship, and social engagement.',
        frequency: 'Twice a month',
      },
      {
        title: 'Youth Project Incubator',
        description: 'One-on-one mentoring to launch your own grassroots initiative or solidarity association.',
        frequency: 'By appointment',
      },
    ],
    targetAudience: [
      'Youth aged 13 to 30',
      'Youth with fewer opportunities (NEETs, priority urban zones)',
      'Students seeking guidance, purpose, and community',
      'Youth workers and specialized educators',
    ],
    galleryImages: [
      { url: ASSET_IMAGES.y1, caption: 'Participatory co-creation and non-formal education workshop in Vitry' },
      { url: ASSET_IMAGES.y2, caption: 'Teamwork dynamics, group reflection, and life skills empowering youth' },
      { url: ASSET_IMAGES.y3, caption: 'Youth exchange session and hands-on interactive activities' },
      { url: ASSET_IMAGES.y4, caption: 'Public speaking, active listening, and civic debate simulation' },
      { url: ASSET_IMAGES.y5, caption: 'Collaborative solidarity project design and peer mentoring' },
      { url: ASSET_IMAGES.y6, caption: 'Workshop celebration, certificate ceremony, and key memorable moments' },
    ],
  },
  {
    id: 'culture',
    slug: 'action-culture',
    title: 'Culture & Interculturality',
    shortDesc:
      'Intercultural youth encounters, world dances, Human Library sessions, collaborative cooking, and dialogue workshops.',
    fullDesc:
      'Culture is a vital bridge across human differences. Using non-formal popular education methodologies (Human Library, Take a Stand debates, forum theatre, world cuisines, traditional and world dances), we create safe spaces to deconstruct stereotypes, celebrate migration journeys, and harness art as a tool for empowerment.',
    iconName: 'Palette',
    accentColor: '#F97316',
    whyItMatters:
      'In an increasingly polarized world, active experiential methods (privilege role-plays, intercultural walks, shared dances, narratives) cultivate genuine empathy, dismantle ingrained biases, and forge enduring social solidarity.',
    activities: [
      {
        title: 'Intercultural & Traditional Dance Workshops',
        description:
          'Hands-on participatory workshops exploring traditional folk and world dances (dabke, Balkan circle dances, sirtaki, folk rhythms, afrobeats). Movement and rhythm as a universal language transcending linguistic borders.',
        frequency: 'Every Wednesday evening',
      },
      {
        title: 'Human Library (Bibliothèque Vivante)',
        description:
          'Participants act as "living books", sharing personal journeys vulnerable to stereotypes (migrant background, minority language, rural upbringing). Empathetic "readers" ask candid questions in small circles.',
        frequency: 'Monthly',
      },
      {
        title: 'Take a Stand (Where Do You Stand / Moving Debates)',
        description:
          'Controversial prompts on societal norms are read aloud; participants physically move between "Agree" and "Disagree" sides of the room, articulating their stance and discovering common ground.',
        frequency: 'Bi-weekly',
      },
      {
        title: 'Take a Step Forward (Privilege & Equity Role-Play)',
        description:
          'Participants receive diverse character cards and step forward according to prompts on equal rights. A profound, visual reflection on discrimination, invisible privileges, and social inequality.',
        frequency: 'Quarterly',
      },
      {
        title: 'Intercultural World Café & Dialogue Tables',
        description:
          'Dynamic discussion tables exploring fundamental themes (e.g., "What does it mean to truly belong?"), with groups rotating every 20 minutes to cross-pollinate ideas and perspectives.',
        frequency: 'Monthly',
      },
      {
        title: 'Intercultural Kitchen & Collaborative Cooking',
        description:
          'Mixed international teams cook authentic recipes from each country together. A hands-on, convivial culinary ritual far more interactive and bonding than conventional cultural shows.',
        frequency: '1st Friday of each month',
      },
      {
        title: 'Digital Storytelling & Oral Histories (Shared Narratives)',
        description:
          'Cross-cultural teams co-produce short documentary videos, podcasts, and photo-essays spotlighting migration paths and local multicultural memories.',
        frequency: 'Semester modules',
      },
      {
        title: 'Forum Theatre & Anti-Bias Simulation',
        description:
          'Dramatizing real-life scenarios of intercultural friction or discrimination. Audience members pause the scene, step onto the stage, and test out constructive resolutions.',
        frequency: 'Every Saturday morning',
      },
      {
        title: 'Intercultural City Walk & Urban Treasure Hunt',
        description:
          'Grassroots territorial exploration: conversing with diaspora community leaders, discovering multicultural landmarks, and mapping the diverse heritage of our neighbourhoods.',
        frequency: 'Monthly outings',
      },
      {
        title: 'Language Café & Peer Tandem Workshops',
        description:
          'Informal linguistic gatherings where participants exchange everyday phrases, idioms, and cultural folklore from their native tongues in warm, rotating tandems.',
        frequency: 'Every Tuesday evening',
      },
    ],
    targetAudience: [
      'Local youth, adults, and families',
      'Migrants, refugees, and asylum seekers',
      'Emerging creators and culture lovers',
      'Curious minds from all walks of life',
    ],
    galleryImages: [
      { url: ASSET_IMAGES.i1, caption: 'Traditional folk and world dance workshop: rhythm and body expression' },
      { url: ASSET_IMAGES.i2, caption: 'Festive cultural celebration, international folk beats, and group energy' },
      { url: ASSET_IMAGES.i3, caption: 'Human Library session: sharing life stories and dismantling stereotypes' },
      { url: ASSET_IMAGES.i4, caption: 'Intercultural circle dance fostering unity and mutual respect' },
      { url: ASSET_IMAGES.i5, caption: 'Creative artistic expression celebrating community diversity' },
      { url: ASSET_IMAGES.i6, caption: 'Civic dialogue, active listening, and open reflection among peers' },
      { url: ASSET_IMAGES.i7, caption: 'Participatory stage performance and forum theatre simulation' },
      { url: ASSET_IMAGES.i8, caption: 'Warm convivial gathering and intercultural culinary treats' },
      { url: ASSET_IMAGES.i9, caption: 'Collective folk choreography and energetic youth unity' },
      { url: ASSET_IMAGES.i10, caption: 'Cross-cultural celebration, fellowship, and lasting European friendships' },
    ],
  },
  {
    id: 'environnement',
    slug: 'action-environnement',
    title: 'Environment & Sustainable Development',
    shortDesc:
      'Grassroots ecological transition, food waste reduction, zero-waste workshops, street greening, and active eco-citizenship.',
    fullDesc:
      'Social justice and environmental justice go hand in hand. We engage citizens in tangible projects to transform our urban spaces, combat food waste through community kitchens and solidarity gleaning, reduce pollution, and adopt collective, affordable eco-friendly habits.',
    iconName: 'Leaf',
    accentColor: '#10B981',
    whyItMatters:
      'Every year, millions of tonnes of edible food are thrown away while urban families face rising grocery costs and heat islands. Rescuing surplus food, learning zero-waste culinary tricks, composting organics, and greening public spaces delivers immediate ecological impact and strengthens neighbourhood solidarity.',
    activities: [
      {
        title: 'Anti-Food Waste Kitchen & Solidarity Recovery',
        description: 'Creative culinary workshops transforming unsold market produce into shared meals, preservation techniques, and food waste awareness.',
        frequency: 'Every 3rd Saturday of the month',
      },
      {
        title: 'Community Gardens & Street Permaculture',
        description: 'Seed planting, urban permaculture, and collective maintenance of green shared spaces.',
        frequency: 'Every Sunday afternoon',
      },
      {
        title: 'Repair Café & Zero-Waste Workshops',
        description: 'Learn how to fix small home appliances and make your own natural ecological cleaning products.',
        frequency: '2nd Saturday of the month',
      },
      {
        title: 'Clean-Walks & Climate Fresk Sessions',
        description: 'Community trash cleanups coupled with interactive scientific climate awareness games.',
        frequency: 'Quarterly',
      },
    ],
    targetAudience: [
      'Families and neighbours in Vitry and Paris',
      'School eco-delegates, middle and high school students',
      'Local market vendors, food donors, and anti-waste volunteers',
      'Volunteers committed to local climate transition',
    ],
    galleryImages: [
      { url: ASSET_IMAGES.c1, caption: 'Anti-food waste cooking workshop: rescuing surplus produce and market donations' },
      { url: ASSET_IMAGES.c2, caption: 'Collective community meal preparation and creative zero-waste culinary recipes' },
      { url: ASSET_IMAGES.c3, caption: 'Warm solidarity meal sharing healthy dishes prepared together by volunteers' },
      { url: ASSET_IMAGES.c4, caption: 'Zero-waste awareness, composting techniques, and local waste reduction' },
      { url: ASSET_IMAGES.c5, caption: 'Hands-on urban permaculture and organic planting in Vitry community garden' },
      { url: ASSET_IMAGES.c6, caption: 'Solidarity harvest of seasonal vegetables, fruits, and aromatic herbs' },
      { url: ASSET_IMAGES.c7, caption: 'Interactive workshop on eco-citizenship and everyday sustainable habits' },
      { url: ASSET_IMAGES.c8, caption: 'Community Repair Café: fixing everyday home appliances and reducing e-waste' },
      { url: ASSET_IMAGES.c9, caption: 'Grassroots clean-walk and participatory neighbourhood environmental action' },
      { url: ASSET_IMAGES.c10, caption: 'Youth and family mobilisation driving tangible local ecological transition' },
    ],
  },
];

export const ACTION_DOMAINS = ACTION_DOMAINS_FR;

export const EUROPEAN_PROJECTS_FR: EuropeanProject[] = [
  {
    id: 'horizons-sans-frontieres',
    acronym: 'HSF',
    title: 'Horizons Sans Frontières : Jeunesse, Dialogue & Citoyenneté',
    actionType: 'KA152',
    actionTypeLabel: 'Échange de jeunes – KA152-YOU',
    projectNumber: '2025-2-FR02-KA152-YOU-000184920',
    dates: '12 au 21 Juillet 2026',
    year: 2026,
    location: 'Paris & Île-de-France',
    country: 'France',
    status: 'en-cours',
    theme: 'Citoyenneté européenne, inclusion et lutte contre les préjugés',
    summary:
      'Échange de jeunes rassemblant 36 participants venus de France, d’Espagne, d’Italie, d’Allemagne, de Pologne et de Grèce. Durant dix jours à Paris, les jeunes exploreront la diversité culturelle à travers des ateliers d’expression artistique, des débats citoyens et des visites immersives.',
    image: ASSET_IMAGES.erasmus,
    objectives: [
      'Déconstruire les stéréotypes culturels et favoriser la compréhension mutuelle entre jeunes européens.',
      'Sensibiliser aux valeurs fondamentales de l’Union européenne : démocratie, liberté et solidarité.',
      'Développer les compétences linguistiques et la confiance en soi grâce à l’éducation non formelle.',
      'Créer un guide méthodologique de cohésion sociale conçu par et pour les jeunes participants.',
    ],
    targetGroup: 'Jeunes de 18 à 26 ans, avec une priorité accordée aux jeunes ayant moins d’opportunités.',
    participantCount: 36,
    programmeOverview: [
      'Jour 1 : Accueil, jeux brise-glace et accords de vie de groupe',
      'Jour 2 : Soirée interculturelle et partage des traditions culinaires',
      'Jour 3-4 : Ateliers de théâtre forum et décryptage des stéréotypes',
      'Jour 5 : Visite citoyenne de Paris et rencontre avec des députés européens',
      'Jour 6-7 : Création de podcasts et de vidéos de sensibilisation collective',
      'Jour 8 : Action solidaire commune avec des associations locales à Vitry',
      'Jour 9 : Évaluation, auto-évaluation Youthpass et soirée de clôture',
      'Jour 10 : Départs et bilans de retour',
    ],
    partners: [
      { name: 'Sans Limite', country: 'France', flag: '🇫🇷', role: 'Coordinateur', website: 'https://sanslimite.fr' },
      { name: 'Asociación Juvenil Intercambia', country: 'Espagne', flag: '🇪🇸', role: 'Partenaire', website: 'https://intercambia.org' },
      { name: 'Associazione Culturale Link', country: 'Italie', flag: '🇮🇹', role: 'Partenaire', website: 'https://linkyouth.org' },
      { name: 'KulturLife gGmbH', country: 'Allemagne', flag: '🇩🇪', role: 'Partenaire', website: 'https://kulturlife.de' },
      { name: 'Stowarzyszenie Semper Avanti', country: 'Pologne', flag: '🇵🇱', role: 'Partenaire', website: 'https://semperavanti.org' },
      { name: 'United Societies of Balkans', country: 'Grèce', flag: '🇬🇷', role: 'Partenaire', website: 'https://usbngo.gr' },
    ],
    results: [
      { title: 'Guide de l’Animateur Inclusif (PDF)', type: 'Livret méthodologique', description: '24 pages de fiches d’ateliers non formels testées en conditions réelles.' },
      { title: 'Série de 6 podcasts "Voix d’Europe"', type: 'Capsules audio', description: 'Témoignages intimes de jeunes sur leur vision de l’avenir de l’Europe.' },
      { title: 'Certificats officiels Youthpass', type: 'Reconnaissance des compétences', description: 'Certification des 8 compétences clés pour chaque participant.' },
    ],
    testimonials: [
      {
        name: 'Kenza M.',
        age: 21,
        city: 'Vitry-sur-Seine',
        quote: "C'était mon tout premier projet Erasmus+. Avant, je pensais que l'Europe n'était pas faite pour moi. Cette expérience avec Sans Limite a totalement changé mon regard et m'a donné le courage de postuler à un stage à l'étranger.",
      },
      {
        name: 'Matteo R.',
        age: 23,
        city: 'Naples',
        quote: "L'énergie de l'équipe de Sans Limite est incroyable. Tout le monde se sentait écouté et valorisé, quelle que soit son aisance en anglais ou en français.",
      },
    ],
  },
  {
    id: 'eco-action-youth',
    acronym: 'EAY',
    title: 'Eco-Action Youth : Transition Écologique & Pouvoir d’Agir',
    actionType: 'KA210',
    actionTypeLabel: 'Partenariat simplifié – KA210-YOU',
    projectNumber: '2025-1-FR02-KA210-YOU-000142831',
    dates: '1er Septembre 2025 au 28 Février 2027',
    year: 2025,
    location: 'France, Portugal & Espagne',
    country: 'France',
    status: 'en-cours',
    theme: 'Développement durable, écologie urbaine et innovation sociale',
    summary:
      'Partenariat d’apprentissage réunissant 3 organisations jeunesses de France, du Portugal et d’Espagne pour co-concevoir des outils pédagogiques adaptés aux quartiers populaires sur les défis climatiques.',
    image: ASSET_IMAGES.eco,
    objectives: [
      'Échanger de bonnes pratiques sur la sensibilisation écologique auprès des publics éloignés des démarches vertes.',
      'Former 45 animateurs jeunesse aux techniques participatives d’éco-citoyenneté.',
      'Publier une boîte à outils trilingue d’ateliers zéro déchet et de permaculture urbaine.',
    ],
    targetGroup: 'Travailleurs de jeunesse, animateurs, jeunes éco-ambassadeurs de 16 à 30 ans.',
    participantCount: 45,
    programmeOverview: [
      'Phase 1 : Cartographie des besoins environnementaux locaux',
      'Phase 2 : Séminaire de formation d’animateurs à Lisbonne (Novembre 2025)',
      'Phase 3 : Expérimentation des ateliers pilotes à Paris et à Séville (2026)',
      'Phase 4 : Événement multiplicateur et diffusion de la boîte à outils (Janvier 2027)',
    ],
    partners: [
      { name: 'Sans Limite', country: 'France', flag: '🇫🇷', role: 'Coordinateur', website: 'https://sanslimite.fr' },
      { name: 'Clube Intercultural Europeu', country: 'Portugal', flag: '🇵🇹', role: 'Partenaire', website: 'https://clubeintercultural.org' },
      { name: 'Iniciativa Internacional Joven', country: 'Espagne', flag: '🇪🇸', role: 'Partenaire', website: 'https://aiij.org' },
    ],
    results: [
      { title: 'Boîte à outils "Green Steps for Youth"', type: 'Outil pédagogique', description: 'Guide pratique d’activités éco-responsables à faible coût matériel.' },
      { title: 'Rapport comparatif des politiques jeunesses locales', type: 'Étude d’impact', description: 'Analyse des freins et leviers de la participation verte des jeunes.' },
    ],
    testimonials: [
      {
        name: 'Sofia P.',
        age: 26,
        city: 'Lisbonne',
        quote: 'Ce partenariat nous a permis de structurer des démarches concrètes qui parlent vraiment aux jeunes de nos quartiers.',
      },
    ],
  },
  {
    id: 'digital-empowerment',
    acronym: 'DE-LAB',
    title: 'Digital Empowerment : Inclusion & Citoyenneté Numérique',
    actionType: 'KA153',
    actionTypeLabel: 'Mobilité des acteurs de jeunesse – KA153-YOU',
    projectNumber: '2025-1-IT03-KA153-YOU-000098124',
    dates: '14 au 22 Novembre 2025',
    year: 2025,
    location: 'Rome & Vitry-sur-Seine',
    country: 'Italie',
    status: 'realise',
    theme: 'Littératie numérique, inclusion et sécurité des données',
    summary:
      'Cours de formation internationale pour 28 éducateurs et animateurs de jeunesse européens, axé sur l’utilisation critique et inclusive des nouvelles technologies et de l’intelligence artificielle dans le travail de jeunesse.',
    image: ASSET_IMAGES.inclusion,
    objectives: [
      'Former les éducateurs aux outils numériques émancipateurs pour les jeunes en décrochage.',
      'Sensibiliser aux biais algorithmiques, à l’éthique de l’IA et à la cyber-bienveillance.',
      'Établir un réseau solidaire d’espaces numériques associatifs en Europe.',
    ],
    targetGroup: 'Animateurs socioculturels, médiateurs numériques et éducateurs de rue.',
    participantCount: 28,
    programmeOverview: [
      'Module 1 : Diagnostic des inégalités numériques chez les 13-25 ans',
      'Module 2 : Création de contenus numériques éthiques (podcasts, vidéos courtes, zines)',
      'Module 3 : Gamification et escape games pédagogiques sur les fake news',
      'Module 4 : Conception de projets de suivi pour chaque organisation partenaire',
    ],
    partners: [
      { name: 'Arci Roma', country: 'Italie', flag: '🇮🇹', role: 'Coordinateur', website: 'https://arciroma.it' },
      { name: 'Sans Limite', country: 'France', flag: '🇫🇷', role: 'Partenaire', website: 'https://sanslimite.fr' },
      { name: 'Planeta Ciencias', country: 'Espagne', flag: '🇪🇸', role: 'Partenaire', website: 'https://planetaciencias.es' },
      { name: 'CJD Berlin-Brandenburg', country: 'Allemagne', flag: '🇩🇪', role: 'Partenaire', website: 'https://cjd.de' },
    ],
    results: [
      { title: 'Kit d’animation "Fake News vs Esprit Critique"', type: 'Jeu pédagogique', description: 'Cartes interactives à imprimer pour animer des débats en classe ou en centre social.' },
      { title: 'Charte européenne pour l’inclusion numérique bienveillante', type: 'Déclaration collective', description: 'Recommandations adoptées par les 4 pays partenaires.' },
    ],
    testimonials: [
      {
        name: 'Yassine B.',
        age: 28,
        city: 'Paris',
        quote: "J'ai acquis des méthodes concrètes que j'applique directement chaque semaine avec les jeunes de Vitry.",
      },
    ],
  },
];

export const EUROPEAN_PROJECTS_EN: EuropeanProject[] = [
  {
    id: 'horizons-sans-frontieres',
    acronym: 'HSF',
    title: 'Horizons Without Borders: Youth, Dialogue & Citizenship',
    actionType: 'KA152',
    actionTypeLabel: 'Youth Exchange – KA152-YOU',
    projectNumber: '2025-2-FR02-KA152-YOU-000184920',
    dates: '12 to 21 July 2026',
    year: 2026,
    location: 'Paris & Île-de-France',
    country: 'France',
    status: 'en-cours',
    theme: 'European citizenship, inclusion, and tackling prejudice',
    summary:
      'Youth exchange uniting 36 participants from France, Spain, Italy, Germany, Poland, and Greece. Over ten days in Paris, participants explore cultural diversity through arts, civic deliberations, and site visits.',
    image: ASSET_IMAGES.erasmus,
    objectives: [
      'Deconstruct cultural stereotypes and promote mutual understanding among European youth.',
      'Raise awareness on the core values of the European Union: democracy, freedom, and solidarity.',
      'Develop language proficiency and self-confidence through non-formal educational activities.',
      'Produce a youth-led social cohesion methodology guide designed by the participants.',
    ],
    targetGroup: 'Youth aged 18 to 26, prioritizing candidates with fewer opportunities.',
    participantCount: 36,
    programmeOverview: [
      'Day 1: Welcome, team building, and group living agreements',
      'Day 2: Intercultural evening and tasting traditional culinary specialties',
      'Days 3-4: Forum theatre workshops and decoding cultural stereotypes',
      'Day 5: Civic exploration of Paris and meeting European parliamentary representatives',
      'Days 6-7: Creation of podcasts and community awareness video clips',
      'Day 8: Joint solidarity action with local Vitry grassroots charities',
      'Day 9: Evaluation, Youthpass self-assessment, and closing farewell night',
      'Day 10: Departures and dissemination planning',
    ],
    partners: [
      { name: 'Sans Limite', country: 'France', flag: '🇫🇷', role: 'Coordinateur', website: 'https://sanslimite.fr' },
      { name: 'Asociación Juvenil Intercambia', country: 'Spain', flag: '🇪🇸', role: 'Partenaire', website: 'https://intercambia.org' },
      { name: 'Associazione Culturale Link', country: 'Italy', flag: '🇮🇹', role: 'Partenaire', website: 'https://linkyouth.org' },
      { name: 'KulturLife gGmbH', country: 'Germany', flag: '🇩🇪', role: 'Partenaire', website: 'https://kulturlife.de' },
      { name: 'Stowarzyszenie Semper Avanti', country: 'Poland', flag: '🇵🇱', role: 'Partenaire', website: 'https://semperavanti.org' },
      { name: 'United Societies of Balkans', country: 'Greece', flag: '🇬🇷', role: 'Partenaire', website: 'https://usbngo.gr' },
    ],
    results: [
      { title: 'Inclusive Youth Worker Guide (PDF)', type: 'Methodology booklet', description: '24 pages of field-tested non-formal activity cards.' },
      { title: '6-episode Podcast Series "Voices of Europe"', type: 'Audio capsules', description: 'Intimate testimonies from youth on their vision for the future of Europe.' },
      { title: 'Official Youthpass Certificates', type: 'Skills Recognition', description: 'Validation of the 8 key lifelong learning competences.' },
    ],
    testimonials: [
      {
        name: 'Kenza M.',
        age: 21,
        city: 'Vitry-sur-Seine',
        quote: "This was my very first Erasmus+ experience. Before, I felt that European mobility wasn't meant for people like me. This project with Sans Limite gave me the courage to apply for an internship abroad.",
      },
      {
        name: 'Matteo R.',
        age: 23,
        city: 'Naples',
        quote: "The energy of the Sans Limite team is extraordinary. Everyone felt embraced and respected regardless of their level of English or French.",
      },
    ],
  },
  {
    id: 'eco-action-youth',
    acronym: 'EAY',
    title: 'Eco-Action Youth: Ecological Transition & Youth Empowerment',
    actionType: 'KA210',
    actionTypeLabel: 'Small-scale Partnership – KA210-YOU',
    projectNumber: '2025-1-FR02-KA210-YOU-000142831',
    dates: '1 September 2025 to 28 February 2027',
    year: 2025,
    location: 'France, Portugal & Spain',
    country: 'France',
    status: 'en-cours',
    theme: 'Sustainability, urban ecology, and grassroots social innovation',
    summary:
      'Learning partnership bringing together 3 youth organisations from France, Portugal, and Spain to co-design educational toolkits tailored to suburban neighbourhoods on climate challenges.',
    image: ASSET_IMAGES.eco,
    objectives: [
      'Exchange best practices on environmental education with groups distant from green campaigns.',
      'Train 45 youth workers in participatory eco-citizenship methods.',
      'Publish a trilingual toolkit on zero-waste initiatives and community permaculture.',
    ],
    targetGroup: 'Youth workers, educators, and young eco-ambassadors aged 16 to 30.',
    participantCount: 45,
    programmeOverview: [
      'Phase 1: Mapping local neighbourhood environmental challenges',
      'Phase 2: Youth worker training seminar in Lisbon (November 2025)',
      'Phase 3: Piloting practical community workshops in Paris and Seville (2026)',
      'Phase 4: Multiplier dissemination event and open-source toolkit launch (January 2027)',
    ],
    partners: [
      { name: 'Sans Limite', country: 'France', flag: '🇫🇷', role: 'Coordinateur', website: 'https://sanslimite.fr' },
      { name: 'Clube Intercultural Europeu', country: 'Portugal', flag: '🇵🇹', role: 'Partenaire', website: 'https://clubeintercultural.org' },
      { name: 'Iniciativa Internacional Joven', country: 'Spain', flag: '🇪🇸', role: 'Partenaire', website: 'https://aiij.org' },
    ],
    results: [
      { title: 'Toolkit "Green Steps for Youth"', type: 'Educational resource', description: 'Practical handbook of low-cost, high-impact eco-responsible workshops.' },
      { title: 'Comparative Study of Local Youth Eco-Policies', type: 'Impact study', description: 'Analysis of barriers and drivers for youth civic participation in green transitions.' },
    ],
    testimonials: [
      {
        name: 'Sofia P.',
        age: 26,
        city: 'Lisbon',
        quote: 'This partnership helped us establish tangible methods that truly speak to young people in our local communities.',
      },
    ],
  },
  {
    id: 'digital-empowerment',
    acronym: 'DE-LAB',
    title: 'Digital Empowerment: Inclusion & Ethical Digital Citizenship',
    actionType: 'KA153',
    actionTypeLabel: 'Youth Worker Mobility – KA153-YOU',
    projectNumber: '2025-1-IT03-KA153-YOU-000098124',
    dates: '14 to 22 November 2025',
    year: 2025,
    location: 'Rome & Vitry-sur-Seine',
    country: 'Italy',
    status: 'realise',
    theme: 'Digital literacy, inclusion, and online security',
    summary:
      'International training course for 28 European youth leaders and educators, focusing on the critical and empowering use of new technologies and Artificial Intelligence in youth work.',
    image: ASSET_IMAGES.inclusion,
    objectives: [
      'Equip educators with emancipatory digital tools for marginalized youth.',
      'Raise awareness on algorithmic bias, AI ethics, and cyber-kindness.',
      'Establish a European solidarity network of community digital hubs.',
    ],
    targetGroup: 'Youth workers, digital mediators, and community educators.',
    participantCount: 28,
    programmeOverview: [
      'Module 1: Diagnostic of digital inequalities among youth aged 13-25',
      'Module 2: Ethical digital storytelling (podcasts, short videos, zines)',
      'Module 3: Gamification and educational escape games tackling fake news',
      'Module 4: Co-designing follow-up actions for each partner country',
    ],
    partners: [
      { name: 'Arci Roma', country: 'Italy', flag: '🇮🇹', role: 'Coordinateur', website: 'https://arciroma.it' },
      { name: 'Sans Limite', country: 'France', flag: '🇫🇷', role: 'Partenaire', website: 'https://sanslimite.fr' },
      { name: 'Planeta Ciencias', country: 'Spain', flag: '🇪🇸', role: 'Partenaire', website: 'https://planetaciencias.es' },
      { name: 'CJD Berlin-Brandenburg', country: 'Germany', flag: '🇩🇪', role: 'Partenaire', website: 'https://cjd.de' },
    ],
    results: [
      { title: 'Animation Kit "Fake News vs Critical Thinking"', type: 'Educational card game', description: 'Printable cards for classroom and community centre debates.' },
      { title: 'European Charter for Kind Digital Inclusion', type: 'Collective declaration', description: 'Key recommendations adopted by the 4 participating countries.' },
    ],
    testimonials: [
      {
        name: 'Yassine B.',
        age: 28,
        city: 'Paris',
        quote: 'I gained practical techniques that I now apply directly each week with young people in Vitry.',
      },
    ],
  },
];

export const EUROPEAN_PROJECTS = EUROPEAN_PROJECTS_FR;

export const OPEN_CALLS_FR: OpenCall[] = [
  {
    id: 'call-hsf-2026',
    title: 'Échange de Jeunes : Horizons Sans Frontières 2026',
    projectAcronym: 'HSF-2026',
    dates: '12 au 21 Juillet 2026',
    location: 'Paris & Île-de-France, France',
    country: 'France',
    eligibleAges: '18 à 26 ans',
    placesAvailable: 6,
    deadline: '15 Mai 2026',
    financialConditions:
      'Voyage, hébergement et repas pris en charge à 100 % selon les règles du programme Erasmus+. Aucune participation financière requise.',
    description:
      'Rejoignez une aventure humaine exceptionnelle avec 35 jeunes venus de 6 pays européens ! Au programme : débats d’idées, ateliers artistiques, découvertes culturelles et moments inoubliables.',
    profile: [
      'Résider en France (priorité accordée aux résidents d’Île-de-France et du Val-de-Marne)',
      'Avoir entre 18 et 26 ans lors du projet',
      'Être motivé·e à échanger avec des jeunes d’autres cultures',
      'Aucun niveau d’anglais spécifique exigé (bienveillance et traduction collaborative garanties)',
    ],
  },
  {
    id: 'call-green-lisbon-2026',
    title: 'Formation Animateurs : Eco-Action Youth à Lisbonne',
    projectAcronym: 'EAY-2026',
    dates: '04 au 11 Octobre 2026',
    location: 'Lisbonne, Portugal',
    country: 'Portugal',
    eligibleAges: '18 ans et plus (pas de limite d’âge)',
    placesAvailable: 3,
    deadline: '20 Juin 2026',
    financialConditions:
      'Frais de transport (forfait kilométrique Erasmus+), hébergement en chambre partagée et repas 100 % couverts.',
    description:
      'Formation intensive de 7 jours au Portugal destinée aux animateurs de jeunesse, bénévoles associatifs et porteurs de projets engagés dans la transition écologique.',
    profile: [
      'Être animateur, travailleur de jeunesse, bénévole régulier ou étudiant en médiation',
      'Intérêt démontré pour les enjeux climatiques et l’éducation populaire',
      'Engagement à restituer les acquis lors d’ateliers locaux à votre retour',
    ],
  },
];

export const OPEN_CALLS_EN: OpenCall[] = [
  {
    id: 'call-hsf-2026',
    title: 'Youth Exchange: Horizons Without Borders 2026',
    projectAcronym: 'HSF-2026',
    dates: '12 to 21 July 2026',
    location: 'Paris & Île-de-France, France',
    country: 'France',
    eligibleAges: '18 to 26 years old',
    placesAvailable: 6,
    deadline: '15 May 2026',
    financialConditions:
      'Travel, accommodation, and meals 100% funded under Erasmus+ programme rules. Zero registration fee.',
    description:
      'Join an unforgettable journey with 35 young people from 6 European countries! Highlights include idea debates, creative workshops, cultural visits, and building lasting international friendships.',
    profile: [
      'Reside in France (priority given to Île-de-France and Val-de-Marne residents)',
      'Be between 18 and 26 years old at the time of the project',
      'Be enthusiastic about connecting with peers from other cultures',
      'No specific English certificate required (inclusive, peer-supported translation provided)',
    ],
  },
  {
    id: 'call-green-lisbon-2026',
    title: 'Youth Worker Training: Eco-Action Youth in Lisbon',
    projectAcronym: 'EAY-2026',
    dates: '04 to 11 October 2026',
    location: 'Lisbon, Portugal',
    country: 'Portugal',
    eligibleAges: '18+ (no upper age limit)',
    placesAvailable: 3,
    deadline: '20 June 2026',
    financialConditions:
      'Travel grant reimbursement, shared accommodation, and full meals covered under Erasmus+.',
    description:
      'Intensive 7-day training in Portugal for youth leaders, community volunteers, and project coordinators committed to environmental transition.',
    profile: [
      'Youth workers, educators, community volunteers, or students in social mediation',
      'Demonstrated interest in climate action and popular education',
      'Commitment to lead follow-up workshops in your community upon return',
    ],
  },
];

export const FORMATION_DA1_INFO = {
  badgeFr: 'Inscriptions clôture proche',
  badgeEn: 'Registrations closing soon',
  titleFr: 'Les inscriptions se terminent bientôt !',
  titleEn: 'Registrations are closing soon!',
  subtitleFr:
    'Si ton enfant a parfois du mal à mémoriser, s’organiser, rester efficace dans ses apprentissages ou manque de confiance en lui, cette formation peut lui apporter des outils concrets pour avancer autrement.',
  subtitleEn:
    'If your child sometimes struggles with memorising, getting organized, staying effective in their learning, or lacks self-confidence, this training can provide tangible tools to progress differently.',
  durationFr: 'Pendant 3 mois, nous allons travailler ensemble sur :',
  durationEn: 'Over 3 months, we will work together on:',
  modules: [
    {
      icon: '📖',
      titleFr: 'la lecture rapide',
      titleEn: 'speed reading',
      descFr: 'Stratégies visuelles, fluidité et compréhension immédiate',
      descEn: 'Visual strategies, fluency, and immediate comprehension',
    },
    {
      icon: '🧠',
      titleFr: 'la mémorisation autrement',
      titleEn: 'memorisation done differently',
      descFr: 'Méthodes mnémotechniques adaptées, ancrage durable',
      descEn: 'Adapted mnemonic methods, long-lasting recall',
    },
    {
      icon: '🗺️',
      titleFr: 'le Mind Mapping',
      titleEn: 'Mind Mapping',
      descFr: 'Schémas visuels stimulants, synthèse claire et structurée',
      descEn: 'Engaging visual diagrams, clear and structured synthesis',
    },
    {
      icon: '💪',
      titleFr: 'la confiance en soi',
      titleEn: 'self-confidence',
      descFr: 'Dédramatisation de l’erreur, posture positive et fierté',
      descEn: 'Overcoming fear of mistakes, positive mindset and pride',
    },
    {
      icon: '🎯',
      titleFr: 'l’autonomie',
      titleEn: 'autonomy',
      descFr: 'Organisation méthodique, gestion du temps et régularité',
      descEn: 'Methodical organisation, time management and consistency',
    },
  ],
  deadlineFr: 'La rentrée est le 28 septembre et il reste encore quelques places.',
  deadlineEn: 'The start date is September 28th and a few spots are still available.',
  ctaNoteFr: 'Si tu souhaites en savoir plus ou échanger sur les besoins de ton enfant, écris-moi en privé.',
  ctaNoteEn: 'If you would like to know more or discuss your child’s needs, message me privately.',
  image: ASSET_IMAGES.da1,
};

export const FORMATION_DA2_INFO = {
  urgentCountdownFr: 'Il reste seulement 2 jours avant la fin des inscriptions pour la formation de 3 mois !',
  urgentCountdownEn: 'Only 2 days left before registration closes for the 3-month training!',
  titleFr: 'Méthodes d’apprentissage & confiance en soi',
  titleEn: 'Learning Methods & Self-Confidence',
  formatFr: 'Une formation 100 % en ligne, à partir de 12 ans',
  formatEn: 'A 100% online training, from 12 years old',
  startDateFr: 'Début prévu le 30 septembre à 18h',
  startDateEn: 'Scheduled start: September 30 at 6:00 PM',
  paceFr: '1h30 par semaine • Petit groupe',
  paceEn: '1h30 per week • Small group',
  pitchFr: 'Si tu souhaites que ton enfant apprenne à mieux apprendre et avec plus de confiance, c’est le moment de me contacter.',
  pitchEn: 'If you want your child to learn how to learn better and with more confidence, now is the time to get in touch.',
  bulletsFr: [
    'lire plus rapidement',
    'mémoriser autrement',
    'utiliser le Mind Mapping',
    'développer sa confiance en soi',
    'gagner en autonomie',
  ],
  bulletsEn: [
    'read faster',
    'memorise differently',
    'use Mind Mapping',
    'develop self-confidence',
    'gain autonomy',
  ],
  registrationModeFr: 'Inscription sur rendez-vous téléphonique',
  registrationModeEn: 'Registration upon telephone appointment',
  placesNoteFr: 'Il reste quelques places.',
  placesNoteEn: 'A few spots remaining.',
  contactCtaFr: 'N’hésite pas à m’écrire en privé pour avoir les informations',
  contactCtaEn: 'Feel free to message me privately for information',
  phone: '0033629240981',
  phoneFormatted: '06 29 24 09 81',
  whatsappUrl: 'https://wa.me/33629240981?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20formation%20de%203%20mois',
  image: ASSET_IMAGES.da2,
};

export const FORMATION_DA3_INFO = {
  titleFr: 'Apprendre l’arabe avec bienveillance et lire le Coran plus facilement',
  titleEn: 'Learn Arabic with Kindness and Read the Quran More Easily',
  subtitleFr: 'J’ouvre les inscriptions pour mes cours en ligne, adaptés au niveau et au rythme de chacun.',
  subtitleEn: 'Registrations are open for my online courses, adapted to everyone’s level and pace.',
  target1: {
    audienceFr: 'Pour les femmes adultes',
    audienceEn: 'For adult women',
    icon: '👩',
    tracks: [
      {
        badgeFr: 'Session intensive — 3 mois',
        badgeEn: 'Intensive session — 3 months',
        paceFr: '4 fois par semaine — 1h',
        paceEn: '4 times per week — 1h',
        bulletsFr: [
          'Parcours débutante : apprendre l’arabe et apprendre à lire le Coran',
          'Parcours intermédiaire : consolider sa lecture et gagner en fluidité',
        ],
        bulletsEn: [
          'Beginner track: learn Arabic and learn to read the Quran',
          'Intermediate track: consolidate reading and gain fluency',
        ],
      },
      {
        badgeFr: 'Cours à l’année — d’octobre à juin',
        badgeEn: 'Year-round courses — October to June',
        paceFr: '2 fois par semaine — 1h et 1h30',
        paceEn: '2 times per week — 1h and 1h30',
        bulletsFr: [
          'Pour apprendre ou consolider les bases avec un accompagnement régulier et progressif.',
        ],
        bulletsEn: [
          'To learn or reinforce foundations with regular, progressive guidance.',
        ],
      },
    ],
  },
  target2: {
    audienceFr: 'Pour les enfants & adolescents à partir de 7 ans',
    audienceEn: 'For children & teenagers from 7 years old',
    icon: '👧🧑',
    tracks: [
      {
        badgeFr: 'Parcours intensif — 3 mois',
        badgeEn: 'Intensive track — 3 months',
        paceFr: '4 fois par semaine — 1h',
        paceEn: '4 times per week — 1h',
        bulletsFr: [
          'Un parcours conçu pour progresser rapidement et de manière structurée.',
          'Apprentissage de la lecture arabe, consolidation des bases et lecture du Coran.',
          'Activités adaptées à l’âge pour apprendre de manière ludique et progressive.',
        ],
        bulletsEn: [
          'A track designed to progress quickly and in a structured manner.',
          'Learning Arabic reading, consolidating foundations and Quran reading.',
          'Age-appropriate activities to learn playfully and progressively.',
        ],
      },
      {
        badgeFr: 'Parcours 6 mois',
        badgeEn: '6-month track',
        paceFr: '2 fois par semaine — 1h et 1h30',
        paceEn: '2 times per week — 1h and 1h30',
        bulletsFr: [
          'Apprendre l’arabe, consolider les acquis et améliorer progressivement la fluidité.',
        ],
        bulletsEn: [
          'Learn Arabic, reinforce skills, and progressively improve fluency.',
        ],
      },
      {
        badgeFr: 'Parcours à l’année — d’octobre à juin',
        badgeEn: 'Year-round track — October to June',
        paceFr: '2 fois par semaine — 1h et 1h30',
        paceEn: '2 times per week — 1h and 1h30',
        bulletsFr: [
          'Un accompagnement régulier et progressif, adapté à l’âge et au niveau de l’enfant.',
        ],
        bulletsEn: [
          'Regular and progressive guidance, tailored to the child’s age and level.',
        ],
      },
    ],
  },
  goalFr: 'L’objectif de ces parcours : apprendre l’arabe avec bienveillance, consolider les acquis et pouvoir lire le Coran plus facilement.',
  goalEn: 'The goal of these tracks: learn Arabic with kindness, consolidate knowledge, and read the Quran more easily.',
  contactCtaFr: 'Si vous souhaitez connaître les modalités ou savoir quel parcours correspond le mieux à votre situation, contactez moi par sms au 0629240981',
  contactCtaEn: 'If you wish to know the terms or find out which track best fits your situation, contact me by SMS at 0629240981',
  phone: '0629240981',
  phoneInternational: '0033629240981',
  smsUrl: 'sms:0629240981',
  whatsappUrl: 'https://wa.me/33629240981?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20les%20cours%20d%27arabe%20et%20lecture%20du%20Coran',
  image: ASSET_IMAGES.da3,
};

export const FORMATION_DA4_INFO = {
  titleFr: 'Formation de 3 mois pour les jeunes à partir de 12 ans',
  titleEn: '3-Month Training for Youth from 12 Years Old',
  subtitleFr:
    'Une formation 100 % en ligne pour aider les jeunes à mieux comprendre leur façon d’apprendre, mémoriser efficacement et gagner en autonomie.',
  subtitleEn:
    'A 100% online training to help young people better understand how they learn, memorise effectively, and gain autonomy.',
  programPointsFr: [
    'Lire plus rapidement et retenir l’essentiel',
    'Mémoriser efficacement',
    'Structurer ses cours avec le Mind Mapping',
    'Reprendre confiance en ses capacités',
    'Développer ses propres stratégies d’apprentissage',
  ],
  programPointsEn: [
    'Read faster and retain the essentials',
    'Memorise effectively',
    'Structure school courses with Mind Mapping',
    'Regain confidence in one’s abilities',
    'Develop personal learning strategies',
  ],
  formatFr: '1h30 par semaine, en petit groupe, pendant 3 mois.',
  formatEn: '1h30 per week, in small groups, for 3 months.',
  startDateFr: 'Début : 28 septembre 2026',
  startDateEn: 'Start: September 28, 2026',
  brainPedagogyFr: 'Une approche qui respecte le fonctionnement du cerveau et le rythme de chaque jeune.',
  brainPedagogyEn: 'An approach that respects brain functioning and each youth’s rhythm.',
  placesNoteFr: 'Les places sont limitées. Inscription sur rendez-vous téléphonique.',
  placesNoteEn: 'Spots are limited. Registration upon telephone appointment.',
  contactCtaFr: 'N’hésitez pas à me contacter au 0629240981 pour plus d’informations.',
  contactCtaEn: 'Do not hesitate to contact me at 0629240981 for further information.',
  phone: '0629240981',
  phoneInternational: '0033629240981',
  smsUrl: 'sms:0629240981',
  whatsappUrl: 'https://wa.me/33629240981?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20formation%20de%203%20mois',
  image: ASSET_IMAGES.da4,
};

export const OPEN_CALLS = OPEN_CALLS_FR;

export const AGENDA_EVENTS_FR: AgendaEvent[] = [
  {
    id: 'evt-formation-da1',
    title: 'Formation Enfants & Ados : Apprendre Autrement, Mémorisation & Confiance (3 mois)',
    type: 'atelier',
    typeLabel: 'Formation Pédagogique (3 mois)',
    date: '28 Septembre 2026',
    month: '2026-09',
    dayNumber: '28',
    monthLabel: 'Septembre',
    time: 'Rentrée le 28 septembre · Cycle de 3 mois',
    place: 'Sans Limite — Ateliers & En ligne',
    address: 'Vitry-sur-Seine & Accessible en ligne',
    price: 'Quelques places restantes · Écris-moi en privé',
    accessibility: 'Adapté aux profils atypiques (DYS, TDAH, manque de méthode, perte de confiance)',
    shortDesc:
      'Les inscriptions se terminent bientôt ! Si ton enfant a parfois du mal à mémoriser, s’organiser, rester efficace dans ses apprentissages ou manque de confiance en lui, cette formation peut lui apporter des outils concrets pour avancer autrement.',
    fullDesc:
      'Les inscriptions se terminent bientôt !\n\nSi ton enfant a parfois du mal à mémoriser, s’organiser, rester efficace dans ses apprentissages ou manque de confiance en lui, cette formation peut lui apporter des outils concrets pour avancer autrement.\n\nPendant 3 mois, nous allons travailler ensemble sur :\n📖 la lecture rapide\n🧠 la mémorisation autrement\n🗺️ le Mind Mapping\n💪 la confiance en soi\n🎯 l’autonomie\n\nLa rentrée est le 28 septembre et il reste encore quelques places.\n\nSi tu souhaites en savoir plus ou échanger sur les besoins de ton enfant, écris-moi en privé.',
    programme: [
      '📖 Axe 1 : La lecture rapide (fluidité de déchiffrage et balayage visuel)',
      '🧠 Axe 2 : La mémorisation autrement (mnémotechnique et ancrage durable)',
      '🗺️ Axe 3 : Le Mind Mapping (schémas visuels stimulants et synthèses claires)',
      '💪 Axe 4 : La confiance en soi (dédramatisation de l’erreur et dépassement des blocages)',
      '🎯 Axe 5 : L’autonomie (organisation du travail personnel et régularité)',
      '📩 Inscription : contact en privé ou SMS au 0629240981',
    ],
    image: ASSET_IMAGES.da1,
    availablePlaces: 4,
  },
  {
    id: 'evt-formation-da3',
    title: 'Cours en ligne : Apprendre l’arabe avec bienveillance & lire le Coran plus facilement',
    type: 'atelier',
    typeLabel: 'Cours en ligne (Femmes & Enfants dès 7 ans)',
    date: '01 Octobre 2026',
    month: '2026-10',
    dayNumber: '01',
    monthLabel: 'Octobre',
    time: 'Inscriptions ouvertes · Rentrée début octobre (D’octobre à juin ou sessions 3 et 6 mois)',
    place: '100 % en ligne (visioconférence en direct adaptée au rythme de chacun)',
    address: 'Accessible depuis toute la France & Europe (en ligne)',
    price: 'Modalités & tarifs par SMS au 0629240981',
    accessibility: 'Femmes adultes & Enfants/Adolescents à partir de 7 ans · Tous niveaux',
    shortDesc:
      'Apprendre l’arabe avec bienveillance et lire le Coran plus facilement. Cours en ligne adaptés au niveau et au rythme de chacun pour femmes adultes et enfants/adolescents dès 7 ans.',
    fullDesc:
      'Apprendre l’arabe avec bienveillance et lire le Coran plus facilement\n\nJ’ouvre les inscriptions pour mes cours en ligne, adaptés au niveau et au rythme de chacun.\n\n👩 Pour les femmes adultes\n\n🌱 Session intensive — 3 mois\n* 4 fois par semaine — 1h\n* Parcours débutante : apprendre l’arabe et apprendre à lire le Coran\n* Parcours intermédiaire : consolider sa lecture et gagner en fluidité\n\n📚 Cours à l’année — d’octobre à juin\n* 2 fois par semaine — 1h et 1h30\n* Pour apprendre ou consolider les bases avec un accompagnement régulier et progressif.\n\n👧🧑 Pour les enfants & adolescents à partir de 7 ans\n\n⚡ Parcours intensif — 3 mois\n* 4 fois par semaine — 1h\n* Un parcours conçu pour progresser rapidement et de manière structurée.\n* Apprentissage de la lecture arabe, consolidation des bases et lecture du Coran.\n* Activités adaptées à l’âge pour apprendre de manière ludique et progressive.\n\n📖 Parcours 6 mois\n* 2 fois par semaine — 1h et 1h30\n* Apprendre l’arabe, consolider les acquis et améliorer progressivement la fluidité.\n\n📚 Parcours à l’année — d’octobre à juin\n* 2 fois par semaine — 1h et 1h30\n* Un accompagnement régulier et progressif, adapté à l’âge et au niveau de l’enfant.\n\n🎯 L’objectif de ces parcours : apprendre l’arabe avec bienveillance, consolider les acquis et pouvoir lire le Coran plus facilement.\n\n📩 Si vous souhaitez connaître les modalités ou savoir quel parcours correspond le mieux à votre situation, contactez moi par sms au 0629240981',
    programme: [
      '👩 Femmes adultes — Session intensive 3 mois (4x/semaine 1h) : parcours débutante et intermédiaire',
      '👩 Femmes adultes — Cours à l’année (octobre à juin, 2x/semaine) : accompagnement régulier et progressif',
      '👧🧑 Enfants & Ados dès 7 ans — Parcours intensif 3 mois (4x/semaine 1h) : apprentissage structuré et ludique',
      '👧🧑 Enfants & Ados dès 7 ans — Parcours 6 mois (2x/semaine 1h et 1h30) : consolidation et fluidité',
      '👧🧑 Enfants & Ados dès 7 ans — Parcours à l’année (octobre à juin, 2x/semaine 1h et 1h30) : progression suivie',
      '📩 Contact direct par SMS : 0629240981',
    ],
    image: ASSET_IMAGES.da3,
    availablePlaces: 6,
  },
  {
    id: 'evt-formation-da4',
    title: 'Formation de 3 mois pour les jeunes à partir de 12 ans (100 % en ligne)',
    type: 'atelier',
    typeLabel: 'Formation 100% en ligne (Dès 12 ans)',
    date: '28 Septembre 2026',
    month: '2026-09',
    dayNumber: '28',
    monthLabel: 'Septembre',
    time: 'Début : 28 septembre 2026 · 1h30 par semaine, en petit groupe, pendant 3 mois',
    place: '100 % en ligne (visioconférence interactive)',
    address: 'Accessible depuis toute la France & Europe (en ligne)',
    price: 'Places limitées · Inscription sur RDV téléphonique (0629240981)',
    accessibility: 'Jeunes dès 12 ans · Approche respectueuse du cerveau et du rythme de chacun',
    shortDesc:
      'Une formation 100 % en ligne pour aider les jeunes à mieux comprendre leur façon d’apprendre, mémoriser efficacement et gagner en autonomie.',
    fullDesc:
      'Formation de 3 mois pour les jeunes à partir de 12 ans\n\nUne formation 100 % en ligne pour aider les jeunes à mieux comprendre leur façon d’apprendre, mémoriser efficacement et gagner en autonomie.\n\nAu programme :\n• Lire plus rapidement et retenir l’essentiel\n• Mémoriser efficacement\n• Structurer ses cours avec le Mind Mapping\n• Reprendre confiance en ses capacités\n• Développer ses propres stratégies d’apprentissage\n\n1h30 par semaine, en petit groupe, pendant 3 mois.\n\nDébut : 28 septembre 2026\n\nUne approche qui respecte le fonctionnement du cerveau et le rythme de chaque jeune.\n\nLes places sont limitées. Inscription sur rendez-vous téléphonique.\n\nN’hésitez pas à me contacter au 0629240981 pour plus d’informations.',
    programme: [
      '• Lire plus rapidement et retenir l’essentiel',
      '• Mémoriser efficacement',
      '• Structurer ses cours avec le Mind Mapping',
      '• Reprendre confiance en ses capacités',
      '• Développer ses propres stratégies d’apprentissage',
      '⏰ Format : 1h30 par semaine, en petit groupe, pendant 3 mois',
      '🗓️ Début : 28 septembre 2026',
      '🧠 Une approche qui respecte le fonctionnement du cerveau et le rythme de chaque jeune',
      '📞 Places limitées · Inscription sur rendez-vous téléphonique : 0629240981',
    ],
    image: ASSET_IMAGES.da4,
    availablePlaces: 4,
  },
  {
    id: 'evt-formation-da2',
    title: 'Formation 100 % en ligne : Méthodes d’apprentissage & confiance en soi (3 mois)',
    type: 'atelier',
    typeLabel: 'Formation 100% en ligne (Dès 12 ans)',
    date: '30 Septembre 2026',
    month: '2026-09',
    dayNumber: '30',
    monthLabel: 'Septembre',
    time: 'Début le 30 septembre à 18h · 1h30 par semaine (Petit groupe)',
    place: '100 % en ligne (visioconférence interactive)',
    address: 'Accessible depuis toute la France & Europe (en ligne)',
    price: 'Il reste quelques places · Inscription sur RDV tél. (0033629240981)',
    accessibility: 'Adapté dès 12 ans, profils atypiques (DYS, TDAH, méthode de travail)',
    shortDesc:
      'Il reste seulement 2 jours avant la fin des inscriptions ! Une formation 100 % en ligne, à partir de 12 ans, pour apprendre à lire plus rapidement, mémoriser autrement, utiliser le Mind Mapping, développer la confiance et gagner en autonomie.',
    fullDesc:
      'Il reste seulement 2 jours avant la fin des inscriptions pour la formation de 3 mois !\n\n📚 Méthodes d’apprentissage & confiance en soi\nUne formation 100 % en ligne, à partir de 12 ans, pour apprendre à :\n* lire plus rapidement\n* mémoriser autrement\n* utiliser le Mind Mapping\n* développer sa confiance en soi\n* gagner en autonomie\n\n🗓️ Début prévu le 30 septembre à 18h\n⏰ 1h30 par semaine • Petit groupe\n\nSi tu souhaites que ton enfant apprenne à mieux apprendre et avec plus de confiance, c’est le moment de me contacter.\n\n📞 Inscription sur rendez-vous téléphonique\nIl reste quelques places.\n\nN’hésite pas à m’écrire en privé pour avoir les informations 0033629240981.',
    programme: [
      '⚡ Urgence : Il reste seulement 2 jours avant la fin des inscriptions !',
      '📖 Axe 1 : Lire plus rapidement et retenir l’essentiel',
      '🧠 Axe 2 : Mémoriser efficacement (respect du fonctionnement du cerveau)',
      '🗺️ Axe 3 : Structurer ses cours avec le Mind Mapping',
      '💪 Axe 4 : Reprendre confiance en ses capacités',
      '🎯 Axe 5 : Développer ses propres stratégies d’apprentissage & autonomie',
      '📞 Modalité : 1h30 par semaine en petit groupe • Inscription sur RDV tél. (0629240981)',
    ],
    image: ASSET_IMAGES.da2,
    availablePlaces: 3,
  },
  {
    id: 'evt-1',
    title: 'Atelier Prise de Parole & Éloquence Citoyenne',
    type: 'atelier',
    typeLabel: 'Atelier Jeunesse',
    date: '14 Octobre 2026',
    month: '2026-10',
    dayNumber: '14',
    monthLabel: 'Octobre',
    time: '18h30 - 20h30',
    place: 'Maison de la Jeunesse et des Associations, Vitry',
    address: 'Place Jean Martin, 94490 Vitry-sur-Seine',
    price: 'Gratuit (Adhésion bienvenue)',
    accessibility: 'Accessible PMR, transports en commun (RER C Vitry)',
    shortDesc: 'Découvrez les techniques du pitch impactant et de la posture pour vous exprimer avec force et sérénité.',
    fullDesc:
      'Un atelier pratique et bienveillant animé par notre équipe pour apprendre à structurer vos idées, gérer votre respiration et captiver votre auditoire. Idéal avant un entretien d’embauche, un examen ou pour défendre une cause qui vous tient à cœur.',
    programme: [
      '18h30 : Accueil et mise en énergie collective',
      '18h50 : Exercices de voix, diction et ancrage corporel',
      '19h30 : Mini-discours improvisés et feedbacks constructifs',
      '20h15 : Débriefing et moment convivial',
    ],
    availablePlaces: 12,
  },
  {
    id: 'evt-2',
    title: 'Soirée Info & Apéro Erasmus+ : Partez en Europe !',
    type: 'conference',
    typeLabel: 'Réunion d’information',
    date: '28 Octobre 2026',
    month: '2026-10',
    dayNumber: '28',
    monthLabel: 'Octobre',
    time: '19h00 - 21h00',
    place: 'Espace Tiers-Lieu Sans Limite, Paris',
    address: 'Vitry / Paris Sud',
    price: 'Entrée libre',
    accessibility: 'Accessible à tous sans condition',
    shortDesc: 'Tout comprendre sur les bourses, les échanges de jeunes et les mobilités européennes entièrement financées.',
    fullDesc:
      'Vous avez entre 13 et 30 ans et rêvez de voyager, de pratiquer une autre langue et de rencontrer des jeunes de toute l’Europe sans dépenser un centime ? Venez poser toutes vos questions ! Témoignages d’anciens participants et conseils pour candidater.',
    programme: [
      '19h00 : Introduction : Le programme Erasmus+ Jeunesse en pratique',
      '19h30 : Récits et photos d’échanges de jeunes en Espagne et en Italie',
      '20h00 : Session questions/réponses sans tabou',
      '20h30 : Apéro interculturel offert',
    ],
    availablePlaces: 35,
  },
  {
    id: 'evt-3',
    title: 'Repair Café & Atelier Zéro Déchet de Quartier',
    type: 'atelier',
    typeLabel: 'Atelier Écologie',
    date: '07 Novembre 2026',
    month: '2026-11',
    dayNumber: '07',
    monthLabel: 'Novembre',
    time: '14h00 - 18h00',
    place: 'Jardin Partagé des Solidarités',
    address: 'Rue de la Concorde, 94490 Vitry-sur-Seine',
    price: 'Gratuit · Prix libre pour les pièces',
    accessibility: 'Plein air avec abri, de plain-pied',
    shortDesc: 'Ne jetez plus vos objets en panne : apprenez à les réparer ensemble autour d’un bon café chaud.',
    fullDesc:
      'Nos bénévoles bricoleurs vous aident à diagnostiquer et remettre en état vos appareils ménagers, lampes, jouets ou vélos. En parallèle, repartez avec votre propre lessive écologique maison fabriquée sur place.',
    programme: [
      '14h00 - 17h30 : Diagnostic et réparation collaborative',
      '15h00 & 16h30 : Démonstrations fabrication produits ménagers DIY',
      '17h30 : Goûter partagé',
    ],
    availablePlaces: 20,
  },
  {
    id: 'evt-4',
    title: 'Fête de la Fraternité & Concert Interculturel',
    type: 'culturel',
    typeLabel: 'Événement Culturel',
    date: '21 Novembre 2026',
    month: '2026-11',
    dayNumber: '21',
    monthLabel: 'Novembre',
    time: '16h00 - 22h00',
    place: 'Salle des Fêtes Municipale',
    address: 'Vitry-sur-Seine Centre',
    price: 'Entrée libre et solidaire',
    accessibility: 'Accessible PMR, boucle magnétique',
    shortDesc: 'Musiques du monde, danses traditionnelles, buffet solidaire et grande exposition photo des projets Sans Limite.',
    fullDesc:
      'Un grand moment de célébration intergénérationnelle ouvert à tous les habitants de la ville. Venez vibrer au son d’artistes locaux et internationaux.',
    programme: [
      '16h00 : Vernissage de l’exposition photo "Sans Limite en Mouvement"',
      '17h30 : Scène ouverte des jeunes talents du quartier',
      '19h30 : Buffet des saveurs du monde',
      '20h30 : Concert live du collectif Méditerranée Sans Frontières',
    ],
    availablePlaces: 120,
  },
];

export const AGENDA_EVENTS_EN: AgendaEvent[] = [
  {
    id: 'evt-formation-da1',
    title: 'Youth Training: Learning Differently, Memorisation & Self-Confidence (3 Months)',
    type: 'atelier',
    typeLabel: 'Pedagogical Training (3 months)',
    date: '28 September 2026',
    month: '2026-09',
    dayNumber: '28',
    monthLabel: 'September',
    time: 'Starting September 28th · 3-Month Cycle',
    place: 'Sans Limite — Workshops & Online',
    address: 'Vitry-sur-Seine & Accessible Online',
    price: 'Few spots remaining · Message privately',
    accessibility: 'Tailored for diverse learning profiles (DYS, ADHD, study methods)',
    shortDesc:
      'Registrations are closing soon! If your child sometimes struggles with memorising, getting organized, staying effective in their learning, or lacks self-confidence, this training can provide tangible tools to progress differently.',
    fullDesc:
      'Registrations are closing soon!\n\nIf your child sometimes struggles with memorising, getting organized, staying effective in their learning, or lacks self-confidence, this training can provide tangible tools to progress differently.\n\nOver 3 months, we will work together on:\n📖 Speed reading\n🧠 Memorisation done differently\n🗺️ Mind Mapping\n💪 Self-confidence\n🎯 Autonomy\n\nThe start date is September 28th and a few spots are still available.\n\nIf you would like to know more or discuss your child’s needs, message me privately.',
    programme: [
      '📖 Pillar 1: Speed Reading (visual scanning & decoding fluency)',
      '🧠 Pillar 2: Memorisation Done Differently (mnemonics & long-term retention)',
      '🗺️ Pillar 3: Mind Mapping (engaging visual maps & clear syntheses)',
      '💪 Pillar 4: Self-Confidence (unblocking mindset & managing stress)',
      '🎯 Pillar 5: Autonomy (independent routines & study planning)',
      '📩 Registration: Private message or SMS to 0629240981',
    ],
    image: ASSET_IMAGES.da1,
    availablePlaces: 4,
  },
  {
    id: 'evt-formation-da3',
    title: 'Online Courses: Learn Arabic with Kindness & Read the Quran More Easily',
    type: 'atelier',
    typeLabel: 'Online Course (Women & Kids 7+)',
    date: '01 October 2026',
    month: '2026-10',
    dayNumber: '01',
    monthLabel: 'October',
    time: 'Registrations Open · Start early October (Full-year or 3 & 6-month sessions)',
    place: '100% Online (Interactive live sessions tailored to each student)',
    address: 'Accessible across France & Europe (Online)',
    price: 'Details & terms via SMS to 0629240981',
    accessibility: 'Adult women & Kids/Teens from 7 years old · All levels',
    shortDesc:
      'Learn Arabic with kindness and read the Quran more easily. Online courses tailored to everyone’s level and pace for adult women and children/teens from 7 years old.',
    fullDesc:
      'Learn Arabic with kindness and read the Quran more easily\n\nRegistrations are open for my online courses, adapted to everyone’s level and pace.\n\n👩 For adult women\n\n🌱 Intensive session — 3 months\n* 4 times per week — 1h\n* Beginner track: learn Arabic and learn to read the Quran\n* Intermediate track: consolidate reading and gain fluency\n\n📚 Year-round course — October to June\n* 2 times per week — 1h and 1h30\n* To learn or reinforce foundations with regular and progressive guidance.\n\n👧🧑 For children & teenagers from 7 years old\n\n⚡ Intensive track — 3 months\n* 4 times per week — 1h\n* A track designed to progress quickly and in a structured manner.\n* Learning Arabic reading, consolidating foundations and Quran reading.\n* Age-appropriate activities to learn playfully and progressively.\n\n📖 6-month track\n* 2 times per week — 1h and 1h30\n* Learn Arabic, consolidate skills and progressively improve fluency.\n\n📚 Year-round track — October to June\n* 2 times per week — 1h and 1h30\n* Regular and progressive guidance tailored to the child’s age and level.\n\n🎯 The goal of these tracks: learn Arabic with kindness, consolidate knowledge, and read the Quran more easily.\n\n📩 If you wish to know the terms or find out which track best fits your situation, contact me by SMS at 0629240981.',
    programme: [
      '👩 Adult Women — 3-Month Intensive Session (4x/wk 1h): beginner and intermediate tracks',
      '👩 Adult Women — Year-round Course (Oct to June, 2x/wk): progressive and steady mentoring',
      '👧🧑 Kids & Teens 7+ — 3-Month Intensive Track (4x/wk 1h): structured, playful progress',
      '👧🧑 Kids & Teens 7+ — 6-Month Track (2x/wk 1h & 1h30): skill reinforcement & reading flow',
      '👧🧑 Kids & Teens 7+ — Year-round Track (Oct to June, 2x/wk): long-term consistency',
      '📩 Direct SMS Contact: 0629240981',
    ],
    image: ASSET_IMAGES.da3,
    availablePlaces: 6,
  },
  {
    id: 'evt-formation-da4',
    title: '3-Month Training for Youth from 12 Years Old (100% Online)',
    type: 'atelier',
    typeLabel: '100% Online Training (Ages 12+)',
    date: '28 September 2026',
    month: '2026-09',
    dayNumber: '28',
    monthLabel: 'September',
    time: 'Start: September 28, 2026 · 1h30 per week, small group, 3 months',
    place: '100% Online (Interactive video sessions)',
    address: 'Accessible across France & Europe (Online)',
    price: 'Limited spots · Registration by phone appointment (0629240981)',
    accessibility: 'Ages 12+ · Brain-friendly learning approach respecting each youth’s pace',
    shortDesc:
      'A 100% online training to help young people better understand how they learn, memorise effectively, and gain autonomy.',
    fullDesc:
      '3-Month Training for Youth from 12 Years Old\n\nA 100% online training to help young people better understand how they learn, memorise effectively, and gain autonomy.\n\nCurriculum:\n• Read faster and retain the essentials\n• Memorise effectively\n• Structure courses with Mind Mapping\n• Regain confidence in one’s abilities\n• Develop personal learning strategies\n\n1h30 per week, in small groups, for 3 months.\n\nStart: September 28, 2026\n\nAn approach that respects brain functioning and each youth’s rhythm.\n\nSpots are limited. Registration upon telephone appointment.\n\nDo not hesitate to contact me at 0629240981 for further information.',
    programme: [
      '• Read faster and retain the essentials',
      '• Memorise effectively',
      '• Structure school courses with Mind Mapping',
      '• Regain confidence in one’s abilities',
      '• Develop personal learning strategies',
      '⏰ Format: 1h30 per week, in small groups, for 3 months',
      '🗓️ Start: September 28, 2026',
      '🧠 An approach that respects brain functioning and each youth’s rhythm',
      '📞 Limited spots · Registration upon phone appointment: 0629240981',
    ],
    image: ASSET_IMAGES.da4,
    availablePlaces: 4,
  },
  {
    id: 'evt-formation-da2',
    title: '100% Online Youth Training: Learning Methods & Self-Confidence (3 Months)',
    type: 'atelier',
    typeLabel: '100% Online Training (Ages 12+)',
    date: '30 September 2026',
    month: '2026-09',
    dayNumber: '30',
    monthLabel: 'September',
    time: 'Starting September 30 at 6:00 PM · 1h30 per week (Small group)',
    place: '100% Online (Interactive video session)',
    address: 'Accessible across France & Europe (Online)',
    price: 'Few spots remaining · Registration by phone (0033629240981)',
    accessibility: 'Tailored for ages 12+, diverse learning profiles (DYS, ADHD, study methods)',
    shortDesc:
      'Only 2 days left before registration closes for the 3-month training! A 100% online training, from 12 years old, to read faster, memorise differently, use Mind Mapping, develop self-confidence and gain autonomy.',
    fullDesc:
      'Only 2 days left before registration closes for the 3-month training!\n\n📚 Learning Methods & Self-Confidence\nA 100% online training, from 12 years old, to learn how to:\n* read faster\n* memorise differently\n* use Mind Mapping\n* develop self-confidence\n* gain autonomy\n\n🗓️ Scheduled start: September 30 at 6:00 PM\n⏰ 1h30 per week • Small group\n\nIf you want your child to learn how to learn better and with more confidence, now is the time to reach out.\n\n📞 Registration upon telephone appointment\nA few spots remaining.\n\nFeel free to message me privately for information: 0033629240981.',
    programme: [
      '⚡ Urgency: Only 2 days left before registration closes!',
      '📖 Pillar 1: Read faster (visual scanning, decoding fluency, and immediate comprehension)',
      '🧠 Pillar 2: Memorise differently (visual, kinaesthetic, and auditory mnemonics)',
      '🗺️ Pillar 3: Use Mind Mapping (dynamic visual maps to revise with clarity and joy)',
      '💪 Pillar 4: Develop self-confidence (unblocking mindset, stress management for school exams)',
      '🎯 Pillar 5: Gain autonomy (homework routines, independent study, and time planning)',
      '📞 Format: 1h30 per week in small groups • Registration by phone appointment (0629240981)',
    ],
    image: ASSET_IMAGES.da2,
    availablePlaces: 3,
  },
  {
    id: 'evt-1',
    title: 'Public Speaking & Civic Eloquence Workshop',
    type: 'atelier',
    typeLabel: 'Youth Workshop',
    date: '14 October 2026',
    month: '2026-10',
    dayNumber: '14',
    monthLabel: 'October',
    time: '06:30 PM - 08:30 PM',
    place: 'House of Youth and Non-Profits, Vitry',
    address: 'Place Jean Martin, 94490 Vitry-sur-Seine',
    price: 'Free (Membership welcome)',
    accessibility: 'Wheelchair accessible, public transit (RER C Vitry)',
    shortDesc: 'Discover high-impact pitching and body language techniques to speak with power and composure.',
    fullDesc:
      'A practical and encouraging workshop led by our facilitators to help you structure ideas, regulate breathing, and captivate your audience. Ideal before job interviews, exams, or advocating for a community cause.',
    programme: [
      '06:30 PM: Welcome and collective warmup',
      '06:50 PM: Voice, diction, and postural presence exercises',
      '07:30 PM: Impromptu mini-pitches and constructive peer feedback',
      '08:15 PM: Debriefing and informal networking',
    ],
    availablePlaces: 12,
  },
  {
    id: 'evt-2',
    title: 'Erasmus+ Info Night & Intercultural Social: Travel Europe!',
    type: 'conference',
    typeLabel: 'Information Session',
    date: '28 October 2026',
    month: '2026-10',
    dayNumber: '28',
    monthLabel: 'October',
    time: '07:00 PM - 09:00 PM',
    place: 'Sans Limite Community Hub, Paris',
    address: 'Vitry / Paris South',
    price: 'Free admission',
    accessibility: 'Open to everyone with zero prerequisites',
    shortDesc: 'Everything you need to know about grants, youth exchanges, and 100% funded European travel.',
    fullDesc:
      'Are you between 13 and 30 and dreaming of traveling, practicing another language, and meeting youth from across Europe without spending a penny? Come ask all your questions! Participant testimonials and tips for applying.',
    programme: [
      '07:00 PM: Introduction: The Erasmus+ Youth Programme in practice',
      '07:30 PM: Stories and photos from youth exchanges in Spain and Italy',
      '08:00 PM: Open Q&A session',
      '08:30 PM: Complimentary intercultural refreshments',
    ],
    availablePlaces: 35,
  },
  {
    id: 'evt-3',
    title: 'Community Repair Café & Zero-Waste Workshop',
    type: 'atelier',
    typeLabel: 'Eco-Workshop',
    date: '07 November 2026',
    month: '2026-11',
    dayNumber: '07',
    monthLabel: 'November',
    time: '02:00 PM - 06:00 PM',
    place: 'Community Solidarity Garden',
    address: 'Rue de la Concorde, 94490 Vitry-sur-Seine',
    price: 'Free · Pay-what-you-wish for spare parts',
    accessibility: 'Outdoor covered pavilion, ground-level access',
    shortDesc: "Don't discard broken appliances: learn to fix them together over hot coffee and homemade cake.",
    fullDesc:
      'Our volunteer fixers assist you in diagnosing and repairing appliances, lamps, toys, or bicycles. Meanwhile, take home your own homemade natural eco-detergent crafted on-site.',
    programme: [
      '02:00 PM - 05:30 PM: Collaborative diagnosis and repair',
      '03:00 PM & 04:30 PM: DIY natural cleaning products demos',
      '05:30 PM: Shared community snack',
    ],
    availablePlaces: 20,
  },
  {
    id: 'evt-4',
    title: 'Fraternity Festival & Intercultural Concert',
    type: 'culturel',
    typeLabel: 'Cultural Event',
    date: '21 November 2026',
    month: '2026-11',
    dayNumber: '21',
    monthLabel: 'November',
    time: '04:00 PM - 10:00 PM',
    place: 'Municipal Hall, Vitry',
    address: 'Vitry-sur-Seine Centre',
    price: 'Free admission & solidarity donations',
    accessibility: 'Wheelchair accessible, hearing induction loop',
    shortDesc: 'World music, traditional dances, international food stalls, and a major photo exhibition.',
    fullDesc:
      'A warm intergenerational celebration welcoming all city residents. Experience live music from local and international artists.',
    programme: [
      '04:00 PM: Opening of the photo exhibition "Sans Limite in Motion"',
      '05:30 PM: Open mic for local young talents',
      '07:30 PM: International flavours buffet',
      '08:30 PM: Live concert by the Mediterranean Collective',
    ],
    availablePlaces: 120,
  },
];

export const AGENDA_EVENTS = AGENDA_EVENTS_FR;

export const BLOG_POSTS_FR: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'retour-echange-naples-2026',
    title: 'Retour d’expérience : 8 jeunes de Vitry à Naples pour un échange Erasmus+ mémorable',
    excerpt:
      'Pendant 9 jours, notre délégation a partagé son quotidien avec 30 Européens autour des arts de rue et du dialogue citoyen. Récit d’une aventure humaine transformatrice.',
    content: [
      "Partir pour la première fois à l'étranger sans ses parents, prendre l'avion, s'exprimer dans une autre langue : pour la plupart de nos 8 participants franciliens, cet échange de jeunes en Italie représentait un saut dans l'inconnu.",
      "Dès le premier soir, les appréhensions ont laissé place aux rires et à la complicité. Guidés par les méthodes d'éducation non formelle, les jeunes ont co-créé des fresques murales, enregistré des capsules radiophoniques et débattu des solutions locales face à la précarité des jeunes en Europe.",
      "« J'ai compris que malgré nos langues différentes, nous partageons exactement les mêmes rêves et les mêmes doutes », confie Amine, 19 ans. Grâce au soutien de l'agence Erasmus+ France et de Sans Limite, l'intégralité des frais de voyage, d'hébergement et de repas a été prise en charge, garantissant une mixité sociale totale.",
      "Chaque jeune est reparti avec son certificat Youthpass officiel, véritable atout pour leur parcours scolaire et professionnel. La suite ? Ils préparent déjà l'accueil de leurs camarades italiens à Paris l'été prochain !"
    ],
    date: '28 Septembre 2026',
    author: 'Assia O.',
    authorRole: 'Présidente de Sans Limite',
    category: 'Projets',
    image: ASSET_IMAGES.erasmus,
    readTime: '4 min',
    tags: ['Erasmus+', 'Jeunesse', 'Mobilité', 'Italie'],
  },
  {
    id: 'post-2',
    slug: 'guide-inclusion-numerique-quartiers',
    title: 'Inclusion numérique : comment nous accompagnons 50 seniors et familles chaque mois',
    excerpt:
      'La dématérialisation à outrance fragilise des millions de personnes. À Vitry, nos permanences hebdomadaires prouvent qu’avec patience et pédagogie, personne n’est laissé de côté.',
    content: [
      "Pour beaucoup, déclarer ses revenus en ligne ou demander une aide au logement prend moins de dix minutes. Mais pour Madame H., 72 ans, ou pour Farid, arrivé en France il y a deux ans, un simple écran peut devenir une barrière insurmontable.",
      "Chaque semaine au sein de notre tiers-lieu associatif, nos médiateurs et bénévoles reçoivent sans rendez-vous les habitants en difficulté avec leurs démarches numériques.",
      "Notre approche repose sur un principe clair : nous ne faisons pas 'à la place de', nous guidons pour que la personne acquière les bons réflexes. En quelques mois, ce sont plus de 150 dossiers administratifs finalisés et surtout des dizaines de sourires retrouvés face à l'écran."
    ],
    date: '15 Septembre 2026',
    author: 'Samir L.',
    authorRole: 'Coordinateur des ateliers numériques',
    category: 'Actualités',
    image: ASSET_IMAGES.inclusion,
    readTime: '3 min',
    tags: ['Numérique', 'Solidarité', 'Vitry', 'Inclusion'],
  },
  {
    id: 'post-3',
    slug: 'succes-repair-cafe-vitry',
    title: 'Repair Café de rentrée : 42 appareils sauvés de la poubelle et 150 kg de CO2 évités',
    excerpt:
      'Une après-midi conviviale où le partage de savoirs manuels rime avec économie circulaire et préservation de la planète.',
    content: [
      "Fers à repasser, grille-pains vintage, vélos d'enfants : les établis du jardin partagé n'ont pas désempli ce samedi. Grâce à nos 6 bricoleurs bénévoles, 78 % des objets apportés par les riverains ont retrouvé une seconde vie !",
      "Au-delà du geste écologique et des économies directes pour les ménages, ce Repair Café a été l'occasion d'échanges intergénérationnels chaleureux autour d'un gâteau au chocolat maison.",
      "Rendez-vous est pris le premier samedi de chaque mois pour poursuivre cette belle dynamique citoyenne."
    ],
    date: '02 Septembre 2026',
    author: 'Élodie D.',
    authorRole: 'Responsable Pôle Éco-Citoyenneté',
    category: 'Ateliers',
    image: ASSET_IMAGES.eco,
    readTime: '3 min',
    tags: ['Écologie', 'Zéro Déchet', 'Bénévolat'],
  },
  {
    id: 'post-4',
    slug: 'pourquoi-s-engager-service-civique',
    title: '« Pourquoi j’ai choisi le Service Civique chez Sans Limite » : le témoignage d’Inès',
    excerpt:
      'À 20 ans, Inès a fait le choix de consacrer 8 mois à l’engagement solidaire pour animer des actions de jeunesse et monter des projets européens.',
    content: [
      "« Après mon bac, j'avais besoin de me sentir utile et de sortir du cadre purement théorique des études. J'ai postulé à la mission de Sans Limite et dès mon arrivée, j'ai été responsabilisée avec beaucoup de bienveillance. »",
      "Durant sa mission, Inès a co-organisé des cafés-débats, préparé les dossiers de candidature pour les mobilités Erasmus+ et noué des liens forts avec les jeunes du quartier.",
      "« Cette expérience a complètement confirmé ma volonté de travailler dans l'économie sociale et solidaire. Je recommande à tout le monde de tenter l'aventure ! »"
    ],
    date: '18 Août 2026',
    author: 'Inès V.',
    authorRole: 'Volontaire en Service Civique',
    category: 'Témoignages',
    image: ASSET_IMAGES.hero,
    readTime: '5 min',
    tags: ['Service Civique', 'Jeunesse', 'Témoignage'],
  },
];

export const BLOG_POSTS_EN: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'retour-echange-naples-2026',
    title: 'Field Report: 8 Vitry youth in Naples for an unforgettable Erasmus+ exchange',
    excerpt:
      'For 9 days, our youth delegation shared daily life with 30 Europeans exploring street arts and civic dialogue. The story of a life-changing experience.',
    content: [
      "Traveling abroad for the first time without parents, boarding an airplane, speaking another language: for most of our 8 young participants from the Paris suburbs, this Italian youth exchange was a leap into the unknown.",
      "From the first evening, initial apprehension gave way to laughter and deep bonding. Guided by non-formal education tools, the youth co-created street murals, produced podcast episodes, and debated local solutions to youth insecurity in Europe.",
      "« I realized that despite different languages, we share the exact same dreams and doubts, » shares Amine, 19. Thanks to Erasmus+ funding and Sans Limite, 100% of travel, room, and board costs were covered, ensuring total social diversity.",
      "Every participant returned home with their official Youthpass certificate—a powerful asset for their school and job path. What’s next? They are already preparing to host their Italian peers in Paris next summer!"
    ],
    date: '28 September 2026',
    author: 'Assia O.',
    authorRole: 'President of Sans Limite',
    category: 'Projets',
    image: ASSET_IMAGES.erasmus,
    readTime: '4 min',
    tags: ['Erasmus+', 'Youth', 'Mobility', 'Italy'],
  },
  {
    id: 'post-2',
    slug: 'guide-inclusion-numerique-quartiers',
    title: 'Digital Inclusion: How we support 50 seniors and families each month',
    excerpt:
      'Widespread digitization leaves millions behind. In Vitry, our weekly drop-in hours prove that with patience and care, nobody is left isolated.',
    content: [
      "For many, filing tax returns online or applying for housing aid takes less than ten minutes. But for 72-year-old Mrs. H. or for Farid, who arrived in France two years ago, a simple computer screen can feel like an insurmountable barrier.",
      "Every week at our community hub, our mediators and volunteers welcome residents facing hurdles with their online procedures—no appointment needed.",
      "Our approach is clear: we do not do it 'for' people; we guide them so they gain confidence. Over a few months, more than 150 administrative files were completed, restoring peace of mind to dozens of families."
    ],
    date: '15 September 2026',
    author: 'Samir L.',
    authorRole: 'Digital Workshop Coordinator',
    category: 'Actualités',
    image: ASSET_IMAGES.inclusion,
    readTime: '3 min',
    tags: ['Digital', 'Solidarity', 'Vitry', 'Inclusion'],
  },
  {
    id: 'post-3',
    slug: 'succes-repair-cafe-vitry',
    title: 'Autumn Repair Café: 42 devices saved from landfill and 150 kg of CO2 avoided',
    excerpt:
      'A joyful Saturday afternoon where hands-on DIY skills meet circular economy and environmental stewardship.',
    content: [
      "Steam irons, vintage toasters, children's bikes: workbenches at the community garden were buzzing this Saturday. Thanks to our 6 volunteer fixers, 78% of broken items brought in by neighbours found a second life!",
      "Beyond direct financial savings for households, the Repair Café was an opportunity for warm intergenerational bonding over homemade chocolate cake.",
      "Join us on the first Saturday of each month to keep this community momentum going."
    ],
    date: '02 September 2026',
    author: 'Élodie D.',
    authorRole: 'Eco-Citizenship Lead',
    category: 'Ateliers',
    image: ASSET_IMAGES.eco,
    readTime: '3 min',
    tags: ['Ecology', 'Zero Waste', 'Volunteering'],
  },
  {
    id: 'post-4',
    slug: 'pourquoi-s-engager-service-civique',
    title: "'Why I chose Civic Service at Sans Limite': Inès's testimonial",
    excerpt:
      'At 20, Inès decided to dedicate 8 months to community solidarity, facilitating youth activities and coordinating European projects.',
    content: [
      "« After finishing high school, I wanted to feel useful and step beyond purely theoretical textbooks. I applied for Sans Limite's Civic Service offer, and from day one, I was empowered with immense care. »",
      "Throughout her mission, Inès co-hosted civic debate cafés, prepared candidate files for Erasmus+ mobilities, and built strong ties with neighbourhood youth.",
      "« This experience completely confirmed my desire to work in the social and solidarity economy. I wholeheartedly encourage everyone to take the leap! »"
    ],
    date: '18 August 2026',
    author: 'Inès V.',
    authorRole: 'Civic Service Volunteer',
    category: 'Témoignages',
    image: ASSET_IMAGES.hero,
    readTime: '5 min',
    tags: ['Civic Service', 'Youth', 'Testimonial'],
  },
];

export const BLOG_POSTS = BLOG_POSTS_FR;

export const TEAM_MEMBERS_FR: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Assia O.',
    role: 'Présidente & Fondatrice',
    category: 'bureau',
    bio: 'Passionnée d’éducation populaire et forte de 10 ans d’expérience dans l’animation socioculturelle et les projets Erasmus+, Assia impulse la vision stratégique et citoyenne de Sans Limite.',
    image: ASSET_IMAGES.hero,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-2',
    name: 'Malik T.',
    role: 'Trésorier',
    category: 'bureau',
    bio: 'Expert-comptable de formation et militant associatif de longue date à Vitry, Malik veille à la rigueur financière et à la transparence exemplaire de nos budgets associatifs et européens.',
    image: ASSET_IMAGES.inclusion,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-3',
    name: 'Camille R.',
    role: 'Secrétaire Générale',
    category: 'bureau',
    bio: 'Juriste spécialisée en droit social et engagement citoyen, Camille supervise la vie statutaire, la gouvernance démocratique et la conformité administrative de l’association.',
    image: ASSET_IMAGES.erasmus,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-4',
    name: 'Samir L.',
    role: 'Coordinateur Projets Européens & Mobilité',
    category: 'operationnel',
    bio: 'Ancien animateur de jeunesse ayant voyagé dans plus de 20 pays grâce à Erasmus+, Samir conçoit les dossiers de subvention et encadre les jeunes participants durant leurs échanges.',
    image: ASSET_IMAGES.hero,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-5',
    name: 'Élodie D.',
    role: 'Animatrice Pôle Écologie & Quartier',
    category: 'operationnel',
    bio: 'Formée à la médiation scientifique et à la permaculture, Élodie insuffle de la créativité et de la bonne humeur dans tous nos ateliers zéro déchet et nos chantiers participatifs.',
    image: ASSET_IMAGES.eco,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-6',
    name: 'Yanis K.',
    role: 'Médiateur Numérique & Mentor',
    category: 'operationnel',
    bio: 'Développeur web et bénévole enthousiaste, Yanis vulgarise les technologies et aide avec une immense patience chaque habitant à apprivoiser les outils numériques.',
    image: ASSET_IMAGES.inclusion,
    linkedin: 'https://linkedin.com',
  },
];

export const TEAM_MEMBERS_EN: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Assia O.',
    role: 'President & Founder',
    category: 'bureau',
    bio: 'Passionate about popular education with 10 years of experience in youth work and Erasmus+ projects, Assia drives the strategic and civic vision of Sans Limite.',
    image: ASSET_IMAGES.hero,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-2',
    name: 'Malik T.',
    role: 'Treasurer',
    category: 'bureau',
    bio: 'Certified accountant and longtime community activist in Vitry, Malik oversees financial rigor and exemplary transparency across our European and non-profit accounts.',
    image: ASSET_IMAGES.inclusion,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-3',
    name: 'Camille R.',
    role: 'Secretary General',
    category: 'bureau',
    bio: 'Legal specialist in social law and civic participation, Camille oversees statutory life, democratic governance, and administrative compliance.',
    image: ASSET_IMAGES.erasmus,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-4',
    name: 'Samir L.',
    role: 'European Projects & Mobility Coordinator',
    category: 'operationnel',
    bio: 'Former youth leader having traveled to over 20 countries through Erasmus+, Samir designs grant applications and guides young participants during their exchanges.',
    image: ASSET_IMAGES.hero,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-5',
    name: 'Élodie D.',
    role: 'Ecology & Community Facilitator',
    category: 'operationnel',
    bio: 'Trained in scientific mediation and permaculture, Élodie brings contagious energy and creativity to our zero-waste workshops and community gardening initiatives.',
    image: ASSET_IMAGES.eco,
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'member-6',
    name: 'Yanis K.',
    role: 'Digital Mediator & Youth Mentor',
    category: 'operationnel',
    bio: 'Web developer and enthusiastic volunteer, Yanis demystifies technology and patiently helps every community member master essential digital tools.',
    image: ASSET_IMAGES.inclusion,
    linkedin: 'https://linkedin.com',
  },
];

export const TEAM_MEMBERS = TEAM_MEMBERS_FR;

export const PARTNERS_DATA = {
  local: [
    { name: 'Mairie de Vitry-sur-Seine', category: 'Collectivité locale', desc: 'Mise à disposition de salles et soutien aux initiatives jeunesse' },
    { name: 'Agence Nationale de la Cohésion des Territoires (ANCT)', category: 'Institution publique', desc: 'Soutien aux démarches d’inclusion dans les quartiers prioritaires' },
    { name: 'Conseil Départemental du Val-de-Marne', category: 'Collectivité territoriale', desc: 'Accompagnement des actions éducatives et environnementales' },
    { name: 'Fédération des Centres Sociaux de Paris', category: 'Réseau associatif', desc: 'Mutualisation des outils d’animation et orientation des publics' },
    { name: 'Maison de la Jeunesse et de la Culture (MJC)', category: 'Partenaire culturel', desc: 'Partenariat sur les résidences artistiques et soirées débats' },
    { name: 'HelloAsso', category: 'Plateforme solidaire', desc: 'Partenaire pour la collecte sécurisée des adhésions et des dons' },
  ],
  european: [
    { name: 'Asociación Juvenil Intercambia', country: 'Espagne', flag: '🇪🇸', city: 'Malaga' },
    { name: 'Associazione Culturale Link', country: 'Italie', flag: '🇮🇹', city: 'Altamura' },
    { name: 'KulturLife gGmbH', country: 'Allemagne', flag: '🇩🇪', city: 'Kiel' },
    { name: 'Stowarzyszenie Semper Avanti', country: 'Pologne', flag: '🇵🇱', city: 'Wrocław' },
    { name: 'United Societies of Balkans', country: 'Grèce', flag: '🇬🇷', city: 'Thessalonique' },
    { name: 'Clube Intercultural Europeu', country: 'Portugal', flag: '🇵🇹', city: 'Lisbonne' },
    { name: 'Asociatia Tinerilor cu Initiativa Civica', country: 'Roumanie', flag: '🇷🇴', city: 'Galați' },
    { name: 'Youth for Exchange and Understanding', country: 'Belgique', flag: '🇧🇪', city: 'Bruxelles' },
  ],
};

export const TESTIMONIALS_FR = [
  {
    id: 1,
    name: 'Sarah B.',
    role: 'Participante Échange de jeunes (20 ans)',
    city: 'Vitry-sur-Seine',
    project: 'Projet Horizons Sans Frontières',
    quote:
      "Avant cet échange avec Sans Limite, je n'avais jamais quitté ma région. En dix jours, j'ai rencontré des jeunes espagnols, grecs et polonais qui sont devenus de véritables amis. Cela a totalement débloqué mon anglais et m'a donné des ailes.",
  },
  {
    id: 2,
    name: 'Karim D.',
    role: 'Bénévole Permanence Numérique (27 ans)',
    city: 'Paris',
    project: 'Pôle Inclusion Numérique',
    quote:
      "Ce qui me touche chez Sans Limite, c'est la sincérité des relations humaines. On ne regarde pas d'où tu viens, on regarde où on peut aller ensemble. Voir le soulagement d'un aîné qu'on a aidé à finaliser son dossier de retraite n'a pas de prix.",
  },
  {
    id: 3,
    name: 'Elena Rossi',
    role: 'Responsable ONG Partenaire (Italie)',
    city: 'Rome',
    project: 'Partenariat KA210 Eco-Youth',
    quote:
      "Sans Limite est un coordinateur rigoureux, dynamique et profondément aligné avec les valeurs européennes de tolérance et d'émancipation des jeunes. Travailler avec eux est toujours un plaisir absolu.",
  },
];

export const TESTIMONIALS_EN = [
  {
    id: 1,
    name: 'Sarah B.',
    role: 'Youth Exchange Participant (20 yrs)',
    city: 'Vitry-sur-Seine',
    project: 'Horizons Without Borders Project',
    quote:
      "Before this exchange with Sans Limite, I had never traveled outside my region. In ten days, I met Spanish, Greek, and Polish peers who became lifelong friends. It unlocked my English and gave me the courage to pursue international opportunities.",
  },
  {
    id: 2,
    name: 'Karim D.',
    role: 'Digital Drop-in Volunteer (27 yrs)',
    city: 'Paris',
    project: 'Digital Inclusion Hub',
    quote:
      "What touches me at Sans Limite is the genuine human warmth. Nobody judges where you come from—we focus on where we can grow together. Seeing the relief on an elder's face when their pension file is finally completed is priceless.",
  },
  {
    id: 3,
    name: 'Elena Rossi',
    role: 'Partner NGO Lead (Italy)',
    city: 'Rome',
    project: 'KA210 Eco-Youth Partnership',
    quote:
      "Sans Limite is a rigorous, dependable, and inspiring project coordinator, deeply aligned with European values of solidarity and youth empowerment. Cooperating with them is always an absolute pleasure.",
  },
];

export const TESTIMONIALS = TESTIMONIALS_FR;

export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    image: ASSET_IMAGES.hero,
    caption: '✨ Énergie maximale ce matin pour notre atelier éloquence ! Des voix qui s’affirment et des idées qui bousculent. #SansLimite #Jeunesse #Paris',
    likes: 142,
    comments: 18,
    date: 'Hier',
  },
  {
    id: 'insta-2',
    image: ASSET_IMAGES.erasmus,
    caption: '🇪🇺 Nos jeunes en direct de l’échange européen ! Découverte des danses folkloriques et débats citoyens sans barrière de langue. #ErasmusPlus #Mobilité',
    likes: 215,
    comments: 34,
    date: 'Il y a 3 jours',
  },
  {
    id: 'insta-3',
    image: ASSET_IMAGES.eco,
    caption: '🌱 Végétalisation citoyenne à Vitry : quand le quartier se retrousse les manches pour verdir nos rues ! Bravo à tous les bénévoles. #TransitionÉcologique',
    likes: 189,
    comments: 21,
    date: 'Il y a 5 jours',
  },
  {
    id: 'insta-4',
    image: ASSET_IMAGES.inclusion,
    caption: '💻 Nouvel atelier numérique plein à craquer ! Apprendre à son rythme, dans la bonne humeur et l’entraide mutuelle. #InclusionNumérique #Solidarité',
    likes: 167,
    comments: 12,
    date: 'La semaine dernière',
  },
  {
    id: 'insta-5',
    image: ASSET_IMAGES.hero,
    caption: '💡 Réunion de préparation pour nos prochains projets 2027. La créativité de l’équipe n’a aucune limite ! #Engagement #Loi1901',
    likes: 134,
    comments: 9,
    date: 'Il y a 10 jours',
  },
  {
    id: 'insta-6',
    image: ASSET_IMAGES.erasmus,
    caption: '🎉 Remise officielle des Youthpass aux participants. Fiers de votre parcours et de votre audace ! #Youthpass #Compétences',
    likes: 253,
    comments: 41,
    date: 'Il y a 2 semaines',
  },
];

export const FAQ_DATA = [
  {
    q: 'Qui peut participer à vos activités ?',
    a: "Toutes nos activités locales sont ouvertes à tous les publics : jeunes (13-30 ans), adultes, familles, personnes âgées et habitants du quartier, sans distinction d'origine, de situation professionnelle ou de niveau d'études. Pour les projets européens Erasmus+, les critères d'âge spécifiques (généralement 18-26 ou 18-30 ans) sont précisés dans chaque appel à participation.",
  },
  {
    q: 'Les activités sont-elles gratuites ?',
    a: "Oui ! La grande majorité de nos ateliers, permanences et événements sont 100 % gratuits pour les participants. Les projets Erasmus+ couvrent également l'intégralité du voyage, de l'hébergement et des repas. Une adhésion annuelle solidaire (à partir de 10 € pour les jeunes) permet de soutenir la vie démocratique de l'association.",
  },
  {
    q: 'Comment participer à un échange Erasmus+ ?',
    a: "C'est très simple : consultez la rubrique 'Projets Européens > Appels à participation', choisissez le projet qui vous inspire et remplissez le formulaire de candidature en ligne. Aucun niveau d'anglais n'est exigé, seule votre motivation et votre envie d'apprendre comptent !",
  },
  {
    q: 'Comment devenir bénévole au sein de Sans Limite ?',
    a: "Vous êtes les bienvenus ! Rendez-vous dans la rubrique 'S'engager > Devenir bénévole' pour découvrir nos missions (animation d'ateliers, mentorat numérique, communication, bricolage ou gestion de projets). Vous pouvez nous donner quelques heures par mois ou vous impliquer de manière plus régulière selon vos disponibilités.",
  },
  {
    q: 'Mon don à Sans Limite est-il déductible de mes impôts ?',
    a: "Oui. En tant qu'association d'intérêt général loi 1901 à vocation éducative et sociale, vos dons ouvrent droit à une réduction d'impôt sur le revenu égale à 66 % du montant versé, dans la limite de 20 % de votre revenu imposable. Un reçu fiscal Cerfa officiel vous est automatiquement délivré par email.",
  },
];

export const PRESS_ARTICLES = [
  {
    source: 'Le Parisien Val-de-Marne',
    title: '« Sans Limite » : l’association qui emmène les jeunes de Vitry à la conquête de l’Europe',
    date: '14 Septembre 2026',
    excerpt: 'Reportage au cœur d’une séance d’initiation interculturelle avant le départ pour l’Italie.',
    url: '#',
  },
  {
    source: 'Vitry Hebdo',
    title: 'Solidarité numérique : un tiers-lieu bienveillant au service de tous les âges',
    date: '02 Juin 2026',
    excerpt: 'Zoom sur les permanences d’accès aux droits pilotées par les jeunes bénévoles de Sans Limite.',
    url: '#',
  },
  {
    source: 'Erasmus+ Mag France',
    title: 'Bonnes pratiques : comment Sans Limite mobilise les publics éloignés de la mobilité',
    date: '18 Mars 2026',
    excerpt: 'Interview d’Assia O., présidente de l’association, sur la pédagogie de la confiance.',
    url: '#',
  },
];

export const STATUTORY_DOCUMENTS = [
  {
    title: 'Statuts officiels déposés de l’Association',
    type: 'Document officiel Préfecture',
    date: 'Janvier 2025',
    size: '1.4 Mo',
    desc: 'Objet social, organisation de l’assemblée générale, composition du bureau et fonctionnement démocratique.',
  },
  {
    title: 'Rapport d’Activité Annuel 2025-2026',
    type: 'Bilan moral & opérationnel',
    date: 'Juillet 2026',
    size: '3.8 Mo',
    desc: 'Détail des 18 projets conduits, chiffres de participation, impacts sociaux et témoignages.',
  },
  {
    title: 'Rapport Financier & Comptes Annuels 2025-2026',
    type: 'Comptes certifiés',
    date: 'Juillet 2026',
    size: '890 Ko',
    desc: 'Bilan comptable, compte de résultat, subventions européennes et emploi des dons privés.',
  },
  {
    title: 'Charte Éthique & Protection des Mineurs et Publics Vulnérables',
    type: 'Règlement intérieur',
    date: 'Février 2025',
    size: '640 Ko',
    desc: 'Engagements de bienveillance, lutte contre les violences et protocoles de sécurité sur les mobilités.',
  },
];

export const STATUTORY_DOCUMENTS_EN = [
  {
    title: 'Official Registered Association Statutes',
    type: 'Official Prefecture Document',
    date: 'January 2025',
    size: '1.4 MB',
    desc: 'Corporate purpose, general assembly governance, board composition, and democratic decision-making rules.',
  },
  {
    title: 'Annual Activity Report 2025-2026',
    type: 'Operational & Moral Report',
    date: 'July 2026',
    size: '3.8 MB',
    desc: 'Breakdown of 18 completed projects, participant statistics, social impact metrics, and participant stories.',
  },
  {
    title: 'Financial Report & Certified Accounts 2025-2026',
    type: 'Certified Financial Statements',
    date: 'July 2026',
    size: '890 KB',
    desc: 'Balance sheet, income statement, European Commission grants audit, and allocation of private donations.',
  },
  {
    title: 'Ethics Charter & Protection of Minors & Vulnerable Persons',
    type: 'Internal Regulations',
    date: 'February 2025',
    size: '640 KB',
    desc: 'Safeguarding commitments, anti-harassment protocols, and safety standards during European mobility projects.',
  },
];

export const PRESS_ARTICLES_EN = [
  {
    source: 'Le Parisien Val-de-Marne',
    title: '“Sans Limite”: the association empowering Vitry youth to explore Europe',
    date: '14 September 2026',
    excerpt: 'On-the-ground report from an intercultural preparation workshop ahead of departing for Italy.',
    url: '#',
  },
  {
    source: 'Vitry Hebdo',
    title: 'Digital solidarity: an inclusive community hub serving all generations',
    date: '02 June 2026',
    excerpt: 'Spotlight on civic rights and digital assistance drop-in sessions run by Sans Limite volunteers.',
    url: '#',
  },
  {
    source: 'Erasmus+ Mag France',
    title: 'Best practices: how Sans Limite engages youth furthest from international mobility',
    date: '18 March 2026',
    excerpt: 'Interview with Assia O., president of the association, on pedagogy rooted in mutual trust.',
    url: '#',
  },
];

// Helper to retrieve completely localized site data based on selected language
export function getLocalizedData(lang: Language) {
  if (lang === 'en') {
    return {
      associationInfo: ASSOCIATION_INFO_EN,
      impactStats: IMPACT_STATS_EN,
      actionDomains: ACTION_DOMAINS_EN,
      europeanProjects: EUROPEAN_PROJECTS_EN,
      openCalls: OPEN_CALLS_EN,
      agendaEvents: AGENDA_EVENTS_EN,
      blogPosts: BLOG_POSTS_EN,
      teamMembers: TEAM_MEMBERS_EN,
      partnersData: PARTNERS_DATA,
      testimonials: TESTIMONIALS_EN,
      instagramPosts: INSTAGRAM_POSTS,
      faqData: [
        {
          q: 'Who can take part in your activities?',
          a: 'All our local activities are open to everyone: youth (13-30), adults, families, seniors, and local residents, regardless of background or educational level. For Erasmus+ European projects, specific age criteria (typically 18-26 or 18-30) are stated in each open call.',
        },
        {
          q: 'Are the activities free of charge?',
          a: 'Yes! The vast majority of our workshops, drop-in sessions, and community events are 100% free. Erasmus+ projects also cover all travel, accommodation, and food costs. An annual membership starting at €10 helps support the association.',
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
      ],
      pressArticles: PRESS_ARTICLES_EN,
      statutoryDocuments: STATUTORY_DOCUMENTS_EN,
    };
  }

  return {
    associationInfo: ASSOCIATION_INFO,
    impactStats: IMPACT_STATS,
    actionDomains: ACTION_DOMAINS_FR,
    europeanProjects: EUROPEAN_PROJECTS_FR,
    openCalls: OPEN_CALLS_FR,
    agendaEvents: AGENDA_EVENTS_FR,
    blogPosts: BLOG_POSTS_FR,
    teamMembers: TEAM_MEMBERS_FR,
    partnersData: PARTNERS_DATA,
    testimonials: TESTIMONIALS_FR,
    instagramPosts: INSTAGRAM_POSTS,
    faqData: FAQ_DATA,
    pressArticles: PRESS_ARTICLES,
    statutoryDocuments: STATUTORY_DOCUMENTS,
  };
}
