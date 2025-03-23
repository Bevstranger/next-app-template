import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  basePath: '/next-app-template', // Убедитесь, что это правильный basePath
  assetPrefix: '/next-app-template',
  output: 'export', // Используйте только если вам нужен статический экспорт
  // Дополнительные настройки, если необходимо
  images: {
    unoptimized: true, // Отключите оптимизацию изображений, если используете статический экспорт
  },
  
};

export default withBundleAnalyzer(nextConfig);

