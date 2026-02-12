import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20Insurance%20Works%20in%20Aruba.png'

export const metadata = {
  title: 'Aruba Insurance Guide – Tips for New Residents',
  description: 'Learn how insurance works in Aruba as a new resident, including coverage basics, required paperwork, and practical tips for health, car, and property insurance.',
  keywords: [
    'insurance Aruba new residents',
    'AZV Aruba',
    'car insurance Aruba',
    'property insurance Aruba',
    'expat insurance Aruba',
    'health insurance Aruba',
    'liability insurance Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/insurance-aruba-tips-for-new-residents',
  },
  openGraph: {
    title: 'Aruba Insurance Guide – Tips for New Residents',
    description: 'Learn how insurance works in Aruba as a new resident, including coverage basics, required paperwork, and practical tips for health, car, and property insurance.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'How Insurance Works in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'How Insurance Works in Aruba: Tips for New Residents', item: `https://onehappyfinance.com/${locale}/aw/guides/insurance-aruba-tips-for-new-residents` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Insurance Works in Aruba: Tips for New Residents',
    image: [FEATURED_IMAGE],
    description: 'Learn how insurance works in Aruba as a new resident, including coverage basics, required paperwork, and practical tips for health, car, and property insurance.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/insurance-aruba-tips-for-new-residents' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Do I need to register for AZV as a new resident in Aruba?', a: 'Yes. Everyone living and working in Aruba must register for the Algemene Ziektekosten Verzekering (AZV), the government-managed health plan. Registration is done once you are in the public register (Censo).' },
    { q: 'Is car insurance mandatory in Aruba?', a: 'Yes. Third-party liability insurance is required by law for all vehicles, including rentals. Optional comprehensive coverage can protect your own vehicle from accidents, theft, or natural events.' },
    { q: 'What paperwork do I need for insurance in Aruba?', a: 'For health insurance, register with AZV once you are in the Censo. For vehicles, keep proof of coverage in your car at all times. Keep records of policies, coverage limits, and provider contacts.' },
    { q: 'What does property insurance cover in Aruba?', a: 'Property insurance protects homes and assets against fire, theft, and natural events. Personal liability insurance covers accidental damage to third parties; intentional damage and contractual liability are usually excluded.' },
    { q: 'Should new residents get additional private insurance?', a: 'Yes. Consider additional private insurance for extra protection, such as medical evacuation or extended care. Visitors and expats may also need private or travel insurance for coverage beyond AZV.' },
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
          <Image src={FEATURED_IMAGE} alt="How Insurance Works in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">How Insurance Works in Aruba: Tips for New Residents</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">A practical guide to health, car, and property insurance for new residents—mandatory coverage, paperwork, and registration tips.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="getting-started" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Getting Started with Insurance in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">As a new resident in Aruba, it is important to understand the mandatory and optional insurance types on the island. Key areas include:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Health insurance:</strong> Required for residents and workers.</li>
              <li><strong>Car insurance:</strong> Mandatory for all drivers.</li>
              <li><strong>Property and personal liability:</strong> Protects your home and covers accidental damage to third parties.</li>
              <li><strong>Optional private or travel coverage:</strong> Additional protection such as medical evacuation or extended care.</li>
            </ul>
          </section>

          <section id="health-insurance" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Health Insurance for Residents</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Everyone living and working in Aruba must register for the <strong>Algemene Ziektekosten Verzekering (AZV)</strong>, the government-managed health plan.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">AZV covers general practitioners, hospitals, essential medications, and some specialist care. Register with a general practitioner (GP) for routine care and emergencies.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Visitors and expats should consider private or travel insurance for additional coverage beyond what AZV provides.</p>
          </section>

          <section id="car-insurance" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Car and Vehicle Insurance</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Third-party liability</strong> is required by law for all vehicles, including rentals. It covers damages you cause to others but not damage to your own vehicle.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Optional comprehensive coverage</strong> can protect your car against accidents, theft, or natural events such as storms or flooding.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Practical tip:</strong> Confirm coverage with your insurer, especially if you are a foreign driver. Keep proof of insurance in your vehicle at all times.</p>
          </section>

          <section id="property-liability" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Property and Personal Liability Insurance</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Property insurance</strong> protects your home and assets against fire, theft, and natural events. It is especially important for homeowners on the island.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>Personal liability insurance</strong> covers accidental damage you cause to third parties. Intentional damage and contractual liability are usually not included in standard policies.</p>
          </section>

          <section id="paperwork" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Paperwork and Registration Tips</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Health insurance:</strong> Register with AZV once you are in the public register (Censo).</li>
              <li><strong>Vehicle insurance:</strong> Keep proof of coverage in your car at all times.</li>
              <li><strong>Documentation:</strong> Keep records of policies, coverage limits, and provider contacts for easy reference.</li>
            </ul>
          </section>

          <section id="practical-tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Practical Tips for New Residents</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Check coverage levels:</strong> Ensure you are adequately protected for health, vehicle, and property.</li>
              <li><strong>Consider additional insurance:</strong> Private coverage for medical evacuation or extended care can provide extra safety.</li>
              <li><strong>Stay informed:</strong> Local laws and requirements may change; staying up to date helps avoid fines or gaps in coverage.</li>
              <li><strong>Consult licensed providers:</strong> Work with local insurance providers for advice tailored to your situation.</li>
            </ul>
          </section>

          <section id="summary" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Summary</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Understanding how insurance works in Aruba is essential for new residents. Health insurance through AZV is mandatory for those who live or work on the island, car insurance with third-party liability is required by law, and property and personal liability coverage help protect your assets and others.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Stay on top of paperwork, keep proof of coverage handy, and consult licensed local providers for tailored advice. This will help you avoid gaps in coverage and ensure you are adequately protected.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Do I need to register for AZV as a new resident in Aruba?', a: 'Yes. Everyone living and working in Aruba must register for the Algemene Ziektekosten Verzekering (AZV), the government-managed health plan. Registration is done once you are in the public register (Censo).' },
                { q: 'Is car insurance mandatory in Aruba?', a: 'Yes. Third-party liability insurance is required by law for all vehicles, including rentals. Optional comprehensive coverage can protect your own vehicle from accidents, theft, or natural events.' },
                { q: 'What paperwork do I need for insurance in Aruba?', a: 'For health insurance, register with AZV once you are in the Censo. For vehicles, keep proof of coverage in your car at all times. Keep records of policies, coverage limits, and provider contacts.' },
                { q: 'What does property insurance cover in Aruba?', a: 'Property insurance protects homes and assets against fire, theft, and natural events. Personal liability insurance covers accidental damage to third parties; intentional damage and contractual liability are usually excluded.' },
                { q: 'Should new residents get additional private insurance?', a: 'Yes. Consider additional private insurance for extra protection, such as medical evacuation or extended care. Visitors and expats may also need private or travel insurance for coverage beyond AZV.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'en'} keys={RELATED_KEYS.insuranceTips} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'getting-started', label: 'Getting Started' },
                { id: 'health-insurance', label: 'Health Insurance' },
                { id: 'car-insurance', label: 'Car and Vehicle Insurance' },
                { id: 'property-liability', label: 'Property and Liability' },
                { id: 'paperwork', label: 'Paperwork Tips' },
                { id: 'practical-tips', label: 'Practical Tips' },
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
