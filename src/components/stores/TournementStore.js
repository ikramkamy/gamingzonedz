import { create  } from "zustand";
import img from '../../assets/tournment/ea-fc-tournaments.png';
import img2 from '../../assets/tournment/thumbnail-mystake-fcleauge-800.png';
import img3 from '../../assets/tournment/zondacrypto-fortnite-tournament-1.png';
import img4 from '../../assets/tournment/zondacrypto-fortnite-tournament.svg';
import img5 from '../../assets/tournment/thumbnail-mystake-fcleauge-800.svg';
export const UseTournementStore= create((set, get)=>({
    tournment :[ {
    imageURL:img,
    date:"27/05/2024",
    title:"visite entreprise",
    subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
    bloglink:"/blog"
    
},

{
    imageURL:img2,
    date:"27/05/2024",
    title:"visite entreprise",
    subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
    bloglink:"/blog"
    
},
{
    imageURL:img3,
    date:"27/05/2024",
    title:"visite entreprise",
    subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
    bloglink:"/blog"
    
},

    ],
    tournmentlist :[ {
        imageURL:img,
        date:"27/05/2024",
        title:"League of legends tournament",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/tournementpage/:id"
        
    },
    
    {
        imageURL:img2,
        date:"27/05/2024",
        title:"League of legends tournament",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/tournementpage/:id"
        
    },
    {
        imageURL:img3,
        date:"27/05/2024",
        title:"League of legends tournament",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/tournementpage/:id"
        
    },
    {
        imageURL:img4,
        date:"27/05/2024",
        title:"League of legends tournament",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/tournementpage/:id"
        
    },
    {
        imageURL:img5,
        date:"27/05/2024",
        title:"League of legends tournament",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/tournementpage/:id"
        
    },{
        imageURL:img,
        date:"27/05/2024",
        title:"League of legends tournament",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/tournementpage/:id"
        
    }
    
        ]
    
    
    }))