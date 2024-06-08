import Navbar from "../navbar";
import Footer from "../footer";
import BasicSelect from "../commun/SelectDropdown";
import ProductItem from "./ProductItem";
import { UseProductsStore } from "../stores/ProductsStore";
import { Link } from "react-router-dom";
import '../../components/commun/svgStyling.css';
import FreeSoloCreateOption from '../../components/commun/InputAutoComplete';
import { useFiltersStor } from "../../components/stores/filertsStore";
import { useEffect, useState } from "react";
import FiltersProducts from "../commun/FiltersProducts";

const Products=()=>{
 const {AllProducts, FiltersofEachCategory, setFiltersofEachCategory}=UseProductsStore((state)=>state) ;
 const {cathegories,Filters}=useFiltersStor((state)=>state);
 const [productsFilteredByDetailedFilter, setProductsFilteredByDetailedFilter]=useState([])
 const [copyCathegories, setCopyCathegories]=useState(cathegories)
 const [filtersActive, setFiltersActive]=useState(cathegories[3]);
 const [show, setShow]=useState(true)
 const [filteredProducts, setFilteredProducts]=useState([]);

 const allProductsFiltered=AllProducts.filter((e)=> e.category ===filtersActive.codeCategory)
 const [productsFiltedbySpecificFilters , setProductsFiltedbySpecificFilters]=useState([])

//{/******update the array Active categories **********/}

const handelActiveFilters=(e)=>{
setFiltersActive(e)
setFiltersofEachCategory([])
setProductsFiltedbySpecificFilters([])
setShow(true)
copyCathegories.forEach((elem)=>{
       if(e===elem){
              elem.FilterIsActive= !elem.FilterIsActive;
              
       }else{
              elem.FilterIsActive=false;
       }
})
 }

//this function takes products from a specific category than apply corresponding filters
const handeldetailedFilters=()=>{
    

 allProductsFiltered.forEach((e)=>{
     
          
         var array1=Object.keys(e)
          for(let i = 0 ; i < FiltersofEachCategory.length ; i++){
                const hasProperty = array1.some((property) => property === Object.keys(FiltersofEachCategory[i])[0]);
                const valuesMatches = (Object.values(FiltersofEachCategory[i])[0]=== e[Object.keys(FiltersofEachCategory[i])]);
                var index = productsFiltedbySpecificFilters.findIndex(el => JSON.stringify(el) === JSON.stringify(e));
                
                if(hasProperty===true && valuesMatches===true && index===-1){
                    setShow(false)  
                    productsFiltedbySpecificFilters.push(e)
                    setProductsFiltedbySpecificFilters(productsFiltedbySpecificFilters)
                 }else{
                  
                    
                 }
    
        
          }
         
     })
 
     
}
// this function udated product by category
useEffect(()=>{
const fprod= AllProducts.filter((e)=> e.category === filtersActive.codeCategory)
setProductsFilteredByDetailedFilter(fprod)
 },[AllProducts,filtersActive])
    



    return(<div className="flex flex-col  ">
        <Navbar/>
        <div className="bg-bgSection3 p-10   bg-cover bg-bottom bg-no-repeat  w-full relative flex flex-col justify-center items-center mt-20">
             <div className="text-[48px] z-10 uppercase w-full text-center">shop</div> 
             <div className="w-fit flex z-10 justify-between items-start  items-center">
                 <Link to="/">     <svg 
                               className="cursor-pointer mx-2  "
                                xmlns="http://www.w3.org/2000/svg" width="10.244" height="11.326" viewBox="0 0 10.244 11.326">
                                     <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(0.25 0.25)">
                                       <path id="Tracé_426" data-name="Tracé 426" d="M4.5,6.789,9.372,3l4.872,3.789v5.954a1.083,1.083,0,0,1-1.083,1.083H5.583A1.083,1.083,0,0,1,4.5,12.744Z" transform="translate(-4.5 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                                       <path id="Tracé_427" data-name="Tracé 427" d="M13.5,23.413V18h3.248v5.413" transform="translate(-10.252 -12.587)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                                     </g>
                      </svg>
               </Link>
                    <h1 className=" "><Link to="/">Home</Link>  <span className="mx-2">&#62;</span> <Link to="/products">Shop</Link> </h1> 


       </div>
            
        
        </div>

        {/****Products and filters*****/}
        <div className="flex w-full justify-center mt-20 p-20 items-start relative">
                 {/****Series*****/}
                 <div className="flex cursor-pointer flex-col w-2/12 max-sm:w-full max-sm:translate-x-[-90%] hover:max-sm:translate-x-[0%]  max-sm:pl-20 max-sm:bg-[#CA2026] max-sm:absolute max-sm:z-20 transition ease-in-out delay-150 ">
                <FiltersProducts handeldetailedFilters={handeldetailedFilters} filtersActive={filtersActive}  FiltersList={Filters[0]} handelActiveFilters={handelActiveFilters} />
               
                    </div>
                    
                  {/****Products section*****/}
                  <div className="w-8/12 max-sm:w-full flex  flex-col px-20 max-sm:px-0 ">
                    {/****Filter bar*****/}
                     <div className="flex max-lg:flex-col bg-[#CA2026] 
                      py-2 px-4 max-sm:px-0 w-full bg-no-repeat bg-center bg-cover 
                       bg-bgFilterBar relative justify-between items-center">
                    


                          <div className="flex items-center  z-10 ">
                                   <h1 className="mx-2">filtering </h1>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="12.547" height="11.392" viewBox="0 0 12.547 11.392">
                                   <path id="Icon_feather-filter" data-name="Icon feather-filter" d="M14.547,4.5H3L7.619,9.962v3.776l2.309,1.155V9.962Z" transform="translate(-2.5 -4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                   </svg>

                          </div>
                           
                           
                          
                           <FreeSoloCreateOption/>
                           
                             <svg 
                                   className="absolute left-[60%] z-10"
                                   xmlns="http://www.w3.org/2000/svg" width="12.851" height="12.851" viewBox="0 0 12.851 12.851">
                                   <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(0.5 0.5)">
                                     <path id="Tracé_317" data-name="Tracé 317" d="M14.85,9.675A5.175,5.175,0,1,1,9.675,4.5,5.175,5.175,0,0,1,14.85,9.675Z" transform="translate(-4.5 -4.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                     <path id="Tracé_318" data-name="Tracé 318" d="M27.789,27.789l-2.814-2.814" transform="translate(-16.145 -16.145)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                    </g>
                            </svg>

                           <div className="flex z-10 items-center">
                           
                           <BasicSelect/>
                            </div>
                     </div>

                    {/****products*****/}

                
                 
               {show &&  <div className="flex w-full  flex-wrap justify-center mt-20 mb-20">
                 
                   {productsFilteredByDetailedFilter.map((e)=><ProductItem
                   urlImage={e.urlImage} 
                   id={e.id}
                   category={e.category} 
                   name={e.name} typeProduct={e.typeProduct} 
                   descreption={e.descreption} 
                   price={e.price} btn={e.btn}/>)}
                 </div>
                  }
                  
                  {!show && <div className="flex w-full  flex-wrap justify-center mt-20 mb-20">
                   {productsFiltedbySpecificFilters.map((e)=><ProductItem
                   urlImage={e.urlImage} 
                   id={e.id}
                   category={e.category} 
                   name={e.name} typeProduct={e.typeProduct} 
                   descreption={e.descreption} 
                   price={e.price} btn={e.btn}/>)}
                  </div>}
                 

                   {/******displaying Products from divatech data base */}

                    <div className="hidden">
                     <h1>Products from divatech database</h1>
                     {filteredProducts.map((e)=><div>
                            <div>cathegory: {e.fields.category}</div>
                           {/* <div> technical specs: <div className="text-red-500 " dangerouslySetInnerHTML={{__html:e.fields.tech_specs}}></div> </div>*/}
                            <div>page support link: <div  dangerouslySetInnerHTML={{__html:e.presentation}}></div></div>
                     </div>)}
                    </div>





                   {/****Pagination and number of products****/}
                   <div className="flex justify-between items-center relative bg-bgpaginationBar bg-no-repeat bg-center bg-cover px-5">
                  

                        <div className="flex justify-center items-center z-10 h-full " >
                         <h1  className="uppercase text-[10px] mr-2">Total number of products</h1>
                         <h1 className="uppercase text-[10px] ml-2">{allProductsFiltered.length}</h1>
                       </div>
                  
                         <div className="flex w-1/4 justify-between items-center z-10 ">
                        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
                           
                             <div className="z-10">1</div>
                        </div>
                        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
                           
                             <div className="z-10">2</div>
                        </div>
                        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
                           
                             <div className="z-10">3</div>
                        </div>
                        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
                           
                             <div className="z-10">4</div>
                        </div>
                        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
                           
                             <div className="z-10"><span className="mx-2 font-bold">&#62;</span></div>
                        </div>
                         </div>
                        </div>
                  
                  
                  </div>


                   {/****cathégories*****/}
                  
                   <div className="w-2/12 cursor-pointer mt-2 pt-2 flex-col pb-4 max-sm:w-full max-sm:translate-x-[90%] hover:max-sm:translate-x-[0%]  max-sm:pl-20 max-sm:bg-[#CA2026] max-sm:absolute max-sm:z-20 transition ease-in-out delay-150">
                       <h1 className="uppercase text-[18px] mb-4">category</h1>

                       {copyCathegories.map((e)=> <div className="flex  w-full">
                                             <input type="checkbox" className="mr-4"  checked={e.FilterIsActive} onChange={()=>handelActiveFilters(e)}/>
                                             <label className="text-[14px]">{e.category}</label>
                                             </div>)}
                      
                      
               
                    </div>
        </div>


        <Footer/>
    </div>)
}
export default Products;