const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(__dirname, "src/app/**/*.{ts,tsx}"),
    path.join(__dirname, "src/components/**/*.{ts,tsx}"),
    path.join(__dirname, "src/lib/**/*.{ts,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        champagne: "#F5E6CC",
        root: "#E8D9C0",
        gold: "#C8973A",
        turmeric: "#C8892A",
        sandal: "#C4A882",
        terra: "#7A3B1E",
        umber: "#8C6E3F",
        ink: "#2D1E08",
        deepink: "#1A0F04",
        rainforest: "#2C4A35",
        vetiver: "#4A6741",
        redsoil: "#6B1E1E",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
