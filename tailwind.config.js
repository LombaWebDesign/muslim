/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        darkpurple: '#4E299A',
        purple: '#672CBC',
        purple2: '#873ED5',
        purple3: '#A86AFD',
        purple4: '#C375EF',
        yellow: '#FAB583',
        lightpurple: '#F8F2FF',
        lightGray: '#F0F0F0',
        darkgrey: '#777777',
      }
    },
  },
  plugins: [],
}