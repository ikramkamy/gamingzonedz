import { create  } from "zustand";
import image from '../../assets/home/rebuiltcomputers/mc777_640x640.png'
import image1 from "../../assets/home/ourbrands/Gigabyte_Technology_logo_20080107.png"
import image2 from "../../assets/home/ourbrands/Groupe 18.png"
import image3 from "../../assets/home/ourbrands/Groupe 19.png"
import image4 from "../../assets/home/ourbrands/Tracé 130.png"
import partner1 from "../../assets/partners/Groupe 18.svg";
import partner2 from "../../assets/partners/Groupe 1059.svg";
import partner3 from "../../assets/partners/Groupe 1064.svg";
import service1 from "../../assets/contact/question.svg";
import service2 from "../../assets/contact/customer-support.svg";
import service3 from "../../assets/contact/g993.svg";
import service4 from "../../assets/contact/handshake.svg";

export const UseBrandssStore= create((set, get)=>({
    brands :[ {
    urlImage:image1,
    name:"gigabyte informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"

},
{
    urlImage:image2,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} ,
{
    urlImage:image3,
    name:"nvidia informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} ,
{
    urlImage:image1,
    name:"gigabyte informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} ,
{
    urlImage:image2,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} ,
{
    urlImage:image3,
    name:"nvidia informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} ,
{
    urlImage:image1,
    name:"gigabyte informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} 
,
{
    urlImage:image1,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} ,
{
    urlImage:image2,
    name:"nvidia informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} ,
{
    urlImage:image3,
    name:"gigabyte informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} ,
{
    urlImage:image3,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
} ,
 
    ],
partners:[{
    urlImage:partner1,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
},
{
    urlImage:partner2,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
},
{
    urlImage:partner3,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
},
{
    urlImage:partner1,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
},
{
    urlImage:partner2,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
},
{
    urlImage:partner3,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
},
{
    urlImage:partner1,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
},
{
    urlImage:partner2,
    name:"msi informatique",
    phone:"05 57 91 10 11",
    adress:"05 rue maraval, oran"
},
]   ,
services:[{
    urlImage:service1,
    title:"Technical Support",
    subtitle:"For technical assistance or bug reports, please contact:",
    phone:"+213 555 10 55 10",
    email:"support@gamingzone.net"
},
{
    urlImage:service2,
    title:"Customer Support",
    subtitle:"For technical assistance or bug reports, please contact:",
    phone:"05 57 91 10 11",
    email:"support@gmail.com"
},
{
    urlImage:service3,
    title:"General Inquiries",
    subtitle:"For technical assistance or bug reports, please contact:",
    phone:"05 57 91 10 11",
    email:"support@gmail.com"
},
{
    urlImage:service4,
    title:"Business Inquiries",
    subtitle:"For technical assistance or bug reports, please contact:",
    phone:"05 57 91 10 11",
    email:"support@gmail.com"
},

]    
   

    
    }))