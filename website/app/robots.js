export default function robots() {
	const baseUrl = 'https://onehappyfinance.com';
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
