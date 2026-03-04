import Hero from '@/src/components/Hero'
import HomeUsps from '@/src/components/HomeUsps'
import HomeCards from '@/src/components/HomeCards'
import HomeTrustBadges from '@/src/components/HomeTrustBadges'
import FeaturedGuides from '@/src/components/FeaturedGuides'
import WhyChooseUs from '@/src/components/WhyChooseUs'
import HomeCtaStrip from '@/src/components/HomeCtaStrip'

export const metadata = {
  openGraph: {
    images: [
      {
        url: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/One%20Happy%20Finance%20Aruba.png',
        width: 1200,
        height: 630,
        alt: 'OneHappyFinance Aruba',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeUsps />
      <HomeCards />
      <HomeTrustBadges />
      <FeaturedGuides />
      <WhyChooseUs />
      <HomeCtaStrip />
    </>
  )
}


