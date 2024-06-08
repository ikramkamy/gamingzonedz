//import image from '../../../assets/home/actualite/Rectangle 35.png'
import image2 from '../../../assets/home/actualite/Groupe 1227.png'
import {Link} from 'react-router-dom';
export const ActualiteCardItem=(props)=>{
    const {image, title, subtitle, bloglink}=props
    return(



<div className=' flex justify-center items-center w-fit 
relative bg-bgActualiteItem bg-no-repeat bg-cover p-2 max-sm:p-5'>



<div className='w-full z-10  flex flex-col  '>


        <img src={image} alt="gaming zone events news" 
        className='px-2 pt-2 mb-2 w-2/3 max-sm:w-full max-md:w-3/4 shadow-lg shadow-lightGrey' />
        <h1 className='px-2 w-10/12  text-[20px] max-lg:text-[18px] max-sm:text-[15px] max-sm:w-full max-sm:text-center uppercase text-black font-semibold '>{title}</h1>
        <h2  className='px-2 w-10/12 text-[11px] max-lg:text-[13px] max-sm:text-[10px]  max-sm:w-full max-sm:text-center'>
            {subtitle.split(' ').slice(0, 6).join(' ')}<br/>
            {subtitle.split(' ').slice(7, 13).join(' ')}<br/>
            {subtitle.split(' ').slice(14, 20).join(' ')}<br/>
            {subtitle.split(' ').slice(21, 27).join(' ')}<br/>
            {subtitle.split(' ').slice(33, 39).join(' ')}<br/>
            {subtitle.split(' ').slice(40, 46).join(' ')}<br/>
        
        </h2>
        
        <div className='relative flex justify-center items-center  
        cursor-pointer m-2  p-2 max-sm:p-2 w-fit max-sm:w-full bg-redPrimary' >
        <h1 className='  z-10 
         text-center uppercase text-[18px] max-lg:text-[13px] max-sm:text-[10px] font-regular  '>read more</h1>

       <svg 
       className='absolute hidden w-full'
       
       xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
        width="" height="" viewBox="0 0 200.723 43.707">
   <path id="Tracé_237" data-name="Tracé 237" d="M12.412,0H196.5L178.067,43.706H-4.223Z" transform="translate(4.223)" fill="url(#linear-gradient)"/>
    </svg>





        </div>
</div>
    </div>)
}