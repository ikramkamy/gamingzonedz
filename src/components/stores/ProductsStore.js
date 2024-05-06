import { create  } from "zustand";
import image1 from "../../assets/home/section1/home-featured-cat-periph_0.png"

export const UseProductsStore= create((set, get)=>({
OurProductsTypes :[{
    name:'pc sur-mesure',
    urlImage:image1,
},
{
    name:'pc pré-conçu',
    urlImage:image1,
},{
    name:'périphériques',
    urlImage:image1,
},{
    name:'Composants',
    urlImage:image1,
},{
    name:'audio & screens',
    urlImage:image1,

}
]

}))