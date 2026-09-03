import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Unit-1-Life-Line-Services-Rian-B/",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
