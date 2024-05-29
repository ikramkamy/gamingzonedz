
//const duration = require('tailwindcss-animated/src/utilities/duration');

const { keyframes } = require('styled-components');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  content: [],
  theme: {

    
   /* screens: {
      sm2: '600px',
      //md2: '768px',
      // Other custom screens go here
    },
*/

    extend: {
   
      colors:{
        redPrimary:'#CA2026'
      },
backgroundImage: {
        'sectionOnebg': "url('assets/home/section1/Groupedemasques3.png')",
        'productsTyps':"url('assets/home/section1/Tracé 50.png')",
        'btnbg':"url('assets/home/section1/btns/Tracé 51.png')",
        'newLabel':"url('assets/home/section1/Tracé 87.png')",
        'carousItemNouveaute':"url('assets/home/section1/Groupe 1226.png')",
        'bgSection2':"url('assets/home/section2/configurator-pc-exemple.c598a585.png')",
        'bgRebuiltPc':"url('assets/home/rebuiltcomputers/Ellipse 7.png')",
        'bgImgRebuiltPc':"url('assets/home/rebuiltcomputers/Ellipse 8.png')",
        'bgSection3':"url('assets/home/section3/Groupe 1226.png')",
        'bgSection33':"url('assets/home/section3/Groupe 1230.png')",
        'bgActualite':"url('assets/home/actualite/Groupe 1226.png')",
        'bgActualiteItem':"url('assets/home/actualite/Groupe 1227.png')",
        'bgNouveaute':"url('assets/home/nouveaute/Groupe 1227.png')",
        "bgFilterBar":"url('assets/products/Tracé 863.png')",
        "bgpaginationBar":"url('assets/products/Groupe 1226.png')",
        "bgpaginationBtn1":"url('assets/products/Tracé 34.png')",
        "bgpaginationBtn2":"url('assets/products/Tracé 34.svg')",
        "bgpartnerspage":"url('assets/partners/Trace 20659.png')",
        "bgpartnerspage1":"url('assets/partners/Trace 20659.svg')",
        "bglogin":"url('assets/login/Trace 863.png')",
        "bgloginpage":"url('assets/login/Groupe 1048.png')",
        "bgFAQitem":"url('assets/faq/Trace 900.png')",





        
        },
backgroundColor:{
  'primary':'#202020',
  'primary1':'#2E2E2E',
  'lightGrey':"#0F0F0F",
  'btnCarousel':'#727272',
  'btnCarouselHover':"#CA2026",
  'secondary':'#101010',
  '#444444':'#444444',
},
backgroundPosition:{
  'bottom-10':"30%"
},
backgroundSize:{
  '100%': '100%',
},
width: {
  '57':'57px',
  "90%":"90%",
  "80%":"70%"
},
height:{
  '45':'45vh'

},
left:{
'37%':'37%'
},
objectPosition:{
  top:{
    '10%':'10%',
  }

},
maxWidth:{
'45%':'70%',
},
translate:{
  '35':'35%',
  'minus20':'-20%',
  'minus10':'15%'
},

boxShadow: {
  'btnCarouselShadow': '1px 2px 18px 6px #CA2026',
},
borderColor:{
  'primary':"#202020",
  'secondary':'#3B3B3B',
  'btnCarousel':'#CA2026',
  'lightGrey':"#0F0F0F",
},

fontFamily:{
  'Oxanium':'Oxanium',
},
fontSize: {
  sm: ['10px', '20px'],

},
keyframes:{
  translateDiagonal:{
    '0%': { transform: 'rotate(-30deg)' },
    '10%': { transform: 'rotate(130deg)' },
    '50%': { transform: 'rotate(30deg)' },
  },
  translate1: {
    '0%' :{transform: 'translateX(0) translateY(0) rotate(0)'},
    '100%' :{transform: 'translateX(100%)  translateY(100%) rotate(0deg)'},
  },
  translate2: {
    '0%' :{transform: 'translateX(10%) translateY(0) rotate(0)'},
    '100%' :{transform: 'translateX(0%)  translateY(100%) rotate(0deg)'},
  },
  translate3: {
    '0%' :{transform: 'translateX(0%) translateY(0) rotate(0)'},
    '100%' :{transform: 'translateX(-100%)  translateY(100%) rotate(0deg)'},
  },
  translate4: {
    '0%' :{transform: 'translateX(0%) translateY(0) rotate(0)'},
    '100%' :{transform: 'translateX(-140%)  translateY(100%) rotate(0deg)'},
  },
  translate5: {
    '0%' :{transform: 'translateX(0%) translateY(0) rotate(0)'},
    '100%' :{transform: 'translateX(-100%)  translateY(100%) rotate(90deg)'},
  },
  translate6: {
    '0%' :{transform: 'translateX(-35%) translateY(95%) rotate(2deg)'},
    '100%' :{transform: 'translateX(0%)  translateY(0%) rotate(0deg)'},
  },
  translate66: {
    '0%' :{transform: 'translateX(-65%) translateY(35%) rotate(2deg)'},
    '100%' :{transform: 'translateX(0%)  translateY(0%) rotate(0deg)'},
  },
  translate7: {
    '0%' :{transform: 'translateX(80%)  translateY(0%) rotate(45deg)'},
    '100%' :{transform: 'translateX(0%) translateY(0%) rotate(90deg)'},
  },
  spin1: {
    '0%' :{transform: 'rotate(360deg)'},
    '100%' :{transform: 'rotate(0deg)'},
  },
  spin2: {
    '0%' :{transform: 'rotate(-360deg)'},
    '100%' :{transform: 'rotate(0deg)'},
  },
none1: {
    '0%' :{transform: 'rotate(0deg)'},
    '100%' :{transform: 'rotate(0deg)'},
  },
  vibration1 :{
    '0%' :{transform: 'translate(1px, 1px)'},
    '50%' :{transform: 'translate(-1px, -1px)'},
    '100%' :{transform: 'translate(1px, 1px)'},
    },
    colorEffect1 :{
      '0%' :{color:'#9D9D9D'},
      '50%' :{color:'#fffff'},
      '100%' :{color:'#CA2026'},
      },
      zoom1 :{
        '0%' :{width:'0%'},
        
        '100%' :{width:'25%'},
        },
        zoom2 :{
          '0%' :{width:'100%'},
          
          '100%' :{width:'150%'},
          },
        skewanimation:{
          '0%' :{transform: 'skew(-1deg)'},
          '100%' :{transform: 'skew(1deg)'},
        },
        wiggle: {
          '0% ': {transform: 'rotate(-3deg)' },
          '100%': { transform: 'rotate(3deg)' },
        },
        fade: {
          '0% ': {opacity:'0'},
          '100%': {opacity:'1'} ,
        }

},
animation:{

  'spin-slow': 'spin 20s alternate infinite',
  'spin-slow1': 'spin1 10s linear infinite',
  'spin-slow2': 'spin1 15s linear infinite',
  'spin-slow3': 'spin2 15s linear infinite',
  'move1': 'translate1 1s ease-in 1',
  'move11': 'translate1 1s ease-out 1',
  'move2': 'translate2 1s linear 1',
  'move3': 'translate3 1s linear 1',
  'move4': 'translate4 1s linear 1',
  'move5': 'translate5 1s linear 1',
  'move6': 'translate6 600ms ease-in 1',
  'move66': 'translate66 3s ease-in infinite',
  'move7': 'translate7 1s linear 1',
  'vibrate': ' vibration1  100ms linear 2',
  'colorEffect1': 'colorEffect1  1s alternate infinite',
  'zoomEffect': 'zoom1  1s alternate infinite',
  'zoomEffect1': 'zoom2  500ms alternate 2',
  'skewEffect': 'skewanimation  1s alternate infinite',
  'wiggle1':'wiggle 10ms alternate infinite',
  'fade':'fade 1s alternate infinite',
  'fade2':'fade 2s alternate infinite',
  
  duration:{
    '100':'200'
  },
  spacing: {
    '50%': '50%',
  } ,
},
},
   
    
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

