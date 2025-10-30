
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/src/hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from '@/src/contexts/LocaleContext';
import Link from 'next/link';
import { useLocale } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';

const FeaturedGuides = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const t = useTranslations();
  const { locale } = useLocale();

  const guides =
    locale === 'nl'
      ? [
          {
            title: 'Hypotheek in Aruba: Complete Gids voor Inwoners en Niet-Inwoners',
            excerpt: 'Zo krijg je een hypotheek in Aruba — stap voor stap uitgelegd.',
            category: 'Hypotheken',
            imgAlt: 'Hypotheek in Aruba',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20to%20Get%20a%20Mortgage%20in%20Aruba.png',
            link: `/${locale}/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners`,
          },
          {
            title: 'Kunnen Buitenlanders een Huis Kopen op Aruba?',
            excerpt: 'Eigendom vs erfpacht, proces, kosten en hypotheken voor niet-ingezetenen.',
            category: 'Hypotheken',
            imgAlt: 'Kunnen Buitenlanders een Huis Kopen op Aruba?',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png',
            link: `/${locale}/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba-gids-2025`,
          },
          {
            title: 'Eigendom vs. Erfpacht in Aruba',
            excerpt: 'Verschillen, kosten, beperkingen en financieringsopties in Aruba.',
            category: 'Hypotheken',
            imgAlt: 'Eigendom vs. Erfpacht in Aruba',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Freehold%20vs.%20Lease%20Land%20in%20Aruba.png',
            link: `/${locale}/aw/guides/eigendom-vs-erfpacht-in-aruba-2025-gids`,
          },
        ]
      : [
          {
            title: 'How to Get a Mortgage in Aruba',
            excerpt: 'A complete guide to qualifying, applying, and closing in Aruba.',
            category: 'Mortgages',
            link: '/aw/guides/how-to-get-a-mortgage-in-aruba',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20to%20Get%20a%20Mortgage%20in%20Aruba.png',
            imgAlt: 'How to Get a Mortgage in Aruba'
          },
          {
            title: 'Can Foreigners Buy Property in Aruba?',
            excerpt: 'Freehold vs lease land, process, costs, and financing for non-residents.',
            category: 'Mortgages',
            link: '/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png',
            imgAlt: 'Can Foreigners Buy Property in Aruba'
          },
          {
            title: 'Freehold vs. Lease Land in Aruba',
            excerpt: 'Understand rights, fees, restrictions, and financing differences.',
            category: 'Mortgages',
            link: '/aw/guides/freehold-vs-lease-land-in-aruba',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Freehold%20vs.%20Lease%20Land%20in%20Aruba.png',
            imgAlt: 'Freehold vs. Lease Land in Aruba'
          },
        ];

  const displayedGuides = guides.slice(0, 3);

  return (
    <section id="guides" ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-white via-background to-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-[28px] font-bold mb-4">{t('featuredGuides.title')}</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t('featuredGuides.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedGuides.map((guide, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/5 overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 border border-white/80 hover:border-primary/20"
            >
              <Link href={guide.link} className="block">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={guide.imgAlt} src={guide.image} />
                </div>
              </Link>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-3">
                  {guide.category}
                </span>
                <Link href={guide.link} className="block">
                  <h3 className="font-heading text-lg font-semibold mb-3 text-foreground leading-tight">
                    {guide.title}
                  </h3>
                </Link>
                <p className="text-foreground/80 mb-4 leading-relaxed text-sm">
                  {guide.excerpt}
                </p>
                <Link href={guide.link} className="inline-flex items-center text-primary hover:text-primary-hover font-semibold transition-colors">
                  {t('featuredGuides.readMore')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={addLocaleToPath('/aw/guides', locale)}
            className="inline-flex items-center px-5 py-3 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors"
          >
            {locale === 'nl' ? 'Bekijk alle gidsen' : 'View all guides'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
