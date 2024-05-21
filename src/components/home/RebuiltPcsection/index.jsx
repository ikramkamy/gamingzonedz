import { ButtonRebuiltPcSection , Button2RebuiltPcSection} from "../sectionOne/ComponentsSection1";
import { UseRebuiltComputersStore } from "../../stores/RebuiltComputers";
import { ReabuiltItem } from "./RebuiltItem";
const RebuitPc=()=>{
    const {OurRebuiltComputers}=UseRebuiltComputersStore((state)=>state)
    return(
<div className="flex flex-col justify-center items-center ">
<div className="uppercase text-[67px] max-sm:text-[28px] text-center w-full bg-bgRebuiltPc
 bg-no-repeat bg-cover bg-center p-20 ">rebuilt computers</div>
<div className="flex w-10/12 max-sm:w-11/12 justify-center items-center">
<ButtonRebuiltPcSection btnName="budget" />
<ButtonRebuiltPcSection btnName="performence"/>
<ButtonRebuiltPcSection  btnName="workstation"/>

</div>
<div className="flex flex-wrap  mt-[2%] max-sm:flex-col">
{ OurRebuiltComputers.map((e)=>

<ReabuiltItem index={OurRebuiltComputers.indexOf(e)} urlImage={e.urlImage} name={e.name} description={e.description}/>


)}
</div>  
<div className="mt-10 w-full flex justify-center ">
   <Button2RebuiltPcSection btnName="discover"/> 
   </div>
    </div>)
}
export default RebuitPc;