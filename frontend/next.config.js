/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/user/signup",
        destination: "http://localhost:4000/api/user/signup", // Proxy to Backend
      },
      {
        source: "/api/user/login",
        destination: "http://localhost:4000/api/user/login", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
