import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png'

export const metadata = {
  title: 'Kunnen Buitenlanders een Huis Kopen op Aruba? [Gids 2025]',
  description: 'Ja — buitenlanders kunnen een woning kopen op Aruba. Uitleg over eigendomsgrond vs. erfpacht, kosten, financiering en het juridische proces.',
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba-gids-2025',
  },
  openGraph: {
    title: 'Kunnen Buitenlanders een Huis Kopen op Aruba? [Gids 2025]',
    description: 'Eigendom vs. erfpacht, proces, kosten, en hypotheekmogelijkheden voor niet-ingezetenen.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Kunnen Buitenlanders een Huis Kopen op Aruba? [Gids 2025]' },
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
      { '@type': 'ListItem', position: 3, name: 'Kunnen Buitenlanders een Huis Kopen op Aruba? [Gids 2025]', item: `https://onehappyfinance.com/${locale}/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba-gids-2025` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kunnen Buitenlanders een Huis Kopen op Aruba? [Gids 2025]',
    image: [FEATURED_IMAGE],
    description: 'Ja — buitenlanders kunnen een woning kopen op Aruba. Eigendom vs. erfpacht, kosten, proces en financiering voor niet-ingezetenen.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba-gids-2025' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kan ik als buitenlander een woning kopen op Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, volledig legaal. U hoeft geen inwoner te zijn om eigenaar te worden van een woning of appartement.' } },
      { '@type': 'Question', name: 'Wat is het verschil tussen erfpacht en eigendomsgrond?', acceptedAnswer: { '@type': 'Answer', text: 'Bij erfpacht betaalt u jaarlijks een canon aan de overheid voor het gebruik van de grond. Bij eigendomsgrond bent u volledig eigenaar van grond en woning.' } },
      { '@type': 'Question', name: 'Kan ik als niet-ingezetene een hypotheek krijgen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Banken zoals Aruba Bank en RBC bieden hypotheken aan voor buitenlanders, vaak met een aanbetaling vanaf circa 35%.' } },
      { '@type': 'Question', name: 'Hoe lang duurt het om een woning te kopen?', acceptedAnswer: { '@type': 'Answer', text: 'Gemiddeld 3–6 weken vanaf het moment dat het koopcontract is getekend en alle documenten compleet zijn.' } },
      { '@type': 'Question', name: 'Moet ik op Aruba wonen om te kunnen kopen?', acceptedAnswer: { '@type': 'Answer', text: 'Nee. Veel buitenlanders kopen een tweede huis of vakantiewoning zonder op het eiland te wonen.' } },
    ],
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
          <Image src={FEATURED_IMAGE} alt="Kunnen Buitenlanders een Huis Kopen op Aruba?" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Kunnen Buitenlanders een Huis Kopen op Aruba? [Gids 2025]</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Het korte antwoord: ja, dat kan — en hier leest u precies hoe.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="q1" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Kunnen Buitenlanders een Woning Kopen op Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Ja, buitenlanders mogen zonder beperkingen vastgoed kopen op Aruba. De overheid moedigt dit aan. U kunt een huis, appartement of perceel kopen — op eigendoms- of erfpachtgrond. De procedure lijkt op die voor inwoners; financiering en grondtype zijn vaak de verschillen.</p>
          </section>

          <section id="q2" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Verschil Tussen Eigendomsgrond en Erfpachtgrond</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Eigendomsgrond</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Volledige eigendom van grond en woning</li>
                  <li>Geen jaarlijkse grondkosten</li>
                  <li>Vrij verkopen, verhuren of verbouwen (binnen regels)</li>
                  <li>Vaak duurder en schaarser</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Erfpachtgrond</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Grond van de overheid; 60 jaar gebruiksrecht (verlengbaar)</li>
                  <li>Jaarlijkse canon op basis van grootte/locatie</li>
                  <li>Bouwen, verkopen, overdragen onder voorwaarden</li>
                  <li>Zeer gebruikelijk op Aruba</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="q3" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Het Aankoopproces Stap-voor-Stap</h2>
            <ol className="mt-4 list-decimal pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Voorlopig koopcontract (Purchase Agreement) tekenen</li>
              <li>Titelonderzoek en due diligence via notaris</li>
              <li>Ondertekening eigendomsakte (deed) en registratie</li>
            </ol>
            <p className="mt-3 text-foreground/80 leading-7">Gemiddelde doorlooptijd: 3–6 weken bij complete documenten.</p>
          </section>

          <section id="q4" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Hypotheekmogelijkheden voor Niet-Ingezetenen</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aruba Bank – Platinum Hypotheek</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Speciaal voor buitenlanders (woning/appartement)</li>
                  <li>Annuïteitenhypotheek; persoonlijke begeleiding</li>
                  <li>Minimale aanbetaling: ~35–40%</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">RBC Royal Bank – Niet-Ingezetenen</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Tot ~65% financiering</li>
                  <li>Looptijd tot ~15 jaar</li>
                  <li>Aankoop en renovatie mogelijk</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border p-5 bg-white shadow-sm">
              <h3 className="m-0 font-semibold">Veelgevraagde documenten</h3>
              <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                <li>Geldig paspoort</li>
                <li>Bewijs van inkomen (loonstroken, belastingaangiften)</li>
                <li>Bankreferentiebrief</li>
                <li>Kredietrapport uit woonland</li>
                <li>Taxatierapport van erkende Arubaanse taxateur</li>
              </ul>
            </div>
          </section>

          <section id="q5" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Kosten bij de Aankoop</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Overdrachtsbelasting: ~3–6%</li>
              <li>Notariskosten: ~1–2%</li>
              <li>Taxatiekosten</li>
              <li>Jaarlijkse canon (erfpacht)</li>
              <li>Woonhuisverzekering (vaak vereist bij hypotheek)</li>
            </ul>
          </section>

          <section id="q6" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Waarom Investeren in Aruba Interessant is</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Politiek en economisch stabiel (Koninkrijk der Nederlanden)</li>
              <li>Geen beperkingen voor buitenlandse kopers</li>
              <li>Sterke toerismesector (interessant voor verhuur)</li>
              <li>US-dollar breed geaccepteerd</li>
              <li>Goede infrastructuur, hoge levensstandaard</li>
            </ul>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Kan ik als buitenlander een woning kopen op Aruba?', a: 'Ja, volledig legaal. U hoeft geen inwoner te zijn om eigenaar te worden.' },
                { q: 'Wat is het verschil tussen erfpacht en eigendomsgrond?', a: 'Erfpacht: jaarlijkse canon en gebruiksrecht; eigendomsgrond: volledige eigendom van grond en woning.' },
                { q: 'Kan ik als niet-ingezetene een hypotheek krijgen?', a: 'Ja. Banken zoals Aruba Bank en RBC bieden hypotheken met ~35% aanbetaling.' },
                { q: 'Hoe lang duurt het om te kopen?', a: 'Gemiddeld 3–6 weken vanaf compleet dossier en akkoord.' },
                { q: 'Moet ik op Aruba wonen?', a: 'Nee. Veel buitenlanders kopen een tweede huis of vakantiewoning zonder te wonen op Aruba.' },
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
                { id: 'q1', label: 'Buitenlanders' },
                { id: 'q2', label: 'Erfpacht vs Eigendom' },
                { id: 'q3', label: 'Proces' },
                { id: 'q4', label: 'Hypotheken' },
                { id: 'q5', label: 'Kosten' },
                { id: 'q6', label: 'Waarom Aruba' },
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
