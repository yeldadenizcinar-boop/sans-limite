import React, { useState, useEffect } from 'react';
import {
  Utensils,
  Footprints,
  Award,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  CheckCircle2,
  Users,
  MapPin,
  Leaf,
  Heart,
  X,
  ArrowRight,
  Play,
  Pause,
} from 'lucide-react';
import { Language } from '../types';
import { ASSET_IMAGES } from '../data/content';

interface LocalYouthCarouselProps {
  language: Language;
  onNavigateContact?: () => void;
  onNavigateEvents?: () => void;
}

export interface ParticipantStory {
  id: string;
  name: string;
  age: number;
  neighborhood: string;
  activityCategory: 'green-plate' | 'move-connect' | 'eco-challenge';
  activityName: {
    fr: string;
    en: string;
  };
  challengeProject: {
    fr: string;
    en: string;
  };
  badge: {
    fr: string;
    en: string;
  };
  image: string;
  quote: {
    fr: string;
    en: string;
  };
  fullStory: {
    fr: string;
    en: string;
  };
  keyTakeaway: {
    fr: string;
    en: string;
  };
  impactStats: {
    fr: string;
    en: string;
  };
}

const PARTICIPANT_STORIES: ParticipantStory[] = [
  {
    id: 'story-1',
    name: 'Yasmine B.',
    age: 19,
    neighborhood: 'Vitry-sur-Seine (Coteau-Malassis)',
    activityCategory: 'green-plate',
    activityName: {
      fr: 'Ateliers « Green Plate » (Assiette Verte)',
      en: '“Green Plate” Meal Planning & Cooking Workshops',
    },
    challengeProject: {
      fr: 'Food, Planet & Well-being Challenge',
      en: 'Food, Planet & Well-being Challenge',
    },
    badge: {
      fr: 'Zéro Gaspillage Alimentaire',
      en: 'Zero Food Waste & Nutrition',
    },
    image: ASSET_IMAGES.c1,
    quote: {
      fr: "Avant les ateliers Assiette Verte, je ne mesurais pas ce que je jetais. Cuisiner en brigade avec des invendus de maraîchers locaux m'a appris à planifier mes repas, doser les portions et comprendre l'impact direct de notre alimentation sur la planète et notre bien-être.",
      en: "Before the Green Plate Workshops, I didn't realize how much food went to waste. Cooking in small teams with rescued produce from local markets taught me meal planning, portion control, and how food choices affect both the planet and personal health.",
    },
    fullStory: {
      fr: "Pendant 4 semaines à Vitry-sur-Seine, Yasmine a participé aux sessions pratiques 'Green Plate'. En petits groupes de 4 à 5 jeunes, ils ont appris à valoriser les surplus de fruits et légumes, à confectionner des menus équilibrés de saison sans aucun gaspillage, et à gérer les portions pour un foyer. Cette expérience pratique lui a donné envie de devenir éco-ambassadrice auprès des autres jeunes de son quartier.",
      en: "Over four weeks in Vitry-sur-Seine, Yasmine joined the hands-on 'Green Plate' sessions. Working in small groups of 4-5 youth, they learned how to make the most of surplus fruits and vegetables, create balanced seasonal menus with zero waste, and master portion control. This practical learning inspired her to become an eco-ambassador among neighborhood peers.",
    },
    keyTakeaway: {
      fr: 'Planification des repas de saison & dosage rigoureux des portions',
      en: 'Seasonal meal planning & practical portion control',
    },
    impactStats: {
      fr: '-45% de restes jetés à la maison & 15 recettes zéro déchet acquises',
      en: '45% less food waste at home & 15 zero-waste recipes learned',
    },
  },
  {
    id: 'story-2',
    name: 'Sofiane T.',
    age: 22,
    neighborhood: 'Vitry-sur-Seine (Gare / Port à l’Anglais)',
    activityCategory: 'move-connect',
    activityName: {
      fr: 'Sessions de Plein Air « Move & Connect »',
      en: '“Move & Connect” Outdoor Sessions',
    },
    challengeProject: {
      fr: 'Move Green! & Nature & Mind',
      en: 'Move Green! & Nature & Mind',
    },
    badge: {
      fr: 'Mobilité Active & Bien-être Mental',
      en: 'Active Mobility & Mental Well-being',
    },
    image: ASSET_IMAGES.c9,
    quote: {
      fr: "Marcher en groupe le long de la Seine et dans les parcs de Vitry tout en relevant des défis d'équipe nous a libérés du stress des écrans. Les débats sur la mobilité douce et le mode de vie m'ont convaincu de faire tous mes trajets locaux à pied ou à vélo.",
      en: "Walking in groups along the Seine and through Vitry's parks while tackling team physical tasks freed us from screen fatigue. The discussions on active mobility and daily routines convinced me to walk and cycle for all my local trips.",
    },
    fullStory: {
      fr: "Les sessions 'Move & Connect' combinent marche active, exercices physiques doux et défis collectifs en extérieur dans les espaces verts de Vitry. Sofiane et son groupe ont lié activité physique, échanges sincères sur la santé mentale et réflexion sur la réduction de l'empreinte carbone urbaine.",
      en: "The 'Move & Connect' sessions combine active walking, light group fitness, and outdoor teamwork in Vitry's green areas. Sofiane and his group connected physical exercise, honest talks about mental well-being, and reflections on shrinking our urban carbon footprint.",
    },
    keyTakeaway: {
      fr: 'Marche active, reconnexion à la nature et réduction des trajets polluants',
      en: 'Active walking, nature connection, and cutting carbon-heavy commutes',
    },
    impactStats: {
      fr: '12 km de marches collectives et 100% de trajets de proximité à pied',
      en: '12 km of collective walks & 100% of local trips on foot or bike',
    },
  },
  {
    id: 'story-3',
    name: 'Amina S.',
    age: 18,
    neighborhood: 'Vitry-sur-Seine (Grand Ensemble)',
    activityCategory: 'eco-challenge',
    activityName: {
      fr: 'Journées « Éco-Défis » (Eco-Challenge Days)',
      en: '“Eco-Challenge Days” Youth Missions',
    },
    challengeProject: {
      fr: 'Éco-Défis Quotidiens & Émulation par les pairs',
      en: 'Daily Eco-Challenges & Peer Recognition',
    },
    badge: {
      fr: 'Missions Citoyennes & Feedback',
      en: 'Citizen Missions & Peer Review',
    },
    image: ASSET_IMAGES.c4,
    quote: {
      fr: "Avec mon équipe, nous avions 24h pour réaliser 6 missions écologiques dans Vitry : éliminer les emballages plastiques d'un repas, photographier des alternatives concrètes et recevoir la validation des autres équipes. La compétition bienveillante rend l'écologie passionnante !",
      en: "Our team had 24 hours to complete 6 eco-missions across Vitry: eliminating single-use plastic from a meal, photographing tangible alternatives, and collecting peer validation. Friendly peer feedback turns sustainability into an exciting adventure!",
    },
    fullStory: {
      fr: "Les Journées Éco-Défis invitent des binômes et trinômes de jeunes à agir concrètement dans leur vie quotidienne. Chaque mission accomplie fait l'objet d'une preuve photo ou vidéo partagée sur le tableau de bord des équipes, suivie d'un temps de débriefing et de remise de badges valorisants.",
      en: "Eco-Challenge Days challenge small youth teams to take immediate, real-world sustainable actions in their daily routines. Each completed mission is documented with photo/video evidence shared with peers, followed by celebratory group debriefings and badges.",
    },
    keyTakeaway: {
      fr: 'Missions en petites équipes, preuves visuelles et validation par les pairs',
      en: 'Small team missions, evidence collection, and constructive peer feedback',
    },
    impactStats: {
      fr: '6 missions réussies et 1er prix du Défi Zéro Plastique de quartier',
      en: '6 completed sustainability missions & 1st place in Neighborhood Zero-Plastic Challenge',
    },
  },
  {
    id: 'story-4',
    name: 'Karim M.',
    age: 21,
    neighborhood: 'Vitry-sur-Seine (Centre-Ville)',
    activityCategory: 'green-plate',
    activityName: {
      fr: 'Cuisine Solidaire & Anti-Gaspillage Maraîcher',
      en: 'Community Kitchen & Rescued Market Produce',
    },
    challengeProject: {
      fr: 'Food, Planet & Well-being Challenge',
      en: 'Food, Planet & Well-being Challenge',
    },
    badge: {
      fr: 'Valorisation des Surplus',
      en: 'Surplus Produce Recovery',
    },
    image: ASSET_IMAGES.c2,
    quote: {
      fr: "Nous avons récupéré plus de 35 kg de fruits et légumes un peu abîmés auprès des commerçants du marché de Vitry. En deux heures de cuisine participative, nous en avons fait un banquet sain pour 40 personnes. Ça prouve qu'on peut bien manger sans rien gaspiller.",
      en: "We collected over 35 kg of surplus produce from local merchants at Vitry market. In two hours of collaborative cooking, we prepared a healthy community feast for 40 people. It proved that great food doesn't require waste.",
    },
    fullStory: {
      fr: "Karim a découvert à Sans Limite les techniques de conservation douce, les bouillons maison et les sauces préparées à base de légumes déclassés. Au-delà des techniques culinaires, cet atelier a renforcé le lien social entre jeunes issus de différents horizons culturels.",
      en: "Karim discovered sustainable food preservation, homemade stocks, and creative sauces made from surplus vegetables. Beyond practical cooking skills, this workshop strengthened bonds between youth from diverse cultural backgrounds.",
    },
    keyTakeaway: {
      fr: 'Cuisine collective à base d’invendus et transformation créative',
      en: 'Collaborative cooking using surplus food and creative recipes',
    },
    impactStats: {
      fr: '35 kg de nourriture sauvée et 40 repas solidaires distribués',
      en: '35 kg of rescued produce & 40 community meals shared',
    },
  },
  {
    id: 'story-5',
    name: 'Chloé D. & Équipe « Nature & Mind »',
    age: 18,
    neighborhood: 'Vitry-sur-Seine (Plateau)',
    activityCategory: 'move-connect',
    activityName: {
      fr: 'Parcours Éco-Santé & Nature Urbaine',
      en: 'Eco-Health & Urban Nature Trail',
    },
    challengeProject: {
      fr: 'Nature & Mind · Move Green!',
      en: 'Nature & Mind · Move Green!',
    },
    badge: {
      fr: 'Sport Santé & Esprit d’Équipe',
      en: 'Outdoor Health & Team Spirit',
    },
    image: ASSET_IMAGES.c5,
    quote: {
      fr: "Les sessions Move & Connect m'ont fait redécouvrir la biodiversité cachée de Vitry. Lier l'exercice physique en plein air avec des discussions sur la nutrition et la santé mentale nous a aidés à nous sentir plus énergiques et solidaires.",
      en: "The Move & Connect sessions revealed Vitry's hidden urban biodiversity to us. Combining outdoor movement with open talks on nutrition and mental wellness left us feeling energized and deeply connected.",
    },
    fullStory: {
      fr: "Chloé et son groupe ont exploré les parcs et berges de Vitry à travers des circuits de marche rapide combinés à des exercices de respiration, de cohésion et d'observation de la flore urbaine. Une vraie bouffée d'oxygène loin du stress quotidien.",
      en: "Chloé and her team explored Vitry's parks and riverbanks through power-walk circuits coupled with breathing exercises, team cohesion games, and urban biodiversity tracking. A breath of fresh air amidst daily stress.",
    },
    keyTakeaway: {
      fr: 'Cohésion d’équipe, santé globale et valorisation des espaces verts locaux',
      en: 'Team cohesion, holistic health, and appreciating local urban green spaces',
    },
    impactStats: {
      fr: '8 séances collectives suivies et création d’un groupe de marche autonome',
      en: '8 completed outdoor sessions & self-organized youth walking group created',
    },
  },
  {
    id: 'story-6',
    name: 'Lina H.',
    age: 20,
    neighborhood: 'Vitry-sur-Seine (Jeune primo-arrivante)',
    activityCategory: 'eco-challenge',
    activityName: {
      fr: 'Apprentissage Pratique & Éducation Inclusive',
      en: 'Hands-on Non-Formal Learning & Inclusion',
    },
    challengeProject: {
      fr: 'Inclusion & Émancipation par l’Action',
      en: 'Inclusion & Empowerment Through Action',
    },
    badge: {
      fr: 'Éducation Inclusive & Accueil',
      en: 'Inclusive Education & Welcome',
    },
    image: ASSET_IMAGES.y1,
    quote: {
      fr: "Arrivée récemment en France, la langue était parfois un obstacle. Dans ces ateliers culinaires et ces défis de terrain, tout repose sur l'action pratique et le collectif : j'ai trouvé ma place, appris le vocabulaire du quotidien et repris confiance en moi.",
      en: "Arriving recently in France, language was sometimes a barrier. In these hands-on cooking and outdoor challenges, everything is grounded in shared action and teamwork: I found my place, learned everyday French, and rebuilt my confidence.",
    },
    fullStory: {
      fr: "Lina illustre parfaitement la mission inclusive de Sans Limite France : offrir à tous les jeunes, notamment migrants et issus de milieux défavorisés, des espaces d'expression où l'action concrète et l'entraide dépassent les barrières linguistiques et favorisent l'intégration citoyenne.",
      en: "Lina embodies Sans Limite France's inclusive mission: providing all youth, particularly migrant and underprivileged young people, with safe spaces where tangible teamwork bridges language barriers and empowers civic belonging.",
    },
    keyTakeaway: {
      fr: 'Pédagogie non formelle accessible, inclusion bienveillante et émancipation',
      en: 'Accessible non-formal pedagogy, inclusive welcome, and mutual empowerment',
    },
    impactStats: {
      fr: '100% de participation active & nouvelle bénévole régulière de l’association',
      en: '100% active participation & now a regular volunteer within the association',
    },
  },
];

