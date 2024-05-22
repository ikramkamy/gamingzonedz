import Navbar from "../navbar";
import Footer from "../footer"
const Products=()=>{
    return(<div className="flex flex-col ">
        <Navbar/>
        <div className="w-full relative flex flex-col">
             <div className="text-[78px]  uppercase ">shop</div> 
             <div className="w-fit flex justify-between">
                      <svg 
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg" width="10.244" height="11.326" viewBox="0 0 10.244 11.326">
              <g id="Icon_feather-home" data-name="Icon feather-home" transform="translate(0.25 0.25)">
                <path id="Tracé_426" data-name="Tracé 426" d="M4.5,6.789,9.372,3l4.872,3.789v5.954a1.083,1.083,0,0,1-1.083,1.083H5.583A1.083,1.083,0,0,1,4.5,12.744Z" transform="translate(-4.5 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                <path id="Tracé_427" data-name="Tracé 427" d="M13.5,23.413V18h3.248v5.413" transform="translate(-10.252 -12.587)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
              </g>
                      </svg>
                    <h1>Home</h1> <sup/> Shop


             </div>
             <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="2046.567" height="714.974" viewBox="0 0 2046.567 714.974" className="absolute top-[-30%]">
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
        <div className="flex">
        {/****Series*****/}
        <div className="w-2/12">
            <h1 className="uppercase text-[18px] mb-4">series</h1>
            <div className="flex justify-between">
                <input type="checkbox" className="mr-2"/>
                <label className="text-[14px]">ROG Rampage</label>
            </div>
        </div>
         {/****Products*****/}
         <div className="w-8/12"></div>
        </div>


        <Footer/>
    </div>)
}
export default Products;