/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Views/**/*.cshtml"], 
  theme: {
    extend: {
      colors: {
        mint: "#B9E9E8"
      },
      screens: {
        'hover': {'raw': '(hover: hover)'},
      }
    },
  },
  plugins: [],
}