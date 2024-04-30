import ProductInTheStore from "./ProductInTheStore";
//import logo from '../../../assets/home/section1/Composant11.png'
import { HomeCarouselElements } from "../../stores/HomeStore";
import { useEffect, useState } from "react";

const SectionOne=()=>{
const {CarouselElements, getBanners}=HomeCarouselElements((state=>state))
const [elem , setElem]=useState(0)

useEffect( ()=>{
    getBanners && getBanners()
},[])
const image = {
    getBanner(){
        return CarouselElements[1].ImageUrl;
        //return elem[0].src.original;
    }
}
const ForwordCarousel=()=>{
    setElem(elem+1)
}
const BackwordCarousel=()=>{
    setElem(elem-1)
}

    return(<div className="w-full h- bg-sectionOnebg  flex justify-center ">
        <div className="">
         
        </div>
         {/**   <LazyImage alt="gaming"/>*/}
        <h1 className="text-white z-10"> 
           </h1>
            <img src={image.getBanner()} alt="gaming"/>

<div className="btnCarousel flex justify-between w-1/2">
    <div className="w-57 h-2 bg-btnCarousel   m-2 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselHover-100"></div>


    
</div>
        <ProductInTheStore/>
    </div>)
}
export default SectionOne;