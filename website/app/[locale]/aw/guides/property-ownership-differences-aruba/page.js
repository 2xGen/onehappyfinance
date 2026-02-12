import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/eigendom%20vs%20erfpacht.png'

export const metadata = {
  title: 'Eigendom vs. Erfpacht in Aruba: Understanding Property Ownership Differences',
  description: 'Freehold (Eigendom) vs long lease land (Erfpacht) in Aruba: ownership rights, 60-year lease, annual canon, financing, and what to verify before buying.',
  keywords: [
    'Eigendom vs Erfpacht Aruba',
    'freehold vs lease land Aruba',
    'property ownership Aruba',
    'Erfpacht Aruba',
    'long lease land Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/property-ownership-differences-aruba',
  },
  openGraph: {
    title: 'Eigendom vs. Erfpacht in Aruba: Understanding Property Ownership Differences',
    description: 'Freehold vs long lease land in Aruba: ownership rights, duration, costs, and financing. Essential reading before buying real estate.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Eigendom vs. Erfpacht in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Eigendom vs. Erfpacht: Understanding Property Ownership', item: `https://onehappyfinance.com/${locale}/aw/guides/property-ownership-differences-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Eigendom vs. Erfpacht in Aruba: Understanding Property Ownership Differences',
    image: [FEATURED_IMAGE],
    description: 'Freehold vs long lease land in Aruba: ownership rights, 60-year lease, annual canon, financing, and due diligence.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-12',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/property-ownership-differences-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'What is Eigendom (freehold) in Aruba?', a: 'Eigendom means full private ownership of both the land and the building. You own the land indefinitely, with no lease term, and the property is registered in your name. The primary recurring government charge is annual property tax (grondbelasting).' },
    { q: 'What is Erfpacht (long lease land) in Aruba?', a: 'Erfpacht is a long-term lease where the government owns the land and you own the structure and the right to use the land. Standard term is 60 years, typically renewable for another 60 years, with an annual lease fee (canon). Lease rights can be sold, transferred, or mortgaged.' },
    { q: 'Do banks in Aruba finance both freehold and lease land?', a: 'Yes. Local banks typically finance both. However, lenders may review remaining lease duration, and shorter remaining lease terms could affect financing conditions. Confirm lease details before applying for a mortgage.' },
    { q: 'Is Erfpacht safe in Aruba?', a: 'Yes. Lease land is a long-established legal structure. Rights are recorded in public registers and reviewed by the notary before transfer. Verify remaining lease years, annual lease fee, renewal conditions, and any additional government requirements.' },
    { q: 'Which is better: Eigendom or Erfpacht?', a: 'There is no universal answer. Freehold may provide greater long-term certainty and strong resale appeal. Lease land may provide access to established neighborhoods and competitive pricing. The right choice depends on your investment goals, financing strategy, and long-term plans.' },
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
          <Image src={FEATURED_IMAGE} alt="Eigendom vs. Erfpacht in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Eigendom vs. Erfpacht in Aruba: Understanding Property Ownership Differences</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">When buying property in Aruba, one of the most important distinctions is Eigendom (freehold) versus Erfpacht (long lease land). Both are legally secure—here&apos;s how they differ and what to consider.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="intro" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <p className="text-foreground/80 leading-7 md:leading-8">Both ownership structures are common and legally secure, but they differ in ownership rights, duration, annual costs, and long-term considerations. Understanding these differences is essential before purchasing real estate in Aruba.</p>
          </section>

          <section id="eigendom" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">What Is Eigendom (Freehold Property)?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eigendom means full private ownership of both the land and the building. With freehold property in Aruba:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>You own the land indefinitely.</li>
              <li>There is no lease term.</li>
              <li>Ownership can be sold, transferred, or inherited without restrictions related to time.</li>
              <li>The property is registered in your name in the public registry.</li>
              <li>The primary recurring government charge is annual property tax (grondbelasting).</li>
            </ul>
          </section>

          <section id="erfpacht" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">What Is Erfpacht (Long Lease Land)?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Erfpacht is a long-term lease agreement where the government owns the land, and you own the structure and the right to use the land. Key characteristics:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Standard lease term of 60 years</li>
              <li>Typically renewable for another 60 years</li>
              <li>Annual lease fee (canon) applies</li>
              <li>Lease rights can be sold, transferred, or mortgaged</li>
              <li>Although you do not own the land itself, your leasehold rights are legally protected and transferable.</li>
            </ul>
          </section>

          <section id="comparison" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Eigendom vs. Erfpacht: Side-by-Side Comparison</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Feature</th>
                    <th className="text-left p-3 font-semibold">Eigendom (Freehold)</th>
                    <th className="text-left p-3 font-semibold">Erfpacht (Long Lease)</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-foreground/80">
                  <tr><td className="p-3">Land Ownership</td><td className="p-3">Buyer owns the land</td><td className="p-3">Government owns the land</td></tr>
                  <tr><td className="p-3">Building Ownership</td><td className="p-3">Buyer owns the building</td><td className="p-3">Buyer owns the building</td></tr>
                  <tr><td className="p-3">Duration</td><td className="p-3">Unlimited</td><td className="p-3">60-year term (renewable)</td></tr>
                  <tr><td className="p-3">Renewal Required</td><td className="p-3">No</td><td className="p-3">Yes, at end of lease term</td></tr>
                  <tr><td className="p-3">Annual Government Fee</td><td className="p-3">Property tax (grondbelasting)</td><td className="p-3">Annual lease fee (canon) + possible property tax</td></tr>
                  <tr><td className="p-3">Ability to Sell</td><td className="p-3">Yes</td><td className="p-3">Yes</td></tr>
                  <tr><td className="p-3">Ability to Mortgage</td><td className="p-3">Yes</td><td className="p-3">Yes</td></tr>
                  <tr><td className="p-3">Transferable to Heirs</td><td className="p-3">Yes</td><td className="p-3">Yes</td></tr>
                  <tr><td className="p-3">Long-Term Certainty</td><td className="p-3">Permanent ownership</td><td className="p-3">Subject to lease renewal</td></tr>
                  <tr><td className="p-3">Common in Aruba</td><td className="p-3">Found island-wide</td><td className="p-3">Found island-wide, including established areas</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="financial" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Financial Considerations</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Freehold (Eigendom)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Annual property tax based on assessed value.</li>
                  <li>No lease payments.</li>
                  <li>No renewal process.</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Lease Land (Erfpacht)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Annual lease fee payable to the government.</li>
                  <li>Lease rate remains fixed during the initial term.</li>
                  <li>Renewal may include revised lease conditions.</li>
                  <li>In some cases, lease land properties may have a slightly lower purchase price compared to similar freehold properties.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="mortgage" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Mortgage and Financing Impact</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Local banks in Aruba typically finance both freehold and lease land properties. However:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Lenders may review remaining lease duration.</li>
              <li>Shorter remaining lease terms could affect financing conditions.</li>
              <li>Buyers should confirm lease details before applying for a mortgage.</li>
            </ul>
          </section>

          <section id="safe" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Is Erfpacht Safe in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Yes. Lease land is a long-established legal structure in Aruba. Rights are recorded in public registers and reviewed by the notary before transfer.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Before purchasing lease land, buyers should verify:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Remaining lease years</li>
              <li>Annual lease fee amount</li>
              <li>Renewal conditions</li>
              <li>Any additional government requirements</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The notary performs these checks during due diligence.</p>
          </section>

          <section id="which" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Which Option Is Better?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">There is no universal answer.</p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Freehold ownership may provide:</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Greater long-term certainty</li>
                  <li>No renewal concerns</li>
                  <li>Strong resale appeal</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Lease land may provide:</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Access to established neighborhoods</li>
                  <li>Competitive pricing</li>
                  <li>Secure long-term usage rights</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The right choice depends on your investment goals, financing strategy, and long-term plans in Aruba.</p>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Final Thoughts</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Understanding the difference between Eigendom and Erfpacht in Aruba is essential when purchasing property on the island. Both ownership structures are legally secure and widely used. The key is evaluating how each option aligns with your financial goals, time horizon, and investment strategy. Proper due diligence ensures transparency and confidence when investing in Aruba real estate.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'What is Eigendom (freehold) in Aruba?', a: 'Eigendom means full private ownership of both the land and the building. You own the land indefinitely, with no lease term, and the property is registered in your name. The primary recurring government charge is annual property tax (grondbelasting).' },
                { q: 'What is Erfpacht (long lease land) in Aruba?', a: 'Erfpacht is a long-term lease where the government owns the land and you own the structure and the right to use the land. Standard term is 60 years, typically renewable for another 60 years, with an annual lease fee (canon). Lease rights can be sold, transferred, or mortgaged.' },
                { q: 'Do banks in Aruba finance both freehold and lease land?', a: 'Yes. Local banks typically finance both. However, lenders may review remaining lease duration, and shorter remaining lease terms could affect financing conditions. Confirm lease details before applying for a mortgage.' },
                { q: 'Is Erfpacht safe in Aruba?', a: 'Yes. Lease land is a long-established legal structure. Rights are recorded in public registers and reviewed by the notary before transfer. Verify remaining lease years, annual lease fee, renewal conditions, and any additional government requirements.' },
                { q: 'Which is better: Eigendom or Erfpacht?', a: 'There is no universal answer. Freehold may provide greater long-term certainty and strong resale appeal. Lease land may provide access to established neighborhoods and competitive pricing. The right choice depends on your investment goals, financing strategy, and long-term plans.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'en'} keys={RELATED_KEYS.propertyOwnershipDifferences} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'intro', label: 'Introduction' },
                { id: 'eigendom', label: 'What Is Eigendom?' },
                { id: 'erfpacht', label: 'What Is Erfpacht?' },
                { id: 'comparison', label: 'Side-by-Side Comparison' },
                { id: 'financial', label: 'Financial Considerations' },
                { id: 'mortgage', label: 'Mortgage & Financing' },
                { id: 'safe', label: 'Is Erfpacht Safe?' },
                { id: 'which', label: 'Which Option Is Better?' },
                { id: 'final', label: 'Final Thoughts' },
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