export const LocalYouthCarousel: React.FC<LocalYouthCarouselProps> = ({
  language,
  onNavigateContact,
  onNavigateEvents,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedStory, setSelectedStory] = useState<ParticipantStory | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const filteredStories =
    selectedCategory === 'all'
      ? PARTICIPANT_STORIES
      : PARTICIPANT_STORIES.filter((s) => s.activityCategory === selectedCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Autoplay carousel
  useEffect(() => {
    if (!isAutoPlaying || filteredStories.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredStories.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredStories.length);
  };

  const t = {
    fr: {
      kicker: 'Action Locale à Vitry-sur-Seine · Jeunesse & Transition Écologique',
      title: 'Paroles de Participants : Gaspillage Alimentaire, Sport & Éco-Défis',
      subtitle:
        'Découvrez le vécu de nos jeunes aux Ateliers Assiette Verte (Green Plate), aux sessions de plein air Move & Connect et aux Journées Éco-Défis.',
      categories: {
        all: 'Tous les témoignages (6)',
        greenPlate: '🥗 Assiette Verte & Anti-Gaspi',
        moveConnect: '🏃 Move & Connect (Plein air)',
        ecoChallenge: '🎯 Journées Éco-Défis',
      },
      threePillarsTitle: 'Nos 3 Ateliers Clés pour la Jeunesse de Vitry-sur-Seine',
      threePillarsIntro:
        'Sans Limite France agit au quotidien auprès des jeunes, notamment issus des quartiers prioritaires et migrants, grâce à des approches pédagogiques non formelles et concrètes :',
      pillar1Title: 'Ateliers « Green Plate »',
      pillar1Subtitle: 'Food, Planet & Well-being Challenge',
      pillar1Desc:
        'Planification des repas, sélection des produits de saison, gestion rigoureuse des portions et prévention du gaspillage alimentaire en petites brigades culinaires avec réflexion sur la santé et la planète.',
      pillar2Title: 'Sessions « Move & Connect »',
      pillar2Subtitle: 'Move Green! & Nature & Mind',
      pillar2Desc:
        'Marches collectives dynamiques, activités physiques légères et défis d’équipe en extérieur tout en abordant la mobilité douce, les habitudes de vie saines et le bien-être mental.',
      pillar3Title: 'Journées « Éco-Défis »',
      pillar3Subtitle: 'Missions Durables & Émulation',
      pillar3Desc:
        'Missions simples en équipes sur les éco-gestes du quotidien, collecte de preuves photographiques et valorisation par le retour constructif et la reconnaissance des pairs.',
      readMore: 'Voir le récit complet',
      keyImpact: 'Impact concret constaté :',
      keySkills: 'Compétence clé développée :',
      joinUsBtn: 'Participer au prochain atelier',
      contactBtn: 'En savoir plus / Nous contacter',
      modalClose: 'Fermer',
      associationNoteBadge: 'Pédagogie Active & Éducation Non Formelle',
    },
    en: {
      kicker: 'Local Action in Vitry-sur-Seine · Youth & Ecological Transition',
      title: 'Participant Voices: Food Waste Prevention, Outdoor Well-being & Eco-Challenges',
      subtitle:
        'Discover authentic stories from youth participating in our Green Plate Workshops, Move & Connect Outdoor Sessions, and Eco-Challenge Days.',
      categories: {
        all: 'All Stories (6)',
        greenPlate: '🥗 Green Plate & Zero Waste',
        moveConnect: '🏃 Move & Connect (Outdoors)',
        ecoChallenge: '🎯 Eco-Challenge Days',
      },
      threePillarsTitle: 'Our 3 Core Youth Work Activities in Vitry-sur-Seine',
      threePillarsIntro:
        'Sans Limite France engages young people, including migrant and low-income youth in Vitry-sur-Seine, through practical non-formal learning activities:',
      pillar1Title: '“Green Plate” Workshops',
      pillar1Subtitle: 'Food, Planet & Well-being Challenge',
      pillar1Desc:
        'Engaging youth in meal planning, seasonal food choices, portion control, and food-waste prevention through small-group cooking tasks and reflection on environmental and personal health.',
      pillar2Title: '“Move & Connect” Sessions',
      pillar2Subtitle: 'Move Green! & Nature & Mind',
      pillar2Desc:
        'Group walks, light outdoor physical activities, and team tasks connecting active mobility, daily routines, social interaction, and mental well-being.',
      pillar3Title: '“Eco-Challenge Days”',
      pillar3Subtitle: 'Daily Habits & Peer Recognition',
      pillar3Desc:
        'Small teams completing sustainable daily behaviour missions, gathering evidence of actions, and receiving constructive peer feedback and badges.',
      readMore: 'Read full story',
      keyImpact: 'Tangible impact achieved:',
      keySkills: 'Core transversal skill:',
      joinUsBtn: 'Join our next workshop',
      contactBtn: 'Learn more / Contact us',
      modalClose: 'Close',
      associationNoteBadge: 'Active Pedagogy & Non-Formal Education',
    },
  }[language];

  // Current active story for highlighted display or card
  const activeStory = filteredStories[currentIndex] || filteredStories[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-6">
      {/* 1. Header with Kicker, Title and Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-semibold">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Carousel controls & Play/Pause */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
            className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-2xs"
            title={isAutoPlaying ? 'Pause' : 'Lecture'}
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-600" />}
          </button>
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full p-1 shadow-2xs">
            <button
              onClick={handlePrev}
              aria-label="Témoignage précédent"
              className="p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-slate-700 px-2">
              {currentIndex + 1} / {filteredStories.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Témoignage suivant"
              className="p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Three Interactive Activity Pillar Banners (Brief Summary from Erasmus KA152 Application) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pillar 1: Green Plate */}
        <div
          onClick={() => setSelectedCategory('green-plate')}
          className={`cursor-pointer rounded-2xl p-5 border transition-all ${
            selectedCategory === 'green-plate'
              ? 'bg-emerald-50/90 border-emerald-300 shadow-md ring-2 ring-emerald-500/20'
              : 'bg-white border-slate-200/90 hover:border-emerald-200 hover:shadow-xs'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100/70 text-emerald-800">
              {t.pillar1Subtitle}
            </span>
          </div>
          <h3 className="text-base font-bold text-slate-900 mt-3">{t.pillar1Title}</h3>
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">{t.pillar1Desc}</p>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
            <span>Découvrir les récits anti-gaspi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Pillar 2: Move & Connect */}
        <div
          onClick={() => setSelectedCategory('move-connect')}
          className={`cursor-pointer rounded-2xl p-5 border transition-all ${
            selectedCategory === 'move-connect'
              ? 'bg-blue-50/90 border-blue-300 shadow-md ring-2 ring-blue-500/20'
              : 'bg-white border-slate-200/90 hover:border-blue-200 hover:shadow-xs'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 shrink-0">
              <Footprints className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-800">
              {t.pillar2Subtitle}
            </span>
          </div>
          <h3 className="text-base font-bold text-slate-900 mt-3">{t.pillar2Title}</h3>
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">{t.pillar2Desc}</p>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A]">
            <span>Voir les marches & nature</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Pillar 3: Eco-Challenge Days */}
        <div
          onClick={() => setSelectedCategory('eco-challenge')}
          className={`cursor-pointer rounded-2xl p-5 border transition-all ${
            selectedCategory === 'eco-challenge'
              ? 'bg-orange-50/90 border-orange-300 shadow-md ring-2 ring-orange-500/20'
              : 'bg-white border-slate-200/90 hover:border-orange-200 hover:shadow-xs'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="p-2.5 rounded-xl bg-orange-100 text-orange-700 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-100/70 text-orange-800">
              {t.pillar3Subtitle}
            </span>
          </div>
          <h3 className="text-base font-bold text-slate-900 mt-3">{t.pillar3Title}</h3>
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">{t.pillar3Desc}</p>
          <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#F97316]">
            <span>Explorer les défis collectifs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* 3. Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {t.categories.all}
        </button>
        <button
          onClick={() => setSelectedCategory('green-plate')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            selectedCategory === 'green-plate'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
          }`}
        >
          <Utensils className="w-3.5 h-3.5" />
          <span>{t.categories.greenPlate}</span>
        </button>
        <button
          onClick={() => setSelectedCategory('move-connect')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            selectedCategory === 'move-connect'
              ? 'bg-[#1E3A8A] text-white shadow-xs'
              : 'bg-blue-50 text-[#1E3A8A] hover:bg-blue-100'
          }`}
        >
          <Footprints className="w-3.5 h-3.5" />
          <span>{t.categories.moveConnect}</span>
        </button>
        <button
          onClick={() => setSelectedCategory('eco-challenge')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            selectedCategory === 'eco-challenge'
              ? 'bg-[#F97316] text-white shadow-xs'
              : 'bg-orange-50 text-orange-800 hover:bg-orange-100'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>{t.categories.ecoChallenge}</span>
        </button>
      </div>

      {/* 4. Main Carousel Display (Featured Slide + Side Cards) */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Featured Interactive Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md flex flex-col justify-between group">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Photo Area */}
              <div className="relative min-h-[260px] md:min-h-full overflow-hidden bg-slate-900">
                <img
                  src={activeStory.image}
                  alt={activeStory.activityName[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent md:hidden" />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide shadow-sm bg-white/95 text-slate-900 backdrop-blur-xs">
                    {activeStory.badge[language]}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-[#1E3A8A]/90 text-white backdrop-blur-xs">
                    {activeStory.challengeProject[language]}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
                  <div className="text-base font-bold">{activeStory.name} ({activeStory.age} ans)</div>
                  <div className="text-xs text-orange-200 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{activeStory.neighborhood}</span>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="hidden md:block">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      {activeStory.activityName[language]}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                      {activeStory.name},{' '}
                      <span className="text-sm font-semibold text-slate-500">
                        {activeStory.age} {language === 'fr' ? 'ans' : 'years old'}
                      </span>
                    </h3>
                    <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                      <span>{activeStory.neighborhood}</span>
                    </div>
                  </div>

                  <div className="relative pt-2">
                    <Quote className="w-8 h-8 text-emerald-200 absolute -top-2 -left-2 -z-0 opacity-70" />
                    <p className="text-sm sm:text-base text-slate-700 italic font-serif relative z-10 leading-relaxed">
                      &ldquo;{activeStory.quote[language]}&rdquo;
                    </p>
                  </div>

                  {/* Key Takeaway & Impact */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">{t.keySkills} </span>
                        <span>{activeStory.keyTakeaway[language]}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Sparkles className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">{t.keyImpact} </span>
                        <span className="text-emerald-700 font-semibold">
                          {activeStory.impactStats[language]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100 gap-3">
                  <button
                    onClick={() => setSelectedStory(activeStory)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] hover:text-[#F97316] transition-colors"
                  >
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      aria-label="Précédent"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Suivant"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Other Stories Preview List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {language === 'fr' ? 'Autres récits du groupe' : 'Other stories in group'}
              </span>
              <span className="text-[11px] font-semibold text-emerald-700">
                {filteredStories.length} {language === 'fr' ? 'témoignages' : 'stories'}
              </span>
            </div>

            <div className="space-y-3 overflow-y-auto max-h-[460px] pr-1">
              {filteredStories.map((story, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={story.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-800 shadow-md ring-2 ring-emerald-400/30'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-xs font-bold truncate">
                          {story.name},{' '}
                          <span className={isActive ? 'text-slate-300' : 'text-slate-500'}>
                            {story.age} ans
                          </span>
                        </h4>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            isActive
                              ? 'bg-emerald-500 text-slate-950 font-extrabold'
                              : 'bg-emerald-50 text-emerald-700'
                          }`}
                        >
                          {story.badge[language].split(' ')[0]}
                        </span>
                      </div>
                      <p
                        className={`text-[11px] line-clamp-2 mt-1 italic ${
                          isActive ? 'text-slate-200' : 'text-slate-600'
                        }`}
                      >
                        &ldquo;{story.quote[language]}&rdquo;
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {filteredStories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Aller au témoignage ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-[#1E3A8A]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 5. Présentation de l'association & Expérience en travail de jeunesse (Dossier Erasmus+ KA152) */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#1E3A8A] text-white">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {language === 'fr'
                  ? 'Sans Limite France à Vitry-sur-Seine : Notre Action Jeunesse'
                  : 'Sans Limite France in Vitry-sur-Seine: Our Youth Work'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'fr'
                  ? 'Éducation inclusive, pédagogies alternatives & expérience de terrain'
                  : 'Inclusive education, alternative pedagogies & field experience'}
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-100 text-[#1E3A8A] border border-blue-200/60 self-start md:self-auto">
            {language === 'fr' ? 'Vitry-sur-Seine · Val-de-Marne' : 'Vitry-sur-Seine · Paris Area'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F97316]" />
              <span>
                {language === 'fr'
                  ? "Présentation de l'organisation"
                  : 'About Sans Limite France'}
              </span>
            </h4>
            <p>
              {language === 'fr'
                ? "Sans Limite France est une association à but non lucratif basée à Vitry-sur-Seine promouvant une éducation inclusive et innovante. Ses actions principales incluent la conception et l'animation de pédagogies alternatives adaptées à tous les apprenants (y compris en situation de handicap), des opportunités d'apprentissage formel et non formel pour enfants et adultes, la sensibilisation à la diversité et à l'inclusion, et le développement de coopérations européennes pour démultiplier son impact social."
                : 'Sans Limite France is a nonprofit association based in Vitry-sur-Seine promoting inclusive and innovative education. Its main activities include designing and delivering alternative pedagogical approaches adapted to diverse learners including people with disabilities; organising non-formal and formal learning opportunities for children and adults; raising awareness on disability, diversity, and inclusion through workshops and public campaigns; and developing international collaborations to enrich educational practices.'}
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>
                {language === 'fr'
                  ? 'Expérience régulière auprès des jeunes'
                  : 'Youth Work Experience & Regular Activities'}
              </span>
            </h4>
            <p>
              {language === 'fr'
                ? "L'association travaille activement avec les jeunes de Vitry-sur-Seine, notamment les jeunes migrants et issus de milieux modestes, via des activités pratiques non formelles : les Ateliers « Green Plate » (gaspillage alimentaire, planification des repas, gestion des portions et bien-être), les sessions de plein air « Move & Connect » (marche, mobilité active et santé mentale) et les journées « Éco-Défis » (missions collectives quotidiennes et valorisation par les pairs)."
                : 'Sans Limite France works with young people, including migrant and low-income youth in Vitry-sur-Seine, through practical non-formal learning activities: local “Green Plate Workshops” (meal planning, portion control and food-waste prevention), “Move & Connect Outdoor Sessions” (active mobility and well-being), and “Eco-Challenge Days” (sustainable daily missions and peer feedback).'}
            </p>
          </div>
        </div>
      </div>

      {/* 5. Rich Modal Details when clicking 'Voir le récit complet' */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative">
            <div className="relative h-56 sm:h-64 bg-slate-900 overflow-hidden">
              <img
                src={selectedStory.image}
                alt={selectedStory.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedStory(null)}
                aria-label={t.modalClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F97316] text-white">
                  {selectedStory.badge[language]}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                  {selectedStory.name} ({selectedStory.age} ans)
                </h3>
                <div className="text-xs text-orange-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedStory.neighborhood}</span>
                  <span>·</span>
                  <span>{selectedStory.activityName[language]}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Quote */}
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 sm:p-5">
                <p className="text-sm sm:text-base text-emerald-950 italic font-serif leading-relaxed">
                  &ldquo;{selectedStory.quote[language]}&rdquo;
                </p>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {language === 'fr' ? 'Expérience & méthodologie' : 'Experience & methodology'}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedStory.fullStory[language]}</p>
              </div>

              {/* Badges / Impact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">
                    {language === 'fr' ? 'Projet européen associé' : 'Associated EU Challenge'}
                  </span>
                  <div className="text-xs font-bold text-[#1E3A8A]">
                    {selectedStory.challengeProject[language]}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase">
                    {language === 'fr' ? 'Résultat concret' : 'Tangible outcome'}
                  </span>
                  <div className="text-xs font-bold text-emerald-900">
                    {selectedStory.impactStats[language]}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {t.modalClose}
                </button>
                {onNavigateEvents && (
                  <button
                    onClick={() => {
                      setSelectedStory(null);
                      onNavigateEvents();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-blue-900 text-white text-xs font-bold transition-colors inline-flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>{t.joinUsBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
