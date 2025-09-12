import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@models": path.resolve(__dirname, "src/models"),
      "@api": path.resolve(__dirname, "src/api"),
      "@app": path.resolve(__dirname, "src/app"),
    },
  },
});
