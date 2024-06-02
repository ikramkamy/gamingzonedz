import Navbar from "../navbar";
import Footer from "../footer";
import img from '../../assets/partners/ia-generative-homme-affaires.png';
import { UseBrandssStore } from "../stores/BrandsStore";
import PartnerItem from "./PartnerItem";
import HeaderPages from "../commun/HeaderPages";
const PartnersPage=()=>{
    const {partners}=UseBrandssStore((state)=>state)
    return(<div className="relative w-full flex flex-col justify-center items-center ">
                 <img src={img} alt="gaming zone partners" className="absolute top-0 opacity-10 h-full w-full"/>
                 <Navbar/>
                 <HeaderPages title="our partners"/>
                 <div className=" grid grid-cols-4 
                 gap-x-2 gap-y-0 max-xl:grid-cols-2 
                 max-sm:grid-cols-1 justify-start   mt-20 p-20">
{partners.map((e)=><PartnerItem logo={e.urlImage} phone={e.phone} name={e.name}  adress={e.adress}/>)}

</div>
                 <Footer/>
    </div>)
}
export default PartnersPage;