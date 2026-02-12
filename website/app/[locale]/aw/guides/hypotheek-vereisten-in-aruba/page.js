import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortgage%20Requirements%20in%20Aruba.png'

export const metadata = {
  title: 'Hypotheek Aruba: Vereisten voor Niet-Inwoners | Checklist & Documenten',
  description: 'Hypotheek Aruba: 40–50% aanbetaling, max 15 jaar, rentes 5–7%. Huis kopen Aruba hypotheek, hypotheek Aruba berekenen, hoe lang duurt hypotheekgoedkeuring. Documenten, Aruba Bank & RBC.',
  keywords: [
    'hypotheek aruba',
    'huis kopen aruba hypotheek',
    'hypotheek aruba berekenen',
    'hypotheek vereisten Aruba',
    'documenten hypotheek Aruba',
    'Aruba Bank hypotheek',
    'hoe lang duurt hypotheekgoedkeuring',
    'niet-ingezetene hypotheek Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/hypotheek-vereisten-in-aruba',
  },
  openGraph: {
    title: 'Hypotheek Aruba: Vereisten voor Niet-Inwoners | Checklist & Documenten',
    description: 'Hypotheek Aruba: documenten, checklist, Aruba Bank & RBC. Huis kopen, hypotheek berekenen, doorlooptijd goedkeuring.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Hypotheek Vereisten Aruba | Checklist' },
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
      { '@type': 'ListItem', position: 3, name: 'Hypotheek Aruba: Vereisten voor Niet-Inwoners', item: `https://onehappyfinance.com/${locale}/aw/guides/hypotheek-vereisten-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hypotheek Aruba: Vereisten voor Niet-Inwoners | Checklist & Documenten',
    image: [FEATURED_IMAGE],
    description: 'Hypotheek Aruba voor niet-ingezetenen: 40–50% aanbetaling, max 15 jaar, rentes 5–7%. Documenten, checklist, Aruba Bank, Banco di Caribe, RBC.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/hypotheek-vereisten-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Wat zijn hypotheekvereisten in Aruba voor niet-ingezetenen?', a: 'Niet-ingezetenen hebben doorgaans 40–50% aanbetaling nodig, max 15 jaar looptijd, geldig paspoort, inkomensbewijs, twee bankreferenties en een taxatierapport. De rentes liggen vaak tussen 5% en 7%.' },
    { q: 'Kunnen buitenlanders een hypotheek aanvragen in Aruba?', a: 'Ja. Aruba Bank, Banco di Caribe en RBC Royal Bank bieden hypotheken voor niet-ingezetenen, meestal met 40–50% aanbetaling en max 15 jaar looptijd.' },
    { q: 'Hoe lang duurt een hypotheekgoedkeuring in Aruba?', a: 'Pre-approval duurt vaak circa 2 weken. Volledige goedkeuring kan 4–5 weken duren voor compliance. Het volledige proces van aanvraag tot financiering kan ongeveer 2 maanden duren.' },
    { q: 'Wat zijn de afsluitkosten bij een Arubaanse hypotheek?', a: 'Reken op circa 1% van het leenbedrag aan bankkosten, plus notariskosten (overdrachtsakte en hypotheekakte). Totale kosten aan de kant van de koper lopen vaak op tot 5–12% van de aankoopprijs.' },
    { q: 'Hoe bereken ik mijn hypotheek in Aruba?', a: 'Gebruik een online hypotheekcalculator. Vul inkomen, rente, looptijd en aanbetaling in om je maximale leenbedrag en maandlasten te schatten.' },
    { q: 'Heb ik een lokale notaris nodig?', a: 'Ja. Alle vastgoedtransacties op Aruba moeten via een lokale notaris worden afgehandeld.' },
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
          <Image src={FEATURED_IMAGE} alt="Hypotheek Vereisten Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Hypotheek Aruba: Vereisten voor Niet-Inwoners</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">40–50% aanbetaling, max 15 jaar looptijd en volledige documentchecklist. Huis kopen in Aruba met hypotheek. Hypotheek Aruba berekenen. Aruba Bank, Banco di Caribe en RBC voor internationale kopers.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="req" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Hypotheek Aruba: Vereisten voor Niet-Inwoners</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Arubaanse banken financieren circa 50–60% van de aankoopprijs voor niet-ingezetenen, met rentes doorgaans tussen 5% en 7%. Banken moeten je identiteit, inkomen en de woning die je koopt bevestigen. Hieronder de belangrijkste vereisten voor niet-ingezetenen die huis kopen in Aruba met hypotheek.</p>
          </section>

          <section id="nonresidents" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Kernvereisten voor Niet-Inwoners</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Vereiste</th>
                    <th className="text-left p-3 font-semibold">Typisch bereik</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-foreground/80">
                  <tr><td className="p-3">Aanbetaling</td><td className="p-3">40% – 50% van de woningwaarde</td></tr>
                  <tr><td className="p-3">Maximale financiering (LTV)</td><td className="p-3">60% – 65% van aankoopprijs of taxatie</td></tr>
                  <tr><td className="p-3">Looptijd</td><td className="p-3">Max 15 jaar (niet-ingezetenen)</td></tr>
                  <tr><td className="p-3">Rente</td><td className="p-3">Circa 5% – 7% (USD)</td></tr>
                  <tr><td className="p-3">Minimumleeftijd</td><td className="p-3">21; lening moet voor pensionering zijn afgelost</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Niet-ingezetenen moeten brand- en overlijdensverzekering aanbieden met de bank als eerste begunstigde. Afsluitkosten omvatten doorgaans circa 1% van het leenbedrag aan bankkosten, plus notariskosten.</p>
          </section>

          <section id="core" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Documentchecklist</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Document</th>
                    <th className="text-left p-3 font-semibold">Doel</th>
                    <th className="text-left p-3 font-semibold">Opmerkingen</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ['Twee geldige ID\'s (Paspoort + Rijbewijs)', 'Bevestigt identiteit', 'Beide minimaal 2 maanden geldig'],
                    ['Werkgeversverklaring', 'Functie, salaris, startdatum', 'Bevestigt dienstverband'],
                    ['Bewijs van woonadres', 'Energienota, bevolkingsregister', 'Bevestigt adres'],
                    ['Loonstroken (2–3 maanden)', 'Inkomensbewijs', 'Of pensioen/inkomensverklaring'],
                    ['Bankafschriften (3 maanden)', 'Toont spaargeld en inkomensstroom', 'Niet-ingezetenen: 3–6 maanden'],
                    ['Twee bankreferenties', 'Financiële betrouwbaarheid', 'Van financiële instellingen'],
                    ['Kredietrapport', 'Financiële verantwoordelijkheid', 'Uit thuisland indien niet-ingezetene'],
                    ['Verklaring van activa/passiva', 'Bron van vermogen', 'Gevraagd door veel banken'],
                    ['Koopovereenkomst of eigendomsbewijs', 'Bevestigt woning', 'Ondertekend door koper en verkoper'],
                    ['Taxatierapport', 'Marktwaarde woning', 'Van Arubaanse taxateur, niet ouder dan 6 maanden'],
                    ['Woningverzekering (brand & overlijden)', 'Vereist voor goedkeuring', 'Bank als eerste begunstigde'],
                    ['Jaarrekeningen (zelfstandigen)', 'Financiën onderneming', 'Laatste 2 jaar, gecontroleerd'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="p-3">{row[0]}</td>
                      <td className="p-3 text-foreground/80">{row[1]}</td>
                      <td className="p-3 text-foreground/80">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="banks" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Hypotheekvereisten per Bank</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aruba Bank</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Aanvraagformulier, kopie ID</li>
                  <li>Loonstroken (3 mnd) + werkgeversverklaring</li>
                  <li>Bankafschriften (6 mnd)</li>
                  <li>Taxatie erkende taxateur</li>
                  <li>Koopovereenkomst</li>
                  <li>Bewijs aanbetaling (40–50% niet-ingezetenen)</li>
                  <li>Zelfstandigen: jaarcijfers (2 jaar)</li>
                  <li>Niet-ingezetenen: twee bankreferenties, buitenlands kredietrapport, bewijs vermogen</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">RBC Royal Bank</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Geldig ID, inkomensbewijs (3 mnd)</li>
                  <li>Belastingaangifte (2 jaar), bankafschriften (3 mnd)</li>
                  <li>Taxatierapport en ondertekend koopcontract</li>
                  <li>Aanbetaling minimaal ~40% niet-ingezetenen</li>
                  <li>Woningverzekering</li>
                  <li>Schuldratio-check: totale schuld ≤ ~40% van inkomen</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="checklist" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Hypotheekchecklist voor Aruba</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Persoonlijke gegevens</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Geldig paspoort</li>
                  <li>Bewijs van adres</li>
                  <li>Kredietrapport (thuisland indien niet-ingezetene)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Inkomensverificatie</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Loonstroken (3 maanden)</li>
                  <li>Werkgeversverklaring / inkomensverklaring</li>
                  <li>Belastingaangifte (laatste 2 jaar)</li>
                  <li>Bankafschriften (3–6 maanden)</li>
                  <li>Jaarrekening (voor ondernemers)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Woningdocumenten</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Ondertekende koopovereenkomst</li>
                  <li>Taxatierapport (lokale taxateur)</li>
                  <li>Bewijs van aanbetaling</li>
                  <li>Offerte woningverzekering</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aanvullend (indien van toepassing)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Huwelijksakte (gezamenlijke aankoop)</li>
                  <li>Verblijfs- of werkvergunning (voor inwoners)</li>
                  <li>Referentiebrief van bank</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="construction" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Extra Vereisten voor Nieuwbouw</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Bij financiering van nieuwbouw op Aruba vragen banken doorgaans extra documenten van het Openbaar Lichaam voor Werken (D.O.W.) en je aannemer:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Goedgekeurde bouwvergunning (blauwe kaart) van D.O.W.</li>
              <li>Goedgekeurde bouwtekeningen van het Openbaar Lichaam voor Werken</li>
              <li>Offerte aannemer met projectdetails</li>
              <li>KvK-inschrijving aannemer</li>
              <li>Taxatierapport voor grond en geplande bouwwaarde</li>
            </ul>
          </section>

          <section id="timelines" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. Hoe Lang Duurt een Hypotheekgoedkeuring?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Hoe lang duurt een goedkeuring hypotheek? Pre-approval: circa 2 weken na indienen documenten. Compliance en definitieve goedkeuring: 4–5 weken. Volledige afronding financiering: ongeveer 2 maanden totaal.</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Pre-approval: circa 2 weken na indienen documenten</li>
              <li>Compliance en definitieve goedkeuring: 4–5 weken</li>
              <li>Volledige afronding financiering: ongeveer 2 maanden totaal</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Bereid alle documenten vooraf voor om vertraging te voorkomen.</p>
          </section>

          <section id="berekenen" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8. Hypotheek Aruba Berekenen</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Om je maximale leenbedrag en maandlasten te schatten, gebruik een online hypotheekcalculator. Vul inkomen, rente, looptijd en aanbetaling in — zo zie je hoe elke factor je leencapaciteit beïnvloedt. Hypotheek Aruba berekenen doe je het best vóór je een bod uitbrengt.</p>
          </section>

          <section id="closing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">9. Afsluitkosten en Belangrijke Overwegingen</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Reken op circa 1% van het leenbedrag aan bankkosten, plus notariskosten (overdrachtsakte en hypotheekakte). Totale kosten aan de kant van de koper lopen vaak op tot 5–12% van de aankoopprijs. De minimumleeftijd om te solliciteren is doorgaans 21, en de lening moet vóór pensionering zijn afgelost.</p>
          </section>

          <section id="mistakes" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">10. Veelgemaakte Fouten om te Vermijden</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Aanvragen zonder geldig taxatierapport</li>
              <li>Belastingaangifte vergeten toe te voegen</li>
              <li>Aannemen dat buitenlands krediet automatisch geldt</li>
              <li>Te laat je financiering checken voordat je een woning kiest</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7"><span className="font-semibold">Pro tip:</span> Vraag pre-approval aan voordat je een bod uitbrengt.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">11. Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Wat zijn hypotheekvereisten in Aruba voor niet-ingezetenen?', a: 'Niet-ingezetenen hebben doorgaans 40–50% aanbetaling nodig, max 15 jaar looptijd, geldig paspoort, inkomensbewijs, twee bankreferenties en een taxatierapport. De rentes liggen vaak tussen 5% en 7%.' },
                { q: 'Kunnen buitenlanders een hypotheek aanvragen in Aruba?', a: 'Ja. Aruba Bank, Banco di Caribe en RBC Royal Bank bieden hypotheken voor niet-ingezetenen, meestal met 40–50% aanbetaling en max 15 jaar looptijd.' },
                { q: 'Hoe lang duurt een hypotheekgoedkeuring in Aruba?', a: 'Pre-approval duurt vaak circa 2 weken. Volledige goedkeuring kan 4–5 weken duren voor compliance. Het volledige proces van aanvraag tot financiering kan ongeveer 2 maanden duren.' },
                { q: 'Wat zijn de afsluitkosten bij een Arubaanse hypotheek?', a: 'Reken op circa 1% van het leenbedrag aan bankkosten, plus notariskosten (overdrachtsakte en hypotheekakte). Totale kosten aan de kant van de koper lopen vaak op tot 5–12% van de aankoopprijs.' },
                { q: 'Hoe bereken ik mijn hypotheek in Aruba?', a: 'Gebruik een online hypotheekcalculator. Vul inkomen, rente, looptijd en aanbetaling in om je maximale leenbedrag en maandlasten te schatten. Zoek op "hypotheek Aruba berekenen" voor betrouwbare tools.' },
                { q: 'Heb ik een lokale notaris nodig?', a: 'Ja. Alle vastgoedtransacties op Aruba moeten via een lokale notaris worden afgehandeld.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.mortgageRequirements} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'req', label: 'Vereisten' },
                { id: 'nonresidents', label: 'Kernvereisten' },
                { id: 'core', label: 'Documenten' },
                { id: 'banks', label: 'Per Bank' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'construction', label: 'Nieuwbouw' },
                { id: 'timelines', label: 'Doorlooptijd goedkeuring' },
                { id: 'berekenen', label: 'Hypotheek berekenen' },
                { id: 'closing', label: 'Afsluitkosten' },
                { id: 'mistakes', label: 'Fouten vermijden' },
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
