
import Arrow from "../../assets/home/section1/icons/ARROW 48.png";
import FaceBookIcon from "../../assets/home/section1/icons/Icon awesome-facebook-f.png";
import InstagramIcon from "../../assets/home/section1/icons/Icon feather-instagram.png";
import TwitterIcon from "../../assets/home/section1/icons/Icon awesome-twitter.png";
import YoutubeBookIcon from "../../assets/home/section1/icons/Icon awesome-youtube.png";
import UserIcon from "../../assets/home/section1/icons/user.png";
import Iconsearch from "../../assets/home/section1/icons/Icon feather-search.png";

import { IconBgleft, IconBgRight,IconBgRightLogin,IconBgleftLogin,
    IconBgleftSmall,IconBgRightsmall ,LogoDesign, NavBgRight ,NavBgleft} from "./IconsBg";


const Navbar=()=>{
    
    return(
    
<div className="flex flex-col  justify-center items-center bg-secondary text-[10px] z-10 ">
{/*<svg 
className="absolute top-0 "
xmlns="http://www.w3.org/2000/svg" width="100%"
 height="151.382" viewBox="0 0 2544.896 151.382">
  <path id="Tracé_19" data-name="Tracé 19" 
  d="M1663,2818.081h540.754l46.888,22.015h1374.5l54.926-22.015H4207.9V2688.713H1663Z" 
  transform="translate(-1663 -2688.713)" fill="btnCarousel"/>
</svg>
<svg 
className="absolute top-10 "
xmlns="http://www.w3.org/2000/svg" width="100%"
 height="151.382" viewBox="0 0 2544.896 151.382">
  <path id="Tracé_19" data-name="Tracé 19" 
  d="M1663,2818.081h540.754l46.888,22.015h1374.5l54.926-22.015H4207.9V2688.713H1663Z" 
  transform="translate(-1663 -2688.713)" fill="#101010"/>
    </svg>*/}

        {/**upper navbar */}
<div className="flex justify-between align-middle bor w-11/12 border-b-secondary border-b-2 p-4">
     <div>
        <div className="flex justify-between items-center " >
            <div className="flex justify-center items-center p-l-2">FOLLOW </div>
        

     <a href="/facebook.com"><div className="allIcon flex  mr-2 cursor-pointer"><IconBgleft /><div className="bg-primary flex justify-center align-middle  "> <img src={TwitterIcon} alt="gaming zone twitter " className="mb-4 mt-3 mx-3   w-[12] h-[12px]"/> </div><IconBgRight /></div> </a>
     <a href="/facebook.com"><div className="allIcon flex  mr-2 cursor-pointer"><IconBgleft />  <div className="bg-primary flex justify-center align-middle">  <img src={FaceBookIcon} alt="gaming zone facebook  " className="mb-4 mt-3 mx-3 w-[12] h-[12px]"/> </div> <IconBgRight /> </div> </a>
     <a href="/facebook.com"><div className="allIcon flex  mr-2 cursor-pointer"> <IconBgleft /> <div className="bg-primary flex justify-center align-middle">  <img src={InstagramIcon} alt="gaming zone instagram  " className="mb-4 mt-3 mx-3 w-[12] h-[12px]"/> </div><IconBgRight /></div> </a>    
     <a href="/facebook.com"><div className="allIcon flex  mr-2 cursor-pointer"> <IconBgleft /> <div className="bg-primary flex justify-center align-middle">  <img src={YoutubeBookIcon} alt="gaming zone youtube  " className="mb-4 mt-3 mx-3 w-[12] h-[12px]"/> </div><IconBgRight /> </div> </a>
      
        
        </div>  
        
        </div>
      
    <div className="flex justify-between align-middle text-center items-center" >
     <div className="flex justify-center items-center bg-primary px-4 mx-2">
    <IconBgleftLogin/>
      <div className="bg-primary h-10 flex flex-col justify-center items-center "></div>
             <div className="flex justify-center items-center "> 
                <IconBgleftSmall/> <img src={UserIcon} alt="gaming zone user" /><IconBgRightsmall/>
            </div>
           
    <IconBgRightLogin/>
    REGISTER 
    </div>
           
           OR
     <div className="flex justify-center items-center bg-primary px-4 mx-2"><IconBgleftLogin/>
     <div className="bg-primary h-10 flex flex-col justify-center items-center "></div> 
     <div className="flex justify-center items-center bg-black">
              <IconBgleftSmall/><img src={Arrow} alt="gaming zone login"/><IconBgRightsmall/>
     
     </div>
     <IconBgRightLogin/>SIGNIN</div> 
        </div> 
</div>

{/**lower navbar */}

<div className="flex w-11/12 justify-center items-center">
</div>
<div className="flex justify-between items-center py-4 w-11/12 border-b-4 border-b-secondary">

    {/**left menue */}
    <div className="flex justify-start items-center w-4/12 ">
        <a href="/"   className="mx-2">HOME</a>
        <a href="/"  className="mx-2">PRODUCTS</a>
        <a href="/"  className="mx-2">CONFIGURATIONS</a>
        <a href="/"  className="mx-2">STORE</a>
    
    
    </div>

<div className="w-2/12"></div>
   {/**right menue */}
<div className="flex justify-end items-center   w-4/12">
        <div className="flex justify-between items-center">
        <a href="/"   className="mx-2">PARTNERS</a>
        <a href="/"   className="mx-2">STORE</a>
        <a href="/"   className="mx-2">BLOG</a>
        </div>
        
</div>
<div className="w-1/12  flex justify-end items-center">
            <img src={Iconsearch} alt="gaming zone search " className="mr-4"/>
</div>
</div>



{/*<LogoDesign/>*/}
    </div>)
}
export default Navbar;