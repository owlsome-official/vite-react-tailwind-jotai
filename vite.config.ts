/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
      apis: resolve(import.meta.dirname, "./src/apis"),
      assets: resolve(import.meta.dirname, "./src/assets"),
      components: resolve(import.meta.dirname, "./src/components"),
      layouts: resolve(import.meta.dirname, "./src/layouts"),
      pages: resolve(import.meta.dirname, "./src/pages"),
      utils: resolve(import.meta.dirname, "./src/utils"),
    },
  },
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:5000/",
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  test: {
    css: false,
    globals: true,
    environment: "jsdom",
    passWithNoTests: true,
    // setupFiles: "./src/utils/test/setup.ts",
    coverage: {
      reporter: ["text", "lcov"],
      include: ["src/**"],
    },
  },
});
