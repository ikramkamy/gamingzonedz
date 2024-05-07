import SectionOne from "./sectionOne";
import Navbar from "../navbar";
import NouveauteSection from "./NouveauteSection";

const Home=()=>{
     //we call all components of the home page
    return(<div>
 <Navbar /> 
 <SectionOne/>
 <NouveauteSection/>

    </div>)
}
export default Home;