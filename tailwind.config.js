/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': {'max': '600px'},
      // => @media (max-width: 430px) { ... }
      'tablet': {'max': '1235px'},
      // => @media (max-width: 820px) { ... }
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}