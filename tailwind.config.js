/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-green': '#2E7D32',
        'secondary-green': '#4CAF50',
        'accent-green': '#81C784',
        'background-green': '#F1F8E9',
        'text-dark': '#212121',
      },
    },
  },
  plugins: [],
};