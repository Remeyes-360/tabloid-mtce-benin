import Parser from 'rss-parser';
import { infos as fallbackInfos, Info, Priorite } from './data';

const parser = new Parser({ timeout: 8000, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TabloidMTCEBot/1.0)' } });

export interface FeedSource {
  secteur: string;
  nom: string;
  url: string;
}

export const sources: FeedSource[] = [
  { secteur: 'Tourisme', nom: 'UNWTO News', url: 'https://www.unwto.org/rss.xml' },
  { secteur: 'Tourisme', nom: 'AllAfrica Tourism', url: 'https://allafrica.com/tools/headlines/rdf/tourism/headlines.rdf' },
  { secteur: 'Commerce exterieur', nom: 'WTO News', url: 'https://www.wto.org/library/rss/latest_news_e.xml' },
  { secteur: 'Commerce exterieur', nom: 'AllAfrica Trade', url: 'https://allafrica.com/tools/headlines/rdf/tradeafrica/headlines.rdf' },
  { secteur: 'Industrie', nom: 'AllAfrica Business', url: 'https://allafrica.com/tools/headlines/rdf/business/headlines.rdf' },
  { secteur: 'Investissements prives', nom: 'AllAfrica Economy', url: 'https://allafrica.com/tools/headlines/rdf/economy/headlines.rdf' },
  { secteur: 'Integration africaine', nom: 'African Union Press', url: 'https://au.int/en/rss.xml' },
  { secteur: 'Integration africaine', nom: 'AllAfrica West Africa', url: 'https://allafrica.com/tools/headlines/rdf/westafrica/headlines.rdf' },
];

const KEYWORDS_BENIN = ['benin', 'cotonou', 'zlecaf', 'afcfta', 'cedeao', 'ecowas', 'uemoa', 'afrique de l\'ouest', 'west africa'];

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
  if (t.includes('financ') || t.includes('fund')) return 'Financement';
  if (t.includes('reform') || t.includes('policy') || t.includes('regulation')) return 'Reforme';
  if (t.includes('partner')) return 'Partenariat';
  if (t.includes('trade') || t.includes('commerce')) return 'Competitivite';
  return 'Veille';
}

export async function getLiveInfos(): Promise<{ items: Info[]; updatedAt: string; live: boolean }> {
  const results: Info[] = [];
  let anySuccess = false;

  await Promise.all(
    sources.map(async (src) => {
      try {
        const feed = await parser.parseURL(src.url);
        const entries = (feed.items || []).slice(0, 4);
        entries.forEach((item, idx) => {
          const titre = item.title || 'Sans titre';
          const resume = (item.contentSnippet || item.content || '').slice(0, 220).trim() || 'Resume non disponible.';
          const text = `${titre} ${resume}`;
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
        if (entries.length > 0) anySuccess = true;
      } catch (e) {
        // Source indisponible : ignoree silencieusement
      }
    })
  );

  if (!anySuccess) {
    return { items: fallbackInfos, updatedAt: new Date().toISOString(), live: false };
  }

  const bySecteur: Record<string, Info[]> = {};
  results.forEach((r) => {
    if (!bySecteur[r.secteur]) bySecteur[r.secteur] = [];
    bySecteur[r.secteur].push(r);
  });
  const finalResults: Info[] = [];
  Object.values(bySecteur).forEach((arr) => {
    arr.sort((a, b) => (a.date < b.date ? 1 : -1));
    finalResults.push(...arr.slice(0, 6));
  });

  return { items: finalResults, updatedAt: new Date().toISOString(), live: true };
}
