import ConnectPageContent from '@/src/components/ConnectPageContent'

export async function generateMetadata({ params }) {
  const resolved = await params
  const locale = resolved?.locale || 'en'
  const isEn = locale === 'en'
  const base = 'https://onehappyfinance.com'
  const url = `${base}/${locale}/connect`
  return {
    title: isEn
      ? 'Connect with OneHappyFinance – Register Your Interest'
      : 'Connect met OneHappyFinance – Registreer uw belangstelling',
    description: isEn
      ? 'Register your interest in the OneHappyFinance connect initiative. For individuals considering a financial step in Aruba, or for financial and real estate professionals. Voluntary and non-binding.'
      : 'Registreer uw belangstelling voor het Connect-initiatief van OneHappyFinance. Voor particulieren of professionals in Aruba. Vrijwillig en niet-bindend.',
    alternates: { canonical: url },
    openGraph: {
      title: isEn ? 'Connect with OneHappyFinance – Register Your Interest' : 'Connect met OneHappyFinance – Registreer uw belangstelling',
      description: isEn
        ? 'Register your interest in our connect initiative. For individuals and professionals in Aruba’s financial and property landscape. Voluntary and non-binding.'
        : 'Registreer uw belangstelling voor ons Connect-initiatief. Voor particulieren en professionals. Vrijwillig en niet-bindend.',
      type: 'website',
      url,
    },
  }
}

function BreadcrumbSchema({ locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://onehappyfinance.com/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Connect', item: `https://onehappyfinance.com/${locale}/connect` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

export default function ConnectPage({ params }) {
  const locale = params?.locale || 'en'
  return (
    <>
      <BreadcrumbSchema locale={locale} />
      <ConnectPageContent locale={locale} />
    </>
  )
}
