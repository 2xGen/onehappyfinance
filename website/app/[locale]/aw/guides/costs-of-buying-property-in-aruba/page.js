import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import { getAlternateLanguages } from '@/i18n/config'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/costs%20of%20buyin%20gproperty%20in%20aruba.png'
const PATH = '/aw/guides/costs-of-buying-property-in-aruba'

export async function generateMetadata({ params }) {
  const resolved = await params
  const locale = resolved?.locale || 'en'
  const canonical = `https://onehappyfinance.com/${locale}${PATH}`
  return {
    title: 'Costs of Buying Property in Aruba (Taxes, Notary & Fees)',
    description: 'Full breakdown of costs when buying property in Aruba: closing costs 5–8%, transfer tax, notary fees, registration, and ongoing expenses. Taxes, mortgage fees, and annual costs explained.',
    keywords: [
      'costs of buying property in Aruba',
      'Aruba closing costs',
      'transfer tax Aruba',
      'notary fees Aruba',
      'property purchase costs Aruba',
      'Aruba property tax',
      'buying property Aruba fees',
    ],
    alternates: {
      canonical,
      languages: getAlternateLanguages(PATH),
    },
    openGraph: {
      title: 'Costs of Buying Property in Aruba (Taxes, Notary & Fees)',
      description: 'Closing costs, transfer tax, notary fees, and ongoing expenses when buying property in Aruba. Full cost breakdown.',
      type: 'article',
      url: canonical,
      images: [{ url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Costs of Buying Property in Aruba' }],
    },
  }
}

function BreadcrumbSchema({ locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://onehappyfinance.com/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `https://onehappyfinance.com/${locale}/aw/guides` },
      { '@type': 'ListItem', position: 3, name: 'Costs of Buying Property in Aruba', item: `https://onehappyfinance.com/${locale}${PATH}` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema({ locale }) {
  const pageUrl = `https://onehappyfinance.com/${locale}${PATH}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Costs of Buying Property in Aruba (Taxes, Notary & Fees)',
    image: [FEATURED_IMAGE],
    description: 'Full breakdown of costs when buying property in Aruba: closing costs 5–8%, transfer tax, notary fees, registration, and ongoing annual expenses.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

const FAQ_ITEMS = [
  { q: 'How much are closing costs when buying property in Aruba?', a: 'Total closing costs typically range between 5% and 8% of the purchase price, including transfer tax, notary fees, and registration. With financing or complex structures, costs may be slightly higher.' },
  { q: 'What is the transfer tax in Aruba?', a: 'Transfer tax is 3% for properties under AWG 250,000 and 6% for properties above that. It is calculated on the purchase price in the deed.' },
  { q: 'Who pays notary fees in Aruba?', a: 'Notary fees are typically paid by the buyer unless otherwise negotiated. They usually range from about 0.5% to 3% of the purchase price for the transfer deed, plus additional fees if a mortgage is registered.' },
  { q: 'Do foreign buyers pay more when buying property in Aruba?', a: 'No. Residents and non-residents follow the same legal process and pay the same transfer taxes and notary fees. There are no extra purchase taxes for foreign buyers.' },
  { q: 'How long does the closing process take in Aruba?', a: 'From signed purchase agreement to final transfer, the process typically takes approximately 8–12 weeks, depending on mortgage approval, compliance checks, and transaction complexity.' },
]

function FaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default async function Page({ params }) {
  const resolved = await params
  const locale = resolved?.locale || 'en'

  return (
    <article className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
      <ArticleSchema locale={locale} />
      <FaqSchema />
      <BreadcrumbSchema locale={locale} />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-lg bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="relative aspect-[16/9] w-full">
          <Image src={FEATURED_IMAGE} alt="Costs of Buying Property in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Costs of Buying Property in Aruba (Taxes, Notary & Fees)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">
            If you are planning to buy property in Aruba, understanding the full cost structure is essential. This guide explains closing costs, transfer tax, notary fees, and ongoing annual expenses.
          </p>
          <Breadcrumbs />
        </div>
      </section>

      {/* INTRO */}
      <section className="mt-12 rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
        <p className="text-foreground/80 leading-7 md:leading-8">
          If you are planning to buy property in Aruba, understanding the full cost structure is essential before making an offer. Beyond the purchase price, buyers must account for transfer tax, notary fees, registration costs, and ongoing annual expenses.
        </p>
        <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
          This guide explains all costs associated with buying property in Aruba — including closing costs, taxes, mortgage-related fees, and yearly ownership expenses.
        </p>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="closing-costs" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">How Much Are Closing Costs in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In most cases, total closing costs range between <strong>5% and 8%</strong> of the purchase price. In transactions involving financing or complex structures, costs may reach slightly higher.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              These costs are typically paid by the buyer unless otherwise negotiated.
            </p>
          </section>

          <section id="transfer-tax" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Transfer Tax (Overdrachtsbelasting)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Transfer tax is a one-time government tax paid when ownership is transferred.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8 font-semibold">Current rates:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>3%</strong> for properties valued under AWG 250,000</li>
              <li><strong>6%</strong> for properties valued above AWG 250,000</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              This tax is calculated based on the purchase price stated in the deed of transfer. Transfer tax is usually the largest portion of closing costs.
            </p>
          </section>

          <section id="notary-fees" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Notary Fees</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In Aruba, only a licensed notary can legally transfer property ownership. Notary involvement is mandatory.
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Transfer Deed Fee</h3>
                <p className="mt-2 text-foreground/80 leading-7">Typically ranges between 0.5% and 3% of the purchase price, depending on complexity.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Mortgage Deed Fee (If Financing)</h3>
                <p className="mt-2 text-foreground/80 leading-7">If a mortgage is registered, an additional 0.5% to 2% may apply.</p>
              </div>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Notary fees often include:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Drafting the deed of transfer</li>
              <li>Registering the deed</li>
              <li>Due diligence checks</li>
              <li>Escrow management</li>
              <li>Administrative and registry costs</li>
            </ul>
          </section>

          <section id="registration" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Registration and Administrative Costs</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Registration fees with the public registry are generally included within the notary&apos;s invoice but form part of your total closing expenses.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The notary verifies:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Legal ownership</li>
              <li>Existing liens or debts</li>
              <li>Unpaid property taxes</li>
              <li>Compliance documentation (KYC)</li>
            </ul>
          </section>

          <section id="deposit" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Deposit Requirement</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              After signing the purchase agreement, buyers are typically required to deposit <strong>10% of the purchase price</strong> into the notary&apos;s escrow account within approximately 10 business days.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              This deposit secures the transaction and is credited toward the final purchase price at closing.
            </p>
          </section>

          <section id="agent-commission" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Real Estate Agent Commission</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Agent commissions in Aruba are generally <strong>2% to 3%</strong> of the purchase price.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              In most transactions, the seller pays the commission — not the buyer.
            </p>
          </section>

          <section id="example" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Total Estimated Purchase Costs Example</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">For a property valued at AWG 500,000:</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Transfer tax (6%): AWG 30,000</li>
              <li>Notary &amp; registration (approx. 1.5%–3%): AWG 7,500–15,000</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              <strong>Total estimated closing costs:</strong> Approximately AWG 37,500–45,000. This equals roughly 7%–9% of the purchase price.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Actual amounts depend on transaction details and financing structure.
            </p>
          </section>

          <section id="ongoing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Ongoing Costs After Purchase</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Owning property in Aruba also involves recurring yearly expenses.
            </p>
          </section>

          <section id="property-tax" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Annual Property Tax (Grondbelasting)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Aruba applies annual land tax based on the government-assessed value of the property.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Rates generally range from:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>0% on lower-valued properties</li>
              <li>Up to approximately 0.6% on higher-valued properties</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Many mid-range residential properties effectively fall around the 0.2%–0.4% range, depending on assessment.
            </p>
          </section>

          <section id="lease-land" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Lease Land Fees (If Applicable)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">If the property is built on lease land (long lease / erfpacht):</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>The land remains government-owned.</li>
              <li>A yearly lease fee (canon) is payable.</li>
              <li>Lease terms are typically 60 years and renewable.</li>
              <li>Renewal may involve adjusted lease rates.</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Freehold properties do not carry this fee.</p>
          </section>

          <section id="mortgage-costs" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Mortgage Costs (If Financing)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">If you finance the property:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Local banks often require higher down payments for non-residents.</li>
              <li>Mortgage interest rates typically range between 5% and 7%, subject to change.</li>
              <li>Banks may charge approximately 1% mortgage arrangement fees.</li>
              <li>Monthly payments include principal and interest.</li>
            </ul>
          </section>

          <section id="insurance" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Home Insurance</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Property insurance is strongly recommended.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Coverage typically includes:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Fire</li>
              <li>Theft</li>
              <li>Natural disasters</li>
              <li>Liability protection</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Premiums vary depending on property value, location, and coverage level.</p>
          </section>

          <section id="maintenance" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Maintenance Costs</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruba&apos;s climate requires regular property maintenance.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Factors affecting maintenance:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Salt air exposure near the ocean</li>
              <li>Strong sun and heat</li>
              <li>Air-conditioning wear</li>
              <li>Electrical fluctuations</li>
              <li>Garden growth year-round</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Air conditioners and appliances may have shorter lifespans compared to cooler climates. Budgeting for ongoing maintenance is essential.
            </p>
          </section>

          <section id="hoa" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. HOA or Association Fees</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              If purchasing a condominium or property within a gated community, monthly or yearly HOA fees apply.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Fees may cover:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Pool maintenance</li>
              <li>Landscaping</li>
              <li>Security</li>
              <li>Exterior insurance</li>
              <li>Waste collection</li>
              <li>Common area utilities</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">HOA fees vary widely depending on the community and amenities.</p>
          </section>

          <section id="timeline" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">How Long Does the Closing Process Take?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              From signed purchase agreement to final transfer: <strong>approximately 8–12 weeks</strong>.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">This timeline may vary depending on:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Mortgage approval</li>
              <li>Compliance checks</li>
              <li>Property type</li>
              <li>Complexity of transaction</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              The notary conducts due diligence through the Land Registry and Public Records before finalizing the transfer.
            </p>
          </section>

          <section id="foreign-buyers" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Do Foreign Buyers Pay More?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8"><strong>No.</strong></p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Residents and non-residents follow the same legal process and pay the same transfer taxes and notary fees. There are no special restrictions or additional purchase taxes for foreign buyers in Aruba.
            </p>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Final Thoughts</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              When buying property in Aruba, understanding both the upfront purchase costs and the ongoing ownership expenses is critical for proper financial planning.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Most buyers should budget between 5% and 8% in closing costs, plus annual property tax, maintenance, and any applicable mortgage or association fees.
            </p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Proper preparation ensures a smooth and transparent transaction in Aruba&apos;s stable real estate market.
            </p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'en'} keys={RELATED_KEYS.costs} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'closing-costs', label: 'Closing costs overview' },
                { id: 'transfer-tax', label: 'Transfer tax' },
                { id: 'notary-fees', label: 'Notary fees' },
                { id: 'registration', label: 'Registration costs' },
                { id: 'deposit', label: 'Deposit requirement' },
                { id: 'agent-commission', label: 'Agent commission' },
                { id: 'example', label: 'Cost example' },
                { id: 'ongoing', label: 'Ongoing costs' },
                { id: 'property-tax', label: 'Property tax' },
                { id: 'lease-land', label: 'Lease land fees' },
                { id: 'mortgage-costs', label: 'Mortgage costs' },
                { id: 'insurance', label: 'Home insurance' },
                { id: 'maintenance', label: 'Maintenance' },
                { id: 'hoa', label: 'HOA fees' },
                { id: 'timeline', label: 'Closing timeline' },
                { id: 'foreign-buyers', label: 'Foreign buyers' },
                { id: 'final', label: 'Final thoughts' },
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
