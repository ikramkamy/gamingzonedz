
import { UseProductsStore } from '../../stores/ProductsStore.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const CarouselItem=({urlImage, name,typeProduct,descreption,price,btn,category,id})=>{

    const [filleye, setFilleye]=useState('none')
    const [fillViewBtn, setFillViewBtn]=useState('#444444')
    const {NewProducts ,NewConfigs,ShowcategoryName}=UseProductsStore((state)=>state);
    const [allnewProducts, setAllnewProducts]=useState()
    
    useEffect(()=>{
      //NewProducts.forEach(item=>NewConfigs.push(item))
      const interval = setInterval(() => {
        if(filleye==="#CA2026"){setFilleye('#707070')}
        else{setFilleye('#CA2026')}
        
      }, 1000); 
  
      return () => clearInterval(interval);
},[filleye])
const handelBtnColor=()=>{
  switch (true){
    case (fillViewBtn==="#444444"):
      setFillViewBtn('#CA2026')
      break;
    case (fillViewBtn==="#CA2026"):
    setFillViewBtn('#444444')
    return
    default :
    setFillViewBtn("#444444")
    
  }
  
}
useEffect(()=>{
  ShowcategoryName && ShowcategoryName(category)
  console.log('ShowcategoryName(category)',ShowcategoryName(category))
},[])
    return(  <div id="#carouselitem" className='group  cursor-pointer bg-carousItemNouveaute
    hover:bg-bgNouveaute 
     flex flex-col items-center justify-center h-[60vh] w-[310px]  
     bg-no-repeat bg-cover bg-center relative '>
                     
    <div className='flex flex-col items-center' 
    onMouseEnter={()=>setFilleye('btnCarouselHover')} onMouseOut={()=>setFilleye('none')} >
    

       <div className='flex justify-between'>
         <img src={urlImage} alt="gaming zone new product " className='group-hover:animate-zoomEffect1 
         max-sm:w-[160px] max-sm:h-[160px]'/>
         <svg 
         className=" cursor-pointer group-hover:animate-ping "
         xmlns="http://www.w3.org/2000/svg"
            width="37.883" height="38.997" viewBox="0 0 37.883 38.997" 
           >
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
    <div className=" relative bg-no-repeat bg-center bg-cover cursor-pointer mt-3 w-[147px] h-[35px] flex items-center justify-center mt-[10%] absolute bottom-[-2%]" onMouseEnter={handelBtnColor} onMouseLeave={handelBtnColor}>
             <div className='uppercase font-normal text-[15px] text-center z-10 '>
             <Link to={`/viewproduct/${id}`} >{btn}</Link> 
              
              </div>
             <svg xmlns="http://www.w3.org/2000/svg" 
                    className='absolute' 
                    xlink="http://www.w3.org/1999/xlink" width="147.688" height="35.463" viewBox="0 0 147.688 35.463">
                    <defs>
                    <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#ca2026"/>
                      <stop offset="1" stop-color="#651013"/>
                    </linearGradient>
                    </defs>
                  <path  id="Tracé_86" data-name="Tracé 86" d="M8.017,0H143.465L129.9,35.463H-4.223Z" transform="translate(4.223)" fill={fillViewBtn}/>
                </svg>
             </div>
  

     
     </div>)
}
export default CarouselItem;