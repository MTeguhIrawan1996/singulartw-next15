import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // new URL('https://raw.githubusercontent.com/mantinedev/**'),
      new URL('https://**.supabase.co/**'),
      new URL('https://github.com/**'),
    ],
  },
  reactStrictMode: true,
  // experimental: {
  //   serverMinification: false,
  // },
};

export default nextConfig;
