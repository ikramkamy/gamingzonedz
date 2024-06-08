import { Carou3 } from "../../carou/Carou2";
import { CarouselBrands } from "../../commun/CarosuselFlikingForBrands";
const OurBrandsSection=()=>{
    return(
<div className=" mt-10  bg-bgRebuiltPc bg-no-repeat bg-cover bg-center p-20 max-sm:p-1 mb-10">
 <div className="uppercase text-[67px] max-sm:text-[38px] text-center w-full   mb-10">our Brands </div>
<Carou3/>
<CarouselBrands/>
</div>)
}
export default OurBrandsSection;