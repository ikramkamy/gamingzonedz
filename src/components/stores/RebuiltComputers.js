import { create  } from "zustand";
import image from '../../assets/home/rebuiltcomputers/mc777_640x640.png'
import image1 from '../../assets/home/rebuiltcomputers/mcex_640x640.png'
import image2 from '../../assets/home/rebuiltcomputers/mcneo_960x960.png'

export const UseRebuiltComputersStore= create((set, get)=>({
    OurRebuiltComputers :[ {
    name:'divakit',
    //typeProduct:'case',
    description:`5000X, 5000T, and 7000X case options with tempered glass panels 
    Up to an Intel Core i9-14900K, or AMD Ryzen 9 7950X3D Soft 
    tube or hardline options for CPU and GPU Cooling Up to a single 
    NVIDIA GeForce RTX 4090 GPU liquid cooled Up to 96GB of DDR5 RAM 
    5600MHz or 32GB 6000Mhz DRAM Up to 3 year warranty + 24/7 tech support
     and lifetime labor included', urlImage:newProdimg6`,
    urlImage:image,
} ,{
    name:'origami',
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
}
    ],
    
    
    }))