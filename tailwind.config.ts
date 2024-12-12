/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f2ff',
        'neon-pink': '#ff00ff',
        dark: {
          DEFAULT: '#000000',
          100: '#0a0a0a',
          200: '#121212'
        }
      }
    }
  },
  plugins: [],
}