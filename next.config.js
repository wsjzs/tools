/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i2.mjj.rip',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'ice.frostsky.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
