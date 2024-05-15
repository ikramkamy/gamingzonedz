import trace1 from "../../../assets/home/section1/Tracé 47.png";
import trace2 from "../../../assets/home/section1/Tracé 41.png";
import trace3 from "../../../assets/home/section1/Tracé 46.png";
import trace6 from "../../../assets/home/section1/Tracé 45.png";
import trace7 from "../../../assets/home/section1/Tracé 43.png";
import trace8 from "../../../assets/home/section1/Tracé 44.png";
import { ButtonHomeSection } from "../sectionOne/ComponentsSection1";
const Section2=()=>{
    return(
<div className="flex justify-center items-center relative mt-[10%] h-[100vh]">
<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="2046.567" height="798.282" viewBox="0 0 2046.567 798.282" className="absolute w-full" >
  <defs>
    <linearGradient id="linear-gradient" x1="0.028" y1="0.5" x2="0.966" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0"/>
      <stop offset="0.452" stop-color="#ca2026"/>
      <stop offset="1"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.028" y1="0.5" x2="0.966" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0"/>
      <stop offset="0.452" stop-color="#333"/>
      <stop offset="1"/>
    </linearGradient>
  </defs>
  <g id="Groupe_1230" data-name="Groupe 1230" transform="translate(63 -2564.942)">
    <path id="Tracé_106" data-name="Tracé 106" d="M-5189,849.271l856.524-37.13,159.525,105.819,152.362-105.819,878.156,37.13v722.167l-822.462,38.986-208.056-131.81-185.516,131.81L-5189,1571.438Z" transform="translate(-3205.434 4175.366) rotate(180)" fill="url(#linear-gradient)"/>
    <path id="Tracé_94" data-name="Tracé 94" d="M-5189,825.384h859.516l156.534,69.586,154.452-69.586h876.066V1566.3h-820.614l-209.9-106.962L-4356.376,1566.3H-5189Z" transform="translate(-3205.434 4157.944) rotate(180)" fill="url(#linear-gradient-2)"/>
  </g>
</svg>

     <div className="z-10 flex w-9/12 justify-between items-center">
        <div className="w-2/6 ">
        <div className="uppercase w-fit text-[47px] text-center max-sm:text-[47px] max-md:text-[47px] ">build your<br/>dream pc</div>
          <h3 className="text-[18px]  text-left">
            Grow your empire as you learn to repair, build and customize PCs at the next level. Experience deeper
             simulation, an upgraded career mode, and powerful new customisation features. 
             Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.</h3>

             <div className="flex justify-center items-center mt-10 h-1/5  max-sm:w-full">

             <ButtonHomeSection btnName="build now"/>
             </div>

             
             </div>


      <div className="w-4/6  h-full flex justify-end  max-sm:w-full">
        
       <div className="w-full flex flex-col justify-end items-end bg-bgSection2 bg-no-repeat  bg-center bg-1/2">
        <div className="flex w-[90%]  justify-between">
           <div className="w-fit">
            <img src={trace1} alt="gaming zone" className="translate-y-10 max-sm:translate-y-0"/>
            </div>
            <img src={trace2} alt="gaming zone"/>
              <div className=""><img src={trace3} alt="gaming zone" className="translate-y-20  max-sm:translate-y-0"/></div>
              <div><img src={trace1} alt="gaming zone" className="rotate-180"/></div>
        </div>
        <div className="flex w-[90%] justify-between  ">
        <img src={trace1} alt="gaming zone" className=""/>
        
        <img src={trace6} alt="gaming zone"/>
      
        </div>
         <div className="flex w-[90%] justify-between m-t-10">
        <img src={trace7} alt="gaming zone"/>
       <div className=""><img src={trace8} alt="gaming zone"/></div> 
        </div>
        {/*<div className="">        
        <img src={imagesection2} alt="gaming" className={` w-1/4 max-w-[812px] object-cover  left-[40%] top-1/4 right-0 `}/>       
    </div>*/}
     
        </div> 

       

        
        
        </div> 

     </div>

    <div>

    </div>

    </div>)
}
export default Section2;