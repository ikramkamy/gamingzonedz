import Navbar from "../navbar";
import Footer from "../footer";
import img from "../../assets/login/Groupe 1048.png"
import {BtnLogin, BtnLogin2, BtnLogin3, BtnLogin4 , BtnLogin5,BtnLogin6,BtnLogin7} from "../commun/BtnLogin";
const Login=()=>{
    return(<div className="relative flex flex-col justify-center items-center w-full " >
         <Navbar/>

         <div className="mt-20 w-10/12 flex flex-col justify-center items-center pt-20">
         <img src={img} alt="gaming zone partners" className="absolute  top-0  h-full w-full"/>
  
  
         <div className="flex justify-between w-5/12  z-10">
     <BtnLogin btn="log in"/>
     <BtnLogin btn="register"/>
         </div>     
          <div className="bg-bglogin bg-no-repeat bg-cover flex p-10 mb-20 w-6/12 jutify-between">
<div className="flex flex-col w-1/2">
<BtnLogin2 btn="login with facebook"/>
<BtnLogin3  btn="login with facebook"/>
<BtnLogin4  btn="login with facebook"/>
</div>
<div className="flex flex-col mx-2 items-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="2" height="85.277" viewBox="0 0 2 85.277">
             <line id="Ligne_206" data-name="Ligne 206" y2="85.277" transform="translate(1)" fill="none" stroke="rgba(255,255,255,0.41)" stroke-width="2"/>
           </svg>

<p className="uppercase text-[28] m-2">or</p>
                 <svg xmlns="http://www.w3.org/2000/svg" width="2" height="85.277" viewBox="0 0 2 85.277">
               <line id="Ligne_206" data-name="Ligne 206" y2="85.277" transform="translate(1)" fill="none" stroke="rgba(255,255,255,0.41)" stroke-width="2"/>
             </svg>

</div>
<div className="flex flex-col w-1/2">

<BtnLogin5/>
<BtnLogin6/>
<div className="flex w-[272px] justify-end items-center">
<div className="flex w-fit justify-between">
        <input type="checkbox" className="mr-4 bg-transparent "  />
        <label className="text-[11px] w-full uppercase ">remember me</label>
</div>
<BtnLogin7 btn='login'/>
</div>
<div className="flex justify-between items-center w-[272px]">
<p  className="uppercase text-[10px]">forgot password ?</p>/<p className="uppercase text-[10px]"> don't have and account?</p>
</div>
</div>
          </div>
   
   
   </div><Footer/>
</div>)
}
export default Login;