import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Average%20House%20Price%20in%20Aruba.png'

export const metadata = {
  title: 'Average House Price in Aruba',
  description: 'Average house price in Aruba: price ranges by size and area, price per square foot, and what influences residential prices. Data-based overview for buyers.',
  keywords: [
    'average house price Aruba',
    'house prices Aruba',
    'property prices Aruba',
    'real estate Aruba',
    'Aruba housing market',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/average-house-price-in-aruba',
  },
  openGraph: {
    title: 'Average House Price in Aruba',
    description: 'Price ranges by area and size, price per sq ft, and factors that influence house prices in Aruba.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Average House Price in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Average House Price in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/average-house-price-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Average House Price in Aruba',
    image: [FEATURED_IMAGE],
    description: 'Data-based overview of Aruba residential price ranges, price per square foot, and factors that influence house prices.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-12',
    dateModified: '2026-02-12',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/average-house-price-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'What is the cheapest area to buy a house in Aruba?', a: 'San Nicolas and certain inland areas like Santa Cruz typically offer the lowest entry prices.' },
    { q: 'What is the most expensive area in Aruba?', a: 'Noord, particularly near Palm Beach and Malmok, consistently ranks among the highest-priced residential areas.' },
    { q: 'Are prices rising in Aruba?', a: 'Price growth has been supported by limited coastal supply and steady tourism-driven demand, although price movement varies by submarket.' },
  ]
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
          <Image src={FEATURED_IMAGE} alt="Average House Price in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Guides</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Average House Price in Aruba</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">If you&apos;re considering buying real estate in Aruba, one of the first questions you&apos;ll ask is: What is the average price for a house in Aruba? The answer depends on location, size, land type (eigendom vs. erfpacht), and proximity to the beach.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="average-price" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">What Is the Average House Price in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">As of early 2026, the average house price in Aruba generally falls between USD 350,000 and USD 600,000, depending on the property type and area. Typical price ranges by size:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>2-bedroom houses:</strong> often range between USD 350,000 – USD 500,000</li>
              <li><strong>3-bedroom houses:</strong> commonly range between USD 450,000 – USD 650,000</li>
              <li><strong>4+ bedroom houses and villas:</strong> frequently start around USD 550,000 and can exceed USD 1,000,000 in prime areas</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Luxury beachfront villas or gated community properties can reach several million dollars, particularly in high-demand coastal zones. Prices are commonly listed in U.S. dollars (USD), although Aruba&apos;s official currency is the Aruban Florin (AWG) (USD 1 = AWG 1.80 fixed rate).</p>
          </section>

          <section id="price-per-sqft" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Average Price Per Square Foot in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Another useful way to measure value is price per square foot. Recent market listing data indicates:</p>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li><strong>Median house price:</strong> approximately AWG 500–550 per square foot (roughly USD 275–305 per sq ft)</li>
              <li><strong>Median apartment price:</strong> typically higher, often around AWG 850–900 per square foot</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Apartments near the beach often command a higher price per square foot than inland single-family homes.</p>
          </section>

          <section id="by-area" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">House Prices by Area in Aruba</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Location plays a major role in pricing. Below is a general breakdown by region.</p>

            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">Noord (Including Palm Beach & Malmok)</h3>
                <p className="mt-2 text-foreground/80 leading-7">Noord is one of Aruba&apos;s most desirable residential areas. Strong demand from international buyers; close to Palm Beach resorts and beaches; gated communities and luxury villas common; higher price per square foot compared to most inland areas.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typical house prices:</strong> Mid-range homes: USD 450,000 – USD 900,000. Luxury villas: USD 1,000,000+.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">Oranjestad</h3>
                <p className="mt-2 text-foreground/80 leading-7">The capital city offers a mix of urban living and waterfront developments. Condos and townhomes common; more varied pricing; attractive for rental investors.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typical house prices:</strong> USD 250,000 – USD 750,000. Waterfront or new luxury developments significantly higher.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">Savaneta</h3>
                <p className="mt-2 text-foreground/80 leading-7">Quieter, more residential and coastal in character. Growing interest from retirees and long-term residents; beachfront homes available at lower prices than Noord.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typical house prices:</strong> USD 225,000 – USD 700,000. Beachfront properties can exceed USD 1,000,000.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">Paradera & Santa Cruz (Inland Areas)</h3>
                <p className="mt-2 text-foreground/80 leading-7">Primarily residential and family-oriented. Larger lots; lower price per square foot; more affordable entry-level options.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typical house prices:</strong> USD 200,000 – USD 600,000.</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="font-heading text-xl font-semibold">San Nicolas</h3>
                <p className="mt-2 text-foreground/80 leading-7">Historically more affordable, currently seeing gradual redevelopment. Entry-level pricing; attractive for budget-conscious buyers; potential for long-term appreciation.</p>
                <p className="mt-2 text-foreground/80 leading-7"><strong>Typical house prices:</strong> USD 100,000 – USD 400,000.</p>
              </div>
            </div>
          </section>

          <section id="influences" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">What Influences House Prices in Aruba?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Several factors impact residential pricing:</p>
            <ol className="mt-4 list-decimal pl-5 text-foreground/80 leading-7 space-y-2">
              <li><strong>Proximity to the Beach</strong> — Homes near Palm Beach, Eagle Beach, and Malmok command premium pricing due to tourism demand and limited supply.</li>
              <li><strong>Freehold vs. Lease Land</strong> — Eigendom (freehold) properties may have slightly higher resale appeal. Erfpacht (lease land) homes can sometimes offer more competitive purchase prices.</li>
              <li><strong>Rental Potential</strong> — Properties that perform well as short-term rentals often carry higher asking prices.</li>
              <li><strong>Gated Communities</strong> — Developments with security, pools, and amenities typically increase value.</li>
              <li><strong>Lot Size and New Construction</strong> — New builds and larger parcels generally trade at higher prices.</li>
            </ol>
          </section>

          <section id="expensive" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Is Aruba Expensive Compared to Other Caribbean Islands?</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruba is often considered: more stable politically and economically; outside the hurricane belt; transparent in ownership rules (foreigners can buy freely). While beachfront real estate can be expensive, inland homes remain relatively competitive compared to other established Caribbean destinations.</p>
          </section>

          <section id="notes" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Important Notes for Buyers</h2>
            <ul className="mt-4 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Prices vary significantly depending on property condition and exact location.</li>
              <li>Aruba does not have a centralized public MLS database, so listing prices reflect asking prices, not necessarily final sale prices.</li>
              <li>Foreign buyers pay the same purchase taxes and fees as residents.</li>
              <li>Typical closing costs range from 5%–8% of the purchase price.</li>
            </ul>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Final Thoughts</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The average house price in Aruba depends heavily on location and property type, but most single-family homes fall within the USD 350,000–600,000 range. Luxury beachfront and gated community homes can significantly exceed that range, while inland neighborhoods provide more accessible entry points. Understanding local market dynamics, land ownership structure, and rental demand is essential before making a purchase decision in Aruba&apos;s property market.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'What is the cheapest area to buy a house in Aruba?', a: 'San Nicolas and certain inland areas like Santa Cruz typically offer the lowest entry prices.' },
                { q: 'What is the most expensive area in Aruba?', a: 'Noord, particularly near Palm Beach and Malmok, consistently ranks among the highest-priced residential areas.' },
                { q: 'Are prices rising in Aruba?', a: 'Price growth has been supported by limited coastal supply and steady tourism-driven demand, although price movement varies by submarket.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'en'} keys={RELATED_KEYS.averageHousePrice} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'average-price', label: 'Average House Price' },
                { id: 'price-per-sqft', label: 'Price Per Square Foot' },
                { id: 'by-area', label: 'Prices by Area' },
                { id: 'influences', label: 'What Influences Prices' },
                { id: 'expensive', label: 'Aruba vs Other Caribbean' },
                { id: 'notes', label: 'Notes for Buyers' },
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
