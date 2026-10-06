/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracota: {
          DEFAULT: '#B26632',
          light: '#C97A45',
          dark: '#8B4E22',
        },
        marrom: {
          DEFAULT: '#2A1306',
          light: '#4A2A10',
          mid: '#6F6259',
        },
        dourado: {
          DEFAULT: '#FFC36A',
          light: '#FFD48A',
          dark: '#E8A845',
        },
        creme: {
          DEFAULT: '#FFF3DD',
          dark: '#F4E8C1',
        },
        offwhite: '#F4F6F8',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(42,19,6,0.08)',
        'card-hover': '0 8px 40px rgba(42,19,6,0.16)',
        'cta': '0 4px 20px rgba(255,195,106,0.4)',
      },
    },
  },
  plugins: [],
}
