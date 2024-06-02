import RangeSlider from "./Slider";
import { UseProductsStore } from "../../components/stores/ProductsStore";
import { useEffect, useState } from "react";
const FiltersProducts=({filtersActive})=>{

const {setFiltersofEachCategory}=UseProductsStore((state)=>state)
const [list, setList]=useState([])
const getThefilterdetails=(e,p)=>{
console.log("le filtre selectioné", e)
console.log("le filtre selectioné", p)
var array=[];
var elem={
   [e]:p
}
// Find the index of the element in the array
const index = list.findIndex(el => JSON.stringify(el) === JSON.stringify(elem));

// If the element is not in the array, add it
if (index === -1) {
   array.push(elem);
  setList([...list, elem]);
  setFiltersofEachCategory(list)
  
  
} else {
  // If the element is in the array, remove it
  setList(list.splice(index, 1));
  setFiltersofEachCategory(list)
}


}

    return(
 
 
   <div>
   {filtersActive.filtersList?.map((filter)=> 
   <div className="w-full flex-col pb-4 border-b-2 border-b-secondary">
   <h1 className="uppercase text-[18px] mb-4">{filter.filterName}</h1>
  {filter.filtersItems.map((item)=>
  <div className="flex justify-between">
             <input type="checkbox" className="mr-4" 
             //value={item.FilterIsActive}
              checked={item.FilterIsActive}  onChange={()=>getThefilterdetails(filter.filterName,item)}/>
             <label className="text-[14px] w-full">{item}</label>
   </div>) }
  
        </div>)}
      
             {/****Filter by Price*****/}
                           <div className="flex flex-col mt-2">
                            <h1 className="uppercase tex-[28px] mt-2">filter by price</h1>
                             {/*<RangeSlider/>*/}
                           </div>

                  
                  
                   </div>
   )
}
export default FiltersProducts;