import { useState } from "react";

const ItemFaq=({question,answer,handelshow})=>{
    const [show, setShow]=useState(false);
    return(<div className="flex  flex-col justify-center items-center m-2 max-sm:m-0 max-sm:mb-5 max-sm:w-full ">
       
       <div className="flex relative justify-center flex-col items-center flex-col w-full max-sm:w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 516.486 67.193" className="p-0">
                   <path id="Tracé_900" data-name="Tracé 900" d="M-20672.76-5282.71l-17.535,17.945v47.245l496.518-1.548,17.969-18.369v-44.913Z" 
                   transform="translate(20691.295 5283.71)" fill="none" stroke="#fff" stroke-width="2"/>
                 </svg>

        <div className="w-full pl-2 flex justify-between items-center absolute top-center left-center">
        <h1 className=" max-sm:text-[11px]"> {question}</h1>
        <div className="font-bold mx-2 text-[18px] cursor-pointer " onClick={()=>setShow(!show)}>+</div>
        </div> 
      
        
        </div>
        {show &&<p className="w-1/2 max-sm:text-[11px]">{answer}</p>}
    </div>)
}
export default ItemFaq;