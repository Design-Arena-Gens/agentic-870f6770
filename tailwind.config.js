/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kaladi-cream': '#FFF8DC',
        'kaladi-gold': '#DAA520',
        'jammu-red': '#8B0000',
        'jammu-orange': '#FF6347',
      },
    },
  },
  plugins: [],
}
