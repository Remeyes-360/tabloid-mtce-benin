import Parser from 'rss-parser';
import { infos as fallbackInfos, Info, Priorite } from './data';

const parser = new Parser({ timeout: 8000 });

export interface FeedSource {
  secteur: string;
  nom: string;
  url: string;
}

export const sources: FeedSource[] = [
  { secteur: 'Tourisme', nom: 'UNWTO News', url: 'https://www.unwto.org/rss.xml' },
  { secteur: 'Commerce exterieur', nom: 'WTO News', url: 'https://www.wto.org/english/news_e/news_e.xml' },
  { secteur: 'Industrie', nom: 'UNIDO News', url: 'https://www.unido.org/api/opentext/news/rss' },
  { secteur: 'Investissements prives', nom: 'World Bank News', url: 'https://www.worldbank.org/en/news/all.rss' },
  { secteur: 'Integration africaine', nom: 'African Union Press', url: 'https://au.int/en/rss.xml' },
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
            id: `${src.secteur}-${idx}-${Buffer.from(item.link || titre).toString('base64').slice(0, 8)}`,
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
        // Source indisponible : ignoree silencieusement, fallback plus bas si aucune source ne repond
      }
    })
  );

  if (!anySuccess) {
    return { items: fallbackInfos, updatedAt: new Date().toISOString(), live: false };
  }

  results.sort((a, b) => (a.date < b.date ? 1 : -1));
  return { items: results, updatedAt: new Date().toISOString(), live: true };
}
