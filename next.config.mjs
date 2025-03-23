import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  basePath: '/next-app-template', // Убедитесь, что это правильный basePath
  output: 'export', // Используйте только если вам нужен статический экспорт
  // Дополнительные настройки, если необходимо
  images: {
    unoptimized: true, // Отключите оптимизацию изображений, если используете статический экспорт
  },
};

export default withBundleAnalyzer(nextConfig);
