/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: function (config, options) {
    config.experiments = {
      topLevelAwait: true,
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
};

module.exports = nextConfig;
