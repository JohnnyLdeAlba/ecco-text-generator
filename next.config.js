/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  typescript: {
    ignoreBuildErrors: true,
  },

  output: 'export',
  distDir: 'dist',
}

module.exports = nextConfig
