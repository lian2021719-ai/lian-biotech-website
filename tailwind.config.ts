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
        navy: "#0D2233",
        forest: "#1E6F6B",
        gold: "#D4AF37",
        clay: "#F2D48A",
        mist: "#F2E9D8",
        ink: "#1A1A1A",
        wine: "#8A2D2F",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 60px rgba(13, 34, 51, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
