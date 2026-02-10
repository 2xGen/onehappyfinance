'use client';

import React from 'react';
import { useCookieConsent } from '@/src/contexts/CookieConsentContext';
import { useTranslations } from '@/src/contexts/LocaleContext';

export default function CookieBanner() {
  const { bannerOpen, setConsent, setBannerOpen } = useCookieConsent();
  const t = useTranslations();

  if (!bannerOpen) return null;

  return (
    <div
      role="dialog"
      aria-label={t('cookie.title')}
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-5 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-foreground/80 leading-relaxed pr-2">
          {t('cookie.message')}
        </p>
        <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => setConsent('essential')}
            className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            {t('cookie.essentialOnly')}
          </button>
          <button
            type="button"
            onClick={() => setConsent('all')}
            className="px-4 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
          >
            {t('cookie.acceptAll')}
          </button>
        </div>
      </div>
    </div>
  );
}
