// REFS
// https://tailwindcss.com/docs/customizing-colors
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,
      primary: {
        50: '#FFDFDF',
        100: '#FAD0D0',
        200: '#F3C2C2',
        300: '#E7AFAF',
        400: '#DC9C9C',
        500: '#D08787',
        600: '#C06F6F',
        700: '#AC5252',
        800: '#903838',
        900: '#732525',
        950: '#521717',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
