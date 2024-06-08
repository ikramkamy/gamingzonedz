import { create  } from "zustand";
import image from '../../assets/home/rebuiltcomputers/mc777_640x640.png'
import image1 from '../../assets/home/rebuiltcomputers/mcex_640x640.png'
import image2 from '../../assets/home/rebuiltcomputers/mcneo_960x960.png'
import img1 from "../../assets/predesignedpc/Image 107.png";
import img2 from "../../assets/predesignedpc/Image 108.png";
import img3 from "../../assets/predesignedpc/Image 109.png";
import img4 from "../../assets/predesignedpc/mcneo_960x960.png";
import img5 from "../../assets/predesignedpc/mcneo_960x960.png";
import icon1 from "../../assets/predesignedpc/icons/Groupe 1086.png";
import icon2 from "../../assets/predesignedpc/icons/Page-1_23_.png";
import icon3 from "../../assets/predesignedpc/icons/g4299.png";
import icon4 from "../../assets/predesignedpc/icons/hard-disk-drive.png";
import icon5 from "../../assets/predesignedpc/icons/psu.png";
import icon6 from "../../assets/predesignedpc/icons/ssd.png";
import icon7 from "../../assets/predesignedpc/icons/outline.png";
import icon8 from "../../assets/predesignedpc/icons/cpu-tower.png";
import icon9 from "../../assets/predesignedpc/icons/graphic-card.png";
export const UsePrebuiltComputersStore= create((set, get)=>({
OurPrebuiltComputers :[ {
    name:'DIVATECH PC ART',
    //typeProduct:'case',
    description:`PC gamer AMD Ryzen 5 5500 (3.6 GHz / 4.2 GHz) 16 Go SSD 1 To NVIDIA GeForce RTX 4060 8 Go Wi-FI AC (sans Windows - non monté)`,
    urlImage:image,
} ,{
    name:'DIVATECH PC Bazooka Dark Gen 12',
    //typeProduct:'case',
    description:`5000X, 5000T, and 7000X case options with tempered glass panels 
    Up to an Intel Core i9-14900K, or AMD Ryzen 9 7950X3D Soft tube or hardline 
    options for CPU and GPU Cooling Up to a single NVIDIA GeForce RTX 4090 GPU liquid 
    cooled Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM Up to 3 year warranty 
    + 24/7 tech support and lifetime labor included', urlImage:newProdimg6`,
    urlImage:image1,
}, {
    name:'zontek',
    //typeProduct:'case',
    description:`5000X, 5000T, and 7000X case options with tempered glass panels
     Up to an Intel Core i9-14900K, or AMD Ryzen 9 7950X3D Soft tube or hardline 
     options for CPU and GPU Cooling Up to a single NVIDIA GeForce RTX 4090 GPU liquid cooled 
     Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM Up to 3 year warranty + 24/7 tech 
     support and lifetime labor included', urlImage:newProdimg6`,
    urlImage:image2,
}, {
    name:'zontek',
    //typeProduct:'case',
    description:`C gamer Intel Core i5-12400F 16 Go SSD 500 Go NVIDIA GeForce 
    RTX 4060 8 Go LAN 2.5 GbE (without Windows - unmounted)`,
    urlImage:image2,
}, {
    name:'zontek',
    //typeProduct:'case',
    description:`5000X, 5000T, and 7000X case options with tempered glass panels
     Up to an Intel Core i9-14900K, or AMD Ryzen 9 7950X3D Soft tube or hardline 
     options for CPU and GPU Cooling Up to a single NVIDIA GeForce RTX 4090 GPU liquid cooled 
     Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM Up to 3 year warranty + 24/7 tech 
     support and lifetime labor included', urlImage:newProdimg6`,
    urlImage:image2,
}, {
    name:'zontek',
    //typeProduct:'case',
    description:`5000X, 5000T, and 7000X case options with tempered glass panels
     Up to an Intel Core i9-14900K, or AMD Ryzen 9 7950X3D Soft tube or hardline 
     options for CPU and GPU Cooling Up to a single NVIDIA GeForce RTX 4090 GPU liquid cooled 
     Up to 96GB of DDR5 RAM 5600MHz or 32GB 6000Mhz DRAM Up to 3 year warranty + 24/7 tech 
     support and lifetime labor included', urlImage:newProdimg6`,
    urlImage:image2,
}
    ],
PredesignedComputers: [{
        name:'HADES MC-R43',
        //typeProduct:'case',
        description:`HADES MC-R43 est un PC gaming puissant et polyvalent. Équipé d'un processeur AMD Ryzen 3 PRO 4350G avec l'une des plus puissants APU, la Radeon VEGA 6, ça vous aidera à profitez d'une expérience gaming exceptionnelle au titres d'e-sports plus connus et les jeux AAA, en vous offrant une configuration entièrement évolutive, 8GB de RAM DDR4 3200Mhz avec un emplacement vide une 2éme barrette de RAM, 128GB de stockage SSD (avec des espaces vides pour les HDD), assez de puissance grâce à l'alimentation MARS GAMING 550W 85+ certifié, et un boîtier MC-X2 équipé de 2 ventilateurs FRGB et plein d'espace pour un bon refroidissement`,
        urlImage:img1,
        styleFlex:"flex-row-reverse",
    },
    {
        name:"TAKE COMMANDOF TRUE POWER",
        description:"When you need the maximum amount of PC power with innovative, high-performance custom cooling, the ORIGIN PC GENESIS desktop lays down the foundation to create your dream machine. Designed for the gamer and PC enthusiast, the HydroX powered GENESIS is professionally built and backed by a 24/7 support team. Choose from the latest high end PC hardware with support for the latest graphics cards and processors cooled by the latest in HydroX cooling technology.",
        urlImage:img2,
        styleFlex:"flex",
    },
    {
        name:"TAKE COMMANDOF TRUE POWER",
        description:"When you need the maximum amount of PC power with innovative, high-performance custom cooling, the ORIGIN PC GENESIS desktop lays down the foundation to create your dream machine. Designed for the gamer and PC enthusiast, the HydroX powered GENESIS is professionally built and backed by a 24/7 support team. Choose from the latest high end PC hardware with support for the latest graphics cards and processors cooled by the latest in HydroX cooling technology.",
        urlImage:img3,
        styleFlex:"flex-row-reverse",
    },
    {
        name:"GEFORCE RTX 40 SERIES",
        description:"NVIDIA® GeForce RTX® 40 Series GPUs are beyond fast for gamers and creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture which delivers a quantum leap in both performance and AI-powered graphics. Experience lifelike virtual worlds with ray tracing and ultra-high FPS gaming with the lowest latency. Discover revolutionary new ways to create an unprecedented workflow acceleration with your ORIGIN PC GENESIS. Available with HydroX cooling blocks for peak performance under sustained loads.",
        urlImage:img4,
        styleFlex:"flex",
       
    },
    {
        name:"WINDOWS 11 READY",
        description:"NVIDIA® GeForce RTX® 40 Series GPUs are beyond fast for gamers and creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture which delivers a quantum leap in both performance and AI-powered graphics. Experience lifelike virtual worlds with ray tracing and ultra-high FPS gaming with the lowest latency. Discover revolutionary new ways to create an unprecedented workflow acceleration with your ORIGIN PC GENESIS. Available with HydroX cooling blocks for peak performance under sustained loads.",
        urlImage:img5,
        styleFlex:"flex-row-reverse",
       
    },
    
   

],
technicalSpecification:[{
    name:"CPU",
    specifcation:"Asus prime a 320m-k 4599 ryzen",
    urlImage:icon1,
},
{
    name:"Ram",
    specifcation:"Asus prime a 320m-k 4599 ryzen",
    urlImage:icon2,
},
{
    name:"HDD",
    specifcation:"Asus prime a 320m-k 4599 ryzen",
    urlImage:icon3,
},
{
    name:"CPU Cooler",
    specifcation:"Asus prime a 320m-k 4599 ryzen",
    urlImage:icon4,
},
{
    name:"SSD",
    specifcation:"Asus prime a 320m-k 4599 ryzen",
    urlImage:icon5,
},
{
    name:"CPU",
    specifcation:"Asus prime a 320m-k 4599 ryzen",
    urlImage:icon6,
},
{
    name:"GPU ",
    specifcation:"Asus prime a 320m-k 4599 ryzen",
    urlImage:icon7,
},
{
    name:"Power supply",
    specifcation:"Asus prime a 320m-k 4599 ryzen",
    urlImage:icon8,
},
{
    name:"CASE",
    specifcation:"Asus prime a 320m-k 4599 ryzen",
    urlImage:icon9,
},






]
    
    }))