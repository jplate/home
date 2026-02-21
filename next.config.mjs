/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/home',
    images: {
        unoptimized: true,
        minimumCacheTTL: 20000,
    },
};

export default nextConfig;
