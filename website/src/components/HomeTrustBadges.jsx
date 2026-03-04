'use client';

import React from 'react';
import { useTranslations } from '@/src/contexts/LocaleContext';

export default function HomeTrustBadges() {
  const t = useTranslations();

  return (
    <section className="bg-white py-4 lg:py-6">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-3">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-lighter text-foreground text-[14px] font-medium">
            <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {t('home.trustBadge1')}
          </div>
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-lighter text-foreground text-[14px] font-medium">
            <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {t('home.trustBadge2')}
          </div>
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-lighter text-foreground text-[14px] font-medium">
            <svg className="w-4 h-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {t('home.trustBadge3')}
          </div>
        </div>
      </div>
    </section>
  );
}
