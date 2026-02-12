import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/property%20in%20aruba.png'

export const metadata = {
  title: 'Buying Property in Aruba: Step-by-Step Overview (2026 Guide)',
  description: 'Full step-by-step process for buying property in Aruba: legal requirements, costs, taxes, financing, freehold vs lease land. Updated for 2026.',
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/buying-property-in-aruba',
  },
  openGraph: {
    title: 'Buying Property in Aruba: Step-by-Step Overview (2026 Guide)',
    description: 'Full step-by-step process for buying property in Aruba: legal requirements, costs, taxes, financing, freehold vs lease land.',
    type: 'article',
    images: [
      {
        url: FEATURED_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Buying Property in Aruba: Step-by-Step Overview (2026 Guide)',
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
      { '@type': 'ListItem', position: 3, name: 'Buying Property in Aruba: Step-by-Step Overview (2026 Guide)', item: `https://onehappyfinance.com/${locale}/aw/guides/buying-property-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Buying Property in Aruba: Step-by-Step Overview (2026 Guide)',
    image: [FEATURED_IMAGE],
    description: 'Full step-by-step process for buying property in Aruba: legal requirements, costs, taxes, financing, freehold vs lease land.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/buying-property-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How long does it take to buy property in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'The notary process typically takes 8–12 weeks from accepted offer to final transfer, depending on complexity.' } },
      { '@type': 'Question', name: 'What is the transfer tax when buying property in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Transfer tax is 3% for values up to AWG 250,000; 6% applies to the excess above that.' } },
      { '@type': 'Question', name: 'Can foreigners buy property in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. There are no citizenship or residency requirements; foreigners can buy under the same legal framework as residents.' } },
      { '@type': 'Question', name: 'How much deposit do I pay when buying property in Aruba?', acceptedAnswer: { '@type': 'Answer', text: 'Buyers typically pay around 10% when signing the purchase agreement.' } },
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
          <Image src={FEATURED_IMAGE} alt="Buying Property in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Buying Property in Aruba: Step-by-Step Overview (2026 Guide)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">This guide explains the full step-by-step process of buying property in Aruba, including legal requirements, costs, taxes, financing, and key differences like freehold vs lease land.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* INTRO */}
      <section className="mt-12 rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
        <p className="text-foreground/80 leading-7 md:leading-8">
          Buying property in Aruba can be an exciting opportunity — whether you&apos;re relocating, purchasing a vacation home, or investing in rental real estate. The island offers stable property rights, clear legal procedures, and ownership options for both residents and foreign buyers.
        </p>
        <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
          This guide explains the full step-by-step process of buying property in Aruba, including legal requirements, costs, taxes, financing, and key differences like freehold vs lease land.
        </p>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="foreigners" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Can Foreigners Buy Property in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Yes. Aruba allows both residents and non-residents to purchase property. There are no restrictions on foreign ownership of real estate.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Non-residents can typically stay in Aruba for up to 180 days per year without a residency permit, but owning property does not automatically grant residency.
            </p>
          </section>

          <section id="step1" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Step 1: Determine Your Budget</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Before starting your property search, define:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Total purchase budget</li>
              <li>Whether you will buy with cash or financing</li>
              <li>Estimated closing costs (typically 5%–8% of purchase price)</li>
              <li>Ongoing annual property taxes</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              If financing through a local bank, down payments are often higher for non-residents.
            </p>
          </section>

          <section id="step2" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Step 2: Choose the Type of Property</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba offers several property types:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Single-family homes</li>
              <li>Condominiums</li>
              <li>Beachfront villas</li>
              <li>Pre-construction developments</li>
              <li>Investment rental properties</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Location matters significantly. Popular areas include:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Palm Beach</li>
              <li>Eagle Beach</li>
              <li>Noord</li>
              <li>Oranjestad</li>
              <li>Malmok</li>
              <li>Savaneta</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Each area has different pricing, rental demand, and lifestyle characteristics.
            </p>
          </section>

          <section id="step3" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Step 3: Make an Offer and Sign a Purchase Agreement</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Once you find a property:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>A written offer is submitted.</li>
              <li>If accepted, a purchase agreement is drafted.</li>
              <li>Both buyer and seller sign the agreement.</li>
              <li>The agreement is forwarded to a notary.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In many cases, buyers must deposit 10% of the purchase price with the notary within approximately 10 business days. This deposit is usually held in escrow.
            </p>
          </section>

          <section id="step4" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Step 4: Compliance and Due Diligence (KYC)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba requires compliance procedures under Know Your Customer (KYC) regulations. You may need to provide:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Valid passport or ID</li>
              <li>Proof of address</li>
              <li>Proof of funds or mortgage approval</li>
              <li>Bank documentation</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              This ensures legal transparency and prevents fraudulent transactions.
            </p>
          </section>

          <section id="step5" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Step 5: The Role of the Notary in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In Aruba, only a licensed notary can legally transfer property ownership. The notary:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Verifies ownership</li>
              <li>Checks for liens or debts on the property</li>
              <li>Confirms unpaid taxes</li>
              <li>Prepares the transfer deed</li>
              <li>Manages escrow funds</li>
              <li>Registers the property transfer</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              The notary process typically takes 8–12 weeks, depending on complexity.
            </p>
          </section>

          <section id="step6" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Step 6: Ownership Transfer</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Once all checks are complete:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>The final deed is signed before the notary.</li>
              <li>Remaining funds are transferred.</li>
              <li>The property is officially registered in the buyer&apos;s name.</li>
              <li>Ownership is recorded in Aruba&apos;s public registry.</li>
            </ul>
          </section>

          <section id="freehold" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Freehold vs Lease Land in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              When buying property in Aruba, you may encounter two types of land ownership:
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Freehold (Eigendom)</h3>
                <p className="mt-2 text-foreground/80 leading-7">You fully own both the land and the structure.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Lease Land (Erfpacht)</h3>
                <p className="mt-2 text-foreground/80 leading-7">The land is owned by the government and leased to you for a long period (commonly 60 years, renewable). Lease land may involve annual fees and renewal procedures.</p>
              </div>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Financing terms can differ between freehold and lease land properties. Understanding this distinction is essential before purchasing.
            </p>
          </section>

          <section id="costs" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Costs of Buying Property in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In addition to the purchase price, buyers should budget for:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Transfer Tax</strong> — 3% for properties valued under AWG 250,000; 6% for properties above AWG 250,000</li>
              <li><strong>Notary Fees</strong> — Usually range between 0.5% and 3% depending on transaction complexity.</li>
              <li><strong>Mortgage Deed Costs</strong> (if financing) — Additional fees apply if registering a mortgage.</li>
              <li><strong>Total Closing Costs</strong> — Typically range between 5% and 8% of the purchase price.</li>
            </ul>
          </section>

          <section id="taxes" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Property Taxes in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba applies annual land tax (grondbelasting) based on assessed property value. Rates generally range from 0% on lower values up to approximately 0.6% for higher-value properties. Exact rates depend on government-assessed value.
            </p>
          </section>

          <section id="financing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Financing Options</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              <strong>Cash Purchase</strong> — Common among foreign buyers.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              <strong>Local Mortgage</strong> — Available through Aruban banks. Requirements vary, but often include:
            </p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Proof of income</li>
              <li>Down payment (often higher for non-residents)</li>
              <li>Interest rates commonly between 5%–7% (subject to change)</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Mortgage approval timelines vary but can take several weeks.
            </p>
          </section>

          <section id="timeline" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Timeline Overview</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              From accepted offer to final transfer: approximately 8–12 weeks. This may vary depending on mortgage approval, compliance checks, property type, and pre-construction vs resale.
            </p>
          </section>

          <section id="considerations" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Important Considerations Before Buying</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Understand zoning rules if planning renovations.</li>
              <li>Check HOA fees for condominiums.</li>
              <li>Confirm rental regulations if buying for Airbnb or long-term rental.</li>
              <li>Review insurance requirements (home insurance is strongly recommended).</li>
            </ul>
          </section>

          <section id="investment" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Is Buying Property in Aruba a Good Investment?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba has a stable tourism-driven economy and consistent demand for vacation rentals and second homes. However, investment returns depend heavily on location, rental demand, property type, financing structure, and management costs. Due diligence is essential.
            </p>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Final Thoughts</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Buying property in Aruba is a structured and transparent process when you understand the steps involved. Whether you&apos;re a resident, expat, or international buyer, preparation and clarity are key.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Understanding ownership structures, costs, taxes, and financing options will help you make a confident and informed decision.
            </p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'How long does it take to buy property in Aruba?', a: 'The notary process typically takes 8–12 weeks from accepted offer to final transfer, depending on complexity.' },
                { q: 'What is the transfer tax when buying property in Aruba?', a: 'Transfer tax is 3% for properties valued under AWG 250,000; 6% for properties above AWG 250,000.' },
                { q: 'Can foreigners buy property in Aruba?', a: 'Yes. Aruba allows both residents and non-residents to purchase property with no restrictions on foreign ownership.' },
                { q: 'How much deposit do I pay when buying property in Aruba?', a: 'In many cases, buyers deposit 10% of the purchase price with the notary within approximately 10 business days. This is usually held in escrow.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'en'} keys={RELATED_KEYS.buyingProperty} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'foreigners', label: 'Can Foreigners Buy?' },
                { id: 'step1', label: 'Step 1: Budget' },
                { id: 'step2', label: 'Step 2: Type of Property' },
                { id: 'step3', label: 'Step 3: Offer & Agreement' },
                { id: 'step4', label: 'Step 4: KYC' },
                { id: 'step5', label: 'Step 5: Notary' },
                { id: 'step6', label: 'Step 6: Ownership Transfer' },
                { id: 'freehold', label: 'Freehold vs Lease' },
                { id: 'costs', label: 'Costs' },
                { id: 'taxes', label: 'Property Taxes' },
                { id: 'financing', label: 'Financing' },
                { id: 'timeline', label: 'Timeline' },
                { id: 'considerations', label: 'Considerations' },
                { id: 'investment', label: 'Good Investment?' },
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
