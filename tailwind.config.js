
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
        'bgActualite':"url('assets/home/actualite/Groupe 1226.png')",
        'bgActualiteItem':"url('assets/home/actualite/Groupe 1227.png')",
        },
backgroundColor:{
  'primary':'#202020',
  'primary1':'#2E2E2E',
  'btnCarousel':'#727272',
  'btnCarouselHover':"#CA2026",
  'secondary':'#101010',
  '#444444':'#444444',
},
backgroundPosition:{
  'bottom-10':"10%"
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
  'btnCarousel':'#CA2026'
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

    //'0%' :{transform: 'translateX(0%) translateY(0) rotate(0)'},
    '0%' :{transform: 'translateX(-35%) translateY(35%) rotate(2deg)'},
    //'100%' :{transform: 'translateX(-50%)  translateY(50%) rotate(0deg)'},
    '100%' :{transform: 'translateX(0%)  translateY(0%) rotate(0deg)'},
  },
  translate7: {
    '0%' :{transform: 'translateX(80%)  translateY(0%) rotate(45deg)'},
    '100%' :{transform: 'translateX(0%) translateY(0%) rotate(90deg)'},
  },
},
animation:{

  'spin-slow': 'spin 20s linear infinite',
  'spin-slow1': 'spin 10s linear infinite',
  'move1': 'translate1 1s ease-in 1',
  'move11': 'translate1 1s ease-out 1',
  'move2': 'translate2 1s linear 1',
  'move3': 'translate3 1s linear 1',
  'move4': 'translate4 1s linear 1',
  'move5': 'translate5 1s linear 1',
  'move6': 'translate6 600ms ease-in 1',
  'move7': 'translate7 1s linear 1',
  
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

