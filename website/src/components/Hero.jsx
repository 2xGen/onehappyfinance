
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useRouter } from 'next/navigation';
import { useTranslations } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';
import { useLocale } from '@/src/contexts/LocaleContext';

const AnimatedWord = ({ children, wordIndex, activeIndex }) => {
  const isHighlighted = activeIndex === wordIndex;

  return (
    <span 
      className={`inline-block transition-colors duration-500 ${
        isHighlighted ? 'text-primary' : 'text-foreground'
      }`}
    >
      {children}
    </span>
  );
};

const Hero = () => {
  const router = useRouter();
  const { locale } = useLocale();
  const t = useTranslations();
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % 3); // Cycle through 0, 1, 2
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-12 pt-24 md:pt-12 pb-10 md:pb-6">
          
          {/* Text Content (Order 1 on mobile and desktop) */}
          <div className="pt-8 md:pt-0 text-center md:text-left order-1">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-4xl md:text-[42px] font-bold mb-4 leading-tight text-foreground"
            >
              {t('hero.title')}{' '}
              <AnimatedWord wordIndex={0} activeIndex={activeWordIndex}>{t('hero.mortgages')}</AnimatedWord>
              {', '}
              <AnimatedWord wordIndex={1} activeIndex={activeWordIndex}>{t('hero.insurance')}</AnimatedWord>
              {', ' + t('hero.and') + ' '}
              <AnimatedWord wordIndex={2} activeIndex={activeWordIndex}>{t('hero.finance')}</AnimatedWord>
              {' ' + t('hero.inAruba')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl mb-6 text-foreground/80"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <Button 
                size="lg" 
                onClick={() => router.push(addLocaleToPath('/aw/guides', locale))}
                className="shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Image Content (Order 2 on mobile and desktop) */}
          <motion.div 
            className="relative h-80 md:h-auto order-2 mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 rotate-3 md:rotate-3 translate-x-2 md:translate-x-4 ring-1 ring-black/5">
               <img 
                src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/One%20Happy%20Finance%20Aruba.png" 
                alt="A luxurious modern home in Aruba with a pool overlooking the ocean at sunset" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

        </div>
      </div>
       <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
