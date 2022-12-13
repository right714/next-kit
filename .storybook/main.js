const { resolve } = require("path");
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", {
    name: "@storybook/addon-postcss",
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  }, "@storybook/addon-storysource"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../public"],
  webpackFinal: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin());

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
            },
          },
        },
        "sass-loader",
      ],
      include: resolve(__dirname, "../src"),
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/styles": resolve(__dirname, "../src/styles"),
      "@/pages": resolve(__dirname, "../src/pages"),
      "@/components": resolve(__dirname, "../src/components"),
      "@/layouts": resolve(__dirname, "../src/components/layouts"),
      "@/features": resolve(__dirname, "../src/components/features"),
      "@/ui": resolve(__dirname, "../src/components/ui"),
      "@/hooks": resolve(__dirname, "../src/hooks"),
      "@/stores": resolve(__dirname, "../src/stores"),
      "@/types": resolve(__dirname, "../src/types"),
      "@/utils": resolve(__dirname, "../src/utils"),
    };

    return config;
  },
};
