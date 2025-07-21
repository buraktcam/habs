/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-custom': '#ff4726',
        'gray-350': '#b8bcc7',
        'gray-450': '#8a8f9d',
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 