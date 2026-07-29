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
// UN Tourism (UNWTO), ICAO, WTTC, AfDB, fDi Intelligence. Chaque entree pointe vers
// la page precise consultee (rapport, communique ou barometre).
export const tourismeInfos: Info[] = [
  {
    id: 'tour-1',
    secteur: 'Tourisme',
    titre: 'UN Tourism : l\'Afrique reste la region la plus dynamique du tourisme mondial en 2026',
    resume: 'Le Barometre du tourisme mondial indique une hausse de 4% des arrivees internationales en Afrique au premier trimestre 2026, portee par l\'Afrique subsaharienne et l\'Afrique du Nord. Une opportunite de positionnement pour le Benin sur les marches emetteurs.',
    source: 'UN Tourism',
    date: '2026-07-15',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Tendance',
    url: 'https://www.untourism.int/un-tourism-world-tourism-barometer-data',
  },
  {
    id: 'tour-2',
    secteur: 'Tourisme',
    titre: 'WTTC : le tourisme africain contribuera 241 milliards de dollars a l\'economie en 2026',
    resume: 'Le Conseil mondial du voyage et du tourisme prevoit une croissance de 5,4% du secteur en Afrique en 2026, avec 31,5 millions d\'emplois soutenus. Les depenses des visiteurs internationaux devraient croitre de 6,8% pour atteindre 80 milliards de dollars.',
    source: 'World Travel & Tourism Council (WTTC)',
    date: '2026-06-15',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Opportunite',
    url: 'https://wttc.org/news/kenya-boosts-africas-tourism-growth-emerging-as-a-leading-sustainable-tourism-powerhouse',
  },
  {
    id: 'tour-3',
    secteur: 'Tourisme',
    titre: 'AfDB : la Banque africaine de developpement reaffirme son soutien au secteur touristique africain',
    resume: 'La BAD confirme son engagement envers le tourisme, l\'un des secteurs a plus forte croissance du continent, avec des financements cibles sur les infrastructures et la formation, incluant des pays d\'Afrique de l\'Ouest comme le Benin.',
    source: 'African Development Bank (AfDB)',
    date: '2026-02-26',
    pays: 'Afrique de l\'Ouest',
    priorite: 'medium',
    qualification: 'Financement',
    url: 'https://afdb.africa-newsroom.com/press/tag/tourism',
  },
  {
    id: 'tour-4',
    secteur: 'Tourisme',
    titre: 'ICAO : le trafic aerien international vers l\'Afrique connait sa plus forte croissance en plusieurs annees',
    resume: 'Selon les donnees analysees dans le cadre du Plan strategique 2026-2050 de l\'OACI, la connectivite aerienne s\'ameliore en Afrique de l\'Ouest, un facteur cle pour l\'accessibilite touristique du Benin et de la sous-region.',
    source: 'ICAO (OACI)',
    date: '2026-01-01',
    pays: 'International',
    priorite: 'medium',
    qualification: 'Tendance',
    url: 'https://www.icao.int/about-icao/Council/strategic-plan-2026-2050',
  },
  {
    id: 'tour-5',
    secteur: 'Tourisme',
    titre: 'fDi Intelligence : les investissements greenfield dans le tourisme mondial repartent a la hausse',
    resume: 'Le rapport annuel sur l\'investissement touristique, realise en association avec UN Tourism, identifie de nouvelles opportunites d\'investissement dans l\'hotellerie et les infrastructures touristiques, dont l\'Afrique de l\'Ouest.',
    source: 'fDi Intelligence',
    date: '2026-01-10',
    pays: 'International',
    priorite: 'medium',
    qualification: 'Investissement',
    url: 'https://www.fdiintelligence.com/special-report/3c5c4180-8c42-526d-a6cc-32b88745a7d4',
  },
  {
    id: 'tour-6',
    secteur: 'Tourisme',
    titre: 'AfDB : le Benin enregistre une croissance de 8,1% en 2025, portee par l\'investissement',
    resume: 'La revue de la Banque africaine de developpement souligne les progres economiques du Benin, avec des retombees attendues pour la diversification touristique et le developpement des infrastructures d\'accueil.',
    source: 'African Development Bank (AfDB)',
    date: '2025-03-06',
    pays: 'Benin',
    priorite: 'high',
    qualification: 'Opportunite',
    url: 'https://www.afdb.org/en/countries/west-africa/benin',
  },
];

export const infos: Info[] = [
  ...tourismeInfos,
  {
    id: '2',
    secteur: 'Commerce exterieur',
    titre: 'OMC : nouvelles regles de facilitation des echanges pour les pays enclaves',
    resume: 'L\'OMC publie des lignes directrices pouvant impacter les corridors de transit reliant le Benin aux pays du Sahel.',
    source: 'World Trade Organization',
    date: '2026-07-28',
    pays: 'International',
    priorite: 'medium',
    qualification: 'Reforme',
    url: 'https://www.wto.org',
  },
  {
    id: '3',
    secteur: 'Industrie',
    titre: 'ONUDI : rapport sur l\'industrialisation en Afrique de l\'Ouest',
    resume: 'Le rapport souligne les progres du Benin dans la zone industrielle de Glo-Djigbe et recommande des reformes complementaires.',
    source: 'UNIDO',
    date: '2026-07-27',
    pays: 'Benin',
    priorite: 'high',
    qualification: 'Opportunite',
    url: 'https://www.unido.org',
  },
  {
    id: '4',
    secteur: 'Investissements prives',
    titre: 'fDi Intelligence classe le Benin parmi les destinations emergentes en Afrique',
    resume: 'Le classement met en avant l\'amelioration du climat des affaires et les incitations fiscales pour les investisseurs etrangers.',
    source: 'fDi Intelligence',
    date: '2026-07-26',
    pays: 'Benin',
    priorite: 'medium',
    qualification: 'Investissement',
    url: 'https://www.fdiintelligence.com',
  },
  {
    id: '5',
    secteur: 'Integration africaine',
    titre: 'ZLECAf : avancees sur le protocole relatif au commerce numerique',
    resume: 'Le Secretariat de la ZLECAf annonce une nouvelle etape de negociation pouvant beneficier aux exportateurs beninois.',
    source: 'AfCFTA Secretariat',
    date: '2026-07-25',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Integration regionale',
    url: 'https://au-afcfta.org',
  },
  {
    id: '6',
    secteur: 'Industrie',
    titre: 'La Banque mondiale publie un indice de competitivite industrielle 2026',
    resume: 'Le Benin progresse de plusieurs places, porte par les reformes portuaires et logistiques de Cotonou.',
    source: 'World Bank',
    date: '2026-07-24',
    pays: 'Benin',
    priorite: 'medium',
    qualification: 'Competitivite',
    url: 'https://www.worldbank.org',
  },
];

export function getKpis() {
  return {
    total: infos.length,
    opportunites: infos.filter(i => i.qualification === 'Opportunite' || i.qualification === 'Investissement' || i.qualification === 'Financement').length,
    alertes: infos.filter(i => i.priorite === 'high').length,
    secteursActifs: new Set(infos.map(i => i.secteur)).size,
    sources: new Set(infos.map(i => i.source)).size,
  };
}
