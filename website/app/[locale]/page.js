'use client';

import Hero from '@/src/components/Hero'
import About from '@/src/components/About'
import OurApproach from '@/src/components/OurApproach'
import FeaturedGuides from '@/src/components/FeaturedGuides'
import WhyChooseUs from '@/src/components/WhyChooseUs'

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


