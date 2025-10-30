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
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
