/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
     './src/**/*.html',
     './src/**/*.js',
   ],
  content: [],
  theme: {
    extend: {
      fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

