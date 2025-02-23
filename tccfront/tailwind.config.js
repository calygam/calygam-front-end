/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      colors:{
        'red-clean-type':'#E62727',
        'red-button-send-feedback':'#C1121F'
      },
      backgroundImage:{
        'dec-angle':'url("./src/assets/img/decAngle.png")',
        'mobile-login-desert':'url("./src/assets/img/mobile-login-desert.jpg")',
         'desktop-login-desert':'url("./src/assets/img/desktop-login-desert.jpg")'
      }
    },
  },

  plugins: [],
}

