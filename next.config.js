/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vehicle_vault',
  assetPrefix: '/vehicle_vault',
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: true
  }
}

module.exports = nextConfig 