import { UseProductsStore } from  "../../stores/ProductsStore";
import {responsive } from "../../carou/data";
import Carousel from "react-multi-carousel";
import { useState } from "react";
export const CarouselResponsiveView=({urlImage, name})=>{
    const [fillColor, setFillColor]=useState("#444444")
    const handellFillcolor=()=>{
          if(fillColor==="#444444") {
            setFillColor('#CA2026')
          }else{
            setFillColor('#444444')
          }
        
    }
    return(
<div className="  w-[100vw] flex justify-center flex-col items-center ">
        
        <img src={urlImage} alt="gaming" className="  mb-30 
         group-hover:shadow-lg group-hover:shadow-black "/>
        <h1 className="uppercase font-semibold text-[20px] text-center max-md:text-[16px]">{name}</h1>
        <div className="relative flex w-[200px] items-center h-[50px] justify-center font-normal cursor-pointer mt-3 "  onMouseEnter={handellFillcolor} onMouseDownCapture={handellFillcolor}>
           <svg className="absolute top-0   w-[200px] h-[50px] -z-10" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="122.236" height="29.351" viewBox="0 0 122.236 29.351">
          <path id="Tracé_51" data-name="Tracé 51" d="M5.907,0H118.013L106.787,29.351H-4.223Z" transform="translate(4.223)" fill={fillColor}/>
           </svg>

           
            <div className="uppercase text-[18px] max-md:text-[12px] text-center ">discover</div>
            </div>
        </div>
    )
}


export const Carou4=()=>{
 
    const {OurProductsTypes}=UseProductsStore((state)=>state)
   
    const listProduct = OurProductsTypes.map((item) => (
       
          <CarouselResponsiveView urlImage={item.urlImage} name={item.name}/>
       
          ));
    return(
   <div>
  <Carousel className="w-full  " showDots={false} responsive={responsive} autoPlay={true} draggable={true} >
            {listProduct}
           
    </Carousel>
     
  
    </div>
     
    )}