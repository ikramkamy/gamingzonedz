import HeaderPages from "../commun/HeaderPages";
import Navbar from "../navbar";
import Footer from "../footer";
import img from "../../assets/faq/Groupe de masques 112.svg"
const FAQ=()=>{
    return(<div className="relative flex flex-col  w-full h-screen ">
         <img src={img} alt="gaming zone partners" className="absolute  top-0 opacity-10  h-full w-full"/>
<Navbar/>
<HeaderPages title='FAQ'/>
<Footer/>
    </div>)
}
export default FAQ;