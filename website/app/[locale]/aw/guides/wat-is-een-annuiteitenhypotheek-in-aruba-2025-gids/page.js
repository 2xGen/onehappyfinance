import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/What%20Is%20an%20Annuity%20Mortgage%20and%20How%20Does%20It%20Work%20in%20Aruba.png'

export const metadata = {
  title: 'Annuitëitenhypotheek Aruba (2025 Gids) | Hoe Vaste Maandlasten Werken',
  description: 'Leer hoe een annuïteitenhypotheek werkt in Aruba: vaste maandbetalingen, verdeling rente/aflossing, voorwaarden en FAQ.',
  keywords: [
    'annuïteitenhypotheek Aruba',
    'hypotheekvormen Aruba',
    'hypotheekbetalingen Aruba',
    'Banco di Caribe hypotheek',
    'Aruba Bank annuïteitenhypotheek',
    'Arubaanse lening gids',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba-2025-gids',
  },
  openGraph: {
    title: 'Annuitëitenhypotheek Aruba (2025 Gids) | Hoe Vaste Maandlasten Werken',
    description: 'Volledige uitleg van vaste maandbetalingen, rente-aflossingsverdeling en Arubaanse hypotheekvoorwaarden.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Annuitëitenhypotheek Aruba' },
    ],
  },
}

