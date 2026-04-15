/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        steel: '#527c9f',
        steelHover: '#466a87'
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: [],
}
