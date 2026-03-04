'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, FileText, Key, Landmark, ClipboardList, Calculator, Route } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';
import { getGuides } from '@/src/lib/guidesData';
import HomeUsps from '@/src/components/HomeUsps';
import HomeTrustBadges from '@/src/components/HomeTrustBadges';
import HomeCtaStrip from '@/src/components/HomeCtaStrip';

const PILLAR_HERO_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/Mortages%20in%20Aruba.png';
const SECTION_BG_IMAGE = 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/property%20in%20aruba.png';

const TOPIC_ICONS = [FileText, Key, Landmark, ClipboardList, Calculator, Route];
const MAX_SUMMARY_LENGTH = 140;

function getSummary(text) {
  if (!text || !text.trim()) return '';
  const trimmed = text.trim();
  const dot = trimmed.indexOf('.');
  const firstSentence = dot > 0 ? trimmed.slice(0, dot + 1) : trimmed;
  if (firstSentence.length <= MAX_SUMMARY_LENGTH + 10) return firstSentence;
  return trimmed.length <= MAX_SUMMARY_LENGTH ? trimmed : trimmed.slice(0, MAX_SUMMARY_LENGTH).trim().replace(/\s+\S*$/, '') + '…';
}

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
      {/* Hero — same style as homepage: primary-lighter, two columns, CTAs */}
      <section className="bg-primary-lighter pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-16 lg:pb-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <p className="text-primary font-semibold text-base uppercase tracking-wider mb-4">
                {config.category}
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-foreground text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.25rem] font-bold leading-[1.12] tracking-tight"
              >
                {config.title}
              </motion.h1>
              <p className="mt-5 text-foreground/80 text-lg sm:text-xl max-w-lg leading-relaxed mx-auto lg:mx-0">
                {config.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href={addLocaleToPath('/aw/guides', locale)}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary text-white font-semibold text-[15px] px-5 py-3 hover:bg-primary-hover transition-colors shadow-[0_4px_14px_rgba(0,112,186,0.35)] hover:shadow-[0_6px_20px_rgba(0,112,186,0.4)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t('homeCards.ctaGuides')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href={addLocaleToPath('/connect', locale)}
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary text-primary font-semibold text-[15px] px-5 py-3 hover:bg-primary hover:text-white transition-colors"
                >
                  {t('homeCards.ctaConnect')}
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <motion.div
                className="relative w-full max-w-md"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                  <img
                    src={PILLAR_HERO_IMAGE}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* USP bar — same as homepage */}
      <HomeUsps />

      {/* Intro strip — image bg, one short line only */}
      <section
        className="relative py-14 lg:py-16 min-h-[200px] flex items-center bg-primary-light"
        style={{
          backgroundImage: `url(${SECTION_BG_IMAGE})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-foreground/50" aria-hidden="true" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {config.intro && (
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              {config.intro}
            </p>
          )}
        </div>
      </section>

      {/* Trust badges — same as homepage */}
      <HomeTrustBadges />

      {/* Guides — main content, high on page */}
      <section className="py-12 lg:py-16 bg-primary-lighter">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <h2 className="text-foreground text-2xl font-bold m-0">
              {t('guides.readGuidesAbout')} {config.category}
            </h2>
            <Link
              href={addLocaleToPath('/aw/guides', locale)}
              className="text-primary font-semibold text-[15px] hover:underline"
            >
              {t('featuredGuides.viewAll')}
            </Link>
          </div>
          <AnimatePresence>
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {guides.length > 0 ? (
                guides.map((guide, index) => (
                  <motion.article
                    layout
                    key={guide.link}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-2xl overflow-hidden group flex flex-col border border-primary/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_rgba(0,112,186,0.15)] hover:border-primary/20 transition-all duration-300"
                  >
                    <Link href={addLocaleToPath(guide.link, locale)} className="block overflow-hidden h-44 lg:h-48">
                      <Image
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={guide.imgAlt}
                        src={guide.imgSrc}
                        width={400}
                        height={200}
                      />
                    </Link>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-block self-start px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                        {guide.category}
                      </span>
                      <h3 className="font-heading text-lg font-semibold mb-3 text-foreground leading-tight flex-grow">
                        <Link href={addLocaleToPath(guide.link, locale)} className="hover:text-primary transition-colors">
                          {guide.title}
                        </Link>
                      </h3>
                      <p className="text-foreground/80 mb-4 leading-relaxed text-[15px]">{guide.excerpt}</p>
                      <Link
                        href={addLocaleToPath(guide.link, locale)}
                        className="text-primary font-semibold flex items-center gap-2 mt-auto hover:text-primary-hover transition-colors"
                      >
                        {t('guides.readMore')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="md:col-span-2 lg:col-span-3 text-center py-16 rounded-2xl bg-white/80 border border-primary/10"
                >
                  <p className="text-lg text-foreground/70">{t('guides.noResults')}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Key topics — grid of scannable cards (no wall of text) */}
      {overviewSections.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-4 border-primary pl-5 mb-10">
              <h2 className="text-foreground text-xl lg:text-2xl font-bold m-0">
                {t('guides.keyTopics')}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {overviewSections.map((sec, i) => {
                const Icon = TOPIC_ICONS[i % TOPIC_ICONS.length];
                const summary = getSummary(sec.content);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="group flex flex-col p-6 rounded-2xl border border-primary/15 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,112,186,0.12)] hover:border-primary/25 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-foreground text-[17px] leading-tight mb-2">
                          {sec.title}
                        </h3>
                        <p className="text-foreground/75 text-[15px] leading-relaxed line-clamp-3">
                          {summary}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Quick info, CTA, FAQ — same card style as homepage */}
      <main className="bg-primary-lighter/30 py-16 lg:py-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-10">
            {quickInfo.length > 0 && (
              <div className="bg-primary-lighter rounded-2xl p-8 lg:p-12 border border-primary/20 shadow-[0_4px_24px_rgba(0,112,186,0.12)]">
                <div className="border-l-4 border-primary pl-5 mb-6">
                  <h2 className="text-foreground text-xl lg:text-2xl font-bold m-0">
                    {t('guides.quickInfo')}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                  {quickInfo.map((item, i) => (
                    <div key={i} className="py-2">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground/80 text-[15px] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-2xl bg-primary text-white p-8 lg:p-12 text-center shadow-[0_4px_24px_rgba(0,112,186,0.25)] border border-primary/20">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase bg-white text-primary px-3 py-1.5 rounded-full mb-4">
                {t('guides.comingSoonBadge')}
              </span>
              <p className="text-lg md:text-xl font-semibold mb-2 text-white">{t('guides.pillarCtaTitle')}</p>
              <p className="text-white/90 text-base md:text-lg mb-6 max-w-md mx-auto leading-relaxed">
                {t('guides.pillarCtaDescription')}
              </p>
              <Link
                href={addLocaleToPath('/connect', locale)}
                className="inline-flex items-center justify-center gap-2 py-4 px-7 bg-white text-primary rounded-xl font-semibold text-[17px] hover:bg-white/95 transition-colors shadow-sm"
              >
                {t('guides.pillarCtaButton')}
              </Link>
            </div>

            {faqs.length > 0 && (
              <div className="bg-white rounded-2xl p-8 lg:p-12 border border-primary/20 shadow-[0_4px_24px_rgba(0,112,186,0.12)]">
                <div className="border-l-4 border-primary pl-5 mb-6">
                  <h2 className="text-foreground text-xl lg:text-2xl font-bold m-0">
                    {t('guides.faq')}
                  </h2>
                </div>
                <div className="divide-y divide-primary/10">
                  {faqs.map((item, i) => (
                    <div key={i} className="py-4 first:pt-0">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                        className="w-full text-left flex items-center justify-between gap-4 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <span className="font-medium text-foreground pr-4">{item.question}</span>
                        <ChevronDown
                          className={`shrink-0 w-5 h-5 text-primary/70 transition-transform ${openFaqIndex === i ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openFaqIndex === i && (
                        <p className="text-foreground/80 text-[15px] leading-relaxed pt-2 pl-0">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* CTA strip — same as homepage */}
      <HomeCtaStrip />
    </>
  );
}
