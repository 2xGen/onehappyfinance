import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortgage%20Requirements%20in%20Aruba.png'

export const metadata = {
  title: 'Aruba Mortgage Requirements for Non-Residents | Full Checklist & Documents',
  description: 'Aruba mortgage requirements for non-residents: 40–50% down payment, 15-year max term, 5–7% rates. Documents, checklist, Aruba Bank & RBC, closing costs, and construction financing.',
  keywords: [
    'Aruba mortgage requirements for non-residents',
    'mortgage requirements Aruba',
    'documents for mortgage Aruba',
    'Aruba mortgage checklist',
    'Aruba Bank mortgage',
    'RBC Aruba mortgage',
    'non-resident mortgage Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/mortgage-requirements-in-aruba',
  },
  openGraph: {
    title: 'Aruba Mortgage Requirements for Non-Residents | Full Checklist & Documents',
    description: 'Step-by-step mortgage document checklist for Aruba, with bank-specific requirements (Aruba Bank & RBC).',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Mortgage Requirements in Aruba | Checklist' },
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
      { '@type': 'ListItem', position: 3, name: 'Aruba Mortgage Requirements for Non-Residents', item: `https://onehappyfinance.com/${locale}/aw/guides/mortgage-requirements-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Aruba Mortgage Requirements for Non-Residents | Full Checklist & Documents',
    image: [FEATURED_IMAGE],
    description: 'Aruba mortgage requirements for non-residents: 40–50% down payment, 15-year max term, 5–7% rates. Documents, checklist, Aruba Bank, Banco di Caribe, RBC.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2026-02-07',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/mortgage-requirements-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'What are Aruba mortgage requirements for non-residents?', a: 'Non-residents typically need a 40–50% down payment, max 15-year term, valid passport, proof of income, bank reference letters, and an appraisal report. Interest rates are often 5–7%.' },
    { q: 'Can foreigners apply for a mortgage in Aruba?', a: 'Yes. Aruba Bank, Banco di Caribe, and RBC Royal Bank offer mortgages for non-residents, usually with a 40–50% down payment and max 15-year term.' },
    { q: 'How long does mortgage approval take in Aruba?', a: 'Pre-approval often takes about 2 weeks. Full approval can take 4–5 weeks for compliance. The full process from application to financing may take around 2 months.' },
    { q: 'What are the closing costs for an Aruba mortgage?', a: 'Expect roughly 1% of the loan amount in bank fees, plus notary fees (transfer deed and mortgage deed). Total buyer-side costs often add up to 5–12% of the purchase price.' },
    { q: 'Do I need a local notary?', a: 'Yes. All property transactions in Aruba must be processed through a local notary.' },
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
          <Image src={FEATURED_IMAGE} alt="Mortgage Requirements in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Aruba Mortgage Requirements for Non-Residents</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">40–50% down payment, max 15-year term, and full document checklist. Aruba Bank, Banco di Caribe, and RBC requirements for international buyers.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="req" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. Aruba Mortgage Requirements for Non-Residents</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruban banks finance roughly 50–60% of the purchase price for non-residents, with interest rates typically between 5% and 7%. Banks must confirm your identity, income, and the property you're buying. Below are the main requirements for non-resident applicants.</p>
          </section>

          <section id="nonresidents" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Key Requirements for Non-Residents</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Requirement</th>
                    <th className="text-left p-3 font-semibold">Typical Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-foreground/80">
                  <tr><td className="p-3">Down Payment</td><td className="p-3">40% – 50% of property value</td></tr>
                  <tr><td className="p-3">Maximum Financing (LTV)</td><td className="p-3">60% – 65% of purchase price or appraisal</td></tr>
                  <tr><td className="p-3">Loan Term</td><td className="p-3">Max 15 years (non-residents)</td></tr>
                  <tr><td className="p-3">Interest Rate</td><td className="p-3">Approx. 5% – 7% (USD)</td></tr>
                  <tr><td className="p-3">Minimum Age</td><td className="p-3">21; loan must be repaid before retirement age</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Non-residents must provide fire and life insurance with the bank as first beneficiary. Closing costs typically include about 1% of the loan amount in bank fees, plus notary fees.</p>
          </section>

          <section id="core" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Required Documents Checklist</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border bg-white shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Document</th>
                    <th className="text-left p-3 font-semibold">Purpose</th>
                    <th className="text-left p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ['Two valid IDs (Passport + Driver\'s License)', 'Confirms identity', 'Both valid for at least 2 months'],
                    ['Employer Letter', 'Job title, salary, start date', 'Confirms employment'],
                    ['Proof of Residential Address', 'Utility bill, census registration', 'Establishes address'],
                    ['Payslips (last 2–3 months)', 'Proof of income', 'Or pension/income certification'],
                    ['Bank Statements (3 months)', 'Shows savings and income flow', 'Non-residents: 3–6 months'],
                    ['Two Bank Reference Letters', 'Financial reliability', 'From financial institutions'],
                    ['Credit Score Report', 'Financial responsibility', 'From home country if non-resident'],
                    ['Declaration of Assets/Liabilities', 'Source of wealth', 'Required by many banks'],
                    ['Purchase Agreement or Proof of Ownership', 'Confirms property', 'Signed by buyer and seller'],
                    ['Appraisal Report', 'Property market value', 'From Aruban appraiser, not older than 6 months'],
                    ['Home Insurance (Fire & Life)', 'Required for approval', 'Bank as first beneficiary'],
                    ['Financial Statements (self-employed)', 'Company financials', 'Last 2 years, audited'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="p-3">{row[0]}</td>
                      <td className="p-3 text-foreground/80">{row[1]}</td>
                      <td className="p-3 text-foreground/80">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="banks" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Mortgage Requirements by Bank</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aruba Bank</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Application form, ID copy</li>
                  <li>Payslips (3 months) + employment verification</li>
                  <li>Bank statements (6 months)</li>
                  <li>Appraisal by approved appraiser</li>
                  <li>Purchase agreement</li>
                  <li>Down payment proof (40–50% for non-residents)</li>
                  <li>Self-employed: audited financials (2 years)</li>
                  <li>Non-residents: two bank reference letters, foreign credit report, proof of assets</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">RBC Royal Bank</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Valid ID, income proof (3 months)</li>
                  <li>Tax returns (2 years), bank statements (3 months)</li>
                  <li>Appraisal report and signed purchase contract</li>
                  <li>Down payment minimum ~40% for non-residents</li>
                  <li>Home insurance policy</li>
                  <li>DSR check: total debt ≤ ~40% of income</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="checklist" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. Mortgage Checklist for Aruba</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Personal Identification</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Passport (valid)</li>
                  <li>Proof of address</li>
                  <li>Credit report (home country if non-resident)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Income Verification</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Payslips (3 months)</li>
                  <li>Employer letter / Income verification</li>
                  <li>Tax returns (last 2 years)</li>
                  <li>Bank statements (3–6 months)</li>
                  <li>Financial statements (for business owners)</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Property Documents</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Signed Purchase Agreement</li>
                  <li>Appraisal report (local appraiser)</li>
                  <li>Proof of down payment</li>
                  <li>Home insurance quote</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Additional (if applicable)</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Marriage certificate (buying jointly)</li>
                  <li>Residency or work permit (for residents)</li>
                  <li>Reference letter from your bank</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="construction" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Additional Requirements for Construction</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">When financing new construction in Aruba, banks typically require extra documentation from the Public Works Department (D.O.W.) and your contractor:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Approved building permit (blue card) from D.O.W.</li>
              <li>Approved construction drawings from the Public Works Department</li>
              <li>Contractor&apos;s quotation with project details</li>
              <li>Contractor&apos;s Chamber of Commerce registration</li>
              <li>Appraisal report for land and planned construction value</li>
            </ul>
          </section>

          <section id="timelines" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. How Long Does the Mortgage Process Take?</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Pre-approval: about 2 weeks after submitting documents</li>
              <li>Compliance and final approval: 4–5 weeks</li>
              <li>Full financing completion: roughly 2 months total</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Prepare all documentation in advance to avoid delays.</p>
          </section>

          <section id="closing" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8. Closing Costs and Important Considerations</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Expect roughly 1% of the loan amount in bank fees, plus notary fees (transfer deed and mortgage deed). Total buyer-side costs often add up to 5–12% of the purchase price. The minimum age to apply is typically 21, and the loan must be repaid before retirement age.</p>
          </section>

          <section id="mistakes" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">9. Common Mistakes to Avoid</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Applying without a valid appraisal report</li>
              <li>Forgetting to include tax returns</li>
              <li>Assuming a foreign credit score automatically transfers</li>
              <li>Waiting to check eligibility until after selecting a property</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7"><span className="font-semibold">Pro tip:</span> Contact the bank for pre-approval before making an offer.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">10. Frequently Asked Questions (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'What are Aruba mortgage requirements for non-residents?', a: 'Non-residents typically need a 40–50% down payment, max 15-year term, valid passport, proof of income, two bank reference letters, and an appraisal report. Interest rates are often 5–7%.' },
                { q: 'Can foreigners apply for a mortgage in Aruba?', a: 'Yes. Aruba Bank, Banco di Caribe, and RBC Royal Bank offer mortgages for non-residents, usually with a 40–50% down payment and max 15-year term.' },
                { q: 'How long does mortgage approval take in Aruba?', a: 'Pre-approval often takes about 2 weeks. Full approval can take 4–5 weeks for compliance. The full process from application to financing may take around 2 months.' },
                { q: 'What are the closing costs for an Aruba mortgage?', a: 'Expect roughly 1% of the loan amount in bank fees, plus notary fees (transfer deed and mortgage deed). Total buyer-side costs often add up to 5–12% of the purchase price.' },
                { q: 'Do I need a local notary?', a: 'Yes. All property transactions must be processed through a local notary.' },
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
                { id: 'req', label: 'Non-Resident Requirements' },
                { id: 'nonresidents', label: 'Key Requirements' },
                { id: 'core', label: 'Documents Checklist' },
                { id: 'banks', label: 'By Bank' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'construction', label: 'Construction' },
                { id: 'timelines', label: 'Timelines' },
                { id: 'closing', label: 'Closing Costs' },
                { id: 'mistakes', label: 'Mistakes' },
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
