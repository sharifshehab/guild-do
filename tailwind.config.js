/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primary-color)',
        secondaryColor: 'var(--secondary-color)',
      },
      backgroundImage: {
        'aboutBG': "url('./images/bg.jpg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}