/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    /* fontSize: {
      xs: 12,
      sm: 14,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
    }, */
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',

      'gray-900': '#121214',
      'gray-800': '#202025',
      'gray-600': '#5A5A64',
      'gray-400': '#7C7C8A',
      'gray-300': '#A0A0AB',
      'gray-200': '#C4C4CC',
      'gray-100': '#E1E1E6',

      'blue-300': '#93c5fd',
      'blue-400': '#60A5FA',

      'sky-700': '#0369A1',

      'orange-600': '#ea580c',
      'orange-700': '#C2410C',
    },
    fontFamily: {
      sans: ['roboto', 'sans-serif']
    },
    screens: {
      'smaller': '340px',
      'xs': '540px',
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        app: 'url(/assets/app-bg.png)'
      },
      width: {
        19: '4.75rem',
        25: '6.25rem',
        42: '10.5rem',
        45: '11.25rem',
        49: '12.25rem',
        53: '13.25rem',
        83: '20.75rem',
        85: '21.25rem',
        128: '32rem',
        135: '33.75rem',
        160: '40rem'
      },
      height: {
        17: '4.25rem',
        19: '4.75rem',
        21: '5.25rem',
        42: '10.5rem',
        45: '11.25rem',
        83: '20.75rem',
        85: '21.25rem',
        87: '21.75rem',
        128: '32rem',
        135: '33.75rem',
        160: '40rem'
      },
      maxWidth: {
        49: '12.25rem',
        53: '13.25rem',
        172: '43rem',
        300: '75rem'
      },
      maxHeight: {
        42: '10.5rem',
        45: '11.25rem',
        128: '32rem',
        135: '33.75rem',
        160: '40rem'
      },
      borderRadius: {
        '4xl': '2.5rem'
      },
      lineHeight: {
        11: '2.75rem'
      }
    },
  },
  plugins: [],
}
