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

export const infos: Info[] = [
  {
    id: '1',
    secteur: 'Tourisme',
    titre: 'La BAD annonce un financement pour le tourisme cotier en Afrique de l\'Ouest',
    resume: 'Un nouveau programme de financement vise a soutenir les infrastructures touristiques cotieres, avec des opportunites pour le Benin.',
    source: 'Banque africaine de developpement',
    date: '2026-07-28',
    pays: 'Afrique de l\'Ouest',
    priorite: 'high',
    qualification: 'Financement',
    url: 'https://www.afdb.org',
  },
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
