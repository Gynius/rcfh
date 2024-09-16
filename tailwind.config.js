/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#2A966F',
        red: '#F84F39',
        body_bg: '#f1f1f1',
        g:' #007672'
        
      },
      backgroundImage: {
        hero_bg: "url('/images/hero-bg.png')", // Use absolute path
      },
      fontSize: {
        xs_sm: '0.8rem', 
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        mono: ['Menlo', 'Monaco', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
