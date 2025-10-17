import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0b0c0f",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
