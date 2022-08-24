/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chonburi': ['Chonburi', 'sans-serif']
      },
      backgroundImage: {
        'tripsImage': "url('./images/trips.jpg')"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}