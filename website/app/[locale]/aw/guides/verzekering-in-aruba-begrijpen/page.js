import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/insurance%20on%20aruba.png'

export const metadata = {
  title: 'Verzekering in Aruba Gids – Gezondheid, Auto, Woning & Aansprakelijkheid',
  description: 'Leer de basis van verzekeringen in Aruba voor inwoners, expats en bezoekers: AZV-ziektekosten, verplichte motorverzekering, woning-, aansprakelijkheids- en bedrijfsverzekering.',
  keywords: [
    'verzekering Aruba',
    'ziektekostenverzekering Aruba',
    'AZV Aruba',
    'autoverzekering Aruba',
    'woonverzekering Aruba',
    'expat verzekering Aruba',
    'reisverzekering Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/verzekering-in-aruba-begrijpen',
  },
  openGraph: {
    title: 'Verzekering in Aruba Gids – Gezondheid, Auto, Woning & Aansprakelijkheid',
    description: 'Leer de basis van verzekeringen in Aruba voor inwoners, expats en bezoekers, inclusief gezondheid, motor, eigendom en aansprakelijkheid.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Verzekering in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Verzekering in Aruba Begrijpen', item: `https://onehappyfinance.com/${locale}/aw/guides/verzekering-in-aruba-begrijpen` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Verzekering in Aruba Begrijpen: Eenvoudige Gids voor Inwoners en Expats',
    image: [FEATURED_IMAGE],
    description: 'Leer de basis van verzekeringen in Aruba voor inwoners, expats en bezoekers, inclusief gezondheid (AZV), motor, eigendom en aansprakelijkheid.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/verzekering-in-aruba-begrijpen' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Is een ziektekostenverzekering verplicht in Aruba?', a: 'Inwoners en werknemers moeten zich inschrijven voor het publieke zorgsysteem (AZV). Bezoekers en expats wordt sterk aangeraden om een reis- of particuliere ziektekostenverzekering te hebben, want buitenlandse polissen worden meestal niet geaccepteerd.' },
    { q: 'Is een autoverzekering verplicht in Aruba?', a: 'Ja. Alle voertuigen in Aruba moeten een WA-verzekering (aansprakelijkheid) hebben. Autoverzekering bij huurauto\'s dekt dit vaak al, maar internationale bestuurders moeten hun dekking controleren.' },
    { q: 'Wat is AZV-verzekering in Aruba?', a: 'AZV (Algemene Ziektekosten Verzekering) is het publieke zorgsysteem dat basisdekking biedt voor inwoners en werknemers, inclusief huisartsbezoeken, ziekenhuiszorg en essentiële medicijnen.' },
    { q: 'Heb ik een reisverzekering nodig voor Aruba?', a: 'Ja. Bezoekers en expats wordt sterk aangeraden om een reis- of particuliere ziektekostenverzekering te hebben voor spoedgevallen, ziekenhuisopname of medische evacuatie, omdat buitenlandse zorgpolissen meestal niet worden geaccepteerd.' },
    { q: 'Is een woonverzekering verplicht in Aruba?', a: 'Een woning- of eigendomsverzekering is optioneel maar wordt aanbevolen voor huiseigenaren en huurders. Het beschermt tegen brand, diefstal of natuurrampen.' },
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
          <Image src={FEATURED_IMAGE} alt="Verzekering in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Verzekering in Aruba Begrijpen: Eenvoudige Gids voor Inwoners en Expats</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Leer de basis van verzekeringen in Aruba—van verplichte AZV-ziektekosten en motorverzekering tot optionele woning-, aansprakelijkheids- en bedrijfsverzekeringen.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="overview" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Overzicht van Verzekeringen in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Verzekeringen in Aruba combineren verplichte publieke dekking met optionele particuliere polissen. Inwoners en werknemers moeten zich inschrijven voor het publieke zorgsysteem (AZV). Bestuurders moeten een WA-verzekering hebben voor alle voertuigen. Bezoekers en expats wordt sterk aangeraden om een reis- of particuliere ziektekostenverzekering te hebben, want buitenlandse polissen worden meestal niet geaccepteerd. Andere veelvoorkomende soorten verzekering zijn woning/eigendom, persoonlijke aansprakelijkheid en bedrijfsdekking.</p>
          </section>

          <section id="health" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Ziektekostenverzekering in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Het publieke zorgsysteem, de Algemene Ziektekosten Verzekering (AZV), biedt basisdekking voor inwoners en werknemers. Dit omvat huisartsbezoeken, ziekenhuiszorg en essentiële medicijnen.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Voor bezoekers of expats wordt een particuliere of reisverzekering aanbevolen, met name voor spoedgevallen, ziekenhuisopname of medische evacuatie. Buitenlandse zorgpolissen worden meestal niet geaccepteerd in Aruba.</p>
          </section>

          <section id="motor" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Motor- en Voertuigverzekering</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Alle voertuigen in Aruba zijn wettelijk verplicht een WA-verzekering (aansprakelijkheid derden) te hebben, die schade aan anderen dekt. Autoverzekering bij huurauto&apos;s dekt dit vaak al, maar het is verstandig om de dekking te controleren, vooral voor internationale bestuurders.</p>
          </section>

          <section id="property" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Persoonlijke Aansprakelijkheid en Eigendomsverzekering</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Persoonlijke aansprakelijkheidsverzekering beschermt tegen claims van derden voor onbedoelde schade. Het sluit doorgaans opzettelijke schade of contractuele verplichtingen uit.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eigendoms- of woonverzekering beschermt uw vermogen tegen risico&apos;s als brand, diefstal of natuurrampen. Deze polissen zijn optioneel maar worden aanbevolen, met name voor huiseigenaren en huurders.</p>
          </section>

          <section id="business" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Bedrijfsverzekering</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Lokale bedrijven kunnen op maat gemaakte dekking krijgen voor hun activa, werknemers en activiteiten. Polissen variëren sterk afhankelijk van het type en de omvang van het bedrijf.</p>
          </section>

          <section id="practical" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Praktische Overwegingen</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>Medische spoedgevallen:</strong> Ernstige gevallen kunnen een overbrenging naar Curaçao of de Verenigde Staten vereisen.</li>
              <li><strong>Veiligheid:</strong> Aruba is over het algemeen veilig, maar verzekering is belangrijk voor activiteiten als watersport of autorijden.</li>
              <li><strong>Apotheken en toegang tot zorg:</strong> Er bestaan zowel publieke als particuliere opties; inwoners moeten zich registreren bij een huisarts voor routinezorg.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Voor uitgebreide dekking afgestemd op individuele behoeften wordt altijd aanbevolen om erkende lokale verzekeringsmaatschappijen te raadplegen.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Is een ziektekostenverzekering verplicht in Aruba?', a: 'Inwoners en werknemers moeten zich inschrijven voor het publieke zorgsysteem (AZV). Bezoekers en expats wordt sterk aangeraden om een reis- of particuliere ziektekostenverzekering te hebben, want buitenlandse polissen worden meestal niet geaccepteerd.' },
                { q: 'Is een autoverzekering verplicht in Aruba?', a: 'Ja. Alle voertuigen in Aruba moeten een WA-verzekering hebben. Autoverzekering bij huurauto\'s dekt dit vaak al, maar internationale bestuurders moeten hun dekking controleren.' },
                { q: 'Wat is AZV-verzekering in Aruba?', a: 'AZV (Algemene Ziektekosten Verzekering) is het publieke zorgsysteem dat basisdekking biedt voor inwoners en werknemers, inclusief huisartsbezoeken, ziekenhuiszorg en essentiële medicijnen.' },
                { q: 'Heb ik een reisverzekering nodig voor Aruba?', a: 'Ja. Bezoekers en expats wordt sterk aangeraden om een reis- of particuliere ziektekostenverzekering te hebben voor spoedgevallen, ziekenhuisopname of medische evacuatie, omdat buitenlandse zorgpolissen meestal niet worden geaccepteerd.' },
                { q: 'Is een woonverzekering verplicht in Aruba?', a: 'Een woning- of eigendomsverzekering is optioneel maar wordt aanbevolen voor huiseigenaren en huurders. Het beschermt tegen brand, diefstal of natuurrampen.' },
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
                { id: 'overview', label: 'Overzicht' },
                { id: 'health', label: 'Ziektekostenverzekering' },
                { id: 'motor', label: 'Motor & Voertuig' },
                { id: 'property', label: 'Aansprakelijkheid & Eigendom' },
                { id: 'business', label: 'Bedrijfsverzekering' },
                { id: 'practical', label: 'Praktische Overwegingen' },
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
