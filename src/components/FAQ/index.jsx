import HeaderPages from "../commun/HeaderPages";
import Navbar from "../navbar";
import Footer from "../footer";
import img from "../../assets/faq/Groupe de masques 112.svg";
import {UseFaqStore} from '../stores/faqStore';
import ItemFaq from "./ItemFaq";
import { useState } from "react";
const FAQ=()=>{
    const {questionList}=UseFaqStore((state)=>state);
    const [show, setShow]=useState('hidden');
    return(
<div className="relative flex flex-col  w-full justify-center items-center">
<img src={img} alt="gaming zone partners" className="absolute  top-0 opacity-10  h-full w-full"/>
<Navbar/>
<HeaderPages title='FAQ'/>
<h1 className="uppercase text-[67px] w-full flex justify-center items-center my-10">have a question?</h1>
<div className="grid grid-cols-2 w-10/12 p-20  gap-0 place-content-center z-10" >


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
export default FAQ;