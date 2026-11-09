import { NailColor, NailFinishOption, NailShapeOption, FingerConfig } from '../types.ts';

export const NAIL_SHADES: NailColor[] = [
  {
    id: 'nude',
    number: 'N° 01',
    name: 'Nude Intemporel',
    frenchTitle: 'Éclat Poudré',
    hex: '#D7B9AA',
    deepHex: '#B28E7D',
    lightHex: '#F0DED5',
    ambientBg: '#FAF4F1',
    glowColor: 'rgba(215, 185, 170, 0.4)',
    description: 'Un nude soyeux aux nuances de porcelaine réchauffée d’une touche d’amande. L’élégance silencieuse de la haute manucure parisienne.',
    notes: ['Pigments ultra-fins', 'Couvrance soyeuse', 'Fini seconde peau'],
    inspiration: 'Les soies naturelles et la douce lumière du matin sur la place Vendôme.'
  },
  {
    id: 'rose',
    number: 'N° 02',
    name: 'Rose Nymphéa',
    frenchTitle: 'Pétale Délicat',
    hex: '#E08596',
    deepHex: '#BA5669',
    lightHex: '#F7BDC8',
    ambientBg: '#FAF1F3',
    glowColor: 'rgba(224, 133, 150, 0.45)',
    description: 'Un rose poudré subtil et romantique, évocation florale de pétales de pivoine fraîchement écloses dans les jardins du Palais-Royal.',
    notes: ['Reflets nacrés doux', 'Éclat frais immédiat', 'Infusion à la rose blanche'],
    inspiration: 'La fraîcheur printanière des pivoines et le velours poudré d’un bouquet couture.'
  },
  {
    id: 'rouge',
    number: 'N° 03',
    name: 'Rouge Impérial',
    frenchTitle: 'Carmin Couture',
    hex: '#A31526',
    deepHex: '#700916',
    lightHex: '#CF3244',
    ambientBg: '#FAF1F1',
    glowColor: 'rgba(163, 21, 38, 0.45)',
    description: 'Le rouge absolu, vibrant et intemporel. Une formule laque mirobolante offrant une intensité théâtrale d’une audace souveraine.',
    notes: ['Concentration pigmentaire 85%', 'Brillance miroir 10 jours', 'Sans compromis'],
    inspiration: 'Les tapis de velours de l’Opéra Garnier et la silhouette rouge d’une robe du soir.'
  },
  {
    id: 'corail',
    number: 'N° 04',
    name: 'Corail Riviera',
    frenchTitle: 'Soleil Couchant',
    hex: '#DE5D48',
    deepHex: '#AA3A26',
    lightHex: '#F68F7D',
    ambientBg: '#FAF2EE',
    glowColor: 'rgba(222, 93, 72, 0.45)',
    description: 'Une tonalité corail gorgée de lumière et de chaleur dorée. Une invitation solaire aux escapades méditerranéennes et aux couchers de soleil dorés.',
    notes: ['Éclat vitaminé', 'Sous-tons pêche dorée', 'Formule enrichie en kératine végétale'],
    inspiration: 'Les terrasses ensoleillées de la Côte d’Azur et les agrumes gorgés d’été.'
  },
  {
    id: 'violet',
    number: 'N° 05',
    name: 'Améthyste Royale',
    frenchTitle: 'Pourpre Saphir',
    hex: '#5B256B',
    deepHex: '#3D1249',
    lightHex: '#8C4CA0',
    ambientBg: '#F7EFF8',
    glowColor: 'rgba(91, 37, 107, 0.45)',
    description: 'Un pourpre profond aux nuances d’améthyste précieuse. Mystérieux, racé et envoûtant, il capte la lumière avec une aura royale.',
    notes: ['Profondeur multi-facette', 'Micro-perles minérales', 'Opacité dès la première couche'],
    inspiration: 'Les joyaux de la couronne et les velours nocturnes des salons parisiens.'
  },
  {
    id: 'bordeaux',
    number: 'N° 06',
    name: 'Bordeaux Grand Cru',
    frenchTitle: 'Noir Cerise',
    hex: '#470F19',
    deepHex: '#2A060C',
    lightHex: '#731E2E',
    ambientBg: '#F7EFF1',
    glowColor: 'rgba(71, 15, 25, 0.5)',
    description: 'Un rouge noir enivrant et ténébreux, quintessence du luxe sombre. La richesse d’un cépage rare concentrée dans un écrin de brillance.',
    notes: ['Fini laqué profond', 'Reflets lie-de-vin', 'Résine végétale haute résistance'],
    inspiration: 'Les caves séculaires de Saint-Émilion et le mystère d’une nuit étoilée.'
  }
];

