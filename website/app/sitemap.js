export default function sitemap() {
	const baseUrl = 'https://onehappyfinance.com';
	const locales = ['en', 'nl'];

	const corePaths = ['/', '/aw/guides'];
	const guidePaths = [
		'/aw/guides/how-to-get-a-mortgage-in-aruba',
		'/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide',
		'/aw/guides/mortgage-requirements-in-aruba-2025-guide',
		'/aw/guides/what-is-an-annuity-mortgage-in-aruba',
		'/aw/guides/how-much-can-you-borrow-in-aruba',
		'/aw/guides/freehold-vs-lease-land-in-aruba',
	];

	const nlGuideSlugMap = {
		'/aw/guides/how-to-get-a-mortgage-in-aruba': '/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners',
		'/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide': '/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba-gids-2025',
		'/aw/guides/mortgage-requirements-in-aruba-2025-guide': '/aw/guides/hypotheek-vereisten-in-aruba-2025-gids',
		'/aw/guides/what-is-an-annuity-mortgage-in-aruba': '/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba-2025-gids',
		'/aw/guides/how-much-can-you-borrow-in-aruba': '/aw/guides/hoeveel-kun-je-lenen-in-aruba-2025-gids',
		'/aw/guides/freehold-vs-lease-land-in-aruba': '/aw/guides/eigendom-vs-erfpacht-in-aruba-2025-gids',
	};

	const lastModified = new Date().toISOString();

	const entries = [];

	for (const locale of locales) {
		for (const p of corePaths) {
			entries.push({ url: `${baseUrl}/${locale}${p === '/' ? '' : p}`, lastModified });
		}
		for (const p of guidePaths) {
			const localized = locale === 'nl' && nlGuideSlugMap[p] ? nlGuideSlugMap[p] : p;
			entries.push({ url: `${baseUrl}/${locale}${localized}`, lastModified });
		}
	}

	return entries;
}
