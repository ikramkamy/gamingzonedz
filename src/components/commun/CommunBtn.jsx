import { useState } from "react"

export const CommunBtn=({btn})=>{
    const [fillColor, setFillColor]=useState('url(#linear-gradient')
    return(<div className="relative  cursor-pointer flex justify-center items-center" 
    onMouseEnter={()=>setFillColor("#404040")} onMouseLeave={()=>setFillColor("url(#linear-gradient")}>
<div className="uppercase text-[15px] z-10 absolute" >{btn}</div>
        <svg xmlns="http://www.w3.org/2000/svg" 
            xlink="http://www.w3.org/1999/xlink" width="268.38" height="63.196" viewBox="0 0 268.38 63.196">
              <defs>
                <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#ca2026"/>
                  <stop offset="1" stop-color="#651013"/>
                </linearGradient>
              </defs>
              <path id="Tracé_398" data-name="Tracé 398" d="M18.019,0H264.157L239.51,63.2H-4.223Z" 
              transform="translate(4.223)" fill={fillColor}/>
            </svg>

</div>)
}

export const PriceBtn=({price})=>{
    const [fillColor, setFillColor]=useState('#404040')
   
    return(<div className="relative  cursor-pointer  flex justify-center items-center" onMouseEnter={()=>setFillColor("#ca2026")} onMouseLeave={()=>setFillColor("#404040")}>
<div className="uppercase text-[15px] z-10 absolute font-bold text-[]"   >{price}</div>

<svg xmlns="http://www.w3.org/2000/svg" 
            xlink="http://www.w3.org/1999/xlink" width="268.38" height="63.196" viewBox="0 0 268.38 63.196">
              <defs>
                <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#ca2026"/>
                  <stop offset="1" stop-color="#651013"/>
                </linearGradient>
              </defs>
              <path id="Tracé_398" data-name="Tracé 398" d="M18.019,0H264.157L239.51,63.2H-4.223Z" 
              transform="translate(4.223)" fill={fillColor}/>
            </svg>

</div>)
}

export const ToolProductBarBtn=({btn})=>{
    const [fillColor, setFillColor]=useState('none')
   
    return(
<div className="relative  cursor-pointer  flex justify-center items-center" onMouseEnter={()=>setFillColor("url(#linear-gradient)")} onMouseLeave={()=>setFillColor("none")}>
<div className="uppercase text-[15px] z-10 absolute "   >{btn}</div>

<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="290.373" height="63.38" viewBox="0 0 290.373 63.38">
  <defs>
    <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#ca2026"/>
      <stop offset="1" stop-color="#651013"/>
    </linearGradient>
  </defs>
  <path id="Tracé_453" data-name="Tracé 453" d="M14.449-3.91l245.588,0L214.977,59.126l-245.312.339Z" transform="translate(30.336 3.914)" fill={fillColor}/>
</svg>


</div>)
}




