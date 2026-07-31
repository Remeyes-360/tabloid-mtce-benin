export type Priorite = 'high' | 'medium' | 'low';

export interface Info {
  id: string;
  secteur: string;
  titre: string;
  resume: string;
  source: string;
  date: string;
  pays: string;
  priorite: Priorite;
  qualification: string;
  url: string;
}

export const secteurs = [
  'Tourisme',
  'Commerce exterieur',
  'Industrie',
  'Investissements prives',
  'Integration africaine',
];

// Veille Tourisme : contenu curate exclusivement a partir des 5 sources officielles
// UN Tourism (UNWTO), ICAO, WTTC, AfDB, fDi Intelligence.
export const tourismeInfos: Info[] = [
  {
    id: 'tour-1',
    secteur: 'Tourisme',
    titre: 'WTTC : le tourisme africain contribuera 241 milliards de dollars a l\'economie en 2026',
    resume: 'Selon les nouvelles donnees de recherche d\'impact economique 2026 du WTTC, le secteur du voyage et du tourisme devrait croitre de 5,4% en Afrique, soutenant 31,5 millions d\'emplois et generant 80 milliards de dollars de depenses des visiteurs internationaux.',
    source: 'World Travel & Tourism Council (WTTC)',
    date: '2026-06-15',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Opportunite',
    url: 'https://wttc.org/news/kenya-boosts-africas-tourism-growth-emerging-as-a-leading-sustainable-tourism-powerhouse',
  },
  {
    id: 'tour-2',
    secteur: 'Tourisme',
    titre: 'UN Tourism : les arrivees internationales progressent de 2% en Afrique au premier trimestre 2026',
    resume: 'Le Barometre du tourisme mondial de UN Tourism indique une croissance des arrivees touristiques malgre les perturbations liees aux tensions au Moyen-Orient, confirmant la resilience du secteur touristique africain, dont le Benin.',
    source: 'UN Tourism',
    date: '2026-07-20',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Tendance',
    url: 'https://www.untourism.int/',
  },
  {
    id: 'tour-3',
    secteur: 'Tourisme',
    titre: 'fDi Intelligence : des defis persistants freinent la relance du tourisme africain',
    resume: 'Selon fDi Intelligence, encourager les voyages intra-africains sera essentiel pour renforcer la resilience du secteur touristique et attirer davantage d\'investissements directs etrangers sur le continent, notamment en Afrique de l\'Ouest.',
    source: 'fDi Intelligence',
    date: '2026-07-18',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Investissement',
    url: 'https://www.fdiintelligence.com/content/bf688257-9034-5d0e-8e3e-2d1c29ecb096',
  },
  {
    id: 'tour-4',
    secteur: 'Tourisme',
    titre: 'AfDB : la croissance economique africaine ralentirait a 4,2% en 2026, un facteur a surveiller pour le tourisme',
    resume: 'La Banque africaine de developpement prevoit un leger ralentissement de la croissance continentale en raison des tensions geopolitiques et de la hausse des couts de l\'energie, avec des implications pour les investissements touristiques regionaux.',
    source: 'African Development Bank (AfDB)',
    date: '2026-05-30',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Tendance',
    url: 'https://www.afdb.org/fr/documents-publications/perspectives-economiques-en-afrique',
  },
  {
    id: 'tour-5',
    secteur: 'Tourisme',
    titre: 'ICAO : le Plan strategique 2026-2050 vise a renforcer la connectivite aerienne en Afrique',
    resume: 'L\'OACI poursuit la mise en oeuvre de son nouveau Plan strategique, avec un accent sur la connectivite aerienne en Afrique de l\'Ouest, un facteur cle pour l\'accessibilite touristique du Benin et de la sous-region.',
    source: 'ICAO (OACI)',
    date: '2026-04-19',
    pays: 'International',
    priorite: 'medium',
    qualification: 'Tendance',
    url: 'https://www.icao.int/about-icao/Council/strategic-plan-2026-2050',
  },
];

// Veille Industrie : contenu curate exclusivement a partir des 5 sources officielles
// UNIDO (ONUDI), African Development Bank (AfDB), World Bank, UNCTAD, OECD Development Centre.
export const industrieInfos: Info[] = [
  {
    id: 'ind-1',
    secteur: 'Industrie',
    titre: 'UNIDO : l\'Assemblee generale des Nations Unies proclame la 4e Decennie du developpement industriel pour l\'Afrique',
    resume: 'La proclamation de l\'IDDA IV marque une nouvelle ere pour l\'industrialisation du continent, avec un engagement international renouvele pour soutenir la transformation structurelle des economies africaines, dont celle du Benin.',
    source: 'UNIDO (ONUDI)',
    date: '2026-07-25',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Opportunite',
    url: 'https://www.unido.org/news/united-nations-general-assembly-proclaims-fourth-industrial-development-decade-africa-idda-iv-launching-new-era-africas-industrial-transformation',
  },
  {
    id: 'ind-2',
    secteur: 'Industrie',
    titre: 'UNCTAD : l\'investissement dans les secteurs strategiques progresse mais la transformation industrielle reste inegale',
    resume: 'Le Rapport sur l\'investissement mondial 2026 souligne que l\'Afrique attire des investissements croissants dans l\'energie, les mineraux critiques et certaines activites manufacturieres, avec un potentiel de valorisation locale pour des pays comme le Benin.',
    source: 'UNCTAD',
    date: '2026-07-16',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Investissement',
    url: 'https://unctad.org/meeting/africa-launch-world-investment-report-2026',
  },
  {
    id: 'ind-3',
    secteur: 'Industrie',
    titre: 'AfDB : la Conference economique africaine 2026 met l\'industrialisation au coeur des debats a Abidjan',
    resume: 'La Banque africaine de developpement et ses partenaires ont ouvert la Conference economique africaine 2026, consacree au renforcement de la resilience commerciale et de l\'industrialisation du continent face a un monde multipolaire.',
    source: 'African Development Bank (AfDB)',
    date: '2026-07-12',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Tendance',
    url: 'https://afdb.africa-newsroom.com/press/african-economic-conference-2026-opens-in-abidjan-to-explore-pathways-for-a-more-influential-africa',
  },
  {
    id: 'ind-4',
    secteur: 'Industrie',
    titre: 'UNIDO : le Rapport sur le developpement industriel 2026 explore l\'avenir de l\'industrialisation mondiale',
    resume: 'L\'ONUDI publie son Rapport sur le developpement industriel 2026, avec un chapitre dedie a l\'Afrique subsaharienne identifiant les principaux obstacles a l\'industrialisation, dont les contraintes d\'infrastructure et de financement.',
    source: 'UNIDO (ONUDI)',
    date: '2026-07-08',
    pays: 'International',
    priorite: 'medium',
    qualification: 'Tendance',
    url: 'https://www.unido.org/sites/default/files/unido-publications/2025-11/UNIDO%20IDR26.pdf',
  },
  {
    id: 'ind-5',
    secteur: 'Industrie',
    titre: 'World Bank : les Perspectives economiques en Afrique 2026 appellent a une refonte du financement du developpement',
    resume: 'Le rapport souligne la necessite de reformes profondes dans le financement industriel et la gestion des politiques publiques pour soutenir la transformation structurelle en Afrique, dont le Benin.',
    source: 'World Bank',
    date: '2026-05-27',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Reforme',
    url: 'https://www.afdb.org/fr/documents-publications/perspectives-economiques-en-afrique',
  },
];

