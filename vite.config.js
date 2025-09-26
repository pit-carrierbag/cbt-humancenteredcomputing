import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import { glob } from "glob";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [],
  css: {
    postcss: {

      plugins: [tailwindcss()],
    }
  },
  build: {
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "./", "*.html"))
    },
    target: 'esnext',
    outDir: 'docs'
  },
});
