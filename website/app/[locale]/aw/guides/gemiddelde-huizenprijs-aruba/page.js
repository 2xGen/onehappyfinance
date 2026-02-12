import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Average%20House%20Price%20in%20Aruba.png'

export const metadata = {
  title: 'Gemiddelde huizenprijs in Aruba',
  description: 'Gemiddelde huizenprijs in Aruba: prijsbereiken per grootte en gebied, prijs per m² en wat de woningprijzen beïnvloedt. Data-overzicht voor kopers.',
  keywords: [
    'gemiddelde huizenprijs Aruba',
    'huizenprijzen Aruba',
    'vastgoedprijzen Aruba',
    'vastgoed Aruba',
    'woningmarkt Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/gemiddelde-huizenprijs-aruba',
  },
  openGraph: {
    title: 'Gemiddelde huizenprijs in Aruba',
    description: 'Prijsbereiken per gebied en grootte, prijs per m² en factoren die huizenprijzen in Aruba beïnvloeden.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Gemiddelde huizenprijs in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Gemiddelde huizenprijs in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/gemiddelde-huizenprijs-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gemiddelde huizenprijs in Aruba',
    image: [FEATURED_IMAGE],
    description: 'Data-overzicht van prijsbereiken voor woningen in Aruba, prijs per m² en factoren die huizenprijzen beïnvloeden.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-12',
    dateModified: '2026-02-12',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/gemiddelde-huizenprijs-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Wat is het goedkoopste gebied om een huis te kopen in Aruba?', a: 'San Nicolas en bepaalde binnenlandse gebieden zoals Santa Cruz bieden doorgaans de laagste instapprijzen.' },
    { q: 'Wat is het duurste gebied in Aruba?', a: 'Noord, vooral nabij Palm Beach en Malmok, behoort consequent tot de hoogst geprijsde woongebieden.' },
    { q: 'Stijgen de prijzen in Aruba?', a: 'Prijsgroei wordt ondersteund door beperkt aanbod aan de kust en stabiele vraag door toerisme, hoewel de prijsontwikkeling per submarkt verschilt.' },
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
          <Image src={FEATURED_IMAGE} alt="Gemiddelde huizenprijs in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Gemiddelde huizenprijs in Aruba</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Als je overweegt vastgoed te kopen in Aruba, is een van de eerste vragen: Wat is de gemiddelde prijs voor een huis in Aruba? Het antwoord hangt af van locatie, grootte, grondtype (eigendom vs. erfpacht) en nabijheid van het strand.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="average-price" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Wat is de gemiddelde huizenprijs in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Vanaf begin 2026 ligt de gemiddelde huizenprijs in Aruba doorgaans tussen USD 350.000 en USD 600.000, afhankelijk van het type woning en het gebied. Typische prijsbereiken per grootte:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>2-slaapkamerwoningen:</strong> vaak tussen USD 350.000 – USD 500.000</li>
              <li><strong>3-slaapkamerwoningen:</strong> doorgaans tussen USD 450.000 – USD 650.000</li>
              <li><strong>4+ slaapkamers en villa&apos;s:</strong> beginnen vaak rond USD 550.000 en kunnen in topgebieden boven USD 1.000.000 uitkomen</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Luxe strandvilla&apos;s of woningen in beveiligde complexen kunnen enkele miljoenen dollars bereiken, vooral in kustzones met hoge vraag. Prijzen worden vaak in Amerikaanse dollars (USD) vermeld, hoewel de officiële munteenheid van Aruba de Arubaanse florin (AWG) is (USD 1 = AWG 1,80 vaste koers).</p>
          </section>

          <section id="price-per-sqft" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Gemiddelde prijs per vierkante meter in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Een andere nuttige manier om waarde te meten is de prijs per vierkante meter. Recente marktgegevens geven aan:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>Mediane huizenprijs:</strong> ongeveer AWG 500–550 per vierkante voet (ruwweg USD 275–305 per sq ft)</li>
              <li><strong>Mediane appartementsprijs:</strong> doorgaans hoger, vaak rond AWG 850–900 per vierkante voet</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Appartementen nabij het strand vragen vaak een hogere prijs per vierkante meter dan eengezinswoningen in het binnenland.</p>
          </section>

          <section id="by-area" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Huizenprijzen per gebied in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Locatie speelt een grote rol bij de prijs. Hieronder een algemene indeling per regio.</p>

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">Noord (inclusief Palm Beach & Malmok)</h3>
                <p className="mt-2 text-foreground/80 leading-7">Noord is een van de meest gewilde woongebieden van Aruba. Sterke vraag van internationale kopers; dicht bij de resorts en stranden van Palm Beach; beveiligde complexen en luxe villa&apos;s komen veel voor; hogere prijs per m² dan in de meeste binnenlandse gebieden.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typische huizenprijzen:</strong> Middenklasse woningen: USD 450.000 – USD 900.000. Luxe villa&apos;s: USD 1.000.000+.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">Oranjestad</h3>
                <p className="mt-2 text-foreground/80 leading-7">De hoofdstad biedt een mix van stedelijk wonen en waterfrontontwikkelingen. Appartementen en townhouses komen veel voor; gevarieerdere prijzen; aantrekkelijk voor verhuurinvesteerders.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typische huizenprijzen:</strong> USD 250.000 – USD 750.000. Waterfront of nieuwe luxe projecten aanzienlijk hoger.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">Savaneta</h3>
                <p className="mt-2 text-foreground/80 leading-7">Rustiger, meer woon- en kustkarakter. Groeiende interesse van pensionado&apos;s en langetermijnbewoners; strandwoningen beschikbaar tegen lagere prijzen dan Noord.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typische huizenprijzen:</strong> USD 225.000 – USD 700.000. Strandwoningen kunnen boven USD 1.000.000 uitkomen.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">Paradera & Santa Cruz (binnenland)</h3>
                <p className="mt-2 text-foreground/80 leading-7">Voornamelijk woon- en gezinsgericht. Grotere percelen; lagere prijs per m²; betaalbare instapopties.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typische huizenprijzen:</strong> USD 200.000 – USD 600.000.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">San Nicolas</h3>
                <p className="mt-2 text-foreground/80 leading-7">Historisch betaalbaarder, momenteel geleidelijke herontwikkeling. Instapprijzen; aantrekkelijk voor kopers met beperkt budget; potentie voor waardestijging op lange termijn.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typische huizenprijzen:</strong> USD 100.000 – USD 400.000.</p>
              </div>
            </div>
          </section>

          <section id="influences" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Wat beïnvloedt de huizenprijzen in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Verschillende factoren beïnvloeden de woningprijzen:</p>
            <ol className="mt-4 list-decimal pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Nabijheid van het strand</strong> — Woningen nabij Palm Beach, Eagle Beach en Malmok vragen premieprijzen door toeristische vraag en beperkt aanbod.</li>
              <li><strong>Eigendom vs. erfpacht</strong> — Eigendom (vol eigendom) kan iets meer doorverkoopwaarde hebben. Erfpachtwoningen kunnen soms een gunstiger aankoopprijs bieden.</li>
              <li><strong>Verhuurpotentieel</strong> — Woningen die goed presteren als kortetermijnverhuur hebben vaak hogere vraagprijzen.</li>
              <li><strong>Beveiligde complexen</strong> — Projecten met beveiliging, zwembaden en voorzieningen verhogen doorgaans de waarde.</li>
              <li><strong>Perceelgrootte en nieuwbouw</strong> — Nieuwbouw en grotere percelen gaan doorgaans tegen hogere prijzen van de hand.</li>
            </ol>
          </section>

          <section id="expensive" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Is Aruba duur vergeleken met andere Caribische eilanden?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruba wordt vaak gezien als: politiek en economisch stabieler; buiten de orkaanzone; transparant in eigendomsregels (buitenlanders kunnen vrij kopen). Hoewel strandvastgoed duur kan zijn, blijven woningen in het binnenland relatief concurrerend vergeleken met andere gevestigde Caribische bestemmingen.</p>
          </section>

          <section id="notes" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Belangrijke punten voor kopers</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Prijzen verschillen aanzienlijk per staat van de woning en exacte locatie.</li>
              <li>Aruba heeft geen centraal openbaar MLS-systeem; vraagprijzen zijn dus vraagprijzen, niet per se de uiteindelijke verkoopprijzen.</li>
              <li>Buitenlandse kopers betalen dezelfde aankoopbelastingen en kosten als inwoners.</li>
              <li>Sluitingskosten liggen doorgaans tussen 5% en 8% van de aankoopprijs.</li>
            </ul>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Tot slot</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De gemiddelde huizenprijs in Aruba hangt sterk af van locatie en woningtype, maar de meeste eengezinswoningen vallen binnen het bereik van USD 350.000–600.000. Luxe strand- en complexwoningen kunnen dat bereik aanzienlijk overschrijden, terwijl wijken in het binnenland toegankelijkere instappunten bieden. Inzicht in de lokale marktdynamiek, grondstructuur en verhuurvraag is essentieel voordat je een aankoopbeslissing neemt op de vastgoedmarkt van Aruba.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Wat is het goedkoopste gebied om een huis te kopen in Aruba?', a: 'San Nicolas en bepaalde binnenlandse gebieden zoals Santa Cruz bieden doorgaans de laagste instapprijzen.' },
                { q: 'Wat is het duurste gebied in Aruba?', a: 'Noord, vooral nabij Palm Beach en Malmok, behoort consequent tot de hoogst geprijsde woongebieden.' },
                { q: 'Stijgen de prijzen in Aruba?', a: 'Prijsgroei wordt ondersteund door beperkt aanbod aan de kust en stabiele vraag door toerisme, hoewel de prijsontwikkeling per submarkt verschilt.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.averageHousePrice} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'average-price', label: 'Gemiddelde huizenprijs' },
                { id: 'price-per-sqft', label: 'Prijs per m²' },
                { id: 'by-area', label: 'Prijzen per gebied' },
                { id: 'influences', label: 'Wat beïnvloedt prijzen' },
                { id: 'expensive', label: 'Aruba vs andere Cariben' },
                { id: 'notes', label: 'Punten voor kopers' },
                { id: 'final', label: 'Tot slot' },
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
