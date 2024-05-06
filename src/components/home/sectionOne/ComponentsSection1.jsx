import { useState } from "react"

export const ButtonHomeSection1=(props)=>{
const [fillColor , setFillColor]=useState('none')

    return(<div className="flex justify-center items-center 
      z-10 cursor-pointer relative  w-[241.83px] h-[57.961px]"
      
      onMouseEnter={()=>setFillColor("#ca2026")}
      onMouseLeave={()=>setFillColor("none")}
      >

  <div className="uppercase bg-transparent cursor-pointer z-20 h-full flex justify-center items-center
  ">
    {props.btnName}
    
    </div>
    <svg 
    className="absolute top-0 sm:h-[50px]" 
    xmlns="http://www.w3.org/2000/svg" 
    width="241.83" height="57.961" 
    viewBox="0 0 241.83 57.961">
        
  <g id="Tracé_40" data-name="Tracé 40" transform="translate(4.815)" fill={fillColor} >
    <path d="M15.635,0H237.015L214.847,57.961H-4.815Z" stroke="none"/>
    <path d="M 16.34300231933594 0.9999923706054688 L -3.401687622070312 
    56.9613037109375 L 214.1588134765625 56.9613037109375 L 235.5615234375 
    0.9999923706054688 L 16.34300231933594 0.9999923706054688 M 15.63540649414062 
    -7.62939453125e-06 L 237.0146331787109 -7.62939453125e-06 L 214.8470001220703 
    57.9613037109375 L -4.81494140625 57.9613037109375 L 
    15.63540649414062 -7.62939453125e-06 Z" stroke="none" fill="#ca2026"/>
  </g>
  
</svg>
</div>
)
}