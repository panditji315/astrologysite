/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDF6E3',
          100: '#F9E8C8',
          200: '#F4D19A',
          300: '#EFB86C',
          400: '#EA9F3E',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#9C7C0A',
          800: '#806500',
          900: '#644E00',
        },
        maroon: {
          50: '#FEF2F2',
          100: '#FDE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#7C2D12',
          900: '#7C2D12',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        'hindi': ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
};