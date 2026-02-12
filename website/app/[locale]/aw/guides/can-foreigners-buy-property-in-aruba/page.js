import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png'

export const metadata = {
  title: 'Can Foreigners Buy Property in Aruba? Complete Guide',
  description: 'Yes—foreigners can buy property in Aruba with no restrictions. Freehold vs lease land, popular areas (Oranjestad, Palm Beach, Noord), financing, costs, transfer tax, and FAQs.',
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/can-foreigners-buy-property-in-aruba',
  },
  openGraph: {
    title: 'Can Foreigners Buy Property in Aruba? Complete Guide',
    description: 'Freehold vs lease land, popular areas, financing, costs, transfer tax, and FAQs for international buyers in Aruba.',
    type: 'article',
    images: [
      {
        url: FEATURED_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Can Foreigners Buy Property in Aruba? Complete Guide',
      },
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
      { '@type': 'ListItem', position: 3, name: 'Can Foreigners Buy Property in Aruba? Complete Guide', item: `https://onehappyfinance.com/${locale}/aw/guides/can-foreigners-buy-property-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Can Foreigners Buy Property in Aruba? Complete Guide',
    image: [FEATURED_IMAGE],
    description: 'Yes—foreigners can buy property in Aruba with no restrictions. Freehold vs lease land, popular areas (Oranjestad, Palm Beach, Noord), financing, costs, transfer tax, and FAQs.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/can-foreigners-buy-property-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can I buy property in Aruba without living there?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many international buyers own vacation homes or rental properties in Aruba without being residents.' } },
      { '@type': 'Question', name: 'What is the difference between lease land and freehold land?', acceptedAnswer: { '@type': 'Answer', text: 'Lease land is owned by the government and leased to you (typically 60 years) with a small annual fee. Freehold means you own both land and property outright.' } },
      { '@type': 'Question', name: 'Can I get a mortgage in Aruba as a foreigner?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Aruba Bank and RBC Royal Bank offer non-resident mortgages, typically requiring around 35% down payment.' } },
      { '@type': 'Question', name: 'How long does it take to buy property in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Once the offer is accepted and documents are complete, the notary process typically takes 3–6 weeks.' } },
      { '@type': 'Question', name: 'Can foreigners buy land in their own name?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Property can be registered directly in your name or through a legal entity such as a company or trust.' } },
      { '@type': 'Question', name: 'How much deposit do I pay when buying property in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Buyers typically pay around 10% when signing the purchase agreement. The exact amount can vary based on the contract.' } },
      { '@type': 'Question', name: 'What is the transfer tax in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Transfer tax is 3% for property values up to AWG 250,000. For values above that, 6% applies to the excess amount.' } },
    ],
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
          <Image src={FEATURED_IMAGE} alt="Can Foreigners Buy Property in Aruba?" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Can Foreigners Buy Property in Aruba? Complete Guide</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Yes—foreigners can buy property in Aruba with no ownership restrictions. This guide covers the process, costs, financing, and popular areas for international buyers.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="q1" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Who Can Buy Property in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The Aruban government encourages international investment in real estate. There are no citizenship or residency requirements—foreigners can purchase condos, houses, or land under the same legal framework as Aruban nationals. The main differences for non-residents tend to be financing terms and the choice between freehold and leasehold ownership.</p>
          </section>

          <section id="q2" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Freehold vs. Lease Land in Aruba</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Freehold Land (Eigendom Land)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>You own the land and property outright</li>
                  <li>No annual land fee</li>
                  <li>Full rights to modify/sell/rent within zoning</li>
                  <li>Typically more expensive, limited areas</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Lease Land (Erfpacht Land)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Government owns the land; you lease long-term (often 60 years)</li>
                  <li>Annual lease fee (size/location-based; often a few hundred USD)</li>
                  <li>May build, sell, or transfer under regulations</li>
                  <li>Common for homes and vacation properties</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="why" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Why Aruba Appeals to Foreign Buyers</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba’s tourism-led economy, stable governance as part of the Kingdom of the Netherlands, and strong demand for vacation rentals make it an attractive market for overseas investors. The island draws millions of visitors each year, supporting both short-term rental yields and long-term appreciation. A favorable tax setup, transparent legal framework for foreign ownership, and robust infrastructure further support investment. Year-round sunshine, safe neighborhoods, and well-connected airports add to the appeal for buyers seeking a Caribbean base.
            </p>
          </section>

          <section id="areas" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Popular Areas for Property Investment</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Below are some of the most sought-after locations for buying property in Aruba:</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Oranjestad</h3>
                <p className="mt-1 text-foreground/80 leading-7">The capital combines culture, commerce, and tourism. Buyers find condos, townhouses, and high-end properties. Historic architecture and nearby beaches support strong rental demand.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Noord</h3>
                <p className="mt-1 text-foreground/80 leading-7">North of the island, Noord offers upscale neighborhoods, villas, and easy access to Palm Beach and Eagle Beach. Ideal for a mix of quiet living and tourist activity.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Palm Beach</h3>
                <p className="mt-1 text-foreground/80 leading-7">Beachfront condos, resorts, and holiday rentals dominate. Nightlife, shopping, and water sports draw steady tourism, supporting short-term rental income.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">San Nicolas</h3>
                <p className="mt-1 text-foreground/80 leading-7">The cultural hub of the south offers more affordable options, art events, festivals, and quieter beaches like Baby Beach—appealing to buyers seeking value and long-term growth.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Paradera</h3>
                <p className="mt-1 text-foreground/80 leading-7">Inland and calmer, Paradera suits those wanting family homes or larger parcels at lower prices, with a quieter lifestyle away from tourist zones.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-foreground">Malmok</h3>
                <p className="mt-1 text-foreground/80 leading-7">A premium area with waterfront homes and easy access to snorkeling sites. Attracts luxury buyers and those looking for high-end vacation properties.</p>
              </div>
            </div>
          </section>

          <section id="find" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Where to Find Properties Online</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Many Aruban real estate agencies list properties online. Examples of listing portals and agencies include:</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><a href="https://arubalistings.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">arubalistings.com</a></li>
              <li><a href="https://century21aruba.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">century21aruba.com</a></li>
              <li><a href="https://www.coldwellbanker.aw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">coldwellbanker.aw</a></li>
            </ul>
          </section>

          <section id="q3" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Due Diligence and the Purchase Process</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Before closing, buyers should verify that the property has a clean title—no liens, disputes, or conflicting claims—and that the seller has the right to sell. This typically includes a title check, zoning review, and confirmation that all required permits are in place. A civil-law notary oversees the transaction in Aruba: they prepare the deed, perform due diligence, and register the transfer.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Buyers usually pay around 10% when signing the purchase agreement. The agreement sets out the terms, and the notary then completes the final deed and registration. Plan for roughly 3–6 weeks from accepted offer to deed transfer, assuming documentation is in order.
            </p>
            <ol className="mt-4 list-decimal pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Sign purchase agreement and pay deposit (typically ~10%)</li>
              <li>Notary conducts title search and due diligence</li>
              <li>Final payment and deed execution</li>
              <li>Deed registered and keys handed over</li>
            </ol>
          </section>

          <section id="q4" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. Financing for Non-Residents</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruban banks do offer mortgages to foreign buyers, but terms differ from residents. Non-residents typically need a larger down payment (often 35–40%), may face higher interest rates, and sometimes shorter loan terms. Banks will ask for proof of income, assets, and credit history—often from your home country. Some international buyers also explore financing from banks in their home country or cross-border options. Speak with local banks or a financial advisor in Aruba for current terms.
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aruba Bank – Platinum Mortgage</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Tailored for foreigners buying homes or condos</li>
                  <li>Annuity mortgage with personal account manager</li>
                  <li>Typical down payment: 35–40%</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">RBC Royal Bank – Non-Resident</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Up to ~65% financing</li>
                  <li>Repayment period up to ~15 years</li>
                  <li>Purchase and renovation options</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border p-5 bg-white shadow-sm">
              <h3 className="m-0 font-semibold">Documents banks typically request</h3>
              <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                <li>Valid passport</li>
                <li>Proof of income (payslips, tax returns)</li>
                <li>Bank reference letter</li>
                <li>Credit report from home country</li>
                <li>Appraisal by a licensed Aruban appraiser</li>
              </ul>
            </div>
          </section>

          <section id="q5" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8. Property Buying Costs and Taxes</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">When buying property in Aruba, budget for transfer tax, notary and legal fees, and—if applicable—agent commission. Lease land carries an annual lease fee. Below is a typical breakdown:</p>
            <div className="mt-5 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Cost</th>
                    <th className="text-left p-3 font-semibold">Typical Range</th>
                    <th className="text-left p-3 font-semibold">Who Pays</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-foreground/80">
                  <tr><td className="p-3">Property Transfer Tax</td><td className="p-3">3% – 6%</td><td className="p-3">Buyer</td></tr>
                  <tr><td className="p-3">Notary Fees (transfer deed)</td><td className="p-3">1% – 4%</td><td className="p-3">Buyer</td></tr>
                  <tr><td className="p-3">Notary Fees (mortgage deed, if applicable)</td><td className="p-3">1% – 2%</td><td className="p-3">Buyer</td></tr>
                  <tr><td className="p-3">Legal Fees</td><td className="p-3">1% – 2%</td><td className="p-3">Buyer</td></tr>
                  <tr><td className="p-3">Real Estate Agent Commission</td><td className="p-3">2% – 3%</td><td className="p-3">Seller</td></tr>
                  <tr><td className="p-3">Appraisal</td><td className="p-3">Varies</td><td className="p-3">Buyer</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-2xl border p-5 bg-white shadow-sm">
              <h3 className="font-semibold text-foreground">Transfer Tax (Overdrachtsbelasting)</h3>
              <p className="mt-2 text-foreground/80 leading-7">
                Transfer tax is charged at 3% for property values up to AWG 250,000 (approx. US$138,889). For values above that, 6% applies to the excess amount.
              </p>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Total buyer-side costs are often in the 5–12% range of the purchase price. Property insurance is usually required when financing with a mortgage.
            </p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Can I buy property in Aruba without living there?', a: 'Yes. You do not need to be a resident. Many international buyers own vacation homes or rental properties in Aruba without being residents.' },
                { q: 'What is the difference between lease land and freehold land?', a: 'Lease land is owned by the government and leased to you (typically 60 years) with an annual fee. Freehold means you own both land and property outright.' },
                { q: 'Can I get a mortgage in Aruba as a foreigner?', a: 'Yes. Aruba Bank and RBC Royal Bank offer mortgages for non-residents, usually requiring around 35% down payment. Terms may differ from residents.' },
                { q: 'How long does it take to buy property in Aruba?', a: 'Typically 3–6 weeks from accepted offer to deed transfer, once documents are complete.' },
                { q: 'Can foreigners buy land in their own name?', a: 'Yes. Property can be registered in your name or through a legal entity such as a company or trust.' },
                { q: 'How much deposit do I pay when buying property in Aruba?', a: 'Buyers typically pay around 10% when signing the purchase agreement. The exact amount can vary based on the contract.' },
                { q: 'What is the transfer tax in Aruba?', a: 'Transfer tax is 3% for property values up to AWG 250,000 (approx. US$138,889). For values above that, 6% applies to the excess amount.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'en'} keys={RELATED_KEYS.canForeignersMortgage} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'q1', label: 'Who Can Buy?' },
                { id: 'q2', label: 'Freehold vs Lease Land' },
                { id: 'why', label: 'Why Aruba Appeals' },
                { id: 'areas', label: 'Popular Areas' },
                { id: 'find', label: 'Where to Find Properties' },
                { id: 'q3', label: 'Due Diligence & Process' },
                { id: 'q4', label: 'Financing for Non-Residents' },
                { id: 'q5', label: 'Costs and Taxes' },
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
