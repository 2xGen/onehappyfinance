import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20much%20can%20you%20borrow%20for%20a%20mortgage%20in%20aruba.png'

export const metadata = {
  title: 'Hoeveel Kun Je Lenen voor een Hypotheek in Aruba? [2025 Gids]',
  description: 'Hoe banken in Aruba je leencapaciteit bepalen. Factoren, voorbeeldberekening, algemene berekening, tips en FAQ.',
  keywords: [
    'hypotheek calculator Aruba',
    'hoeveel kan ik lenen Aruba',
    'leencapaciteit Aruba',
    'Aruba hypotheek',
    'lening berekenen Aruba',
    'aanbetaling Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/hoeveel-kun-je-lenen-in-aruba-2025-gids',
  },
  openGraph: {
    title: 'Hoeveel Kun Je Lenen voor een Hypotheek in Aruba? [2025 Gids]',
    description: 'Leer hoe inkomen, leeftijd, aanbetaling en woningtype je leencapaciteit beïnvloeden in Aruba.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Hoeveel kun je lenen in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Hoeveel Kun Je Lenen in Aruba?', item: `https://onehappyfinance.com/${locale}/aw/guides/hoeveel-kun-je-lenen-in-aruba-2025-gids` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hoeveel Kun Je Lenen voor een Hypotheek in Aruba? [2025 Gids]',
    image: [FEATURED_IMAGE],
    description: 'Leencapaciteit in Aruba uitgelegd met factoren, voorbeeld, tips en FAQ.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/hoeveel-kun-je-lenen-in-aruba-2025-gids' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Kunnen niet-inwoners een hypotheek krijgen in Aruba?', a: 'Ja, bij veel banken is dit mogelijk, vaak met 35–40% aanbetaling.' },
    { q: 'Hoe bepaalt de bank mijn maximale hypotheek?', a: 'Op basis van inkomen, leeftijd, verplichtingen, aanbetaling en woningtype/waarde.' },
    { q: 'Verschil tussen maximaal leenbedrag en maandlasten?', a: 'Het maximum is een theoretische grens. Maandlasten moeten passen binnen je budget en bankratio’s.' },
    { q: 'Kan ik later verhogen?', a: 'Herfinanciering of aanvullende lening kan soms, afhankelijk van bank en profiel.' },
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
          <Image src={FEATURED_IMAGE} alt="Hoeveel kun je lenen in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Hypotheken</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Hoeveel Kun Je Lenen voor een Hypotheek in Aruba? [2025 Gids]</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Hoe banken je leencapaciteit bepalen in Aruba, met een helder voorbeeld, algemene berekening en tips.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="factoren" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Factoren die Bepalen Hoeveel Je Kunt Lenen</h2>
            <p className="mt-4 text-foreground/80 leading-7">Banken kijken naar leeftijd, inkomen, aanbetaling, bestaande verplichtingen en woningtype/waarde.</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><span className="font-semibold">Leeftijd bij einde looptijd</span> — vaak maximaal 65–70 jaar.</li>
              <li><span className="font-semibold">Salaris en inkomen</span> — loonstroken; zelfstandigen leveren jaarcijfers/belastingaangiften.</li>
              <li><span className="font-semibold">Aanbetaling</span> — inwoners ~10–25%; niet-inwoners ~35–40%.</li>
              <li><span className="font-semibold">Bestaande verplichtingen</span> — leningen, kaarten, andere maandlasten.</li>
              <li><span className="font-semibold">Woningtype en waarde</span> — LTV-limieten meestal 65–90%.</li>
            </ul>
          </section>

          <section id="voorbeeld" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Voorbeeld Berekening Leencapaciteit</h2>
            <p className="mt-4 text-foreground/80 leading-7">Inwoner-voorbeeld: salaris USD 3.500 per maand; aankoop USD 400.000.</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Aanbetaling: 10% = USD 40.000</li>
              <li>Hypotheekbedrag: USD 360.000</li>
              <li>Maandlast (6%, 25 jaar annuïtair): ≈ USD 2.315</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7">Niet-inwoner-voorbeeld (35% aanbetaling):</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Aanbetaling: USD 140.000</li>
              <li>Hypotheekbedrag: USD 260.000</li>
              <li>Maandlast: ≈ USD 1.678</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Exacte bedragen hangen af van bankbeleid, rente, looptijd en je profiel.</p>
          </section>

          <section id="calculator" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Gebruik een Algemene Hypotheekberekening</h2>
            <p className="mt-4 text-foreground/80 leading-7">Maak een ruwe schatting zonder bankcalculator door uit te gaan van een voorzichtig deel van je netto-inkomen (bijv. 30–35% voor woonlasten), je aanbetaling van de koopsom af te trekken en een voorbeeldrente en -looptijd toe te passen (bijv. 6% en 25 jaar annuïtair). Dit geeft snel inzicht in je leencapaciteit en maandlasten.</p>
          </section>

          <section id="tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Tips om je Leencapaciteit te Verhogen</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Verlaag bestaande schulden voor je aanvraag.</li>
              <li>Hogere aanbetaling verlaagt risico en kan je maximum verhogen.</li>
              <li>Langere looptijd verlaagt maandlasten, maar let op totale rente.</li>
              <li>Niet-inwoners kunnen vaak ook vanuit het buitenland solliciteren.</li>
            </ul>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Kunnen niet-inwoners een hypotheek krijgen in Aruba?', a: 'Ja, vaak met 35–40% aanbetaling.' },
                { q: 'Hoe bepaalt de bank mijn maximale hypotheek?', a: 'Op basis van inkomen, leeftijd, verplichtingen, aanbetaling en woningtype/waarde.' },
                { q: 'Maximaal leenbedrag vs maandlasten?', a: 'Het maximum is een grens; maandlasten moeten betaalbaar blijven en passen binnen bankratio’s.' },
                { q: 'Kan ik later verhogen?', a: 'Herfinanciering of aanvullende lening kan soms, afhankelijk van bank en profiel.' },
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
                { id: 'factoren', label: 'Belangrijke factoren' },
                { id: 'voorbeeld', label: 'Voorbeeld' },
                { id: 'calculator', label: 'Algemene berekening' },
                { id: 'tips', label: 'Tips' },
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
