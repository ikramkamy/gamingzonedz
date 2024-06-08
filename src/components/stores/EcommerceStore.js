import { create  } from "zustand";
import img1 from "../../assets/shopingcart/LD0005773556_1_0005773565_0005773569-removebg-preview.png"
import img2 from "../../assets/shopingcart/pngwing.com (27).png"
import axios from 'axios';
import { Calculate } from "@mui/icons-material";
import { sync } from "@egjs/flicking";
export const useEcommerceStore=create((set , get)=>(
{
    productsList:[
        {
            productName:"Samsung SSD 870 EVO 1TB",
            quantity:0,
            price:20000,
            urlImage:img2,
           
        },  {
            productName:"ELITE DDR4 ",
            quantity:0,
            price:20000,
            urlImage:img1,
        },
        {
            productName:"Samsung SSD 870 EVO 1TB",
            quantity:0,
            price:20000,
            urlImage:img2,
        },
        {
            productName:"ELITE DDR4 ",
            quantity:0,
            price:20000,
            urlImage:img1,
        },],

    setProductsList: (productsList) => set({ productsList }),
    //totalPrice: get().productsList.reduce((acc, product) => acc + product.price, 0),
    
    couponCode:
     {  applied:false,
        pourcetage:0,
    },
    
    total:0,
    dispatch:"Delivery costs are calculated at checkout",
   totalWithtaxes:0,

    isloading:false,

getCart: async()=>{
try {
    let response =await axios.get('')
    set ({isloading:true})
    set ({productsList:response.data})
    set ({couponCode:response.data})
} catch (error) {
    
}
    },
 



}))