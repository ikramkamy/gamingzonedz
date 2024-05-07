import { create  } from "zustand";
import image1 from "../../assets/home/section1/home-featured-cat-periph_0.png";
import image2 from '../../assets/home/section1/home-featured-cat-composants.png';
import image3 from '../../assets/home/section1/home-featured-cat-gaming.png';
import image4 from '../../assets/home/section1/home-featured-cat-image-son.png';
import image5 from '../../assets/home/section1/home-featured-cat-pc_0.png';



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
    urlImage:image1,
},

]

}))