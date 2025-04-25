/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        'sl-dark': '#0B0D15',
        'sl-darker': '#070910',
        'sl-blue': {
          100: '#DEE9FF',
          200: '#BBCEFF',
          300: '#8DA5FF',
          400: '#5F7DF9',
          500: '#3B57F2',
          600: '#2C41DB',
          700: '#1F2CB8',
          800: '#141C8A',
        },
        'sl-purple': {
          100: '#E6DEFF',
          200: '#C6BAFF',
          300: '#A28CFF',
          400: '#8B5CF6',
          500: '#6538EB',
          600: '#4C29D9',
          700: '#3A1BB8',
          800: '#281289',
        },
        'sl-teal': {
          100: '#D1FCFC',
          200: '#A0F7F7',
          300: '#6EECEC',
          400: '#06B6D4',
          500: '#0E9AAF',
          600: '#087A8A',
          700: '#065E6A',
          800: '#04434A',
        },
      },
      boxShadow: {
        'sl-glow': '0 0 15px rgba(107, 114, 255, 0.5)',
        'sl-glow-lg': '0 0 25px rgba(107, 114, 255, 0.6)',
        'sl-purple-glow': '0 0 15px rgba(139, 92, 246, 0.5)',
        'sl-teal-glow': '0 0 15px rgba(6, 182, 212, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};