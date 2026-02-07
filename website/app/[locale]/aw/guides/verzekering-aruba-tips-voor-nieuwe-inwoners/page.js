import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20Insurance%20Works%20in%20Aruba.png'

export const metadata = {
  title: 'Verzekering Aruba Gids – Tips voor Nieuwe Inwoners',
  description: 'Leer hoe verzekering werkt in Aruba als nieuwe inwoner: basisdekking, vereiste documenten en praktische tips voor gezondheid, auto en woningverzekering.',
  keywords: [
    'verzekering Aruba nieuwe inwoners',
    'AZV Aruba',
    'autoverzekering Aruba',
    'woningverzekering Aruba',
    'expat verzekering Aruba',
    'ziektekostenverzekering Aruba',
    'aansprakelijkheidsverzekering Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/verzekering-aruba-tips-voor-nieuwe-inwoners',
  },
  openGraph: {
    title: 'Verzekering Aruba Gids – Tips voor Nieuwe Inwoners',
    description: 'Leer hoe verzekering werkt in Aruba als nieuwe inwoner: basisdekking, vereiste documenten en praktische tips voor gezondheid, auto en woningverzekering.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Zo werkt verzekering in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Zo werkt verzekering in Aruba: Tips voor nieuwe inwoners', item: `https://onehappyfinance.com/${locale}/aw/guides/verzekering-aruba-tips-voor-nieuwe-inwoners` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Zo werkt verzekering in Aruba: Tips voor nieuwe inwoners',
    image: [FEATURED_IMAGE],
    description: 'Leer hoe verzekering werkt in Aruba als nieuwe inwoner: basisdekking, vereiste documenten en praktische tips voor gezondheid, auto en woningverzekering.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/verzekering-aruba-tips-voor-nieuwe-inwoners' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Moet ik me als nieuwe inwoner inschrijven voor AZV in Aruba?', a: 'Ja. Iedereen die in Aruba woont en werkt, moet zich registreren voor de Algemene Ziektekosten Verzekering (AZV), het overheidsgezondheidsplan. Inschrijving gebeurt zodra je in het bevolkingsregister (Censo) staat.' },
    { q: 'Is een autoverzekering verplicht in Aruba?', a: 'Ja. Een WA-verzekering is wettelijk verplicht voor alle voertuigen, inclusief huurauto\'s. Optionele omniumverzekering beschermt je eigen voertuig tegen ongelukken, diefstal of natuurrampen.' },
    { q: 'Welke documenten heb ik nodig voor verzekering in Aruba?', a: 'Voor de ziektekostenverzekering: registreer je bij AZV zodra je in het Censo staat. Voor voertuigen: houd bewijs van dekking altijd in je auto. Bewaar gegevens over polissen, dekkingslimieten en contactpersonen van verzekeraars.' },
    { q: 'Wat dekt een woningverzekering in Aruba?', a: 'Een woningverzekering beschermt huis en bezittingen tegen brand, diefstal en natuurrampen. Een aansprakelijkheidsverzekering dekt per ongeluk veroorzaakte schade aan derden; opzettelijke schade en contractuele aansprakelijkheid vallen meestal buiten de dekking.' },
    { q: 'Zouden nieuwe inwoners aanvullende particuliere verzekering moeten nemen?', a: 'Ja. Overweeg aanvullende particuliere verzekering voor extra bescherming, zoals medische evacuatie of uitgebreide zorg. Bezoekers en expats hebben mogelijk ook particuliere of reisverzekering nodig naast AZV.' },
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
          <Image src={FEATURED_IMAGE} alt="Zo werkt verzekering in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Zo werkt verzekering in Aruba: Tips voor nieuwe inwoners</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Een praktische gids over gezondheids-, auto- en woningverzekering voor nieuwe inwoners—verplichte dekking, documenten en inschrijvingstips.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="aan-de-slag" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Aan de slag met verzekering in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Als nieuwe inwoner op Aruba is het belangrijk om de verplichte en optionele verzekeringstypen op het eiland te begrijpen. Belangrijke gebieden zijn:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Ziektekostenverzekering:</strong> Verplicht voor inwoners en werknemers.</li>
              <li><strong>Autoverzekering:</strong> Verplicht voor alle bestuurders.</li>
              <li><strong>Woning- en aansprakelijkheidsverzekering:</strong> Beschermt je huis en dekt per ongeluk veroorzaakte schade aan derden.</li>
              <li><strong>Optionele particuliere of reisverzekering:</strong> Extra bescherming zoals medische evacuatie of uitgebreide zorg.</li>
            </ul>
          </section>

          <section id="ziektekostenverzekering" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Ziektekostenverzekering voor inwoners</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Iedereen die in Aruba woont en werkt, moet zich registreren voor de <strong>Algemene Ziektekosten Verzekering (AZV)</strong>, het overheidsgezondheidsplan.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">AZV dekt huisartsen, ziekenhuizen, essentiële medicijnen en specialistenzorg. Registreer je bij een huisarts voor routinezorg en spoedgevallen.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Bezoekers en expats doen er goed aan particuliere of reisverzekering te overwegen voor aanvullende dekking naast AZV.</p>
          </section>

          <section id="autoverzekering" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Auto- en voertuigverzekering</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>WA-verzekering</strong> is wettelijk verplicht voor alle voertuigen, inclusief huurauto&apos;s. Het dekt schade die jij aan anderen veroorzaakt, maar niet schade aan je eigen voertuig.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Optionele omniumverzekering</strong> beschermt je auto tegen ongelukken, diefstal of natuurrampen zoals stormen of overstromingen.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Praktische tip:</strong> Bevestig de dekking bij je verzekeraar, vooral als buitenlands bestuurder. Houd altijd bewijs van verzekering in je voertuig.</p>
          </section>

          <section id="woning-aansprakelijkheid" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Woning- en aansprakelijkheidsverzekering</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Woningverzekering</strong> beschermt je huis en bezittingen tegen brand, diefstal en natuurrampen. Het is vooral belangrijk voor huiseigenaren op het eiland.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Aansprakelijkheidsverzekering</strong> dekt per ongeluk veroorzaakte schade aan derden. Opzettelijke schade en contractuele aansprakelijkheid vallen meestal buiten standaardpolissen.</p>
          </section>

          <section id="documenten" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Documenten en inschrijvingstips</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Ziektekostenverzekering:</strong> Registreer je bij AZV zodra je in het bevolkingsregister (Censo) staat.</li>
              <li><strong>Voertuigverzekering:</strong> Houd altijd bewijs van dekking in je auto.</li>
              <li><strong>Documentatie:</strong> Bewaar gegevens over polissen, dekkingslimieten en contactpersonen van verzekeraars voor eenvoudig naslagwerk.</li>
            </ul>
          </section>

          <section id="praktische-tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Praktische tips voor nieuwe inwoners</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Controleer de dekkingsniveaus:</strong> Zorg dat je voldoende beschermd bent voor gezondheid, voertuig en woning.</li>
              <li><strong>Overweeg aanvullende verzekering:</strong> Particuliere dekking voor medische evacuatie of uitgebreide zorg biedt extra zekerheid.</li>
              <li><strong>Blijf op de hoogte:</strong> Lokale wetten en vereisten kunnen veranderen; up-to-date blijven helpt boetes of gaten in je dekking te voorkomen.</li>
              <li><strong>Raadpleeg erkende verzekeraars:</strong> Werk samen met lokale verzekeraars voor advies op maat van jouw situatie.</li>
            </ul>
          </section>

          <section id="samenvatting" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Samenvatting</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Begrijpen hoe verzekering werkt in Aruba is essentieel voor nieuwe inwoners. Ziektekostenverzekering via AZV is verplicht voor iedereen die op het eiland woont of werkt, autoverzekering met WA-dekking is wettelijk verplicht, en woning- en aansprakelijkheidsverzekering beschermen je bezittingen en anderen.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Blijf op de hoogte van documenten, houd bewijs van dekking bij de hand en raadpleeg erkende lokale verzekeraars voor advies op maat. Zo voorkom je gaten in je dekking en ben je voldoende beschermd.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde Vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Moet ik me als nieuwe inwoner inschrijven voor AZV in Aruba?', a: 'Ja. Iedereen die in Aruba woont en werkt, moet zich registreren voor de Algemene Ziektekosten Verzekering (AZV), het overheidsgezondheidsplan. Inschrijving gebeurt zodra je in het bevolkingsregister (Censo) staat.' },
                { q: 'Is een autoverzekering verplicht in Aruba?', a: 'Ja. Een WA-verzekering is wettelijk verplicht voor alle voertuigen, inclusief huurauto\'s. Optionele omniumverzekering beschermt je eigen voertuig tegen ongelukken, diefstal of natuurrampen.' },
                { q: 'Welke documenten heb ik nodig voor verzekering in Aruba?', a: 'Voor de ziektekostenverzekering: registreer je bij AZV zodra je in het Censo staat. Voor voertuigen: houd bewijs van dekking altijd in je auto. Bewaar gegevens over polissen, dekkingslimieten en contactpersonen van verzekeraars.' },
                { q: 'Wat dekt een woningverzekering in Aruba?', a: 'Een woningverzekering beschermt huis en bezittingen tegen brand, diefstal en natuurrampen. Een aansprakelijkheidsverzekering dekt per ongeluk veroorzaakte schade aan derden; opzettelijke schade en contractuele aansprakelijkheid vallen meestal buiten de dekking.' },
                { q: 'Zouden nieuwe inwoners aanvullende particuliere verzekering moeten nemen?', a: 'Ja. Overweeg aanvullende particuliere verzekering voor extra bescherming, zoals medische evacuatie of uitgebreide zorg. Bezoekers en expats hebben mogelijk ook particuliere of reisverzekering nodig naast AZV.' },
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
                { id: 'aan-de-slag', label: 'Aan de slag' },
                { id: 'ziektekostenverzekering', label: 'Ziektekostenverzekering' },
                { id: 'autoverzekering', label: 'Auto- en voertuigverzekering' },
                { id: 'woning-aansprakelijkheid', label: 'Woning en aansprakelijkheid' },
                { id: 'documenten', label: 'Documenten' },
                { id: 'praktische-tips', label: 'Praktische tips' },
                { id: 'samenvatting', label: 'Samenvatting' },
                { id: 'faq', label: 'Veelgestelde Vragen' },
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
