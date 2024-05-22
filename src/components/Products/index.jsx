import Navbar from "../navbar";
import Footer from "../footer";
import BasicSelect from "../commun/SelectDropdown";
import CarouselItem from "../home/NouveauteSection/CarouselItem";
import { UseProductsStore } from "../stores/ProductsStore";
import RangeSlider from "../commun/Slider";
import '../../components/commun/svgStyling.css';
import FreeSoloCreateOption from '../../components/commun/InputAutoComplete'
const Products=()=>{
 const {AllProducts}=UseProductsStore((state)=>state) 
    return(<div className="flex flex-col  ">
        <Navbar/>
        <div className="w-full relative flex flex-col justify-center items-center mt-20">
             <div className="text-[78px]  uppercase w-full text-center">shop</div> 
             <div className="w-fit flex justify-between items-center">
                      <svg 
        className="cursor-pointer mx-2"
        xmlns="http://www.w3.org/2000/svg" width="10.244" height="11.326" viewBox="0 0 10.244 11.326">
              <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(0.25 0.25)">
                <path id="Tracé_426" data-name="Tracé 426" d="M4.5,6.789,9.372,3l4.872,3.789v5.954a1.083,1.083,0,0,1-1.083,1.083H5.583A1.083,1.083,0,0,1,4.5,12.744Z" transform="translate(-4.5 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                <path id="Tracé_427" data-name="Tracé 427" d="M13.5,23.413V18h3.248v5.413" transform="translate(-10.252 -12.587)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
              </g>
                      </svg>
                    <h1>Home  <span className="mx-2">&#62;</span> Shop </h1> 


             </div>
             <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="2046.567" height="714.974" viewBox="0 0 2046.567 714.974" className="absolute hidden top-[30%]">
            <defs>
                <linearGradient id="linear-gradient" x1="0.028" y1="0.5" x2="0.966" y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0"/>
                  <stop offset="0.452" stop-color="#ca2026"/>
                  <stop offset="1"/>
                </linearGradient>
                <linearGradient id="linear-gradient-2" x1="0.028" y1="0.5" x2="0.966" y2="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0"/>
                  <stop offset="0.452" stop-color="#333"/>
                  <stop offset="1"/>
                </linearGradient>
             </defs>
            <g id="Groupe_1227" data-name="Groupe 1227" transform="translate(75.284 499.45)">
              <g id="Groupe_1226" data-name="Groupe 1226" transform="translate(24 -3)">
                <path id="Tracé_450" data-name="Tracé 450" d="M0,33.255,856.524,0l159.525,43.324L1168.412,0l878.156,33.255v646.8l-822.462,34.917L1016.049,596.92,830.534,714.974,0,680.057Z" transform="translate(1947.283 218.524) rotate(180)" fill="url(#linear-gradient)"/>
              </g>
               <path id="Tracé_451" data-name="Tracé 451" d="M0,5.93,857.27,0l158.779,23.47L1171.188,0l875.379,5.93V664.28H1225.954l-209.9-95.043L832.625,664.28H0Z" transform="translate(1971.283 191.534) rotate(180)" fill="url(#linear-gradient-2)"/>
             </g>
             </svg>
        
        </div>

        {/****Products and filters*****/}
        <div className="flex w-full justify-center mt-20">
                 {/****Series*****/}
                 <div className="flex flex-col w-2/12">
                            <div className="w-full flex-col pb-4 border-b-2 border-b-secondary">
                       <h1 className="uppercase text-[18px] mb-4">series</h1>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                            </div>
                 {/****Brands*****/}
                         <div className="w-full flex-col pb-4 border-b-2 border-b-secondary">
                       <h1 className="uppercase text-[18px] mb-4">brands</h1>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
                       </div>
                            </div>
                   {/****Filter by Price*****/}
                           <div className="flex flex-col">
                            <h1 className="uppercase tex-[28px]">filter by price</h1>
                             <RangeSlider/>
                           </div>

                   {/****cathégories*****/}
                   <div className="w-full flex-col pb-4 ">
                       <h1 className="uppercase text-[18px] mb-4">cathegory</h1>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">CPU</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">GPU</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">CASQUE</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">CASE</label>
                       </div>
                       <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ACCESSOIRES</label>
                       </div>
               
                            </div>
                  
                  </div>
                 
                  {/****Products section*****/}
                  <div className="w-8/12 flex flex-col px-20">
                    {/****Filter bar*****/}
                     <div className="flex py-2 px-4 w-full bg-no-repeat bg-center bg-cover  bg-bgFilterBar relative justify-between items-center">
                    


                          <div className="flex items-center z-10 ">
                                   <h1 className="mx-2">filtering </h1>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="12.547" height="11.392" viewBox="0 0 12.547 11.392">
                                      <path id="Icon_feather-filter" data-name="Icon feather-filter" d="M14.547,4.5H3L7.619,9.962v3.776l2.309,1.155V9.962Z" transform="translate(-2.5 -4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                    </svg>

                          </div>
                           {/*<input type="text" placeholder="Search for products"  className="w-5/12 z-10 p-[5px] bg-[#D6D6D6]"/>*/}
                           <FreeSoloCreateOption/>
                           {/**<FreeSoloCreateOption/>*/}
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

                  <div className="flex w-full flex-wrap mt-20 mb-20">
                   {AllProducts.map((e)=><CarouselItem urlImage={e.urlImage}  name={e.name} typeProduct={e.typeProduct} descreption={e.descreption} price={e.price} btn={e.btn}/>)}
                  </div>
                   {/****Pagination and number of products****/}
                   <div className="flex justify-between relative bg-bgpaginationBar bg-no-repeat bg-center bg-cover px-5">
                  

                        <div className="flex justify-center items-center z-10 h-full " >
                         <h1  className="uppercase text-[10px] mr-2">Total number of products</h1>
                         <h1 className="uppercase text-[10px] ml-2">897</h1>
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
        </div>


        <Footer/>
    </div>)
}
export default Products;