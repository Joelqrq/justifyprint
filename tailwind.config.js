/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      animation: {
        "infinite-slider": "60000ms slider infinite linear"
      },
      keyframes: {
        slider: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
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
