import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/What%20Is%20an%20Annuity%20Mortgage%20and%20How%20Does%20It%20Work%20in%20Aruba.png'

export const metadata = {
  title: 'What Is an Annuity Mortgage in Aruba? | How It Works (2025 Guide)',
  description: 'Understand annuity mortgages in Aruba: how payments work, pros & cons, eligibility, example calculation, and FAQs.',
  keywords: [
    'annuity mortgage Aruba',
    'Aruba mortgage types',
    'how annuity mortgage works Aruba',
    'Aruba home loan annuity',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/what-is-an-annuity-mortgage-in-aruba',
  },
  openGraph: {
    title: 'What Is an Annuity Mortgage in Aruba? | How It Works (2025 Guide)',
    description: 'A clear guide to annuity mortgages in Aruba with examples and FAQs.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Annuity Mortgage in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Annuity Mortgage in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/what-is-an-annuity-mortgage-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is an Annuity Mortgage in Aruba? | How It Works (2025 Guide)',
    image: [FEATURED_IMAGE],
    description: 'Understand annuity mortgages in Aruba: how payments work, pros & cons, eligibility, example calculation, and FAQs.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/what-is-an-annuity-mortgage-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Is an annuity mortgage common in Aruba?', a: 'Yes. It is one of the most common structures offered by major lenders like Aruba Bank and RBC.' },
    { q: 'Do payments change over time?', a: 'The total monthly payment stays the same, but the interest portion decreases and principal increases over time.' },
    { q: 'Can non-residents get an annuity mortgage?', a: 'Yes, subject to higher down payment and documentation requirements.' },
    { q: 'What currencies are used?', a: 'USD and AWG are both commonly used. Check your lender’s terms.' },
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
          <Image src={FEATURED_IMAGE} alt="Annuity Mortgage in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Mortgages</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">What Is an Annuity Mortgage and How Does It Work in Aruba?</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">A clear explanation of how annuity mortgages work in Aruba, with pros & cons and a simple example.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="what" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) What Is an Annuity Mortgage?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">An annuity mortgage is a loan where you repay with a fixed total monthly payment. Early on, payments are mostly interest; over time, the principal share grows while interest shrinks. The total payment stays constant, making budgeting predictable.</p>
          </section>

          <section id="how" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) How Do Payments Work in Aruba?</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Fixed total monthly payment over the term (annuity structure).</li>
              <li>Interest portion declines each month as the outstanding balance decreases.</li>
              <li>Principal portion rises, accelerating equity build-up.</li>
              <li>Typically offered in USD or AWG; terms up to 30 years for residents.</li>
            </ul>
          </section>

          <section id="proscons" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Pros</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Predictable monthly payment simplifies budgeting.</li>
                  <li>Principal increases over time, building equity faster later.</li>
                  <li>Common product — easy to compare across banks.</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Cons</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>You pay more interest in the early years.</li>
                  <li>Fixed payments can be higher than interest-only initially.</li>
                  <li>Prepayment penalties can apply — always confirm with your lender.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="eligibility" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Who Is Eligible?</h2>
            <p className="mt-4 text-foreground/80 leading-7">Banks in Aruba assess income, credit history, debt-to-income ratio (often ≤ 40%), down payment, and property appraisal. Non-residents can qualify with higher down payments (often 35–40%) and additional documentation.</p>
          </section>

          <section id="example" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Example: Simple Annuity Payment</h2>
            <p className="mt-4 text-foreground/80 leading-7">Example with approximate numbers for illustration only:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Loan amount: USD 300,000</li>
              <li>Rate: 6.0% fixed</li>
              <li>Term: 25 years (300 months)</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Monthly payment ≈ USD 1,933. Over time, the interest share falls and principal share rises while the total stays ~1,933.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6) FAQs</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Can I make extra payments?', a: 'Usually yes, but prepayment terms vary by bank. Ask about penalties or annual free prepayment allowances.' },
                { q: 'Are rates fixed or variable?', a: 'Both exist. Many annuity mortgages are fixed for a period, then reset. Always confirm your product type.' },
                { q: 'Which banks offer annuity mortgages?', a: 'Major lenders like Aruba Bank and RBC Royal Bank offer them; terms differ for residents and non-residents.' },
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
                { id: 'what', label: 'What is it?' },
                { id: 'how', label: 'How payments work' },
                { id: 'proscons', label: 'Pros & Cons' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'example', label: 'Example' },
                { id: 'faq', label: 'FAQs' },
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
