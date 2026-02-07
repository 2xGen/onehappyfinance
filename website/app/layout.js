import { Inter, Poppins } from 'next/font/google'
import '../src/index.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  title: {
    default: 'OneHappyFinance - Financial Guidance for Aruba',
    template: '%s | OneHappyFinance'
  },
  description: 'Expert financial advice for Aruba. Learn about mortgages, insurance, pensions, and property buying. Simplified financial guidance for residents and expats in Aruba.',
  keywords: 'Aruba mortgage, Aruba insurance, Aruba finance, buy property Aruba, Aruba pension, financial advice Aruba, home loan Aruba',
  openGraph: {
    title: 'OneHappyFinance - Financial Guidance for Aruba',
    description: 'Your trusted source for mortgages, insurance, and financial planning in Aruba',
    type: 'website',
    url: 'https://onehappyfinance.com',
  },
  alternates: {
    canonical: 'https://onehappyfinance.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background flex flex-col relative-z" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
