import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bnavat: {
          base: "#121212",
          surface: "#1E1F22",
          border: "#2B2E33",
          primary: "#F4F3EE",
          shadow: "#5F6872",
          muted: "#9DA3AE",
          inverted: "#F9F9F8",
        },
      },
      fontFamily: {
        display: ["var(--font-brand-display)", "sans-serif"],
        heading: ["var(--font-brand-heading)", "sans-serif"],
        body: ["var(--font-brand-body)", "sans-serif"],
        mono: ["var(--font-brand-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
