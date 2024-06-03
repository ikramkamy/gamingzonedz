import { create  } from "zustand";
import image1 from "../../assets/home/section1/home-featured-cat-periph_0.png";
import image2 from '../../assets/home/section1/home-featured-cat-composants.png';
import image3 from '../../assets/home/section1/home-featured-cat-gaming.png';
import image4 from '../../assets/home/section1/home-featured-cat-image-son.png';
import image5 from '../../assets/home/section1/home-featured-cat-pc_0.png';
import newProdimg1 from '../../assets/home/section1/nouveaute/mhw100_960x960.png'
import newProdimg2 from '../../assets/home/section1/nouveaute/mh222_960x960.png'
import newProdimg3 from '../../assets/home/section1/nouveaute/mcneo_960x960.png'
import newProdimg4 from '../../assets/home/section1/nouveaute/mcex_640x640.png'
import newProdimg5 from '../../assets/home/section1/nouveaute/mc777_640x640.png'
import newProdimg6 from '../../assets/home/section1/nouveaute/marm2-color-1_480x600_edited.png'
import processor from '../../assets/products/viewProduct/processor.png';
import processor2 from '../../assets/products/processor2.png'

export const UseProductsStore= create((set, get)=>({
OurProductsTypes :[{
    name:'pc sur-mesure',
    urlImage:image1,
},
{
    name:'pc pré-conçu',
    urlImage:image2,
},{
    name:'périphériques',
    urlImage:image3,
},{
    name:'Composants',
    urlImage:image4,
},{
    name:'audio & screens',
    urlImage:image5,

}
],
NewProducts :[{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg1,
    btn:"view",
    category:1,
},{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg2,
    btn:"view",
    category:1,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"view",
    category:1,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg4,
    btn:"view",
    category:1,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg5,
    btn:"view",
    category:1,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg6,
    btn:"view",
    category:1,
},{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg6,
    btn:"view",
    cathegory:3,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg6,
    btn:"view",
    category:1,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg6,
    btn:"view",
    category:1,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg6,
    btn:"view",
    category:1,
}


],
NewConfigs:[{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config"

}],

AllProducts:[{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"buy",
    category:2,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:2,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"buy",
    category:5,

},{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"buy",
    category:5,

},{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"buy",
    category:5,

},{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"buy",
    category:4,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"buy",
    category:4,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"buy",
    category:4,

},

{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:2,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:2,

},
{
    name:'AMD Ryzen 3 4100 Wraith Stealth (3.8 GHz / 4.0 GHz)',
    typeProduct:'processor',
    descreption:`The AMD Ryzen 3 4100 desktop processor is based on the AMD Zen 2 architecture and features 4 physical cores + 8 logical cores as well as 6 MB cache (L2 + L3). Thanks to its high operating frequencies`,
    price:'12977 DZD',
    urlImage:processor2,
    btn:"config",
    category:1,
    brands:"AMD",
    model:"AMD Reysen 3",
    support:"AMD sTR5",
    platfom:"AMD Zen 2"

},{
    name:'AMD Ryzen 3 4300G Wraith Stealth (3.8 GHz / 4.0 GHz)',
    typeProduct:'processor',
    descreption:`Processor 4-Core 8-Threads socket AM4 Cache L3 4 Mo Radeon Vega Graphics TDP 65W with cooling system (box version - 3-year manufacturer's warranty)`,
    price:'13977 DZD',
    urlImage:processor,
    btn:"config",
    category:1,
    brands:"AMD",
    model:"AMD Reysen 3",
    support:"AMD sTR5",
    platfom:"AMD Zen 2"

},
{
    name:'Intel Celeron G5905 (3.5 GHz)',
    typeProduct:'processor',
    descreption:`Processor 2-Core 2-Threads Socket 1200 Cache L3 4 MB Intel UHD Graphics 610 0.014 micron (boxed version - 3 years Intel warranty)`,
    price:'11977 DZD',
    urlImage:processor,
    btn:"config",
    category:1,
    brands:"intel",
    model:"Intel Core i3",
    support:"Intel 1200",
    platfom:"Intel Comet Lake-S"

},
{
    name:'Intel Core i3-10100 (3.6 GHz / 4.3 GHz)',
    typeProduct:'processor',
    descreption:`Processor 4-Core 8-Threads Socket 1200 Cache L3 6 Mo Intel UHD Graphics 630 0.014 micron (boxed version - 3 years Intel warranty)`,
    price:'11977 DZD',
    urlImage:processor,
    btn:"config",
    category:1,
    brands:"intel",
    model:"Intel Core i3",
    support:"Intel 1200",
    platfom:"Intel Comet Lake-S"

},{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:10,

},{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:10,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:9,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:8,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:7,

}
,
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:7,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:7,

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:6,

}
,
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config",
    category:6,

}],


ShowcategoryName: async(code)=>{
    console.log('we are in the show category function')
  switch (code) {
case 1: 
   return 'processor';
case 2: 
   return 'mother board';
case 3: 
   return 'ram';
case 4: 
   return 'CPU COOLERS';
case 5: 
   return 'Graphics Processing Unit';
case 6: 
   return 'Storage';
case 7: 
   return 'Power supply';
case 8: 
   return 'Case';
case 9: 
   return 'Case Cooler';
case 10: 
   return 'Extras';

default: 
    return 'Extras'}
},
FiltersofEachCategory:[],

setFiltersofEachCategory: async (list)=>{

try {
  set ({
    FiltersofEachCategory: list
  
  }) 
  
} catch (error) {
  
}
  
},
FilterProcessors: async (produit,body )=>{
    console.log('we are in the filter process')
    if(produit.brands){
        console.log('we are in the filter brands')
    }
  },

}))