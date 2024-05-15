import { create  } from "zustand";
import image from "../../assets/home/actualite/Rectangle 35.png"
import image2 from "../../assets/home/actualite/Rectangle 37.png"
import image3 from "../../assets/home/actualite/Rectangle 39.png"


export const UseBlogStore= create((set, get)=>({
    blogs :[ {
    imageURL:image,
    title:"visite entreprise",
    subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
    bloglink:"/blog"
    
},
{
    imageURL:image2,
    title:"visite entreprise",
    subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
    bloglink:"/blog"
    
},
{
    imageURL:image3,
    title:"visite entreprise",
    subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
    bloglink:"/blog"
    
},

    ],
    
    
    }))