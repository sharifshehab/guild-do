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
        darkColor: 'var(--dark-color)',
      },
      backgroundImage: {
        'heroBG': "url('./assets/images/action-hero-image.webp')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}