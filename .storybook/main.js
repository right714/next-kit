const { mergeConfig } = require("vite");
const { resolve } = require("path");

module.exports = {
  stories: [
    "./Introduction.stories.mdx",
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async config => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@/styles": resolve(__dirname, "../src/styles"),
        },
      },
    });
  },
};
