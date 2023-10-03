/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Views/**/*.cshtml"],
  theme: {
    extend: {
      colors: {
        'black1': '#292E39',
        'black2': '#2e3440',
        'black3': '#3b4252',
        'grey1': '#434c5e',
        'grey2': '#4c566a',
        'mint': '#B9E9E8',
        'mint2': '#8fbcbb',
        'miku': '#449BA2',
        'miku2': '#94D5BD',
        'blue1': '#9EB6D2',
        'blue2': '#8193BB',
        'white1': '#d8dee9',
        'white2': '#e5e9f0',
        'white3': '#eceff4',
        'red': '#C8437C',
        'yellow': '#e3cb6e',
      },
    },
  },
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}