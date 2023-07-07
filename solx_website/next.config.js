/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      net: false,
      tls: false,
      lokijs: false,
      pino: false,
      "pino-pretty": false,
      encoding: false,
      "child_process": false,
    };

    return config;
  },
};

module.exports = nextConfig;
