import Parser from 'rss-parser';
import { infos as fallbackInfos, Info, Priorite } from './data';

const parser = new Parser({ timeout: 8000, headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TabloidMTCEBot/1.0)' } });

export interface FeedSource {
  secteur: string;
  nom: string;
  url: string;
}

export const sources: FeedSource[] = [
  // Tourisme (5 sources)
  { secteur: 'Tourisme', nom: 'UNWTO News', url: 'https://www.unwto.org/rss.xml' },
  { secteur: 'Tourisme', nom: 'AllAfrica Tourism', url: 'https://allafrica.com/tools/headlines/rdf/tourism/headlines.rdf' },
  { secteur: 'Tourisme', nom: 'WTTC News', url: 'https://wttc.org/news/rss' },
  { secteur: 'Tourisme', nom: 'eTurboNews Africa', url: 'https://www.eturbonews.com/africa/feed/' },
  { secteur: 'Tourisme', nom: 'Travel Daily News', url: 'https://www.traveldailynews.com/feed/' },

  // Commerce exterieur (5 sources)
  { secteur: 'Commerce exterieur', nom: 'WTO News', url: 'https://www.wto.org/library/rss/latest_news_e.xml' },
  { secteur: 'Commerce exterieur', nom: 'AllAfrica Trade', url: 'https://allafrica.com/tools/headlines/rdf/tradeafrica/headlines.rdf' },
  { secteur: 'Commerce exterieur', nom: 'ITC Trade News', url: 'https://www.intracen.org/rss.xml' },
  { secteur: 'Commerce exterieur', nom: 'UNCTAD News', url: 'https://unctad.org/rss.xml' },
  { secteur: 'Commerce exterieur', nom: 'AllAfrica Economy', url: 'https://allafrica.com/tools/headlines/rdf/economy/headlines.rdf' },

  // Industrie (5 sources)
  { secteur: 'Industrie', nom: 'AllAfrica Business', url: 'https://allafrica.com/tools/headlines/rdf/business/headlines.rdf' },
  { secteur: 'Industrie', nom: 'UNIDO News', url: 'https://www.unido.org/api/opentext/news/rss' },
  { secteur: 'Industrie', nom: 'AfDB News', url: 'https://www.afdb.org/en/news-and-events/rss' },
  { secteur: 'Industrie', nom: 'World Bank News', url: 'https://www.worldbank.org/en/news/all.rss' },
  { secteur: 'Industrie', nom: 'AllAfrica Manufacturing', url: 'https://allafrica.com/tools/headlines/rdf/manufacturing/headlines.rdf' },

  // Investissements prives (5 sources)
  { secteur: 'Investissements prives', nom: 'AllAfrica Economy', url: 'https://allafrica.com/tools/headlines/rdf/economy/headlines.rdf' },
  { secteur: 'Investissements prives', nom: 'World Bank News', url: 'https://www.worldbank.org/en/news/all.rss' },
  { secteur: 'Investissements prives', nom: 'AfDB News', url: 'https://www.afdb.org/en/news-and-events/rss' },
  { secteur: 'Investissements prives', nom: 'IFC News', url: 'https://www.ifc.org/en/rss-feed' },
  { secteur: 'Investissements prives', nom: 'AllAfrica Business', url: 'https://allafrica.com/tools/headlines/rdf/business/headlines.rdf' },

  // Integration africaine (5 sources)
  { secteur: 'Integration africaine', nom: 'African Union Press', url: 'https://au.int/en/rss.xml' },
  { secteur: 'Integration africaine', nom: 'AllAfrica West Africa', url: 'https://allafrica.com/tools/headlines/rdf/westafrica/headlines.rdf' },
  { secteur: 'Integration africaine', nom: 'ECOWAS News', url: 'https://www.ecowas.int/feed/' },
  { secteur: 'Integration africaine', nom: 'AllAfrica Economy', url: 'https://allafrica.com/tools/headlines/rdf/economy/headlines.rdf' },
  { secteur: 'Integration africaine', nom: 'AfCFTA Secretariat', url: 'https://au-afcfta.org/feed/' },
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

const SECTEURS = ['Tourisme', 'Commerce exterieur', 'Industrie', 'Investissements prives', 'Integration africaine'];

export async function getLiveInfos(): Promise<{ items: Info[]; updatedAt: string; live: boolean }> {
  const results: Info[] = [];
  const secteurSuccess: Record<string, boolean> = {};

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
        if (entries.length > 0) secteurSuccess[src.secteur] = true;
      } catch (e) {
        // Source indisponible : ignoree silencieusement
      }
    })
  );

  const anySuccess = Object.keys(secteurSuccess).length > 0;

  const bySecteur: Record<string, Info[]> = {};
  results.forEach((r) => {
    if (!bySecteur[r.secteur]) bySecteur[r.secteur] = [];
    bySecteur[r.secteur].push(r);
  });

  const finalResults: Info[] = [];
  SECTEURS.forEach((sec) => {
    const arr = bySecteur[sec];
    if (arr && arr.length > 0) {
      arr.sort((a, b) => (a.date < b.date ? 1 : -1));
      finalResults.push(...arr.slice(0, 6));
    } else {
      // Aucune source live pour ce secteur : on complete avec le fallback local
      const fallbackForSecteur = fallbackInfos.filter((f) => f.secteur === sec);
      finalResults.push(...fallbackForSecteur.slice(0, 6));
    }
  });

  if (!anySuccess) {
    return { items: fallbackInfos, updatedAt: new Date().toISOString(), live: false };
  }

  return { items: finalResults, updatedAt: new Date().toISOString(), live: true };
}
