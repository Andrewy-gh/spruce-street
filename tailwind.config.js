/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#3f7e24',
        'dark-secondary': '#7e9870',
        light: '#f5fbf1',
        accent: '#9999cc',
      },
    },
  },
  plugins: [],
};
