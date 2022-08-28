/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    runtime: 'experimental-edge'
  }
}

module.exports = nextConfig
