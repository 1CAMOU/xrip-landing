const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: 'Cabinet Grotesk',
      },
      colors: {
        'xrip': '#D13F62',
        'soft-white': '#FFEEF7',
      }
    },
  },
  plugins: [],
}
