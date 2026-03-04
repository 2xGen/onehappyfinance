'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';

export default function HomeCtaStrip() {
  const t = useTranslations();
  const { locale } = useLocale();

  return (
    <section className="bg-primary text-white py-12 lg:py-14">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-white text-xl lg:text-2xl font-bold m-0 mb-2">
              {t('home.ctaStripTitle')}
            </h2>
            <p className="text-white/90 text-[17px] m-0">
              {t('home.ctaStripDescription')}
            </p>
          </div>
          <Link
            href={addLocaleToPath('/connect', locale)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary font-semibold text-[15px] px-6 py-3 hover:bg-white/95 transition-colors shrink-0 w-full md:w-auto"
          >
            {t('home.ctaStripButton')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
