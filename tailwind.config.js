/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
 
    screens: {
      'xsm': "500px",
      'sm': "600px",
      'md': "800px", 
      'lg': "1000px",
      'xl': "1100px",
      '2xl': "1200px",
      '3xl': "1300px"
    },

    extend: {
    },
  },

  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
