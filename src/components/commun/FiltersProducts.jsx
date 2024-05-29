import RangeSlider from "./Slider";

const FiltersProducts=({filtersActive})=>{
       console.log('les filtres actives', filtersActive)
    return(
 
 
   <div>
   {filtersActive.filtersList?.map((filter)=> 
   <div className="w-full flex-col pb-4 border-b-2 border-b-secondary">
   <h1 className="uppercase text-[18px] mb-4">{filter.filterName}</h1>
  {filter.filtersItems.map((item)=>
  <div className="flex justify-between">
             <input type="checkbox" className="mr-4" value={item.FilterIsActive} checked={item.FilterIsActive} />
             <label className="text-[14px] w-full">{item}</label>
   </div>) }
  
        </div>)}
      
             {/****Filter by Price*****/}
                           <div className="flex flex-col mt-2">
                            <h1 className="uppercase tex-[28px] mt-2">filter by price</h1>
                             <RangeSlider/>
                           </div>

                  
                  
                   </div>
   )
}
export default FiltersProducts;