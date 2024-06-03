import {  BtnLogin, BtnLogin5, BtnLogin9, BtnLogin55, BtnLogin66, BtnLogin7 } from "../commun/BtnLogin";


const SubscriptionForm=()=>{
    return(
<div className="z-10 flex flex-col px-52 max-sm:px-0 py-20 max-sm:py-20 max-sm:bg-cover  bg-bglogin bg-center bg-no-repeat bg-contain mt-20">
<div className="flex max-sm:flex-col justify-center items-center">
          <div className="flex flex-col w-1/2 max-sm:w-full">
           <BtnLogin5/>
           <BtnLogin9/>
           <BtnLogin9/>
           <BtnLogin9/>
          </div>

          <div className="flex flex-col mx-2 items-center max-sm:hidden">
           <svg xmlns="http://www.w3.org/2000/svg" width="2" height="85.277" viewBox="0 0 2 85.277">
             <line id="Ligne_206" data-name="Ligne 206" y2="85.277" transform="translate(1)" fill="none" stroke="rgba(255,255,255,0.41)" stroke-width="2"/>
           </svg>


                 <svg xmlns="http://www.w3.org/2000/svg" width="2" height="85.277" viewBox="0 0 2 85.277">
               <line id="Ligne_206" data-name="Ligne 206" y2="85.277" transform="translate(1)" fill="none" stroke="rgba(255,255,255,0.41)" stroke-width="2"/>
             </svg>

          </div>
          <div className="flex flex-col w-1/2 max-sm:w-full">

          <BtnLogin55/>
          <BtnLogin66/>
          <BtnLogin66/>
          <BtnLogin66/>
          </div>
          

    
    </div>
          
    <BtnLogin btn="join us"/>
      
    
       
    </div>

    )
}
export default SubscriptionForm; 