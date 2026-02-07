import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Freehold%20vs.%20Lease%20Land%20in%20Aruba.png'

export const metadata = {
  title: 'Eigendom vs. Erfpacht in Aruba (Freehold vs Lease Land) | Volledige Gids',
  description: 'Eigendom (freehold) vs erfpacht (lease land) in Aruba: eigendom, jaarlijkse canon, 60-jaar lease, financiering, due diligence checklist en FAQ.',
  keywords: [
    'eigendom vs erfpacht Aruba',
    'freehold vs lease land Aruba',
    'erfpacht Aruba',
    'eigendom vastgoed Aruba',
    'hypotheek erfpacht Aruba',
    'Aruba erfpacht',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/eigendom-vs-erfpacht-in-aruba',
  },
  openGraph: {
    title: 'Eigendom vs. Erfpacht in Aruba (Freehold vs Lease Land) | Volledige Gids',
    description: 'Verschillen, kosten, beperkingen en hypotheekopties voor eigendom vs erfpacht in Aruba.',
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
    headline: 'Eigendom vs. Erfpacht in Aruba (Freehold vs Lease Land) | Volledige Gids',
    image: [FEATURED_IMAGE],
    description: 'Eigendom vs erfpacht in Aruba: freehold, erfpacht, jaarlijkse canon, 60-jaar lease, financiering, due diligence.',
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
    { q: 'Kunnen buitenlanders eigendom vastgoed kopen in Aruba?', a: 'Ja, buitenlandse kopers kunnen vaak eigendom (freehold) kopen. Controleer parcelspecifieke toelaatbaarheid en beperkingen bij het kadaster en een notaris vóór je toezegt.' },
    { q: 'Financieren banken erfpachtaankopen in Aruba?', a: 'Veel aanbieders overwegen erfpacht als de resterende looptijd ruim boven de looptijd van de lening uitkomt en het erfpachtcontract hypotheek toestaat. Bevestig tijdig bij lokale banken.' },
    { q: 'Hoe wordt de jaarlijkse canon op erfpacht bepaald en aangepast?', a: 'De canon wordt in het contract vastgelegd en kan vast, geïndexeerd of periodiek herzien zijn. Controleer de formule, timing van verhogingen en eventuele plafonds of heronderhandelingsbepalingen.' },
    { q: 'Wat gebeurt er met gebouwen aan het einde van een erfpacht?', a: 'Resultaten zijn contract-specifiek. Contracten kunnen verwijdering vereisen, compensatie bieden of teruggave bevestigen. Lees de verbeteringen- en afloopclausules met juridisch advies goed door.' },
    { q: 'Kan ik kortetermijnverhuur doen op een erfpachtwoning?', a: 'Dat hangt af van gemeentelijke regels en het contract. Controleer lokale vergunningen en de subverhuur- en gebruiksbepalingen in het contract voordat je vakantieverhuur plant.' },
    { q: 'Welke documenten zijn essentieel voor erfpacht due diligence?', a: 'Gecertificeerd kadasteronderzoek, volledig contract met alle bijlagen, recente canonafrekeningen, bestemmingsplan- en vergunningsgegevens, actueel opmetingsrapport, en schriftelijke adviezen van een notaris, aanbieder en fiscaal adviseur.' },
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
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Eigendom vs. Erfpacht in Aruba (Freehold vs Lease Land)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Eigendom (freehold) betekent volledig eigendom; Erfpacht (lease land) is een 60-jaar vernieuwbare lease met jaarlijkse kosten. Controle, kosten, financiering en verkoop verschillen. Dit is wat je moet verifiëren.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="freehold" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Eigendom (Freehold)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Bij eigendom (freehold) koop je het volledige eigendomsrecht van de grond en eventuele gebouwen. Je hebt controle over gebruik en ontwikkeling binnen bestemmingsplannen en vergunningsregels. Je kunt verkopen, verhuren of het vastgoed als onderpand gebruiken voor financiering, onder voorbehoud van lokale regelgeving.</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>Eigendom:</strong> Permanente eigendom van grond en gebouwen.</li>
              <li><strong>Kosten:</strong> Geen jaarlijkse grondkosten (canon); alleen jaarlijkse onroerendezaakbelasting.</li>
              <li><strong>Controle:</strong> Brede autonomie binnen bestemmingsplannen; geen beperkingen op verbouwingen of gebruik naast vergunningen.</li>
              <li><strong>Financiering:</strong> Voorkeur van banken; hypotheken zijn makkelijker te krijgen.</li>
            </ul>
          </section>

          <section id="lease" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Erfpacht (Lease Land)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Erfpacht (lease land) in Aruba is overheidsgrond die voor lange termijn wordt verhuurd—meestal 60 jaar, vernieuwbaar. Je bent eigenaar van het gebouw en hebt het recht om de grond te gebruiken. Controle wordt bepaald door het contract: reken op voorwaarden voor toegestaan gebruik, verbeteringen, subverhuur en soms toestemming van de verhuurder voor overdracht of hypotheek op je erfpachtrecht.</p>
            <div className="grid md:grid-cols-2 gap-4 mt-5">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Jaarlijkse erfpachtcanon</h3>
                <p className="mt-2 text-foreground/80 leading-7">Betaald aan de overheid; bedrag hangt af van locatie, grondwaarde en contractvoorwaarden. Kan vast, geïndexeerd of periodiek heronderhandeld zijn.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Beperkingen verkoop/overdracht</h3>
                <p className="mt-2 text-foreground/80 leading-7">Is de erfpacht overdraagbaar? Welke goedkeuringen zijn nodig bij overdracht? Overheids- of verhuurdersgoedkeuring is vaak vereist.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Eigendom van gebouwen</h3>
                <p className="mt-2 text-foreground/80 leading-7">Je bent eigenaar van de gebouwen op de grond; de grond blijft overheidsbezit. Aan het einde van de erfpacht hangt het van het contract af wat er met verbeteringen gebeurt.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Hypotheekopties</h3>
                <p className="mt-2 text-foreground/80 leading-7">Aanbieders vereisen vaak een minimale resterende looptijd die ruim boven de hypotheeklooptijd uitkomt. Sommige contracten vereisen verhuurderstoestemming voor het verstrekken van een hypotheek.</p>
              </div>
            </div>
          </section>

          <section id="verify" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Wat te Controleren in een Erfpachtcontract</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Controleer deze punten schriftelijk voordat je erfpacht koopt:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Is de erfpacht overdraagbaar, en welke goedkeuringen zijn nodig bij overdracht?</li>
              <li>Zijn subverhuur of kortetermijnverhuur toegestaan, en onder welke voorwaarden?</li>
              <li>Heb je verhuurderstoestemming nodig voor verbouwingen of grote verbeteringen?</li>
              <li>Wie keurt bouwplannen goed—de verhuurder of de gemeente—en in welke volgorde?</li>
              <li>Exacte afloopdatum en eventuele verlengings- of extensiebepalingen</li>
              <li>Of verlenging automatisch is of ter beoordeling van de verhuurder</li>
              <li>Grondslag voor eventuele canonherziening bij verlenging (bijv. indexatie of marktherziening)</li>
              <li>Afloopclausule voor gebouwen en verbeteringen: compensatie, verwijdering of teruggave</li>
            </ul>
          </section>

          <section id="financing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Financiering in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Banken accepteren eigendom doorgaans als onderpand onder standaard voorwaarden. Erfpacht kan ook financierbaar zijn, maar aanbieders vereisen vaak een minimale resterende looptijd die ruim boven de hypotheeklooptijd uitkomt. Sommige erfpachtcontracten vereisen verhuurderstoestemming voor het verstrekken van een hypotheek.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Voordat je biedt: vraag lokale banken naar hun bereidheid voor je specifieke titel en de resterende looptijd die zij vereisen; bevestig dat het contract hypotheek op het erfpachtrecht toestaat; controleer of verhuurderstoestemming voor de hypotheek vereist is en of er kosten aan verbonden zijn.</p>
          </section>

          <section id="proscons" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Eigendom vs. Erfpacht: Voor- en Nadelen</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Type vastgoed</th>
                    <th className="text-left p-3 font-semibold">Voordelen</th>
                    <th className="text-left p-3 font-semibold">Nadelen</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3">Eigendom</td>
                    <td className="p-3 text-foreground/80">Volledig eigendom, makkelijker verkoop, vaak betere financiering</td>
                    <td className="p-3 text-foreground/80">Hogere aankoopprijs</td>
                  </tr>
                  <tr>
                    <td className="p-3">Erfpacht</td>
                    <td className="p-3 text-foreground/80">Lagere instapkosten, beschikbaar op toplocaties</td>
                    <td className="p-3 text-foreground/80">Jaarlijkse kosten, beperkingen, strengere bankvoorwaarden</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="checklist" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6) Due Diligence Checklist</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Verzamel het volgende voordat je biedt op erfpacht:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Gecertificeerd kadasteronderzoek van het Arubaanse Grond- en Vastgoedregister (status eigendom of erfpacht, beperkingen, erfdienstbaarheden)</li>
              <li>Volledig contract met alle bijlagen en wijzigingen—vertrouw niet op samenvattingen</li>
              <li>Duidelijke bepalingen voor startdatum, afloopdatum, verlenging, canon, indexatie, overdracht, hypotheektoestemming, wanbetalingsremedies en teruggave</li>
              <li>Recente canonfacturen en betalingsgeschiedenis</li>
              <li>Gemeentelijke bestemmingsplanbevestiging en vergunningsgeschiedenis</li>
              <li>Actueel opmetingsrapport of perceelplan afgestemd op het kadaster</li>
              <li>Schriftelijk juridisch advies van een lokale notaris of advocaat over verkoopbaarheid en hypotheekbaarheid van de titel</li>
              <li>Term sheets van minstens twee lokale aanbieders met financieringsopties en looptijdvereisten</li>
            </ul>
          </section>

          <section id="redflags" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7) Rode Vlaggen om op te Letten</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Korte resterende looptijd ten opzichte van je eigendoms- of leenhorizon</li>
              <li>Vage of discretionaire verlengingsclausules zonder duidelijke timing of formules</li>
              <li>Canon onderworpen aan brede marktherwaardering zonder plafonds of gefaseerde verhogingen</li>
              <li>Contractbepalingen die overdrachten of hypotheken beperken of lastige goedkeuringen vereisen</li>
              <li>Geen duidelijke clausule over wie eigenaar is van verbeteringen bij afloop of hoe compensatie werkt</li>
              <li>Onbetaalde gemeentelijke heffingen, nutsbalansen of andere beslagen</li>
            </ul>
          </section>

          <section id="tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8) Welke Kiezen?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eigendom wordt over het algemeen aanbevolen voor langetermijninvestering, betere verkoopwaarde en volledige controle. Erfpacht is populair vanwege de lagere instapkosten en is een bruikbare optie voor kopers die willen bouwen of kopen op toplocaties tegen een lagere instapprijs. Focus op resterende looptijd, canonlast en duidelijkheid over verlenging voordat je toezegt aan erfpacht.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">9) Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Kunnen buitenlanders eigendom vastgoed kopen in Aruba?', a: 'Ja, buitenlandse kopers kunnen vaak eigendom (freehold) kopen. Controleer parcelspecifieke toelaatbaarheid en beperkingen bij het kadaster en een notaris vóór je toezegt.' },
                { q: 'Financieren banken erfpachtaankopen in Aruba?', a: 'Veel aanbieders overwegen erfpacht als de resterende looptijd ruim boven de looptijd van de lening uitkomt en het contract hypotheek toestaat. Bevestig tijdig bij lokale banken.' },
                { q: 'Hoe wordt de jaarlijkse canon op erfpacht bepaald en aangepast?', a: 'De canon wordt in het contract vastgelegd en kan vast, geïndexeerd of periodiek herzien zijn. Controleer de formule, timing van verhogingen en eventuele plafonds of heronderhandelingsbepalingen.' },
                { q: 'Wat gebeurt er met gebouwen aan het einde van een erfpacht?', a: 'Resultaten zijn contract-specifiek. Contracten kunnen verwijdering vereisen, compensatie bieden of teruggave bevestigen. Lees de verbeteringen- en afloopclausules met juridisch advies goed door.' },
                { q: 'Kan ik kortetermijnverhuur doen op een erfpachtwoning?', a: 'Dat hangt af van gemeentelijke regels en het contract. Controleer lokale vergunningen en de subverhuur- en gebruiksbepalingen in het contract voordat je vakantieverhuur plant.' },
                { q: 'Welke documenten zijn essentieel voor erfpacht due diligence?', a: 'Gecertificeerd kadasteronderzoek, volledig contract met alle bijlagen, recente canonafrekeningen, bestemmingsplan- en vergunningsgegevens, actueel opmetingsrapport, en schriftelijke adviezen van een notaris, aanbieder en fiscaal adviseur.' },
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
                { id: 'freehold', label: 'Eigendom' },
                { id: 'lease', label: 'Erfpacht' },
                { id: 'verify', label: 'Wat te controleren' },
                { id: 'financing', label: 'Financiering' },
                { id: 'proscons', label: 'Voor- en nadelen' },
                { id: 'checklist', label: 'Due diligence' },
                { id: 'redflags', label: 'Rode vlaggen' },
                { id: 'tips', label: 'Welke kiezen' },
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
