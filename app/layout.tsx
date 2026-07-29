import './globals.css';

export const metadata = {
  title: 'Tabloid MTCE Benin - Veille strategique',
  description: 'Plateforme de veille strategique sectorielle - Tourisme, Commerce exterieur, Industrie, Investissements prives, Integration africaine',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
