/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': '375px',
      // => @media (min-width: 375px) { ... }
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}