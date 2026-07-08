import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
// uncomment and set `base` to '/<repo>/'. Not needed for Vercel/Netlify.
export default defineConfig({
  plugins: [react()],
  // base: "/acacia-hospital-management-system/",
});
