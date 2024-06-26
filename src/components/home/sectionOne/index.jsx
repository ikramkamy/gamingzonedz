import ProductInTheStore from "./ProductInTheStore";
import trace1 from "../../../assets/home/section1/Tracé 47.png";
import trace11 from "../../../assets/home/section1/smallScreen/Tracé 20788.png"
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
const [classVisible, setClassVisible]=useState('flex');


useEffect( ()=>{
    getBanners && getBanners()
},[])
const image = {
    getBanner(){
        return CarouselElements[elem].ImageUrl;
    }
}
const [dynamicPosition, setDynamicPosition]=useState({
    postion1:'',
    postion2:'',
    postion3:'',
    postion4:'',
    postion5:'',
    postion6:'',
    postion7:'',
    postion8:'',
    postion9:'',
    postion10:'',
    postion11:'',
  })
const handelDynamicPositionInitial =()=>{
    setDynamicPosition({
      postion1:'',
      postion2:'',
      postion3:'',
      postion4:'',
      postion5:'',
      postion6:'',
      postion7:'',
      postion8:'',
      postion9:'',
      postion10:'',
      postion11:'',
  
    })
  }
const handelDynamicPosition=()=>{
    setDynamicPosition({
      postion1:'translate-x-[100%] translate-y-[100%] rotate-[0deg] transition ease-in-out delay-150',
      postion2:'translate-x-[45%] max-sm:translate-x-[100%] translate-y-[150%] rotate-[0deg] transition ease-in-out delay-150',
      postion3:'-translate-x-[100%] translate-y-[100%] rotate-[0deg] ',
      postion4:'-translate-x-[140%] translate-y-[100%] rotate-[0deg] transition ease-in-out delay-150',
      postion5:'translate-x-[410%] transition ease-in-out delay-150',
      postion6:'-translate-x-[45%] transition ease-in-out delay-150',
      postion7:'translate-x-[147%] -translate-y-[35%] rotate-[2deg] transition ease-in-out delay-150',
      postion8:'-translate-x-[30%] -translate-y-[30%] rotate-[0deg] transition ease-in-out delay-150',
 
  
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if(elem < CarouselElements.length -1){
        setElem( elem + 1);
        console.log("condition 1 elem " ,elem < CarouselElements.length -1)
      }
     
     else {
  setElem(0)
  console.log("condition not verified elem " , elem)
       }
    }, 2000); 

    return () => clearInterval(interval); 
  }, [elem]);
    return(
    
<div className="w-full   flex flex-col items-center mt-20">

<div className="flex justify-center items-center w-full h-full p-20 max-md:p-2 bg-sectionOnebg bg-cover bg-no-repeat bg-center max-sm:p-0">
   
<div className="w-10/12 max-lg:w-11/12  max-sm:w-full h-screen max-sm:h-auto max-sm:pb-[10%]  flex  justify-between items-center max-sm:flex-col-reverse ">
            <div className="group flex  flex-col  w-1/3 items-start justify-between   h-full
              max-sm:w-full max-sm:items-center max-sm:mt-2">
                {/**titeles */}
              <div className="h-1/2 flex flex-col justify-center items-start">
              <div id="#subtitleOne" className="flex justify-center items-center">
                <div id="#stylingVerticalSlach" className="w-1 h-4 bg-btnCarouselHover mr-2"></div>
                <h1 className="text-[21px] uppercase max-md:text-[14px] ">{CarouselElements[elem].subtitle}</h1>
                
                </div>
              <h1 className="text-[69px]  max-2xl:text-[38px] max-xl:text-[38px]  uppercase text-left max-sm:text-center text-wrap max-sm:text-[43px] group-hover:animate-fade"> {`${CarouselElements[elem].title.split(' ')[0]} ${CarouselElements[elem].title.split(' ')[1]}`}</h1>
              <h2 className="text-[79px]  max-2xl:text-[38px] max-xl:text-[38px]   uppercase text-left max-sm:flex max-sm:justify-center max-sm:w-full  font-light max-sm:text-[43px] group-hover:animate-fade2 delay-700">{CarouselElements[elem].title.split(' ')[2]}</h2> 
              {/**buttons Products & trending */}
              <div className="flex justify-between items-center mb-10 max-sm:w-full">
               <ButtonHomeSection btnName="products" linkbtn="/products" />
               <ButtonHomeSection btnName="trendings"/>
             </div>
              </div>
              
              <div className="h-1/2  flex flex-col justify-start  w-full">
              
              {/**buttons to control carousel */}
              <div className="btnCarousel flex justify-between  w-full ">
    
                        <div className="w-[57px] max-sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(0)}></div>
                        <div className="w-[57px] max-sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(1)}></div>
                        <div className="w-[57px] max-sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(2)}></div>
                        <div className="w-[57px] max-sm:w-10 h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(3)}></div>
                        <div className="w-[57px] max-sm:w-10  h-1  bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(4)}></div>
                        <div className="w-[57px] max-sm:w-10  h-1 bg-btnCarousel   m-1 cursor-pointer hover:bg-btnCarouselHover hover:shadow-btnCarouselShadow" onClick={()=>setElem(5)}></div>
                        
               </div>
               </div>

        </div>

{/*******************************************images inimated *****************************************/}
<div className="w-2/3 max-md:w-1/2 relative  h-screen max-sm:h-auto max-sm:py-[10%] flex justify-end max-sm:justify-center   " onMouseEnter={handelDynamicPosition} onMouseLeave={handelDynamicPositionInitial}>
        
{/*************************************************************************************************** */}
<div className="group absolute top-0 max-sm:top-1/4 right-0 flex justify-center  w-full z-10 ">
 <img src={image.getBanner()} alt="gaming" className={`w-[600px] h-[600px] max-lg:w-[300px] max-lg:h-[300px] right-0 ${classVisible}`}/>
  
</div>  
            <div className="w-full  max-sm:w-10/12 max-md:mt-10  h-1/2 ">
              <div className="flex w-full justify-between" >
                
                 {/*****Responsive image*******/}
                            
                            <img src={trace1} alt="gaming zone" className={` translate-y-10 max-sm:translate-y-0 max-lg:w-[24px]  max-lg:h-[24px] animate-spin-slow animate-running ${dynamicPosition.postion1}`}/>
                {/*****Responsive image*******/}
                           <img src={trace2} alt="gaming zone" className={` max-lg:w-[50px]  max-lg:h-[50px] max-w-[80px] ${dynamicPosition.postion2}`}/>
                {/*****Responsive image*******/}
                           <img src={trace3} alt="gaming zone" className={`max-md:translate-y-20 max-lg:w-[40px]  max-lg:h-[40px]  max-sm:translate-y-0 animate-spin-slow ${dynamicPosition.postion3}`}/>
                 {/*****Responsive image*******/}          
                           <img src={trace1} alt="gaming zone" className={`max-sm:rotate-180w-[24px]  max-lg:h-[24px]  max-lg:max-w-[80px] animate-spin-slow ${dynamicPosition.postion4}`}/>
            </div>
                 <div className={`flex w-full justify-between `}>
                  {/*****Responsive image*******/} 
                   <img src={trace1} alt="gaming zone" className={`max-lg:w-[24px]  max-lg:h-[24px] rotate-[-135deg] ${dynamicPosition.postion5}`}/>
                   {/*****Responsive image*******/} 
                   <img src={trace6} alt="gaming zone" className={`max-lg:w-[71px]  max-lg:h-[63px]  rotate-[163deg] ${dynamicPosition.postion6}`}/>
                </div>
                <div className="flex w-full justify-between m-t-10 ">
                  {/*****Responsive image*******/} 
                   <img src={trace7} alt="gaming zone" className={`max-sm:ranslate-x-[0%] max-lg:w-[50px] max-lg:h-[50px] rotate-[65deg] ${dynamicPosition.postion7}`}/>
                   {/*****Responsive image*******/} 
                    <img src={trace8} alt="gaming zone" className={`max-sm:translate-x-[-35%]  max-lg:w-[71px]  max-lg:h-[70px] max-sm:ranslate-y-[35%] max-sm:rotate-[2deg] ${dynamicPosition.postion8}`}/>
                 
                 </div>
      
        
        </div> 
      
        
        
        </div> 


        </div>
        
      
</div>            
 
 <ProductInTheStore/>
     
    </div>)
}
export default SectionOne;