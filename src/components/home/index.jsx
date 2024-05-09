import SectionOne from "./sectionOne";
import Navbar from "../navbar";
import NouveauteSection from "./NouveauteSection";
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Section2 from "./section2";
const Home=()=>{
     //we call all components of the home page
    return(<div>
 <Navbar /> 
 <SectionOne/>
 <NouveauteSection/>
<Section2/>
    </div>)
}
export default Home;