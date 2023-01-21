/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'header-blue': '#0A71C6',
        'footer-gray': '#434E5E',
        'hero-blue':'#41A4F5',
      },
    },
  },
  plugins: [],
}
