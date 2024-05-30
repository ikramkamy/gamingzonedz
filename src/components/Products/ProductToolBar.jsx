
import { ToolProductBarBtn } from "../commun/CommunBtn";

const ProductToolBar=()=>{
    return(
<div className="flex justify-center items-center w-full bg-black mt-20">
<div className="flex justify-center items-center w-10/12 ">
<ToolProductBarBtn btn="overview"/>
<ToolProductBarBtn btn="specifications"/>
<ToolProductBarBtn btn="related products"/>
<ToolProductBarBtn btn="sell points"/>
<ToolProductBarBtn btn="other"/>
</div>
    </div>)
}
export default ProductToolBar;