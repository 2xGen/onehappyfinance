import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/What%20Is%20an%20Annuity%20Mortgage%20and%20How%20Does%20It%20Work%20in%20Aruba.png'

export const metadata = {
  title: 'What Is an Annuity Mortgage in Aruba? | How It Works, Pros & Cons',
  description: 'Annuity mortgage in Aruba: fixed monthly payments, interest deduction in early years, annuity vs life mortgage. Aruba Bank, ENNIA, RBC. Term up to 30 years or age 62.',
  keywords: [
    'annuity mortgage Aruba',
    'Aruba annuity mortgage',
    'Aruba mortgage types',
    'how annuity mortgage works Aruba',
    'Aruba Bank annuity mortgage',
    'ENNIA annuity mortgage',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/what-is-an-annuity-mortgage-in-aruba',
  },
  openGraph: {
    title: 'What Is an Annuity Mortgage in Aruba? | How It Works, Pros & Cons',
    description: 'Fixed monthly payments, interest deduction in early years, annuity vs life mortgage. Aruba Bank, ENNIA, RBC.',
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
    headline: 'What Is an Annuity Mortgage in Aruba? | How It Works, Pros & Cons',
    image: [FEATURED_IMAGE],
    description: 'Annuity mortgage in Aruba: fixed monthly payments, interest deduction in early years, annuity vs life mortgage. Aruba Bank, ENNIA, RBC.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/what-is-an-annuity-mortgage-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'What is an annuity mortgage in Aruba?', a: 'An annuity mortgage offers fixed monthly payments of principal plus interest. As the outstanding balance decreases, the interest portion falls and the principal portion rises, while the total payment stays the same.' },
    { q: 'Is an annuity mortgage common in Aruba?', a: 'Yes. It is the most common mortgage type offered by Aruba Bank, ENNIA, and RBC Royal Bank.' },
    { q: 'What is the difference between annuity and life mortgage in Aruba?', a: 'Annuity: fixed monthly principal plus interest. Life: interest-only payments, with life insurance to save for the principal, repaid at maturity. Life mortgages often offer maximum tax benefit.' },
    { q: 'What is the maximum term for an Aruba annuity mortgage?', a: 'Typically up to 30 years or until age 62, whichever comes first.' },
    { q: 'What expenses are related to an Aruba mortgage?', a: 'Closing fees, notary costs, transfer taxes (3% up to AWG 250,000; 6% above that), and insurance premiums.' },
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
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Fixed monthly payments, interest deduction in early years, annuity vs life mortgage. Aruba Bank, ENNIA, RBC. Term up to 30 years or age 62.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="what" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) What Is an Annuity Mortgage in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The annuity mortgage is the most common type of mortgage loan in Aruba. It offers a fixed monthly payment for a fixed period. Each payment consists of principal and interest; interest is calculated on the outstanding balance. As the balance reduces, the interest portion shrinks and the principal portion grows, while the total monthly payment stays the same.</p>
          </section>

          <section id="how" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) How Do Payments Work?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">In the early years, you benefit from a higher interest deduction, so your net costs start relatively low. Later in the term, as the interest portion decreases, your net monthly payments rise. The gross monthly payment, however, stays nearly the same throughout the loan.</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Fixed total monthly payment over the term</li>
              <li>Interest calculated on outstanding balance</li>
              <li>Principal share rises as balance falls; interest share falls</li>
              <li>Typically offered in USD or AWG; terms up to 30 years or age 62</li>
            </ul>
          </section>

          <section id="types" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Annuity vs Life Mortgage in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruban banks typically offer two main mortgage types. Understanding both helps you choose the right fit.</p>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Annuity Mortgage</h3>
                <p className="mt-2 text-foreground/80 leading-7">Fixed monthly payment of principal plus interest. As the balance reduces, interest falls and principal rises. The most common type—predictable and straightforward.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Life Mortgage</h3>
                <p className="mt-2 text-foreground/80 leading-7">During the term you pay interest only. You take out life insurance to save for the principal, which is repaid at maturity. This type often offers maximum tax benefit over the life of the loan.</p>
              </div>
            </div>
          </section>

          <section id="proscons" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Why Choose an Annuity Mortgage?</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Benefits</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li><strong>Predictability:</strong> Fixed monthly payments so you know what to expect</li>
                  <li><strong>Lower initial costs:</strong> Higher interest deduction in early years lowers net costs at the start</li>
                  <li><strong>Competitive rates:</strong> Many Aruban lenders offer competitive annuity mortgage rates</li>
                  <li><strong>Flexible terms:</strong> Choose repayment periods that fit your situation</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Things to Consider</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Net monthly payments rise over time as the interest portion falls</li>
                  <li>Fixed payments can be higher than interest-only products initially</li>
                  <li>Prepayment penalties may apply—confirm with your lender</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="costs" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) What Does an Annuity Mortgage Cost?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Your monthly payment depends on the interest rate and loan amount. Mortgage advisors can help you explore the best options for your situation. Besides the monthly payment, plan for these expenses:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Closing fee</li>
              <li>Notary costs</li>
              <li>Transfer taxes: 3% for amounts up to AWG 250,000; 6% for amounts above that</li>
              <li>Insurance premiums</li>
            </ul>
          </section>

          <section id="eligibility" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6) Who Is Eligible?</h2>
            <p className="mt-4 text-foreground/80 leading-7">Banks in Aruba assess income, credit history, debt-to-income ratio (often ≤ 40%), down payment, and property appraisal. Non-residents can qualify with higher down payments (often 35–40%) and additional documentation.</p>
          </section>

          <section id="example" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7) Example: Simple Annuity Payment</h2>
            <p className="mt-4 text-foreground/80 leading-7">Example with approximate numbers for illustration only:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Loan amount: USD 300,000</li>
              <li>Rate: 6.0% fixed</li>
              <li>Term: 25 years (300 months)</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Monthly payment ≈ USD 1,933. Over time, the interest share falls and principal share rises while the total stays ~1,933.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8) FAQs</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'What is an annuity mortgage in Aruba?', a: 'An annuity mortgage offers fixed monthly payments of principal plus interest. As the outstanding balance decreases, the interest portion falls and the principal portion rises, while the total payment stays the same.' },
                { q: 'What is the difference between annuity and life mortgage?', a: 'Annuity: fixed monthly principal plus interest. Life: interest-only payments, with life insurance to save for the principal, repaid at maturity. Life mortgages often offer maximum tax benefit.' },
                { q: 'What is the maximum term for an Aruba annuity mortgage?', a: 'Typically up to 30 years or until age 62, whichever comes first.' },
                { q: 'Which banks offer annuity mortgages in Aruba?', a: 'Aruba Bank, ENNIA, and RBC Royal Bank offer annuity mortgages. Terms differ for residents and non-residents.' },
                { q: 'What expenses are related to an Aruba mortgage?', a: 'Closing fees, notary costs, transfer taxes (3% up to AWG 250,000; 6% above that), and insurance premiums.' },
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
                { id: 'types', label: 'Annuity vs Life' },
                { id: 'proscons', label: 'Why choose it' },
                { id: 'costs', label: 'Costs' },
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
