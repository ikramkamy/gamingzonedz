//import image from '../../../assets/home/actualite/Rectangle 35.png'
import image2 from '../../../assets/home/actualite/Groupe 1227.png'
import {Link} from 'react-router-dom';
export const ActualiteCardItem=(props)=>{
    const {image, title, subtitle, bloglink}=props
    return(



<div className=' flex justify-center items-center w-fit 
relative bg-bgActualiteItem bg-no-repeat bg-cover p-10'>



<div className='w-full z-10  flex flex-col  '>


        <img src={image} alt="gaming zone events news" className='mb-2 w-[80%] max-md:w-3/4'/>
        <h1 className='text-[23px] uppercase text-black font-semibold w-fit'>{title}</h1>
        <h2  className='text-[18px] w-fit '>
            {subtitle.split(' ').slice(0, 6).join(' ')}<br/>
            {subtitle.split(' ').slice(7, 13).join(' ')}<br/>
            {subtitle.split(' ').slice(14, 20).join(' ')}<br/>
            {subtitle.split(' ').slice(21, 27).join(' ')}<br/>
            {subtitle.split(' ').slice(33, 39).join(' ')}<br/>
            {subtitle.split(' ').slice(40, 46).join(' ')}<br/>
        
        </h2>
        
        <div className='relative flex justify-center items-center  
        cursor-pointer m-4  p-10 w-fit ' >
        <h1 className='  z-10
         text-center uppercase text-[18px] font-regular hover:font-bold'>read more</h1>
       
         {/**200.723  43.707*/}
       <svg 
       className='absolute w-full'
       
       xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
        width="" height="" viewBox="0 0 200.723 43.707">
                   <defs>
                     <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                       <stop offset="0" stop-color="#ca2026"/>
                       <stop offset="1" stop-color="#651013"/>
                     </linearGradient>
                   </defs>
                   <path id="Tracé_237" data-name="Tracé 237" d="M12.412,0H196.5L178.067,43.706H-4.223Z" transform="translate(4.223)" fill="url(#linear-gradient)"/>
    </svg>





        </div>
</div>
    </div>)
}