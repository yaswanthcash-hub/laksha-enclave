import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        estate: {
          bg: "#FAF8F5",
          sand: "#F4F0E8",
          card: "#FFFFFF",
          forest: "#14382C",
          forestDark: "#0D261E",
          forestLight: "#1D4E3E",
          sage: "#7A8C78",
          gold: "#9E7E46",
          goldLight: "#B38E50",
          goldSoft: "#EADDC7",
          ivory: "#FFFFFF",
          text: "#1A211D",
          textMuted: "#59665E",
          border: "rgba(20, 56, 44, 0.1)",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
