import { create  } from "zustand";
import image from "../../assets/home/actualite/Rectangle 35.png"
import image2 from "../../assets/home/actualite/Rectangle 37.png"
import image3 from "../../assets/home/actualite/Rectangle 39.png"
import imgblog1 from '../../assets/blog/jeune-joueur-s-amusant-competition-jeux-video-action-jouant-au-championnat-jeux-ligne-femme-caucasienne-profitant-tournoi-jeu-rpg-direct-jouant-ordinateur-moderne.png'
//import imgblog2 from '../../assets/blog/joueur-video-remportant-tournoi-tir-premiere-personne-utilisant-clavier-rvb-ecouteurs-professionnels-homme-joueur-professionnel-parlant-autres-joueurs-ligne-pour-competition-jeu-.png';
//import imgblog3 from '../../assets/blog/pov-jeune-homme-heureux-celebrant-sa-victoire-jeu-tir-ligne-aide-manette-sans-fil.png'
//import imgblog4 from '../../assets/blog/vue-epaule-homme-caucasien-utilisant-configuration-ordinateur-jouant-jeu-action-ligne-multijoueur-parlant-equipe-casque-joueur-diffuse-jeu-tir-spatial-au-rythme-rapide-tout-expli.png';
export const UseBlogStore= create((set, get)=>({
    blogs :[ {
    imageURL:image,
    date:"27/05/2024",
    title:"Gaming News",
    subtitle:"The biggest video game news, rumors, previews, and info about the PC, PlayStation, Xbox, Nintendo, & mobile titles you play..",
    bloglink:"/blog"
    
},

{
    imageURL:image2,
    date:"27/05/2024",
    title:"Dragon Age",
    subtitle:"Why I'm worried about Dragon Age Dreadwolf—and the Tiamat-sized RPG Baldur's Gate 3 looming over it is just the start",
    bloglink:"/blog"
    
},
{
    imageURL:image3,
    date:"27/05/2024",
    title:"Astro Bot Price...",
    subtitle:"A Japanese online retailer and the PlayStation Store have revealed the retail price of Astro Bot and Concord, respectively.",
    bloglink:"/blog"
    
},

    ],
    bloglist :[ {
        imageURL:imgblog1,
        date:"27/05/2024",
        title:"visite entreprise",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/blog"
        
    },
    
    {
        imageURL:imgblog1,
        date:"27/05/2024",
        title:"visite entreprise",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/blog"
        
    },
    {
        imageURL:imgblog1,
        date:"27/05/2024",
        title:"visite entreprise",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/blog"
        
    },
    {
        imageURL:imgblog1,
        date:"27/05/2024",
        title:"visite entreprise",
        subtitle:"Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper simulation, an upgraded career mode, and powerful new customisation features. Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.",
        bloglink:"/blog"
        
    },
    
        ]
    
    
    }))