const siteUrl = 'https://onehappyfinance.com';

const locales = ['en', 'nl'];

const corePaths = ['/'];

const guideSlugs = [
	// EN base slugs; we will map to NL equivalents below
	'/aw/guides',
	'/aw/guides/how-to-get-a-mortgage-in-aruba',
	'/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide',
	'/aw/guides/mortgage-requirements-in-aruba-2025-guide',
	'/aw/guides/what-is-an-annuity-mortgage-in-aruba',
	'/aw/guides/how-much-can-you-borrow-in-aruba',
	'/aw/guides/freehold-vs-lease-land-in-aruba',
];

const nlSlugMap = {
	'/aw/guides': '/aw/guides',
	'/aw/guides/how-to-get-a-mortgage-in-aruba': '/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners',
	'/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide': '/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba-gids-2025',
	'/aw/guides/mortgage-requirements-in-aruba-2025-guide': '/aw/guides/hypotheek-vereisten-in-aruba-2025-gids',
	'/aw/guides/what-is-an-annuity-mortgage-in-aruba': '/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba-2025-gids',
	'/aw/guides/how-much-can-you-borrow-in-aruba': '/aw/guides/hoeveel-kun-je-lenen-in-aruba-2025-gids',
	'/aw/guides/freehold-vs-lease-land-in-aruba': '/aw/guides/eigendom-vs-erfpacht-in-aruba-2025-gids',
};

export default function sitemap() {
	const urls = [];

	for (const locale of locales) {
		// home
		for (const p of corePaths) {
			urls.push({ url: `${siteUrl}/${locale}${p === '/' ? '' : p}`, lastModified: new Date().toISOString() });
		}
		// guides base + pages
		for (const enPath of guideSlugs) {
			const pathForLocale = locale === 'en' ? enPath : nlSlugMap[enPath];
			if (!pathForLocale) continue;
			urls.push({ url: `${siteUrl}/${locale}${pathForLocale}`, lastModified: new Date().toISOString() });
		}
	}

	return urls;
}
