import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20much%20can%20you%20borrow%20for%20a%20mortgage%20in%20aruba.png'

export const metadata = {
  title: 'How Much Can I Borrow for a Mortgage in Aruba? [2025 Guide]',
  description: 'How banks in Aruba calculate your borrowing power. Factors, example calculation, calculator links, tips, and FAQs.',
  keywords: [
    'mortgage calculator Aruba',
    'how much can I borrow Aruba',
    'borrowing power Aruba',
    'Aruba mortgage',
    'loan calculator Aruba',
    'down payment Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/how-much-can-you-borrow-in-aruba',
  },
  openGraph: {
    title: 'How Much Can I Borrow for a Mortgage in Aruba? [2025 Guide]',
    description: 'Learn how income, age, down payment, and property type affect your borrowing power in Aruba.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'How much can you borrow in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'How Much Can You Borrow in Aruba?', item: `https://onehappyfinance.com/${locale}/aw/guides/how-much-can-you-borrow-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Can I Borrow for a Mortgage in Aruba? [2025 Guide]',
    image: [FEATURED_IMAGE],
    description: 'Aruba mortgage borrowing power explained with factors, example, tips, and FAQ.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/how-much-can-you-borrow-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Can non-residents get a mortgage in Aruba?', a: 'Yes. Banco di Caribe and RBC Royal Bank offer non-resident mortgages, typically with 35–40% down payment.' },
    { q: 'How do banks determine maximum mortgage?', a: 'Banks assess income, age, existing obligations, down payment, and property type.' },
    { q: 'What is the difference between maximum loan and monthly payments?', a: 'Maximum loan is a theoretical cap. Your actual monthly payment must fit your budget and bank limits.' },
    { q: 'Can I increase my mortgage later?', a: 'Some banks allow refinancing or additional loans based on updated financials.' },
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
          <Image src={FEATURED_IMAGE} alt="How much can you borrow in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Mortgages</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">How Much Can You Borrow for a Mortgage in Aruba? [2025 Guide]</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">How banks calculate borrowing power in Aruba, with a clear example, calculator links, and tips.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="factors" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Factors That Determine How Much You Can Borrow</h2>
            <p className="mt-4 text-foreground/80 leading-7">Aruban lenders consider age, income, down payment, existing obligations, and property type/value.</p>
            <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><span className="font-semibold">Age at end of term</span> — maximum age often 65–70 at maturity.</li>
              <li><span className="font-semibold">Salary and income</span> — payslips; self-employed provide financials/tax returns.</li>
              <li><span className="font-semibold">Down payment</span> — residents ~10–25%; non-residents ~35–40%.</li>
              <li><span className="font-semibold">Existing obligations</span> — loans, cards, other monthly debts.</li>
              <li><span className="font-semibold">Property type and value</span> — LTV caps typically 65–90%.</li>
            </ul>
          </section>

          <section id="example" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Example Calculation of Borrowing Power</h2>
            <p className="mt-4 text-foreground/80 leading-7">Resident example: salary USD 3,500 monthly; target purchase USD 400,000.</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Down payment: 10% = USD 40,000</li>
              <li>Loan amount: USD 360,000</li>
              <li>Monthly payment (6%, 25-year annuity): ≈ USD 2,315</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7">Non-resident example (35% down payment):</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Down payment: USD 140,000</li>
              <li>Loan amount: USD 260,000</li>
              <li>Monthly payment: ≈ USD 1,678</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Exact figures depend on bank policies, rate, term, and your profile.</p>
          </section>

          <section id="calculator" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Use a Mortgage Calculator</h2>
            <p className="mt-4 text-foreground/80 leading-7">Use an online mortgage calculator to estimate your maximum loan and monthly payment. Enter your income, interest rate, term, and down payment to see how each factor changes your borrowing power. If you do not have a preferred calculator, search for “mortgage calculator” and choose a reputable tool that supports annuity payments.</p>
          </section>

          <section id="tips" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Tips to Increase Your Borrowing Capacity</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Reduce existing debts before applying.</li>
              <li>Increase your down payment to lower bank risk.</li>
              <li>Consider a longer term to reduce monthly payments.</li>
              <li>Non-residents can apply with major banks while living abroad.</li>
            </ul>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Frequently Asked Questions (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Can non-residents get a mortgage in Aruba?', a: 'Yes. Banco di Caribe and RBC Royal Bank offer non-resident options, often with 35–40% down payment.' },
                { q: 'How do banks determine my maximum?', a: 'Based on income, age, obligations, down payment, and property type/value.' },
                { q: 'Maximum loan vs monthly payment?', a: 'A maximum is a cap; monthly payments must still be affordable and within bank ratios.' },
                { q: 'Can I increase the mortgage later?', a: 'Refinancing or additional loans may be possible depending on the bank and your profile.' },
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
                { id: 'factors', label: 'Key factors' },
                { id: 'example', label: 'Example' },
                { id: 'calculator', label: 'Mortgage calculator' },
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
