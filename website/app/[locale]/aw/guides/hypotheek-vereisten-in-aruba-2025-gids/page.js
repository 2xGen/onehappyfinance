import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortgage%20Requirements%20in%20Aruba.png'

export const metadata = {
  title: 'Hypotheek Vereisten Aruba (2025) | Volledige Checklist & Benodigde Documenten',
  description: 'Ontdek welke documenten je nodig hebt voor een hypotheek op Aruba. Volledige gids met checklist, vereisten van Aruba Bank & RBC, en tips voor snelle goedkeuring.',
  keywords: [
    'hypotheek vereisten Aruba',
    'documenten hypotheek Aruba',
    'hypotheek aanvragen Aruba',
    'Aruba Bank hypotheek',
    'RBC hypotheek Aruba',
    'hypotheek checklist Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/hypotheek-vereisten-in-aruba-2025-gids',
  },
  openGraph: {
    title: 'Hypotheek Vereisten Aruba (2025) | Volledige Checklist & Benodigde Documenten',
    description: 'Checklist & documenten voor hypotheken op Aruba, inclusief bankvereisten (Aruba Bank & RBC).',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Hypotheek Vereisten Aruba (2025) | Checklist' },
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
      { '@type': 'ListItem', position: 3, name: 'Hypotheek Vereisten in Aruba (2025)', item: `https://onehappyfinance.com/${locale}/aw/guides/hypotheek-vereisten-in-aruba-2025-gids` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hypotheek Vereisten Aruba (2025) | Volledige Checklist & Benodigde Documenten',
    image: [FEATURED_IMAGE],
    description: 'Ontdek welke documenten je nodig hebt voor een hypotheek op Aruba. Gids voor inwoners en niet-ingezetenen, met checklist en bankvereisten.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/hypotheek-vereisten-in-aruba-2025-gids' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Kunnen buitenlanders een hypotheek krijgen op Aruba?', a: 'Ja. Zowel Aruba Bank als RBC Royal Bank bieden hypotheken aan voor niet-ingezetenen, meestal met 35–40% aanbetaling.' },
    { q: 'Moet ik op Aruba wonen om een hypotheek te krijgen?', a: 'Nee. Wel zijn extra documenten nodig zoals een buitenlands kredietrapport en inkomensbewijs.' },
    { q: 'Kan ik mijn buitenlandse bankrekening gebruiken voor betalingen?', a: 'Ja, de meeste banken accepteren internationale overschrijvingen in USD.' },
    { q: 'Hoe lang duurt de goedkeuring?', a: 'Gemiddeld 2–3 weken zodra alle documenten compleet zijn.' },
    { q: 'Heb ik een notaris nodig?', a: 'Ja. Alle vastgoedtransacties op Aruba verlopen via een erkende notaris.' },
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
          <Image src={FEATURED_IMAGE} alt="Hypotheek Vereisten in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Hypotheek Vereisten in Aruba: Welke Documenten Heb Je Nodig? (2025 Gids)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Alles over documenten, bankvereisten en een handige checklist.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="watzijn" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Wat Zijn de Hypotheekvereisten op Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Banken willen zeker weten wie je bent, hoe je gaat terugbetalen en welke woning je koopt. Voor inwoners en niet-ingezetenen verschillen de details iets, maar identiteit, inkomen en woningdocumenten vormen altijd de basis.</p>
          </section>

          <section id="standaard" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Standaard Documenten voor een Hypotheekaanvraag</h2>
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
                    ['Geldig paspoort of ID', 'Identificatie', 'Verplicht voor iedereen'],
                    ['Recente loonstroken (3 maanden)', 'Bewijs van inkomen', 'Zelfstandigen leveren jaarcijfers aan'],
                    ['Werkgeversverklaring', 'Bevestigt dienstverband en salaris', 'Maximaal 30 dagen oud'],
                    ['Bankafschriften (3–6 maanden)', 'Laat inkomensstroom zien', 'Extra belangrijk voor buitenlanders'],
                    ['Kredietrapport', 'Financiële betrouwbaarheid', 'Mag ook uit het thuisland komen'],
                    ['Belastingaangifte (1–2 jaar)', 'Controle inkomensconsistentie', 'Met name voor zelfstandigen'],
                    ['Koopovereenkomst', 'Bevestigt de aankoop', 'Ondertekend door koper en verkoper'],
                    ['Taxatierapport', 'Bepaalt marktwaarde woning', 'Erkende lokale taxateur'],
                    ['Bewijs van aanbetaling', 'Toont eigen inbreng', 'Meestal 25–40%'],
                    ['Offerte/polis woningverzekering', 'Verplicht voor goedkeuring', 'Vaak via de bank te regelen'],
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

          <section id="banken" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Hypotheekvereisten per Bank</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aruba Bank</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Aanvraagformulier, kopie ID</li>
                  <li>Loonstroken (3 mnd) + werkgeversverklaring</li>
                  <li>Bankafschriften (6 mnd)</li>
                  <li>Taxatie erkende taxateur</li>
                  <li>Koopovereenkomst</li>
                  <li>Bewijs van aanbetaling (35–40%)</li>
                  <li>Zelfstandigen: jaarcijfers (2 jaar)</li>
                  <li>Niet-ingezetenen: buitenlands kredietrapport, bankreferentie, bewijs van vermogen</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">RBC Royal Bank</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Geldig ID, inkomensbewijs (3 mnd)</li>
                  <li>Belastingaangifte (2 jaar), bankafschriften (3 mnd)</li>
                  <li>Taxatierapport en koopcontract</li>
                  <li>Aanbetaling minimaal ~35%</li>
                  <li>Woningverzekering</li>
                  <li>Schuldratio-check: totale schuld ≤ ~40% van inkomen</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="checklist" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Hypotheek Checklist voor Aruba</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Persoonlijke Gegevens</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Geldig paspoort</li>
                  <li>Bewijs van adres</li>
                  <li>Kredietrapport (thuisland, indien buitenlander)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Inkomen & Financiën</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Loonstroken (3 maanden)</li>
                  <li>Werkgeversverklaring / inkomensverklaring</li>
                  <li>Belastingaangifte (2 jaar)</li>
                  <li>Bankafschriften (3–6 maanden)</li>
                  <li>Jaarrekening / winst- en verlies (bij zelfstandigen)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Woninginformatie</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Ondertekende koopovereenkomst</li>
                  <li>Taxatierapport (lokale taxateur)</li>
                  <li>Bewijs van aanbetaling</li>
                  <li>Offerte woningverzekering</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aanvullend</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Huwelijksakte (gezamenlijke aankoop)</li>
                  <li>Verblijfs- of werkvergunning (voor inwoners)</li>
                  <li>Referentiebrief van bank</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="duur" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Hoe Lang Duurt het Hypotheekproces?</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Voorlopige goedkeuring: 3–5 werkdagen</li>
              <li>Definitieve goedkeuring: 2–3 weken</li>
              <li>Afsluiten bij notaris: 4–6 weken na goedkeuring</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Tip: de snelste goedkeuringen komen van complete dossiers.</p>
          </section>

          <section id="voorwaarden" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Aanbetaling en Looptijd</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Inwoners: 20–25% aanbetaling</li>
              <li>Niet-ingezetenen: 35–40% aanbetaling</li>
              <li>Rentepercentages: ~5%–7% (USD)</li>
              <li>Looptijd: tot 30 jaar (inwoners) / 15–20 jaar (niet-ingezetenen)</li>
            </ul>
          </section>

          <section id="fouten" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. Veelgemaakte Fouten om te Vermijden</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Geen actueel taxatierapport aanleveren</li>
              <li>Belastingaangifte vergeten toe te voegen</li>
              <li>Aannemen dat buitenlands krediet automatisch geldt</li>
              <li>Te laat je financiering checken</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7"><span className="font-semibold">Pro tip:</span> Vraag pre-approval aan voordat je een bod uitbrengt.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8. Veelgestelde Vragen (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Kunnen buitenlanders een hypotheek krijgen op Aruba?', a: 'Ja. Banken zoals Aruba Bank en RBC bieden hypotheken aan voor niet-ingezetenen, met aanbetaling vanaf ~35%.' },
                { q: 'Moet ik op Aruba wonen voor een hypotheek?', a: 'Nee. Wel zijn extra documenten nodig zoals een buitenlands kredietrapport en inkomensbewijs.' },
                { q: 'Kan ik een buitenlandse rekening gebruiken?', a: 'Ja, internationale USD-overschrijvingen worden doorgaans geaccepteerd.' },
                { q: 'Hoe lang duurt goedkeuring?', a: 'Gemiddeld 2–3 weken zodra alle documenten compleet zijn.' },
                { q: 'Heb ik een notaris nodig?', a: 'Ja, alle overdrachten gaan via een erkende notaris.' },
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
                { id: 'watzijn', label: 'Vereisten' },
                { id: 'standaard', label: 'Standaard Documenten' },
                { id: 'banken', label: 'Per Bank' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'duur', label: 'Doorlooptijd' },
                { id: 'voorwaarden', label: 'Aanbetaling & Looptijd' },
                { id: 'fouten', label: 'Fouten' },
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
