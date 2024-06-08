import SectionOne from "./sectionOne";
import Navbar from "../navbar";
import NouveauteSection from "./NouveauteSection";
import Section2 from "./section2";
import Section3 from "./section3";
import OurBrandsSection from "./OurBrands";
import { Gallery ,Carou3} from "../carou/Carou2";
import RebuitPc from "./PrebuiltPcsection";
import ActualiteSection from "./Actualite";
import Footer from "../footer";
const Home=()=>{
     //we call all components of the home page
    return(<div>
 <Navbar /> 
 <SectionOne/>
 <NouveauteSection/>
<Section2/>
<RebuitPc/>
<Section3/>
<OurBrandsSection/>


<ActualiteSection/>
<Footer/>
    </div>)
}
export default Home;