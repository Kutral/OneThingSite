/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './privacy.html', './src/**/*.{ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};
