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
        jersey: ['Jersey 20', 'serif']
      },
      colors:{
        'red-clean-type':'#E62727',
        'red-bold-type':"#C1121F",
        'red-grad-bold-type':'#801616',
        'red-button-send-feedback':'#C1121F',
        "trail-info-action":"#657ED4",
        "rank-achiviment-bronze-one-first":"#D58936",
        "rank-achiviment-bronze-one-second":"#A44200",
        'pending-leasson':'#4DD070',
         'second-pending-leasson':'#34A853',
         'send-response-question-1':'#4DD070',
         'send-response-question-2':'#34A853',
         'community-clean':'#FF0000',
         'community-bold':'#E62727',
         'home-clean-yellow':"#FBBC05",
         'salmon-calygam-clean':"#FFDAB9",
        //  caio<- Agora com conjunto, visando ser mais semântico

        'calygam-semi-strong-pink':'#B23A48',
        'calygam-semi-light-pink':'#F4978E',
        'calygam-extra-light-pink':"#FFB8B8",
        
        'calygam-semi-strong-red':"#E74040",

        'calygam-yellow-semi-strong':"#D58936"

         
      },
      backgroundImage:{
        'dec-angle':'url("./src/assets/img/decAngle.png")',
        'mobile-login-desert':'url("./src/assets/img/mobile-login-desert.jpg")',
         'desktop-login-desert':'url("./src/assets/img/desktop-login-desert.jpg")',

      },
      keyframes:{
        spinningClean:{
          '0%':{transform:'rotate(0deg)'},
          '100%':{transform:'rotate(360deg)'}
        },
        calygamScaleClean:{
          '0%':{transform:'scale(1.00) translateY(-3px)'},
          '100%':{transform:'scale(1.03) translateY(0px)'}
        }
      },
      animation:{
        spinningClean: 'spinningClean 2s linear infinite',
        spinningCleanRage: 'spinningClean 1s linear alternate infinite',
        spinningCleanMediumRage: 'spinningClean 0.8s linear infinite',
        spinningCleanSuperRage: 'spinningClean 0.6s linear infinite',
        calygamScaleClean: 'calygamScaleClean 2s alternate infinite ease-in-out'
      }
    },
  },

  plugins: [],
}

