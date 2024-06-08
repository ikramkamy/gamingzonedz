import { useEcommerceStore } from "../stores/EcommerceStore";



const TotalPrice=({total, TotalPrice, dispatch, totalWithtaxes})=>{
    //const {total, totalWithtaxes, dispatch}=useEcommerceStore((state)=>state)
    return(
    
        <div className="flex flex-col justify-center items-center  W-1/2 mt-20 mb-20">
        <div className="relative flex justify-center items-center">
         <p className="absolute z-10 uppercase">total basket</p>
         <svg xmlns="http://www.w3.org/2000/svg"
          className="w-full hidden" 
          xlink="http://www.w3.org/1999/xlink"
           width="464" height="61" viewBox="0 0 464 61"><defs>
            <linearGradient id="a" x1=".068" y1=".644" x2="1" y2=".622"
             gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#2e2e2e"/>
             <stop offset="1" stop-color="#101010"/></linearGradient>
             <filter id="b" x="0" y="0" width="464" height="61" filterUnits="userSpaceOnUse">
                <feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity=".161"/><feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/></filter></defs>
                <g transform="matrix(1 0 0 1 0 0)" filter="url(#b)">
                    <path id="c" data-name="Tracé 20776" d="M20.81 0h410.4L446 93H0Z" 
                    transform="translate(9 6)" fill="url(#a)"/></g>
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" 
         
         xlink="http://www.w3.org/1999/xlink" width="720.466" height="61" viewBox="0 0 720.466 61">
  <defs>
    <linearGradient id="linear-gradient" x1="0.068" y1="0.644" x2="1" y2="0.622" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#2e2e2e"/>
      <stop offset="1" stop-color="#101010"/>
    </linearGradient>
    <filter id="Tracé_20776" x="0" y="0" width="720.466" height="61" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_20776)">
    <path id="Tracé_20776-2" data-name="Tracé 20776" d="M32.776,0h646.4l43.293,59H0Z" transform="translate(9 6)" fill="url(#linear-gradient)"/>
  </g>
</svg>


         </div> 
         <div className="bg-black box-shaddow w-full ">
         <div className="flex justify-between items-center ">
         <div className="flex flex-col w-1/2">
            <p className="uppsercase py-4  h-[10vh]  text-[#8E8E8E]  border-b-[1px] border-b-[#707070]">
                <div className="pl-4  ">sub-total</div>
                
                </p>
            <p className="text-[#8E8E8E] py-4  h-[10vh]  border-b-[1px] border-b-[#707070]">
                <div className="pl-4  flex  items-center">Dispatch</div></p>
            <p className=" text-[#8E8E8E]  py-4 h-[10vh]  border-b-[1px] border-b-[#707070]">
                <div className="pl-4 ">Total including VAT:<br/>(All Taxes included)</div></p>
         </div>
         {/*************line**************/}
         <div className="w-[1px] bg-[#707070] h-[40vh]">
                 
          </div>

          <div className="flex flex-col  w-1/2">
            <p className="uppsercase py-4 h-[10vh]   text-[#8E8E8E]  border-b-[1px] border-b-[#707070]">
                <div className="pl-4">{total}</div>
                
                </p>
            <p className="text-[#8E8E8E] py-4  h-[10vh]  border-b-[1px] border-b-[#707070]">
                <div className="pl-4  flex   items-center">{dispatch}</div></p>
            <p className=" text-[#8E8E8E]  py-4  h-[10vh] border-b-[1px] border-b-[#707070]">
                <div className="pl-4 ">{totalWithtaxes}</div></p>
         </div>
         </div>


         <div className="mt-20 relative flex justify-center items-center cursor-pointer my-10">
             <h1 className="uppercase text-[18px] absolute z-10">validate order</h1>
             <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="203.325" height="47.877" viewBox="0 0 203.325 47.877">
                         <defs>
                           <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                             <stop offset="0" stop-color="#ca2026"/>
                             <stop offset="1" stop-color="#651013"/>
                           </linearGradient>
                         </defs>
                         <path id="Tracé_20777" data-name="Tracé 20777" 
                         d="M12.628,0H199.1L180.429,47.877H-4.223Z" transform="translate(4.223)" 
                         fill="#CA2026"/>
            </svg>

         </div>
         </div>
     </div>
     )
}
export default TotalPrice;