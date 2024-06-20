/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        saffron: ' #F4C430',
        trombone: '#D2B55B',
      },
      textColor: {
        greenColor: '#039a63'
      }
    },
  },
  plugins: [],
}