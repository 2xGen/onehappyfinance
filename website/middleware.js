import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has a locale, allow it
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Get locale from Accept-Language header or use default
  const locale = getLocaleFromHeaders(request) || defaultLocale;

  // Redirect to locale-prefixed path
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

function getLocaleFromHeaders(request) {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return null;

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, q = 'q=1'] = lang.trim().split(';');
      const quality = parseFloat(q.split('=')[1]) || 1;
      return { code: code.split('-')[0].toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find first matching locale
  for (const lang of languages) {
    if (locales.includes(lang.code)) {
      return lang.code;
    }
  }

  return null;
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public files
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

