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
  'primary':"",
  'btnCarousel':'#727272',
  'btnCarouselHover':"#CA2026"

},
width: {
  '57':'57px'
}

    },
    
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}

