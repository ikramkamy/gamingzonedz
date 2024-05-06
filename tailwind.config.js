/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'sectionOnebg': "url('assets/home/section1/Groupedemasques3.png')",
        
      },
backgroundColor:{
  'primary':'#202020',
  'btnCarousel':'#727272',
  'btnCarouselHover':"#CA2026",
  'secondary':'#101010'

},
width: {
  '57':'57px',
  "90%":"90%"
},
height:{

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

}

    },
    
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}

