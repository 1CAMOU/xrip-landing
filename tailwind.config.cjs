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
      },
      animation: {
        'fade-in': 'fade-in 0.45s 0.1s ease-in-out forwards',
        'fade-in-down': 'fade-in-down 0.8s 0.35s ease-in-out forwards',
        'fade-in-down-slow': 'fade-in-down 0.8s 0.65s ease-in-out forwards',
        'fade-in-bounce': 'fade-in-bounce 4.1s 0.65s ease-out forwards',
      },
      keyframes: {
          'fade-in': {
              '0%': {
                  opacity: 0,
              },

              '100%': {
                  opacity: 1,
              },
          },
          'fade-in-down': {
              '0%': {
                  opacity: 0,
                  transform: 'translateY(-15px)',
              },
              '100%': {
                  opacity: 1,
                  transform: 'translateY(0px)',
              }
          },
          'fade-in-bounce': {
              '0%': {
                  opacity: 0,
                  'animation-timing-function': 'cubic-bezier(.74, .25, .76, 1)',
              },
              '10%': {
                  opacity: 0.65,
                  'animation-timing-function': 'cubic-bezier(.12, .01, .08, .99)',
              },
              '100%': {
                  opacity: 0.35,
              }
          }
      },
      screens: {
          '3xl': '1856px',
      }
    },
  },
  plugins: [],
}
