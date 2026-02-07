import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20much%20can%20you%20borrow%20for%20a%20mortgage%20in%20aruba.png'

export const metadata = {
  title: 'Hoeveel Kun Je Lenen voor een Hypotheek in Aruba? | Limieten & Calculator',
  description: 'Hypotheek leencapaciteit Aruba: inwoners 90–100% financiering, niet-ingezetenen 50–80%. LTV, inkomenslimiet (30–35% DTI), looptijd tot 35 jaar. Aruba Bank, Banco di Caribe, RBC.',
  keywords: [
    'hypotheekcalculator Aruba',
    'hoeveel kan ik lenen Aruba',
    'leencapaciteit Aruba',
    'Aruba hypotheek LTV',
    'lening berekenen Aruba',
    'aanbetaling Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/hoeveel-kun-je-lenen-in-aruba',
  },
  openGraph: {
    title: 'Hoeveel Kun Je Lenen voor een Hypotheek in Aruba? | Limieten & Calculator',
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
      { '@type': 'ListItem', position: 3, name: 'Hoeveel Kun Je Lenen in Aruba?', item: `https://onehappyfinance.com/${locale}/aw/guides/hoeveel-kun-je-lenen-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hoeveel Kun Je Lenen voor een Hypotheek in Aruba? | Limieten & Calculator',
    image: [FEATURED_IMAGE],
    description: 'Hypotheek leencapaciteit Aruba: inwoners 90–100%, niet-ingezetenen 50–80%. LTV, inkomenslimiet, looptijden. Aruba Bank, Banco di Caribe, RBC.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/hoeveel-kun-je-lenen-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Hoeveel kunnen inwoners lenen voor een hypotheek in Aruba?', a: 'Inwoners kunnen vaak tot 90–100% van de woningwaarde financieren via instellingen zoals AHI of RBC, afhankelijk van locatie en profiel.' },
    { q: 'Hoeveel kunnen niet-ingezetenen lenen in Aruba?', a: 'Niet-ingezetenen krijgen doorgaans 50–80% financiering, met 20–50% aanbetaling. Sommige banken beperken de LTV tot circa 60% voor buitenlandse investeringen.' },
    { q: 'Welke inkomenslimiet hanteren Arubaanse banken voor hypotheken?', a: 'Maandelijkse hypotheekbetalingen mogen meestal niet meer dan 30–35% van het netto-inkomen bedragen.' },
    { q: 'Wat zijn typische hypotheekrentes en looptijden in Aruba?', a: 'Rentes starten vaak rond 5–5,08%. Looptijden zijn doorgaans 15–30 jaar, vaak met aflossing vóór pensionering.' },
    { q: 'Kan ik later meer lenen?', a: 'Herfinanciering of extra leningen kan mogelijk zijn, afhankelijk van de bank en je profiel.' },
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
          <Image src={FEATURED_IMAGE} alt="Hoeveel kun je lenen in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Hypotheken</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Hoeveel Kun Je Lenen voor een Hypotheek in Aruba?</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Inwoners kunnen vaak 90–100% financieren; niet-ingezetenen doorgaans 50–80%. Looptijd tot 35 jaar. Inkomenslimiet 30–35% van netto. Aruba Bank, Banco di Caribe, RBC.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="limits" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Kernfactoren en Limieten voor Leencapaciteit</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Hypotheek leencapaciteit in Aruba verschilt per verblijfsstatus. Inwoners kunnen vaak tot 90–100% van de woningwaarde financieren; niet-ingezetenen zijn meestal beperkt tot 50–80% financiering, met 20–50% aanbetaling. Looptijden kunnen tot 35 jaar gaan, met schulddienstverlening doorgaans beperkt tot 30–35% van het netto-inkomen.</p>
            <div className="mt-5 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Factor</th>
                    <th className="text-left p-3 font-semibold">Typisch bereik</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-foreground/80">
                  <tr><td className="p-3">Inwoners</td><td className="p-3">Tot 100% financiering (AHI); RBC biedt 90–95% afhankelijk van locatie</td></tr>
                  <tr><td className="p-3">Niet-ingezetenen</td><td className="p-3">50–80% financiering; 20–50% aanbetaling vereist</td></tr>
                  <tr><td className="p-3">Loan-to-Value (LTV)</td><td className="p-3">Sommige banken beperken tot ~60% van taxatiewaarde voor buitenlandse investeringen; 40–50% aanbetaling</td></tr>
                  <tr><td className="p-3">Inkomenslimiet</td><td className="p-3">Maandelijkse hypotheekbetalingen mogen meestal niet meer dan 30–35% van netto-inkomen zijn</td></tr>
                  <tr><td className="p-3">Looptijden</td><td className="p-3">15–30 jaar, vaak afgelost vóór pensionering</td></tr>
                  <tr><td className="p-3">Rentes</td><td className="p-3">Start vaak rond 5% tot 5,08%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Pre-approval wordt sterk aanbevolen. Werk samen met lokale instellingen zoals Aruba Bank, Banco di Caribe of RBC Royal Bank om je specifieke leencapaciteit vast te stellen op basis van inkomen, leeftijd en woningtype.</p>
          </section>

          <section id="factors" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Factoren die Bepalen Hoeveel Je Kunt Lenen</h2>
            <p className="mt-4 text-foreground/80 leading-7">Arubaanse aanbieders kijken naar leeftijd, inkomen, aanbetaling, bestaande verplichtingen en woningtype/waarde.</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><span className="font-semibold">Leeftijd bij einde looptijd</span> — maximumleeftijd vaak 65–70 jaar bij afloop; lening afgelost vóór pensionering.</li>
              <li><span className="font-semibold">Salaris en inkomen</span> — loonstroken; zelfstandigen leveren jaarcijfers/belastingaangiften.</li>
              <li><span className="font-semibold">Aanbetaling</span> — inwoners vaak 10–25%; niet-ingezetenen doorgaans 20–50%.</li>
              <li><span className="font-semibold">Bestaande verplichtingen</span> — leningen, kaarten, andere maandelijkse schulden.</li>
              <li><span className="font-semibold">Woningtype en waarde</span> — LTV-limieten variëren; inwoners tot 90–100%, niet-ingezetenen 50–80%.</li>
            </ul>
          </section>

          <section id="example" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Voorbeeld Berekening Leencapaciteit</h2>
            <p className="mt-4 text-foreground/80 leading-7">Inwoner-voorbeeld: salaris USD 3.500 per maand; doel-aankoop USD 400.000.</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Aanbetaling: 10% = USD 40.000</li>
              <li>Leenbedrag: USD 360.000</li>
              <li>Maandbedrag (6%, 25 jaar annuïtair): ≈ USD 2.315</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7">Niet-inwoner-voorbeeld (35% aanbetaling):</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Aanbetaling: USD 140.000</li>
              <li>Leenbedrag: USD 260.000</li>
              <li>Maandbedrag: ≈ USD 1.678</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Exacte bedragen hangen af van bankbeleid, rente, looptijd en je profiel.</p>
          </section>

          <section id="calculator" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Gebruik een Hypotheekcalculator</h2>
            <p className="mt-4 text-foreground/80 leading-7">Gebruik een online hypotheekcalculator om je maximale leenbedrag en maandbedrag te schatten. Vul inkomen, rente, looptijd en aanbetaling in om te zien hoe elke factor je leencapaciteit beïnvloedt. Zoek op &quot;hypotheekcalculator&quot; voor een betrouwbaar instrument dat annuïteitberekeningen ondersteunt.</p>
          </section>

          <section id="tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Tips om je Leencapaciteit te Verhogen</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Verlaag bestaande schulden vóór je aanvraag.</li>
              <li>Hogere aanbetaling verlaagt het risico voor de bank.</li>
              <li>Overweeg een langere looptijd voor lagere maandlasten.</li>
              <li>Niet-ingezetenen kunnen bij grote banken solliciteren terwijl ze in het buitenland wonen.</li>
            </ul>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6) Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Hoeveel kunnen inwoners lenen voor een hypotheek in Aruba?', a: 'Inwoners kunnen vaak tot 90–100% van de woningwaarde financieren via instellingen zoals AHI of RBC, afhankelijk van locatie en profiel.' },
                { q: 'Hoeveel kunnen niet-ingezetenen lenen in Aruba?', a: 'Niet-ingezetenen krijgen doorgaans 50–80% financiering, met 20–50% aanbetaling. Sommige banken beperken de LTV tot circa 60% voor buitenlandse investeringen.' },
                { q: 'Welke inkomenslimiet hanteren Arubaanse banken voor hypotheken?', a: 'Maandelijkse hypotheekbetalingen mogen meestal niet meer dan 30–35% van het netto-inkomen bedragen.' },
                { q: 'Wat zijn typische hypotheekrentes en looptijden in Aruba?', a: 'Rentes starten vaak rond 5–5,08%. Looptijden zijn doorgaans 15–30 jaar, vaak met aflossing vóór pensionering.' },
                { q: 'Kan ik later meer lenen?', a: 'Herfinanciering of extra leningen kan mogelijk zijn, afhankelijk van de bank en je profiel.' },
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
                { id: 'limits', label: 'Limieten' },
                { id: 'factors', label: 'Factoren' },
                { id: 'example', label: 'Voorbeeld' },
                { id: 'calculator', label: 'Calculator' },
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
