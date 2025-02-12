/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
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
