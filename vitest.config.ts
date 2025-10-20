import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    css: false,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/utils/test/setup.js",
    coverage: {
      reporter: ["text", "lcov"],
      include: ["src/**"],
    },
  },
});
