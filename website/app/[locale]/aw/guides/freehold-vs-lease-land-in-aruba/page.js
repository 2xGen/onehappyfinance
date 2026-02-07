import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Freehold%20vs.%20Lease%20Land%20in%20Aruba.png'

export const metadata = {
  title: 'Freehold vs. Lease Land in Aruba (Eigendom vs Erfpacht) | Complete Guide',
  description: 'Freehold (Eigendom) vs lease land (Erfpacht) in Aruba: ownership, ground rent, 60-year lease, financing, due diligence checklist, and FAQs.',
  keywords: [
    'freehold vs lease land Aruba',
    'Eigendom vs Erfpacht Aruba',
    'lease land Aruba',
    'freehold property Aruba',
    'lease land mortgage Aruba',
    'Aruba Erfpacht',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/freehold-vs-lease-land-in-aruba',
  },
  openGraph: {
    title: 'Freehold vs. Lease Land in Aruba (Eigendom vs Erfpacht) | Complete Guide',
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
    headline: 'Freehold vs. Lease Land in Aruba (Eigendom vs Erfpacht) | Complete Guide',
    image: [FEATURED_IMAGE],
    description: 'Freehold vs lease land in Aruba: Eigendom, Erfpacht, ground rent, 60-year lease, financing, due diligence.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/freehold-vs-lease-land-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Can foreigners buy freehold property in Aruba?', a: 'Yes, foreign buyers can often purchase freehold. Verify parcel-specific eligibility and any restrictions with the registry and a notary before committing.' },
    { q: 'Will banks finance a leasehold purchase in Aruba?', a: 'Many lenders consider leasehold if the remaining lease term exceeds the loan maturity by their required margin, and the lease allows mortgaging. Confirm with local banks early.' },
    { q: 'How is ground rent set and adjusted on lease land?', a: 'Ground rent (canon) is defined in the lease and may be fixed, indexed, or periodically reviewed. Check the formula, timing of increases, and any caps or renegotiation provisions.' },
    { q: 'What happens to buildings at the end of a land lease?', a: 'Outcomes are contract-specific. Leases may require removal, provide compensation, or confirm reversion. Read the improvements and expiry clauses closely with legal counsel.' },
    { q: 'Can I run short-term rentals on a leasehold property?', a: 'It depends on municipal rules and the lease. Verify local licensing and the lease subletting and use provisions before planning vacation rentals.' },
    { q: 'Which documents are essential for leasehold due diligence?', a: 'Certified registry search, full lease with all addenda, recent ground rent statements, zoning and permit records, current survey, and written opinions from a notary, lender, and tax advisor.' },
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
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Freehold vs. Lease Land in Aruba (Eigendom vs Erfpacht)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Eigendom (freehold) means full ownership; Erfpacht (lease land) is a 60-year renewable lease with annual fees. Control, costs, financing, and resale differ. Here&apos;s what to verify.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="freehold" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Freehold Property (Eigendom)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">With freehold (Eigendom), you purchase full title to the land and any buildings. You control use and development within zoning and permit rules. You can sell, lease to others, or use the property as collateral for financing, subject to local regulations.</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>Ownership:</strong> Permanent ownership of land and structures.</li>
              <li><strong>Costs:</strong> No annual land fees (ground rent); only yearly property taxes.</li>
              <li><strong>Control:</strong> Broad autonomy within zoning; no restrictions on renovations or usage beyond permits.</li>
              <li><strong>Financing:</strong> Preferred by banks; mortgages are easier to secure.</li>
            </ul>
          </section>

          <section id="lease" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Lease Land (Erfpacht)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Lease land (Erfpacht) in Aruba is government-owned land leased for a long term—usually 60 years, renewable. You own the building and have the right to use the land. Control is set by the lease: expect conditions on permitted uses, improvements, subletting, and sometimes lessor consent to transfer or mortgage your interest.</p>
            <div className="grid md:grid-cols-2 gap-4 mt-5">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Annual lease fee (canon)</h3>
                <p className="mt-2 text-foreground/80 leading-7">Paid to the government; amount depends on location, land value, and contract terms. May be fixed, indexed, or periodically renegotiated.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Sale/transfer restrictions</h3>
                <p className="mt-2 text-foreground/80 leading-7">Is the lease assignable? What approvals are needed on transfer? Government or lessor approval is often required.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Ownership of buildings</h3>
                <p className="mt-2 text-foreground/80 leading-7">You own the structures on the land; the land remains government property. At end of lease, what happens to improvements depends on the contract.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Mortgage options</h3>
                <p className="mt-2 text-foreground/80 leading-7">Lenders often require a minimum remaining lease term that comfortably exceeds the mortgage term. Some leases need lessor consent to grant a mortgage.</p>
              </div>
            </div>
          </section>

          <section id="verify" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) What to Verify in a Lease</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Before buying lease land, confirm these points in writing:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Is the lease assignable, and what approvals are needed on transfer?</li>
              <li>Are subletting or short-term rentals allowed, and under what conditions?</li>
              <li>Do you need lessor approval for renovations or major improvements?</li>
              <li>Who approves building plans—the lessor or municipality—and in what order?</li>
              <li>Exact expiry date and any renewal or extension provisions</li>
              <li>Whether renewal is automatic or at the lessor&apos;s discretion</li>
              <li>Basis for any rent reset at renewal (e.g. indexation or market review)</li>
              <li>End-of-lease clause for buildings and improvements: compensation, removal, or reversion</li>
            </ul>
          </section>

          <section id="financing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Financing in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Banks commonly accept freehold as collateral under standard underwriting. Leasehold can also be financeable, but lenders often require a minimum remaining lease term that comfortably exceeds the mortgage term. Some leaseholds may need lessor consent to grant a mortgage.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Before you offer: ask local banks about their appetite for your specific title and the remaining lease term they require; confirm the lease allows you to mortgage the leasehold interest; check whether lessor consent is required for the mortgage and whether fees apply.</p>
          </section>

          <section id="proscons" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Freehold vs. Lease Land: Pros and Cons</h2>
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

          <section id="checklist" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6) Due Diligence Checklist</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Before making an offer on lease land, gather:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Certified title search from the Aruba Land and Property Registry (freehold or leasehold status, encumbrances, easements)</li>
              <li>Full lease agreement with all annexes and amendments—do not rely on summaries</li>
              <li>Clear terms for start date, expiry date, renewal, ground rent, indexation, assignment, mortgage consent, default remedies, and reversion</li>
              <li>Recent ground rent invoices and payment history</li>
              <li>Municipal zoning confirmation and past building permit history</li>
              <li>Current survey or parcel plan matched to the registry</li>
              <li>Written legal review by a local notary or attorney on title marketability and mortgageability</li>
              <li>Term sheets from at least two local lenders showing financing options and lease-term requirements</li>
            </ul>
          </section>

          <section id="redflags" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7) Red Flags to Pause On</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Short remaining lease term relative to your ownership or loan horizon</li>
              <li>Vague or discretionary renewal clauses without clear timing or formulas</li>
              <li>Ground rent subject to wide-open market revaluation with no caps or staged increases</li>
              <li>Lease terms that restrict transfers or mortgages or require onerous approvals</li>
              <li>No clear clause on who owns improvements at expiry or how compensation works</li>
              <li>Unpaid municipal charges, utility balances, or other liens</li>
            </ul>
          </section>

          <section id="tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8) Which to Choose?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Freehold is generally recommended for long-term investment, better resale value, and complete control. Leasehold is popular for its lower initial cost and is a viable option for buyers seeking to build or buy in prime locations at a lower entry price. Focus on remaining term, rent burden, and renewal clarity before committing to lease land.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">9) Frequently Asked Questions (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Can foreigners buy freehold property in Aruba?', a: 'Yes, foreign buyers can often purchase freehold. Verify parcel-specific eligibility and any restrictions with the registry and a notary before committing.' },
                { q: 'Will banks finance a leasehold purchase in Aruba?', a: 'Many lenders consider leasehold if the remaining lease term exceeds the loan maturity by their required margin, and the lease allows mortgaging. Confirm with local banks early.' },
                { q: 'How is ground rent set and adjusted on lease land?', a: 'Ground rent (canon) is defined in the lease and may be fixed, indexed, or periodically reviewed. Check the formula, timing of increases, and any caps or renegotiation provisions.' },
                { q: 'What happens to buildings at the end of a land lease?', a: 'Outcomes are contract-specific. Leases may require removal, provide compensation, or confirm reversion. Read the improvements and expiry clauses closely with legal counsel.' },
                { q: 'Can I run short-term rentals on a leasehold property?', a: 'It depends on municipal rules and the lease. Verify local licensing and the lease subletting and use provisions before planning vacation rentals.' },
                { q: 'Which documents are essential for leasehold due diligence?', a: 'Certified registry search, full lease with all addenda, recent ground rent statements, zoning and permit records, current survey, and written opinions from a notary, lender, and tax advisor.' },
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
                { id: 'freehold', label: 'Freehold (Eigendom)' },
                { id: 'lease', label: 'Lease Land (Erfpacht)' },
                { id: 'verify', label: 'What to verify' },
                { id: 'financing', label: 'Financing' },
                { id: 'proscons', label: 'Pros & Cons' },
                { id: 'checklist', label: 'Due diligence' },
                { id: 'redflags', label: 'Red flags' },
                { id: 'tips', label: 'Which to choose' },
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
