/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        "infinite-slider": "30000ms slider infinite linear"
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-100% - 1.5rem))" }
        }
      },
      fontFamily: {
        sans: ["Inter var"],
      },
      colors: {},
    },
  },
  plugins: [],
};
