import { UseProductsStore } from "../../stores/ProductsStore";
import backG from "../../../assets/home/section1/"

const ProductInTheStore=()=>{
    const {OurProductsTypes}=UseProductsStore((state)=>state)
console.log('images list',OurProductsTypes)
    const image = {
        getBanner(){
            return OurProductsTypes[1].urlImage;
            
        }
    }
    return(<div className="h-screen flex w-10/12">
        
      
        
        <img src={image.getBanner()} alt="gaming"/>
        
        
        </div>)
}
export default ProductInTheStore;