import Footer from '../footer'
import Navbar from '../navbar';
import HeaderPages from '../commun/HeaderPages';
import img from '../../assets/affiliate/affilite.avif';
import img2 from '../../assets/affiliate/back.jpg';
import { useState } from 'react';
import SubscriptionForm from './SuscriptionForm';
import {UseFaqStore} from '../stores/faqStore';
import ItemFaq from "../FAQ/ItemFaq";

const Affiliate=()=>{
  const {questionList}=UseFaqStore((state)=>state);
  const [show, setShow]=useState('hidden');
    return(
    
    <div className='flex flex-col justify-center items-center'>
<Navbar/>

            
<div className='flex relative w-full flex-col justify-start items-start w-10/12s pb-20 bg-bgaffiliate bg-center bg-cover bg-no-repeat  '>
<div className='absolute top-0 w-full bg-[#CA2026] z-10 h-[100%] opacity-25'>
    
</div>
<HeaderPages title="become affiliate"/> 

<div className=' w-full flex flex-col justify-center items-center'>
                 <h1 className='w-4/12 max-sm:w-full uppercase m-4 text-[28px] text-center flex justify-center items-center text-[#CA2026] font-semibold'>become an official<br/> gaming zone affiliate today !</h1>

                <p className=' w-4/12 max-sm:w-full flex justify-center items-center text-center w-5/12 m-4'> Are you a passionate PC gamer with a social media account, 
                Twitch.TV channel, YouTube channel, or have a new website with 
                PC gaming related content? Want an easy way to earn some cash by 
                partnering up with the best custom PC system builder in the world? Well, 
                Gaming ZONE Affiliate program via Commission Junction (CJ) is the perfect choice for you!

                </p>
                <div className='relative m-4 cursor-pointer'>
                 <div className='uppercase absolute z-10 top-1/4 left-1/4'>Signup now</div>
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="207.29" height="45.136" viewBox="0 0 207.29 45.136">
  <defs>
    <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#ca2026"/>
      <stop offset="1" stop-color="#651013"/>
    </linearGradient>
  </defs>
  <path id="Tracé_105" data-name="Tracé 105" d="M12.956,0h190.11L184.03,45.136H-4.223Z" transform="translate(4.223)" fill="url(#linear-gradient)"/>
                 </svg>

</div>
  </div>

</div>
<div className='flex max-sm:flex-col-reverse  w-4/12 max-sm:w-full justify-between items-center pt-20'>
    <div className='flex flex-col justify-center items-center w-1/2 max-sm:w-full max-sm:px-4 '>
        <h1 className='uppercase text-[28px] text-[#CA2026] font-semibold mb-4'>earn</h1>
        <p className='mb-4 '>
        With your unique URL link provided by Commission Junction, you can easily track and earn commission on any Gaming Zone PC system or Gearshop order referred by your channel or website! All commissions are determined by Gaming Zone and will be offered to you once you complete the signup process to join as a CJ Publisher.
        </p>
        <div className='flex relative justify-center items-center '>
            <p className='uppercase absolute top-1/4'>commission policy</p>
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="207.29" height="45.136" viewBox="0 0 207.29 45.136">
                <defs>
                  <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#ca2026"/>
                    <stop offset="1" stop-color="#651013"/>
                  </linearGradient>
                 </defs>
                <path id="Tracé_20727" data-name="Tracé 20727" d="M12.956,0h190.11L184.03,45.136H-4.223Z" transform="translate(4.223)" fill="url(#linear-gradient)"/>
        </svg>

        </div>
    </div>
    <div className='w-1/2 flex justify-center items-center'>
        <img src={img} alt="gaming zone affiliate" className=' shadow-xl shadow-redPrimary '/>
    </div>
</div>
<SubscriptionForm/>
<h1 className="uppercase text-[28px] text-[#CA2026] my-20 w-full text-center">Frequently asked questions</h1>
<div className="grid grid-cols-2  max-sm:grid-cols-1 w-10/12 max-sm:w-full p-20 max-sm:px-2
    gap-0 place-content-center z-10" >
            {questionList.map((e)=> {
                
                const handelshow=()=>{
                    setShow(!show)
                }
                                return(
                <ItemFaq  question={e.question} answer={e.answer} show={show} handelshow={handelshow}/>)
    
    })}
</div>
            <Footer/>
    </div>)
}
export default Affiliate;