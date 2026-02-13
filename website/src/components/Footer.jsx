'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/src/components/Logo';
import { useTranslations } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';
import { useLocale } from '@/src/contexts/LocaleContext';
import { useCookieConsent } from '@/src/contexts/CookieConsentContext';

const FOOTER_PARTNERSHIP_FALLBACK = 'Interested in partnering with us? Reach out at';

const Footer = () => {
  const { locale } = useLocale();
  const t = useTranslations();
  const { openBanner } = useCookieConsent();
  const partnershipText = t('footer.partnership');
  const partnershipLabel = partnershipText && partnershipText !== 'footer.partnership' ? partnershipText : FOOTER_PARTNERSHIP_FALLBACK;

  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Three columns: Brand | Nav | Contact — no labels, just clear blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 pb-8 border-b border-gray-700">
            <div className="text-center sm:text-left">
              <Link href={addLocaleToPath('/', locale)} className="inline-block mb-3">
                <Logo color="#FFFFFF" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('footer.tagline')}
              </p>
            </div>

            <div className="text-center sm:text-left flex flex-col gap-2">
              <p className="text-white font-semibold text-sm mb-1">{t('footer.quickLinks')}</p>
              <Link href={addLocaleToPath('/aw/guides', locale)} className="text-gray-400 text-sm hover:text-white transition-colors">
                {t('nav.guides')}
              </Link>
              <Link href={addLocaleToPath('/about-us', locale)} className="text-gray-400 text-sm hover:text-white transition-colors">
                {t('nav.about')}
              </Link>
              <Link href={addLocaleToPath('/connect', locale)} className="text-gray-400 text-sm hover:text-white transition-colors">
                {t('nav.connect')}
              </Link>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-sm mb-1">{t('footer.partnerWithUs')}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {partnershipLabel}{' '}
                <a
                  href="mailto:connect@onehappyfinance.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  connect@onehappyfinance.com
                </a>
              </p>
            </div>
          </div>

          <p className="text-white text-xs leading-relaxed py-6 text-center">
            {t('footer.disclaimer')}
          </p>

          <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <p className="text-gray-500 text-xs" suppressHydrationWarning>
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <button
              type="button"
              onClick={openBanner}
              className="text-gray-500 text-xs hover:text-gray-400 transition-colors underline underline-offset-2"
            >
              {t('footer.cookiePreferences')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
