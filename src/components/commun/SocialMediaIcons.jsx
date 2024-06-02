import { useState } from "react"

export const TwitterIcon=()=>{
    const [fill, setFill]=useState('white')
return(

<svg 
onMouseEnter={()=>setFill("#CA2026")} onMouseLeave={()=>setFill("#FFFFFF")}
className="mb-4 mt-3 mx-3   
    w-[12] h-[12px] z-10"
xmlns="http://www.w3.org/2000/svg" width="13.838" height="11.239" viewBox="0 0 13.838 11.239">
  <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M12.415,6.182c.009.123.009.246.009.369a8.014,8.014,0,0,1-8.069,8.069A8.014,8.014,0,0,1,0,13.346a5.867,5.867,0,0,0,.685.035A5.68,5.68,0,0,0,4.206,12.17,2.841,2.841,0,0,1,1.554,10.2a3.576,3.576,0,0,0,.536.044,3,3,0,0,0,.746-.1A2.836,2.836,0,0,1,.562,7.367V7.332a2.856,2.856,0,0,0,1.282.36A2.84,2.84,0,0,1,.966,3.9,8.061,8.061,0,0,0,6.813,6.867a3.2,3.2,0,0,1-.07-.65,2.839,2.839,0,0,1,4.908-1.94,5.584,5.584,0,0,0,1.8-.685A2.828,2.828,0,0,1,12.2,5.154a5.685,5.685,0,0,0,1.633-.439,6.1,6.1,0,0,1-1.422,1.466Z" transform="translate(0 -3.381)" 
  fill={fill}/>
</svg>

)
}
export const FacebookIcon=()=>{
    const [fill, setFill]=useState('white')
return(

<svg 
className="mb-4 mt-3 mx-3   
w-[12] h-[12px] z-10"
onMouseEnter={()=>setFill("#CA2026")} onMouseLeave={()=>setFill("#FFFFFF")}
xmlns="http://www.w3.org/2000/svg" width="7.228" height="13.495" viewBox="0 0 7.228 13.495">
  <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M8.363,7.591l.375-2.442H6.395V3.564A1.221,1.221,0,0,1,7.772,2.244H8.837V.165A12.992,12.992,0,0,0,6.946,0,2.982,2.982,0,0,0,3.755,3.287V5.149H1.609V7.591H3.755v5.9h2.64v-5.9Z" transform="translate(-1.609)" fill={fill}/>
</svg>


)
}
export const InstagramIcon=()=>{
    const [fill, setFill]=useState('#2D2D2D')
return(

<svg 
className="mb-4 mt-3 mx-3   
w-[12] h-[12px] z-10"
onMouseEnter={()=>setFill("#CA2026")} onMouseLeave={()=>setFill("#2D2D2D")}
xmlns="http://www.w3.org/2000/svg" width="13.662" height="13.662" viewBox="0 0 13.662 13.662">
  <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-2.25 -2.25)">
    <path id="Tracé_24" data-name="Tracé 24" d="M6.041,3h6.081a3.041,3.041,0,0,1,3.041,3.041v6.081a3.041,3.041,0,0,1-3.041,3.041H6.041A3.041,3.041,0,0,1,3,12.122V6.041A3.041,3.041,0,0,1,6.041,3Z" fill={fill} stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    <path id="Tracé_25" data-name="Tracé 25" d="M16.9,14.011a2.432,2.432,0,1,1-2.049-2.049A2.432,2.432,0,0,1,16.9,14.011Z" transform="translate(-5.39 -5.313)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    <path id="Tracé_26" data-name="Tracé 26" d="M26.25,9.75h0" transform="translate(-13.824 -4.014)" fill={fill} stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
</svg>


)
}
export const UserIcon=()=>{
    const [fill, setFill]=useState('#2D2D2D')
return(
<svg 
className="mb-4 mt-3 mx-3   
w-[12] h-[12px] z-10"
onMouseEnter={()=>setFill("#CA2026")} onMouseLeave={()=>setFill("#2D2D2D")}
xmlns="http://www.w3.org/2000/svg" width="16.47" height="16.47" viewBox="0 0 16.47 16.47">
  <path id="user" d="M13.2,2.266A7.735,7.735,0,0,0,2.265,13.2,7.735,7.735,0,0,0,13.2,2.266ZM3.357,12.971A4.425,4.425,0,0,1,7.735,9.077a4.409,4.409,0,0,1,4.378,3.894,6.814,6.814,0,0,1-8.756,0ZM7.735,8.143a2.349,2.349,0,1,1,2.349-2.349A2.352,2.352,0,0,1,7.735,8.143ZM12.893,12.2A5.329,5.329,0,0,0,9.557,8.49a3.256,3.256,0,1,0-3.644,0A5.324,5.324,0,0,0,2.576,12.2a6.829,6.829,0,1,1,10.317,0Zm0,0" transform="translate(0.5 0.5)" fill="#fff" stroke="#707070" stroke-width="1"/>
</svg>


)
}