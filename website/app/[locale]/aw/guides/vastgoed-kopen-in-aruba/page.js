import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/property%20in%20aruba.png'

export const metadata = {
  title: 'Vastgoed kopen in Aruba: Stap-voor-Stap Overzicht (2026 Gids)',
  description: 'Volledig proces voor vastgoed of woning kopen in Aruba: huis kopen in Aruba, tweede woning Aruba, kosten koper, belastingen, financiering, eigendom vs erfpacht. Bijgewerkt voor 2026.',
  keywords: [
    'vastgoed kopen in Aruba',
    'woning kopen in Aruba',
    'huis kopen in Aruba',
    'onroerend goed in Aruba',
    'vastgoed investeren Aruba',
    'tweede woning Aruba',
    'investeren in Aruba vastgoed',
    'aankoopkosten Aruba',
    'kosten koper Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/vastgoed-kopen-in-aruba',
  },
  openGraph: {
    title: 'Vastgoed kopen in Aruba: Stap-voor-Stap Overzicht (2026 Gids)',
    description: 'Volledig stap-voor-stap proces voor het kopen van vastgoed in Aruba: juridische vereisten, kosten, belastingen, financiering, eigendom vs erfpacht.',
    type: 'article',
    images: [
      {
        url: FEATURED_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Vastgoed kopen in Aruba: Stap-voor-Stap Overzicht (2026 Gids)',
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
      { '@type': 'ListItem', position: 3, name: 'Vastgoed kopen in Aruba: Stap-voor-Stap Overzicht (2026 Gids)', item: `https://onehappyfinance.com/${locale}/aw/guides/vastgoed-kopen-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Vastgoed kopen in Aruba: Stap-voor-Stap Overzicht (2026 Gids)',
    image: [FEATURED_IMAGE],
    description: 'Volledig stap-voor-stap proces voor het kopen van vastgoed in Aruba: juridische vereisten, kosten, belastingen, financiering, eigendom vs erfpacht.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/vastgoed-kopen-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Hoe lang duurt het om vastgoed te kopen in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Het notariële proces duurt doorgaans 8–12 weken van geaccepteerd bod tot definitieve overdracht, afhankelijk van de complexiteit.' } },
      { '@type': 'Question', name: 'Wat is de overdrachtsbelasting bij het kopen van vastgoed in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Overdrachtsbelasting is 3% voor waarden tot AWG 250.000; daarboven geldt 6% over het meerdere.' } },
      { '@type': 'Question', name: 'Kunnen buitenlanders vastgoed kopen in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Er zijn geen eisen qua nationaliteit of verblijfsstatus; buitenlanders kunnen onder hetzelfde juridische kader kopen als inwoners.' } },
      { '@type': 'Question', name: 'Hoeveel aanbetaling betaal ik bij de aankoop?', acceptedAnswer: { '@type': 'Answer', text: 'Kopers betalen doorgaans circa 10% bij het tekenen van het koopcontract.' } },
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
          <Image src={FEATURED_IMAGE} alt="Vastgoed kopen in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Vastgoed kopen in Aruba: Stap-voor-Stap Overzicht (2026 Gids)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Deze gids legt het volledige proces uit voor vastgoed kopen in Aruba, woning kopen in Aruba of huis kopen in Aruba — of u nu een tweede woning zoekt of wilt investeren in Aruba vastgoed. Inclusief juridische vereisten, kosten koper, belastingen, financiering en het verschil tussen eigendom en erfpacht.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* INTRO */}
      <section className="mt-12 rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
        <p className="text-foreground/80 leading-7 md:leading-8">
          Vastgoed kopen in Aruba — of u nu een woning kopen in Aruba of een huis kopen in Aruba overweegt, een tweede woning Aruba zoekt of wilt investeren in Aruba vastgoed — kan een aantrekkelijke kans zijn. Het eiland biedt stabiele eigendomsrechten, duidelijke juridische procedures en eigendomsmogelijkheden voor zowel inwoners als buitenlandse kopers. Onroerend goed in Aruba en vastgoed investeren Aruba blijven populair voor vakantieverhuur en als investering.
        </p>
        <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
          Deze gids legt het volledige stap-voor-stap proces uit voor het kopen van vastgoed of onroerend goed in Aruba, inclusief juridische vereisten, aankoopkosten, belastingen, financiering en het verschil tussen eigendom en erfpacht.
        </p>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="foreigners" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Kunnen buitenlanders vastgoed kopen in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Ja. Aruba staat zowel inwoners als niet-ingezetenen toe om vastgoed te kopen. Er zijn geen beperkingen op buitenlands eigendom van onroerend goed.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Niet-ingezetenen kunnen doorgaans tot 180 dagen per jaar op Aruba verblijven zonder verblijfsvergunning, maar het bezit van vastgoed geeft geen automatisch recht op verblijf.
            </p>
          </section>

          <section id="step1" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Stap 1: Bepaal uw budget</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Bepaal voordat u gaat zoeken:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Totaal aankoopbudget</li>
              <li>Of u contant of met financiering koopt</li>
              <li>Geschatte bijkomende kosten of aankoopkosten (doorgaans 5%–8% van de aankoopprijs)</li>
              <li>Doorlopende jaarlijkse onroerendezaakbelasting</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Bij financiering via een lokale bank is de eigen inbreng voor niet-ingezetenen vaak hoger.
            </p>
          </section>

          <section id="step2" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Stap 2: Kies het type vastgoed</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Op Aruba zijn verschillende vastgoedtypen beschikbaar:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Eengezinswoningen</li>
              <li>Appartementen (condominiums)</li>
              <li>Strandvilla&apos;s</li>
              <li>Nieuwbouwprojecten</li>
              <li>Verhuurvastgoed als investering (vastgoed investeren Aruba)</li>
              <li>Een tweede woning Aruba voor vakantie of verhuur</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              De locatie is belangrijk. Populaire gebieden zijn onder meer:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Palm Beach</li>
              <li>Eagle Beach</li>
              <li>Noord</li>
              <li>Oranjestad</li>
              <li>Malmok</li>
              <li>Savaneta</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Elk gebied heeft andere prijzen, verhuurvraag en levensstijl.
            </p>
          </section>

          <section id="step3" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Stap 3: Doe een bod en teken een koopovereenkomst</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Zodra u een object heeft gevonden:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Er wordt een schriftelijk bod gedaan.</li>
              <li>Bij acceptatie wordt een koopovereenkomst opgesteld.</li>
              <li>Koper en verkoper tekenen de overeenkomst.</li>
              <li>De overeenkomst wordt naar een notaris gestuurd.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In veel gevallen moeten kopers binnen circa 10 werkdagen 10% van de aankoopprijs bij de notaris storten. Dit bedrag wordt doorgaans in bewaring gehouden (escrow).
            </p>
          </section>

          <section id="step4" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Stap 4: Compliance en due diligence (KYC)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba vereist compliance volgens de Know Your Customer (KYC)-regelgeving. U moet mogelijk het volgende overleggen:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Geldig paspoort of ID</li>
              <li>Bewijs van adres</li>
              <li>Bewijs van middelen of hypotheekgoedkeuring</li>
              <li>Bankdocumentatie</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Dit waarborgt juridische transparantie en voorkomt frauduleuze transacties.
            </p>
          </section>

          <section id="step5" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Stap 5: De rol van de notaris in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Op Aruba kan alleen een beëdigd notaris het eigendom van vastgoed juridisch overdragen. De notaris:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Verifieert het eigendom</li>
              <li>Controleert op hypotheken of schulden op het vastgoed</li>
              <li>Bevestigt onbetaalde belastingen</li>
              <li>Stelt de overdrachtsakte op</li>
              <li>Beheert de escrowmiddelen</li>
              <li>Registreert de overdracht van het vastgoed</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Het notariële proces duurt doorgaans 8–12 weken, afhankelijk van de complexiteit.
            </p>
          </section>

          <section id="step6" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Stap 6: Eigendomsoverdracht</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Zodra alle controles zijn afgerond:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>De definitieve akte wordt bij de notaris ondertekend.</li>
              <li>Het resterende bedrag wordt overgemaakt.</li>
              <li>Het vastgoed wordt officieel op naam van de koper geregistreerd.</li>
              <li>Het eigendom wordt ingeschreven in het openbare register van Aruba.</li>
            </ul>
          </section>

          <section id="freehold" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Eigendom vs. erfpacht in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Bij het kopen van vastgoed in Aruba kunt u twee vormen van grondgebruik tegenkomen:
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Eigendom (Freehold)</h3>
                <p className="mt-2 text-foreground/80 leading-7">U bent volledig eigenaar van zowel de grond als de bebouwing.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Erfpacht (Lease Land)</h3>
                <p className="mt-2 text-foreground/80 leading-7">De grond is eigendom van de overheid en aan u in erfpacht gegeven voor een lange periode (vaak 60 jaar, verlengbaar). Erfpacht kan jaarlijkse canons en verlengingsprocedures met zich meebrengen.</p>
              </div>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Financieringsvoorwaarden kunnen verschillen tussen eigendoms- en erfpachtvastgoed. Dit onderscheid begrijpen is essentieel vóór de aankoop.
            </p>
          </section>

          <section id="costs" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Kosten koper en aankoopkosten bij vastgoed in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Naast de aankoopprijs moeten kopers rekening houden met de volgende bijkomende kosten:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Overdrachtsbelasting</strong> — 3% voor vastgoed onder AWG 250.000; 6% voor vastgoed boven AWG 250.000</li>
              <li><strong>Notariskosten</strong> — Doorgaans tussen 0,5% en 3%, afhankelijk van de complexiteit van de transactie.</li>
              <li><strong>Kosten hypotheekakte</strong> (bij financiering) — Extra kosten als er een hypotheek wordt ingeschreven.</li>
              <li><strong>Totale aankoopkosten (kosten koper)</strong> — Doorgaans tussen 5% en 8% van de aankoopprijs.</li>
            </ul>
          </section>

          <section id="taxes" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Grondbelasting en onroerendezaakbelasting in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba heft jaarlijks grondbelasting op basis van de getaxeerde waarde van het vastgoed. De tarieven variëren doorgaans van 0% voor lagere waardes tot ongeveer 0,6% voor hoger gewaardeerde objecten. De exacte tarieven hangen af van de door de overheid getaxeerde waarde.
            </p>
          </section>

          <section id="financing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Financieringsmogelijkheden</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              <strong>Contante aankoop</strong> — Gebruikelijk onder buitenlandse kopers.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              <strong>Lokale hypotheek</strong> — Beschikbaar via Arubaanse banken. De vereisten verschillen, maar omvatten vaak:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Bewijs van inkomen</li>
              <li>Eigen inbreng (vaak hoger voor niet-ingezetenen)</li>
              <li>Rentes doorgaans tussen 5% en 7% (onder voorbehoud van wijzigingen)</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              De doorlooptijd van hypotheekgoedkeuring varieert maar kan enkele weken duren.
            </p>
          </section>

          <section id="timeline" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Tijdlijnoverzicht</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Van geaccepteerd bod tot definitieve overdracht: ongeveer 8–12 weken. Dit kan variëren afhankelijk van hypotheekgoedkeuring, compliancecontroles, vastgoedtype en nieuwbouw versus bestaande bouw.
            </p>
          </section>

          <section id="considerations" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Belangrijke overwegingen vóór de aankoop</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Begrijp de bestemmingsregels als u verbouwingen plant.</li>
              <li>Controleer VvE-kosten bij appartementen.</li>
              <li>Bevestig verhuurregels als u koopt voor Airbnb of langetermijnverhuur.</li>
              <li>Bekijk de verzekeringseisen (woonverzekering wordt sterk aanbevolen).</li>
            </ul>
          </section>

          <section id="investment" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Is vastgoed kopen in Aruba een goede investering?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Vastgoed investeren in Aruba en een tweede woning Aruba aanschaffen is populair: het eiland heeft een stabiele toerismegedreven economie en constante vraag naar vakantieverhuur. Of investeren in Aruba vastgoed of woning kopen in Aruba voor u rendeert, hangt sterk af van locatie, verhuurvraag, vastgoedtype, financieringsstructuur en beheerkosten. Due diligence is essentieel.
            </p>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Slotgedachten</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Huis kopen in Aruba of woning kopen in Aruba is een gestructureerd en transparant proces als u de stappen kent. Of u nu een tweede woning Aruba zoekt, inwoner bent of internationale koper — voorbereiding en helderheid zijn belangrijk.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Inzicht in eigendomsstructuren, aankoopkosten, belastingen en financieringsmogelijkheden helpt u een weloverwogen beslissing te nemen bij vastgoed of onroerend goed kopen in Aruba.
            </p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Hoe lang duurt het om vastgoed te kopen in Aruba?', a: 'Het notariële proces duurt doorgaans 8–12 weken van geaccepteerd bod tot definitieve overdracht, afhankelijk van de complexiteit.' },
                { q: 'Wat is de overdrachtsbelasting bij het kopen van vastgoed in Aruba?', a: 'Overdrachtsbelasting is 3% voor vastgoed onder AWG 250.000; 6% voor vastgoed boven AWG 250.000.' },
                { q: 'Kunnen buitenlanders vastgoed kopen in Aruba?', a: 'Ja. Aruba staat zowel inwoners als niet-ingezetenen toe om vastgoed te kopen, zonder beperkingen op buitenlands eigendom.' },
                { q: 'Hoeveel aanbetaling betaal ik bij de aankoop?', a: 'In veel gevallen storten kopers 10% van de aankoopprijs bij de notaris binnen circa 10 werkdagen. Dit wordt doorgaans in escrow gehouden.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.buyingProperty} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'foreigners', label: 'Kunnen buitenlanders?' },
                { id: 'step1', label: 'Stap 1: Budget' },
                { id: 'step2', label: 'Stap 2: Type vastgoed' },
                { id: 'step3', label: 'Stap 3: Bod & overeenkomst' },
                { id: 'step4', label: 'Stap 4: KYC' },
                { id: 'step5', label: 'Stap 5: Notaris' },
                { id: 'step6', label: 'Stap 6: Eigendomsoverdracht' },
                { id: 'freehold', label: 'Eigendom vs erfpacht' },
                { id: 'costs', label: 'Kosten' },
                { id: 'taxes', label: 'Onroerendezaakbelasting' },
                { id: 'financing', label: 'Financiering' },
                { id: 'timeline', label: 'Tijdlijn' },
                { id: 'considerations', label: 'Overwegingen' },
                { id: 'investment', label: 'Goede investering?' },
                { id: 'final', label: 'Slotgedachten' },
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
