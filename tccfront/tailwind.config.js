/** @type {import('tailwindcss').Config} */

module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    safelist: [
    "bg-yellow-800", "border-yellow-950/50",
    "bg-gray-400", "bg-yellow-400",
    "bg-teal-300", "bg-sky-300",
    "bg-fuchsia-300", "bg-purple-500/50",
    "text-gray-300", "text-yellow-400",
    "text-teal-300", "text-sky-300", "text-fuchsia-600",
    "text-fuchsia-600",
    
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
        //pink
        'calygam-strong-pink':"#CE82FF",
        'calygam-semi-strong-pink':'#B23A48',
        // 'calygam-semi-light-pink':'#F4978E',
        'calygam-extra-light-pink':"#FFB8B8",

        'calygam-semi-light-pink':'#FFB7B7',
        //red
        'calygam-semi-strong-red':"#E74040",
        'calygam-semi-light-red':'#B6465F',
        //yellow
        'calygam-yellow-semi-strong':"#D58936",
        //green
        'calygam-light-green':'#A5BE00',
        //brown
        'calygam-brown-semi-light':'#ECE2D0',

        //gray
        'calygam-gray-semi-light':'#D9D9D9',
        'calygam-gray-semi-strong':'#ADADAD',
        'calygam-gray-medium-light':'#535862',
        'calygam-gray-light':'#61758A',
        //black
        'calygam-black-semi-strong':'#2F2E41',
        'calygam-black-strong':'#0D141C',
        //purple
        'calygam-purple-semi-light':'#5D5578',
        'calygam-purple-semi-bold':'#2A1C4A',
        'calygam-purple-semi-strong':'#5A189A',
        'calygam-purple-medium-bold':'#625380',
        'calygam-purple-tone-2':'#6C63FF', //z
        'calygam-purple-light':'#B892FF1A',
        'calygam-purple-medium-light':"#6813DE",
        'calygam-purple-tone-3': '#2F2E41',

        //white
        'calygam-white-matte':"#E9F1FF",
        'calygam-white-semi-light':"#FAFAFA",

        //blue
        'calygam-blue-semi-bold':"#000437",
        'calygam-blue-semi-strong':"#4C48CE",
        'calygam-blue-semi-light':"#4285F4",
        'calygam-blue-semi-bold':"#413B99",

        //zinc
        
         
      },
      backgroundImage:{
        'dec-angle':'url("./src/assets/img/decAngle.png")',
        'mobile-login-desert':'url("./src/assets/img/mobile-login-desert.jpg")',
         'desktop-login-desert':'url("./src/assets/img/desktop-login-desert.jpg")',

      },
      
      dropShadow:{
        'calygam-light':' 8px 7px 6px #000'
      },
      keyframes:{
        spinningClean:{
          '0%':{transform:'rotate(0deg)'},
          '100%':{transform:'rotate(360deg)'}
        },
        calygamScaleClean:{
          '0%':{transform:'scale(1.00) translateY(-3px)'},
          '100%':{transform:'scale(1.03) translateY(0px)'}
        },
        rotateYBadge:{
          '0%':{transform:'rotateY(0deg)'},
          '100%':{transform:'rotateY(360deg)'}
        }
      },
      // animation:{
      //   spinningClean: 'spinningClean 2s linear infinite',
      //   spinningCleanRage: 'spinningClean 1s linear alternate infinite',
      //   spinningCleanMediumRage: 'spinningClean 0.8s linear infinite',
      //   spinningCleanSuperRage: 'spinningClean 0.6s linear infinite',
      //   calygamScaleClean: 'calygamScaleClean 2s alternate infinite ease-in-out'
      // }
      animation:{
        spinningClean: 'spinningClean 1s linear infinite',
        spinningCleanRage: 'spinningClean 3s linear alternate infinite',
        spinningCleanMediumRage: 'spinningClean 2.8s linear infinite',
        spinningCleanSuperRage: 'spinningClean 3.6s linear infinite',
        calygamScaleClean: 'calygamScaleClean 2s alternate infinite ease-in-out',
        rotateYBadge:'rotateYBadge 2s alternate infinite ease-in-out '
      }

    },
  },

  plugins: [],
}

