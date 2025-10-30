import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png'

export const metadata = {
  title: 'Can Foreigners Buy Property in Aruba? [2025 Guide]',
  description: 'Yes—foreigners can buy property in Aruba. Learn freehold vs. lease land, legal process, financing options, costs, and FAQs in this 2025 guide.',
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide',
  },
  openGraph: {
    title: 'Can Foreigners Buy Property in Aruba? [2025 Guide]',
    description: 'Ownership rules, freehold vs. lease land, financing, legal process, costs, and FAQs for international buyers.',
    type: 'article',
    images: [
      {
        url: FEATURED_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Can Foreigners Buy Property in Aruba? [2025 Guide]',
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
      { '@type': 'ListItem', position: 3, name: 'Can Foreigners Buy Property in Aruba? [2025 Guide]', item: `https://onehappyfinance.com/${locale}/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Can Foreigners Buy Property in Aruba? [2025 Guide]',
    image: [FEATURED_IMAGE],
    description: 'Yes—foreigners can buy property in Aruba. Learn freehold vs. lease land, legal process, financing options, costs, and FAQs in this 2025 guide.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide' },
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
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Can Foreigners Buy Property in Aruba? [2025 Guide]</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Yes—foreigners can buy property in Aruba. Here’s how it works.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="q1" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Can Foreigners Buy Property in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Yes. The Government of Aruba welcomes foreign investment in real estate. There are no restrictions on foreigners purchasing property, whether it’s a condo, house, or land. The legal process mirrors that for citizens; financing and land type are the main differences.</p>
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

          <section id="q3" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Legal Process for Buying Property in Aruba</h2>
            <ol className="mt-4 list-decimal pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Sign a Purchase Agreement</li>
              <li>Notary involvement (civil law notary handles transfer)</li>
              <li>Title search and due diligence</li>
              <li>Payment and transfer (deed signed and registered)</li>
            </ol>
            <p className="mt-3 text-foreground/80 leading-7">Average timeline: 3–6 weeks from offer acceptance to deed transfer, assuming documents are complete.</p>
          </section>

          <section id="q4" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Can Non-Residents Get a Mortgage in Aruba?</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aruba Bank – Platinum Mortgage</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Designed for foreigners buying homes/condos</li>
                  <li>Annuity mortgage; personal account manager</li>
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
              <h3 className="m-0 font-semibold">Common documents</h3>
              <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                <li>Passport copy</li>
                <li>Proof of income (payslips, tax returns)</li>
                <li>Bank reference letter</li>
                <li>Credit score report (home country)</li>
                <li>Appraisal by licensed Aruban appraiser</li>
              </ul>
            </div>
          </section>

          <section id="q5" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Costs to Consider</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Transfer tax: ~3–6%</li>
              <li>Notary fees: ~1–2%</li>
              <li>Appraisal fees</li>
              <li>Lease fee (if applicable)</li>
              <li>Property insurance (often required for mortgage)</li>
            </ul>
          </section>

          <section id="q6" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Why Aruba is a Great Place to Invest</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Stable economy and politics (Kingdom of the Netherlands)</li>
              <li>No restrictions on foreign ownership</li>
              <li>Strong tourism sector for rentals</li>
              <li>USD widely accepted</li>
              <li>Modern infrastructure and high living standards</li>
            </ul>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Can I buy property in Aruba without living there?', a: 'Yes. You do not need to be a resident to buy property. Many international buyers own vacation homes or rental properties in Aruba.' },
                { q: 'What is the difference between lease land and freehold land?', a: 'Lease land is owned by the government but leased to you for long-term use (typically 60 years) with a small annual fee. Freehold means you own both the land and the property outright.' },
                { q: 'Can I get a mortgage in Aruba as a foreigner?', a: 'Yes. Aruba Bank and RBC Royal Bank offer mortgages for non-residents, usually requiring around 35% down payment.' },
                { q: 'How long does it take to buy property in Aruba?', a: 'Typically 3–6 weeks once documents are complete and the offer is accepted.' },
                { q: 'Can foreigners buy land in their own name?', a: 'Yes. Property can be registered directly in your name or through a legal entity such as a company or trust.' },
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
                { id: 'q1', label: 'Can Foreigners Buy?' },
                { id: 'q2', label: 'Freehold vs Lease Land' },
                { id: 'q3', label: 'Legal Process' },
                { id: 'q4', label: 'Non-Resident Mortgages' },
                { id: 'q5', label: 'Costs' },
                { id: 'q6', label: 'Why Aruba' },
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
