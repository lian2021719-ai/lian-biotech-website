import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#2F352F",
        forest: "#4C7D4A",
        gold: "#A98245",
        clay: "#D8C7AA",
        mist: "#F8F7F3",
        ink: "#242820",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 60px rgba(47, 53, 47, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
