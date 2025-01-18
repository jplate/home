/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60,
    },
    async headers() {
        return [
            {
                source: '/(.*)', // Apply to all routes
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600', // Cache for 1 hour
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
