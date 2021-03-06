const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
        sans: 'Roboto, sans-serif'
      },
      colors: {
        teal: colors.teal,
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        'blue-facebook': '#3b5998',
        'gray-github': '#333',
        'skyblue-twitter': '#00acee',
        'orange-stackoverflow': '#f48024',
        'blue-linkedin': '#0e76a8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
