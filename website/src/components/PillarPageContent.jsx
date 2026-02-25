'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';
import { getGuides } from '@/src/lib/guidesData';

const AnimatePresence = ({ children }) => <>{children}</>;

export default function PillarPageContent({ pillarSlug, config }) {
  const { locale } = useLocale();
  const t = useTranslations();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const allGuides = useMemo(() => getGuides(locale), [locale]);
  const guides = useMemo(
    () => allGuides.filter((g) => g.category === config.category),
    [allGuides, config.category]
  );
  const quickInfo = config.quickInfo || [];
  const faqs = config.faqs || [];
  const overviewSections = config.overviewSections || [];

  return (
    <>
      <div className="relative">
        {/* Fixed background image — same as guides page */}
        <div className="fixed inset-0 z-0">
          <Image
            src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortages%20in%20Aruba.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>

        <header className="relative pt-24 pb-12 md:pt-32 md:pb-16 text-center z-10">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">{config.title}</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">{config.description}</p>
          </motion.div>
        </header>

        <main className="container mx-auto px-4 py-12 md:py-16 relative z-10 bg-background">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Card 1: Overview */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{t('guides.overview')}</h2>
                {config.intro && (
                  <p className="text-foreground/90 text-base leading-relaxed mb-8 max-w-2xl">
                    {config.intro}
                  </p>
                )}
                {overviewSections.length > 0 && (
                  <div className="space-y-6">
                    {overviewSections.map((sec, i) => (
                      <div key={i}>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{sec.title}</h3>
                        <p className="text-foreground/80 text-base leading-relaxed">
                          {sec.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Card 2: Key information — accent top bar */}
            {quickInfo.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-t-primary">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">{t('guides.quickInfo')}</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {quickInfo.map((item, i) => (
                      <div key={i}>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-foreground/80 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CTA — primary bar (own block) */}
            <div className="rounded-2xl bg-primary text-white p-8 md:p-10 text-center shadow-lg">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-white/95 text-primary px-3 py-1 rounded-full mb-4">
                {t('guides.comingSoonBadge')}
              </span>
              <p className="text-lg md:text-xl font-medium mb-3">{t('guides.pillarCtaTitle')}</p>
              <p className="text-white/90 text-base md:text-lg mb-6 max-w-md mx-auto leading-relaxed">{t('guides.pillarCtaDescription')}</p>
              <Link
                href={addLocaleToPath('/connect', locale)}
                className="inline-block text-base font-semibold bg-white text-primary px-5 py-2.5 rounded-lg hover:bg-white/95 transition-colors"
              >
                {t('guides.pillarCtaButton')}
              </Link>
            </div>

            {/* Card 3: FAQ — subtle gray background to differentiate */}
            {faqs.length > 0 && (
              <div className="bg-gray-50 rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">{t('guides.faq')}</h2>
                  <div className="divide-y divide-gray-200">
                    {faqs.map((item, i) => (
                      <div key={i} className="py-4 first:pt-0">
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                          className="w-full text-left flex items-center justify-between gap-4"
                        >
                          <span className="font-medium text-foreground pr-4">{item.question}</span>
                          <ChevronDown
                            className={`shrink-0 w-5 h-5 text-gray-400 transition-transform ${openFaqIndex === i ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {openFaqIndex === i && (
                          <p className="text-foreground/80 text-sm leading-relaxed pt-2">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Guides — full width below cards */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              {t('guides.readGuidesAbout')} {config.category}
            </h2>

          {/* Guides grid — same layout and card style as guides page */}
          <AnimatePresence>
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.length > 0 ? (
                guides.map((guide, index) => (
                  <motion.article
                    layout
                    key={guide.link}
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
                        <Link href={addLocaleToPath(guide.link, locale)} className="hover:text-primary transition-colors">
                          {guide.title}
                        </Link>
                      </h3>
                      <p className="text-foreground/80 mb-4 leading-relaxed text-sm">{guide.excerpt}</p>
                      <Link
                        href={addLocaleToPath(guide.link, locale)}
                        className="text-primary hover:text-primary-hover font-semibold group-hover:text-primary-hover flex items-center transition-colors mt-auto"
                      >
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
          </div>
        </main>
      </div>
    </>
  );
}
