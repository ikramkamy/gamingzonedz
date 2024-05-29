import { useState } from "react";
import facebook from '../../assets/login/iocns/Icon awesome-facebook-f.png';
import google from '../../assets/login/iocns/Icon awesome-google-plus-g.png';
import twitter from '../../assets/login/iocns/Icon awesome-twitter.png'
export const BtnLogin=({btn})=>{
  const [fillColor, setFillColor]=useState('#373737')
    return(
    
    <div className="relative  cursor-pointer  flex justify-center items-center" onMouseEnter={()=>setFillColor("url(#linear-gradient)")} onMouseLeave={()=>setFillColor("#373737")}>
    <div className="uppercase text-[15px] z-10 absolute "   >{btn}</div>
    

<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="304.816" height="86.236" viewBox="0 0 304.816 86.236">
  <defs>
    <linearGradient id="linear-gradient" x1="0.068" y1="0.644" x2="1" y2="0.622" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#ca2026"/>
      <stop offset="0.553" stop-color="#ca2026"/>
      <stop offset="1" stop-color="#ca2026"/>
    </linearGradient>
    <filter id="Tracé_20782" x="0" y="0" width="304.816" height="86.236" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_20782)">
    <path id="Tracé_20782-2" data-name="Tracé 20782" d="M-21016.545-5282.4l-10.652,8.917v59.319h276.025l10.791-7.421V-5282.4Z" 
    transform="translate(21036.2 5288.4)" fill={fillColor}/>
  </g>
</svg>

    </div>)
}

export const BtnLogin2 =({btn})=>{
  const [fillcolor, setFillColor]=useState('#406dc8')
  return( <div className="relative m-2 cursor-pointer  flex justify-center items-center" onMouseEnter={()=>setFillColor("#275BC4")} onMouseLeave={()=>setFillColor("#406dc8")}>
  <div className="uppercase text-[11px] z-10 absolute flex items-center"><img src={facebook} alt="login gaming zone" className="mr-2"/>{btn}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.574" height="57.212" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin3 =({btn})=>{
  const [fillcolor, setFillColor]=useState('#E8462F')
  return( <div className="relative m-2 cursor-pointer  flex justify-center items-center" onMouseEnter={()=>setFillColor("#E82A0F")} onMouseLeave={()=>setFillColor("#E8462F")}>
  <div className="uppercase text-[11px] z-10 absolute flex items-center"><img src={google} alt="login gaming zone" className="mr-2"/>{btn}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.574" height="57.212" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin4 =({btn})=>{
  const [fillcolor, setFillColor]=useState('#67CEF0')
  return( <div className="relative m-2 cursor-pointer  flex justify-center items-center" onMouseEnter={()=>setFillColor("#3CC6F3")} onMouseLeave={()=>setFillColor("#67CEF0")}>
  <div className="uppercase text-[11px] z-10 absolute flex items-center"><img src={twitter} alt="login gaming zone" className="mr-2"/>{btn}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.574" height="57.212" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin5 =()=>{
  const [fillcolor, setFillColor]=useState('#505050')
  return( <div className="relative  m-2 cursor-pointer  flex justify-start items-center" onMouseEnter={()=>setFillColor("#505050")} onMouseLeave={()=>setFillColor("#505050")}>
   <input type="text" placeholder="Email@gmail.com" className="absolute top-center pl-1  z-10 bg-transparent w-full  focus:outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.574" height="57.212" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin6 =()=>{
  const [fillcolor, setFillColor]=useState('#505050')
  return( <div className="relative w-full m-2 cursor-pointer  flex justify-start items-center" onMouseEnter={()=>setFillColor("#505050")} onMouseLeave={()=>setFillColor("#505050")}>
   <input type="password" placeholder="password" className="absolute top-center pl-1  z-10 bg-transparent w-full  focus:outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.574" height="57.212" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin55 =()=>{
  const [fillcolor, setFillColor]=useState('#505050')
  return( <div className="relative  m-2 cursor-pointer  flex justify-start items-center" onMouseEnter={()=>setFillColor("#505050")} onMouseLeave={()=>setFillColor("#505050")}>
   <input type="text" placeholder="first name" className="absolute top-center pl-1  z-10 bg-transparent w-full  focus:outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.574" height="57.212" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin66 =()=>{
  const [fillcolor, setFillColor]=useState('#505050')
  return( <div className="relative w-full m-2 cursor-pointer  flex justify-start items-center" onMouseEnter={()=>setFillColor("#505050")} onMouseLeave={()=>setFillColor("#505050")}>
   <input type="text" placeholder="familly name" className="absolute top-center pl-1  z-10 bg-transparent w-full  focus:outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.574" height="57.212" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin8 =()=>{
  const [fillcolor, setFillColor]=useState('#505050')
  return( <div className="relative w-full  m-2 cursor-pointer  flex justify-start items-center" onMouseEnter={()=>setFillColor("#505050")} onMouseLeave={()=>setFillColor("#505050")}>
   <textarea type="text" placeholder="message" className="absolute top-0 pl-1  z-10 bg-transparent w-full  focus:outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin9 =()=>{
  const [fillcolor, setFillColor]=useState('#505050')
  return( <div className="relative w-full m-2 cursor-pointer  flex justify-start items-center" onMouseEnter={()=>setFillColor("#505050")} onMouseLeave={()=>setFillColor("#505050")}>
   <input type="number" placeholder="phone" className="absolute top-center pl-1  z-10 bg-transparent w-full  focus:outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.574" height="57.212" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin10 =()=>{
  const [fillcolor, setFillColor]=useState('#505050')
  return( <div className="relative w-full m-2 cursor-pointer  flex justify-start items-center" onMouseEnter={()=>setFillColor("#505050")} onMouseLeave={()=>setFillColor("#505050")}>
   <input type="number" placeholder="phone" className="absolute top-center pl-1  z-10 bg-transparent w-full  focus:outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="272.574" height="57.212" viewBox="0 0 272.574 57.212">
             <path id="Tracé_870" data-name="Tracé 870" d="M-20566.016-5282.286l-12.285,15.569v41.643h260.051l12.523-16.607v-40.6Z" 
             transform="translate(20578.301 5282.286)" fill={fillcolor}/>
           </svg>

  </div>)
}
export const BtnLogin7 =({btn})=>{
  const [fillcolor, setFillColor]=useState('#505050')
  return( <div className="relative w-1/2 m-2 cursor-pointer  flex justify-center items-center" onMouseEnter={()=>setFillColor("#505050")} onMouseLeave={()=>setFillColor("#505050")}>
   <div className="uppercase text-[11px] z-10 absolute flex items-center">{btn}</div>
   <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="" height="" viewBox="0 0 236.358 129.703">
  <defs>
    <filter id="Tracé_262" x="0" y="0" width="" height="" filterUnits="userSpaceOnUse">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="16" result="blur"/>
      <feFlood flood-color="#ca2026"/>
      <feComposite operator="in" in2="blur" />
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_262)">
    <path id="Tracé_262-2" data-name="Tracé 262" d="M7.409,0H136.135l-12.89,33.7H-4.223Z" transform="translate(52.22 48)" fill="#ca2026"/>
  </g>
</svg>


  </div>)
}





