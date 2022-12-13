/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  eslint: {
    dirs: ["src"],
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};
