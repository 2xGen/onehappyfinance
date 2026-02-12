import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/eigendom%20vs%20erfpacht.png'

export const metadata = {
  title: 'Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom (2026 Gids)',
  description: 'Eigendom (vol eigendom) vs erfpacht (langlopende pacht) in Aruba: eigendomsrechten, 60-jaar pacht, jaarlijkse canon, financiering en waarop te letten bij aankoop.',
  keywords: [
    'eigendom vs erfpacht Aruba',
    'vol eigendom vs erfpacht Aruba',
    'vastgoedeigendom Aruba',
    'erfpacht Aruba',
    'hypotheek erfpacht Aruba',
    'Aruba erfpacht',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/eigendom-vs-erfpacht-in-aruba',
  },
  openGraph: {
    title: 'Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom (2026 Gids)',
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
      { '@type': 'ListItem', position: 3, name: 'Eigendom vs. Erfpacht in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/eigendom-vs-erfpacht-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom (2026 Gids)',
    image: [FEATURED_IMAGE],
    description: 'Eigendom vs erfpacht in Aruba: eigendomsrechten, 60-jaar pacht, jaarlijkse canon, financiering en due diligence.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/eigendom-vs-erfpacht-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Wat is Eigendom (vol eigendom) in Aruba?', a: 'Eigendom betekent volledig privaat eigendom van zowel de grond als het gebouw. Je bent onbeperkt eigenaar van de grond, er is geen pachttermijn, en het vastgoed staat op jouw naam in het openbaar register. De voornaamste terugkerende overheidsheffing is jaarlijkse onroerendezaakbelasting (grondbelasting).' },
    { q: 'Wat is Erfpacht (langlopende pacht) in Aruba?', a: 'Erfpacht is een langlopend pachtcontract waarbij de overheid eigenaar is van de grond en jij eigenaar bent van het gebouw en het recht om de grond te gebruiken. Standaardtermijn is 60 jaar, doorgaans vernieuwbaar voor nog eens 60 jaar, met een jaarlijkse pachtcanon. Pachtrechten kunnen worden verkocht, overgedragen of met een hypotheek belast.' },
    { q: 'Financieren banken in Aruba zowel eigendom als erfpacht?', a: 'Ja. Lokale banken financieren doorgaans beide. Wel kunnen kredietverstrekkers de resterende pachtduur beoordelen; kortere resterende looptijden kunnen de financieringsvoorwaarden beïnvloeden. Bevestig de pachtvoorwaarden vóór je een hypotheek aanvraagt.' },
    { q: 'Is Erfpacht veilig in Aruba?', a: 'Ja. Pachtgrond is een gevestigde juridische structuur. Rechten worden vastgelegd in openbare registers en door de notaris gecontroleerd vóór overdracht. Verifieer resterende pachtjaren, jaarlijkse canon, verlengingsvoorwaarden en eventuele extra overheidsvereisten.' },
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
          <Image src={FEATURED_IMAGE} alt="Eigendom vs Erfpacht in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Hypotheken</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Eigendom vs. Erfpacht in Aruba: Verschillen in Vastgoedeigendom (2026 Gids)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Bij het kopen van vastgoed in Aruba is een van de belangrijkste onderscheiden Eigendom (vol eigendom) versus Erfpacht (langlopende pacht). Beide zijn juridisch veilig—zo verschillen ze en waar je op moet letten.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="eigendom" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Wat Is Eigendom (Vol Eigendom)?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eigendom betekent volledig privaat eigendom van zowel de grond als het gebouw. Bij vol eigendom in Aruba:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Je bent onbeperkt eigenaar van de grond.</li>
              <li>Er is geen pachttermijn.</li>
              <li>Eigendom kan worden verkocht, overgedragen of geërfd zonder tijdsgebonden beperkingen.</li>
              <li>Het vastgoed staat op jouw naam in het openbaar register.</li>
              <li>De voornaamste terugkerende overheidsheffing is jaarlijkse onroerendezaakbelasting (grondbelasting).</li>
            </ul>
          </section>

          <section id="erfpacht" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Wat Is Erfpacht (Langlopende Pacht)?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Erfpacht is een langlopend pachtcontract waarbij de overheid eigenaar is van de grond en jij eigenaar bent van het gebouw en het recht om de grond te gebruiken. Kenmerken:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Standaard pachttermijn van 60 jaar</li>
              <li>Doorgaans vernieuwbaar voor nog eens 60 jaar</li>
              <li>Jaarlijkse pachtcanon (canon) van toepassing</li>
              <li>Pachtrechten kunnen worden verkocht, overgedragen of met een hypotheek belast</li>
              <li>Hoewel je de grond zelf niet bezit, zijn je pachtrechten juridisch beschermd en overdraagbaar.</li>
            </ul>
          </section>

          <section id="comparison" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Eigendom vs. Erfpacht: Vergelijking naast Elkaar</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Kenmerk</th>
                    <th className="text-left p-3 font-semibold">Eigendom (Vol eigendom)</th>
                    <th className="text-left p-3 font-semibold">Erfpacht (Langlopende pacht)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="p-3">Grondbezit</td><td className="p-3">Koper is eigenaar van de grond</td><td className="p-3">Overheid is eigenaar van de grond</td></tr>
                  <tr><td className="p-3">Gebouweigendom</td><td className="p-3">Koper is eigenaar van het gebouw</td><td className="p-3">Koper is eigenaar van het gebouw</td></tr>
                  <tr><td className="p-3">Looptijd</td><td className="p-3">Onbeperkt</td><td className="p-3">60 jaar (vernieuwbaar)</td></tr>
                  <tr><td className="p-3">Verlenging vereist</td><td className="p-3">Nee</td><td className="p-3">Ja, aan het einde van de pachttermijn</td></tr>
                  <tr><td className="p-3">Jaarlijkse overheidsheffing</td><td className="p-3">Onroerendezaakbelasting (grondbelasting)</td><td className="p-3">Jaarlijkse pachtcanon + eventuele onroerendezaakbelasting</td></tr>
                  <tr><td className="p-3">Verkoop mogelijk</td><td className="p-3">Ja</td><td className="p-3">Ja</td></tr>
                  <tr><td className="p-3">Hypotheek mogelijk</td><td className="p-3">Ja</td><td className="p-3">Ja</td></tr>
                  <tr><td className="p-3">Overdraagbaar aan erfgenamen</td><td className="p-3">Ja</td><td className="p-3">Ja</td></tr>
                  <tr><td className="p-3">Langetermijnzekerheid</td><td className="p-3">Permanent eigendom</td><td className="p-3">Afhankelijk van pachtverlenging</td></tr>
                  <tr><td className="p-3">Veelvoorkomend in Aruba</td><td className="p-3">Overal op het eiland</td><td className="p-3">Overal, inclusief gevestigde gebieden</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="financial" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Financiële Overwegingen</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">Vol eigendom (Eigendom)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Jaarlijkse onroerendezaakbelasting op basis van de geschatte waarde.</li>
                  <li>Geen pachtbetalingen.</li>
                  <li>Geen verlengingsprocedure.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Pachtgrond (Erfpacht)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Jaarlijkse pachtcanon betaald aan de overheid.</li>
                  <li>Pachttarief blijft vast tijdens de initiële termijn.</li>
                  <li>Verlenging kan aangepaste pachtvoorwaarden inhouden.</li>
                  <li>Soms hebben pachtgrondobjecten een iets lagere aankoopprijs dan vergelijkbaar vol-eigendom vastgoed.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="mortgage" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Hypotheek en Financiering</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Lokale banken in Aruba financieren doorgaans zowel vol eigendom als erfpacht. Wel:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Kredietverstrekkers kunnen de resterende pachtduur beoordelen.</li>
              <li>Kortere resterende looptijden kunnen de financieringsvoorwaarden beïnvloeden.</li>
              <li>Kopers moeten de pachtvoorwaarden bevestigen vóór ze een hypotheek aanvragen.</li>
            </ul>
          </section>

          <section id="safe" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Is Erfpacht Veilig in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Ja. Pachtgrond is een gevestigde juridische structuur in Aruba. Rechten worden vastgelegd in openbare registers en door de notaris gecontroleerd vóór overdracht.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Voordat je pachtgrond koopt, moet je verifiëren:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Resterende pachtjaren</li>
              <li>Bedrag jaarlijkse pachtcanon</li>
              <li>Verlengingsvoorwaarden</li>
              <li>Eventuele extra overheidsvereisten</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De notaris voert deze controles uit tijdens due diligence.</p>
          </section>

          <section id="which" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Welke Optie Is Beter?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Er is geen eenduidig antwoord.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Vol eigendom kan bieden: meer langetermijnzekerheid; geen zorgen over verlenging; sterke verkoopwaarde.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Erfpacht kan bieden: toegang tot gevestigde buurten; concurrerende prijzen; veilige langetermijn gebruiksrechten.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De juiste keuze hangt af van je investeringsdoelen, financieringsstrategie en langetermijnplannen in Aruba.</p>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Tot Slot</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Het verschil tussen Eigendom en Erfpacht in Aruba begrijpen is essentieel bij het kopen van vastgoed op het eiland. Beide eigendomsstructuren zijn juridisch veilig en veel gebruikt. Het gaat erom hoe elke optie aansluit bij je financiële doelen, tijdshorizon en investeringsstrategie. Goede due diligence zorgt voor transparantie en vertrouwen bij investeren in Arubaans vastgoed.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde Vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Wat is Eigendom (vol eigendom) in Aruba?', a: 'Eigendom betekent volledig privaat eigendom van zowel de grond als het gebouw. Je bent onbeperkt eigenaar van de grond, er is geen pachttermijn, en het vastgoed staat op jouw naam in het openbaar register. De voornaamste terugkerende overheidsheffing is jaarlijkse onroerendezaakbelasting (grondbelasting).' },
                { q: 'Wat is Erfpacht (langlopende pacht) in Aruba?', a: 'Erfpacht is een langlopend pachtcontract waarbij de overheid eigenaar is van de grond en jij eigenaar bent van het gebouw en het recht om de grond te gebruiken. Standaardtermijn is 60 jaar, doorgaans vernieuwbaar voor nog eens 60 jaar, met een jaarlijkse pachtcanon. Pachtrechten kunnen worden verkocht, overgedragen of met een hypotheek belast.' },
                { q: 'Financieren banken in Aruba zowel eigendom als erfpacht?', a: 'Ja. Lokale banken financieren doorgaans beide. Wel kunnen kredietverstrekkers de resterende pachtduur beoordelen; kortere resterende looptijden kunnen de financieringsvoorwaarden beïnvloeden. Bevestig de pachtvoorwaarden vóór je een hypotheek aanvraagt.' },
                { q: 'Is Erfpacht veilig in Aruba?', a: 'Ja. Pachtgrond is een gevestigde juridische structuur. Rechten worden vastgelegd in openbare registers en door de notaris gecontroleerd vóór overdracht. Verifieer resterende pachtjaren, jaarlijkse canon, verlengingsvoorwaarden en eventuele extra overheidsvereisten.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.freeholdVsLease} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'eigendom', label: 'Wat is Eigendom?' },
                { id: 'erfpacht', label: 'Wat is Erfpacht?' },
                { id: 'comparison', label: 'Vergelijking' },
                { id: 'financial', label: 'Financiële overwegingen' },
                { id: 'mortgage', label: 'Hypotheek & financiering' },
                { id: 'safe', label: 'Is Erfpacht veilig?' },
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
