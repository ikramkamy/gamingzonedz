import { useEffect } from "react";
import icon1 from "../../assets/predesignedpc/icons/Ellipse 130.svg";
import icon2 from "../../assets/predesignedpc/icons/Ellipse 131.svg";
import icon3 from "../../assets/predesignedpc/icons/Ellipse 132.svg";
import icon4 from "../../assets/predesignedpc/icons/guarantee-certificate.svg" 
const ShowProduct=({name, description, tag, imgUrl,styleFlex})=>{
    useEffect(()=>{
        
    })
    return(
<div className={`flex justify-center items-center w-10/12 mb-20 max-sm:flex-col ${styleFlex}`}>
                           
    <div className="flex  w-1/2 justify-center items-center max-sm:w-full">
        <div className="w-10/12 flex flex-col justify-center items-center max-sm:w-full">
         <div className="text-[47px] mb-10 w-full  flex text-left max-sm:text-center">{name}</div>
         <div className="text-[15px] mb-10  w-full text-left max-sm:text-center">{description}</div>
         <div className="text-[11px] mt-10  w-full text-left max-sm:text-center">{tag}</div>
         
         
         <div className="w-full flex justify-start items-center ">
         <div className="flex mt-2 w-8/12  justify-between items-center max-sm:w-full max">
                      <img src={icon4} alt="product" className=""/>
                      <p className="uppercase text-[18px]">garantie 18 mois</p>
                      <img src={icon1} alt="product" className="mx-2 cursor-pointer " />
                      <img src={icon2} alt="product" className="mx-2 cursor-pointer "/>
                      <img src={icon3} alt="product" className="mx-2 cursor-pointer "/>
    
         </div>
         </div>
        </div>
        
        </div>

    <div>
       
</div>

<div className="w-1/2 flex justify-center max-sm:w-full">
        <img  src={imgUrl} alt="gaming zone product"/>
</div>

</div>)
}
export default ShowProduct;