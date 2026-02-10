import AboutPageContent from '@/src/components/AboutPageContent'

export const metadata = {
  title: 'Over OneHappyFinance – Duidelijke Financiële Informatie voor Aruba',
  description: 'OneHappyFinance is een onafhankelijk informatief platform voor Aruba. Wij leggen hypotheken, verzekeringen en onroerend goed uit in begrijpelijke taal — voor inwoners, expats en iedereen met een toekomst op het eiland.',
  keywords: [
    'OneHappyFinance over ons',
    'financiële informatie Aruba',
    'hypotheken Aruba',
    'verzekering Aruba',
    'expat Aruba',
  ],
  alternates: {
    canonical: 'https://onehappyfinance.com/nl/over-ons',
  },
  openGraph: {
    title: 'Over OneHappyFinance – Duidelijke Financiële Informatie voor Aruba',
    description: 'Onafhankelijke, duidelijke financiële informatie voor Aruba. Hypotheken, verzekeringen, onroerend goed — in begrijpelijke taal voor inwoners en expats.',
    type: 'website',
    url: 'https://onehappyfinance.com/nl/over-ons',
  },
}

function BreadcrumbSchema({ locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://onehappyfinance.com/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Over OneHappyFinance', item: `https://onehappyfinance.com/${locale}/over-ons` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function OverOnsPage({ params }) {
  const locale = params?.locale || 'nl'
  return (
    <>
      <BreadcrumbSchema locale={locale} />
      <AboutPageContent locale="nl" />
    </>
  )
}
