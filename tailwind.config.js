/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        salsa: ["Salsa", "cursive"],
        merri: ["Merriweather", "serif"],
        domine: ["Domine", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        dark: {
          100: "#010101",
          90: "#170f28",
          80: "#181624",
          50: "#5425b0",
          // 40: "#ff6522",
          40: "#5425b0",
          10: "#BD9CFF",
          0: "#5425b0",
        },
        neutral: {
          100: "#000000",
          90: "#1A1A1A",
          80: "#333333",
          70: "#4D4D4D",
          60: "#666666",
          50: "#808080`",
          40: "#999999",
          30: "#B3B3B3",
          20: "#CCCCCC",
          10: "#E6E6E6",
          0: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
