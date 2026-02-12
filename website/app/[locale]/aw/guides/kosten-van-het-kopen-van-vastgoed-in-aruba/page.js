import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import { getAlternateLanguages } from '@/i18n/config'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/costs%20of%20buyin%20gproperty%20in%20aruba.png'
const PATH = '/aw/guides/kosten-van-het-kopen-van-vastgoed-in-aruba'

export async function generateMetadata({ params }) {
  const resolved = await params
  const locale = resolved?.locale || 'nl'
  const canonical = `https://onehappyfinance.com/${locale}${PATH}`
  return {
    title: 'Kosten van het kopen van vastgoed in Aruba (Belastingen, Notaris & Kosten)',
    description: 'Volledig overzicht van kosten bij het kopen van vastgoed in Aruba: sluitingskosten 5–8%, overdrachtsbelasting, notariskosten, registratie en jaarlijkse lasten.',
    keywords: [
      'kosten kopen vastgoed Aruba',
      'sluitingskosten Aruba',
      'overdrachtsbelasting Aruba',
      'notariskosten Aruba',
      'aankoopkosten vastgoed Aruba',
      'grondbelasting Aruba',
    ],
    alternates: {
      canonical,
      languages: getAlternateLanguages(PATH),
    },
    openGraph: {
      title: 'Kosten van het kopen van vastgoed in Aruba (Belastingen, Notaris & Kosten)',
      description: 'Sluitingskosten, overdrachtsbelasting, notariskosten en jaarlijkse lasten bij het kopen van vastgoed in Aruba.',
      type: 'article',
      url: canonical,
      images: [{ url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Kosten van het kopen van vastgoed in Aruba' }],
    },
  }
}

function BreadcrumbSchema({ locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://onehappyfinance.com/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Gidsen', item: `https://onehappyfinance.com/${locale}/aw/guides` },
      { '@type': 'ListItem', position: 3, name: 'Kosten van het kopen van vastgoed in Aruba', item: `https://onehappyfinance.com/${locale}${PATH}` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema({ locale }) {
  const pageUrl = `https://onehappyfinance.com/${locale}${PATH}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kosten van het kopen van vastgoed in Aruba (Belastingen, Notaris & Kosten)',
    image: [FEATURED_IMAGE],
    description: 'Volledig overzicht van kosten bij het kopen van vastgoed in Aruba: sluitingskosten 5–8%, overdrachtsbelasting, notariskosten en jaarlijkse lasten.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const FAQ_ITEMS = [
  { q: 'Hoe hoog zijn de sluitingskosten bij het kopen van vastgoed in Aruba?', a: 'De totale sluitingskosten liggen doorgaans tussen 5% en 8% van de aankoopprijs, inclusief overdrachtsbelasting, notariskosten en registratie. Bij financiering of complexe structuren kunnen de kosten iets hoger uitvallen.' },
  { q: 'Wat is de overdrachtsbelasting in Aruba?', a: 'De overdrachtsbelasting bedraagt 3% voor vastgoed onder AWG 250.000 en 6% voor vastgoed daarboven. De belasting wordt berekend over de aankoopprijs in de overdrachtsakte.' },
  { q: 'Wie betaalt de notariskosten in Aruba?', a: 'De notariskosten worden doorgaans door de koper betaald tenzij anders overeengekomen. Ze liggen meestal tussen circa 0,5% en 3% van de aankoopprijs voor de overdrachtsakte, plus extra kosten bij inschrijving van een hypotheek.' },
  { q: 'Betalen buitenlandse kopers meer bij het kopen van vastgoed in Aruba?', a: 'Nee. Inwoners en niet-ingezetenen volgen hetzelfde juridische proces en betalen dezelfde overdrachtsbelasting en notariskosten. Er zijn geen extra aankoopbelastingen voor buitenlandse kopers.' },
  { q: 'Hoe lang duurt het sluitingsproces in Aruba?', a: 'Van getekende koopovereenkomst tot definitieve overdracht duurt het proces doorgaans ongeveer 8–12 weken, afhankelijk van hypotheekgoedkeuring, compliancecontroles en complexiteit van de transactie.' },
]

function FaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const TOC_ITEMS = [
  { id: 'closing-costs', label: 'Sluitingskosten overzicht' },
  { id: 'transfer-tax', label: 'Overdrachtsbelasting' },
  { id: 'notary-fees', label: 'Notariskosten' },
  { id: 'registration', label: 'Registratiekosten' },
  { id: 'deposit', label: 'Aanbetaling' },
  { id: 'agent-commission', label: 'Makelaarsprovisie' },
  { id: 'example', label: 'Kostenvoorbeeld' },
  { id: 'ongoing', label: 'Doorlopende kosten' },
  { id: 'property-tax', label: 'Grondbelasting' },
  { id: 'lease-land', label: 'Erfpachtcanon' },
  { id: 'mortgage-costs', label: 'Hypotheekkosten' },
  { id: 'insurance', label: 'Woonverzekering' },
  { id: 'maintenance', label: 'Onderhoud' },
  { id: 'hoa', label: 'VvE-kosten' },
  { id: 'timeline', label: 'Sluitingstermijn' },
  { id: 'foreign-buyers', label: 'Buitenlandse kopers' },
  { id: 'final', label: 'Slotgedachten' },
  { id: 'faq', label: 'FAQ' },
]

export default async function Page({ params }) {
  const resolved = await params
  const locale = resolved?.locale || 'nl'

  return (
    <article className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
      <ArticleSchema locale={locale} />
      <FaqSchema />
      <BreadcrumbSchema locale={locale} />

      <section className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-lg bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="relative aspect-[16/9] w-full">
          <Image src={FEATURED_IMAGE} alt="Kosten van het kopen van vastgoed in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Kosten van het kopen van vastgoed in Aruba (Belastingen, Notaris & Kosten)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">
            Als u van plan bent vastgoed in Aruba te kopen, is inzicht in de volledige koststructuur essentieel. Deze gids legt sluitingskosten, overdrachtsbelasting, notariskosten en jaarlijkse lasten uit.
          </p>
          <Breadcrumbs />
        </div>
      </section>

      <section className="mt-12 rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
        <p className="text-foreground/80 leading-7 md:leading-8">
          Als u van plan bent vastgoed in Aruba te kopen, is inzicht in de volledige koststructuur essentieel vóór het doen van een bod. Naast de aankoopprijs moeten kopers rekening houden met overdrachtsbelasting, notariskosten, registratiekosten en doorlopende jaarlijkse lasten.
        </p>
        <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
          Deze gids legt alle kosten uit die gepaard gaan met het kopen van vastgoed in Aruba — inclusief sluitingskosten, belastingen, hypotheekgerelateerde kosten en jaarlijkse eigendomslasten.
        </p>
      </section>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="closing-costs" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Hoe hoog zijn de sluitingskosten in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In de meeste gevallen liggen de totale sluitingskosten tussen <strong>5% en 8%</strong> van de aankoopprijs. Bij transacties met financiering of complexe structuren kunnen de kosten iets hoger uitvallen.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Deze kosten worden doorgaans door de koper betaald tenzij anders overeengekomen.
            </p>
          </section>

          <section id="transfer-tax" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Overdrachtsbelasting</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Overdrachtsbelasting is een eenmalige overheidsbelasting die wordt betaald bij de overdracht van het eigendom.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8 font-semibold">Huidige tarieven:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>3%</strong> voor vastgoed gewaardeerd onder AWG 250.000</li>
              <li><strong>6%</strong> voor vastgoed gewaardeerd boven AWG 250.000</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Deze belasting wordt berekend op basis van de aankoopprijs in de overdrachtsakte. Overdrachtsbelasting is doorgaans het grootste onderdeel van de sluitingskosten.
            </p>
          </section>

          <section id="notary-fees" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Notariskosten</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In Aruba kan alleen een beëdigd notaris het eigendom van vastgoed juridisch overdragen. Notariële betrokkenheid is verplicht.
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Kosten overdrachtsakte</h3>
                <p className="mt-2 text-foreground/80 leading-7">Doorgaans tussen 0,5% en 3% van de aankoopprijs, afhankelijk van de complexiteit.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Kosten hypotheekakte (bij financiering)</h3>
                <p className="mt-2 text-foreground/80 leading-7">Bij inschrijving van een hypotheek kan nog eens 0,5% tot 2% van toepassing zijn.</p>
              </div>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Notariskosten omvatten vaak:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Opstellen van de overdrachtsakte</li>
              <li>Registratie van de akte</li>
              <li>Due diligence-controles</li>
              <li>Beheer van het escrow-rekening</li>
              <li>Administratieve en registratiekosten</li>
            </ul>
          </section>

          <section id="registration" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Registratie- en administratiekosten</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Registratiekosten bij het kadaster zijn doorgaans in de notarisfactuur inbegrepen maar maken deel uit van uw totale sluitingskosten.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De notaris verifieert:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Juridisch eigendom</li>
              <li>Bestaande hypotheken of schulden</li>
              <li>Onbetaalde onroerendezaakbelasting</li>
              <li>Compliancedocumentatie (KYC)</li>
            </ul>
          </section>

          <section id="deposit" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Aanbetaling</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Na ondertekening van de koopovereenkomst moeten kopers doorgaans <strong>10% van de aankoopprijs</strong> storten op de escrow-rekening van de notaris binnen circa 10 werkdagen.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Deze aanbetaling zekert de transactie en wordt bij de definitieve overdracht verrekend met de aankoopprijs.
            </p>
          </section>

          <section id="agent-commission" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Makelaarsprovisie</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Makelaarsprovisies in Aruba bedragen doorgaans <strong>2% tot 3%</strong> van de aankoopprijs.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In de meeste transacties betaalt de verkoper de provisie — niet de koper.
            </p>
          </section>

          <section id="example" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Voorbeeld totale aankoopkosten</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Voor een object ter waarde van AWG 500.000:</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Overdrachtsbelasting (6%): AWG 30.000</li>
              <li>Notaris &amp; registratie (circa 1,5%–3%): AWG 7.500–15.000</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              <strong>Geschatte totale sluitingskosten:</strong> Ongeveer AWG 37.500–45.000. Dat komt neer op circa 7%–9% van de aankoopprijs.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              De werkelijke bedragen hangen af van de transactiedetails en de financieringsstructuur.
            </p>
          </section>

          <section id="ongoing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Doorlopende kosten na aankoop</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Het bezit van vastgoed in Aruba brengt ook terugkerende jaarlijkse lasten met zich mee.
            </p>
          </section>

          <section id="property-tax" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Jaarlijkse grondbelasting</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba heft jaarlijks grondbelasting op basis van de door de overheid getaxeerde waarde van het vastgoed.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De tarieven variëren doorgaans van:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>0% voor lager gewaardeerd vastgoed</li>
              <li>Tot circa 0,6% voor hoger gewaardeerde objecten</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Veel woningen in het middensegment vallen in de praktijk rond de 0,2%–0,4%, afhankelijk van de taxatie.
            </p>
          </section>

          <section id="lease-land" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Erfpachtcanon (indien van toepassing)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Als het vastgoed op erfpachtgrond staat:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>De grond blijft eigendom van de overheid.</li>
              <li>Er is een jaarlijkse canon (erfpacht) verschuldigd.</li>
              <li>Erfpacht loopt doorgaans 60 jaar en is verlengbaar.</li>
              <li>Bij verlenging kunnen aangepaste tarieven gelden.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eigendomsvastgoed heeft deze last niet.</p>
          </section>

          <section id="mortgage-costs" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Hypotheekkosten (bij financiering)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Bij financiering van het vastgoed:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Lokale banken vragen voor niet-ingezetenen vaak een hogere eigen inbreng.</li>
              <li>Hypotheekrentes liggen doorgaans tussen 5% en 7%, onder voorbehoud van wijzigingen.</li>
              <li>Banken kunnen circa 1% hypotheekkosten in rekening brengen.</li>
              <li>Maandlasten bestaan uit aflossing en rente.</li>
            </ul>
          </section>

          <section id="insurance" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Woonverzekering</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Een woonverzekering wordt sterk aanbevolen.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Dekking omvat doorgaans:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Brand</li>
              <li>Diefstal</li>
              <li>Natuurrampen</li>
              <li>Aansprakelijkheid</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Premies variëren naar waarde, locatie en dekking.</p>
          </section>

          <section id="maintenance" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Onderhoudskosten</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Het klimaat op Aruba vraagt om regelmatig onderhoud.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Factoren:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Zoutlucht aan de kust</li>
              <li>Sterke zon en hitte</li>
              <li>Slijtage airconditioning</li>
              <li>Spanningsschommelingen</li>
              <li>Het hele jaar door groei van tuin</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Airco&apos;s en apparaten kunnen korter meegaan dan in koelere streken. Reken op doorlopend onderhoud.
            </p>
          </section>

          <section id="hoa" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. VvE- of verenigingskosten</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Bij aankoop van een appartement of vastgoed in een beveiligd complex zijn maand- of jaarlijkse VvE-kosten van toepassing.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Deze kunnen onder meer dekken:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Onderhoud zwembad</li>
              <li>Tuinen</li>
              <li>Beveiliging</li>
              <li>Exterieurverzekering</li>
              <li>Afvalophaling</li>
              <li>Gemeenschappelijke voorzieningen</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">VvE-kosten verschillen per complex en voorzieningen.</p>
          </section>

          <section id="timeline" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Hoe lang duurt het sluitingsproces?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Van getekende koopovereenkomst tot definitieve overdracht: <strong>ongeveer 8–12 weken</strong>.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De termijn kan variëren door:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Hypotheekgoedkeuring</li>
              <li>Compliancecontroles</li>
              <li>Vastgoedtype</li>
              <li>Complexiteit van de transactie</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              De notaris voert due diligence uit via het kadaster en de openbare registers vóór de definitieve overdracht.
            </p>
          </section>

          <section id="foreign-buyers" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Betalen buitenlandse kopers meer?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Nee.</strong></p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Inwoners en niet-ingezetenen volgen hetzelfde juridische proces en betalen dezelfde overdrachtsbelasting en notariskosten. Er zijn geen extra aankoopbelastingen of beperkingen voor buitenlandse kopers in Aruba.
            </p>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Slotgedachten</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Bij het kopen van vastgoed in Aruba is inzicht in zowel de eenmalige aankoopkosten als de doorlopende eigendomslasten belangrijk voor een goede financiële planning.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Reken voor de meeste kopers op 5% tot 8% sluitingskosten, plus jaarlijkse grondbelasting, onderhoud en eventuele hypotheek- of VvE-kosten.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Goede voorbereiding zorgt voor een soepele en transparante transactie op de stabiele vastgoedmarkt van Aruba.
            </p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde vragen</h2>
            <div className="mt-6 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.costs} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {TOC_ITEMS.map(({ id, label }) => (
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
