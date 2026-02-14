/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          50: '#fdf8f6',
          100: '#f2e4de',
          200: '#e5d0c7',
          300: '#d8bcb0',
          400: '#c29485',
          500: '#a67b6b',
          600: '#8b6253',
          700: '#6f4e42',
          800: '#543a31',
          900: '#392720',
        }
      }
    },
  },
  plugins: [],
}