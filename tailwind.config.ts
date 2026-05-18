import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF8F5",
        paper: "#F1EDE5",
        stone: {
          50:  "#EFEBE3",
          100: "#E2DDD3",
          200: "#C9C3B7",
          300: "#A8A299",
          400: "#857F75",
          500: "#6B665F",
          600: "#4F4B45",
          700: "#3A3833",
          800: "#272623",
          900: "#1A1A1A",
        },
        accent: "#3A3833",
        // Subtle warm metallic — use sparingly for hairline accents only
        brass: {
          300: "#D4B98C",
          400: "#C9A574",
          500: "#A07E54",
          600: "#856641",
        },
        // Cool/warm neutrals used inside material placeholders
        sand: "#E8DFCF",
        mist: "#D9D5CC",
        clay: "#C4B8A5",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.025em",
      },
      maxWidth: {
        prose2: "60ch",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
