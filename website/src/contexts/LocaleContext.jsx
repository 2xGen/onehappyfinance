'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { locales, defaultLocale, getLocaleFromPath, addLocaleToPath, removeLocaleFromPath, translatePathLocale } from '@/i18n/config';
import { getTranslations, t as translate } from '@/i18n/index';

const LocaleContext = createContext(null);

export function LocaleProvider({ children, initialLocale }) {
  const pathname = usePathname();
  // Use state to track locale and update when pathname or initialLocale changes
  const [locale, setLocale] = useState(() => initialLocale || getLocaleFromPath(pathname) || defaultLocale);
  
  useEffect(() => {
    // Update locale when pathname or initialLocale changes
    const newLocale = initialLocale || getLocaleFromPath(pathname) || defaultLocale;
    setLocale(newLocale);
  }, [pathname, initialLocale]);
  
  const translations = getTranslations(locale);

  const t = (key, params) => {
    const result = translate(translations, key, params);
    // Fallback to key if translation not found (helpful for debugging)
    return result || key;
  };

  const switchLocale = (newLocale) => {
    const cleanPath = removeLocaleFromPath(pathname);
    const translatedPath = translatePathLocale(cleanPath, newLocale);
    const newPath = addLocaleToPath(translatedPath, newLocale);
    return newPath;
  };

  return (
    <LocaleContext.Provider value={{ locale, translations, t, switchLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}

export function useTranslations() {
  const { t } = useLocale();
  return t;
}
