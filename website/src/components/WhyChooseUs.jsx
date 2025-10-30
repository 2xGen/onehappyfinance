
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/src/hooks/useInView';
import { MapPin, Eye, Ban, Gift, Users, BarChart } from 'lucide-react';
import { useTranslations } from '@/src/contexts/LocaleContext';

const WhyChooseUs = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const t = useTranslations();

  const reasons = [
    {
      icon: MapPin,
      text: t('whyChooseUs.reasons.focused')
    },
    {
      icon: Eye,
      text: t('whyChooseUs.reasons.transparent')
    },
    {
      icon: Ban,
      text: t('whyChooseUs.reasons.noPressure')
    },
    {
      icon: Gift,
      text: t('whyChooseUs.reasons.freeResources')
    },
    {
      icon: Users,
      text: t('whyChooseUs.reasons.helpingAll')
    },
    {
      icon: BarChart,
      text: t('whyChooseUs.reasons.upToDate')
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-primary via-blue-600 to-primary relative-z">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-[28px] font-bold mb-6 text-white">{t('whyChooseUs.title')}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0 ring-1 ring-white/20">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
              <p className="text-lg text-white/90 leading-relaxed">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
