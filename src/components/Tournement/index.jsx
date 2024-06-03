import Navbar from "../navbar";
import Footer from "../footer";
import HeaderPages from "../commun/HeaderPages";
import { UseTournementStore } from "../stores/TournementStore";
import BlogItem from "../commun/blogItem";
const Tournement=()=>{
    const {tournmentlist}=UseTournementStore((state)=>state);
    return(
<div className='flex flex-col justify-center items-center'>
        <Navbar/>

        
<div className='flex relative w-full flex-col justify-start items-start w-10/12s pb-20 bg-bgaffiliate bg-center bg-cover bg-no-repeat  '>
<div className='absolute top-0 w-full bg-[#CA2026] z-10 h-[100%] opacity-25'>

</div>
<HeaderPages title="become affiliate"/> 

<div className=' w-full flex flex-col justify-center items-center'>
             <h1 className='w-4/12 max-sm:w-full uppercase m-4 text-[28px] text-center flex justify-center items-center text-[#CA2026] font-semibold'>become a legend with 
<br/> our tournaments</h1>

            <p className=' w-4/12 max-sm:w-full flex justify-center items-center text-center w-5/12 m-4'> Are you a passionate PC gamer with a social media account, 
            Are you a passionate PC gamer with a social media account, Twitch.TV channel, YouTube channel, or have a new website with PC gaming related content? Want an easy way to earn some cash by partnering up with the best custom PC system builder in the world? Well, Gaming ZONE Affiliate program via Commission Junction (CJ) is the perfect choice for you!
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

<div className=" w-10/12 grid grid-cols-3 gape-0">
{tournmentlist.map((e)=><BlogItem title={e.title}  subtitle={e.subtitle} img={e.imageURL} date={e.date}/>)}
</div>
<Footer/>
</div>

    )
}
export default Tournement;