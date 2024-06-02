
import Arrow from "../../assets/home/section1/icons/ARROW 48.png";
//import FaceBookIcon from "../../assets/home/section1/icons/Icon awesome-facebook-f.png";
//import InstagramIcon from "../../assets/home/section1/icons/Icon feather-instagram.png";
//import TwitterIcon from "../../assets/home/section1/icons/Icon awesome-twitter.png";
//import YoutubeBookIcon from "../../assets/home/section1/icons/Icon awesome-youtube.png";
import UserIcon from "../../assets/home/section1/icons/user.png";
import Iconsearch from "../../assets/home/section1/icons/Icon feather-search.png";
import { FacebookIcon , InstagramIcon,TwitterIcon} from "../commun/SocialMediaIcons";
import NavSmallScreen from "./navSmallScreen";
import BtnForm from './SVG/Tracé 35.svg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './nav.css';


const Navbar=()=>{
 const [fade, setFade]=useState(false) ;
 const [showMenue, setShowMenue]  =useState();
 const handelShowMenue=()=>{

  setShowMenue(!showMenue);
 }
 const [colorNavLine, setColorNavLine]=useState('#242424')
useEffect(()=>{
  setTimeout(() => {
    if(colorNavLine ==="#242424"){
      setColorNavLine("#CA2026")
    }
    else{
      setColorNavLine("#242424")
    }
   
  }, 1000);

 

},[colorNavLine])

    return(
 <div className="sticky top-[-1%] z-20 w-full ">
<div className="flex flex-col  max-sm:hidden  justify-center items-center bg-secondary text-[10px] z-10  relative w-full">
   
    <svg 
   
    id="Groupe_1089" data-name="Groupe 1089" xmlns="http://www.w3.org/2000/svg"
     width="100%" height="159.38" viewBox="0 0 1920 159.38" 
    className="absolute top-12  w-[100%] ">
    
  <path  id="Trace_20950" data-name="Tracé 20950" d="M1920,8V117.2l-214.05,10.18-8.61,4.9-47.64,27.1H275.2l-49.93-30.02-19.13-11.5L0,125.61V8Z" fill="#242424"/>
  <path id="Trace_20951" data-name="Tracé 20951" d="M1920,0V129.36H1704.62l-7.28,2.92-47.65,19.1H275.19l-46.88-22.02H0V0Z" 
   fill="#111"/>
   </svg>



{/*<LogoDesign/>*/}
<div className="absolute  top-0 z-[11] w-2/12 ">
    <div className="relative " >

<svg

   xmlns="http://www.w3.org/2000/svg" width="227.678" height="111.583" viewBox="0 0 227.678 111.583" className="w-full ">
  <g id="Groupe_1226" data-name="Groupe 1226" transform="translate(-846.272)">
    <path id="Tracé_27" data-name="Tracé 27" d="M2804.948,2690.5l39.382,111.583h152.606l35.69-111.583Z" transform="translate(-1958.676 -2690.498)" fill="#202020"/>
    <path id="Tracé_28" data-name="Tracé 28" d="M2817.746,2721.885l7.842,3.548,15.685,44.814-3.548,8.776Z" transform="translate(-1960.281 -2694.434)" fill="#ca2026"/>
    <path id="Tracé_29" data-name="Tracé 29" d="M2841.273,2721.885l-7.842,3.548-15.685,44.814,3.548,8.776Z" transform="translate(-1777.492 -2694.434)" fill="#ca2026"/>
  </g>
</svg>

  

<Link to="/">
<svg 

xmlns="http://www.w3.org/2000/svg" width="113.225" height="57.357" viewBox="0 0 113.225 57.357" className="absolute  top-1/4 left-1/5 cursor-pointer w-full max-lg:w-1/2 max-lg:left-1/4">
  <g id="Groupe_1" data-name="Groupe 1" transform="translate(0 0)">
    <g id="Groupe_1-2" data-name="Groupe 1" transform="translate(0)">
      <path id="Tracé_1" data-name="Tracé 1" d="M7241.093,2173.678l-9.592-9.592V2143.1l9.721-9.721H7343.9l-31.274,25.2h32.1l-20.56,15.094Z" transform="translate(-7231.5 -2133.383)" fill="#ca2026"/>
      <path id="Tracé_2" data-name="Tracé 2" d="M7321.981,2174.416l31.274-25.2h-97.192l-8.732,8.732v19.583l8.6,8.6h81.82l15.959-11.717Z" transform="translate(-7245.643 -2147.526)"/>
      <path id="Tracé_3" data-name="Tracé 3" d="M7314.678,2169h-40.063l-7.5,7.5v17.834l7.367,7.366h31.275l8.917-7.366v-11.487h-31.146l9.563,7.351h8.917v3.748h-23.391V2176.11h27.484Z" transform="translate(-7263.32 -2165.203)" fill="#fff"/>
      <path id="Tracé_4" data-name="Tracé 4" d="M7728.2,2169l-31.275,25.2H7728.2l-10.21,7.5h-43.745l30.992-25.523-31.495.019,8.58-7.192Z" transform="translate(-7626.568 -2165.203)" fill="#fff"/>
      <path id="Tracé_5" data-name="Tracé 5" d="M7676.312,2199.407" transform="translate(-7628.866 -2192.365)" fill="#fff"/>
    </g>
    <g id="Groupe_4" data-name="Groupe 4" transform="translate(0 49.41)">
      <g id="Groupe_2" data-name="Groupe 2" transform="translate(68.874 0.166)">
        <path id="Tracé_6" data-name="Tracé 6" d="M8199.818,2601.347h8.066v1.5h-8.056v1.521h8.3v1.6H8198c0-.03-.008-.057-.008-.083,0-1.675-.01-3.351.007-5.026a2.524,2.524,0,0,1,2.4-2.618,4.59,4.59,0,0,1,.485-.027q3.521,0,7.044,0h.193v1.613h-.19q-3.428,0-6.857,0a1.854,1.854,0,0,0-.464.053,1.06,1.06,0,0,0-.793,1.027C8199.81,2601.054,8199.818,2601.193,8199.818,2601.347Z" transform="translate(-8163.776 -2598.214)" fill="#fff"/>
        <path id="Tracé_7" data-name="Tracé 7" d="M7887.237,2606.068h-10.03a13.074,13.074,0,0,1,.077-1.428,1.872,1.872,0,0,1,.973-1.326c.621-.365,1.259-.7,1.9-1.035,1.421-.744,2.847-1.478,4.271-2.217a.294.294,0,0,0,.137-.127h-7.21v-1.614h9.9a5.141,5.141,0,0,1-.137,1.7,2.005,2.005,0,0,1-.888,1.041c-.693.4-1.4.773-2.106,1.144-1.357.711-2.719,1.412-4.078,2.117a.32.32,0,0,0-.142.126h7.336Z" transform="translate(-7877.207 -2598.304)" fill="#fff"/>
        <path id="Tracé_8" data-name="Tracé 8" d="M7982.37,2605.987c0-.055-.006-.088-.006-.121,0-1.67-.009-3.34.006-5.01a2.524,2.524,0,0,1,2.394-2.607c.172-.017.346-.028.52-.028q3.68,0,7.362,0h.208c0,.047.007.079.007.112,0,1.658,0,3.317,0,4.976a2.808,2.808,0,0,1-.384,1.442,2.471,2.471,0,0,1-1.937,1.2,6.544,6.544,0,0,1-.771.035q-3.59,0-7.179,0Zm8.671-6.137a.391.391,0,0,0-.066-.015c-1.855,0-3.71,0-5.564,0a1.179,1.179,0,0,0-.956.449,1.376,1.376,0,0,0-.27.882c0,1.025,0,2.051,0,3.076,0,.038,0,.075.008.127h.981c1.519,0,3.037,0,4.556,0a1.176,1.176,0,0,0,1.286-1.12,10.157,10.157,0,0,0,.025-1.158C7991.043,2601.35,7991.041,2600.6,7991.041,2599.85Z" transform="translate(-7971.146 -2598.214)" fill="#fff"/>
        <path id="Tracé_9" data-name="Tracé 9" d="M8100.157,2604.318v-6.141h1.816v7.755h-.183c-.56,0-1.122-.024-1.681.005a2.383,2.383,0,0,1-2.114-1.048q-1.792-2.341-3.589-4.678a.91.91,0,0,0-.737-.431v6.142h-1.815v-7.757h.178c.589,0,1.178.019,1.765,0a2.253,2.253,0,0,1,1.965.962q1.841,2.387,3.674,4.781A.9.9,0,0,0,8100.157,2604.318Z" transform="translate(-8068.96 -2598.159)" fill="#fff"/>
      </g>
      <g id="Groupe_3" data-name="Groupe 3" transform="translate(0 0)">
        <path id="Tracé_10" data-name="Tracé 10" d="M7466.582,2597.721v7.788h-2.154v-5.879a.6.6,0,0,0-.591.371q-.579,1.191-1.164,2.379c-.486,1-.974,1.99-1.456,2.987a.231.231,0,0,1-.245.158q-1-.011-2,0a.232.232,0,0,1-.245-.158q-1.292-2.661-2.591-5.319a.627.627,0,0,0-.611-.419v5.879h-2.154v-7.774a1.251,1.251,0,0,1,.134-.013c.793,0,1.587-.013,2.38,0a2.028,2.028,0,0,1,1.641.705,3.3,3.3,0,0,1,.371.6c.664,1.343,1.319,2.689,1.978,4.034.026.054.055.107.095.186.04-.076.07-.131.1-.187.658-1.345,1.333-2.682,1.968-4.038a2.137,2.137,0,0,1,2.095-1.308c.757,0,1.514,0,2.271,0Z" transform="translate(-7429.709 -2597.598)" fill="#fff"/>
        <path id="Tracé_11" data-name="Tracé 11" d="M7630.493,2605.519c-.924,0-1.839.029-2.752-.009a2.06,2.06,0,0,1-1.627-1.022q-1.505-2.206-3.009-4.412a.809.809,0,0,0-.649-.43v5.883H7620.3v-7.787h.385c.66,0,1.319.006,1.978,0a2.275,2.275,0,0,1,2.024,1.065q1.494,2.2,3,4.4a.829.829,0,0,0,.654.438v-5.888h2.151Z" transform="translate(-7578.831 -2597.619)" fill="#fff"/>
        <path id="Tracé_12" data-name="Tracé 12" d="M7737.549,2605.551h-10.194c0-.053-.01-.105-.01-.157,0-1.617,0-3.235,0-4.853a3.123,3.123,0,0,1,.229-1.214,2.459,2.459,0,0,1,2.086-1.533,5.969,5.969,0,0,1,.785-.039q3.433,0,6.866,0h.234v1.9h-.211q-3.313,0-6.628,0a1.715,1.715,0,0,0-.572.092.923.923,0,0,0-.619.91c-.021.987-.007,1.976-.007,2.976h5.885v-2.25h2.154Z" transform="translate(-7674.455 -2597.632)" fill="#fff"/>
        <path id="Tracé_13" data-name="Tracé 13" d="M7241.7,2597.754v1.9h-.218q-3.3,0-6.593,0a2.214,2.214,0,0,0-.4.034.93.93,0,0,0-.8.889c-.028.7-.021,1.4-.027,2.1,0,.315,0,.632,0,.956h5.877v-2.253h2.16v4.156h-10.2v-.2q0-2.316,0-4.633a3.628,3.628,0,0,1,.185-1.26,2.46,2.46,0,0,1,2.146-1.66,6.159,6.159,0,0,1,.8-.038q3.416,0,6.831,0Z" transform="translate(-7231.5 -2597.632)" fill="#fff"/>
        <path id="Tracé_14" data-name="Tracé 14" d="M7347.1,2604.521h-2.2c-.208-.5-.424-1.005-.624-1.514a.225.225,0,0,0-.254-.165q-2.8.006-5.6,0a.213.213,0,0,0-.239.157c-.184.47-.38.936-.581,1.4-.022.054-.091.125-.139.125-.7.008-1.391.006-2.1.006.018-.058.029-.1.047-.145q1.191-2.874,2.387-5.748a3.53,3.53,0,0,1,.876-1.354,2.65,2.65,0,0,1,1.533-.62,8.872,8.872,0,0,1,2.245.028,2.364,2.364,0,0,1,1.877,1.269c.347.689.64,1.405.94,2.117.6,1.413,1.178,2.831,1.766,4.247C7347.042,2604.385,7347.065,2604.446,7347.1,2604.521Zm-3.636-3.478c-.3-.693-.576-1.373-.882-2.04a.748.748,0,0,0-.667-.449c-.431-.019-.865-.036-1.3-.014a.937.937,0,0,0-.871.672c-.036.1-.081.19-.12.286-.21.511-.42,1.021-.636,1.546Z" transform="translate(-7324.269 -2596.606)" fill="#fff"/>
        <path id="Tracé_15" data-name="Tracé 15" d="M7590.818,2605.668h-2.14v-7.778h2.14Z" transform="translate(-7550.58 -2597.753)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>
</Link>
</div>
</div>


        {/**upper navbar */}
<div className="flex justify-between align-middle w-10/12   max-lg:w-full  p-4">
     <div>
        <div className="flex justify-between items-center " >
            <div className="flex justify-center items-center p-l-2">FOLLOW </div>
        

     <a href="/facebook.com">
    <div className="allIcon flex justify-center items-center mr-2 cursor-pointer relative ">
         <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
         </svg>
       <TwitterIcon/>
       
       </div></a>

     <a href="https://web.facebook.com/divatechdz/?_rdc=1&_rdr">
        <div className="allIcon flex  mr-2 cursor-pointer  relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
         </svg>
          <FacebookIcon/>
          </div>
        </a>
          <a href="https://www.instagram.com/divatech.dz/?hl=en">
    <div className="allIcon flex justify-center items-center mr-2 cursor-pointer relative ">
         <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
         </svg>
        <InstagramIcon/>
        </div></a>

{/*<a href="/facebook.com">
    <div className="allIcon flex justify-center items-center mr-2 cursor-pointer relative ">
         <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
         </svg>
        <img src={YoutubeBookIcon} alt="gaming zone twitter " className="mb-4 mt-3 mx-3   
    w-[12] h-[12px] z-10"/></div></a>*/}

      
        
        </div>  
        
        </div>
      
    <div className="flex justify-between align-middle text-center items-center" >
     <div className="flex justify-center items-center  px-4  mx-2 max-lg:mx-0 relative">
     <svg xmlns="http://www.w3.org/2000/svg" width="127.115" height="31.405" viewBox="0 0 127.115 31.405" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <path id="Tracé_35" data-name="Tracé 35" d="M2.538,0H117.927l-12.2,31.405H-9.188Z" transform="translate(9.188)" fill="#2d2d2d"/>
</svg>

      <div className="bg-primary h-10 flex flex-col justify-center items-center "></div>
             <div className="flex justify-center items-center z-10 relative"> 
       
             <svg xmlns="http://www.w3.org/2000/svg" width="36.295" height="23.271" viewBox="0 0 36.295 23.271" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <path id="Trace_37" data-name="Tracé 37" d="M8.891.854H36.432L27.867,24.125H.138Z" transform="translate(-0.138 -0.854)"/>
         </svg>
         <img src={BtnForm} alt="gaming zone register" width="3px" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "/>
       <Link to="/login" className="z-10"> <img src={UserIcon} alt="gaming zone user" className="z-10 cursor-pointer" /></Link> 
            </div>
           
 
   <p className="z-10 pl-5 max-lg:pl-2 hover:text-[#CA2026]"><Link to='/login'>REGISTER</Link> </p>
    </div>
           
           <p className="px-2">OR</p>
           <div className="flex justify-center items-center  px-4 mx-2 relative">
     <svg xmlns="http://www.w3.org/2000/svg" width="127.115" height="31.405" viewBox="0 0 127.115 31.405" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <path id="Trace_35" data-name="Tracé 35" d="M2.538,0H117.927l-12.2,31.405H-9.188Z" transform="translate(9.188)" fill="#2d2d2d"/>
</svg>

      <div className="bg-primary h-10 flex flex-col justify-center items-center "></div>
             <div className="flex justify-center items-center z-10 relative"> 
       
         <svg xmlns="http://www.w3.org/2000/svg" width="36.295" height="23.271" viewBox="0 0 36.295 23.271" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <path id="Trace_37" data-name="Tracé 37" d="M8.891.854H36.432L27.867,24.125H.138Z" transform="translate(-0.138 -0.854)"/>
         </svg>

         <Link to="/login" className="z-10"><img src={Arrow} alt="gaming zone user"  /></Link>
            </div>
           
 
   <p className="z-10 pl-5 hover:text-[#CA2026]"><Link to='/login'>SIGN IN</Link> </p>
    </div>
           
        </div> 
</div>

{/**lower navbar */}

<div className="flex justify-between items-center py-4 w-10/12 border-t-2 border-t-secondary z-10 ">

    {/**left menue */}
    <div className="flex justify-start items-center w-3/12 ">
        <Link to="/"  className="mx-2">HOME</Link>
        <Link to="/products" className="mx-2">PRODUCTS</Link>
        <Link to="/configurations" className="mx-2">CONFIGURATIONS</Link>
        <Link to="/store" className="mx-2">STORE</Link>
    
    
    </div>

<div className="w-1/12"></div>
   {/**right menue */}
<div className="flex justify-end items-center   w-4/12">
        <div className="flex justify-between items-center">
        <Link to="/partners"  className="mx-2">PARTNERS</Link>
        <Link to="/store"  className="mx-2 uppercase">PC builder</Link>
        <Link to="/blog"  className="mx-2">BLOG</Link>
        </div>
        
</div>
<div className="w-1/12  flex justify-end items-center">
            <img src={Iconsearch} alt="gaming zone search " className="mr-4"/>
</div>
</div>


</div>


<div className="hidden w-full bg-secondary relative justify-between items-center max-sm:flex">
<svg xmlns="http://www.w3.org/2000/svg" width="" height="200px" viewBox="0 0 920.014 132.066" className="absolute -z-10 w-full top-0">
  <path id="Tracé_19" data-name="Tracé 19" d="M1663,2801.574h195.49l16.951,19.205h496.9l19.857-19.205h190.817V2688.713H1663Z" transform="translate(-1663 -2688.713)" fill="#101010"/>
</svg>

<div className="flex ml-2">
<svg xmlns="http://www.w3.org/2000/svg" width="33.927" height="28.224" viewBox="0 0 33.927 28.224">
  <path id="Tracé_32" data-name="Tracé 32" d="M5.435,0H33.927l-5.7,28.224H0Z" fill="#2d2d2d"/>
  <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M8.45,7.688l.38-2.473H6.456V3.609A1.237,1.237,0,0,1,7.851,2.273H8.93V.167A13.158,13.158,0,0,0,7.014,0,3.02,3.02,0,0,0,3.782,3.329V5.214H1.609V7.688H3.782v5.979H6.456V7.688Z" transform="translate(11.386 7.787)" fill="#fff"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="33.927" height="28.224" viewBox="0 0 33.927 28.224">
  <g id="Groupe_1229" data-name="Groupe 1229" transform="translate(-63.123 -27.599)">
    <g id="Groupe_1227" data-name="Groupe 1227">
      <g id="Groupe_1228" data-name="Groupe 1228">
        <path id="Tracé_33" data-name="Tracé 33" d="M5.435,0H33.927l-5.7,28.224H0Z" transform="translate(63.123 27.599)" fill="#2d2d2d"/>
      </g>
    </g>
    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(74.604 36.061)">
      <path id="Tracé_24" data-name="Tracé 24" d="M6.079,3h6.159a3.079,3.079,0,0,1,3.079,3.079v6.159a3.079,3.079,0,0,1-3.079,3.079H6.079A3.079,3.079,0,0,1,3,12.238V6.079A3.079,3.079,0,0,1,6.079,3Z" transform="translate(-3 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Tracé_25" data-name="Tracé 25" d="M16.965,14.037a2.464,2.464,0,1,1-2.076-2.076,2.464,2.464,0,0,1,2.076,2.076Z" transform="translate(-8.343 -8.266)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Tracé_26" data-name="Tracé 26" d="M26.25,9.75h0" transform="translate(-16.704 -6.978)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </g>
</svg>
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="200.922" height="98.469" viewBox="0 0 200.922 98.469">
  <g id="Groupe_1226" data-name="Groupe 1226" transform="translate(-115)">
    <path id="Tracé_27" data-name="Tracé 27" d="M2804.948,2690.5l34.754,98.469h134.671l31.5-98.469Z" transform="translate(-2689.947 -2690.498)" fill="#202020"/>
    <path id="Tracé_28" data-name="Tracé 28" d="M2817.746,2721.885l6.92,3.131,13.842,39.547-3.131,7.745Z" transform="translate(-2694.328 -2697.66)" fill="#ca2026"/>
    <path id="Tracé_29" data-name="Tracé 29" d="M2838.508,2721.885l-6.92,3.131-13.6,40.246,3.629,8.673Z" transform="translate(-2530.021 -2697.66)" fill="#ca2026"/>
    <g id="Groupe_1" data-name="Groupe 1" transform="translate(166 24.942)">
      <g id="Groupe_1-2" data-name="Groupe 1" transform="translate(0)">
        <path id="Tracé_1" data-name="Tracé 1" d="M7239.965,2168.942l-8.465-8.464v-18.516l8.579-8.579h90.61l-27.6,22.239h28.327l-18.144,13.32Z" transform="translate(-7231.5 -2133.383)" fill="#ca2026"/>
        <path id="Tracé_2" data-name="Tracé 2" d="M7313.208,2171.454l27.6-22.239h-85.769l-7.707,7.706V2174.2l7.593,7.592h72.2l14.083-10.339Z" transform="translate(-7245.842 -2147.724)"/>
        <path id="Tracé_3" data-name="Tracé 3" d="M7309.089,2169h-35.354l-6.615,6.615v15.738l6.5,6.5h27.6l7.868-6.5v-10.136H7281.6l8.439,6.487h7.869v3.308h-20.642v-15.738h24.254Z" transform="translate(-7263.767 -2165.649)" fill="#fff"/>
        <path id="Tracé_4" data-name="Tracé 4" d="M7721.8,2169l-27.6,22.239h27.6l-9.01,6.615h-38.6l27.35-22.523-27.793.017,7.571-6.347Z" transform="translate(-7632.113 -2165.649)" fill="#fff"/>
        <path id="Tracé_5" data-name="Tracé 5" d="M7676.312,2199.407" transform="translate(-7634.442 -2193.192)" fill="#fff"/>
      </g>
      <g id="Groupe_4" data-name="Groupe 4" transform="translate(0 43.603)">
        <g id="Groupe_2" data-name="Groupe 2" transform="translate(60.78 0.146)">
          <path id="Tracé_6" data-name="Tracé 6" d="M8199.6,2600.98h7.118v1.327h-7.109v1.342h7.323v1.416H8198c0-.026-.006-.05-.006-.073,0-1.478-.008-2.957.006-4.435a2.226,2.226,0,0,1,2.116-2.31,4,4,0,0,1,.428-.024q3.108,0,6.217,0h.171v1.423h-.168q-3.025,0-6.051,0a1.664,1.664,0,0,0-.41.047.935.935,0,0,0-.7.906C8199.6,2600.721,8199.6,2600.844,8199.6,2600.98Z" transform="translate(-8167.799 -2598.214)" fill="#fff"/>
          <path id="Tracé_7" data-name="Tracé 7" d="M7886.059,2605.158h-8.852a11.37,11.37,0,0,1,.068-1.26,1.652,1.652,0,0,1,.858-1.17c.547-.322,1.11-.619,1.674-.913,1.255-.657,2.513-1.3,3.771-1.957a.259.259,0,0,0,.12-.112h-6.362v-1.424h8.735a4.54,4.54,0,0,1-.121,1.5,1.77,1.77,0,0,1-.783.919c-.611.352-1.234.682-1.858,1.009-1.2.627-2.4,1.246-3.6,1.868a.284.284,0,0,0-.125.111h6.474Z" transform="translate(-7877.208 -2598.306)" fill="#fff"/>
          <path id="Tracé_8" data-name="Tracé 8" d="M7982.369,2605.074c0-.048,0-.078,0-.106,0-1.474-.009-2.948,0-4.421a2.227,2.227,0,0,1,2.112-2.3c.152-.016.306-.025.458-.025q3.248,0,6.5,0h.185c0,.042,0,.069,0,.1,0,1.463,0,2.927,0,4.391a2.465,2.465,0,0,1-.339,1.273,2.179,2.179,0,0,1-1.709,1.059,5.645,5.645,0,0,1-.68.031q-3.168,0-6.336,0Zm7.652-5.416a.332.332,0,0,0-.06-.013c-1.638,0-3.273,0-4.91,0a1.038,1.038,0,0,0-.844.4,1.214,1.214,0,0,0-.237.779q0,1.357,0,2.714c0,.033,0,.066.007.112h.866c1.34,0,2.68,0,4.02,0a1.039,1.039,0,0,0,1.136-.988,9.367,9.367,0,0,0,.022-1.021C7990.023,2600.982,7990.021,2600.325,7990.021,2599.658Z" transform="translate(-7972.464 -2598.214)" fill="#fff"/>
          <path id="Tracé_9" data-name="Tracé 9" d="M8099.183,2603.594v-5.419h1.6v6.844h-.161c-.494,0-.99-.021-1.484,0a2.1,2.1,0,0,1-1.864-.924q-1.582-2.065-3.167-4.128a.807.807,0,0,0-.651-.381v5.42h-1.6v-6.845h.158c.519,0,1.039.017,1.557,0a1.987,1.987,0,0,1,1.734.849q1.626,2.106,3.243,4.219A.794.794,0,0,0,8099.183,2603.594Z" transform="translate(-8071.651 -2598.159)" fill="#fff"/>
        </g>
        <g id="Groupe_3" data-name="Groupe 3" transform="translate(0 0)">
          <path id="Tracé_10" data-name="Tracé 10" d="M7465.03,2597.72v6.873h-1.9v-5.188a.529.529,0,0,0-.522.328q-.51,1.051-1.026,2.1c-.429.878-.859,1.756-1.284,2.636a.2.2,0,0,1-.216.139q-.882-.01-1.763,0a.2.2,0,0,1-.216-.139q-1.14-2.349-2.287-4.694a.554.554,0,0,0-.539-.369v5.188h-1.9v-6.861a1.1,1.1,0,0,1,.119-.011c.7,0,1.4-.012,2.1,0a1.788,1.788,0,0,1,1.447.622,2.888,2.888,0,0,1,.327.534c.586,1.185,1.164,2.373,1.745,3.56.023.048.049.095.084.164.035-.067.062-.116.087-.166.58-1.187,1.177-2.367,1.736-3.563a1.886,1.886,0,0,1,1.849-1.155c.668,0,1.337,0,2,0Z" transform="translate(-7432.49 -2597.612)" fill="#fff"/>
          <path id="Tracé_11" data-name="Tracé 11" d="M7629.295,2604.6c-.814,0-1.623.025-2.429-.008a1.82,1.82,0,0,1-1.436-.9q-1.329-1.946-2.655-3.893a.716.716,0,0,0-.574-.379v5.191h-1.9v-6.872h.339c.583,0,1.165.006,1.746,0a2.005,2.005,0,0,1,1.786.94q1.32,1.943,2.646,3.88a.735.735,0,0,0,.577.387v-5.2h1.9Z" transform="translate(-7583.705 -2597.633)" fill="#fff"/>
          <path id="Tracé_12" data-name="Tracé 12" d="M7736.35,2604.635h-9c0-.047-.01-.093-.01-.139q0-2.14,0-4.282a2.776,2.776,0,0,1,.2-1.071,2.171,2.171,0,0,1,1.842-1.353,5.276,5.276,0,0,1,.693-.034q3.028,0,6.059,0h.206v1.68h-.187q-2.924,0-5.85,0a1.518,1.518,0,0,0-.5.082.815.815,0,0,0-.546.8c-.019.871-.007,1.744-.007,2.626h5.194v-1.986h1.9Z" transform="translate(-7680.67 -2597.646)" fill="#fff"/>
          <path id="Tracé_13" data-name="Tracé 13" d="M7240.505,2597.754v1.68h-.192q-2.908,0-5.817,0a1.938,1.938,0,0,0-.353.03.821.821,0,0,0-.71.785c-.024.618-.019,1.238-.023,1.857,0,.278,0,.557,0,.844h5.187v-1.989h1.906v3.667h-9v-.175q0-2.044,0-4.088a3.182,3.182,0,0,1,.163-1.112,2.169,2.169,0,0,1,1.894-1.465,5.423,5.423,0,0,1,.708-.034q3.015,0,6.027,0Z" transform="translate(-7231.5 -2597.646)" fill="#fff"/>
          <path id="Tracé_14" data-name="Tracé 14" d="M7345.716,2603.591h-1.946c-.183-.443-.373-.887-.55-1.336a.2.2,0,0,0-.225-.145q-2.473.005-4.944,0a.189.189,0,0,0-.212.139c-.162.415-.336.825-.513,1.235-.019.047-.08.11-.122.111-.613.007-1.228,0-1.857,0,.016-.051.025-.09.041-.127q1.05-2.536,2.106-5.072a3.137,3.137,0,0,1,.772-1.2,2.346,2.346,0,0,1,1.354-.547,7.825,7.825,0,0,1,1.981.025,2.085,2.085,0,0,1,1.656,1.12c.306.608.565,1.24.83,1.868.525,1.247,1.039,2.5,1.559,3.748C7345.668,2603.471,7345.688,2603.524,7345.716,2603.591Zm-3.209-3.069c-.263-.612-.508-1.212-.778-1.8a.662.662,0,0,0-.589-.4c-.381-.016-.764-.031-1.145-.012a.827.827,0,0,0-.769.593c-.032.085-.072.168-.106.252l-.561,1.364Z" transform="translate(-7325.572 -2596.606)" fill="#fff"/>
          <path id="Tracé_15" data-name="Tracé 15" d="M7590.567,2604.754h-1.888v-6.864h1.888Z" transform="translate(-7555.058 -2597.769)" fill="#fff"/>
        </g>
      </g>
    </g>
  </g>
</svg>


  <svg xmlns="http://www.w3.org/2000/svg" width="36.379" height="24.92" viewBox="0 0 36.379 24.92" className="mr-2" onClick={handelShowMenue}>
  <g id="Groupe_1117" data-name="Groupe 1117" transform="translate(1 1)">
    <g id="Icon_feather-menu" data-name="Icon feather-menu">
      <path id="Tracé_20783" data-name="Tracé 20783" d="M4.5,18H38.879" transform="translate(-4.5 -6.54)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <path id="Tracé_20784" data-name="Tracé 20784" d="M4.5,9H38.879" transform="translate(-4.5 -9)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      <path id="Tracé_20785" data-name="Tracé 20785" d="M4.5,27H38.879" transform="translate(-4.5 -4.08)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </g>
  </g>
</svg>

</div>

{showMenue && <NavSmallScreen/>}

    </div>)
}
export default Navbar;