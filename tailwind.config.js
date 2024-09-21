/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'a': '#45B0D2',
        'b': '#1F232F',
        'tertiary': '#F2ECF8',
        'quaternary': '#27254C',
        'quinary': '#040406',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