export const FINISH_OPTIONS: NailFinishOption[] = [
  {
    id: 'glossy',
    label: 'Brillant Miroir',
    sublabel: 'Effet Gel',
    description: 'Un éclat vitré incomparable avec reflet doux de softbox studio.'
  },
  {
    id: 'matte',
    label: 'Mat Velours',
    sublabel: 'Toucher Soyeux',
    description: 'Une texture satinée feutrée d’une élégance contemporaine rare.'
  },
  {
    id: 'chrome',
    label: 'Glazed Chrome',
    sublabel: 'Effet Glacé',
    description: 'Une poudre de perle irisée créant un halo nacré céleste.'
  },
  {
    id: 'glitter',
    label: 'Pailleté Or',
    sublabel: 'Poussière d’Étoile',
    description: 'Des micro-paillettes d’or 24 carats scintillantes sous chaque mouvement.'
  },
  {
    id: 'french',
    label: 'French Chic',
    sublabel: 'Liseré Épuré',
    description: 'Le contraste légendaire du bord libre souligné d’une ligne immaculée.'
  },
  {
    id: 'goldleaf',
    label: 'Feuille d’Or',
    sublabel: 'Nail Art Atelier',
    description: 'Délicats éclats de feuille d’or véritable posés à la main.'
  }
];

export const NAIL_SHAPES: NailShapeOption[] = [
  {
    id: 'almond',
    label: 'Amande Royale',
    description: 'Affine et allonge la main avec une courbure gracieuse et naturelle.'
  },
  {
    id: 'oval',
    label: 'Ovale Parisien',
    description: 'Forme classique harmonieuse, douce et intemporelle pour un port quotidien.'
  },
  {
    id: 'square',
    label: 'Carré Doux',
    description: 'Bords droits aux angles subtilement arrondis pour une allure moderne.'
  },
  {
    id: 'stiletto',
    label: 'Ballerine / Coffin',
    description: 'Silhouette couture effilée à bout plat, audacieuse et sculpturale.'
  }
];

// Exact coordinates calibrated pixel-for-pixel to /src/assets/images/aurelia_hand_full_1794215078146.jpg (1200x896)
export const FINGERS_CONFIG: FingerConfig[] = [
  {
    id: 'thumb',
    name: 'Pouce',
    labelFr: 'Pouce',
    x: 654,
    y: 564,
    rx: 36,
    ry: 44,
    xPercent: 54.5,
    yPercent: 62.9,
    rotate: 18,
    zoomScale: 2.8
  },
  {
    id: 'index',
    name: 'Index',
    labelFr: 'Index',
    x: 888,
    y: 658,
    rx: 30,
    ry: 44,
    xPercent: 74.0,
    yPercent: 73.4,
    rotate: 34,
    zoomScale: 3.2
  },
  {
    id: 'middle',
    name: 'Majeur',
    labelFr: 'Majeur',
    x: 980,
    y: 590,
    rx: 31,
    ry: 45,
    xPercent: 81.7,
    yPercent: 65.8,
    rotate: 32,
    zoomScale: 3.3
  },
  {
    id: 'ring',
    name: 'Annulaire',
    labelFr: 'Annulaire',
    x: 1040,
    y: 466,
    rx: 30,
    ry: 44,
    xPercent: 86.7,
    yPercent: 52.0,
    rotate: 28,
    zoomScale: 3.4
  },
  {
    id: 'pinky',
    name: 'Auriculaire',
    labelFr: 'Auriculaire',
    x: 1007,
    y: 418,
    rx: 26,
    ry: 38,
    xPercent: 83.9,
    yPercent: 46.7,
    rotate: 20,
    zoomScale: 3.5
  }
];
