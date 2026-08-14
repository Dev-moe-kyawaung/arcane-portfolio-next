import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        void: "#06050b",
        gold: "#caa24e",
        violet: "#7b5cff",
        mist: "#a79dbd",
      },
      boxShadow: {
        glow: "0 0 40px rgba(202,162,78,.22)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
