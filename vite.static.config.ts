import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
    minify: "terser",
    modulePreload: false,
    terserOptions: {
      compress: {
        drop_console: false,
        dead_code: true,
      },
      mangle: true,
      format: {
        comments: false,
        ascii_only: true,
      },
    },
  },
});
