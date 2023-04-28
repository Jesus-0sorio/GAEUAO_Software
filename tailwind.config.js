/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'UAO': "url('/src/assets/UAO.webp')",
        'UAO2': "url('/src/assets/zyro-image.webp')",
      },
    },
  },
  plugins: [],
}