function BreadcrumbSchema({ locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://onehappyfinance.com/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Gidsen', item: `https://onehappyfinance.com/${locale}/aw/guides` },
      { '@type': 'ListItem', position: 3, name: 'Annuïteitenhypotheek in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba-2025-gids` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Annuitëitenhypotheek Aruba (2025 Gids) | Hoe Vaste Maandlasten Werken',
    image: [FEATURED_IMAGE],
    description: 'Hoe werkt een annuïteitenhypotheek in Aruba? Uitleg betalingen, voor- en nadelen, voorwaarden en FAQ.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba-2025-gids' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Is een annuïteitenhypotheek hetzelfde als vaste rente?', a: 'Niet precies. Annuïteit is de betaalstructuur; vaste rente gaat over het percentage. Je kunt annuïtair met vaste of variabele rente hebben.' },
    { q: 'Kunnen niet-inwoners een annuïteitenhypotheek aanvragen?', a: 'Ja. Banken als Aruba Bank en RBC bieden dit aan, vaak met 35–40% eigen inbreng.' },
    { q: 'Wat als ik vroegtijdig verkoop?', a: 'Je kunt aflossen, maar tijdens een vaste renteperiode kan een boete gelden. Check je voorwaarden.' },
    { q: 'Zijn er andere hypotheekvormen in Aruba?', a: 'Ja. Lineair (vaste aflossing, dalende rente) en aflossingsvrij voor specifieke situaties.' },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function Page({ params }) {
  return (
    <article className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
      <ArticleSchema />
      <FaqSchema />
      <BreadcrumbSchema locale={params?.locale || 'nl'} />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-lg bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="relative aspect-[16/9] w-full">
          <Image src={FEATURED_IMAGE} alt="Annuïteitenhypotheek in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Hypotheken</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Wat is een Annuïteitenhypotheek en Hoe Werkt Het in Aruba? (2025 Gids)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">De populairste hypotheekvorm in Aruba — duidelijke uitleg met voorbeelden, voor- en nadelen, en veelgestelde vragen.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="wat" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Wat is een Annuïteitenhypotheek?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Een annuïteitenhypotheek is een lening met vaste maandlasten gedurende de looptijd. Elke betaling bestaat uit rente (kosten van lenen) en aflossing (het deel waarmee je de lening terugbetaalt). De verhouding tussen rente en aflossing verschuift door de tijd — het totaalbedrag per maand blijft gelijk.</p>
          </section>

          <section id="verdeling" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Hoe Werken de Betalingen in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7">In de eerste jaren gaat een groter deel naar rente. Later neemt de rentelast af en stijgt de aflossing, waardoor je vermogen sneller groeit aan het einde van de looptijd.</p>
            <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Jaar</th>
                    <th className="text-left p-3 font-semibold">Maandelijkse Betaling</th>
                    <th className="text-left p-3 font-semibold">Rente</th>
                    <th className="text-left p-3 font-semibold">Aflossing</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ['1', '$1.000', '$750', '$250'],
                    ['10', '$1.000', '$500', '$500'],
                    ['20', '$1.000', '$250', '$750'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="p-3">{row[0]}</td>
                      <td className="p-3">{row[1]}</td>
                      <td className="p-3 text-foreground/80">{row[2]}</td>
                      <td className="p-3 text-foreground/80">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="aruba" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Annuïteitenhypotheken in Aruba: Zo Werken Ze</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Vaste maandlasten — eenvoudig te budgetteren</li>
              <li>Renteaftrekvoordeel — relatief hoger in de eerste jaren</li>
              <li>Lange looptijden — tot 30 jaar voor inwoners, 15–20 jaar voor niet-inwoners</li>
              <li>Snelle verwerking — vaak binnen 5 werkdagen na complete documenten</li>
              <li>Flexibel doel — aankoop, bouw, renovatie of herfinanciering</li>
            </ul>
          </section>

          <section id="voorbeeld" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Voorbeeldscenario</h2>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Koopsom: $400.000</li>
              <li>Lening: $300.000</li>
              <li>Rente: 6%</li>
              <li>Looptijd: 25 jaar</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Maandlast ≈ $1.933. In het begin vooral rente; later vooral aflossing. Na 25 jaar is de hypotheek volledig afgelost.</p>
          </section>

          <section id="plusmin" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Voordelen en Nadelen</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Voordelen</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Vaste maandlasten → makkelijk te plannen</li>
                  <li>Geleidelijk vermogen opbouwen</li>
                  <li>Lagere rentelasten na verloop van tijd</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Nadelen</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Relatief veel rente in de eerste jaren</li>
                  <li>Langzamer vermogen opbouwen in het begin</li>
                  <li>Vervroegd aflossen kan kosten met zich meebrengen</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="voorwaarden" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6) Typische Hypotheekvoorwaarden in Aruba</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Type Lener</th>
                    <th className="text-left p-3 font-semibold">Maximale Looptijd</th>
                    <th className="text-left p-3 font-semibold">Eigen Inbreng</th>
                    <th className="text-left p-3 font-semibold">Lening-tot-Waarde</th>
                    <th className="text-left p-3 font-semibold">Opmerkingen</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ['Inwoner', '30 jaar', '10–25%', 'Tot 90%', 'Annuïtair of lineair'],
                    ['Niet-inwoner', '15–20 jaar', '35–40%', 'Tot 65%', 'Eigen gebruik of vakantiehuis'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="p-3">{row[0]}</td>
                      <td className="p-3">{row[1]}</td>
                      <td className="p-3">{row[2]}</td>
                      <td className="p-3">{row[3]}</td>
                      <td className="p-3 text-foreground/80">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="calculator" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7) Tip: Gebruik een Hypotheekcalculator</h2>
            <p className="mt-4 text-foreground/80 leading-7">Bekijk de calculators van Banco di Caribe, RBC Royal Bank en Aruba Bank om vooraf je maandlasten te berekenen en te zien hoe rente en aflossing veranderen door de tijd.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8) Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Is een annuïteitenhypotheek hetzelfde als vaste rente?', a: 'Niet helemaal. Annuïteit = betaalstructuur; vaste rente = rentepercentage. Je kunt beide combineren.' },
                { q: 'Kunnen niet-inwoners een annuïteitenhypotheek aanvragen?', a: 'Ja, vaak met 35–40% eigen inbreng en extra documenten.' },
                { q: 'Wat als ik vroegtijdig verkoop?', a: 'Je kunt aflossen, maar soms geldt een boete tijdens de vaste renteperiode.' },
                { q: 'Zijn er andere hypotheekvormen?', a: 'Ja. Lineair en aflossingsvrij bestaan ook, afhankelijk van je situatie.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'wat', label: 'Wat is het?' },
                { id: 'verdeling', label: 'Betalingen in de tijd' },
                { id: 'aruba', label: 'Zo werkt het in Aruba' },
                { id: 'voorbeeld', label: 'Voorbeeld' },
                { id: 'plusmin', label: 'Voordelen & Nadelen' },
                { id: 'voorwaarden', label: 'Hypotheekvoorwaarden' },
                { id: 'calculator', label: 'Calculator' },
                { id: 'faq', label: 'FAQ' },
              ].map(({ id, label }) => (
                <a key={id} href={`#${id}`} className="inline-flex items-center justify-between rounded-full border px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors">
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </article>
  )
}
