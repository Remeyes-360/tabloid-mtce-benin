import { secteurs } from '@/lib/data';
import { getLiveInfos } from '@/lib/feeds';

export const revalidate = 3600;

export default async function Home() {
  const { items: infos, updatedAt, live } = await getLiveInfos();

  const kpis = {
    total: infos.length,
    opportunites: infos.filter((i) => ['Opportunite', 'Investissement', 'Financement'].includes(i.qualification)).length,
    alertes: infos.filter((i) => i.priorite === 'high').length,
    secteursActifs: new Set(infos.map((i) => i.secteur)).size,
    sources: new Set(infos.map((i) => i.source)).size,
  };

  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const heureMaj = new Date(updatedAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      <header className="header">
        <h1>Tabloid MTCE Benin - Veille strategique</h1>
        <span className="date">{today}</span>
      </header>
      <div className="container">
        <div style={{ marginBottom: 16, fontSize: 13, color: live ? '#0b3d2e' : '#b91c1c', fontWeight: 600 }}>
          {live ? `Flux en direct - derniere mise a jour a ${heureMaj} (rafraichissement automatique toutes les heures)` : `Sources en direct indisponibles - affichage des donnees de demonstration (derniere tentative ${heureMaj})`}
        </div>
        <div className="kpis">
          <div className="kpi"><div className="value">{kpis.total}</div><div className="label">Articles du jour</div></div>
          <div className="kpi"><div className="value">{kpis.opportunites}</div><div className="label">Opportunites</div></div>
          <div className="kpi"><div className="value">{kpis.alertes}</div><div className="label">Alertes critiques</div></div>
          <div className="kpi"><div className="value">{kpis.secteursActifs}</div><div className="label">Secteurs actifs</div></div>
          <div className="kpi"><div className="value">{kpis.sources}</div><div className="label">Sources du jour</div></div>
        </div>

        <nav className="secteur-nav">
          {secteurs.map((s) => (
            <a key={s} href={`#${s}`}>{s}</a>
          ))}
        </nav>

        {secteurs.map((secteur) => {
          const items = infos.filter((i) => i.secteur === secteur);
          return (
            <section key={secteur} id={secteur} className="secteur-section">
              <h2>{secteur}</h2>
              {items.length === 0 ? (
                <div className="no-data">Aucune actualite disponible pour ce secteur actuellement. Nouvelle tentative automatique dans le cadre du rafraichissement horaire.</div>
              ) : (
                <div className="cards-grid">
                  {items.map((info) => (
                    <div key={info.id} className="card">
                      <span className={`badge badge-${info.priorite}`}>
                        {info.priorite === 'high' ? 'Priorite elevee' : info.priorite === 'medium' ? 'Priorite moyenne' : 'Veille informative'}
                      </span>
                      <h3>{info.titre}</h3>
                      <p>{info.resume}</p>
                      <div className="meta">{info.source} - {info.pays} &middot; {info.date}</div>
                      <a href={info.url} target="_blank" rel="noopener noreferrer">Source primaire &rarr;</a>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        <footer className="footer">
          Plateforme de veille strategique - Ministere du Tourisme, du Commerce exterieur, de l'Industrie, de la Promotion des investissements prives et de l'Integration africaine du Benin. Mise a jour automatique toutes les heures.
        </footer>
      </div>
    </>
  );
}
