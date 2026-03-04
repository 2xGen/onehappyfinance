
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/src/hooks/useInView';
import { MapPin, Eye, Ban, Gift, Users, BarChart } from 'lucide-react';
import { useTranslations } from '@/src/contexts/LocaleContext';

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const t = useTranslations();

  const reasons = [
    { icon: MapPin, text: t('whyChooseUs.reasons.focused') },
    { icon: Eye, text: t('whyChooseUs.reasons.transparent') },
    { icon: Ban, text: t('whyChooseUs.reasons.noPressure') },
    { icon: Gift, text: t('whyChooseUs.reasons.freeResources') },
    { icon: Users, text: t('whyChooseUs.reasons.helpingAll') },
    { icon: BarChart, text: t('whyChooseUs.reasons.upToDate') },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-primary pl-5 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-foreground text-xl lg:text-2xl font-bold m-0"
          >
            {t('whyChooseUs.title')}
          </motion.h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-primary/15 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,112,186,0.12)] hover:border-primary/25 transition-all duration-300"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
                <reason.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <p className="text-foreground/85 text-[16px] leading-relaxed pt-0.5">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
