/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
    reactRoot: true,
  },
};

module.exports = nextConfig;
