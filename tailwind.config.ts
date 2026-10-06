import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#06142e", 900: "#0a1f44", 800: "#10306a", 700: "#17408a" },
        alert: { DEFAULT: "#e11d2e", dark: "#b80f1f" },
        go: { DEFAULT: "#16a34a", dark: "#12843c" },
      },
      fontFamily: { sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
