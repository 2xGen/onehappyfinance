export const locales = ['en', 'nl'];
export const defaultLocale = 'en';

export const localeNames = {
  en: 'English',
  nl: 'Nederlands',
};

export function getLocaleFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (locales.includes(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}

export function removeLocaleFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (locales.includes(firstSegment)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

export function addLocaleToPath(pathname, locale) {
  const cleanPath = pathname.startsWith('/') ? pathname : '/' + pathname;
  const segments = cleanPath.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  // If path already has a locale, replace it
  if (locales.includes(firstSegment)) {
    segments[0] = locale;
    return '/' + segments.join('/');
  }
  
  // Add locale at the beginning
  return '/' + locale + cleanPath;
}

// Map corresponding slugs between locales for pages whose slugs differ
export const localizedSlugPairs = [
  {
    en: '/aw/guides/how-to-get-a-mortgage-in-aruba',
    nl: '/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners',
  },
  {
    en: '/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide',
    nl: '/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba-gids-2025',
  },
  {
    en: '/aw/guides/mortgage-requirements-in-aruba-2025-guide',
    nl: '/aw/guides/hypotheek-vereisten-in-aruba-2025-gids',
  },
  {
    en: '/aw/guides/what-is-an-annuity-mortgage-in-aruba',
    nl: '/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba-2025-gids',
  },
  {
    en: '/aw/guides/how-much-can-you-borrow-in-aruba',
    nl: '/aw/guides/hoeveel-kun-je-lenen-in-aruba-2025-gids',
  },
  {
    en: '/aw/guides/freehold-vs-lease-land-in-aruba',
    nl: '/aw/guides/eigendom-vs-erfpacht-in-aruba-2025-gids',
  },
];

// Given a pathname without the locale prefix, translate to the equivalent path in newLocale if known
export function translatePathLocale(pathnameWithoutLocale, newLocale) {
  // Exact match first
  for (const pair of localizedSlugPairs) {
    const fromLocales = Object.keys(pair);
    for (const fromLocale of fromLocales) {
      if (pathnameWithoutLocale === pair[fromLocale]) {
        const target = pair[newLocale] || pair[fromLocale];
        return target;
      }
    }
  }
  return pathnameWithoutLocale;
}

