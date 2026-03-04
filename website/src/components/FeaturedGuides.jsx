
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/src/hooks/useInView';
import { useTranslations } from '@/src/contexts/LocaleContext';
import Link from 'next/link';
import { useLocale } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';

const FeaturedGuides = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
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
            path: '/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners',
          },
          {
            title: 'Kunnen Buitenlanders een Huis Kopen op Aruba?',
            excerpt: 'Eigendom vs erfpacht, proces, kosten en hypotheken voor niet-ingezetenen.',
            category: 'Hypotheken',
            imgAlt: 'Kunnen Buitenlanders een Huis Kopen op Aruba?',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png',
            path: '/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba',
          },
          {
            title: 'Eigendom vs. Erfpacht in Aruba',
            excerpt: 'Verschillen, kosten, beperkingen en financieringsopties in Aruba.',
            category: 'Hypotheken',
            imgAlt: 'Eigendom vs. Erfpacht in Aruba',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Freehold%20vs.%20Lease%20Land%20in%20Aruba.png',
            path: '/aw/guides/eigendom-vs-erfpacht-in-aruba',
          },
        ]
      : [
          {
            title: 'How to Get a Mortgage in Aruba',
            excerpt: 'A complete guide to qualifying, applying, and closing in Aruba.',
            category: 'Mortgages',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20to%20Get%20a%20Mortgage%20in%20Aruba.png',
            imgAlt: 'How to Get a Mortgage in Aruba',
            path: '/aw/guides/how-to-get-a-mortgage-in-aruba',
          },
          {
            title: 'Can Foreigners Buy Property in Aruba?',
            excerpt: 'Freehold vs lease land, process, costs, and financing for non-residents.',
            category: 'Mortgages',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png',
            imgAlt: 'Can Foreigners Buy Property in Aruba',
            path: '/aw/guides/can-foreigners-buy-property-in-aruba',
          },
          {
            title: 'Freehold vs. Lease Land in Aruba',
            excerpt: 'Understand rights, fees, restrictions, and financing differences.',
            category: 'Mortgages',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Freehold%20vs.%20Lease%20Land%20in%20Aruba.png',
            imgAlt: 'Freehold vs. Lease Land in Aruba',
            path: '/aw/guides/freehold-vs-lease-land-in-aruba',
          },
        ];

  const displayedGuides = guides.slice(0, 3);

  return (
    <section id="guides" ref={ref} className="py-12 lg:py-16 bg-primary-lighter">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <h2 className="text-foreground text-2xl font-bold m-0">
            {t('featuredGuides.title')}
          </h2>
          <Link
            href={addLocaleToPath('/aw/guides', locale)}
            className="text-primary font-medium text-[17px] hover:underline inline-flex items-center gap-1"
          >
            {locale === 'nl' ? 'Bekijk alle gidsen' : 'View all guides'}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512"><path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" /></svg>
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
          {displayedGuides.map((guide, index) => {
            const href = addLocaleToPath(guide.path, locale);
            return (
              <li key={index}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-black/5"
                >
                  <Link href={href} className="block">
                    <div className="aspect-[2/1] bg-muted overflow-hidden">
                      <img className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300" alt={guide.imgAlt} src={guide.image} />
                    </div>
                  </Link>
                  <div className="p-6">
                    <span className="text-foreground/50 text-[15px]">{guide.category}</span>
                    <h3 className="mt-2 text-foreground text-lg font-bold leading-snug">
                      <Link href={href} className="text-foreground hover:text-primary">
                        {guide.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-foreground/80 text-[17px] line-clamp-2 leading-relaxed">
                      {guide.excerpt}
                    </p>
                    <Link href={href} className="inline-block mt-3 text-primary font-medium text-[17px] hover:underline">
                      {t('featuredGuides.readMore')}
                    </Link>
                  </div>
                </motion.article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedGuides;
