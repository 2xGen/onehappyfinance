/**
 * Next.js configuration for OneHappyFinance (ESM)
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{ source: '/en/aw/guides/can-foreigners-buy-property-in-aruba-2025-guide', destination: '/en/aw/guides/can-foreigners-buy-property-in-aruba', permanent: true },
			{ source: '/en/aw/guides/mortgage-requirements-in-aruba-2025-guide', destination: '/en/aw/guides/mortgage-requirements-in-aruba', permanent: true },
			{ source: '/nl/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba-gids-2025', destination: '/nl/aw/guides/kunnen-buitenlanders-een-huis-kopen-op-aruba', permanent: true },
			{ source: '/nl/aw/guides/hypotheek-vereisten-in-aruba-2025-gids', destination: '/nl/aw/guides/hypotheek-vereisten-in-aruba', permanent: true },
			{ source: '/nl/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba-2025-gids', destination: '/nl/aw/guides/wat-is-een-annuiteitenhypotheek-in-aruba', permanent: true },
			{ source: '/nl/aw/guides/hoeveel-kun-je-lenen-in-aruba-2025-gids', destination: '/nl/aw/guides/hoeveel-kun-je-lenen-in-aruba', permanent: true },
			{ source: '/nl/aw/guides/eigendom-vs-erfpacht-in-aruba-2025-gids', destination: '/nl/aw/guides/eigendom-vs-erfpacht-in-aruba', permanent: true },
			{ source: '/nl/about-us', destination: '/nl/over-ons', permanent: true },
			{ source: '/en/over-ons', destination: '/en/about-us', permanent: true },
		];
	},
	images: {
		domains: ['soaacpusdhyxwucjhhpy.supabase.co'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'soaacpusdhyxwucjhhpy.supabase.co',
				pathname: '/storage/v1/object/public/**',
			},
		],
	},
};

export default nextConfig;
