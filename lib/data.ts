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
