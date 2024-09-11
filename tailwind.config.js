/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'light-green': '#83C783',
        'light-gray': '#5A5A5A',
        'medium-gray': '#646464',
        'dark-gray': '#454545',
      }
    },
  },
  plugins: [],
}

