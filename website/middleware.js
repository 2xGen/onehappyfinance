import { NextResponse } from 'next/server';
import { locales, defaultLocale, removeLocaleFromPath, localizedSlugPairs } from './i18n/config';

const REDIRECT_OLD_NL_SLUGS = {
	'/aw/guides/onroerend-goed-kopen-in-aruba': '/aw/guides/vastgoed-kopen-in-aruba',
};

export function middleware(req) {
	const { pathname } = req.nextUrl;
	const segments = pathname.split('/').filter(Boolean);
	if (segments.length === 0) return NextResponse.next();
	const currentLocale = locales.includes(segments[0]) ? segments[0] : defaultLocale;
	const pathWithoutLocale = removeLocaleFromPath(pathname);

	// Redirect old Dutch URLs to new slugs (e.g. onroerend-goed -> vastgoed)
	if (currentLocale === 'nl' && REDIRECT_OLD_NL_SLUGS[pathWithoutLocale]) {
		const url = req.nextUrl.clone();
		url.pathname = `/nl${REDIRECT_OLD_NL_SLUGS[pathWithoutLocale]}`;
		return NextResponse.redirect(url, 308);
	}

	// Find a pair where pathWithoutLocale matches a value for the opposite locale
	for (const pair of localizedSlugPairs) {
		const en = pair.en;
		const nl = pair.nl;
		if (currentLocale === 'nl' && pathWithoutLocale === en) {
			const url = req.nextUrl.clone();
			url.pathname = `/nl${nl}`;
			return NextResponse.redirect(url, 308);
		}
		if (currentLocale === 'en' && pathWithoutLocale === nl) {
			const url = req.nextUrl.clone();
			url.pathname = `/en${en}`;
			return NextResponse.redirect(url, 308);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!_next|.*\.(?:png|jpg|jpeg|gif|webp|svg|ico)|api).*)'],
};

