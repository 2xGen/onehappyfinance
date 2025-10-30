import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Freehold%20vs.%20Lease%20Land%20in%20Aruba.png'

export const metadata = {
  title: 'Eigendom vs. Erfpacht in Aruba: Wat Kopers Moeten Weten [2025 Gids]',
  description: 'Leer het verschil tussen eigendom (freehold) en erfpacht (lease land) in Aruba. Rechten, kosten, financiering, voor- en nadelen en FAQ.',
  keywords: [
    'erfpacht Aruba',
    'eigendom Aruba',
    'kopen op erfpacht Aruba',
    'hypotheek erfpacht Aruba',
    'vastgoed Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/eigendom-vs-erfpacht-in-aruba-2025-gids',
  },
  openGraph: {
    title: 'Eigendom vs. Erfpacht in Aruba: Wat Kopers Moeten Weten [2025 Gids]',
    description: 'Verschillen, kosten, beperkingen en hypotheekopties voor eigendom vs erfpacht in Aruba.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Eigendom vs. Erfpacht in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Eigendom vs. Erfpacht in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/eigendom-vs-erfpacht-in-aruba-2025-gids` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eigendom vs. Erfpacht in Aruba: Wat Kopers Moeten Weten [2025 Gids]',
    image: [FEATURED_IMAGE],
    description: 'Verschil tussen eigendom en erfpacht in Aruba met voor- en nadelen, hypotheekopties en FAQ.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/eigendom-vs-erfpacht-in-aruba-2025-gids' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Kunnen buitenlanders erfpachtgrond kopen?', a: 'Ja, zowel eigendom als erfpacht is mogelijk, maar erfpacht kent vaak jaarlijkse kosten en extra voorwaarden.' },
    { q: 'Wat gebeurt er aan het einde van de erfpacht?', a: 'Meestal verlengbaar bij de overheid, met mogelijk aangepaste voorwaarden en vergoedingen.' },
    { q: 'Kan ik een hypotheek krijgen op erfpacht?', a: 'Ja, maar vaak met een lagere LTV en hogere aanbetaling dan bij eigendom.' },
    { q: 'Is erfpacht goedkoper?', a: 'De instapkosten zijn vaak lager; op lange termijn tellen jaarlijkse kosten en beperkingen mee.' },
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
          <Image src={FEATURED_IMAGE} alt="Eigendom vs. Erfpacht in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Hypotheken</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Eigendom vs. Erfpacht in Aruba: Wat U Moet Weten [2025 Gids]</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Begrijp rechten, jaarlijkse kosten, beperkingen en financieringsverschillen tussen eigendom en erfpacht in Aruba.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="eigendom" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Eigendom</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Volledig eigendom van grond en gebouw zonder einddatum.</li>
              <li>Geen jaarlijkse erfpacht/leasekosten.</li>
              <li>Vrijheid om te verkopen, verhuren of aanpassen (binnen regels).</li>
              <li>Vaak hogere financiering (lager risico voor banken).</li>
              <li>Aanbevolen voor kopers die volledige controle willen.</li>
            </ul>
          </section>

          <section id="erfpacht" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Erfpacht</h2>
            <p className="mt-4 text-foreground/80 leading-7">Grond in eigendom van de overheid, uitgegeven in erfpacht voor lange termijnen (33, 50 of 75 jaar).</p>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Jaarlijkse erfpacht</h3>
                <p className="mt-2 text-foreground/80 leading-7">Vergoeding aan de overheid; hoogte hangt af van locatie, grondwaarde en contract.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Beperkingen verkoop/overdracht</h3>
                <p className="mt-2 text-foreground/80 leading-7">Goedkeuring van de overheid vaak vereist; extra voorwaarden mogelijk voor buitenlanders.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Eigendom van gebouwen</h3>
                <p className="mt-2 text-foreground/80 leading-7">Het gebouw is van u; de grond blijft van de overheid.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Hypotheekmogelijkheden</h3>
                <p className="mt-2 text-foreground/80 leading-7">Hypotheken zijn mogelijk, vaak met striktere LTV-limieten en hogere aanbetaling.</p>
              </div>
            </div>
          </section>

          <section id="plusmin" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Eigendom vs. Erfpacht: Voor- en Nadelen</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Type Eigendom</th>
                    <th className="text-left p-3 font-semibold">Voordelen</th>
                    <th className="text-left p-3 font-semibold">Nadelen</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3">Eigendom</td>
                    <td className="p-3 text-foreground/80">Volledig eigendom, makkelijker verkoop, vaak betere financiering</td>
                    <td className="p-3 text-foreground/80">Hogere aankoopprijs</td>
                  </tr>
                  <tr>
                    <td className="p-3">Erfpacht</td>
                    <td className="p-3 text-foreground/80">Lagere instapkosten, vaak toplocaties</td>
                    <td className="p-3 text-foreground/80">Jaarlijkse kosten, beperkingen, strengere bankvoorwaarden</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Tips voor Kopers</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Controleer het erfpachtcontract (kosten, verlenging, beperkingen).</li>
              <li>Laat een taxatie doen; vereist voor eigendom én erfpacht.</li>
              <li>Denk aan je lange termijnplannen; eigendom is vaak veiliger voor verkoop/verhuur.</li>
              <li>Vergelijk hypotheekopties voor beide vormen.</li>
            </ul>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Kunnen buitenlanders erfpachtgrond in Aruba kopen?', a: 'Ja, maar reken op jaarlijkse vergoedingen en soms goedkeuring van de overheid bij overdracht.' },
                { q: 'Wat gebeurt er aan het einde van de erfpacht?', a: 'Meestal te verlengen met aangepaste voorwaarden en vergoedingen.' },
                { q: 'Hypotheek op erfpacht?', a: 'Mogelijk, vaak strengere LTV en hogere aanbetaling dan bij eigendom.' },
                { q: 'Is erfpacht goedkoper?', a: 'Lagere instapkosten, maar op termijn tellen kosten en beperkingen mee.' },
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
                { id: 'eigendom', label: 'Eigendom' },
                { id: 'erfpacht', label: 'Erfpacht' },
                { id: 'plusmin', label: 'Voor- en Nadelen' },
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
