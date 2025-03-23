import bundleAnalyzer from '@next/bundle-analyzer';
import { base } from 'framer-motion/client';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  basePath: '/next-app-template',
  output: 'export',
});

// const nextConfig = {
//   output: 'export',

//   // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//   // trailingSlash: true,

//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   // skipTrailingSlashRedirect: true,

//   // Optional: Change the output directory `out` -> `dist`
//   // distDir: 'dist',
// };

// module.exports = nextConfig;
