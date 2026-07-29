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

// Veille Industrie : contenu curate exclusivement a partir des 5 sources officielles
// UNIDO (ONUDI), African Development Bank (AfDB), World Bank, UNCTAD, OECD Development Centre.
export const industrieInfos: Info[] = [
  {
    id: 'ind-1',
    secteur: 'Industrie',
    titre: 'UNIDO : le rapport sur le developpement industriel 2026 trace l\'avenir de l\'industrialisation',
    resume: 'L\'ONUDI publie son Rapport sur le developpement industriel 2026, qui examine les tendances technologiques et la geographie evolutive de la production, avec des enseignements pour les economies emergentes comme le Benin.',
    source: 'UNIDO (ONUDI)',
    date: '2026-07-08',
    pays: 'International',
    priorite: 'high',
    qualification: 'Tendance',
    url: 'https://www.unido.org/sites/default/files/unido-publications/2025-11/UNIDO%20IDR26.pdf',
  },
  {
    id: 'ind-2',
    secteur: 'Industrie',
    titre: 'AfDB : la Conference economique africaine 2026 met l\'industrialisation au coeur des debats',
    resume: 'A Abidjan, la Banque africaine de developpement et ses partenaires ont ouvert la Conference economique africaine 2026, consacree au renforcement de la resilience commerciale et de l\'industrialisation du continent.',
    source: 'African Development Bank (AfDB)',
    date: '2026-07-12',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Tendance',
    url: 'https://afdb.africa-newsroom.com/press/african-economic-conference-2026-opens-in-abidjan-to-explore-pathways-for-a-more-influential-africa',
  },
  {
    id: 'ind-3',
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
  {
    id: 'ind-4',
    secteur: 'Industrie',
    titre: 'UNCTAD : le commerce intra-africain sous la ZLECAf pourrait renforcer les chaines industrielles',
    resume: 'Selon les analyses de la CNUCED, le renforcement du commerce intra-africain sous l\'AfCFTA pourrait relier des producteurs de matieres premieres comme le Benin aux poles manufacturiers du continent.',
    source: 'UNCTAD',
    date: '2026-07-07',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Integration regionale',
    url: 'https://unctad.org/news/africa-attracting-investment-strategic-industries-challenge-turning-it-broader-industrial',
  },
  {
    id: 'ind-5',
    secteur: 'Industrie',
    titre: 'AfDB : la strategie d\'industrialisation vise a doubler le PIB industriel africain',
    resume: 'La Banque africaine de developpement rappelle sa strategie d\'industrialisation pour l\'Afrique, avec six programmes phares destines a renforcer la diversification economique et la competitivite des entreprises du continent.',
    source: 'African Development Bank (AfDB)',
    date: '2026-02-20',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Financement',
    url: 'https://www.afdb.org/fr/topics-and-sectors/topics/industrialization',
  },
];

// Veille Investissements prives : contenu curate exclusivement a partir des 5 sources officielles
// UNCTAD, World Bank Group, fDi Intelligence, MIGA, IFC.
export const investissementsInfos: Info[] = [
  {
    id: 'inv-1',
    secteur: 'Investissements prives',
    titre: 'UNCTAD : le Rapport sur l\'investissement mondial 2026 souligne le defi de l\'impact du developpement en Afrique',
    resume: 'Selon le World Investment Report 2026 de la CNUCED, les flux d\'IDE vers l\'Afrique ont atteint environ 70 milliards de dollars en 2025, avec un enjeu croissant d\'elargir l\'impact de ces investissements sur le developpement industriel.',
    source: 'UNCTAD',
    date: '2026-07-07',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Investissement',
    url: 'https://unctad.org/news/africa-attracting-investment-strategic-industries-challenge-turning-it-broader-industrial',
  },
  {
    id: 'inv-2',
    secteur: 'Investissements prives',
    titre: 'World Bank Group : lancement du Rapport sur l\'investissement mondial 2026, edition Afrique',
    resume: 'Le Groupe de la Banque mondiale et la CNUCED ont presente l\'edition Afrique du Rapport 2026 sur l\'investissement mondial, mettant en lumiere les opportunites et obstacles pour les investisseurs prives sur le continent.',
    source: 'World Bank Group',
    date: '2026-07-17',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Tendance',
    url: 'https://www.youtube.com/watch?v=MVdTe3qbJxg',
  },
  {
    id: 'inv-3',
    secteur: 'Investissements prives',
    titre: 'fDi Intelligence classe le Benin parmi les destinations emergentes en Afrique de l\'Ouest',
    resume: 'Le classement de fDi Intelligence met en avant l\'amelioration du climat des affaires et les incitations fiscales du Benin pour attirer davantage d\'investisseurs etrangers dans la region.',
    source: 'fDi Intelligence',
    date: '2026-07-26',
    pays: 'Benin',
    priorite: 'medium',
    qualification: 'Investissement',
    url: 'https://www.fdiintelligence.com',
  },
  {
    id: 'inv-4',
    secteur: 'Investissements prives',
    titre: 'MIGA : le Groupe de la Banque mondiale va doubler ses garanties pour l\'Afrique',
    resume: 'L\'Agence multilaterale de garantie des investissements (MIGA) prevoit de plus que doubler l\'emission annuelle de garanties en Afrique, pour atteindre 6,4 milliards de dollars d\'ici 2030 et catalyser l\'investissement prive.',
    source: 'MIGA',
    date: '2026-05-21',
    pays: 'Afrique',
    priorite: 'high',
    qualification: 'Financement',
    url: 'https://www.ifc.org/en/pressroom/2026/world-bank-group-to-double-guarantees-for-africa-to-catalyze-investment-create-job',
  },
  {
    id: 'inv-5',
    secteur: 'Investissements prives',
    titre: 'IFC : la plateforme de garanties du Groupe Banque mondiale vise 190 millions de beneficiaires en Afrique',
    resume: 'Hebergee par la MIGA avec l\'appui de l\'IFC, la nouvelle plateforme de garanties du Groupe de la Banque mondiale ambitionne d\'ameliorer les conditions de vie de 190 millions de personnes en Afrique via l\'investissement prive.',
    source: 'IFC',
    date: '2026-05-21',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Investissement',
    url: 'https://www.ifc.org/en/pressroom/2026/world-bank-group-to-double-guarantees-for-africa-to-catalyze-investment-create-job',
  },
];

// Veille Integration africaine : contenu curate exclusivement a partir des sources officielles
// AfCFTA Secretariat (ZLECAf), ECOWAS Commission (CEDEAO), African Union (UA), UNCTAD.
export const integrationInfos: Info[] = [
  {
    id: 'integ-1',
    secteur: 'Integration africaine',
    titre: 'AfCFTA : le Secretariat reaffirme son soutien a l\'integration commerciale du Benin',
    resume: 'En marge de rencontres internationales, le Secretariat de la ZLECAf a reaffirme son engagement a accompagner le Benin dans la mise en oeuvre de l\'Accord de la zone de libre-echange continentale africaine.',
    source: 'AfCFTA Secretariat',
    date: '2026-06-29',
    pays: 'Benin',
    priorite: 'high',
    qualification: 'Integration regionale',
    url: 'https://x.com/AfCFTA/status/2061423145865670751',
  },
  {
    id: 'integ-2',
    secteur: 'Integration africaine',
    titre: 'AfCFTA : le Forum du commerce numerique 2026 reunit les acteurs de l\'integration africaine a Lagos',
    resume: 'Le Forum du commerce numerique de la ZLECAf a rassemble les parties prenantes du continent pour explorer comment le commerce numerique peut renforcer les chaines de valeur regionales et la connectivite des marches.',
    source: 'AfCFTA Secretariat',
    date: '2026-07-02',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Integration regionale',
    url: 'https://www.facebook.com/ZLECA/posts/-save-the-date-afcfta-digital-trade-forum-2026-the-afcfta-secretariat-and-the-gov/1334459598',
  },
  {
    id: 'integ-3',
    secteur: 'Integration africaine',
    titre: 'CEDEAO : les ambassadeurs du COREP se reunissent a Cotonou pour l\'avenir de l\'integration regionale',
    resume: 'Les ambassadeurs membres du Comite des representants permanents de la CEDEAO se sont reunis a Cotonou, au Benin, pour examiner le Pacte pour l\'avenir de l\'integration regionale en Afrique de l\'Ouest.',
    source: 'ECOWAS Commission (CEDEAO)',
    date: '2026-06-19',
    pays: 'Benin',
    priorite: 'high',
    qualification: 'Integration regionale',
    url: 'https://www.ecowas.int',
  },
  {
    id: 'integ-4',
    secteur: 'Integration africaine',
    titre: 'Union africaine : celebration du cinquantenaire de la CEDEAO et bilan de l\'integration ouest-africaine',
    resume: 'A l\'occasion de son cinquantenaire, la CEDEAO, sous l\'egide de l\'Union africaine, dresse le bilan de cinquante annees d\'integration regionale et des defis politiques et economiques restant a relever.',
    source: 'African Union (Union africaine)',
    date: '2025-05-30',
    pays: 'Afrique de l\'Ouest',
    priorite: 'medium',
    qualification: 'Integration regionale',
    url: 'https://au.int',
  },
  {
    id: 'integ-5',
    secteur: 'Integration africaine',
    titre: 'UNCTAD : le commerce intra-africain progresse mais l\'integration regionale reste inegale',
    resume: 'La CNUCED releve que le commerce intra-africain a atteint 220,3 milliards de dollars en 2025, tandis que l\'integration au sein de certaines communautes economiques regionales, dont la CEDEAO, progresse plus lentement.',
    source: 'UNCTAD',
    date: '2026-07-07',
    pays: 'Afrique',
    priorite: 'medium',
    qualification: 'Integration regionale',
    url: 'https://unctad.org/news/africa-attracting-investment-strategic-industries-challenge-turning-it-broader-industrial',
  },
];

export const infos: Info[] = [
  ...tourismeInfos,
  ...industrieInfos,
  ...investissementsInfos,
  ...integrationInfos,
  {
    id: 'com-1',
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
