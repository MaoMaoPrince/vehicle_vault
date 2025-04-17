/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: true
  },
  basePath: '/vehicle_vault',
}

module.exports = nextConfig 