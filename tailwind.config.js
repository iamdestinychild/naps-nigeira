/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xm': '280px',
      // => @media (min-width: 280px) { ... }
      // 'sm': '640px',
      'sm': '390px',
      // 'sm': '412px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      moderat: ['Moderat', 'sans-serif'],
      inter: [ 'Inter', 'sans-serif'],
      mooli: ['Mooli', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'theme': {
          neutral: '#ffffff',
          primary: '#0096C7',
          10: '#CCEAF4',
          20: '#AADCEC',
          30: '#80CAE3',
          40: '#55B9DA',
          50: '#2BA7D0',
          60: '#007DA6',
          70: '#006485',
          80: '#004B64',
          90: '#003242',

        },
      
      },
    },
  },
  plugins: [],
}
