'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { useTranslations, useLocale } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';

export const metadata = {
  openGraph: {
    images: [
      {
        url: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/onehappyfinance.png',
        width: 1200,
        height: 630,
        alt: 'OneHappyFinance Guides',
      },
    ],
  },
};

// Dummy AnimatePresence for layout animation
const AnimatePresence = ({ children }) => <>{children}</>;

export default function GuidesPage() {
  const { locale } = useLocale();
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState(t('guides.categories.all'));
  const [searchTerm, setSearchTerm] = useState('');

  const allGuides = useMemo(() => [
    {
      title: t('guides.items.howToGetMortgage.title'),
      excerpt: t('guides.items.howToGetMortgage.excerpt'),
      category: t('guides.items.howToGetMortgage.category'),
      link: '/aw/guides/how-to-get-a-mortgage-in-aruba',
      imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/How%20to%20Get%20a%20Mortgage%20in%20Aruba.png',
      imgAlt: 'How to Get a Mortgage in Aruba'
    },
    {
      title: t('guides.items.canForeignersBuyProperty.title'),
      excerpt: t('guides.items.canForeignersBuyProperty.excerpt'),
      category: t('guides.items.canForeignersBuyProperty.category'),
      link: '/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide',
      imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Can%20Foreigners%20Buy%20Property%20in%20Aruba.png',
      imgAlt: 'Can Foreigners Buy Property in Aruba'
    },
    {
      title: t('guides.items.mortgageRequirements.title'),
      excerpt: t('guides.items.mortgageRequirements.excerpt'),
      category: t('guides.items.mortgageRequirements.category'),
      link: '/aw/guides/mortgage-requirements-in-aruba-2025-guide',
      imgSrc: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortgage%20Requirements%20in%20Aruba.png',
      imgAlt: 'Mortgage Requirements in Aruba'
    },
  ], [t]);

  const categories = useMemo(() => [
    t('guides.categories.all'),
    t('guides.categories.mortgages'),
  ], [t]);

  const filteredGuides = useMemo(() => {
    return allGuides.filter(guide => {
      const matchesCategory = activeFilter === t('guides.categories.all') || guide.category === activeFilter;
      const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm, allGuides, t]);

  return (
    <>
      <div className="relative">
        {/* Fixed background image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortages%20in%20Aruba.png"
            alt="Mortgages in Aruba"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <header className="relative pt-24 pb-12 md:pt-32 md:pb-16 text-center z-10">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">{t('guides.title')}</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">{t('guides.subtitle')}</p>
          </motion.div>
        </header>

        <main className="container mx-auto px-4 py-16 relative z-10 bg-background">
          {/* Filter and Search Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-xl shadow-lg border">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeFilter === category ? 'default' : 'ghost'}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-md ${activeFilter === category ? 'bg-primary text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input 
                type="text"
                placeholder={t('guides.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full md:w-64"
              />
            </div>
          </div>

          {/* Guides Grid */}
          <AnimatePresence>
            <motion.div 
              layout 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredGuides.length > 0 ? (
                filteredGuides.map((guide, index) => (
                  <motion.article
                    layout
                    key={guide.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                  >
                    <Link href={addLocaleToPath(guide.link, locale)} className="block overflow-hidden h-48">
                      <Image 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        alt={guide.imgAlt} 
                        src={guide.imgSrc}
                        width={400}
                        height={200}
                      />
                    </Link>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-block self-start px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-3">
                        {guide.category}
                      </span>
                      <h3 className="font-heading text-lg font-semibold mb-3 text-foreground leading-tight flex-grow">
                        <Link href={addLocaleToPath(guide.link, locale)} className="hover:text-primary transition-colors">{guide.title}</Link>
                      </h3>
                      <p className="text-foreground/80 mb-4 leading-relaxed text-sm">
                        {guide.excerpt}
                      </p>
                      <Link href={addLocaleToPath(guide.link, locale)} className="text-primary hover:text-primary-hover font-semibold group-hover:text-primary-hover flex items-center transition-colors mt-auto">
                        {t('guides.readMore')}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="lg:col-span-3 text-center py-16"
                >
                  <p className="text-xl text-gray-500">{t('guides.noResults')}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}

