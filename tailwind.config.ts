/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00f2ff',
        'neon-pink': '#ff00ff',
        dark: {
          DEFAULT: '#000000',
          100: '#0a0a0a',
          200: '#121212',
          300: '#1a1a1a',
        }
      },
      boxShadow: {
        'neon-sm': '0 0 15px rgba(0, 242, 255, 0.15)',
        'neon-md': '0 0 25px rgba(0, 242, 255, 0.2)',
        'neon-glow': '0 0 40px rgba(0, 242, 255, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    }
  },
  plugins: [],
}