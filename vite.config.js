import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Force classic JSX runtime so React is always imported
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
});
