const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
        sans: 'Roboto, sans-serif'
      },
      colors: {
        teal: colors.teal,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
