import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ['.'],
  },
  reactStrictMode: true,
};

export default nextConfig;
