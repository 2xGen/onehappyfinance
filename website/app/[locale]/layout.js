import Navbar from '@/src/components/Navbar'
import Footer from '@/src/components/Footer'
import { Toaster } from '@/src/components/ui/toaster'
import { LocaleProvider } from '@/src/contexts/LocaleContext'
import { locales, defaultLocale } from '@/i18n/config'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || defaultLocale;
  
  return {
    robots: { index: true, follow: true },
    title: {
      default: 'OneHappyFinance - Financial Guidance for Aruba',
      template: '%s | OneHappyFinance'
    },
    description: locale === 'nl' 
      ? 'Deskundig financieel advies voor Aruba. Leer over hypotheken, verzekeringen, pensioenen en het kopen van onroerend goed. Vereenvoudigde financiële begeleiding voor bewoners en expats in Aruba.'
      : 'Expert financial advice for Aruba. Learn about mortgages, insurance, pensions, and property buying. Simplified financial guidance for residents and expats in Aruba.',
    keywords: locale === 'nl'
      ? 'Aruba hypotheek, Aruba verzekering, Aruba financiën, koop eigendom Aruba, Aruba pensioen, financieel advies Aruba, woninglening Aruba'
      : 'Aruba mortgage, Aruba insurance, Aruba finance, buy property Aruba, Aruba pension, financial advice Aruba, home loan Aruba',
    alternates: {
      canonical: `https://onehappyfinance.com/${locale}`,
      languages: Object.fromEntries(
        locales.map(loc => [loc, `https://onehappyfinance.com/${loc}`])
      ),
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  // In Next.js App Router, params might be a promise
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || defaultLocale;
  
  if (!locales.includes(locale)) {
    // Invalid locale, redirect to default
    return null;
  }

  return (
    <LocaleProvider key={locale} initialLocale={locale}>
      <Navbar />
      <main className="flex-grow relative-z">
        {children}
      </main>
      <Footer />
      <Toaster />
    </LocaleProvider>
  )
}
