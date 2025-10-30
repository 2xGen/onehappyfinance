
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';

const About = () => {
  const router = useRouter();
  const { locale } = useLocale();
  const t = useTranslations();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-background via-white to-background relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
           {/* Text Content - Order 1 on mobile */}
           <motion.div
            className="order-1 md:order-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
              {t('about.title')}
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 text-center md:text-left">
              <p>
                {t('about.paragraph1')}
              </p>
              <p>
                {t('about.paragraph2')} <span className="text-primary font-semibold">{t('about.highlight')}</span> {t('about.paragraph2End')}
              </p>
            </div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex justify-center md:justify-start mt-8"
            >
              <Button 
                size="lg" 
                onClick={() => router.push(addLocaleToPath('/aw/guides', locale))}
                className="shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
              >
                {t('about.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Content - Order 2 on mobile */}
          <motion.div
            className="relative order-2 md:order-1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 }
            }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 -rotate-3 md:-rotate-3 ring-1 ring-black/5">
              <img 
                src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/one%20happy%20finance.png"
                alt="Smiling professional woman in an office setting" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
