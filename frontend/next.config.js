/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
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
      {
        source: "/api/user/currentUser",
        destination: "http://localhost:4000/api/user/currentUser", // Proxy to Backend
      },
      {
        source: "/api/user/logout",
        destination: "http://localhost:4000/api/user/logout", // Proxy to Backend
      },
      {
        source: "/api/user/:userId",
        destination: "http://localhost:4000/api/user/:userId", // Proxy to Backend
      },
      {
        source: "/api/blogs/create",
        destination: "http://localhost:4000/api/blogs/create", // Proxy to Backend
      },
      {
        source: "/api/blogs",
        destination: "http://localhost:4000/api/blogs", // Proxy to Backend
      },
      {
        source: "/api/blogs/:blogId",
        destination: "http://localhost:4000/api/blogs/:blogId", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
