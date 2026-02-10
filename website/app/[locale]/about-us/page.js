import AboutPageContent from '@/src/components/AboutPageContent'

export const metadata = {
  title: 'About OneHappyFinance – Clear Financial Information for Aruba',
  description: 'OneHappyFinance is an independent informational platform for Aruba. We explain mortgages, insurance, and property in plain language — for residents, expats, and anyone planning a future on the island.',
  keywords: [
    'OneHappyFinance about',
    'financial information Aruba',
    'Aruba mortgages',
    'Aruba insurance',
    'expat Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/en/about-us',
  },
  openGraph: {
    title: 'About OneHappyFinance – Clear Financial Information for Aruba',
    description: 'Independent, clear financial information for Aruba. Mortgages, insurance, property — in plain language for residents and expats.',
    type: 'website',
    url: 'https://onehappyfinance.com/en/about-us',
  },
}

function BreadcrumbSchema({ locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://onehappyfinance.com/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'About OneHappyFinance', item: `https://onehappyfinance.com/${locale}/about-us` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function AboutUsPage({ params }) {
  const locale = params?.locale || 'en'
  return (
    <>
      <BreadcrumbSchema locale={locale} />
      <AboutPageContent locale="en" />
    </>
  )
}
