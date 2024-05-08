
//const duration = require('tailwindcss-animated/src/utilities/duration');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  content: [],
  theme: {
    extend: {
      colors:{
        redPrimary:'#CA2026'
      },
backgroundImage: {
        'sectionOnebg': "url('assets/home/section1/Groupedemasques3.png')",
        'productsTyps':"url('assets/home/section1/Tracé 50.png')",
        'btnbg':"url('assets/home/section1/btns/Tracé 51.png')",
        'newLabel':"url('assets/home/section1/Tracé 87.png')",
        'carousItemNouveaute':"url('assets/home/section1/Groupe 1226.png')"
        
      },
backgroundColor:{
  'primary':'#202020',
  'primary1':'#2E2E2E',
  'btnCarousel':'#727272',
  'btnCarouselHover':"#CA2026",
  'secondary':'#101010'

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

animation:{
  duration:{
    '2000':'2000'
  },
  spacing: {
    '50%': '50%',
  }
  
}

    },
    
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

