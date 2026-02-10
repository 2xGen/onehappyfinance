
'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/src/components/Logo';
import { useTranslations } from '@/src/contexts/LocaleContext';
import { addLocaleToPath } from '@/i18n/config';
import { useLocale } from '@/src/contexts/LocaleContext';
import { useCookieConsent } from '@/src/contexts/CookieConsentContext';

const Footer = () => {
  const { locale } = useLocale();
  const t = useTranslations();
  const { openBanner } = useCookieConsent();

  return (
    <footer id="contact" className="bg-gray-800 text-white py-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               <Link href={addLocaleToPath('/', locale)} className="mb-4">
                 <Logo color="#FFFFFF" />
               </Link>
              <p className="text-gray-300 leading-relaxed max-w-xs mx-auto md:mx-0">
                {t('footer.tagline')}
              </p>
            </div>

            <div className="text-center md:text-right">
                <p className="text-gray-400 text-sm max-w-sm">
                    {t('footer.disclaimer')}
                </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <p className="text-gray-400" suppressHydrationWarning>
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <button
              type="button"
              onClick={openBanner}
              className="text-gray-400 hover:text-gray-300 text-sm underline underline-offset-2 transition-colors"
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
