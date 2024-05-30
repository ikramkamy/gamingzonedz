import Navbar from "../navbar";
import Footer from "../footer";
import HeaderPages from "../commun/HeaderPages";
import ShowProduct from "../commun/ShowProduct";
import img from "../../assets/predesignedpc/mcneo_960x960.png";
import { UseRebuiltComputersStore } from "../stores/RebuiltComputers";
import { useState } from "react";
import TechnicalSpecItem from "../commun/technicalSpecItem";
import { ToolProductBarBtn } from "../commun/CommunBtn";
import imss from "../../assets/predesignedpc/Trace 20703.svg"
const PredesignedPC=()=>{
const {PredesignedComputers, technicalSpecification}=UseRebuiltComputersStore((state)=>state)
const [styleFlex, setstyleFlex]=useState('flex');
const handelFlex=(e)=>{
    if(PredesignedComputers.indexOf(e)%2 === 0){ setstyleFlex('flex-row-reverse ')}
    else{setstyleFlex('flex')}
}

 return(<div className="flex flex-col justify-center items-center">
<Navbar/>


<div className="w-full p-0 flex flex-col justify-center items-center  max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center bg-sectionOnebg bg-no-repeat bg-center bg-cover ">
<HeaderPages title="predesigned computers"  marginTop="mt-0 w-full pt-20"/>
 
 <div className=" ">   
{PredesignedComputers.slice(0,1).map((e)=><ShowProduct name={e.name} description={e.description} tag="tag product"  imgUrl={e.urlImage} styleFlex={e.styleFlex}/>)}
</div>
</div>
<div className="flex z-10 justify-center items-center w-9/12 bg-black  ">
<div className="flex justify-center items-center  ">
    <h1 className="text-[18px]">HADES MC-R43</h1>
<ToolProductBarBtn btn="Design"/>
<ToolProductBarBtn btn="Flexibility"/>
<ToolProductBarBtn btn="power"/>
<a href="#technicalspecs"><ToolProductBarBtn btn="specs"/></a>
{/*<ToolProductBarBtn btn="Gallery"/>
<ToolProductBarBtn btn="support"/>*/}

</div>
</div>

<div className="bg-bgpredesignedpc bg-top bg-100% bg-no-repeat bg-conatin">
{PredesignedComputers.slice(1,4).map((e)=><ShowProduct name={e.name} description={e.description} tag="tag product"  imgUrl={e.urlImage} styleFlex={e.styleFlex}/>)}
</div>

<h1 className="uppercase  w-10/12 text-left text-[42px] text-[#CA2026]">technical specification</h1>
<div id="technicalspecs" className="mt-20 w-10/12 grid grid-cols-3 max-lg:grid-cols-2 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
{technicalSpecification.map((e)=>
<TechnicalSpecItem name={e.name} icon={e.urlImage} specifcation={e.specifcation}/>)}
</div>

<Footer/>
    </div>)
}
export default PredesignedPC;