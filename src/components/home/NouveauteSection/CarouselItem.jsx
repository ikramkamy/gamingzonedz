
import image from '../../../assets/home/section1/nouveaute/mhw100_960x960.png' 

import { UseProductsStore } from '../../stores/ProductsStore.js';
import { useEffect, useState } from 'react';




const CarouselItem=({urlImage, name,typeProduct,descreption,price,btn})=>{

    const [filleye, setFilleye]=useState('none')
    const {NewProducts ,NewConfigs}=UseProductsStore((state)=>state);
    const [allnewProducts, setAllnewProducts]=useState()
    
    useEffect(()=>{
      NewProducts.forEach(item=>NewConfigs.push(item))
      console.log('newconfigs',NewConfigs)
    },[NewProducts])
    return(  <div id="#carouselitem" className='bg-carousItemNouveaute  flex flex-col items-center justify-center h-[60vh] w-[310px]  bg-no-repeat bg-cover bg-center relative'>
                     
    <div className='flex flex-col items-center 'onMouseEnter={()=>setFilleye('btnCarouselHover')} onMouseOut={()=>setFilleye('none')} >
    

       <div className='flex justify-between'>
         <img src={urlImage} alt="gaming zone new product "/>
         <svg xmlns="http://www.w3.org/2000/svg"
            width="37.883" height="38.997" viewBox="0 0 37.883 38.997" 
            className=' cursor-pointer' >
              <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="18.942" cy="19.499" rx="18.942" ry="19.499"/>
              <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(10.547 12.614)">
                <path id="Tracé_76" data-name="Tracé 76" d="M0,6.158S3.079,0,8.467,0s8.467,6.158,8.467,6.158-3.079,6.158-8.467,6.158S0,6.158,0,6.158Z" transform="translate(0 0)"
                 fill={filleye} stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path id="Tracé_77" data-name="Tracé 77" d="M4.619,2.309A2.309,2.309,0,1,1,2.309,0,2.309,2.309,0,0,1,4.619,2.309Z" 
                transform="translate(6.158 3.849)" fill={filleye} stroke="#fff" stroke-linecap="round" stroke-linejoin="round" 
                stroke-width="1.5"/>
              </g>
            </svg>
         </div> 
        
         <h2 className='text-[20px] font-semibold text-center'>{name}</h2>
         <h2 className='text-[10px] font-bold text-center text-redPrimary'>{typeProduct}</h2>
         <p className='w-[70%] text-[15px]'>{descreption}</p>
         <div className='text-[17px] font-bold text-center text-redPrimary'>{price}</div>
         
         
            
         </div>
         <div className="uppercase font-normal text-[15px] text-center bg-btnbg 
              bg-no-repeat bg-center bg-cover cursor-pointer mt-3 w-[147px] h-[35px] flex items-center justify-center
              mt-[10%]
              absolute
              bottom-[-2%]
              ">
             {btn}
         </div>
     
     
     </div>)
}
export default CarouselItem;