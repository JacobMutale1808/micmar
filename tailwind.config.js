/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary':'#154D8F',
      'secondary':'#E49F40',
      'background-primary':'#FFFFFF',
      'background-secondary':'#C0C2C5',
      'accent-primary':'#4F80C1',
      'accent-secondary':'#E54C3E',
      'text-primary':'#000000',
      'text-secondary':'#FFFFFF'   
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
