/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'text': '#fcfcee',
      'background': '#1f1e05',
      'primary': '#e8e478',
      'secondary': '#161504',
      'accent': '#c4bf21',
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
