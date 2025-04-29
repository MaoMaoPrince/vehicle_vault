/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: true
  }
}

module.exports = nextConfig 