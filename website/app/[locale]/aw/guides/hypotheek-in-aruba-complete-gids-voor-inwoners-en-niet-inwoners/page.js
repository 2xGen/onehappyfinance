import Image from 'next/image'
import Breadcrumbs from '../how-to-get-a-mortgage-in-aruba/BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20to%20Get%20a%20Mortgage%20in%20Aruba.png'

export const metadata = {
  title: 'Hypotheek Aruba: Rentes, Voorwaarden & Stappen | Complete Gids',
  description: 'Hypotheek Aruba: rentes, voorwaarden, documenten, banken, kosten. Huis kopen in Aruba met hypotheek. Hypotheek Aruba berekenen. Voor inwoners en niet-ingezetenen.',
  keywords: [
    'hypotheek aruba',
    'huis kopen aruba hypotheek',
    'hypotheek aruba berekenen',
    'hypotheek Aruba rentes',
    'hypotheek Aruba voorwaarden',
    'Aruba hypotheek',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners',
  },
  openGraph: {
    title: 'Hypotheek Aruba: Rentes, Voorwaarden & Stappen | Complete Gids',
    description: 'Hypotheek Aruba: rentes, huis kopen, hypotheek berekenen. Voorwaarden, documenten, banken, kosten. Inwoners en niet-ingezetenen.',
    type: 'article',
    images: [
      {
        url: FEATURED_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Hypotheek Aruba: Rentes, Voorwaarden & Stappen',
      },
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
      { '@type': 'ListItem', position: 3, name: 'Hypotheek Aruba: Rentes, Voorwaarden & Stappen', item: `https://onehappyfinance.com/${locale}/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hypotheek Aruba: Rentes, Voorwaarden & Stappen | Complete Gids',
    image: [FEATURED_IMAGE],
    description: 'Hypotheek Aruba: rentes, voorwaarden, documenten, banken, kosten. Huis kopen met hypotheek. Hypotheek berekenen. Inwoners en niet-ingezetenen.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wat zijn hypotheekrentes in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Hypotheekrentes in Aruba volgen internationale referentierentes (o.a. Fed, ECB) en verschillen per bank. De rente hangt af van eigen inbreng, LTV, verblijfsstatus en looptijd. Banken bieden zowel vaste als variabele rentes.' } },
      { '@type': 'Question', name: 'Hoe bereken ik mijn hypotheek in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Gebruik een online hypotheekcalculator. Vul je inkomen, rente, looptijd en eigen inbreng in om je maximale leenbedrag en maandlasten te schatten. Zoek op "hypotheekcalculator" voor een betrouwbaar instrument met annuïteitenberekening.' } },
      { '@type': 'Question', name: 'Hoe koop ik een huis in Aruba met hypotheek?', acceptedAnswer: { '@type': 'Answer', text: 'Buitenlanders kunnen zonder beperkingen een huis kopen in Aruba. Kies tussen eigendom of erfpacht. Stap 1: pre-approval bij een bank. Stap 2: documenten verzamelen. Stap 3: hypotheek aanvragen. Stap 4: aanbod en koopovereenkomst. Stap 5: notariële afhandeling.' } },
      { '@type': 'Question', name: 'Welke banken bieden hypotheken aan in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Aruba Bank, RBC Royal Bank en Banco di Caribe bieden hypotheken aan inwoners en niet-ingezetenen. Elk met eigen voorwaarden voor aanbetaling en looptijd.' } },
      { '@type': 'Question', name: 'Hoe lang duurt hypotheekgoedkeuring in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Pre-approval binnen enkele dagen. Volledige goedkeuring gemiddeld 2–6 weken bij een complete aanvraag.' } },
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
          <Image src={FEATURED_IMAGE} alt="Hypotheek in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Hypotheek Aruba: Rentes, Voorwaarden & Stappen</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Hypotheek Aruba: rentes, huis kopen met hypotheek, hypotheek berekenen. Voorwaarden, documenten, banken, kosten. Voor inwoners en niet-ingezetenen.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="overview" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Overzicht</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De hypotheekmarkt in Aruba is concurrerend, betrouwbaar en toegankelijk voor inwoners en niet-inwoners. Hypotheekrentes in Aruba volgen internationale referentierentes en worden door lokale banken bepaald. Het proces wordt eenvoudig zodra je weet wat er wordt verwacht: rente, eigen inbreng, documentatie, betaalbaarheid en de juridische stappen van koopovereenkomst tot overdracht bij de notaris.</p>
          </section>

          <section id="rentes" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Hypotheek Aruba: Rentes</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Hypotheekrentes in Aruba worden beïnvloed door internationale rentestanden, centralebankbeleid en lokale marktomstandigheden. Banken bieden doorgaans zowel vaste als variabele rentes. Vaste rentes zorgen voor stabiliteit; variabele rentes kunnen periodiek aangepast worden.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Je hypotheekrente hangt af van eigen inbreng, LTV, verblijfsstatus, kredietprofiel en looptijd. Inwoners en kopers met hogere eigen inbreng krijgen vaak betere rentes. Vergelijk rentes bij Aruba Bank, RBC en andere aanbieders. Pre-approval geeft je een rente-indicatie voordat je koopt.</p>
          </section>

          <section id="kopen" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Huis kopen in Aruba met hypotheek</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Ja — buitenlanders kunnen zonder beperkingen een huis kopen in Aruba met hypotheek. Je kunt kiezen tussen vol eigendom (eigendom) of erfpacht (lease land). Het aankoopproces lijkt sterk op dat voor inwoners; financiering en grondtype zijn de belangrijkste verschillen.</p>
          </section>

          <section id="documenten" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Documenten die je nodig hebt</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Voor inwoners van Aruba</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Geldig identiteitsbewijs</li>
                  <li>Laatste twee salarisstroken + werkgeversverklaring</li>
                  <li>Bankafschriften van de laatste maanden</li>
                  <li>Recent taxatierapport (6–12 maanden)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Voor niet-ingezetenen</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Geldig paspoort en inkomensverklaring</li>
                  <li>Bewijs van inkomsten / belastingaangifte / bankafschriften</li>
                  <li>Referentiebrief van een bank</li>
                  <li>Bewijs van eigen inbreng (35–40%)</li>
                  <li>Recent credit score report of BKR-verklaring</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="banken" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Banken voor hypotheken in Aruba</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aruba Bank – Niet-Inwoners</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Annuïteitenhypotheek, persoonlijke accountmanager</li>
                  <li>Typische aanbetaling: 35–40% (niet-ingezetenen)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">RBC Royal Bank</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Inwoners: tot 90% financiering (≥10% eigen inbreng)</li>
                  <li>Niet-inwoners: tot 65% financiering (≥35% aanbetaling)</li>
                  <li>Looptijd: tot 30 jaar (15 jaar voor niet-ingezetenen)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Banco di Caribe</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Annuïteitenhypotheek met vaste maandlasten</li>
                  <li>Looptijd tot 30 jaar, snelle beoordeling</li>
                  <li>Typische aanbetaling: 40% (niet-ingezetenen)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="proces" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Het aanvraagproces stap voor stap</h2>
            <ol className="mt-4 list-decimal pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Stap 1 – Kies je bank</li>
              <li>Stap 2 – Verzamel de documenten</li>
              <li>Stap 3 – Hypotheekaanvraag indienen</li>
              <li>Stap 4 – Goedkeuring en taxatie</li>
              <li>Stap 5 – Notariële afhandeling</li>
            </ol>
            <p className="mt-3 text-foreground/80 leading-7">Gemiddelde doorlooptijd: 3–6 weken bij een complete aanvraag.</p>
          </section>

          <section id="berekenen" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6) Hypotheek Aruba berekenen</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Gebruik een online hypotheekcalculator om je maximale leenbedrag en maandlasten te schatten. Vul je inkomen, rente, looptijd en eigen inbreng in om te zien hoe elke factor je leencapaciteit beïnvloedt. Zoek op &quot;hypotheekcalculator&quot; of &quot;hypotheek aruba berekenen&quot; voor een betrouwbaar instrument dat annuïteitenberekeningen ondersteunt.</p>
          </section>

          <section id="begrippen" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7) Belangrijke hypotheektermen in Aruba</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Annuïteitenhypotheek – vast maandbedrag (rente + aflossing)</li>
              <li>Looptijd – meestal 15–30 jaar</li>
              <li>Taxatierapport – onafhankelijke waardebepaling</li>
              <li>Eigen inbreng – 10%–40%</li>
              <li>Erfpacht – grond in bruikleen met jaarlijkse vergoeding</li>
            </ul>
          </section>

          <section id="tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Tips voor een soepele hypotheekaanvraag</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Begin op tijd met het verzamelen van documenten</li>
              <li>Gebruik een lokale notaris of makelaar met ervaring met buitenlandse kopers</li>
              <li>Laat je taxatie doen door een erkende Arubaanse taxateur</li>
              <li>Reken op extra kosten: notariskosten, bankkosten, overdrachtsbelasting</li>
            </ul>
          </section>

          <section id="conclusie" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Conclusie</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Een hypotheek aanvragen in Aruba is goed haalbaar — zowel voor inwoners als voor buitenlandse investeerders. Met de juiste
              voorbereiding kun je binnen enkele weken eigenaar worden van je eigen woning op het eiland.
            </p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Wat zijn hypotheekrentes in Aruba?', a: 'Hypotheekrentes in Aruba volgen internationale referentierentes (o.a. Fed, ECB) en verschillen per bank. De rente hangt af van eigen inbreng, LTV, verblijfsstatus en looptijd. Banken bieden zowel vaste als variabele rentes.' },
                { q: 'Hoe bereken ik mijn hypotheek in Aruba?', a: 'Gebruik een online hypotheekcalculator. Vul inkomen, rente, looptijd en eigen inbreng in om je maximale leenbedrag en maandlasten te schatten. Zoek op "hypotheekcalculator" voor een betrouwbaar instrument.' },
                { q: 'Hoe koop ik een huis in Aruba met hypotheek?', a: 'Buitenlanders kunnen zonder beperkingen een huis kopen. Stap 1: pre-approval. Stap 2: documenten verzamelen. Stap 3: hypotheek aanvragen. Stap 4: aanbod en koopovereenkomst. Stap 5: notariële afhandeling.' },
                { q: 'Welke banken bieden hypotheken aan in Aruba?', a: 'Aruba Bank, RBC Royal Bank en Banco di Caribe bieden hypotheken aan inwoners en niet-ingezetenen, elk met eigen voorwaarden.' },
                { q: 'Hoe lang duurt hypotheekgoedkeuring in Aruba?', a: 'Pre-approval binnen enkele dagen. Volledige goedkeuring gemiddeld 2–6 weken bij een complete aanvraag.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.howToGetMortgage} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'overview', label: 'Overzicht' },
                { id: 'rentes', label: 'Hypotheek Aruba rentes' },
                { id: 'kopen', label: 'Huis kopen met hypotheek' },
                { id: 'documenten', label: 'Documenten' },
                { id: 'banken', label: 'Banken' },
                { id: 'proces', label: 'Proces' },
                { id: 'berekenen', label: 'Hypotheek berekenen' },
                { id: 'begrippen', label: 'Begrippen' },
                { id: 'tips', label: 'Tips' },
                { id: 'conclusie', label: 'Conclusie' },
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
