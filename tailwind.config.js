/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['OverusedGrotesk-VF', 'sans-serif'], // the name you defined in @font-face
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'winter', 'acid', 'lemonade'],
  },
};