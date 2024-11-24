import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths"
import path from "node:path"
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: "./postcss.config.cjs",
  },
  plugins: [react(),tsconfigPaths()].filter(Boolean),
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
