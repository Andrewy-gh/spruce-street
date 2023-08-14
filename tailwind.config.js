/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#3f7e24', // green
        'dark-secondary': '#7e9870', // green
        light: '#f5fbf1', // white
        accent: '#9999cc', // light purple
      },
      fontFamily: {
        accent: ['Playfair Display', 'ui-serif'],
        body: ['Lato', 'ui-sans-serif'],
      },
      fontSize: {
        'step--2': 'clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)', // body 2
        'step--1': 'clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)', // body 1
        'step-0': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)', // h6
        'step-1': 'clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)', // h5
        'step-2': 'clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)', // h4
        'step-3': 'clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)', // h3
        'step-4': 'clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)', // h2
        'step-5': 'clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)', // h1
      },
      spacing: {
        'space-5xs': 'clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)',
        'space-4xs': 'clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)',
        'space-3xs': 'clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)',
        'space-2xs': 'clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)',
        'space-xs': 'clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)',
        'space-s': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
        'space-m': 'clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)',
        'space-l': 'clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)',
        'space-xl': 'clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)',
        'space-2xl': 'clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)',
        'space-3xl': 'clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)',
      },
      width: {
        container:
          'min(1240px, 100% - clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem))',
      },
    },
  },
  plugins: [],
};
