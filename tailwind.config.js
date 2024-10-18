/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#144835',
        green_light: '#2a966f',
        green_dark: '#0b221a',
        red: '#F84F39',
        body_bg: '#f1f1f1',
        soft_green:' #26d953',
        soft_red: '#FF736F',
        custom_bg: '#FBFCFD',
        g:"#e8f9f1"
      },
      
      backgroundImage: {
        hero_bg: "url('/images/hero-bg.webp')", 
        join_us_bg: "url('/images/join-us-bg.webp')",
        va_bg: "url('/images/va-bg.webp')",
        subform_bg: "url('/images/cta-bg.webp')",
      },
      fontSize: {
        xs_sm: '0.8rem', 
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        mono: ['Menlo', 'Monaco', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
        robotoSlab: ['robot slab', 'serif'],
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
      },
      screens: {
        xs_s: '360px', // Define your custom breakpoint here
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
