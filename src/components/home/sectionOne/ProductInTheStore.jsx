import { UseProductsStore } from "../../stores/ProductsStore";
import backG from "../../../assets/home/section1/btns/Tracé 51.png";
const ProductInTheStore=()=>{
    const {OurProductsTypes}=UseProductsStore((state)=>state)
console.log('images list',OurProductsTypes)
    const image = {
        getBanner(){
            return OurProductsTypes[1].urlImage;
            
        }
    }
    return(<div className="flex justify-center items-center w-full bg-primary py-10 px-20">
        <div className="flex justify-between items-center w-10/12">
      {OurProductsTypes.map((e)=>
        <div className="relative flex flex-col justify-start items-center h-fit  bg-productsTyps bg-center  bg-no-repeat bg-100% bg-bottom">
        <div className="h-45 ">
        
        <img src={e.urlImage} alt="gaming" className="  mb-30"/>
       <h1 className="uppercase font-semibold text-[26px] text-center ">{e.name}</h1>
        <div className="uppercase font-normal text-[18px] text-center bg-btnbg bg-no-repeat bg-center cursor-pointer mt-3">discover</div>
        </div>
        </div>
)}

</div>
</div>)
}
export default ProductInTheStore;