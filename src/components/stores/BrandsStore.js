import { create  } from "zustand";
import image from '../../assets/home/rebuiltcomputers/mc777_640x640.png'
import image1 from "../../assets/home/ourbrands/Gigabyte_Technology_logo_20080107.png"
import image2 from "../../assets/home/ourbrands/Groupe 18.png"
import image3 from "../../assets/home/ourbrands/Groupe 19.png"
import image4 from "../../assets/home/ourbrands/Tracé 130.png"

export const UseBrandssStore= create((set, get)=>({
    brands :[ {
    urlImage:image1,
},
{
    urlImage:image2,
} ,
{
    urlImage:image3,
} ,
{
    urlImage:image1,
} ,
{
    urlImage:image2,
} ,
{
    urlImage:image3,
} ,
{
    urlImage:image1,
} 
,
{
    urlImage:image1,
} ,
{
    urlImage:image2,
} ,
{
    urlImage:image3,
} ,
{
    urlImage:image1,
} ,
 
    ],
    
    
    }))