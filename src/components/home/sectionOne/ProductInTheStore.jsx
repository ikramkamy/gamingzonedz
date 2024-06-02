import { UseProductsStore } from "../../stores/ProductsStore";
import { useState, useRef} from "react";
import {CarouselResponsiveView , Carou4} from "./CarouselResponsiveView";

const ProductInTheStore=()=>{
  
    const {OurProductsTypes}=UseProductsStore((state)=>state)


  

    return(
<div className="flex justify-center flex-col items-center w-full bg-primary py-40 px-20 max-lg:px-0 max-sm:px-2">
        <div className="flex  max-sm:hidden justify-between items-center w-10/12 max-sm:w-full max-md:flex-wrap max-sm:flex-no-wrap max-sm:flex-col max-md:justify-left">
      {OurProductsTypes.map((e)=>
        <div className="group relative flex flex-col w-[19%] max-sm:w-full justify-start items-center
         h-[50vh] bg-productsTyps bg-center  bg-no-repeat bg-100% bg-bottom 
       
         transition ease-in-out duration-500  cursor-pointer hover:translate-y-[50px]
         
         ">
        <div className="h-2/5 ">
        
        <img src={e.urlImage} alt="gaming" className="w-full  mb-30  group-hover:shadow-lg group-hover:shadow-black "/>
        
        <h1 className="uppercase font-semibold text-[20px] text-center max-lg:text-[11px]">{e.name}</h1>
        <div className="uppercase font-normal text-[18px] max-md:text-[12px] text-center 
        
        bg-btnbg bg-no-repeat bg-center cursor-pointer mt-3 hover:font-bold">discover</div>
        </div>
        </div>
)}

</div>
<div className="w-full sm:hidden"> <Carou4/></div> 

</div>)
}
export default ProductInTheStore;