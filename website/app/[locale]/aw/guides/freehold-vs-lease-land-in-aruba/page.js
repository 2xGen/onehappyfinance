import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Freehold%20vs.%20Lease%20Land%20in%20Aruba.png'

export const metadata = {
  title: 'Freehold vs. Lease Land in Aruba: What You Need to Know [2025 Guide]',
  description: 'Understand the difference between freehold (full ownership) and lease land in Aruba. Rights, costs, financing, pros & cons, and FAQs.',
  keywords: [
    'lease land Aruba',
    'freehold property Aruba',
    'buy property Aruba',
    'lease land mortgage Aruba',
    'Aruba real estate',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/freehold-vs-lease-land-in-aruba',
  },
  openGraph: {
    title: 'Freehold vs. Lease Land in Aruba: What You Need to Know [2025 Guide]',
    description: 'Differences, fees, restrictions, and mortgage options for freehold vs lease land in Aruba.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Freehold vs. Lease Land in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Freehold vs. Lease Land in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/freehold-vs-lease-land-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Freehold vs. Lease Land in Aruba: What You Need to Know [2025 Guide]',
    image: [FEATURED_IMAGE],
    description: 'Difference between freehold and lease land in Aruba with pros & cons, mortgage options, and FAQ.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/freehold-vs-lease-land-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Can foreigners buy lease land in Aruba?', a: 'Yes, foreigners can buy both freehold and lease land, but lease land typically includes annual fees and additional conditions.' },
    { q: 'What happens at the end of a lease?', a: 'Leases can usually be renewed with the government, but terms and fees may change.' },
    { q: 'Can I get a mortgage on lease land?', a: 'Yes, mortgages are available, though down payments and LTV limits may be stricter.' },
    { q: 'Is lease land cheaper than freehold?', a: 'Upfront costs are usually lower, but annual fees and restrictions can increase long-term cost.' },
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
      <BreadcrumbSchema locale={params?.locale || 'en'} />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-lg bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="relative aspect-[16/9] w-full">
          <Image src={FEATURED_IMAGE} alt="Freehold vs Lease Land in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Mortgages</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Freehold vs. Lease Land in Aruba: What You Need to Know [2025 Guide]</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Understand rights, fees, restrictions, and financing differences between freehold and lease land in Aruba.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="freehold" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Freehold Property</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Full ownership of land and building with no end date.</li>
              <li>No annual lease fees.</li>
              <li>Freedom to sell, rent, or modify (within local regulations).</li>
              <li>Often higher financing (lower perceived risk for banks).</li>
              <li>Popular among foreign buyers seeking full control.</li>
            </ul>
          </section>

          <section id="lease" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Lease Land</h2>
            <p className="mt-4 text-foreground/80 leading-7">Government-owned land leased for long terms (commonly 33, 50, or 75 years).</p>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Annual lease fee</h3>
                <p className="mt-2 text-foreground/80 leading-7">Paid to the government; amount depends on location, land value, and contract terms.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Sale/transfer restrictions</h3>
                <p className="mt-2 text-foreground/80 leading-7">Government approval is often required; some contracts have conditions for foreign buyers.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Ownership of buildings</h3>
                <p className="mt-2 text-foreground/80 leading-7">You own the structures on the land; the land remains government property.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Mortgage options</h3>
                <p className="mt-2 text-foreground/80 leading-7">Mortgages exist for lease land but often with stricter LTV and higher down payments.</p>
              </div>
            </div>
          </section>

          <section id="proscons" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Freehold vs. Lease Land: Pros and Cons</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Property Type</th>
                    <th className="text-left p-3 font-semibold">Advantages</th>
                    <th className="text-left p-3 font-semibold">Disadvantages</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3">Freehold</td>
                    <td className="p-3 text-foreground/80">Full ownership, easier resale, often better financing</td>
                    <td className="p-3 text-foreground/80">Higher purchase price</td>
                  </tr>
                  <tr>
                    <td className="p-3">Lease Land</td>
                    <td className="p-3 text-foreground/80">Lower initial cost, available in prime locations</td>
                    <td className="p-3 text-foreground/80">Annual fees, restrictions, stricter bank requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Tips for Buyers</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Review the lease contract carefully (fees, renewals, sale restrictions).</li>
              <li>Get an appraisal; required for both freehold and lease land.</li>
              <li>Consider long-term plans; freehold often safer for resale/rent.</li>
              <li>Compare mortgage options for both property types.</li>
            </ul>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Frequently Asked Questions (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Can foreigners buy lease land in Aruba?', a: 'Yes, but expect annual fees and possible government approval for transfers.' },
                { q: 'What happens at end of lease?', a: 'Usually renewable with updated terms and fees.' },
                { q: 'Mortgage on lease land?', a: 'Possible, often stricter LTV and higher down payment than freehold.' },
                { q: 'Is lease land cheaper?', a: 'Entry costs are lower, but long-term fees and restrictions can add up.' },
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
                { id: 'freehold', label: 'Freehold' },
                { id: 'lease', label: 'Lease land' },
                { id: 'proscons', label: 'Pros & Cons' },
                { id: 'tips', label: 'Tips' },
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
