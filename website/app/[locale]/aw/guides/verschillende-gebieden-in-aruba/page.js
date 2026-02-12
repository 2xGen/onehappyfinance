import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/different%20property%20areas%20in%20aruba.png'

export const metadata = {
  title: 'Verschillende gebieden in Aruba: Gids naar de buurten van het eiland',
  description: 'Volledig overzicht van de belangrijkste gebieden in Aruba: Noord, Palm Beach, Eagle Beach, Oranjestad, San Nicolas, Malmok en meer. Leefstijl, vastgoed en wat elk gebied uniek maakt.',
  keywords: [
    'buurten Aruba',
    'gebieden Aruba',
    'Palm Beach Aruba',
    'Eagle Beach Aruba',
    'Noord Aruba',
    'waar wonen Aruba',
    'vastgoed gebieden Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/verschillende-gebieden-in-aruba',
  },
  openGraph: {
    title: 'Verschillende gebieden in Aruba: Gids naar de buurten van het eiland',
    description: 'Van levendige strandwijken tot rustige woonplaatsen — een compleet overzicht van de belangrijkste locaties in Aruba en wat elk uniek maakt.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Verschillende gebieden in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Verschillende gebieden in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/verschillende-gebieden-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Verschillende gebieden in Aruba: Gids naar de buurten van het eiland',
    image: [FEATURED_IMAGE],
    description: 'Overzicht van de belangrijkste gebieden in Aruba: Noord, Palm Beach, Eagle Beach, Oranjestad, San Nicolas en meer. Leefstijl en vastgoed per buurt.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-12',
    dateModified: '2026-02-12',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/verschillende-gebieden-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Wat is het beste gebied in Aruba voor uitgaan en uit eten?', a: 'Palm Beach en Oranjestad bieden de meeste uitgaansgelegenheden, restaurants en entertainment. Palm Beach heeft hoogbouwresorts, casino\'s en strandtenten; Oranjestad heeft winkels, musea en de cruiseterminal.' },
    { q: 'Welk deel van Aruba is het beste voor rustig strandleven?', a: 'Eagle Beach staat bekend om brede witte stranden en een ontspannen, laagbouw sfeer. Savaneta biedt een rustige vissersdorp-sfeer en woningen aan het water. Malmok en Arashi zijn rustigere, chique kustgebieden met goed snorkelen.' },
    { q: 'Waar in Aruba is goed voor gezinnen en rustig zwemmen?', a: 'Baby Beach (Seroe Colorado) heeft een rustige, ondiepe lagune, ideaal voor gezinnen en beginnende zwemmers. Eagle Beach is ook gezinsvriendelijk met een ontspannener sfeer dan Palm Beach.' },
    { q: 'Welk gebied in Aruba is het beste voor natuur en wandelen?', a: 'Santa Cruz ligt bij Nationaal Park Arikok en biedt een landelijk, natuurgericht leven. Nationaal Park Arikok zelf beslaat bijna 20% van het eiland met woestijnlandschappen, grotten en wandelpaden.' },
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
          <Image src={FEATURED_IMAGE} alt="Verschillende gebieden in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Vastgoed</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Verschillende gebieden in Aruba: Gids naar de buurten van het eiland</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Aruba is een klein eiland, maar kent duidelijke regio&apos;s—van levendige strandwijken tot rustige woonplaatsen en ruige natuur. Hier een compleet overzicht van de belangrijkste locaties en wat elk uniek maakt.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="intro" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <p className="text-foreground/80 leading-7 md:leading-8">Of je nu verhuist, investeert of gewoon verkent waar je wilt wonen—deze gids behandelt de belangrijkste gebieden van Aruba en wat elk uniek maakt.</p>
          </section>

          <section id="noord" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Noord</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Noord is een van de meest gewilde en centraal gelegen gebieden van Aruba. Het ligt dicht bij Palm Beach, Eagle Beach, restaurants, supermarkten en internationale scholen.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Dit gebied combineert woonwijken met luxe villa&apos;s, beveiligde complexen en vakantieverhuur. Het is populair onder expats en internationale kopers vanwege het gemak en het sterke verhuurpotentieel.</p>
            <p className="mt-4 font-semibold text-foreground">Waarom mensen voor Noord kiezen:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Dicht bij Palm Beach en Eagle Beach</li>
              <li>Hoge vraag naar vakantieverhuur</li>
              <li>Moderne woningen en beveiligde complexen</li>
              <li>Makkelijk bereik van restaurants en uitgaan</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Noord biedt een balans tussen wooncomfort en toeristisch gemak.</p>
          </section>

          <section id="palm-beach" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Palm Beach</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Palm Beach is het hoogbouw hotel- en uitgaansgebied van Aruba. Het is het meest energieke en kosmopolitische deel van het eiland.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Luxe resorts, casino&apos;s, strandtenten, restaurants, winkelcentra en uitgaan bepalen dit stuk kustlijn. Appartementen en vakantiegericht vastgoed zijn hier gebruikelijk.</p>
            <p className="mt-4 font-semibold text-foreground">Het beste voor:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Uitgaan en uit eten</li>
              <li>Investering in kortetermijnverhuur</li>
              <li>Resort-achtig wonen</li>
              <li>Loopafstand tot het strand</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Palm Beach is ideaal voor wie van een levendige, actieve omgeving houdt.</p>
          </section>

          <section id="eagle-beach" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Eagle Beach</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eagle Beach staat bekend om zijn brede witte stranden en ontspannen, laagbouw sfeer. Het staat steevast bij de mooiste stranden van het Caribisch gebied.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Vergeleken met Palm Beach is Eagle Beach rustiger en meer residentieel. Je vindt er boutique-resorts, appartementscomplexen en rustige wijken in de buurt.</p>
            <p className="mt-4 font-semibold text-foreground">Het beste voor:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Rustig wonen aan het strand</li>
              <li>Lange strandwandelingen en zonsondergangen</li>
              <li>Lagere bebouwingsdichtheid</li>
              <li>Ontspannen sfeer</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eagle Beach biedt een meer ontspannen kustleven.</p>
          </section>

          <section id="oranjestad" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Oranjestad (hoofdstad)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Oranjestad is de hoofdstad en het commerciële centrum van Aruba. Het combineert Nederlandse koloniale architectuur, kleurrijke gebouwen, winkelstraten en overheidskantoren.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De stad heeft een mix van woonhuizen, appartementen, waterfront-projecten en commercieel vastgoed. Hier wonen betekent alles binnen handbereik hebben.</p>
            <p className="mt-4 font-semibold text-foreground">Highlights:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Winkelen en uit eten</li>
              <li>Musea en culturele plekken</li>
              <li>Cruisehaven en marina</li>
              <li>Stedelijk gemak</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Oranjestad biedt Caribische charme met moderne infrastructuur.</p>
          </section>

          <section id="san-nicolas" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">San Nicolas (Sunrise City)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">San Nicolas ligt in het zuiden van het eiland en is de op een na grootste stad en het culturele hart van Aruba.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Bekend als &quot;Sunrise City&quot; heeft het levendige straatkunst, lokale eetgelegenheden, muziekfestivals en een sterk gemeenschapsgevoel. Het ligt ook dicht bij Baby Beach en rustigere kustgebieden.</p>
            <p className="mt-4 font-semibold text-foreground">Het beste voor:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Authentieke lokale cultuur</li>
              <li>Betaalbaarder wonen</li>
              <li>Artistieke en creatieve omgeving</li>
              <li>Nabijheid van Baby Beach</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">San Nicolas biedt een rustiger tempo en een sterke culturele identiteit.</p>
          </section>

          <section id="malmok-arashi" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Malmok & Arashi</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Malmok en Arashi liggen aan de noordkust en staan bekend om rotsachtige kustlijnen, helder ondiep water en enkele van de beste snorkel- en duikplekken van het eiland.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Het gebied heeft chique villa&apos;s en luxe woningen, vaak met uitzicht op zee.</p>
            <p className="mt-4 font-semibold text-foreground">Het beste voor:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Snorkelen en duiken</li>
              <li>Zonsondergangen</li>
              <li>Rustig chique wonen</li>
              <li>Dicht bij Palm Beach maar minder druk</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Malmok biedt een rustige kustomgeving met hoogwaardige uitstraling.</p>
          </section>

          <section id="savaneta" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Savaneta</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Savaneta is de oudste plaats en voormalige hoofdstad van Aruba. Het heeft een rustige vissersdorpsfeer en biedt een traditioneler eilandleven.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Het gebied staat bekend om woningen aan het water, lokale visrestaurants en stranden als Mangel Halto met rustig water en mangrove.</p>
            <p className="mt-4 font-semibold text-foreground">Het beste voor:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Authentiek wonen</li>
              <li>Waterfront vastgoed</li>
              <li>Rustig kustleven</li>
              <li>Lokaal gemeenschapsgevoel</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Savaneta voelt minder toeristisch en meer residentieel.</p>
          </section>

          <section id="paradera" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Paradera</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Paradera is een centraal binnenlands gebied bekend om natuurlijke rotsformaties zoals Ayo en Casibari. Het biedt een ontspannen, woonachtige omgeving.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Woningen staan hier vaak op grotere percelen, en het gebied biedt gemakkelijke toegang tot zowel stranden als het centrum.</p>
            <p className="mt-4 font-semibold text-foreground">Het beste voor:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Grotere percelen</li>
              <li>Lokale buurtsfeer</li>
              <li>Centrale ligging</li>
              <li>Rustige omgeving</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Paradera is ideaal voor wie ruimte en privacy zoekt.</p>
          </section>

          <section id="santa-cruz" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Santa Cruz</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Santa Cruz ligt bij Nationaal Park Arikok en biedt een sterke band met de natuur. Het is vooral residentieel en minder toeristisch.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De gemeenschap is hecht en wordt omgeven door woestijnlandschap, grotten en natuurpaden.</p>
            <p className="mt-4 font-semibold text-foreground">Het beste voor:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Natuurliefhebbers</li>
              <li>Nabijheid van Nationaal Park Arikok</li>
              <li>Traditioneel Arubaans leven</li>
              <li>Rustig wonen</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Santa Cruz biedt een landelijk, authentiek eilandgevoel.</p>
          </section>

          <section id="arikok" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Nationaal Park Arikok</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Nationaal Park Arikok beslaat bijna 20% van het eiland en is een beschermd natuurgebied met woestijnlandschap, ruige kust, grotten en wandelpaden.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Het is geen woongebied, maar speelt een grote rol in de natuurlijke identiteit van Aruba.</p>
            <p className="mt-4 font-semibold text-foreground">Het beste voor:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Wandelen en off-road avontuur</li>
              <li>Natuur en geologie</li>
              <li>Afgelegen stranden</li>
              <li>Buitenactiviteiten</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Arikok toont het ruige, ongerepte karakter van Aruba.</p>
          </section>

          <section id="baby-beach" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Baby Beach (Seroe Colorado)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Baby Beach ligt aan de zuidpunt van het eiland en is beroemd om zijn rustige, ondiepe turkooizen lagune.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Het is ideaal voor gezinnen en beginnende zwemmers door het beschermde water.</p>
            <p className="mt-4 font-semibold text-foreground">Het beste voor:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Rustig zwemmen</li>
              <li>Snorkelen</li>
              <li>Gezinsvriendelijke stranddagen</li>
              <li>Wonen aan de zuidkust</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">In de buurt van Seroe Colorado vind je woonprojecten met uitzicht op zee en een rustigere sfeer.</p>
          </section>

          <section id="by-lifestyle" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Beste gebieden per leefstijl</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Beste voor uitgaan en uit eten</h3>
                <p className="mt-2 text-foreground/80 leading-7">Palm Beach, Oranjestad</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Beste voor stranden en snorkelen</h3>
                <p className="mt-2 text-foreground/80 leading-7">Eagle Beach, Baby Beach, Arashi, Malmok</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Beste voor lokale cultuur en kunst</h3>
                <p className="mt-2 text-foreground/80 leading-7">San Nicolas, Savaneta</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Beste voor natuur en avontuur</h3>
                <p className="mt-2 text-foreground/80 leading-7">Nationaal Park Arikok, Santa Cruz</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Beste voor wonen</h3>
                <p className="mt-2 text-foreground/80 leading-7">Noord, Paradera, Santa Cruz</p>
              </div>
            </div>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Tot slot</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruba biedt ondanks zijn compacte formaat een gevarieerd aanbod aan buurten. Van levendige strandwijken tot rustige binnenlandse gemeenschappen—elk gebied biedt een andere ervaring.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De juiste plek kiezen hangt af van je leefstijl, budget en langetermijndoelen—of dat nu investeringspotentieel, rust, cultuur of gemak is.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Wat is het beste gebied in Aruba voor uitgaan en uit eten?', a: 'Palm Beach en Oranjestad bieden de meeste uitgaansgelegenheden, restaurants en entertainment. Palm Beach heeft hoogbouwresorts, casino\'s en strandtenten; Oranjestad heeft winkels, musea en de cruiseterminal.' },
                { q: 'Welk deel van Aruba is het beste voor rustig strandleven?', a: 'Eagle Beach staat bekend om brede witte stranden en een ontspannen, laagbouw sfeer. Savaneta biedt een rustige vissersdorp-sfeer en woningen aan het water. Malmok en Arashi zijn rustigere, chique kustgebieden met goed snorkelen.' },
                { q: 'Waar in Aruba is goed voor gezinnen en rustig zwemmen?', a: 'Baby Beach (Seroe Colorado) heeft een rustige, ondiepe lagune, ideaal voor gezinnen en beginnende zwemmers. Eagle Beach is ook gezinsvriendelijk met een ontspannener sfeer dan Palm Beach.' },
                { q: 'Welk gebied in Aruba is het beste voor natuur en wandelen?', a: 'Santa Cruz ligt bij Nationaal Park Arikok en biedt een landelijk, natuurgericht leven. Nationaal Park Arikok zelf beslaat bijna 20% van het eiland met woestijnlandschappen, grotten en wandelpaden.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.differentAreas} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'intro', label: 'Inleiding' },
                { id: 'noord', label: 'Noord' },
                { id: 'palm-beach', label: 'Palm Beach' },
                { id: 'eagle-beach', label: 'Eagle Beach' },
                { id: 'oranjestad', label: 'Oranjestad' },
                { id: 'san-nicolas', label: 'San Nicolas' },
                { id: 'malmok-arashi', label: 'Malmok & Arashi' },
                { id: 'savaneta', label: 'Savaneta' },
                { id: 'paradera', label: 'Paradera' },
                { id: 'santa-cruz', label: 'Santa Cruz' },
                { id: 'arikok', label: 'Nationaal Park Arikok' },
                { id: 'baby-beach', label: 'Baby Beach' },
                { id: 'by-lifestyle', label: 'Beste per leefstijl' },
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
