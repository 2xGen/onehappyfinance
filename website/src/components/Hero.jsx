'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';
import { useLocale } from '@/src/contexts/LocaleContext';

const AnimatedWord = ({ children, wordIndex, activeIndex }) => {
  const isHighlighted = activeIndex === wordIndex;
  return (
    <span
      className={`inline-block transition-colors duration-500 ${isHighlighted ? 'text-primary' : 'text-foreground'}`}
    >
      {children}
    </span>
  );
};

const Hero = () => {
  const { locale } = useLocale();
  const t = useTranslations();
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-primary-lighter pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-16 lg:pb-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center">
          <div className="lg:pr-4 text-center lg:text-left">
            <p className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
              {t('hero.mortgages')} · {t('hero.insurance')} · {t('hero.finance')}
            </p>
            <h1
              className="text-foreground text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.25rem] font-bold leading-[1.12] tracking-tight"
              id="hero-heading"
            >
              {t('hero.title')}{' '}
              <AnimatedWord wordIndex={0} activeIndex={activeWordIndex}>{t('hero.mortgages')}</AnimatedWord>
              {', '}
              <AnimatedWord wordIndex={1} activeIndex={activeWordIndex}>{t('hero.insurance')}</AnimatedWord>
              {', ' + t('hero.and') + ' '}
              <AnimatedWord wordIndex={2} activeIndex={activeWordIndex}>{t('hero.finance')}</AnimatedWord>
              {' ' + t('hero.inAruba')}
            </h1>
            <p className="mt-5 text-foreground/80 text-lg sm:text-xl max-w-lg leading-relaxed mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href={addLocaleToPath('/aw/guides', locale)}
                className="inline-flex items-center gap-2 rounded-lg bg-primary text-white font-semibold text-[15px] px-5 py-3 hover:bg-primary-hover transition-colors shadow-[0_4px_14px_rgba(0,112,186,0.35)] hover:shadow-[0_6px_20px_rgba(0,112,186,0.4)] hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('hero.cta')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href={addLocaleToPath('/connect', locale)}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary text-primary font-semibold text-[15px] px-5 py-3 hover:bg-primary hover:text-white transition-colors"
              >
                {t('hero.ctaConnect')}
              </Link>
            </div>
            <p className="mt-8 text-foreground/70 text-base">
              {t('hero.quickLinksLabel')}{' '}
              <Link href={addLocaleToPath('/aw/guides', locale)} className="text-primary font-medium hover:underline">{t('hero.quickLinkGuides')}</Link>
              {' · '}
              <Link href={addLocaleToPath('/connect', locale)} className="text-primary font-medium hover:underline">{t('hero.quickLinkConnect')}</Link>
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-md"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                <img
                  src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/One%20Happy%20Finance%20Aruba.png"
                  alt="A luxurious modern home in Aruba with a pool overlooking the ocean at sunset"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
