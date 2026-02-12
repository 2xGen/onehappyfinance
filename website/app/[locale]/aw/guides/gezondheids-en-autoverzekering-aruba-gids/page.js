import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/all%20about%20insurance%20in%20aruba.png'

export const metadata = {
  title: 'Gezondheids- en Autoverzekering in Aruba – Vereisten, Kosten, Dekking',
  description: 'Ontdek de belangrijkste feiten over gezondheids- en autoverzekering in Aruba: wettelijke vereisten, AZV-dekking, WA-verzekering en praktische tips voor inwoners, expats en bezoekers.',
  keywords: [
    'ziektekostenverzekering Aruba',
    'autoverzekering Aruba',
    'AZV Aruba',
    'reisverzekering Aruba',
    'voertuigverzekering Aruba',
    'expat verzekering Aruba',
    'medische verzekering Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/aw/guides/gezondheids-en-autoverzekering-aruba-gids',
  },
  openGraph: {
    title: 'Gezondheids- en Autoverzekering in Aruba – Vereisten, Kosten, Dekking',
    description: 'Belangrijke feiten over gezondheids- en autoverzekering in Aruba: AZV, WA-verzekering en praktische tips voor inwoners, expats en bezoekers.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Gezondheids- en Autoverzekering in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Gezondheids- en Autoverzekering in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/gezondheids-en-autoverzekering-aruba-gids` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Belangrijkste Feiten over Gezondheids- en Autoverzekering in Aruba',
    image: [FEATURED_IMAGE],
    description: 'Ontdek de belangrijkste feiten over gezondheids- en autoverzekering in Aruba, inclusief wettelijke vereisten, basisdekking en praktische tips voor inwoners, expats en bezoekers.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/nl/aw/guides/gezondheids-en-autoverzekering-aruba-gids' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Is een ziektekostenverzekering verplicht in Aruba?', a: 'Ja. Alle inwoners en werknemers moeten zich inschrijven voor het publieke zorgsysteem (AZV). Bezoekers en expats moeten een particuliere of reisverzekering hebben, omdat buitenlandse polissen vaak niet worden geaccepteerd.' },
    { q: 'Is een autoverzekering verplicht in Aruba?', a: 'Ja. Alle voertuigen moeten wettelijk een WA-verzekering (aansprakelijkheid) hebben. Huurauto\'s hebben vaak basisdekking, maar buitenlandse bestuurders moeten hun polis controleren.' },
    { q: 'Wat dekt AZV in Aruba?', a: 'AZV dekt basis medische zorg, ziekenhuisbezoeken en essentiële medicijnen voor inwoners en werknemers. Het omvat huisartsen- en specialistenzorg.' },
    { q: 'Heb ik een reisverzekering nodig voor Aruba?', a: 'Ja. Bezoekers en expats wordt sterk aangeraden een reisverzekering te hebben voor spoedgevallen, ziekenhuisopname of medische evacuatie, omdat buitenlandse zorgpolissen meestal niet worden geaccepteerd.' },
    { q: 'Wat dekt een WA-autoverzekering in Aruba?', a: 'Een WA-verzekering dekt schade die jij aan anderen veroorzaakt. Het dekt geen schade aan je eigen voertuig. Optionele omniumverzekering beschermt je auto tegen ongelukken, diefstal of natuurrampen.' },
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
          <Image src={FEATURED_IMAGE} alt="Gezondheids- en Autoverzekering in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Gidsen</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Belangrijkste Feiten over Gezondheids- en Autoverzekering in Aruba</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Een praktische gids over gezondheids- en voertuigdekking: AZV-vereisten, WA-verzekering en tips voor inwoners, expats en bezoekers.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="gezondheidsbasis" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Basis Ziektekostenverzekering in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Alle inwoners en werknemers moeten zich inschrijven voor het publieke zorgsysteem, bekend als AZV (Algemene Ziektekosten Verzekering). Het dekt basis medische zorg, ziekenhuisbezoeken en essentiële medicijnen.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Bezoekers en expats moeten een particuliere of reisverzekering hebben voor spoedgevallen, ziekenhuisopname of medische evacuatie. Buitenlandse zorgpolissen worden vaak niet geaccepteerd in Aruba, dus voldoende dekking is essentieel.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruba heeft huisartsen, ziekenhuizen en apotheken (botika&apos;s). Ernstige medische spoedgevallen kunnen een overplaatsing naar Curaçao of de Verenigde Staten voor gespecialiseerde zorg vereisen.</p>
          </section>

          <section id="gezondheidsdekking" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Belangrijke Punten over Gezondheidsdekking</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">De publieke zorgdekking omvat huisartsen- en specialistenzorg. Aanvullende particuliere verzekering kan extra diensten dekken naast het basis AZV-pakket.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Inwoners, werknemers en langetermijn-expats hebben AZV-inschrijving nodig. Bezoekers wordt sterk aangeraden een reisverzekering te hebben voor aankomst.</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Registreer je bij een huisarts voor routinezorg.</li>
              <li>Apotheken (botika&apos;s) leveren de meeste medicijnen; spoedapotheken zijn 24/7 bereikbaar.</li>
              <li>Raadpleeg erkende lokale verzekeraars voor maatwerkdekking.</li>
            </ul>
          </section>

          <section id="autoverzekering" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Vereisten Autoverzekering in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Een WA-verzekering (aansprakelijkheid) is wettelijk verplicht voor alle voertuigen in Aruba. Dit dekt schade die jij aan anderen veroorzaakt, maar niet schade aan je eigen voertuig.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Huurauto&apos;s hebben meestal basis WA-dekking. Als buitenlands bestuurder moet je altijd bij de verhuurder controleren wat er precies gedekt is.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Optionele omniumverzekering beschermt je auto tegen ongelukken, diefstal of natuurrampen zoals stormen of overstromingen.</p>
          </section>

          <section id="rijtips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Praktische Tips voor Bestuurders</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Controleer je dekking:</strong> Zorg dat je verzekering voldoende bescherming biedt voor jou en derden.</li>
              <li><strong>Wegomstandigheden:</strong> De wegen in Aruba zijn over het algemeen in goede staat; houd je aan de snelheidslimieten en let op bromfietsen en scooters.</li>
              <li><strong>Risicovolle activiteiten:</strong> Verzekering is essentieel voor offroad rijden of avonturensporten. Controleer of je polis dit dekt.</li>
            </ul>
          </section>

          <section id="samenvatting" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Samenvatting</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Gezondheids- en autoverzekering in Aruba begrijpen is essentieel voor inwoners, expats en bezoekers. Het publieke zorgsysteem (AZV) biedt kernmedische dekking voor mensen die op het eiland wonen of werken, terwijl particuliere of reisverzekering sterk wordt aanbevolen voor kortdurende verblijven en extra bescherming.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Voor voertuigen is WA-verzekering verplicht, met optionele polissen voor extra bescherming. Raadpleeg altijd erkende lokale verzekeraars voor gedetailleerde dekking op maat van jouw situatie.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Veelgestelde Vragen</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Is een ziektekostenverzekering verplicht in Aruba?', a: 'Ja. Alle inwoners en werknemers moeten zich inschrijven voor het publieke zorgsysteem (AZV). Bezoekers en expats moeten een particuliere of reisverzekering hebben, omdat buitenlandse polissen vaak niet worden geaccepteerd.' },
                { q: 'Is een autoverzekering verplicht in Aruba?', a: 'Ja. Alle voertuigen moeten wettelijk een WA-verzekering hebben. Huurauto\'s hebben vaak basisdekking, maar buitenlandse bestuurders moeten hun polis controleren.' },
                { q: 'Wat dekt AZV in Aruba?', a: 'AZV dekt basis medische zorg, ziekenhuisbezoeken en essentiële medicijnen voor inwoners en werknemers. Het omvat huisartsen- en specialistenzorg.' },
                { q: 'Heb ik een reisverzekering nodig voor Aruba?', a: 'Ja. Bezoekers en expats wordt sterk aangeraden een reisverzekering te hebben voor spoedgevallen, ziekenhuisopname of medische evacuatie, omdat buitenlandse zorgpolissen meestal niet worden geaccepteerd.' },
                { q: 'Wat dekt een WA-autoverzekering in Aruba?', a: 'Een WA-verzekering dekt schade die jij aan anderen veroorzaakt. Het dekt geen schade aan je eigen voertuig. Optionele omniumverzekering beschermt je auto tegen ongelukken, diefstal of natuurrampen.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'nl'} keys={RELATED_KEYS.healthCarInsurance} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">Op deze pagina</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'gezondheidsbasis', label: 'Basis Ziektekostenverzekering' },
                { id: 'gezondheidsdekking', label: 'Belangrijke Punten Gezondheidsdekking' },
                { id: 'autoverzekering', label: 'Vereisten Autoverzekering' },
                { id: 'rijtips', label: 'Tips voor Bestuurders' },
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
