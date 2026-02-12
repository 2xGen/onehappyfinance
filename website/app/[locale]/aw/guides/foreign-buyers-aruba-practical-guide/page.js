import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/buying%20property%20in%20aruba%20as%20a%20foreigner.png'

export const metadata = {
  title: 'Can Foreigners Buy Property in Aruba? A Practical Guide',
  description: 'Yes — Aruba allows non-residents to buy, own, and sell real estate. Legal requirements, residency rules, financing, taxes, rental regulations, and key takeaways for foreign buyers.',
  keywords: [
    'buy property Aruba as foreigner',
    'foreign buyers Aruba',
    'non-resident property Aruba',
    'Aruba real estate foreigners',
    'buy house Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/foreign-buyers-aruba-practical-guide',
  },
  openGraph: {
    title: 'Can Foreigners Buy Property in Aruba? A Practical Guide',
    description: 'Legal requirements, financing, taxes, and rental rules for international buyers. Owning property in Aruba is smooth, safe, and rewarding.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Buying Property in Aruba as a Foreigner' },
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
      { '@type': 'ListItem', position: 3, name: 'Can Foreigners Buy Property in Aruba? A Practical Guide', item: `https://onehappyfinance.com/${locale}/aw/guides/foreign-buyers-aruba-practical-guide` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Can Foreigners Buy Property in Aruba? A Practical Guide',
    image: [FEATURED_IMAGE],
    description: 'Aruba allows non-residents to purchase, own, and sell real estate. This guide covers legal requirements, residency, financing, taxes, and rental regulations.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-12',
    dateModified: '2026-02-12',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/foreign-buyers-aruba-practical-guide' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Can foreigners buy property in Aruba?', a: 'Yes. Aruba allows non-residents to purchase, own, and sell real estate under the same legal framework as locals. No special permits, citizenship, or residency are required to buy.' },
    { q: 'Does owning property in Aruba give me residency?', a: 'No. Owning property does not grant automatic residency. Non-residents can stay up to 180 days per year without a visa. Longer stays require a residence permit; property ownership can strengthen your application.' },
    { q: 'What is the difference between freehold and leasehold in Aruba?', a: 'Freehold (eigendom) means you own the land and property outright with no ongoing land fees. Leasehold (erfpacht) means the land is government-owned and leased, usually for 60 years, with annual lease fees; you still own structures on the land.' },
    { q: 'Can I get a mortgage in Aruba as a foreigner?', a: 'Yes. Banks such as Aruba Bank and RBC Royal Bank offer non-resident mortgages. Foreign buyers typically need 35–40% down payment and must provide proof of income, credit history, and bank references.' },
    { q: 'Can I rent out my Aruba property as a non-resident?', a: 'Yes. Foreign owners can rent properties, including short-term vacation rentals. Vacation rental licenses may be required in certain zones; rental income is taxable under Aruban law.' },
    { q: 'Can I buy property in Aruba through a company?', a: 'Yes. Purchasing through a corporate entity is possible and can help with estate planning, inheritance, and potential tax advantages. Consult a local attorney for registration and legal steps.' },
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
          <Image src={FEATURED_IMAGE} alt="Buying Property in Aruba as a Foreigner" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Property</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Can Foreigners Buy Property in Aruba? A Practical Guide</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Aruba&apos;s sunny beaches, safe neighborhoods, and stable economy make it a magnet for international buyers. Whether for vacation, retirement, or investment — the answer is yes: Aruba allows non-residents to purchase, own, and sell real estate under the same legal framework as locals.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="intro" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <p className="text-foreground/80 leading-7 md:leading-8">This guide explains what foreign buyers need to know: legal requirements, residency rules, financing, taxes, and rental regulations.</p>
          </section>

          <section id="ownership-rights" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Ownership Rights for Foreigners</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Foreign buyers enjoy the same rights as Aruban citizens:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong className="text-foreground">Full ownership:</strong> You can buy, sell, mortgage, and rent properties.</li>
              <li><strong className="text-foreground">Safe and regulated process:</strong> Transactions are handled by a civil-law notary who ensures clear titles.</li>
              <li><strong className="text-foreground">No special permits required:</strong> Buying property does not require citizenship, residency, or local approval.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruba recognizes two main types of property ownership:</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Freehold (Eigendom)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>You own the land and property outright.</li>
                  <li>No ongoing land fees.</li>
                  <li>Typically limited to prime areas, often more expensive.</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Leasehold (Erfpacht)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Land is government-owned and leased, usually for 60 years.</li>
                  <li>Annual lease fees apply, varying by location and size.</li>
                  <li>You still own structures on the land and can sell, mortgage, or rent them.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="residency-stays" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Residency and Stays for Property Owners</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Owning property does not grant automatic residency.</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Non-residents can stay on Aruba up to <strong className="text-foreground">180 days per year</strong> without a visa.</li>
              <li>Those wishing to retire or live longer on the island must apply for a residence permit.</li>
              <li>Property ownership can strengthen your application for long-term stays, but it is not a substitute for official immigration approval.</li>
            </ul>
          </section>

          <section id="required-documents" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Required Documents for Foreign Buyers</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Buying property as a foreigner is straightforward if you have the following:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Valid passport or government-issued ID</li>
              <li>Proof of income and financial stability</li>
              <li>Bank reference letters (from home country)</li>
              <li>Purchase agreement and deposit</li>
              <li>If financing: proof of assets, credit report, and appraisals</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">A civil-law notary will handle all legal documentation and ensure the property has a clean title.</p>
          </section>

          <section id="financing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Financing Options for Non-Residents</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Foreign buyers often need larger down payments than locals, typically <strong className="text-foreground">35–40%</strong>, and may face higher interest rates. Banks commonly request:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Proof of income and employment</li>
              <li>Credit history from home country</li>
              <li>Bank references</li>
              <li>Appraisal by a licensed Aruban appraiser</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Some buyers explore financing options abroad or cross-border loans. Local banks offering mortgages for non-residents include:</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Aruba Bank – Platinum Mortgage</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Tailored for foreign buyers</li>
                  <li>Annuity-based repayment</li>
                  <li>Down payment: 35–40%</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">RBC Royal Bank – Non-Resident</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Up to ~65% financing</li>
                  <li>Terms up to 15 years</li>
                  <li>Includes renovation financing</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="tax-implications" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Tax Implications for Foreign Owners</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Owning property in Aruba comes with predictable and transparent taxes:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong className="text-foreground">Transfer Tax:</strong> 3% for properties below AWG 250,000 (~US$138,000), 6% for higher values</li>
              <li><strong className="text-foreground">Annual Property Tax (Land Tax):</strong> Based on the assessed value</li>
              <li><strong className="text-foreground">Leasehold Fee (Erfpacht):</strong> Annual fee for government-owned land</li>
              <li><strong className="text-foreground">Rental Income Tax:</strong> Applicable if you rent out your property</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Understanding these obligations early ensures smooth ownership and compliance.</p>
          </section>

          <section id="renting-out" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Renting Out Property as a Non-Resident</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Foreign owners can rent properties, including short-term vacation rentals. Key points:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Vacation rental licenses may be required for certain zones</li>
              <li>Local regulations and zoning laws must be followed</li>
              <li>Rental income is taxable under Aruban law</li>
              <li>Many buyers use property management companies to handle bookings, maintenance, and compliance</li>
            </ul>
          </section>

          <section id="buy-through-company" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. Can You Buy Through a Company?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Yes — purchasing through a corporate entity is an option. Benefits include:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Estate planning and inheritance management</li>
              <li>Potential tax advantages</li>
              <li>Flexibility for rental or investment purposes</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Corporate purchases involve extra registration and legal steps, so consultation with a local attorney is recommended.</p>
          </section>

          <section id="key-takeaways" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8. Key Takeaways for Foreign Buyers</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li>Aruba welcomes international buyers with no ownership restrictions.</li>
              <li>Both freehold and leasehold options are available, each with pros and cons.</li>
              <li>Purchasing property does not grant residency, but owners can stay up to 180 days per year.</li>
              <li>Financing is available for non-residents, but down payments and terms differ from locals.</li>
              <li>Taxes, fees, and rental rules are transparent and predictable.</li>
              <li>Working with local real estate professionals — agents, notaries, and mortgage brokers — simplifies the process and reduces risk.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Owning property in Aruba allows foreigners to enjoy tropical living, invest in a stable market, and take advantage of strong vacation rental demand. With proper planning, the process is smooth, safe, and rewarding.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Can foreigners buy property in Aruba?', a: 'Yes. Aruba allows non-residents to purchase, own, and sell real estate under the same legal framework as locals. No special permits, citizenship, or residency are required to buy.' },
                { q: 'Does owning property in Aruba give me residency?', a: 'No. Owning property does not grant automatic residency. Non-residents can stay up to 180 days per year without a visa. Longer stays require a residence permit; property ownership can strengthen your application.' },
                { q: 'What is the difference between freehold and leasehold in Aruba?', a: 'Freehold (eigendom) means you own the land and property outright with no ongoing land fees. Leasehold (erfpacht) means the land is government-owned and leased, usually for 60 years, with annual lease fees; you still own structures on the land.' },
                { q: 'Can I get a mortgage in Aruba as a foreigner?', a: 'Yes. Banks such as Aruba Bank and RBC Royal Bank offer non-resident mortgages. Foreign buyers typically need 35–40% down payment and must provide proof of income, credit history, and bank references.' },
                { q: 'Can I rent out my Aruba property as a non-resident?', a: 'Yes. Foreign owners can rent properties, including short-term vacation rentals. Vacation rental licenses may be required in certain zones; rental income is taxable under Aruban law.' },
                { q: 'Can I buy property in Aruba through a company?', a: 'Yes. Purchasing through a corporate entity is possible and can help with estate planning, inheritance, and potential tax advantages. Consult a local attorney for registration and legal steps.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'en'} keys={RELATED_KEYS.foreignBuyersPractical} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'intro', label: 'Introduction' },
                { id: 'ownership-rights', label: '1. Ownership rights' },
                { id: 'residency-stays', label: '2. Residency & stays' },
                { id: 'required-documents', label: '3. Required documents' },
                { id: 'financing', label: '4. Financing' },
                { id: 'tax-implications', label: '5. Tax implications' },
                { id: 'renting-out', label: '6. Renting out' },
                { id: 'buy-through-company', label: '7. Buy through company' },
                { id: 'key-takeaways', label: '8. Key takeaways' },
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
