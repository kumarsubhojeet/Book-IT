/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          primeBlue: "#E4204D",
          Secoundary_voilet: "#9C2C77",
        },
      screens: {
        xs: { max: "480px" },
        sm: { max: "780px" },
      },
    },
  },
  plugins: [],
}