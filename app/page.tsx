import { infos, secteurs, getKpis } from '@/lib/data';

export default function Home() {
  const kpis = getKpis();
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <header className="header">
        <h1>Tabloid MTCE Benin - Veille strategique</h1>
        <span className="date">{today}</span>
      </header>
      <div className="container">
        <div className="kpis">
          <div className="kpi"><div className="value">{kpis.total}</div><div className="label">Articles du jour</div></div>
          <div className="kpi"><div className="value">{kpis.opportunites}</div><div className="label">Opportunites</div></div>
          <div className="kpi"><div className="value">{kpis.alertes}</div><div className="label">Alertes critiques</div></div>
          <div className="kpi"><div className="value">{kpis.secteursActifs}</div><div className="label">Secteurs actifs</div></div>
          <div className="kpi"><div className="value">{kpis.sources}</div><div className="label">Sources du jour</div></div>
        </div>

        <nav className="sectors-nav">
          {secteurs.map((s) => (
            <a key={s} href={`#${s}`}>{s}</a>
          ))}
        </nav>

        {secteurs.map((secteur) => {
          const items = infos.filter((i) => i.secteur === secteur);
          if (items.length === 0) return null;
          return (
            <section key={secteur} id={secteur}>
              <div className="section-title">{secteur}</div>
              <div className="cards">
                {items.map((info) => (
                  <div className="card" key={info.id}>
                    <span className={`priority ${info.priorite}`}>
                      {info.priorite === 'high' ? 'Priorite elevee' : info.priorite === 'medium' ? 'Priorite moyenne' : 'Veille informative'}
                    </span>
                    <h3>{info.titre}</h3>
                    <p>{info.resume}</p>
                    <div className="meta">
                      <span>{info.source} - {info.pays}</span>
                      <span>{info.date}</span>
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <a href={info.url} target="_blank" rel="noopener noreferrer">Source primaire &rarr;</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <div className="footer">
          Plateforme de veille strategique - Ministere du Tourisme, du Commerce exterieur, de l'Industrie, de la Promotion des investissements prives et de l'Integration africaine du Benin. Demo MVP - donnees fictives.
        </div>
      </div>
    </>
  );
}
