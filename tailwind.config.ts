import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Earth-tone palette aligned with AP Environmental Science branding */
        forest: {
          50: "#f3f8f4",
          100: "#e3efe6",
          200: "#c8dfce",
          300: "#9fc4aa",
          400: "#6fa37f",
          500: "#4d8560",
          600: "#3a6a4c",
          700: "#30553e",
          800: "#294534",
          900: "#22392c",
          950: "#111f18",
        },
        sage: {
          50: "#f6f7f4",
          100: "#e9ece3",
          200: "#d4daca",
          300: "#b5c0a7",
          400: "#96a584",
          500: "#788a66",
          600: "#5e6e50",
          700: "#4b5841",
          800: "#3e4837",
          900: "#353d30",
          950: "#1b2018",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
