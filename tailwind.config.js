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
        'heroBG': "url('./assets/images/3d-render-high-tech-cyborg-warrior-wallpaper.jpg')",
        'profileBG': "url('./assets/images/1.webp')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}