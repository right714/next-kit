import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{js,ts,jsx,tsx,css,scss}"],
    exclude: ["_templates", "node_modules", ".git", ".husky", ".next", ".storybook", "out", "public"],
  },
});
