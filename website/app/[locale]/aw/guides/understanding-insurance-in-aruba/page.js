import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/insurance%20on%20aruba.png'

export const metadata = {
  title: 'Insurance in Aruba Guide – Health, Car, Home & Personal Coverage',
  description: 'Learn the basics of insurance in Aruba for residents, expats, and visitors: AZV health coverage, mandatory motor insurance, home, liability, and business coverage.',
  keywords: [
    'insurance Aruba',
    'health insurance Aruba',
    'AZV Aruba',
    'car insurance Aruba',
    'home insurance Aruba',
    'expat insurance Aruba',
    'travel insurance Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/understanding-insurance-in-aruba',
  },
  openGraph: {
    title: 'Insurance in Aruba Guide – Health, Car, Home & Personal Coverage',
    description: 'Learn the basics of insurance in Aruba for residents, expats, and visitors, including health, motor, property, and liability coverage.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Insurance in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Understanding Insurance in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/understanding-insurance-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Understanding Insurance in Aruba: A Simple Guide for Residents and Expats',
    image: [FEATURED_IMAGE],
    description: 'Learn the basics of insurance in Aruba for residents, expats, and visitors, including health (AZV), motor, property, and liability coverage.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/understanding-insurance-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Is health insurance mandatory in Aruba?', a: 'Residents and employees must enroll in the public health system (AZV). Visitors and expats are strongly advised to have travel or private health insurance, as foreign plans are typically not accepted.' },
    { q: 'Is car insurance mandatory in Aruba?', a: 'Yes. All vehicles in Aruba must have third-party liability insurance. Rental car insurance often includes this, but international drivers should verify coverage.' },
    { q: 'What is AZV insurance in Aruba?', a: 'AZV (Algemene Ziektekosten Verzekering) is the public health insurance system that provides basic coverage for residents and employees, including GP visits, hospital care, and essential medications.' },
    { q: 'Do I need travel insurance for Aruba?', a: 'Yes. Visitors and expats are strongly advised to have travel or private health insurance to cover emergencies, hospitalization, or medical evacuation, as foreign health plans are typically not accepted.' },
    { q: 'Is home insurance required in Aruba?', a: 'Home or property insurance is optional but recommended for homeowners and renters. It protects against fire, theft, or natural events.' },
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
          <Image src={FEATURED_IMAGE} alt="Insurance in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Understanding Insurance in Aruba: A Simple Guide for Residents and Expats</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Learn the basics of insurance in Aruba—from mandatory AZV health coverage and motor insurance to optional home, liability, and business policies.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="overview" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Overview of Insurance in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Insurance in Aruba combines mandatory public coverage with optional private policies. Residents and workers are required to enroll in the public health system (AZV). Drivers must have third-party liability insurance for all vehicles. Visitors and expats are strongly advised to have travel or private health insurance, as foreign plans are typically not accepted. Other common types of insurance include home/property, personal liability, and business coverage.</p>
          </section>

          <section id="health" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Health Insurance in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The public health system, called the Algemene Ziektekosten Verzekering (AZV), provides basic coverage for residents and employees. It includes general practitioner visits, hospital care, and essential medications.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">For visitors or expats, private or travel insurance is recommended, especially to cover emergencies, hospitalization, or medical evacuation. Foreign health plans are typically not accepted in Aruba.</p>
          </section>

          <section id="motor" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Motor and Vehicle Insurance</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">All vehicles in Aruba are required by law to have third-party liability insurance, which covers damages to others. Rental car insurance often includes this, but it&apos;s advisable to check coverage, especially for international drivers.</p>
          </section>

          <section id="property" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Personal Liability and Property Insurance</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Personal liability insurance protects against claims from third parties for accidental damage. It generally excludes intentional damage or contractual obligations.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Property or home insurance protects your assets against risks like fire, theft, or natural events. These policies are optional but recommended, particularly for homeowners and renters.</p>
          </section>

          <section id="business" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Business Insurance</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Local businesses can obtain tailored coverage for their assets, employees, and operations. Policies vary widely depending on the type and size of the business.</p>
          </section>

          <section id="practical" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Practical Considerations</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>Medical emergencies:</strong> Serious cases may require transfer to Curaçao or the United States.</li>
              <li><strong>Safety:</strong> Aruba is generally safe, but insurance is important for activities like water sports or driving.</li>
              <li><strong>Pharmacies and healthcare access:</strong> Both public and private options exist; residents should register with a general practitioner for routine care.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">For comprehensive coverage tailored to individual needs, it is always recommended to consult licensed local insurance providers.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. Frequently Asked Questions (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Is health insurance mandatory in Aruba?', a: 'Residents and employees must enroll in the public health system (AZV). Visitors and expats are strongly advised to have travel or private health insurance, as foreign plans are typically not accepted.' },
                { q: 'Is car insurance mandatory in Aruba?', a: 'Yes. All vehicles in Aruba must have third-party liability insurance. Rental car insurance often includes this, but international drivers should verify coverage.' },
                { q: 'What is AZV insurance in Aruba?', a: 'AZV (Algemene Ziektekosten Verzekering) is the public health insurance system that provides basic coverage for residents and employees, including GP visits, hospital care, and essential medications.' },
                { q: 'Do I need travel insurance for Aruba?', a: 'Yes. Visitors and expats are strongly advised to have travel or private health insurance to cover emergencies, hospitalization, or medical evacuation, as foreign health plans are typically not accepted.' },
                { q: 'Is home insurance required in Aruba?', a: 'Home or property insurance is optional but recommended for homeowners and renters. It protects against fire, theft, or natural events.' },
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
                { id: 'overview', label: 'Overview' },
                { id: 'health', label: 'Health Insurance' },
                { id: 'motor', label: 'Motor & Vehicle' },
                { id: 'property', label: 'Liability & Property' },
                { id: 'business', label: 'Business Insurance' },
                { id: 'practical', label: 'Practical Considerations' },
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
