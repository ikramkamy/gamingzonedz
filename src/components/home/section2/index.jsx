import trace1 from "../../../assets/home/section1/Tracé 47.png";
import trace2 from "../../../assets/home/section1/Tracé 41.png";
import trace3 from "../../../assets/home/section1/Tracé 46.png";
import trace6 from "../../../assets/home/section1/Tracé 45.png";
import trace7 from "../../../assets/home/section1/Tracé 43.png";
import trace8 from "../../../assets/home/section1/Tracé 44.png";
import trace11 from "../../../assets/home/section2/forms/Tracé 95.png";
import trace12 from "../../../assets/home/section2/forms/Tracé 96.png";
import trace13 from "../../../assets/home/section2/forms/Tracé 97.png";
import trace14 from "../../../assets/home/section2/forms/Tracé 98.png";
import trace15 from "../../../assets/home/section2/forms/Tracé 99.png";
import trace16 from "../../../assets/home/section2/forms/Tracé 100.png";
import trace17 from "../../../assets/home/section2/forms/Tracé 101.png";
import trace18 from "../../../assets/home/section2/forms/Tracé 102.png";
import trace19 from "../../../assets/home/section2/forms/Tracé 104.png";
import image from "../../../assets/home/section2/configurator-pc-exemple.c598a585.png"
import { ButtonHomeSection } from "../sectionOne/ComponentsSection1";
import { useState } from "react";
const Section2=()=>{

const [dynamicAnimate, setDynamicAnimate]=useState({
  mouvment1:'animate-spin-slow1',
  mouvment2:'animate-spin-slow3',
  mouvment3:'animate-spin-slow2',
  mouvment4:'animate-move4',
  mouvment5:'',
  mouvment6:'',
  mouvment7:'',
  mouvment8:'',
  mouvment9:'',
  zoomEffect:'animate-zoomEffect'
})
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
const handelDynamicPosition=()=>{
  setDynamicPosition({
    postion1:'translateX(100px)  translateY(100px) bg-red-200',
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
const handelDynamicPositionInitial=()=>{
  setDynamicPosition({
    postion1:'bg-red-500',
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
const handelDynamicAnimation=()=>{
  setDynamicAnimate({
    mouvment1:'move1',
    mouvment2:'move2',
    mouvment3:'move3',
    mouvment4:'translateX(-140%)',
    mouvment5:'move5',
    mouvment6:'move6',
    mouvment7:'move7',
    mouvment8:'',
    mouvment9:'',
    zoomEffect:'animate-zoomEffect'
  })
}
    return(
<div className="flex flex-col justify-center items-center relative mt-[10%] h-[100vh]">
<div className="hidden z-10 w-full max-sm:flex uppercase justify-center 
 text-center max-sm:text-[38px] max-md:text-[47px] ">
          build your <br/> dream pc</div>
     <div className="absolute top-0 w-full  flex justify-center items-center  h-[100%]">
  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
width="" height="" viewBox="0 0 2046.567 798.282" className="" >

  <g id="Groupe_1230" data-name="Groupe 1230" transform="translate(63 -2564.942)">
    <path id="Tracé_106" data-name="Tracé 106" d="M-5189,849.271l856.524-37.13,159.525,105.819,152.362-105.819,878.156,37.13v722.167l-822.462,38.986-208.056-131.81-185.516,131.81L-5189,1571.438Z" transform="translate(-3205.434 4175.366) rotate(180)" fill="url(#linear-gradient)"/>
    <path id="Tracé_94" data-name="Tracé 94" d="M-5189,825.384h859.516l156.534,69.586,154.452-69.586h876.066V1566.3h-820.614l-209.9-106.962L-4356.376,1566.3H-5189Z" transform="translate(-3205.434 4157.944) rotate(180)" fill="url(#linear-gradient-2)"/>
  </g>
    </svg>
     </div>
     <div className="z-10 flex w-9/12 justify-between items-center
      max-sm:flex-col-reverse max-sm:w-full " >
        <div className="w-2/6 max-sm:w-full">
        <div className=" uppercase max-sm:hidden w-fit text-[47px] text-center max-sm:text-[47px] max-md:text-[47px] ">
          build your<br/>dream pc</div>
          <h3 className="text-[18px]  text-left max-sm:w-full max-sm:p-5">
            Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper
             simulation, an upgraded career mode, and powerful new customisation features. 
             Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.</h3>

             <div className="flex justify-center items-center mt-10 h-1/5  max-sm:w-full">

             <ButtonHomeSection btnName="build now"/>
             </div>

             
             </div>


      
        <div className={`w-4/6 top-0 max-sm:w-full h-full flex
        justify-center  max-sm:w-full max-sm:hidden`} onMouseEnter={handelDynamicPosition} onMouseOut={handelDynamicPositionInitial} >
        <img src={image} alt="pc configuration" className={`z-10  `}/>
        
        {/*******************************animated forms*****************************/}
        <div className="w-full flex flex-col justify-end items-end absolute hidden">
         <div className="flex w-[90%]  justify-between">
           <img src={trace1} alt="gaming zone" className={`translate-y-10 max-sm:translate-y-0 ${dynamicPosition.postion1} ${dynamicAnimate.mouvment1}`}/>
           <img src={trace2} alt="gaming zone" className={`${dynamicAnimate.mouvment2}`}/>
           <img src={trace3} alt="gaming zone" className={`translate-y-20  max-sm:translate-y-0 ${dynamicAnimate.mouvment3}`}/>
           <img src={trace1} alt="gaming zone" className={`rotate-180 ${dynamicAnimate.mouvment4}`}/>
         </div>
         <div className="flex w-[90%] justify-between  ">
            <img src={trace1} alt="gaming zone" className=""/>
          <div className=""><img src={trace19} alt="gaming zone pc builder" className="top-0"/></div>  
            <img src={trace6} alt="gaming zone"/>
         </div>
          <div className="flex w-[90%] justify-between m-t-10">
         <img src={trace7} alt="gaming zone"/>
         <img src={trace8} alt="gaming zone"/>
         </div>
         
      
         </div> 
 
        
 
         
         
         </div> 
         
    <div className="group w-4/6 max-sm:w-full h-full flex justify-end  max-sm:w-full hidden max-sm:flex ">

        <div className="w-full flex flex-col justify-end items-end  ">
        <div className="flex w-[90%]  justify-between ">
          <img src={trace11} alt="gaming zone" className={`translate-y-10 max-sm:translate-y-0 ${dynamicAnimate.mouvment1}`}/>
          
          <img src={trace13} alt="gaming zone" className={`translate-y-20  max-sm:translate-y-0  ${dynamicAnimate.mouvment1}`}/>
          <img src={trace14} alt="gaming zone" className={`rotate-180   ${dynamicAnimate.mouvment1}`}/>
        </div>
        <div className="flex w-[90%] justify-between ">
           <div><img src={trace1} alt="gaming zone" className="animate-pulse"/></div>
           <div><img src={trace12} alt="gaming zone" className="animate-pulse"/></div>
           <img src={trace19} alt="gaming zone pc builder" className=""/>
           <div><img src={trace16} alt="gaming zone" className="animate-spin-slow1"/></div>
        </div>
         <div className="flex w-[90%] justify-between m-t-10 ">
        <img src={trace17} alt="gaming zone" className="animate-move66"/>
        <img src={trace18} alt="gaming zone"/>
        </div>
        
     
        </div> 

       

        
        
        </div> 
     </div>
    </div>)
}
export default Section2;