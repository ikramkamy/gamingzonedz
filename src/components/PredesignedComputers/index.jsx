import Navbar from "../navbar";
import Footer from "../footer"
import { Link } from "react-router-dom";
import { ButtonRebuiltPcSection } from "../home/sectionOne/ComponentsSection1";
import { ReabuiltItem } from "../home/PrebuiltPcsection/PrebuiltItem";
import { UsePrebuiltComputersStore } from "../stores/PrebuiltComputers";
const PrebuiltComputers=()=>{
    const {OurPrebuiltComputers}=UsePrebuiltComputersStore((state)=>state)
    return(
 <div className="flex flex-col w-full justify-center items-center ">
         <Navbar/>
        <div className="bg-bgSection3 p-10 mt-20  bg-cover bg-bottom bg-no-repeat  w-full relative flex flex-col justify-center items-center mt-20">
             <div className="text-[48px] z-10 uppercase w-full text-center">predesigned computers</div> 
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

         <div className="flex flex-col justify-center items-center mt-10">
          <div className="text-[28px] w-3/12 text-center">SHOP OUR HIGH-PERFORMANCE DESKTOP GAMING PCS.</div>
          <p className="text-[11px] w-4/12 text-center" > 
          Choose from the world’s most customizable Gaming PC. There are four types of configurations available - 
          small form factor, mid tower, full tower, and super tower. Then select the high performance components to build your very 
          own custom Gaming PC. Or choose from our growing selection of prebuilt and ready to ship Gaming PCs.
            Plus, all our Gaming Computers include lifetime support. That means we stand behind the quality we build into every machine, assembled right here in the USA.</p>
         </div>

         <div className="flex w-10/12 max-sm:w-11/12 justify-center items-center mt-20">
              <ButtonRebuiltPcSection btnName="budget" />
              <ButtonRebuiltPcSection btnName="performence"/>
              <ButtonRebuiltPcSection  btnName="workstation"/>

        </div>

<div className="flex flex-wrap w-10/12 mt-20 max-sm:flex-col">

{OurPrebuiltComputers.map((e)=>

<ReabuiltItem index={OurPrebuiltComputers.indexOf(e)} urlImage={e.urlImage} name={e.name} description={e.description} widthItem='w-1/4'/>
)}
</div>

<div className="flex w-8/12 mt-20 mb-20 justify-between items-center relative bg-bgpaginationBar bg-no-repeat bg-center bg-cover px-5">
                  

                  <div className="flex justify-center items-center z-10 h-full " >
                   <h1  className="uppercase text-[10px] mr-2">Total number of products</h1>
                   <h1 className="uppercase text-[10px] ml-2">{OurPrebuiltComputers.length}</h1>
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
<Footer/>
    </div>)
}
export default PrebuiltComputers;