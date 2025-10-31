/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          300: '#c084fc',
          500: '#7c3aed',
          600: '#6b21a8'
        }
      },
      backgroundImage: {
        'soft-grad': 'linear-gradient(180deg, rgba(250,246,255,0.8), rgba(245,243,255,0.7))',
      },
      borderRadius: {
        'xl-3': '1.5rem'
      }
    },
  },
  plugins: [],
}
