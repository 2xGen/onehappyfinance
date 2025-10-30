/**
 * Next.js configuration for OneHappyFinance (ESM)
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
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
