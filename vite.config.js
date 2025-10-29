import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Determine repo base path (used for GitHub Pages). When building on Vercel
  // we prefer the root path '/' so that assets and index.html resolve at the
  // deployment root. Vercel sets the VERCEL environment variable at build time.
  const repoName = env.VITE_REPO_NAME || "";
  const isVercel = !!process.env.VERCEL;
  const base = (!repoName || isVercel) ? '/' : `/${repoName}/`;

  return {
    base,
  plugins: [react(), tailwindcss()],
    server: {
      open: true,
      host: false, // Allow access from network devices
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
