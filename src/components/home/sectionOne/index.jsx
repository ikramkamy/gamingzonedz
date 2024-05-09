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
import { ButtonHomeSection } from "./ComponentsSection1";
const SectionOne=()=>{
   
const {CarouselElements, getBanners}=HomeCarouselElements((state=>state))
const [elem , setElem]=useState(0);
const [classVisible, setClassVisible]=useState('visible');
const [classInvisible,setClassInvisible]=useState('invisible')

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
        if(elem%2==0){
            alert('show first')
        }
        else{
            alert('show second')
        }
        //console.log(CarouselElements[elem].title.splite('')[0])
    }else(setElem(0))
}
const BackwordCarousel=()=>{
    setElem(elem-1)
}

useEffect(()=>{
    if(elem%2==0){
        
        setClassVisible('visible')
        setClassInvisible('invisible')
    }
    else{
        
        setClassVisible('invisible')
        setClassInvisible('visible')

    }
},[elem])

    return(
    <div className="w-full   flex flex-col items-center ">
  
<div className="flex justify-center items-center w-full h-full p-20 bg-sectionOnebg bg-cover bg-no-repeat bg-center max-sm:p-0">
   
<div className="h-5/6 w-10/12 flex   flex  justify-between items-center max-sm:flex-col-reverse max-sm:w-full">
            <div className="flex flex-col  items-start mt-40 h-full  max-sm:w-full max-sm:items-center max-sm:mt-2">
              <div id="#subtitleOne" className="flex justify-center items-center">
                <div id="#stylingVerticalSlach" className="w-1 h-4 bg-btnCarouselHover mr-2"></div>
                <h1 className="text-[21px] uppercase">{CarouselElements[elem].subtitle}</h1>
                
                </div>
              <h1 className="text-[79px] uppercase text-left text-wrap max-sm:text-[43px]"> {`${CarouselElements[elem].title.split(' ')[0]} ${CarouselElements[elem].title.split(' ')[1]}`}</h1>
              <h2 className="text-[79px] uppercase text-left font-light max-sm:text-[43px]">{CarouselElements[elem].title.split(' ')[2]}</h2> 
        
        <div className="flex justify-between items-center mb-10 h-1/5  max-sm:w-full">
        <ButtonHomeSection btnName="products" />
        <ButtonHomeSection btnName="trendings"/>
        
        </div>
        
              <div className="btnCarousel flex justify-between mt-5 w-80%">
    
                        <div className="w-57  sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(0)}></div>
                        <div className="w-57  sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(1)}></div>
                        <div className="w-57  sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(2)}></div>
                        <div className="w-57  sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(3)}></div>
                        <div className="w-57  sm:w-10  h-1  bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(4)}></div>
                        <div className="w-57  sm:w-10  h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(5)}></div>
                        
               </div>



        
        
        
        
        
        
        
        
        </div>


       <div className="w-7/12 h-full flex justify-end  max-sm:w-full ">
        
       <div className="w-full  relative">
        <div className="flex w-full justify-between">
           <div className="w-fit bg-white">
            <img src={trace1} alt="gaming zone" className="translate-y-10 max-sm:translate-y-0"/>
            </div>
            <img src={trace2} alt="gaming zone"/>
            <div className="bg-white">  <img src={trace3} alt="gaming zone" className="translate-y-20  max-sm:translate-y-0"/></div>
          
            <img src={trace1} alt="gaming zone" className="rotate-180"/>
        </div>
        <div className="flex w-full justify-between  ">
        <img src={trace1} alt="gaming zone" className=""/>
        
        <img src={trace6} alt="gaming zone"/>
      
        </div>
         <div className="flex w-full justify-between m-t-10">
        <img src={trace7} alt="gaming zone"/>
       <div className="bg-white"><img src={trace8} alt="gaming zone"/></div> 
        </div>
{/*<img src={image.getBanner()} alt="gaming" className="absolute top-1/4 left-[37%] max-w-90%"/>*/}
     <img src={image.getBanner()} alt="gaming" className={`absolute w-full max-w-[812px] object-cover translate-x-minus20 w-4/5 top-0 right-0 ${classVisible}`}/>
     <img src={image.getBanner()} alt="gaming" className={`absolute  w-full  max-w-[812px] object-cover translate-xminus20  w-4/5 top-0 right-0 ${classInvisible}`}/>
        </div> 

       

        
        
        </div> 


        </div>
        
      
</div>            
 
 <ProductInTheStore/>
        
    </div>)
}
export default SectionOne;