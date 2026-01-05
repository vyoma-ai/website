import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1];
// With custom domain, serve from root. Otherwise use repo name as base path
const basePath = (isProd && repoName && !useCustomDomain) ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
};

export default nextConfig;
