/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF6ED',
        cream: '#FFF9EE',
        maroon: {
          light: '#8E2C3A',
          DEFAULT: '#70212B',
          dark: '#581720',
          deep: '#421118',
        },
        gold: {
          light: '#F8EAC9',
          soft: '#E4CA8E',
          DEFAULT: '#C69A45',
          deep: '#96702D',
          dark: '#7D5B20',
        },
        ink: '#725D4C',
        muted: '#8E7B6C',
        turmeric: '#E69500',
        kumkum: '#9B1B26',
        leaf: '#2E6B38',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        tamil: ['"Noto Serif Tamil"', '"Noto Sans Tamil"', 'Latha', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'swing': 'swing 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        swing: {
          '0%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(5deg)' },
        }
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(198, 161, 91, 0.35)',
        'maroon-glow': '0 0 30px rgba(129, 44, 50, 0.4)',
        'royal': '0 10px 40px -10px rgba(74, 22, 30, 0.15), 0 0 0 1px rgba(198, 161, 91, 0.25)',
      }
    },
  },
  plugins: [],
}
