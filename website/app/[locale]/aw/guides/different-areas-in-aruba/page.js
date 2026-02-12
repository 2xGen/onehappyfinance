import Image from 'next/image'
import Breadcrumbs from './BreadcrumbsClient'
import RelatedGuides from '@/src/components/RelatedGuides'
import { RELATED_KEYS } from '@/src/lib/guideLinks'

const FEATURED_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/different%20property%20areas%20in%20aruba.png'

export const metadata = {
  title: 'Different Areas in Aruba: A Guide to the Island\'s Neighborhoods',
  description: 'Complete overview of Aruba\'s main areas: Noord, Palm Beach, Eagle Beach, Oranjestad, San Nicolas, Malmok, Savaneta, Paradera, Santa Cruz, and more. Lifestyle, real estate, and what makes each unique.',
  keywords: [
    'Aruba neighborhoods',
    'areas in Aruba',
    'Palm Beach Aruba',
    'Eagle Beach Aruba',
    'Noord Aruba',
    'where to live Aruba',
    'Aruba real estate areas',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/aw/guides/different-areas-in-aruba',
  },
  openGraph: {
    title: 'Different Areas in Aruba: A Guide to the Island\'s Neighborhoods',
    description: 'From vibrant beachfront districts to quiet residential towns — a complete overview of Aruba\'s main locations and what makes each unique.',
    type: 'article',
    images: [
      { url: FEATURED_IMAGE, width: 1200, height: 630, alt: 'Different Areas in Aruba' },
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
      { '@type': 'ListItem', position: 3, name: 'Different Areas in Aruba', item: `https://onehappyfinance.com/${locale}/aw/guides/different-areas-in-aruba` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function ArticleSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Different Areas in Aruba: A Guide to the Island\'s Neighborhoods',
    image: [FEATURED_IMAGE],
    description: 'Overview of Aruba\'s main areas: Noord, Palm Beach, Eagle Beach, Oranjestad, San Nicolas, and more. Lifestyle and real estate by neighborhood.',
    author: { '@type': 'Organization', name: 'OneHappyFinance' },
    publisher: { '@type': 'Organization', name: 'OneHappyFinance', logo: { '@type': 'ImageObject', url: FEATURED_IMAGE } },
    datePublished: '2026-02-12',
    dateModified: '2026-02-12',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://onehappyfinance.com/en/aw/guides/different-areas-in-aruba' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

function FaqSchema() {
  const qa = [
    { q: 'What is the best area in Aruba for nightlife and dining?', a: 'Palm Beach and Oranjestad offer the most nightlife, restaurants, and entertainment. Palm Beach has high-rise resorts, casinos, and beach bars; Oranjestad has shopping, museums, and the cruise port.' },
    { q: 'Which part of Aruba is best for quiet beach living?', a: 'Eagle Beach is known for wide white sands and a relaxed, low-rise atmosphere. Savaneta offers a quiet fishing-village feel and waterfront homes. Malmok and Arashi are quieter, upscale coastal areas with good snorkeling.' },
    { q: 'Where in Aruba is good for families and calm swimming?', a: 'Baby Beach (Seroe Colorado) has a calm, shallow lagoon ideal for families and beginner swimmers. Eagle Beach is also family-friendly with a more relaxed vibe than Palm Beach.' },
    { q: 'What area of Aruba is best for nature and hiking?', a: 'Santa Cruz is near Arikok National Park and offers a rural, nature-focused lifestyle. Arikok National Park itself covers nearly 20% of the island with desert landscapes, caves, and hiking trails.' },
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
          <Image src={FEATURED_IMAGE} alt="Different Areas in Aruba" fill className="object-cover" priority />
        </div>
        <div className="relative p-6 md:p-10">
          <span className="inline-block text-xs tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">Property</span>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold leading-tight text-foreground">Different Areas in Aruba: A Guide to the Island&apos;s Neighborhoods</h1>
          <p className="mt-3 text-base md:text-lg text-foreground/80 leading-7 md:leading-8 max-w-3xl">Aruba may be a small island, but it offers distinct regions—from vibrant beachfront districts to quiet residential towns and rugged natural landscapes. Here&apos;s a complete overview of the main locations and what makes each unique.</p>
          <Breadcrumbs />
        </div>
      </section>

      {/* GRID */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 space-y-10">
          <section id="intro" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <p className="text-foreground/80 leading-7 md:leading-8">Whether you&apos;re relocating, investing, or simply exploring where you might want to live, this guide covers Aruba&apos;s main areas and what makes each one unique.</p>
          </section>

          <section id="noord" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Noord</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Noord is one of the most desirable and centrally located areas in Aruba. It sits close to Palm Beach, Eagle Beach, high-end restaurants, supermarkets, and international schools.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">This area blends residential neighborhoods with upscale villas, gated communities, and vacation rentals. It is popular among expats and international buyers due to its convenience and strong rental potential.</p>
            <p className="mt-4 font-semibold text-foreground">Why people choose Noord:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Close to Palm Beach and Eagle Beach</li>
              <li>High demand for vacation rentals</li>
              <li>Modern homes and gated communities</li>
              <li>Easy access to dining and nightlife</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Noord offers a balance between residential comfort and tourist convenience.</p>
          </section>

          <section id="palm-beach" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Palm Beach</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Palm Beach is Aruba&apos;s high-rise hotel and entertainment district. It is the island&apos;s most energetic and cosmopolitan area.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Luxury resorts, casinos, beach bars, restaurants, shopping malls, and nightlife define this stretch of coastline. Condominiums and vacation-focused properties are common here.</p>
            <p className="mt-4 font-semibold text-foreground">Best for:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Nightlife and dining</li>
              <li>Short-term rental investment</li>
              <li>Resort-style living</li>
              <li>Walkable beachfront access</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Palm Beach is ideal for those who enjoy a lively, active environment.</p>
          </section>

          <section id="eagle-beach" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Eagle Beach</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eagle Beach is known for its wide white sands and relaxed, low-rise hotel atmosphere. It consistently ranks among the most beautiful beaches in the Caribbean.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Compared to Palm Beach, Eagle Beach is quieter and more residential. You&apos;ll find boutique resorts, condominium complexes, and peaceful neighborhoods nearby.</p>
            <p className="mt-4 font-semibold text-foreground">Best for:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Tranquil beachfront living</li>
              <li>Long beach walks and sunsets</li>
              <li>Lower-density development</li>
              <li>Relaxed atmosphere</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Eagle Beach offers a more laid-back coastal lifestyle.</p>
          </section>

          <section id="oranjestad" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Oranjestad (Capital)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Oranjestad is Aruba&apos;s capital and commercial center. It combines Dutch colonial architecture, colorful buildings, shopping districts, and government offices.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The city features a mix of residential homes, condominiums, waterfront developments, and commercial properties. Living here means having everything within reach.</p>
            <p className="mt-4 font-semibold text-foreground">Highlights:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Shopping and dining</li>
              <li>Museums and cultural sites</li>
              <li>Cruise port and marina</li>
              <li>Urban convenience</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Oranjestad offers Caribbean charm with modern infrastructure.</p>
          </section>

          <section id="san-nicolas" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">San Nicolas (Sunrise City)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Located in the southern part of the island, San Nicolas is Aruba&apos;s second-largest city and cultural heart.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Known as &quot;Sunrise City,&quot; it features vibrant street art, local food spots, music festivals, and a strong sense of community. It is also close to Baby Beach and quieter coastal areas.</p>
            <p className="mt-4 font-semibold text-foreground">Best for:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Authentic local culture</li>
              <li>More affordable housing</li>
              <li>Artistic and creative environment</li>
              <li>Proximity to Baby Beach</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">San Nicolas offers a slower pace and strong cultural identity.</p>
          </section>

          <section id="malmok-arashi" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Malmok & Arashi</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Situated on the northern coast, Malmok and Arashi are known for rocky shorelines, clear shallow waters, and some of the island&apos;s best snorkeling and diving spots.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The area features upscale villas and luxury homes, often with ocean views.</p>
            <p className="mt-4 font-semibold text-foreground">Best for:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Snorkeling and diving</li>
              <li>Sunset views</li>
              <li>Quiet upscale living</li>
              <li>Proximity to Palm Beach but less crowded</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Malmok provides a peaceful coastal setting with high-end appeal.</p>
          </section>

          <section id="savaneta" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Savaneta</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Savaneta is Aruba&apos;s oldest town and former capital. It has a quiet fishing village feel and offers a more traditional island lifestyle.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The area is known for waterfront homes, local seafood restaurants, and beaches like Mangel Halto with calm waters and mangroves.</p>
            <p className="mt-4 font-semibold text-foreground">Best for:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Authentic residential living</li>
              <li>Waterfront properties</li>
              <li>Quiet coastal lifestyle</li>
              <li>Local community atmosphere</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Savaneta feels less tourist-driven and more residential.</p>
          </section>

          <section id="paradera" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Paradera</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Paradera is a central inland area known for its natural rock formations like Ayo and Casibari. It offers a relaxed, residential environment.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Homes here often sit on larger lots, and the area provides easy access to both beaches and downtown.</p>
            <p className="mt-4 font-semibold text-foreground">Best for:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Larger properties</li>
              <li>Local neighborhood feel</li>
              <li>Central location</li>
              <li>Quiet surroundings</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Paradera is ideal for those seeking space and privacy.</p>
          </section>

          <section id="santa-cruz" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Santa Cruz</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Santa Cruz is located near Arikok National Park and offers a strong connection to nature. It&apos;s primarily residential and less tourist-focused.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">The community is close-knit and surrounded by desert landscapes, caves, and natural trails.</p>
            <p className="mt-4 font-semibold text-foreground">Best for:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Nature lovers</li>
              <li>Proximity to Arikok National Park</li>
              <li>Traditional Aruban lifestyle</li>
              <li>Peaceful living</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Santa Cruz provides a rural, authentic island atmosphere.</p>
          </section>

          <section id="arikok" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Arikok National Park</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Covering nearly 20% of the island, Arikok National Park is a protected natural area featuring desert landscapes, rugged coastline, caves, and hiking trails.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">While not a residential area, it plays a major role in shaping Aruba&apos;s natural identity.</p>
            <p className="mt-4 font-semibold text-foreground">Best for:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Hiking and off-road adventures</li>
              <li>Wildlife and geology</li>
              <li>Remote beaches</li>
              <li>Outdoor exploration</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Arikok showcases Aruba&apos;s raw, untouched beauty.</p>
          </section>

          <section id="baby-beach" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Baby Beach (Seroe Colorado)</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Located at the southernmost tip of the island, Baby Beach is famous for its calm, shallow, turquoise lagoon.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">It is ideal for families and beginner swimmers due to its protected waters.</p>
            <p className="mt-4 font-semibold text-foreground">Best for:</p>
            <ul className="mt-2 list-disc pl-5 text-foreground/80 leading-7 space-y-1">
              <li>Calm swimming</li>
              <li>Snorkeling</li>
              <li>Family-friendly beach days</li>
              <li>Southern coastal living</li>
            </ul>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Nearby Seroe Colorado features residential developments with ocean views and a quieter atmosphere.</p>
          </section>

          <section id="by-lifestyle" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Best Areas by Lifestyle</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Best for Nightlife & Dining</h3>
                <p className="mt-2 text-foreground/80 leading-7">Palm Beach, Oranjestad</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Best for Beaches & Snorkeling</h3>
                <p className="mt-2 text-foreground/80 leading-7">Eagle Beach, Baby Beach, Arashi, Malmok</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Best for Local Culture & Art</h3>
                <p className="mt-2 text-foreground/80 leading-7">San Nicolas, Savaneta</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Best for Nature & Adventure</h3>
                <p className="mt-2 text-foreground/80 leading-7">Arikok National Park, Santa Cruz</p>
              </div>
              <div className="rounded-2xl border p-5 bg-white shadow-sm">
                <h3 className="m-0 font-semibold">Best for Residential Living</h3>
                <p className="mt-2 text-foreground/80 leading-7">Noord, Paradera, Santa Cruz</p>
              </div>
            </div>
          </section>

          <section id="final" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Final Thoughts</h2>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Aruba offers a diverse range of neighborhoods despite its compact size. From vibrant beachfront districts to peaceful inland communities, each area provides a different experience.</p>
            <p className="mt-4 text-foreground/80 leading-7 md:leading-8">Choosing the right location depends on your lifestyle, budget, and long-term goals—whether that&apos;s investment potential, tranquility, culture, or convenience.</p>
          </section>

          <section id="faq" className="rounded-3xl border bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {[
                { q: 'What is the best area in Aruba for nightlife and dining?', a: 'Palm Beach and Oranjestad offer the most nightlife, restaurants, and entertainment. Palm Beach has high-rise resorts, casinos, and beach bars; Oranjestad has shopping, museums, and the cruise port.' },
                { q: 'Which part of Aruba is best for quiet beach living?', a: 'Eagle Beach is known for wide white sands and a relaxed, low-rise atmosphere. Savaneta offers a quiet fishing-village feel and waterfront homes. Malmok and Arashi are quieter, upscale coastal areas with good snorkeling.' },
                { q: 'Where in Aruba is good for families and calm swimming?', a: 'Baby Beach (Seroe Colorado) has a calm, shallow lagoon ideal for families and beginner swimmers. Eagle Beach is also family-friendly with a more relaxed vibe than Palm Beach.' },
                { q: 'What area of Aruba is best for nature and hiking?', a: 'Santa Cruz is near Arikok National Park and offers a rural, nature-focused lifestyle. Arikok National Park itself covers nearly 20% of the island with desert landscapes, caves, and hiking trails.' },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border p-5 bg-white shadow-sm">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.q}</summary>
                  <p className="mt-3 text-foreground/80 leading-7">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
          <RelatedGuides locale={params?.locale || 'en'} keys={RELATED_KEYS.differentAreas} />
        </div>

        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 rounded-3xl border bg-white/70 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-foreground">On this page</h3>
            <nav className="mt-4 grid gap-2">
              {[
                { id: 'intro', label: 'Introduction' },
                { id: 'noord', label: 'Noord' },
                { id: 'palm-beach', label: 'Palm Beach' },
                { id: 'eagle-beach', label: 'Eagle Beach' },
                { id: 'oranjestad', label: 'Oranjestad' },
                { id: 'san-nicolas', label: 'San Nicolas' },
                { id: 'malmok-arashi', label: 'Malmok & Arashi' },
                { id: 'savaneta', label: 'Savaneta' },
                { id: 'paradera', label: 'Paradera' },
                { id: 'santa-cruz', label: 'Santa Cruz' },
                { id: 'arikok', label: 'Arikok National Park' },
                { id: 'baby-beach', label: 'Baby Beach' },
                { id: 'by-lifestyle', label: 'Best by lifestyle' },
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
