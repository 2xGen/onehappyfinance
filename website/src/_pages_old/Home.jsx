
import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import OurApproach from '@/components/OurApproach';
import FeaturedGuides from '@/components/FeaturedGuides';
import WhyChooseUs from '@/components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>OneHappyFinance - Your Trusted Guide to Mortgages, Insurance & Finance in Aruba</title>
        <meta name="description" content="Expert financial advice for Aruba. Learn about mortgages, insurance, pensions, and property buying. Simplified financial guidance for residents and expats in Aruba." />
        <meta name="keywords" content="Aruba mortgage, Aruba insurance, Aruba finance, buy property Aruba, Aruba pension, financial advice Aruba, home loan Aruba" />
        <meta property="og:title" content="OneHappyFinance - Financial Guidance for Aruba" />
        <meta property="og:description" content="Your trusted source for mortgages, insurance, and financial planning in Aruba" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://onehappyfinance.com" />
      </Helmet>
      <Hero />
      <div className="space-y-16 md:space-y-0">
        <About />
        <OurApproach />
      </div>
      <FeaturedGuides />
      <WhyChooseUs />
    </>
  );
};

export default Home;
