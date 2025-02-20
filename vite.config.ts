import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import solidSvgPlugin from "vite-plugin-solid-svg";

export default defineConfig({
  plugins: [solid(), solidSvgPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``,
      },
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
