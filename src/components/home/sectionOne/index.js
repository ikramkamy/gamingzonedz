import ProductInTheStore from "./ProductInTheStore";
import trace1 from "../../../assets/home/section1/Tracé 47.png";
import trace2 from "../../../assets/home/section1/Tracé 41.png";
import trace3 from "../../../assets/home/section1/Tracé 46.png";
//import trace4 from "../../../assets/home/section1/Tracé 47.png;
import trace5 from "../../../assets/home/section1/Tracé 49.png";
import trace6 from "../../../assets/home/section1/Tracé 45.png";
import trace7 from "../../../assets/home/section1/Tracé 43.png";
import trace8 from "../../../assets/home/section1/Tracé 44.png"

import { HomeCarouselElements } from "../../stores/HomeStore";
import { useEffect, useState } from "react";
import { ButtonHomeSection1 } from "./ComponentsSection1";
const SectionOne=()=>{
const {CarouselElements, getBanners}=HomeCarouselElements((state=>state))
const [elem , setElem]=useState(0)

useEffect( ()=>{
    getBanners && getBanners()
},[])
const image = {
    getBanner(){
        return CarouselElements[elem].ImageUrl;
        //return elem[0].src.original;
    }
}
const ForwordCarousel=()=>{
    
    if(elem < CarouselElements.length-1){
        
        setElem(elem+1)
        //console.log(CarouselElements[elem].title.splite('')[0])
    }else(setElem(0))
}
const BackwordCarousel=()=>{
    setElem(elem-1)
}

    return(
    <div className="w-full  h-screen flex flex-col items-center ">
        <div className="wrapFirstSection 
        flex justify-center items-center w-full h-full  bg-sectionOnebg bg-cover">


            <div className="flex flex-col items-start mt-40 h-full ">
              <div id="#subtitleOne" className="flex justify-center items-center">
                <div id="#stylingVerticalSlach" className="w-1 h-4 bg-btnCarouselHover mr-2"></div>
                <h1 className="text-[21px] uppercase">{CarouselElements[elem].subtitle}</h1>
                
                </div>
              <h1 className="text-[79px] uppercase text-left text-wrap w-full"> {`${CarouselElements[elem].title.split(' ')[0]} ${CarouselElements[elem].title.split(' ')[1]}`}</h1>
              <h2 className="text-[79px] uppercase text-left font-light">{CarouselElements[elem].title.split(' ')[2]}</h2> 
        
        <div className="flex justify-between items-center mb-10 h-1/5  ">
        <ButtonHomeSection1 btnName="products" />
        <ButtonHomeSection1 btnName="trendings"/>
        
        </div>
        
              <div className="btnCarousel flex justify-between mt-5">
    
                        <div className="w-57  sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(0)}></div>
                        <div className="w-57  sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(1)}></div>
                        <div className="w-57  sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(2)}></div>
                        <div className="w-57  sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(3)}></div>
                        <div className="w-57  sm:w-10  h-1  bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(4)}></div>
                        <div className="w-57  sm:w-10  h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(5)}></div>
                        
               </div>



        
        
        
        
        
        
        
        
        </div>


       <div className="w-7/12 h-full overflow-hidden flex justify-end ">
        
       <div className="w-full ">
        <div className="flex w-full justify-between">
            <img src={trace1} alt="gaming zone" className="translate-y-10"/>
            <img src={trace2} alt="gaming zone"/>
            <img src={trace3} alt="gaming zone" className="translate-y-20"/>
            <img src={trace1} alt="gaming zone" className="rotate-180"/>
        </div>
        <div className="flex w-full justify-between  relative">
        <img src={trace1} alt="gaming zone" className=""/>
        
        <img src={trace6} alt="gaming zone"/>
      
     </div>
     <div className="flex w-full justify-between">
        <img src={trace7} alt="gaming zone"/>
        {/*<img src={image.getBanner()} alt="gaming" className=""/>*/}
        <img src={trace8} alt="gaming zone"/>
     </div>
        </div> 

        <div className="flex ">
        <div className="flex justify-between w-full">
            
            
           
        </div>
        </div>

        
        
        </div> 


        </div>
        
      
            


        <ProductInTheStore/>
        
    </div>)
}
export default SectionOne;