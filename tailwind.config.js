/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Corben: ['Corben', 'serif'],
      },
      animation: {
        'spin-slowest': 'spin 20s linear infinite',
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}

