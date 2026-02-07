import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/What%20Is%20an%20Annuity%20Mortgage%20and%20How%20Does%20It%20Work%20in%20Aruba.png'

export const metadata = {
  title: 'Wat is een Annuïteitenhypotheek in Aruba? | Werking, Voor- en Nadelen',
  description: 'Annuïteitenhypotheek Aruba: vaste maandlasten, renteaftrek in eerste jaren, annuïteit vs levenhypotheek. Aruba Bank, ENNIA, RBC. Looptijd tot 30 jaar of leeftijd 62.',
  keywords: [
    'annuïteitenhypotheek Aruba',
    'Aruba annuïteitenhypotheek',
    'hypotheekvormen Aruba',
    'hoe werkt annuïteitenhypotheek Aruba',
    'Aruba Bank annuïteitenhypotheek',
    'ENNIA annuïteitenhypotheek',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba',
  },
  openGraph: {
    title: 'Wat is een Annuïteitenhypotheek in Aruba? | Werking, Voor- en Nadelen',
    description: 'Vaste maandlasten, renteaftrek in eerste jaren, annuïteit vs levenhypotheek. Aruba Bank, ENNIA, RBC.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Annuïteitenhypotheek in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Annuïteitenhypotheek in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wat is een Annuïteitenhypotheek in Aruba? | Werking, Voor- en Nadelen',
    image: [FEATURED_IMAGE],
    description: 'Annuïteitenhypotheek Aruba: vaste maandlasten, renteaftrek in eerste jaren, annuïteit vs levenhypotheek. Aruba Bank, ENNIA, RBC.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Wat is een annuïteitenhypotheek in Aruba?', a: 'Een annuïteitenhypotheek biedt vaste maandelijkse betalingen van hoofdsom plus rente. Naarmate de resterende schuld daalt, neemt het rentedeel af en het aflossingsdeel toe, terwijl de totale betaling gelijk blijft.' },
    { q: 'Is een annuïteitenhypotheek gebruikelijk in Aruba?', a: 'Ja. Het is de meest voorkomende hypotheekvorm bij Aruba Bank, ENNIA en RBC Royal Bank.' },
    { q: 'Wat is het verschil tussen annuïteit en levenhypotheek in Aruba?', a: 'Annuïteit: vaste maandelijkse aflossing plus rente. Leven: alleen rentebetalingen, met een levensverzekering om de hoofdsom te sparen, die aan het einde wordt afgelost. Levenhypotheken bieden vaak maximaal fiscaal voordeel.' },
    { q: 'Wat is de maximale looptijd voor een Arubaanse annuïteitenhypotheek?', a: 'Doorgaans tot 30 jaar of tot leeftijd 62, wat zich het eerst voordoet.' },
    { q: 'Welke kosten horen bij een Arubaanse hypotheek?', a: 'Afsluitkosten, notariskosten, overdrachtsbelasting (3% tot AWG 250.000; 6% daarboven) en verzekeringspremies.' },
  ]
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
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Wat is een Annuïteitenhypotheek en Hoe Werkt Het in Aruba?</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Vaste maandlasten, renteaftrek in eerste jaren, annuïteit vs levenhypotheek. Aruba Bank, ENNIA, RBC. Looptijd tot 30 jaar of leeftijd 62.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="what" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Wat is een Annuïteitenhypotheek in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De annuïteitenhypotheek is de meest voorkomende hypotheekvorm in Aruba. Je betaalt een vast maandbedrag voor een vaste periode. Elke betaling bestaat uit hoofdsom en rente; de rente wordt berekend over de openstaande schuld. Naarmate de schuld daalt, neemt het rentedeel af en het aflossingsdeel toe, terwijl het totale maandbedrag gelijk blijft.</p>
          </section>

          <section id="how" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Hoe Werken de Betalingen?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">In de eerste jaren profiteer je van een hogere renteaftrek, dus je nettokosten starten relatief laag. Later in de looptijd stijgen je netto maandlasten naarmate het rentedeel daalt. Het bruto maandbedrag blijft echter gedurende de lening nagenoeg gelijk.</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Vast totaal maandbedrag gedurende de looptijd</li>
              <li>Rente berekend over openstaande schuld</li>
              <li>Aflossingsaandeel stijgt naarmate schuld daalt; renteaandeel daalt</li>
              <li>Doorgaans aangeboden in USD of AWG; looptijd tot 30 jaar of leeftijd 62</li>
            </ul>
          </section>

          <section id="types" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Annuïteit vs Levenhypotheek in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Arubaanse banken bieden doorgaans twee hoofdtypen hypotheken. Beide begrijpen helpt je de juiste keuze te maken.</p>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Annuïteitenhypotheek</h3>
                <p className="mt-2 text-foreground/80 leading-7">Vast maandbedrag van aflossing plus rente. Naarmate de schuld daalt, neemt de rente af en de aflossing toe. Het meest voorkomende type — voorspelbaar en helder.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Levenhypotheek</h3>
                <p className="mt-2 text-foreground/80 leading-7">Tijdens de looptijd betaal je alleen rente. Je sluit een levensverzekering af om te sparen voor de hoofdsom, die aan het einde wordt afgelost. Dit type biedt vaak maximaal fiscaal voordeel gedurende de looptijd.</p>
              </div>
            </div>
          </section>

          <section id="proscons" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Waarom een Annuïteitenhypotheek Kiezen?</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Voordelen</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li><strong>Voorspelbaarheid:</strong> Vaste maandlasten zodat je weet wat je kunt verwachten</li>
                  <li><strong>Lagere initiële kosten:</strong> Hogere renteaftrek in eerste jaren verlaagt nettokosten aan het begin</li>
                  <li><strong>Competitieve rentes:</strong> Veel Arubaanse aanbieders bieden competitieve annuïteitenhypotheekrentes</li>
                  <li><strong>Flexibele looptijden:</strong> Kies aflossingsperiodes die bij je situatie passen</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Punten om rekening mee te houden</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Netto maandlasten stijgen in de tijd naarmate het rentedeel daalt</li>
                  <li>Vaste betalingen kunnen aanvankelijk hoger zijn dan alleen-renteproducten</li>
                  <li>Boetes bij vervroegd aflossen kunnen gelden — check bij je bank</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="costs" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Wat Kost een Annuïteitenhypotheek?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Je maandbedrag hangt af van de rente en het leenbedrag. Hypotheekadviseurs helpen je de beste opties voor je situatie te verkennen. Naast het maandbedrag moet je rekenen op:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Afsluitkosten</li>
              <li>Notariskosten</li>
              <li>Overdrachtsbelasting: 3% voor bedragen tot AWG 250.000; 6% daarboven</li>
              <li>Verzekeringspremies</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7">Tip: gebruik de hypotheekcalculators van Banco di Caribe, RBC Royal Bank en Aruba Bank om je maandlasten vooraf te berekenen.</p>
          </section>

          <section id="eligibility" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6) Wie Komt in Aanmerking?</h2>
            <p className="mt-4 text-foreground/80 leading-7">Banken in Aruba beoordelen inkomen, kredietgeschiedenis, schuldratio (vaak ≤ 40%), aanbetaling en woningtaxatie. Niet-ingezetenen kunnen in aanmerking komen met hogere aanbetaling (vaak 35–40%) en extra documentatie.</p>
            <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Type lener</th>
                    <th className="text-left p-3 font-semibold">Max. looptijd</th>
                    <th className="text-left p-3 font-semibold">Eigen inbreng</th>
                    <th className="text-left p-3 font-semibold">LTV</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-foreground/80">
                  <tr><td className="p-3">Inwoner</td><td className="p-3">30 jaar</td><td className="p-3">10–25%</td><td className="p-3">Tot 90%</td></tr>
                  <tr><td className="p-3">Niet-inwoner</td><td className="p-3">15–20 jaar</td><td className="p-3">35–40%</td><td className="p-3">Tot 65%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="example" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7) Voorbeeld: Eenvoudige Annuïteitbetaling</h2>
            <p className="mt-4 text-foreground/80 leading-7">Voorbeeld met benaderende cijfers, alleen ter illustratie:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Leenbedrag: USD 300.000</li>
              <li>Rente: 6,0% vast</li>
              <li>Looptijd: 25 jaar (300 maanden)</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Maandbedrag ≈ USD 1.933. In de tijd daalt het rentedeel en stijgt het aflossingsdeel, terwijl het totaal ~1.933 blijft.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8) Veelgestelde Vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Wat is een annuïteitenhypotheek in Aruba?', a: 'Een annuïteitenhypotheek biedt vaste maandelijkse betalingen van hoofdsom plus rente. Naarmate de resterende schuld daalt, neemt het rentedeel af en het aflossingsdeel toe, terwijl de totale betaling gelijk blijft.' },
                { q: 'Wat is het verschil tussen annuïteit en levenhypotheek?', a: 'Annuïteit: vast maandbedrag aflossing plus rente. Leven: alleen rentebetalingen, met levensverzekering om de hoofdsom te sparen, afgelost aan het einde. Levenhypotheken bieden vaak maximaal fiscaal voordeel.' },
                { q: 'Wat is de maximale looptijd voor een Arubaanse annuïteitenhypotheek?', a: 'Doorgaans tot 30 jaar of tot leeftijd 62, wat zich het eerst voordoet.' },
                { q: 'Welke banken bieden annuïteitenhypotheken in Aruba?', a: 'Aruba Bank, ENNIA en RBC Royal Bank bieden annuïteitenhypotheken. De voorwaarden verschillen voor inwoners en niet-ingezetenen.' },
                { q: 'Welke kosten horen bij een Arubaanse hypotheek?', a: 'Afsluitkosten, notariskosten, overdrachtsbelasting (3% tot AWG 250.000; 6% daarboven) en verzekeringspremies.' },
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
                { id: 'what', label: 'Wat is het?' },
                { id: 'how', label: 'Hoe werken betalingen' },
                { id: 'types', label: 'Annuïteit vs Leven' },
                { id: 'proscons', label: 'Waarom kiezen' },
                { id: 'costs', label: 'Kosten' },
                { id: 'eligibility', label: 'In aanmerking' },
                { id: 'example', label: 'Voorbeeld' },
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
