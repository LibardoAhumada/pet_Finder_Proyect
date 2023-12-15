/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens:{
      "sm": "576px",
      "md": "768px",
      "lg": "1024px",
    },
    shadows:{
      "shadow-md": "0px 8px 18px",
    },
    colors:{
      "orange": "#F39200",
      "white":"#FFFFFF",
      "p800":"#C07300",
      "FFECD1":"#FFECD1",
    },
    fontFamily:{
      Montserrat:["Montserrat", "sans-serif"],
      Inter:["Inter","sans-serif"],
    },
    fontSize:{
      "xxs":"8px", 
      "text-4xl":"36px",
    },

  plugins: [],
 }
}
