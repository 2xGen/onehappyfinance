'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';
import { PILLAR_SLUGS, PILLAR_META } from '@/src/lib/pillars';

export default function HomeCards() {
  const t = useTranslations();
  const { locale } = useLocale();

  const bgImageUrl = "https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/One%20Happy%20Finance/property%20in%20aruba.png";

  const pillarSlugs = PILLAR_SLUGS[locale] || PILLAR_SLUGS.en;

  return (
    <section
      className="relative py-16 lg:py-20 min-h-[400px] bg-primary-light"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-foreground/50" aria-hidden="true" />
      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-white/10 flex flex-col">
            <div className="border-l-4 border-primary pl-5 mb-6">
              <h2 className="text-foreground text-xl lg:text-2xl font-bold m-0">
                {t('homeCards.title')}
              </h2>
            </div>
            <p className="text-foreground/85 text-[17px] lg:text-[18px] leading-relaxed mb-8 max-w-2xl">
              {t('homeCards.paragraph')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Link
                href={addLocaleToPath('/aw/guides', locale)}
                className="inline-flex items-center justify-center gap-2.5 py-4 px-7 bg-primary text-white rounded-xl font-semibold text-[17px] shadow-[0_4px_14px_rgba(0,112,186,0.35)] hover:bg-primary-hover hover:shadow-[0_6px_20px_rgba(0,112,186,0.4)] hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('homeCards.ctaGuides')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href={addLocaleToPath('/connect', locale)}
                className="inline-flex items-center justify-center gap-2.5 py-4 px-7 border-2 border-foreground/20 text-foreground rounded-xl font-semibold text-[17px] bg-foreground/[0.03] hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                {t('homeCards.ctaConnect')}
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-12 flex flex-col border border-primary/20 shadow-[0_4px_24px_rgba(0,112,186,0.12)] h-full">
            <div className="border-l-4 border-primary pl-5 mb-6">
              <h3 className="text-foreground text-lg font-bold m-0">
                {t('homeCards.quickLinksTitle')}
              </h3>
            </div>
            <nav className="flex flex-col gap-1" aria-label={t('homeCards.quickLinksTitle')}>
              {pillarSlugs.map((slug) => {
                const meta = PILLAR_META[locale]?.[slug];
                const title = meta?.title || slug;
                const href = addLocaleToPath(`/aw/${slug}`, locale);
                return (
                  <Link
                    key={slug}
                    href={href}
                    className="group flex items-center justify-between gap-3 py-3 px-4 rounded-xl text-foreground/85 font-medium text-[15px] hover:bg-primary/10 hover:text-primary transition-colors border border-transparent hover:border-primary/20"
                  >
                    <span>{title}</span>
                    <svg className="w-4 h-4 shrink-0 text-primary/60 group-hover:text-primary group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
