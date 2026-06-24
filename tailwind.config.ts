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
        navy: "#153B67",
        forest: "#4C7D4A",
        mist: "#F5F6F8",
        ink: "#172033",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(21, 59, 103, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
