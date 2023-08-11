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
      'text-secondary':'#FFFFFF',
      'overlay': '#0000004D'   
    },
    dropShadow:{
      'logo':'0px 4px 4px rgba(0,0,0,0.25)',
      'text':'0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    extend: {
      backgroundImage: {
        'home-logo':'url("/icons/mobile-icon.png")'
      },
      borderRadius: {
        'mobile-search':'20px',
        'mobile-search-button': '0px 20px 20px 0px'
      },
      fontSize:{
        'mobile-h1': '80px',
        'mobile-h2':'32px',
        'mobile-h3': '22px',
        'mobile-p': '24px'
      }
    },
  },
  plugins: [],
}
