import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png'

export const metadata = {
  title: 'Kunnen Buitenlanders een Huis Kopen op Aruba? Volledige Gids',
  description: 'Ja — buitenlanders kunnen zonder beperkingen vastgoed kopen op Aruba. Eigendom vs erfpacht, populaire gebieden (Oranjestad, Palm Beach, Noord), financiering, kosten, overdrachtsbelasting en FAQ.',
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba',
  },
  openGraph: {
    title: 'Kunnen Buitenlanders een Huis Kopen op Aruba? Volledige Gids',
    description: 'Eigendom vs erfpacht, populaire gebieden, financiering, kosten, overdrachtsbelasting en FAQ voor internationale kopers in Aruba.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Kunnen Buitenlanders een Huis Kopen op Aruba? Volledige Gids' },
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
      { '@type': 'ListItem', position: 3, name: 'Kunnen Buitenlanders een Huis Kopen op Aruba? Volledige Gids', item: `https://onehappyfinance.com/${locale}/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kunnen Buitenlanders een Huis Kopen op Aruba? Volledige Gids',
    image: [FEATURED_IMAGE],
    description: 'Ja — buitenlanders kunnen zonder beperkingen vastgoed kopen op Aruba. Eigendom vs erfpacht, populaire gebieden, financiering, kosten en overdrachtsbelasting.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kan ik vastgoed kopen op Aruba zonder er te wonen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Veel internationale kopers bezitten vakantiewoningen of verhuurwoningen op Aruba zonder inwoner te zijn.' } },
      { '@type': 'Question', name: 'Wat is het verschil tussen erfpacht en eigendomsgrond?', acceptedAnswer: { '@type': 'Answer', text: 'Bij erfpacht is de grond van de overheid; u huurt langdurig (vaak 60 jaar) met een jaarlijkse canon. Bij eigendom bent u volledig eigenaar van grond en woning.' } },
      { '@type': 'Question', name: 'Kan ik als buitenlander een hypotheek krijgen in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Aruba Bank en RBC Royal Bank bieden hypotheken voor niet-ingezetenen, meestal met circa 35% eigen inbreng.' } },
      { '@type': 'Question', name: 'Hoe lang duurt het om vastgoed te kopen in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Vanaf geaccepteerd bod en complete documenten duurt het notariële proces doorgaans 3–6 weken.' } },
      { '@type': 'Question', name: 'Kunnen buitenlanders grond op eigen naam kopen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Vastgoed kan direct op uw naam worden geregistreerd of via een rechtspersoon zoals een BV of stichting.' } },
      { '@type': 'Question', name: 'Hoeveel aanbetaling betaal ik bij de aankoop?', acceptedAnswer: { '@type': 'Answer', text: 'Kopers betalen doorgaans circa 10% bij het tekenen van het koopcontract. Het exacte bedrag kan variëren afhankelijk van het contract.' } },
      { '@type': 'Question', name: 'Wat is de overdrachtsbelasting in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'De overdrachtsbelasting is 3% voor waarden tot AWG 250.000. Daarboven geldt 6% over het meerdere bedrag.' } },
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
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Kunnen Buitenlanders een Huis Kopen op Aruba? Volledige Gids</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Ja — buitenlanders kunnen zonder beperkingen vastgoed kopen op Aruba. Deze gids behandelt het proces, de kosten, financiering en populaire gebieden voor internationale kopers.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="q1" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Wie Kan Vastgoed Kopen op Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De Arubaanse overheid moedigt internationale investeringen in vastgoed aan. Er zijn geen vereisten qua nationaliteit of verblijfsstatus — buitenlanders kunnen appartementen, huizen of grond kopen onder hetzelfde juridische kader als Arubaanse burgers. De belangrijkste verschillen voor niet-ingezetenen liggen doorgaans in de financieringsvoorwaarden en de keuze tussen eigendom en erfpacht.</p>
          </section>

          <section id="q2" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Eigendom vs. Erfpacht op Aruba</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Eigendomsgrond (Freehold)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>U bent volledig eigenaar van grond en woning</li>
                  <li>Geen jaarlijkse grondkosten</li>
                  <li>Volledige rechten om te verbouwen, verkopen of verhuren binnen bestemmingsplannen</li>
                  <li>Doorgaans duurder, beperkte gebieden</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Erfpachtgrond (Lease Land)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>De overheid is eigenaar; u huurt langdurig (vaak 60 jaar)</li>
                  <li>Jaarlijkse canon (op basis van grootte/locatie; vaak enkele honderden USD)</li>
                  <li>Bouwen, verkopen of overdragen mogelijk onder regels</li>
                  <li>Gebruikelijk voor woningen en vakantiewoningen</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="why" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Waarom Aruba Aantrekkelijk is voor Buitenlandse Kopers</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba&apos;s toerismegedreven economie, stabiel bestuur als onderdeel van het Koninkrijk der Nederlanden en sterke vraag naar vakantieverhuur maken het een aantrekkelijke markt voor buitenlandse investeerders. Het eiland trekt jaarlijks miljoenen bezoekers, wat zowel kortetermijnverhuuropbrengsten als langetermijnwaardegroei ondersteunt. Een gunstig fiscaal kader, transparant juridisch systeem voor buitenlands eigendom en goede infrastructuur ondersteunen investeringen verder. Het hele jaar door zon, veilige wijken en goed bereikbare luchthavens verhogen de aantrekkelijkheid voor kopers die een Caribische uitvalsbasis zoeken.
            </p>
          </section>

          <section id="areas" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Populaire Gebieden voor Vastgoedinvestering</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Hieronder enkele van de meest gezochte locaties om vastgoed te kopen op Aruba:</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Oranjestad</h3>
                <p className="mt-1 text-foreground/80 leading-7">De hoofdstad combineert cultuur, handel en toerisme. Kopers vinden appartementen, rijtjeshuizen en luxe vastgoed. Historische architectuur en nabijgelegen stranden ondersteunen sterke verhuurvraag.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Noord</h3>
                <p className="mt-1 text-foreground/80 leading-7">Ten noorden van het eiland biedt Noord luxe wijken, villa&apos;s en makkelijke toegang tot Palm Beach en Eagle Beach. Ideaal voor een mix van rustig wonen en toeristische activiteit.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Palm Beach</h3>
                <p className="mt-1 text-foreground/80 leading-7">Strandappartementen, resorts en vakantieverhuur domineren. Uitgaan, winkelen en watersport trekken constant toerisme aan, wat kortetermijnverhuurinkomsten ondersteunt.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">San Nicolas</h3>
                <p className="mt-1 text-foreground/80 leading-7">Het culturele centrum van het zuiden biedt betaalbaardere opties, kunstevenementen, festivals en rustigere stranden zoals Baby Beach — aantrekkelijk voor kopers die waarde en langetermijngroei zoeken.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Paradera</h3>
                <p className="mt-1 text-foreground/80 leading-7">In het binnenland en rustiger, geschikt voor wie gezinswoningen of grotere percelen tegen lagere prijzen wil, met een rustiger leven ver van toeristenzones.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Malmok</h3>
                <p className="mt-1 text-foreground/80 leading-7">Een premium gebied met woningen aan het water en makkelijke toegang tot snorkellocaties. Trekt luxe kopers en wie op zoek is naar hoogwaardige vakantiewoningen.</p>
              </div>
            </div>
          </section>

          <section id="find" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Waar Vastgoed Online Vinden</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Veel Arubaanse makelaars bieden vastgoed online aan. Voorbeelden van portalen en makelaars:</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><a href="https://arubalistings.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">arubalistings.com</a></li>
              <li><a href="https://century21aruba.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">century21aruba.com</a></li>
              <li><a href="https://www.coldwellbanker.aw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">coldwellbanker.aw</a></li>
            </ul>
          </section>

          <section id="q3" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Due Diligence en het Aankoopproces</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Vóór de overdracht moeten kopers controleren dat het vastgoed een schone titel heeft — geen hypotheken, geschillen of conflicterende claims — en dat de verkoper het recht heeft om te verkopen. Dit omvat doorgaans een titelonderzoek, bestemmingsplancontrole en bevestiging dat alle vereiste vergunningen op orde zijn. Een civielnotaris begeleidt de transactie op Aruba: zij stelt de akte op, voert de due diligence uit en registreert de overdracht.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Kopers betalen doorgaans circa 10% bij het tekenen van het koopcontract. Het contract legt de voorwaarden vast, waarna de notaris de definitieve akte en registratie afhandelt. Reken op ongeveer 3–6 weken van geaccepteerd bod tot overdracht, mits de documentatie in orde is.
            </p>
            <ol className="mt-4 list-decimal pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Koopcontract tekenen en aanbetaling betalen (doorgaans ~10%)</li>
              <li>Notaris voert titelonderzoek en due diligence uit</li>
              <li>Definitieve betaling en ondertekening akte</li>
              <li>Akte geregistreerd en sleutels overhandigd</li>
            </ol>
          </section>

          <section id="q4" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. Financiering voor Niet-Ingezetenen</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Arubaanse banken bieden hypotheken aan buitenlandse kopers, maar de voorwaarden verschillen van die voor inwoners. Niet-ingezetenen hebben doorgaans een grotere eigen inbreng nodig (vaak 35–40%), kunnen hogere rentes krijgen en soms kortere looptijden. Banken vragen bewijs van inkomen, vermogen en kredietgeschiedenis — vaak uit uw thuisland. Sommige internationale kopers verkennen ook financiering van banken in hun thuisland of grensoverschrijdende opties. Neem contact op met lokale banken of een financieel adviseur op Aruba voor actuele voorwaarden.
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aruba Bank – Platinum Hypotheek</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Afgestemd op buitenlanders die woningen of appartementen kopen</li>
                  <li>Annuïteitenhypotheek met persoonlijke accountmanager</li>
                  <li>Typische eigen inbreng: 35–40%</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">RBC Royal Bank – Niet-Ingezetenen</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Tot ~65% financiering</li>
                  <li>Aflossingstermijn tot ~15 jaar</li>
                  <li>Aankoop en renovatie mogelijk</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border p-5 bg-white shadow-sm">
              <h3 className="m-0 font-semibold">Documenten die banken doorgaans vragen</h3>
              <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                <li>Geldig paspoort</li>
                <li>Bewijs van inkomen (loonstroken, belastingaangiften)</li>
                <li>Bankreferentiebrief</li>
                <li>Kredietrapport uit thuisland</li>
                <li>Taxatie door een erkende Arubaanse taxateur</li>
              </ul>
            </div>
          </section>

          <section id="q5" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8. Kosten en Belastingen bij de Aankoop</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Bij het kopen van vastgoed op Aruba moet u rekenen op overdrachtsbelasting, notaris- en juridische kosten, en eventueel makelaarsprovisie. Erfpacht brengt een jaarlijkse canon met zich mee. Hieronder een typisch overzicht:</p>
            <div className="mt-5 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Kosten</th>
                    <th className="text-left p-3 font-semibold">Typisch bereik</th>
                    <th className="text-left p-3 font-semibold">Wie betaalt</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-foreground/80">
                  <tr><td className="p-3">Overdrachtsbelasting</td><td className="p-3">3% – 6%</td><td className="p-3">Koper</td></tr>
                  <tr><td className="p-3">Notariskosten (overdrachtsakte)</td><td className="p-3">1% – 4%</td><td className="p-3">Koper</td></tr>
                  <tr><td className="p-3">Notariskosten (hypotheekakte, indien van toepassing)</td><td className="p-3">1% – 2%</td><td className="p-3">Koper</td></tr>
                  <tr><td className="p-3">Juridische kosten</td><td className="p-3">1% – 2%</td><td className="p-3">Koper</td></tr>
                  <tr><td className="p-3">Makelaarsprovisie</td><td className="p-3">2% – 3%</td><td className="p-3">Verkoper</td></tr>
                  <tr><td className="p-3">Taxatie</td><td className="p-3">Variabel</td><td className="p-3">Koper</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-2xl border p-5 bg-white shadow-sm">
              <h3 className="font-semibold text-foreground">Overdrachtsbelasting</h3>
              <p className="mt-2 text-foreground/80 leading-7">
                De overdrachtsbelasting bedraagt 3% voor vastgoedwaarden tot AWG 250.000 (ongeveer US$ 138.889). Daarboven geldt 6% over het meerdere bedrag.
              </p>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Totale kosten aan de kant van de koper liggen vaak tussen 5–12% van de aankoopprijs. Woonhuisverzekering is doorgaans verplicht bij hypotheekfinanciering.
            </p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde Vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Kan ik vastgoed kopen op Aruba zonder er te wonen?', a: 'Ja. U hoeft geen inwoner te zijn. Veel internationale kopers bezitten vakantiewoningen of verhuurwoningen op Aruba zonder inwoner te zijn.' },
                { q: 'Wat is het verschil tussen erfpacht en eigendomsgrond?', a: 'Bij erfpacht is de grond van de overheid; u huurt langdurig (vaak 60 jaar) met een jaarlijkse canon. Bij eigendom bent u volledig eigenaar van grond en woning.' },
                { q: 'Kan ik als buitenlander een hypotheek krijgen in Aruba?', a: 'Ja. Aruba Bank en RBC Royal Bank bieden hypotheken voor niet-ingezetenen, meestal met circa 35% eigen inbreng. De voorwaarden kunnen afwijken van inwoners.' },
                { q: 'Hoe lang duurt het om vastgoed te kopen in Aruba?', a: 'Doorgaans 3–6 weken van geaccepteerd bod tot overdracht, zodra de documenten compleet zijn.' },
                { q: 'Kunnen buitenlanders grond op eigen naam kopen?', a: 'Ja. Vastgoed kan direct op uw naam worden geregistreerd of via een rechtspersoon zoals een BV of stichting.' },
                { q: 'Hoeveel aanbetaling betaal ik bij de aankoop?', a: 'Kopers betalen doorgaans circa 10% bij het tekenen van het koopcontract. Het exacte bedrag kan variëren afhankelijk van het contract.' },
                { q: 'Wat is de overdrachtsbelasting in Aruba?', a: 'De overdrachtsbelasting bedraagt 3% voor waarden tot AWG 250.000 (ongeveer US$ 138.889). Daarboven geldt 6% over het meerdere bedrag.' },
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
                { id: 'q1', label: 'Wie Kan Kopen?' },
                { id: 'q2', label: 'Eigendom vs Erfpacht' },
                { id: 'why', label: 'Waarom Aruba' },
                { id: 'areas', label: 'Populaire Gebieden' },
                { id: 'find', label: 'Waar Vastgoed Vinden' },
                { id: 'q3', label: 'Due Diligence & Proces' },
                { id: 'q4', label: 'Financiering' },
                { id: 'q5', label: 'Kosten en Belastingen' },
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
