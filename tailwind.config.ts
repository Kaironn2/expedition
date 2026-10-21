import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { base: "oklch(0.10 0.008 60)", elevated: "oklch(0.13 0.010 55)" },
        gold: { 300: "#e9d3a0", 500: "#c9a96e", 700: "#9a8050" },
        text: { primary: "#e9e3d6", muted: "#8a8275" },
        border: { subtle: "#2a2520" },
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-serif)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
