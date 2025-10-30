import Hero from '@/src/components/Hero'
import About from '@/src/components/About'
import OurApproach from '@/src/components/OurApproach'
import FeaturedGuides from '@/src/components/FeaturedGuides'
import WhyChooseUs from '@/src/components/WhyChooseUs'

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
      <div className="space-y-16 md:space-y-0">
        <About />
        <OurApproach />
      </div>
      <FeaturedGuides />
      <WhyChooseUs />
    </>
  )
}


