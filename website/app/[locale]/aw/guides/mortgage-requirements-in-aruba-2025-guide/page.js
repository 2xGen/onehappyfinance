import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortgage%20Requirements%20in%20Aruba.png'

export const metadata = {
  title: 'Mortgage Requirements in Aruba (2025) | Full Checklist & Documents Needed',
  description: 'Learn exactly what documents you need for a mortgage in Aruba. Step-by-step guide for residents and non-residents, including checklist and bank requirements (Aruba Bank & RBC).',
  keywords: [
    'mortgage requirements Aruba',
    'documents for mortgage Aruba',
    'Aruba mortgage checklist',
    'Aruba home loan documents',
    'Aruba Bank mortgage',
    'RBC Aruba mortgage',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/mortgage-requirements-in-aruba-2025-guide',
  },
  openGraph: {
    title: 'Mortgage Requirements in Aruba (2025) | Full Checklist & Documents Needed',
    description: 'Step-by-step mortgage document checklist for Aruba, with bank-specific requirements (Aruba Bank & RBC).',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Mortgage Requirements in Aruba (2025) | Checklist' },
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
      { '@type': 'ListItem', position: 3, name: 'Mortgage Requirements in Aruba (2025 Guide)', item: `https://onehappyfinance.com/${locale}/aw/guides/mortgage-requirements-in-aruba-2025-guide` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mortgage Requirements in Aruba (2025) | Full Checklist & Documents Needed',
    image: [FEATURED_IMAGE],
    description: 'Learn exactly what documents you need for a mortgage in Aruba. Guide for residents and non-residents, including checklist and bank requirements.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2025-10-30',
    dateModified: '2025-10-30',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/mortgage-requirements-in-aruba-2025-guide' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'Can foreigners apply for a mortgage in Aruba?', a: 'Yes. Both Aruba Bank and RBC Royal Bank offer mortgages for non-residents, usually with a 35–40% down payment.' },
    { q: 'Do I need to live in Aruba to get a mortgage?', a: "No. You don’t need to be a resident, but banks will require extra documentation like a foreign credit report and proof of income." },
    { q: 'Can I use my foreign bank account for payments?', a: 'Yes, most lenders allow international transfers and USD payments from overseas accounts.' },
    { q: 'How long does mortgage approval take in Aruba?', a: 'Typically 2–3 weeks once all documentation is submitted and verified.' },
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
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Mortgage Requirements in Aruba: What Documents You’ll Need (2025 Guide)</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">A complete mortgage documents checklist for Aruba — for residents and non-residents.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="req" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">1. What Are the Main Mortgage Requirements in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Banks need to confirm who you are, how you will repay the loan, and what property you’re buying. Requirements vary slightly for residents and non-residents, but identity, income, and property documents form the core of every application.</p>
          </section>

          <section id="core" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">2. Core Documents Every Applicant Needs</h2>
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
                    ['Valid Passport or ID', 'Confirms identity', 'Residents and non-residents'],
                    ['Recent Payslips (3 months)', 'Proof of income', 'Self-employed need financial statements'],
                    ['Employer Letter / Income Verification', 'Confirms employment and salary', 'Dated within 30 days'],
                    ['Bank Statements (3–6 months)', 'Shows savings and income flow', 'Especially important for foreign buyers'],
                    ['Credit Report', 'Confirms financial reliability', 'From home country if non-resident'],
                    ['Tax Return or Annual Statement', 'Verifies income consistency', '1–2 years typically required'],
                    ['Purchase Agreement', 'Confirms agreed sale', 'Signed by buyer and seller'],
                    ['Appraisal Report (Taxatie)', 'Determines property value', 'From approved local appraiser'],
                    ['Proof of Down Payment', 'Shows funds ready', 'Typically 25–40% of price'],
                    ['Home Insurance Quote', 'Required for approval', 'Usually arranged via the bank'],
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
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">3. Mortgage Requirements by Bank</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Aruba Bank</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Application form, ID copy</li>
                  <li>Payslips (3 months) + employment verification</li>
                  <li>Bank statements (6 months)</li>
                  <li>Appraisal by approved appraiser</li>
                  <li>Purchase agreement</li>
                  <li>Down payment proof (35–40%)</li>
                  <li>Self-employed: audited financials (2 years)</li>
                  <li>Non-residents: foreign credit report, bank reference, proof of assets</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">RBC Royal Bank</h3>
                <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
                  <li>Valid ID, income proof (3 months)</li>
                  <li>Tax returns (2 years), bank statements (3 months)</li>
                  <li>Appraisal report and signed purchase contract</li>
                  <li>Down payment minimum ~35%</li>
                  <li>Home insurance policy</li>
                  <li>DSR check: total debt ≤ ~40% of income</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="checklist" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">4. Mortgage Checklist for Aruba</h2>
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

          <section id="timelines" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">5. How Long Does the Mortgage Process Take?</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Pre-approval: 3–5 business days</li>
              <li>Full approval: 2–3 weeks</li>
              <li>Closing: 4–6 weeks after approval</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7">Tip: Fastest approvals come from complete document packages.</p>
          </section>

          <section id="terms" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">6. Typical Down Payments and Terms</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Residents: 20–25% down payment</li>
              <li>Non-residents: 35–40% down payment</li>
              <li>Interest rates: ~5%–7% (USD)</li>
              <li>Loan terms: up to 30 years (residents) / 15–20 years (non-residents)</li>
            </ul>
          </section>

          <section id="mistakes" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">7. Common Mistakes to Avoid</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Applying without a valid appraisal report</li>
              <li>Forgetting to include tax returns</li>
              <li>Assuming a foreign credit score automatically transfers</li>
              <li>Waiting to check eligibility until after selecting a property</li>
            </ul>
            <p className="mt-3 text-foreground/80 leading-7"><span className="font-semibold">Pro tip:</span> Contact the bank for pre-approval before making an offer.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">8. Frequently Asked Questions (FAQ)</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'Can foreigners apply for a mortgage in Aruba?', a: 'Yes. Both Aruba Bank and RBC Royal Bank offer mortgages for non-residents, usually with a 35–40% down payment.' },
                { q: 'Do I need to live in Aruba to get a mortgage?', a: "No. You don’t need to be a resident, but banks will require extra documentation like a foreign credit report and proof of income." },
                { q: 'Can I use my foreign bank account for payments?', a: 'Yes, most banks allow international transfers and USD payments from overseas accounts.' },
                { q: 'How long does approval take?', a: 'Typically 2–3 weeks once documentation is submitted and verified.' },
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
                { id: 'req', label: 'Requirements' },
                { id: 'core', label: 'Core Documents' },
                { id: 'banks', label: 'By Bank' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'timelines', label: 'Timelines' },
                { id: 'terms', label: 'Terms' },
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
