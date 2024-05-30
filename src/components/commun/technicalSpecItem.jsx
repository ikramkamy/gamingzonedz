const TechnicalSpecItem=({name , icon ,  specifcation})=>{
    return(
    <div className="relative flex justify-center items-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="" height="" viewBox="0 0 431.346 83.104">
  <defs>
    <linearGradient id="linear-gradient" x1="0.915" y1="0.932" x2="0.219" y2="0.166" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#2e2e2e"/>
      <stop offset="1" stop-color="#101010"/>
    </linearGradient>
    <filter id="Rectangle_1402" x="0" y="0.111" width="382.755" height="82.64" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradient-2" x1="0.068" y1="0.644" x2="1" y2="0.622" href="#linear-gradient"/>
    <filter id="Tracé_20726" x="104.225" y="0" width="327.121" height="83.104" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Groupe_1227" data-name="Groupe 1227" transform="translate(-754.582 -3609.605)">
    <g transform="matrix(1, 0, 0, 1, 754.58, 3609.6)" filter="url(#Rectangle_1402)">
      <rect id="Rectangle_1402-2" data-name="Rectangle 1402" width="364.755" height="64.64" transform="translate(9 6.11)" fill="url(#linear-gradient)"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 754.58, 3609.6)" filter="url(#Tracé_20726)">
      <path id="Tracé_20726-2" data-name="Tracé 20726" d="M-14327.254-2218.023l-27.643,65.044h309.121v-65.1Z" transform="translate(14468.12 2224.08)" fill="url(#linear-gradient-2)"/>
    </g>
  </g>
    </svg>
   <div className="absolute flex justify-center items-center z-10 w-full">
    <div className="w-10/12 flex justify-between items-center" >
    <img src={icon} alt="gaming zone technical specifications"/>
   <div className=" items-center">
    <p className="text-[20px] font-bold">{name}</p>
    <p>{specifcation}</p>
    </div>
   </div>
   </div>

    </div>)
}
export default TechnicalSpecItem;