import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/eigendom%20vs%20erfpacht.png'

export const metadata = {
  title: 'Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom',
  description: 'Vol eigendom (Eigendom) vs langlopende pacht (Erfpacht) in Aruba: eigendomsrechten, 60-jaar pacht, jaarlijkse canon, financiering en waarop te letten bij aankoop.',
  keywords: [
    'eigendom vs erfpacht Aruba',
    'vol eigendom vs erfpacht Aruba',
    'vastgoedeigendom Aruba',
    'erfpacht Aruba',
    'langlopende pacht Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/vastgoedeigendom-verschillen-aruba',
  },
  openGraph: {
    title: 'Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom',
    description: 'Eigendom vs erfpacht in Aruba: eigendomsrechten, looptijd, kosten en financiering. Essentieel om te weten vóór je vastgoed koopt.',
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
      { '@type': 'ListItem', position: 3, name: 'Eigendom vs. Erfpacht: Verschillen in Vastgoedeigendom', item: `https://onehappyfinance.com/${locale}/aw/guides/vastgoedeigendom-verschillen-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom',
    image: [FEATURED_IMAGE],
    description: 'Eigendom vs erfpacht in Aruba: eigendomsrechten, 60-jaar pacht, jaarlijkse canon, financiering en due diligence.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-12',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/vastgoedeigendom-verschillen-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Wat is Eigendom (vol eigendom) in Aruba?', a: 'Eigendom betekent volledig particulier eigendom van zowel de grond als het gebouw. Je bent voor onbepaalde tijd eigenaar van de grond, er is geen pachttermijn, en het onroerend goed staat op jouw naam in het openbaar register. De voornaamste terugkerende overheidsheffing is de jaarlijkse onroerendezaakbelasting (grondbelasting).' },
    { q: 'Wat is Erfpacht (langlopende pacht) in Aruba?', a: 'Erfpacht is een langlopende pachtovereenkomst waarbij de overheid eigenaar is van de grond en jij eigenaar bent van de opstallen en het recht om de grond te gebruiken. De standaard termijn is 60 jaar, doorgaans verlengbaar met nog eens 60 jaar, met een jaarlijkse pachtcanon. Erfpachtrechten kunnen worden verkocht, overgedragen of met een hypotheek belast.' },
    { q: 'Financieren banken in Aruba zowel eigendom als erfpacht?', a: 'Ja. Lokale banken financieren doorgaans beide. Wel kunnen kredietverstrekkers de resterende pachtduur beoordelen, en een kortere resterende looptijd kan de financieringsvoorwaarden beïnvloeden. Bevestig de pachtvoorwaarden vóór je een hypotheek aanvraagt.' },
    { q: 'Is erfpacht veilig in Aruba?', a: 'Ja. Erfpacht is een gevestigde juridische structuur. Rechten worden vastgelegd in openbare registers en door de notaris gecontroleerd vóór overdracht. Verifieer de resterende pachtjaren, het jaarlijkse canonbedrag, de verlengingsvoorwaarden en eventuele extra overheidsvereisten.' },
    { q: 'Wat is beter: Eigendom of Erfpacht?', a: 'Er is geen eenduidig antwoord. Vol eigendom kan meer zekerheid op lange termijn en een sterke verkoopwaarde bieden. Erfpacht kan toegang geven tot gevestigde wijken en concurrerende prijzen. De juiste keuze hangt af van je investeringsdoelen, financieringsstrategie en langetermijnplannen.' },
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
          <Image src={FEATURED_IMAGE} alt="Eigendom vs. Erfpacht in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Bij het kopen van vastgoed in Aruba is een van de belangrijkste onderscheiden Eigendom (vol eigendom) versus Erfpacht (langlopende pacht). Beide zijn juridisch veilig—zo verschillen ze en waarop je moet letten.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="intro" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <p className="text-foreground/80 leading-7 md:leading-8">Beide eigendomsstructuren komen veel voor en zijn juridisch veilig, maar ze verschillen in eigendomsrechten, looptijd, jaarlijkse kosten en langetermijnoverwegingen. Deze verschillen begrijpen is essentieel vóór je vastgoed in Aruba koopt.</p>
          </section>

          <section id="eigendom" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Wat Is Eigendom (Vol Eigendom)?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eigendom betekent volledig particulier eigendom van zowel de grond als het gebouw. Bij vol eigendom in Aruba:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Je bent voor onbepaalde tijd eigenaar van de grond.</li>
              <li>Er is geen pachttermijn.</li>
              <li>Eigendom kan zonder tijdsgebonden beperkingen worden verkocht, overgedragen of geërfd.</li>
              <li>Het onroerend goed staat op jouw naam in het openbaar register.</li>
              <li>De voornaamste terugkerende overheidsheffing is de jaarlijkse onroerendezaakbelasting (grondbelasting).</li>
            </ul>
          </section>

          <section id="erfpacht" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Wat Is Erfpacht (Langlopende Pacht)?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Erfpacht is een langlopende pachtovereenkomst waarbij de overheid eigenaar is van de grond, en jij eigenaar bent van de opstallen en het recht om de grond te gebruiken. Kenmerken:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Standaard pachttermijn van 60 jaar</li>
              <li>Doorgaans verlengbaar met nog eens 60 jaar</li>
              <li>Jaarlijkse pachtcanon (canon) van toepassing</li>
              <li>Erfpachtrechten kunnen worden verkocht, overgedragen of met een hypotheek belast</li>
              <li>Hoewel je de grond zelf niet in eigendom hebt, zijn je erfpachtrechten juridisch beschermd en overdraagbaar.</li>
            </ul>
          </section>

          <section id="comparison" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Eigendom vs. Erfpacht: Vergelijking naast Elkaar</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Kenmerk</th>
                    <th className="text-left p-3 font-semibold">Eigendom (Vol eigendom)</th>
                    <th className="text-left p-3 font-semibold">Erfpacht (Langlopende pacht)</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-foreground/80">
                  <tr><td className="p-3">Grondbezit</td><td className="p-3">Koper is eigenaar van de grond</td><td className="p-3">Overheid is eigenaar van de grond</td></tr>
                  <tr><td className="p-3">Eigendom gebouw</td><td className="p-3">Koper is eigenaar van het gebouw</td><td className="p-3">Koper is eigenaar van het gebouw</td></tr>
                  <tr><td className="p-3">Looptijd</td><td className="p-3">Onbeperkt</td><td className="p-3">60 jaar (verlengbaar)</td></tr>
                  <tr><td className="p-3">Verlenging vereist</td><td className="p-3">Nee</td><td className="p-3">Ja, aan het einde van de pachttermijn</td></tr>
                  <tr><td className="p-3">Jaarlijkse overheidsheffing</td><td className="p-3">Onroerendezaakbelasting (grondbelasting)</td><td className="p-3">Jaarlijkse pachtcanon + eventuele grondbelasting</td></tr>
                  <tr><td className="p-3">Verkoop mogelijk</td><td className="p-3">Ja</td><td className="p-3">Ja</td></tr>
                  <tr><td className="p-3">Hypotheek mogelijk</td><td className="p-3">Ja</td><td className="p-3">Ja</td></tr>
                  <tr><td className="p-3">Overdraagbaar aan erfgenamen</td><td className="p-3">Ja</td><td className="p-3">Ja</td></tr>
                  <tr><td className="p-3">Zekerheid op lange termijn</td><td className="p-3">Permanent eigendom</td><td className="p-3">Afhankelijk van pachtverlenging</td></tr>
                  <tr><td className="p-3">Veelvoorkomend in Aruba</td><td className="p-3">Overal op het eiland</td><td className="p-3">Overal op het eiland, inclusief gevestigde gebieden</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="financial" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Financiële Overwegingen</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Vol eigendom (Eigendom)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Jaarlijkse onroerendezaakbelasting op basis van de geschatte waarde.</li>
                  <li>Geen pachtbetalingen.</li>
                  <li>Geen verlengingsprocedure.</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Erfpacht</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Jaarlijkse pachtcanon betaalbaar aan de overheid.</li>
                  <li>Het pachtbedrag blijft gedurende de initiële termijn vast.</li>
                  <li>Bij verlenging kunnen gewijzigde pachtvoorwaarden gelden.</li>
                  <li>In sommige gevallen kunnen erfpachtpercelen een iets lagere aankoopprijs hebben dan vergelijkbare vol-eigendompercelen.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="mortgage" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Hypotheek en Financiering</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Lokale banken in Aruba financieren doorgaans zowel vol eigendom als erfpacht. Wel:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Kredietverstrekkers kunnen de resterende pachtduur beoordelen.</li>
              <li>Een kortere resterende looptijd kan de financieringsvoorwaarden beïnvloeden.</li>
              <li>Kopers moeten de pachtvoorwaarden bevestigen vóór ze een hypotheek aanvragen.</li>
            </ul>
          </section>

          <section id="safe" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Is Erfpacht Veilig in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Ja. Erfpacht is een gevestigde juridische structuur in Aruba. Rechten worden vastgelegd in openbare registers en door de notaris gecontroleerd vóór overdracht.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Vóór aankoop van erfpacht moeten kopers verifiëren:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Resterende pachtjaren</li>
              <li>Jaarlijks canonbedrag</li>
              <li>Verlengingsvoorwaarden</li>
              <li>Eventuele extra overheidsvereisten</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De notaris voert deze controles uit tijdens due diligence.</p>
          </section>

          <section id="which" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Welke Optie Is Beter?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Er is geen eenduidig antwoord.</p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Vol eigendom kan bieden:</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Meer zekerheid op lange termijn</li>
                  <li>Geen zorgen over verlenging</li>
                  <li>Sterke verkoopwaarde</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Erfpacht kan bieden:</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Toegang tot gevestigde wijken</li>
                  <li>Concurrerende prijzen</li>
                  <li>Zekere langetermijngebruiksrechten</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De juiste keuze hangt af van je investeringsdoelen, financieringsstrategie en langetermijnplannen in Aruba.</p>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Tot Slot</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Het verschil tussen Eigendom en Erfpacht in Aruba begrijpen is essentieel bij het kopen van vastgoed op het eiland. Beide eigendomsstructuren zijn juridisch veilig en veel gebruikt. Het gaat erom te beoordelen hoe elke optie aansluit bij je financiële doelen, tijdshorizon en investeringsstrategie. Goede due diligence zorgt voor transparantie en vertrouwen bij investeren in Aruba vastgoed.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Wat is Eigendom (vol eigendom) in Aruba?', a: 'Eigendom betekent volledig particulier eigendom van zowel de grond als het gebouw. Je bent voor onbepaalde tijd eigenaar van de grond, er is geen pachttermijn, en het onroerend goed staat op jouw naam. De voornaamste terugkerende overheidsheffing is de jaarlijkse onroerendezaakbelasting (grondbelasting).' },
                { q: 'Wat is Erfpacht (langlopende pacht) in Aruba?', a: 'Erfpacht is een langlopende pachtovereenkomst waarbij de overheid eigenaar is van de grond en jij eigenaar bent van de opstallen en het recht om de grond te gebruiken. De standaard termijn is 60 jaar, doorgaans verlengbaar met nog eens 60 jaar, met een jaarlijkse pachtcanon. Erfpachtrechten kunnen worden verkocht, overgedragen of met een hypotheek belast.' },
                { q: 'Financieren banken in Aruba zowel eigendom als erfpacht?', a: 'Ja. Lokale banken financieren doorgaans beide. Wel kunnen kredietverstrekkers de resterende pachtduur beoordelen, en een kortere resterende looptijd kan de financieringsvoorwaarden beïnvloeden. Bevestig de pachtvoorwaarden vóór je een hypotheek aanvraagt.' },
                { q: 'Is erfpacht veilig in Aruba?', a: 'Ja. Erfpacht is een gevestigde juridische structuur. Rechten worden vastgelegd in openbare registers en door de notaris gecontroleerd vóór overdracht. Verifieer de resterende pachtjaren, het jaarlijkse canonbedrag, de verlengingsvoorwaarden en eventuele extra overheidsvereisten.' },
                { q: 'Wat is beter: Eigendom of Erfpacht?', a: 'Er is geen eenduidig antwoord. Vol eigendom kan meer zekerheid op lange termijn en een sterke verkoopwaarde bieden. Erfpacht kan toegang geven tot gevestigde wijken en concurrerende prijzen. De juiste keuze hangt af van je investeringsdoelen, financieringsstrategie en langetermijnplannen.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.propertyOwnershipDifferences} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'intro', label: 'Inleiding' },
                { id: 'eigendom', label: 'Wat is Eigendom?' },
                { id: 'erfpacht', label: 'Wat is Erfpacht?' },
                { id: 'comparison', label: 'Vergelijking' },
                { id: 'financial', label: 'Financiële overwegingen' },
                { id: 'mortgage', label: 'Hypotheek & financiering' },
                { id: 'safe', label: 'Is erfpacht veilig?' },
                { id: 'which', label: 'Welke optie is beter?' },
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
