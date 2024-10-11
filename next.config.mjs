/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export for GitHub Pages
    images: {
      unoptimized: true, // Disable image optimization (necessary for static export)
    },
    basePath: '/home', // Set this to your GitHub repo name (without the username part)
    assetPrefix: '/home/', // Same as basePath to properly serve assets
};
export default nextConfig;
