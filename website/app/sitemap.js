export default function sitemap() {
	const baseUrl = 'https://onehappyfinance.com';
	const locales = ['en', 'nl'];

	const corePaths = ['/', '/aw/guides', '/about-us', '/connect'];
	const nlPathMap = {
		'/about-us': '/over-ons',
	};
	const guidePaths = [
		'/aw/guides/how-to-get-a-mortgage-in-aruba',
		'/aw/guides/buying-property-in-aruba',
		'/aw/guides/costs-of-buying-property-in-aruba',
		'/aw/guides/can-foreigners-buy-property-in-aruba',
		'/aw/guides/mortgage-requirements-in-aruba',
		'/aw/guides/what-is-an-annuity-mortgage-in-aruba',
		'/aw/guides/how-much-can-you-borrow-in-aruba',
		'/aw/guides/freehold-vs-lease-land-in-aruba',
		'/aw/guides/property-ownership-differences-aruba',
		'/aw/guides/average-house-price-in-aruba',
		'/aw/guides/different-areas-in-aruba',
		'/aw/guides/foreign-buyers-aruba-practical-guide',
		'/aw/guides/understanding-insurance-in-aruba',
		'/aw/guides/health-car-insurance-aruba-guide',
		'/aw/guides/insurance-aruba-tips-for-new-residents',
	];

	const nlGuideSlugMap = {
		'/aw/guides/how-to-get-a-mortgage-in-aruba': '/aw/guides/hypotheek-in-aruba-complete-gids-voor-inwoners-en-niet-inwoners',
		'/aw/guides/buying-property-in-aruba': '/aw/guides/vastgoed-kopen-in-aruba',
		'/aw/guides/costs-of-buying-property-in-aruba': '/aw/guides/kosten-van-het-kopen-van-vastgoed-in-aruba',
		'/aw/guides/can-foreigners-buy-property-in-aruba': '/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba',
		'/aw/guides/mortgage-requirements-in-aruba': '/aw/guides/hypotheek-vereisten-in-aruba',
		'/aw/guides/what-is-an-annuity-mortgage-in-aruba': '/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba',
		'/aw/guides/how-much-can-you-borrow-in-aruba': '/aw/guides/hoeveel-kun-je-lenen-in-aruba',
		'/aw/guides/freehold-vs-lease-land-in-aruba': '/aw/guides/eigendom-vs-erfpacht-in-aruba',
		'/aw/guides/property-ownership-differences-aruba': '/aw/guides/vastgoedeigendom-verschillen-aruba',
		'/aw/guides/average-house-price-in-aruba': '/aw/guides/gemiddelde-huizenprijs-aruba',
		'/aw/guides/different-areas-in-aruba': '/aw/guides/verschillende-gebieden-in-aruba',
		'/aw/guides/foreign-buyers-aruba-practical-guide': '/aw/guides/vastgoed-kopen-aruba-als-buitenlander-praktische-gids',
		'/aw/guides/understanding-insurance-in-aruba': '/aw/guides/verzekering-in-aruba-begrijpen',
		'/aw/guides/health-car-insurance-aruba-guide': '/aw/guides/gezondheids-en-autoverzekering-aruba-gids',
		'/aw/guides/insurance-aruba-tips-for-new-residents': '/aw/guides/verzekering-aruba-tips-voor-nieuwe-inwoners',
	};

	const lastModified = new Date().toISOString();

	const entries = [];

	for (const locale of locales) {
		for (const p of corePaths) {
			const localized = locale === 'nl' && nlPathMap[p] ? nlPathMap[p] : p;
			entries.push({ url: `${baseUrl}/${locale}${localized === '/' ? '' : localized}`, lastModified });
		}
		for (const p of guidePaths) {
			const localized = locale === 'nl' && nlGuideSlugMap[p] ? nlGuideSlugMap[p] : p;
			entries.push({ url: `${baseUrl}/${locale}${localized}`, lastModified });
		}
	}

	return entries;
}
