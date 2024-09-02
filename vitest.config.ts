import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    css: false,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/utils/test/setup.js",
    include: ["src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    coverage: {
      reporter: ["text", "lcov"],
      include: ["src/**"],
    },
  },
});
