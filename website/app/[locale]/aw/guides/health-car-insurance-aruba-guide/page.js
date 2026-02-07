import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/all%20about%20insurance%20in%20aruba.png'

export const metadata = {
  title: 'Health & Car Insurance in Aruba – Requirements, Costs, Coverage',
  description: 'Discover key facts about health and car insurance in Aruba, including legal requirements, AZV coverage, third-party liability, and practical tips for residents, expats, and visitors.',
  keywords: [
    'health insurance Aruba',
    'car insurance Aruba',
    'AZV Aruba',
    'travel insurance Aruba',
    'vehicle insurance Aruba',
    'expat insurance Aruba',
    'medical insurance Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/health-car-insurance-aruba-guide',
  },
  openGraph: {
    title: 'Health & Car Insurance in Aruba – Requirements, Costs, Coverage',
    description: 'Key facts about health and car insurance in Aruba: AZV, third-party liability, and practical tips for residents, expats, and visitors.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Health and Car Insurance in Aruba' },
    ],
  },
}

function BreadcrumbSchema({ locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://onehappyfinance.com/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `https://onehappyfinance.com/${locale}/aw/guides` },
      { '@type': 'ListItem', position: 3, name: 'Health & Car Insurance in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/health-car-insurance-aruba-guide` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top Things to Know About Health and Car Insurance in Aruba',
    image: [FEATURED_IMAGE],
    description: 'Discover key facts about health and car insurance in Aruba, including legal requirements, coverage basics, and practical tips for residents, expats, and visitors.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/health-car-insurance-aruba-guide' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Is health insurance mandatory in Aruba?', a: 'Yes. All residents and employees must enroll in the public health system (AZV). Visitors and expats should have private or travel insurance, as foreign plans are often not accepted.' },
    { q: 'Is car insurance mandatory in Aruba?', a: 'Yes. All vehicles must have third-party liability insurance by law. Rental cars typically include basic liability coverage, but foreign drivers should verify their policy.' },
    { q: 'What does AZV cover in Aruba?', a: 'AZV covers basic medical care, hospital visits, and essential medications for residents and employees. It includes general and specialist care.' },
    { q: 'Do I need travel insurance for Aruba?', a: 'Yes. Visitors and expats are strongly recommended to have travel insurance to cover emergencies, hospitalization, or medical evacuation, as foreign health plans are typically not accepted.' },
    { q: 'What does third-party car insurance cover in Aruba?', a: 'Third-party liability covers damages you cause to others. It does not cover damage to your own vehicle. Optional comprehensive coverage can protect your car against accidents, theft, or natural events.' },
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
      <BreadcrumbSchema locale={params?.locale || 'en'} />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-lg bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="relative aspect-[16/9] w-full">
          <Image src={FEATURED_IMAGE} alt="Health and Car Insurance in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Top Things to Know About Health and Car Insurance in Aruba</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">A practical guide to health and vehicle coverage: AZV requirements, third-party liability, and tips for residents, expats, and visitors.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="health-basics" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Health Insurance Basics in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">All residents and employees must enroll in the public health system, known as AZV (Algemene Ziektekosten Verzekering). It covers basic medical care, hospital visits, and essential medications.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Visitors and expats should have private or travel insurance for emergencies, hospitalization, or medical evacuation. Foreign health plans are often not accepted in Aruba, so adequate coverage is essential.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruba has general practitioners, hospitals, and pharmacies (botikas). Serious medical emergencies may require transfer to Curaçao or the United States for specialized care.</p>
          </section>

          <section id="health-coverage" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Key Points About Health Coverage</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Public health coverage includes general and specialist care. Additional private insurance can cover extra services beyond the basic AZV package.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Residents, employees, and long-term expats need AZV enrollment. Visitors are strongly recommended to have travel insurance before arrival.</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Register with a general practitioner (GP) for routine care.</li>
              <li>Pharmacies (botikas) provide most medications; emergency pharmacies operate 24/7.</li>
              <li>For tailored coverage, consult licensed local insurance providers.</li>
            </ul>
          </section>

          <section id="car-insurance" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Car Insurance Requirements in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Third-party liability insurance is mandatory by law for all vehicles in Aruba. This covers damages you cause to others but does not cover damage to your own vehicle.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Rental cars typically include basic liability coverage. If you are a foreign driver, always check with the rental provider to confirm the extent of coverage.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Optional comprehensive coverage can protect your car against accidents, theft, or natural events such as storms or flooding.</p>
          </section>

          <section id="driving-tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Practical Tips for Drivers</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Verify coverage:</strong> Ensure your insurance includes sufficient protection for yourself and third parties.</li>
              <li><strong>Road conditions:</strong> Aruba&apos;s roads are generally in good condition; observe speed limits and watch for motorcycles and scooters.</li>
              <li><strong>High-risk activities:</strong> Insurance is essential for off-road driving or adventure sports. Check whether your policy covers these activities.</li>
            </ul>
          </section>

          <section id="summary" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Summary</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Understanding health and car insurance in Aruba is essential for residents, expats, and visitors. The public health system (AZV) provides core medical coverage for those who live or work on the island, while private or travel insurance is strongly recommended for short-term stays and extra protection.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">For vehicles, third-party liability is mandatory, with optional policies available for additional protection. Always consult licensed local providers for detailed coverage options tailored to your situation.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Is health insurance mandatory in Aruba?', a: 'Yes. All residents and employees must enroll in the public health system (AZV). Visitors and expats should have private or travel insurance, as foreign plans are often not accepted.' },
                { q: 'Is car insurance mandatory in Aruba?', a: 'Yes. All vehicles must have third-party liability insurance by law. Rental cars typically include basic liability coverage, but foreign drivers should verify their policy.' },
                { q: 'What does AZV cover in Aruba?', a: 'AZV covers basic medical care, hospital visits, and essential medications for residents and employees. It includes general and specialist care.' },
                { q: 'Do I need travel insurance for Aruba?', a: 'Yes. Visitors and expats are strongly recommended to have travel insurance to cover emergencies, hospitalization, or medical evacuation, as foreign health plans are typically not accepted.' },
                { q: 'What does third-party car insurance cover in Aruba?', a: 'Third-party liability covers damages you cause to others. It does not cover damage to your own vehicle. Optional comprehensive coverage can protect your car against accidents, theft, or natural events.' },
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
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'health-basics', label: 'Health Insurance Basics' },
                { id: 'health-coverage', label: 'Health Coverage Key Points' },
                { id: 'car-insurance', label: 'Car Insurance Requirements' },
                { id: 'driving-tips', label: 'Tips for Drivers' },
                { id: 'summary', label: 'Summary' },
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
