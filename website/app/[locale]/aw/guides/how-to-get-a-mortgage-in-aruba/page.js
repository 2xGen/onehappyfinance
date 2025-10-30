import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20to%20Get%20a%20Mortgage%20in%20Aruba.png'

export const metadata = {
  title: 'How to Get a Mortgage in Aruba: Step-by-Step Guide',
  description: 'Learn how to get a mortgage in Aruba with this step-by-step guide. Understand requirements, documents, lenders, costs, and timelines to finance property on the island.',
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/how-to-get-a-mortgage-in-aruba',
  },
  openGraph: {
    title: 'How to Get a Mortgage in Aruba: Step-by-Step Guide',
    description: 'Requirements, documents, lenders, costs, and timelines to finance property in Aruba.',
    type: 'article',
    images: [
      {
        url: FEATURED_IMAGE,
        width: 1200,
        height: 630,
        alt: 'How to Get a Mortgage in Aruba',
      },
    ],
  },
}

function BreadcrumbSchema({ locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://onehappyfinance.com/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Guides',
        item: `https://onehappyfinance.com/${locale}/aw/guides`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'How to Get a Mortgage in Aruba',
        item: `https://onehappyfinance.com/${locale}/aw/guides/how-to-get-a-mortgage-in-aruba`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get a Mortgage in Aruba: Step-by-Step Guide',
    image: [FEATURED_IMAGE],
    description:
      'Learn how to get a mortgage in Aruba with this step-by-step guide. Understand requirements, documents, lenders, costs, and timelines to finance property on the island.',
    author: {
      '@type': 'Organization',
      name: 'OneHappyFinance',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OneHappyFinance',
      logo: {
        '@type': 'ImageObject',
        url: FEATURED_IMAGE,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://onehappyfinance.com/en/aw/guides/how-to-get-a-mortgage-in-aruba',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

function FaqSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can foreigners get a mortgage in Aruba?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. Many local banks offer mortgages to non-residents and expats, subject to enhanced documentation and stricter loan-to-value ratios.',
        },
      },
      {
        '@type': 'Question',
        name: 'What down payment is typical in Aruba?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'A 20%–40% down payment is common, depending on your residency status, income, and the property type.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does mortgage approval take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Pre-approval can be issued within a few days. Full approval typically takes 2–6 weeks, assuming all documents are complete.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents will I need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Expect to provide identification, proof of income, bank statements, credit information, property details, purchase agreement, appraisal, and insurance evidence.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a notary in Aruba?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. Property transfers in Aruba are formalized by a civil-law notary who prepares the deed, performs title due diligence, and registers the transfer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I finance land only, or must it be a built property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Some lenders finance land-only purchases, but terms and LTV can be more conservative than for completed residential properties. Confirm product availability with your bank.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function Page({ params }) {
  return (
    <article className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
      <ArticleSchema />
      {/* Breadcrumb schema rendered with locale via client wrapper */}
      {/* We render schema twice would duplicate; inject below with locale-aware wrapper */}
      <FaqSchema />

      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-lg bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={FEATURED_IMAGE}
            alt="How to Get a Mortgage in Aruba"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">
            How to Get a Mortgage in Aruba: Step-by-Step Guide
          </h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">
            A practical guide to requirements, lenders, documents, costs, and timelines to finance property on the island.
          </p>
          <Breadcrumbs />
        </div>
      </section>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema locale={params?.locale || 'en'} />

      {/* GRID: TOC + CONTENT */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* CONTENT */}
        <div className="lg:col-span-8 space-y-10">
          {/* SECTION: Overview */}
          <section id="overview" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Overview</h2>
            <div className="mt-4 space-y-4 text-foreground/80 leading-7 md:leading-8">
              <p>
                Aruba’s mortgage market is competitive, reliable, and accessible to residents and non-residents alike. The
                process becomes straightforward when you understand the expectations: down payment, documentation,
                affordability, and the legal steps from purchase agreement to transfer at the notary.
              </p>
            </div>
          </section>

          {/* SECTION: Basics */}
          <section id="basics" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1) Mortgage Basics in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Banks will assess your debt-to-income ratio, verify employment and income stability, and require a property appraisal.
              Non-residents often encounter lower LTV caps and higher down payment requirements.
            </p>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 list-disc pl-5 text-foreground/80 leading-7">
              <li>Typical down payment: 20%–40% (by residency/profile)</li>
              <li>Interest rates: global rates + local policy</li>
              <li>Common terms: 15–30 years</li>
              <li>Collateral: property and insurance coverage</li>
            </ul>
          </section>

          {/* SECTION: Documents */}
          <section id="documents" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2) Required Documents</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Provide a clean, complete package to accelerate approval.</p>
            <div className="mt-5 rounded-2xl border p-5 bg-white shadow-sm">
              <ul className="grid md:grid-cols-2 gap-3 list-disc pl-5 text-foreground/80 leading-7">
                <li>Identification and residency status</li>
                <li>Payslips and employment letter / audited income (self-employed)</li>
                <li>Bank statements and asset/liability overview</li>
                <li>Credit information (local or international)</li>
                <li>Purchase agreement and property information</li>
                <li>Independent appraisal and insurance evidence</li>
              </ul>
            </div>
          </section>

          {/* SECTION: Pre-Approval */}
          <section id="preapproval" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3) Getting Pre-Approved</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Pre-approval helps define your budget and strengthens any offer. Provide income and asset proofs and request a
              bank letter indicating maximum loan amount and indicative rate/term.
            </p>
          </section>

          {/* SECTION: Lenders */}
          <section id="lenders" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4) Choosing a Lender</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Compare beyond the headline rate. Look closely at fees, prepayment rules, required insurances, and foreign
              currency handling if you earn outside Aruba.
            </p>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Compare</h3>
                <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7">
                  <li>Rate type and adjustment schedule</li>
                  <li>Origination and admin fees</li>
                  <li>Early repayment conditions</li>
                  <li>Insurance and currency requirements</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Evaluate</h3>
                <ul className="mt-3 list-disc pl-5 text-foreground/80 leading-7">
                  <li>Total cost over the full term</li>
                  <li>Flexibility for extra payments</li>
                  <li>Service quality and turnaround</li>
                  <li>Digital process vs branch-only</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION: Costs */}
          <section id="costs" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5) Costs & Timelines</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              Plan for one-time closing costs (notary, transfer taxes, appraisal) and recurring costs (insurance, property taxes,
              HOA where applicable). With a complete file, approval often takes 2–6 weeks.
            </p>
          </section>

          {/* SECTION: Closing */}
          <section id="closing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6) From Offer to Ownership</h2>
            <ol className="mt-4 list-decimal pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Offer accepted and purchase agreement signed</li>
              <li>Bank final approval and conditions fulfilled</li>
              <li>Notary due diligence and deed preparation</li>
              <li>Funds disbursed, deed signed, and registered</li>
            </ol>
          </section>

          {/* SECTION: Non-residents */}
          <section id="nonresidents" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Tips for Non-Residents</h2>
            <div className="mt-4 rounded-2xl border p-5 bg-white shadow-sm">
              <ul className="list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                <li>Provide well-translated, apostilled documents if issued abroad</li>
                <li>Expect higher down payment and conservative affordability checks</li>
                <li>Use a local notary experienced with cross-border transactions</li>
              </ul>
            </div>
          </section>

          {/* SECTION: Summary */}
          <section id="summary" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Summary</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">
              With a clear plan, complete documentation, and the right lender fit, obtaining a mortgage in Aruba can be smooth
              and predictable. Start with pre-approval, compare offers carefully, and partner with a reputable notary to reach the
              finish line with confidence.
            </p>
          </section>

          {/* SECTION: FAQ */}
          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              <details className="group rounded-2xl border p-5 bg-white shadow-sm">
                <summary className="cursor-pointer font-semibold text-foreground flex items-center justify-between">
                  Can foreigners get a mortgage in Aruba?
                </summary>
                <p className="mt-3 text-foreground/80 leading-7">
                  Yes. Many local banks offer mortgages to non-residents and expats, subject to enhanced documentation and stricter
                  loan-to-value ratios.
                </p>
              </details>

              <details className="group rounded-2xl border p-5 bg-white shadow-sm">
                <summary className="cursor-pointer font-semibold text-foreground">
                  What down payment is typical in Aruba?
                </summary>
                <p className="mt-3 text-foreground/80 leading-7">
                  A 20%–40% down payment is common, depending on your residency status, income, and the property type.
                </p>
              </details>

              <details className="group rounded-2xl border p-5 bg-white shadow-sm">
                <summary className="cursor-pointer font-semibold text-foreground">
                  How long does mortgage approval take?
                </summary>
                <p className="mt-3 text-foreground/80 leading-7">
                  Pre-approval can be issued within a few days. Full approval typically takes 2–6 weeks, assuming all documents are complete.
                </p>
              </details>

              <details className="group rounded-2xl border p-5 bg-white shadow-sm">
                <summary className="cursor-pointer font-semibold text-foreground">
                  What documents will I need?
                </summary>
                <p className="mt-3 text-foreground/80 leading-7">
                  Expect to provide identification, proof of income, bank statements, credit information, property details, purchase agreement,
                  appraisal, and insurance evidence.
                </p>
              </details>

              <details className="group rounded-2xl border p-5 bg-white shadow-sm">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Do I need a notary in Aruba?
                </summary>
                <p className="mt-3 text-foreground/80 leading-7">
                  Yes. Property transfers in Aruba are formalized by a civil-law notary who prepares the deed, performs title due diligence,
                  and registers the transfer.
                </p>
              </details>

              <details className="group rounded-2xl border p-5 bg-white shadow-sm">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Can I finance land only, or must it be a built property?
                </summary>
                <p className="mt-3 text-foreground/80 leading-7">
                  Some lenders finance land-only purchases, but terms and LTV can be more conservative than for completed residential properties.
                  Confirm product availability with your bank.
                </p>
              </details>
            </div>
          </section>
        </div>

        {/* STICKY TOC */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'basics', label: 'Mortgage Basics in Aruba' },
                { id: 'documents', label: 'Required Documents' },
                { id: 'preapproval', label: 'Getting Pre-Approved' },
                { id: 'lenders', label: 'Choosing a Lender' },
                { id: 'costs', label: 'Costs & Timelines' },
                { id: 'closing', label: 'From Offer to Ownership' },
                { id: 'nonresidents', label: 'Tips for Non-Residents' },
                { id: 'summary', label: 'Summary' },
                { id: 'faq', label: 'FAQ' },
              ].map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="inline-flex items-center justify-between rounded-full border px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors"
                >
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
