import Navbar from "../navbar";
import Footer from "../footer";
import img from '../../assets/contact/NoPath - Copy 19.svg';
import {BtnLogin, BtnLogin8, BtnLogin66, BtnLogin55 , BtnLogin5 ,BtnLogin9, BtnLogin7} from "../commun/BtnLogin";
import { UseBrandssStore } from "../stores/BrandsStore";
import ItemContact from "./ItemContect";
const ContactUs=()=>{
    const {services}=UseBrandssStore((state)=>state)
    return(<div className="relative w-full flex justify-center items-center flex-col">
          <img src={img} alt="gaming zone partners" className="absolute  top-0   h-full w-full opacity-10"/>
        <Navbar/>
<div className="mt-20 mb-20 w-10/12 flex flex-col justify-center items-center pt-20">
       


<div className="bg-bglogin bg-no-repeat bg-cover  flex p-20 mb-20   flex-col jutify-between ">
    <div className="flex  justify-center items-center">
          <div className="flex flex-col w-1/2">
<BtnLogin5/>
<BtnLogin9/>
          </div>
          <div className="flex flex-col mx-2 items-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="2" height="85.277" viewBox="0 0 2 85.277">
             <line id="Ligne_206" data-name="Ligne 206" y2="85.277" transform="translate(1)" fill="none" stroke="rgba(255,255,255,0.41)" stroke-width="2"/>
           </svg>


                 <svg xmlns="http://www.w3.org/2000/svg" width="2" height="85.277" viewBox="0 0 2 85.277">
               <line id="Ligne_206" data-name="Ligne 206" y2="85.277" transform="translate(1)" fill="none" stroke="rgba(255,255,255,0.41)" stroke-width="2"/>
             </svg>

          </div>
          <div className="flex flex-col w-1/2">

<BtnLogin55/>
<BtnLogin66/>

<div className="flex justify-between items-center w-[272px]">

</div>
          </div>
          
          
          
          
          
          
          </div>
          
          
<BtnLogin8/>
     <div>
  <div className="w-full justify-center items-center">
    <BtnLogin7 btn="send"/>
    </div>      
        
        </div>     
          </div>
        
         </div>
<div className="flex w-7/12 justify-between mb-20 mt-20">
{services.map((e)=><ItemContact img={e.urlImage} title={e.title} subtitle={e.subtitle} phone={e.phone} email={e.email}/>)}
</div>
         <Footer/>
    </div>)
}
export default ContactUs;