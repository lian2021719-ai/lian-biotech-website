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
        navy: "#183645",
        forest: "#1E6D83",
        gold: "#D7B66A",
        clay: "#D8C6A5",
        mist: "#F8F4EA",
        ink: "#17262D",
        wine: "#8A2D2F",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 60px rgba(24, 54, 69, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
