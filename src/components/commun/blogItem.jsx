import FaceBookIcon from "../../assets/home/section1/icons/Icon awesome-facebook-f.png";
import InstagramIcon from "../../assets/home/section1/icons/Icon feather-instagram.png";
import TwitterIcon from "../../assets/home/section1/icons/Icon awesome-twitter.png";
import { Link } from "react-router-dom";

const BlogItem=({img, date, title, subtitle, })=>{
    return(
    <div className="flex flex-col justify-center items-center w-full m-10 p-20">
      <Link to="/tournementpage/:id">
      <img src={img} className="w-full" alt='gaming zone blog'/>
      <div className="text-[#7E7E7E] text-[15px] w-full text-left">{date} /NEWS</div>
      <div className=" text-[25px] font-semibold mt-5 w-full text-left">{title}</div>
      <div className=" text-[15px] w-full mt-5 text-left">{subtitle}</div>

      <div className="flex justify-between w-full mt-5">
      <div className="text-[15px] text-[#CA2026]">Read more <span className="mx-2">&#62;</span></div>
      <div>
<div className="flex ">
      <a href="/facebook.com">
    <div className="allIcon flex justify-center items-center mr-2 cursor-pointer relative ">
         <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
         </svg>
        <img src={TwitterIcon} alt="gaming zone twitter " className="mb-4 mt-3 mx-3   
        w-[12] h-[12px] z-10"/></div></a>

     <a href="/facebook.com">
        <div className="allIcon flex  mr-2 cursor-pointer  relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
         </svg>
          <img src={FaceBookIcon} alt="gaming zone facebook  " className="mb-4 mt-3 mx-3 w-[12] h-[12px] z-10"/> </div> </a>
          <a href="/facebook.com">
    <div className="allIcon flex justify-center items-center mr-2 cursor-pointer relative ">
         <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
         </svg>
        <img src={InstagramIcon} alt="gaming zone twitter " className="mb-4 mt-3 mx-3   
        w-[12] h-[12px] z-10"/></div></a>

</div>


      </div>
      </div>
      </Link>
    </div>)
}
export default BlogItem;