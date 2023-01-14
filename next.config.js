/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ik.imagekit.io'],
  },
};

module.exports = nextConfig;
