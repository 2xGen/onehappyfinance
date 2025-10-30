'use client';

import { useLocale } from '@/src/contexts/LocaleContext';
import { useRouter, usePathname } from 'next/navigation';
import { locales, localeNames } from '@/i18n/config';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    const newPath = switchLocale(newLocale);
    setIsOpen(false);
    router.push(newPath);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
        aria-label="Change language"
      >
        <Globe size={18} />
        <span className="hidden sm:inline">{localeNames[locale] || locale.toUpperCase()}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50 py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLanguageChange(loc)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  locale === loc
                    ? 'bg-primary text-white font-semibold'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


