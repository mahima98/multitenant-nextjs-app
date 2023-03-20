/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

module.exports = nextConfig;
