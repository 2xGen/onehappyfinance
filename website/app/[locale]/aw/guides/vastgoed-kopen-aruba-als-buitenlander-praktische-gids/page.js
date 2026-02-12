import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/buying%20property%20in%20aruba%20as%20a%20foreigner.png'

export const metadata = {
  title: 'Kunnen Buitenlanders Vastgoed Kopen in Aruba? Een Praktische Gids',
  description: 'Ja — Aruba staat niet-ingezetenen toe om vastgoed te kopen, bezitten en verkopen. Wettelijke vereisten, verblijfsregels, financiering, belastingen, verhuurregels en de belangrijkste punten voor buitenlandse kopers.',
  keywords: [
    'vastgoed kopen Aruba als buitenlander',
    'buitenlandse kopers Aruba',
    'niet-inwoner vastgoed Aruba',
    'Aruba vastgoed buitenlanders',
    'huis kopen Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/vastgoed-kopen-aruba-als-buitenlander-praktische-gids',
  },
  openGraph: {
    title: 'Kunnen Buitenlanders Vastgoed Kopen in Aruba? Een Praktische Gids',
    description: 'Wettelijke vereisten, financiering, belastingen en verhuurregels voor internationale kopers. Vastgoed bezitten in Aruba is soepel, veilig en lonend.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Vastgoed kopen in Aruba als buitenlander' },
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
      { '@type': 'ListItem', position: 3, name: 'Kunnen Buitenlanders Vastgoed Kopen in Aruba? Een Praktische Gids', item: `https://onehappyfinance.com/${locale}/aw/guides/vastgoed-kopen-aruba-als-buitenlander-praktische-gids` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kunnen Buitenlanders Vastgoed Kopen in Aruba? Een Praktische Gids',
    image: [FEATURED_IMAGE],
    description: 'Aruba staat niet-ingezetenen toe om vastgoed te kopen, bezitten en verkopen. Deze gids behandelt wettelijke vereisten, verblijf, financiering, belastingen en verhuurregels.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-12',
    dateModified: '2026-02-12',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/vastgoed-kopen-aruba-als-buitenlander-praktische-gids' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Kunnen buitenlanders vastgoed kopen in Aruba?', a: 'Ja. Aruba staat niet-ingezetenen toe om vastgoed te kopen, bezitten en verkopen onder hetzelfde juridische kader als lokale inwoners. Geen speciale vergunningen, nationaliteit of verblijfsstatus zijn vereist om te kopen.' },
    { q: 'Krijg ik verblijfsrecht door vastgoed te bezitten in Aruba?', a: 'Nee. Vastgoed bezitten geeft geen automatisch verblijfsrecht. Niet-ingezetenen kunnen zonder visum tot 180 dagen per jaar op Aruba verblijven. Langer verblijf vereist een verblijfsvergunning; vastgoedeigendom kan je aanvraag versterken.' },
    { q: 'Wat is het verschil tussen eigendom en erfpacht in Aruba?', a: 'Volledig eigendom (eigendom) betekent dat je het land en de woning volledig bezit zonder doorlopende grondlasten. Erfpacht betekent dat het land van de overheid is en wordt verpacht, meestal voor 60 jaar, met jaarlijkse canon; je bezit nog steeds de gebouwen op het land.' },
    { q: 'Kan ik een hypotheek krijgen in Aruba als buitenlander?', a: 'Ja. Banken zoals Aruba Bank en RBC Royal Bank bieden hypotheken voor niet-ingezetenen. Buitenlandse kopers hebben doorgaans 35–40% eigen inbreng nodig en moeten bewijs van inkomen, kredietgeschiedenis en bankreferenties overleggen.' },
    { q: 'Kan ik mijn Aruba-vastgoed verhuren als niet-inwoner?', a: 'Ja. Buitenlandse eigenaren kunnen vastgoed verhuren, inclusief korte vakantieverhuur. Voor bepaalde zones kunnen vergunningen voor vakantieverhuur vereist zijn; huurinkomsten zijn belast onder Arubaans recht.' },
    { q: 'Kan ik via een vennootschap vastgoed kopen in Aruba?', a: 'Ja. Aankoop via een rechtspersoon is mogelijk en kan helpen bij nalatenschapsplanning, erfenis en mogelijke fiscale voordelen. Raadpleeg een lokale advocaat voor registratie en juridische stappen.' },
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
          <Image src={FEATURED_IMAGE} alt="Vastgoed kopen in Aruba als buitenlander" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Vastgoed</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Kunnen Buitenlanders Vastgoed Kopen in Aruba? Een Praktische Gids</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Aruba&apos;s zonnige stranden, veilige buurten en stabiele economie maken het eiland aantrekkelijk voor internationale kopers. Of het nu voor vakantie, pensioen of investering is — het antwoord is ja: Aruba staat niet-ingezetenen toe om vastgoed te kopen, bezitten en verkopen onder hetzelfde juridische kader als lokale inwoners.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="intro" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <p className="text-foreground/80 leading-7 md:leading-8">Deze gids legt uit wat buitenlandse kopers moeten weten: wettelijke vereisten, verblijfsregels, financiering, belastingen en verhuurregels.</p>
          </section>

          <section id="ownership-rights" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Eigendomsrechten voor Buitenlanders</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Buitenlandse kopers hebben dezelfde rechten als Arubaanse burgers:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong className="text-foreground">Volledig eigendom:</strong> Je kunt vastgoed kopen, verkopen, hypothekeren en verhuren.</li>
              <li><strong className="text-foreground">Veilig en gereguleerd proces:</strong> Transacties worden afgehandeld door een notaris die zorgt voor heldere titels.</li>
              <li><strong className="text-foreground">Geen speciale vergunningen:</strong> Vastgoed kopen vereist geen nationaliteit, verblijfsstatus of lokale goedkeuring.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruba kent twee hoofdtypen vastgoedeigendom:</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Volledig eigendom (Eigendom)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Je bezit het land en de woning volledig.</li>
                  <li>Geen doorlopende grondlasten.</li>
                  <li>Meestal beperkt tot prime locaties, vaak duurder.</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Erfpacht</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Het land is van de overheid en wordt verpacht, meestal voor 60 jaar.</li>
                  <li>Jaarlijkse canon van toepassing, afhankelijk van locatie en grootte.</li>
                  <li>Je bezit nog steeds de gebouwen op het land en kunt ze verkopen, hypothekeren of verhuren.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="residency-stays" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Verblijf voor Vastgoedeigenaren</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Vastgoed bezitten geeft geen automatisch verblijfsrecht.</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Niet-ingezetenen kunnen zonder visum tot <strong className="text-foreground">180 dagen per jaar</strong> op Aruba verblijven.</li>
              <li>Wie wil pensioneren of langer op het eiland wil wonen, moet een verblijfsvergunning aanvragen.</li>
              <li>Vastgoedeigendom kan je aanvraag voor langdurig verblijf versterken, maar vervangt geen officiële immigratiegoedkeuring.</li>
            </ul>
          </section>

          <section id="required-documents" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Vereiste Documenten voor Buitenlandse Kopers</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Vastgoed kopen als buitenlander is eenvoudig als je het volgende hebt:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Geldig paspoort of door de overheid uitgegeven ID</li>
              <li>Bewijs van inkomen en financiële stabiliteit</li>
              <li>Bankreferenties (uit thuisland)</li>
              <li>Koopovereenkomst en aanbetaling</li>
              <li>Bij financiering: bewijs van vermogen, kredietrapport en taxaties</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Een notaris verzorgt alle juridische documentatie en zorgt voor een schone titel van het vastgoed.</p>
          </section>

          <section id="financing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Financieringsmogelijkheden voor Niet-Ingezetenen</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Buitenlandse kopers hebben vaak een grotere eigen inbreng nodig dan lokale kopers, doorgaans <strong className="text-foreground">35–40%</strong>, en kunnen te maken krijgen met hogere rentes. Banken vragen meestal om:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Bewijs van inkomen en werk</li>
              <li>Kredietgeschiedenis uit thuisland</li>
              <li>Bankreferenties</li>
              <li>Taxatie door een erkende Arubaanse taxateur</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Sommige kopers verkennen financiering in het buitenland of grensoverschrijdende leningen. Lokale banken die hypotheken voor niet-ingezetenen aanbieden zijn onder meer:</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Aruba Bank – Platinum Hypotheek</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Afgestemd op buitenlandse kopers</li>
                  <li>Aflossing op annuïteitenbasis</li>
                  <li>Eigen inbreng: 35–40%</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">RBC Royal Bank – Niet-Inwoner</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Tot circa 65% financiering</li>
                  <li>Looptijd tot 15 jaar</li>
                  <li>Inclusief verbouwingsfinanciering</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="tax-implications" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Belastingen voor Buitenlandse Eigenaren</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Vastgoed bezitten in Aruba gaat gepaard met voorspelbare en transparante belastingen:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong className="text-foreground">Overdrachtsbelasting:</strong> 3% voor vastgoed onder AWG 250.000 (~US$138.000), 6% voor hogere waarden</li>
              <li><strong className="text-foreground">Jaarlijkse onroerendezaakbelasting:</strong> Gebaseerd op de geschatte waarde</li>
              <li><strong className="text-foreground">Erfpachtcanon:</strong> Jaarlijkse vergoeding voor overheidsgrond</li>
              <li><strong className="text-foreground">Belasting op huurinkomsten:</strong> Van toepassing als je je vastgoed verhuurt</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Deze verplichtingen vroeg begrijpen zorgt voor soepel eigendom en naleving.</p>
          </section>

          <section id="renting-out" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Vastgoed Verhuren als Niet-Inwoner</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Buitenlandse eigenaren kunnen vastgoed verhuren, inclusief korte vakantieverhuur. Belangrijke punten:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Voor bepaalde zones kunnen vergunningen voor vakantieverhuur vereist zijn</li>
              <li>Lokale regelgeving en bestemmingsplannen moeten worden nageleefd</li>
              <li>Huurinkomsten zijn belast onder Arubaans recht</li>
              <li>Veel kopers gebruiken vastgoedbeheer voor boekingen, onderhoud en naleving</li>
            </ul>
          </section>

          <section id="buy-through-company" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. Kun Je Via een Vennootschap Kopen?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Ja — aankoop via een rechtspersoon is mogelijk. Voordelen zijn onder meer:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Nalatenschapsplanning en erfenisbeheer</li>
              <li>Mogelijke fiscale voordelen</li>
              <li>Flexibiliteit voor verhuur of investeringsdoeleinden</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aankoop via een vennootschap brengt extra registratie- en juridische stappen met zich mee; overleg met een lokale advocaat is aan te raden.</p>
          </section>

          <section id="key-takeaways" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8. Belangrijkste Punten voor Buitenlandse Kopers</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Aruba verwelkomt internationale kopers zonder eigendomsbeperkingen.</li>
              <li>Zowel volledig eigendom als erfpacht zijn mogelijk, elk met voor- en nadelen.</li>
              <li>Vastgoed kopen geeft geen verblijfsrecht, maar eigenaren kunnen tot 180 dagen per jaar verblijven.</li>
              <li>Financiering is beschikbaar voor niet-ingezetenen, maar eigen inbreng en voorwaarden verschillen van die voor lokale kopers.</li>
              <li>Belastingen, lasten en verhuurregels zijn transparant en voorspelbaar.</li>
              <li>Samenwerken met lokale vastgoedprofessionals — makelaars, notarissen en hypotheekadviseurs — vereenvoudigt het proces en verlaagt het risico.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Vastgoed bezitten in Aruba stelt buitenlanders in staat om van tropisch wonen te genieten, in een stabiele markt te investeren en te profiteren van sterke vraag naar vakantieverhuur. Met goede voorbereiding is het proces soepel, veilig en lonend.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde Vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Kunnen buitenlanders vastgoed kopen in Aruba?', a: 'Ja. Aruba staat niet-ingezetenen toe om vastgoed te kopen, bezitten en verkopen onder hetzelfde juridische kader als lokale inwoners. Geen speciale vergunningen, nationaliteit of verblijfsstatus zijn vereist om te kopen.' },
                { q: 'Krijg ik verblijfsrecht door vastgoed te bezitten in Aruba?', a: 'Nee. Vastgoed bezitten geeft geen automatisch verblijfsrecht. Niet-ingezetenen kunnen zonder visum tot 180 dagen per jaar op Aruba verblijven. Langer verblijf vereist een verblijfsvergunning; vastgoedeigendom kan je aanvraag versterken.' },
                { q: 'Wat is het verschil tussen eigendom en erfpacht in Aruba?', a: 'Volledig eigendom (eigendom) betekent dat je het land en de woning volledig bezit zonder doorlopende grondlasten. Erfpacht betekent dat het land van de overheid is en wordt verpacht, meestal voor 60 jaar, met jaarlijkse canon; je bezit nog steeds de gebouwen op het land.' },
                { q: 'Kan ik een hypotheek krijgen in Aruba als buitenlander?', a: 'Ja. Banken zoals Aruba Bank en RBC Royal Bank bieden hypotheken voor niet-ingezetenen. Buitenlandse kopers hebben doorgaans 35–40% eigen inbreng nodig en moeten bewijs van inkomen, kredietgeschiedenis en bankreferenties overleggen.' },
                { q: 'Kan ik mijn Aruba-vastgoed verhuren als niet-inwoner?', a: 'Ja. Buitenlandse eigenaren kunnen vastgoed verhuren, inclusief korte vakantieverhuur. Voor bepaalde zones kunnen vergunningen voor vakantieverhuur vereist zijn; huurinkomsten zijn belast onder Arubaans recht.' },
                { q: 'Kan ik via een vennootschap vastgoed kopen in Aruba?', a: 'Ja. Aankoop via een rechtspersoon is mogelijk en kan helpen bij nalatenschapsplanning, erfenis en mogelijke fiscale voordelen. Raadpleeg een lokale advocaat voor registratie en juridische stappen.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.foreignBuyersPractical} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'intro', label: 'Inleiding' },
                { id: 'ownership-rights', label: '1. Eigendomsrechten' },
                { id: 'residency-stays', label: '2. Verblijf' },
                { id: 'required-documents', label: '3. Vereiste documenten' },
                { id: 'financing', label: '4. Financiering' },
                { id: 'tax-implications', label: '5. Belastingen' },
                { id: 'renting-out', label: '6. Verhuren' },
                { id: 'buy-through-company', label: '7. Kopen via vennootschap' },
                { id: 'key-takeaways', label: '8. Belangrijkste punten' },
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
