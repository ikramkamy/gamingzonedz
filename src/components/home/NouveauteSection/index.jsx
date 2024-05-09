
import image from '../../../assets/home/section1/nouveaute/mhw100_960x960.png' 
import CarouselItem from './CarouselItem.jsx';
import { UseProductsStore } from '../../stores/ProductsStore';
import { useEffect, useState,useRef } from 'react';

const NouveauteSection=()=>{
  const [filleye, setFilleye]=useState('none')
    const {NewProducts ,NewConfigs}=UseProductsStore((state)=>state);
    const [translateX, setTranslateX] = useState(0);
    
    const [isTranslating, setIsTranslating] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const divRef = useRef(null);
  
      const handleMouseDown = (event) => {
        setIsTranslating(true);
        setStartX(event.clientX);
        setCurrentX(translateX);
      };
    
      const handleMouseMove = (event) => {
        if (isTranslating) {
          const deltaX = event.clientX - startX;
          const newTranslateX = currentX + deltaX;
          setTranslateX(newTranslateX);
        }
      };
    
      const handleMouseUp = () => {
        setIsTranslating(false);
      };
    
      const handleMouseLeave = () => {
        setIsTranslating(false);
      };
    
      const handleClick = (event) => {

        if (event.clientX < divRef.current.clientWidth /2) {
         
         setTranslateX((prevTranslateX) =>  prevTranslateX-15 );
         console.log('client width', translateX)
         console.log('prevTranslateX', translateX)
         console.log('curent client width',divRef.current.clientWidth)
       
       
        } else {

          setTranslateX((prevTranslateX) => prevTranslateX-15);
        }
     };


//scrolling carousel functions
  
  

  

    
    
    return(
    <div className="flex flex-col justify-center items-center mt-[10%] ">


       <h1 className="uppercase text-[67px] font-semibold max-sm:text-[43px]">nouveauté</h1>  
       <div id="#subtitleOne" className="flex justify-center items-center mb-[10%]">
                <div id="#stylingVerticalSlach" className="w-1 h-4 bg-btnCarouselHover mr-2"></div>
                <h1 className="text-[21px] uppercase">the epic gaming store</h1>
             
                </div>

             
                 <div className='relative h-[80vh]  w-full  overflow-hidden' 
                 >
                 <div 
                 
                
                 
                 
                 
                 
                 
                 className={`flex justify-between items-center absolute `} >
                 <div  className='flex'  ref={divRef}
                 style={{ transform: `translateX(${translateX}px)` }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                   onMouseLeave={handleMouseLeave}
                  onClick={handleClick}>
                 {NewProducts.map((e)=><CarouselItem 
                 
              
                 
                 
                 
                 
                 
                 urlImage={e.urlImage} name={e.name} typeProduct={e.typeProduct} 
                 descreption={e.descreption} price={e.price} btn={e.btn}/>
                 
                 
                 
                 ) }
</div>
               </div>
                  
        </div>
    </div>)
}
export default NouveauteSection;