import Parser from 'rss-parser';
import { infos as fallbackInfos, tourismeInfos, industrieInfos, investissementsInfos, integrationInfos, Info, Priorite } from './data';

const parser = new Parser({ timeout: 8000, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TabloidMTCEBot/1.0)' } });

export interface FeedSource {
  secteur: string;
  nom: string;
  url: string;
}

// Sources RSS par secteur, alignees sur la liste officielle du Google Doc.
// Seul le secteur Commerce exterieur est alimente par des flux RSS publics exploitables.
// Les secteurs Tourisme, Industrie, Investissements prives et Integration africaine
// utilisent exclusivement le contenu curate (data.ts), car leurs sources officielles
// requises (UN Tourism, ICAO, WTTC, AfDB, fDi Intelligence, UNIDO, World Bank, UNCTAD,
// OECD Development Centre, MIGA, IFC, AfCFTA Secretariat, ECOWAS Commission, African Union)
// ne publient pas de flux RSS public exploitable ou bloquent l'acces automatise (403/404/Cloudflare).
export const sources: FeedSource[] = [
  // Commerce exterieur : OMC, Trade Map, UNCTAD, OMD, Banque Mondiale
  { secteur: 'Commerce exterieur', nom: 'OMC Actualites', url: 'https://www.wto.org/library/rss/latest_news_f.xml' },
  { secteur: 'Commerce exterieur', nom: 'AllAfrica Commerce', url: 'https://fr.allafrica.com/tools/headlines/rdf/tradeafrica/headlines.rdf' },
  { secteur: 'Commerce exterieur', nom: 'AllAfrica Economie', url: 'https://fr.allafrica.com/tools/headlines/rdf/economy/headlines.rdf' },
];

const KEYWORDS_BENIN = ['benin', 'cotonou', 'zlecaf', 'afcfat', 'cedeao', 'ecowas', 'uemoa', 'afrique de l\'ouest', 'west africa'];

// Detection simple de la langue francaise (mots-outils courants)
const FRENCH_MARKERS = [' le ', ' la ', ' les ', ' de ', ' des ', ' une ', ' un ', ' et ', ' est ', ' pour ', ' dans ', ' du ', ' au ', ' que ', ' qui ', ' avec ', ' sur ', ' ont ', ' sont ', ' cette ', ' plus ', ' entre '];

function isFrench(text: string): boolean {
  const t = ` ${text.toLowerCase()} `;
  const hits = FRENCH_MARKERS.filter((m) => t.includes(m)).length;
  return hits >= 3;
}

// Decode les entites HTML (numeriques et nommees) pouvant subsister dans les titres/resumes des flux RSS
function decodeHtmlEntities(text: string): string {
  if (!text) return text;
  let result = text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
  const namedEntities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
    '&eacute;': 'e',
    '&egrave;': 'e',
    '&ecirc;': 'e',
    '&euml;': 'e',
    '&agrave;': 'a',
    '&acirc;': 'a',
    '&ccedil;': 'c',
    '&ocirc;': 'o',
    '&ugrave;': 'u',
    '&ucirc;': 'u',
    '&icirc;': 'i',
    '&iuml;': 'i',
  };
  Object.keys(namedEntities).forEach((entity) => {
    result = result.split(entity).join(namedEntities[entity]);
  });
  return result;
}

function scorePriorite(text: string): Priorite {
  const t = text.toLowerCase();
  const hits = KEYWORDS_BENIN.filter((k) => t.includes(k)).length;
  if (hits >= 1) return 'high';
  if (t.includes('afrique') || t.includes('africa')) return 'medium';
  return 'low';
}

function qualifier(text: string): string {
  const t = text.toLowerCase();
  if (t.includes('invest')) return 'Investissement';
  if (t.includes('financ') || t.includes('fond')) return 'Financement';
  if (t.includes('reform') || t.includes('politique') || t.includes('regulation')) return 'Reforme';
  if (t.includes('partenar')) return 'Partenariat';
  if (t.includes('commerce') || t.includes('echange')) return 'Competitivite';
  return 'Veille';
}

const SECTEURS = ['Tourisme', 'Commerce exterieur', 'Industrie', 'Investissements prives', 'Integration africaine'];

// Secteurs alimentes exclusivement par du contenu curate (pas de flux RSS)
const CURATED_SECTEURS: Record<string, Info[]> = {
  'Tourisme': tourismeInfos,
  'Industrie': industrieInfos,
  'Investissements prives': investissementsInfos,
  'Integration africaine': integrationInfos,
};

export async function getLiveInfos(): Promise<{ items: Info[]; updatedAt: string; live: boolean }> {
  const results: Info[] = [];
  const secteurSuccess: Record<string, boolean> = {};
  await Promise.all(
    sources.map(async (src) => {
      try {
        const feed = await parser.parseURL(src.url);
        const entries = (feed.items || []).slice(0, 6);
        entries.forEach((item, idx) => {
          const titre = decodeHtmlEntities(item.title || 'Sans titre');
          const resume = decodeHtmlEntities((item.contentSnippet || item.content || '').slice(0, 220).trim()) || 'Resume non disponible.';
          const text = `${titre} ${resume}`;
          if (!isFrench(text)) return;
          results.push({
            id: `${src.secteur}-${src.nom}-${idx}-${Buffer.from(item.link || titre).toString('base64').slice(0, 8)}`,
            secteur: src.secteur,
            titre,
            resume,
            source: src.nom,
            date: item.pubDate ? new Date(item.pubDate).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
            pays: 'International',
            priorite: scorePriorite(text),
            qualification: qualifier(text),
            url: item.link || src.url,
          });
        });
        if (entries.length > 0) secteurSuccess[src.secteur] = true;
      } catch (e) {
        // Source indisponible : ignoree silencieusement
      }
    })
  );
  // Les secteurs curates sont toujours alimentes par leur contenu officiel exclusif
  Object.keys(CURATED_SECTEURS).forEach((sec) => {
    secteurSuccess[sec] = true;
  });
  const anySuccess = Object.keys(secteurSuccess).length > 0;
  const bySecteur: Record<string, Info[]> = {};
  results.forEach((r) => {
    if (!bySecteur[r.secteur]) bySecteur[r.secteur] = [];
    bySecteur[r.secteur].push(r);
  });
  Object.keys(CURATED_SECTEURS).forEach((sec) => {
    bySecteur[sec] = CURATED_SECTEURS[sec];
  });
  const finalResults: Info[] = [];
  SECTEURS.forEach((sec) => {
    const arr = bySecteur[sec];
    if (arr && arr.length > 0) {
      arr.sort((a, b) => (a.date < b.date ? 1 : -1));
      finalResults.push(...arr.slice(0, 6));
    } else {
      const fallbackForSecteur = fallbackInfos.filter((f) => f.secteur === sec);
      finalResults.push(...fallbackForSecteur.slice(0, 6));
    }
  });
  if (!anySuccess) {
    return { items: fallbackInfos, updatedAt: new Date().toISOString(), live: false };
  }
  return { items: finalResults, updatedAt: new Date().toISOString(), live: true };
}
