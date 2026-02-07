export default function sitemap() {
	const baseUrl = 'https://onehappyfinance.com';
	const locales = ['en', 'nl'];

	const corePaths = ['/', '/aw/guides'];
	const guidePaths = [
		'/aw/guides/how-to-get-a-mortgage-in-aruba',
		'/aw/guides/can-foreigners-buy-property-in-aruba',
		'/aw/guides/mortgage-requirements-in-aruba',
		'/aw/guides/what-is-an-annuity-mortgage-in-aruba',
		'/aw/guides/how-much-can-you-borrow-in-aruba',
		'/aw/guides/freehold-vs-lease-land-in-aruba',
		'/aw/guides/understanding-insurance-in-aruba',
		'/aw/guides/health-car-insurance-aruba-guide',
		'/aw/guides/insurance-aruba-tips-for-new-residents',
	];

	const nlGuideSlugMap = {
		'/aw/guides/how-to-get-a-mortgage-in-aruba': '/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners',
		'/aw/guides/can-foreigners-buy-property-in-aruba': '/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba',
		'/aw/guides/mortgage-requirements-in-aruba': '/aw/guides/hypotheek-vereisten-in-aruba',
		'/aw/guides/what-is-an-annuity-mortgage-in-aruba': '/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba',
		'/aw/guides/how-much-can-you-borrow-in-aruba': '/aw/guides/hoeveel-kun-je-lenen-in-aruba',
		'/aw/guides/freehold-vs-lease-land-in-aruba': '/aw/guides/eigendom-vs-erfpacht-in-aruba',
		'/aw/guides/understanding-insurance-in-aruba': '/aw/guides/verzekering-in-aruba-begrijpen',
		'/aw/guides/health-car-insurance-aruba-guide': '/aw/guides/gezondheids-en-autoverzekering-aruba-gids',
		'/aw/guides/insurance-aruba-tips-for-new-residents': '/aw/guides/verzekering-aruba-tips-voor-nieuwe-inwoners',
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
