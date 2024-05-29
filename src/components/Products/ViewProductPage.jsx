import Navbar from "../navbar";
import Footer from "../footer";
import { Link } from "react-router-dom";
import { Carou2 } from "../carou/Carou2";
import {CommunBtn, PriceBtn} from "../commun/CommunBtn";
import ProductToolBar from "./ProductToolBar";
const ViewProductPage=({id,name,description, tag})=>{
  //calling a function that fetch the products from the backeb using the id attributed as a prop  
    
    
    return(
    <div className="w-full flex flex-col justify-center items-center bg-[#535353]">
        <Navbar />
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

        <div className="flex justify-between items-center w-10/12 ">
                            <div className="w-1/2">
                                <Carou2/>
                            </div>
                            <div className="flex flex-col w-1/4">
                                 <div className="text-[47px] mb-10">MSI MPG Trident as 13nu c3-497 eu</div>
                                 <div className="text-[15px] mb-10">Le PC gamer MSI Trident AS 13NUC5-497EU est un ordinateur ultra-compact conçu pour le gaming. Son châssis léger et facile à transporter offre la mobilité dont vous avez besoin. Du côté de ses composants, il intègre un processeur Intel Core i5-13400F couplé à 16 Go de RAM, une carte graphique NVIDIA GeForce RTX 4060 8 Go sur l'architecture NVIDIA Ada Lovelace, ainsi qu'un stockage SSD 1 To. Silencieux, compact et puissant, il répondra présent à chacune de vos sessions !</div>
                                <div className="flex flrx-col">

                                <PriceBtn price="25000 DZD"/>
                                <CommunBtn btn="Buy with config"/>
                                
                                </div>
                                 <div className="text-[11px] mt-10">Mouse, 32000 DPI, Lightweight, Marsgaming, RGB</div>
                             </div>
                            
                                <div>
                               
                                </div>
        </div>





<ProductToolBar/>
<div className="bg-[#242424] flex flex-col w-full">
<div className="flex justify-center  items-center w-10/12 mt-20">
                            <div className="w-1/2 flex ">
                                <img  src="https://media.divatech.dz/images/mcultraw_960x960.max-360x360.format-webp.webp" alt="gaming zone product"/>
                            </div>
                            <div className="flex flex-col w-1/4">
                                 <div className="text-[47px] mb-10">MSI MPG Trident as 13nu c3-497 eu</div>
                                 <div className="text-[15px] mb-10">Le PC gamer MSI Trident AS 13NUC5-497EU est un ordinateur ultra-compact conçu pour le gaming. Son châssis léger et facile à transporter offre la mobilité dont vous avez besoin. Du côté de ses composants, il intègre un processeur Intel Core i5-13400F couplé à 16 Go de RAM, une carte graphique NVIDIA GeForce RTX 4060 8 Go sur l'architecture NVIDIA Ada Lovelace, ainsi qu'un stockage SSD 1 To. Silencieux, compact et puissant, il répondra présent à chacune de vos sessions !</div>
                               
                                 <div className="text-[11px] mt-10">Mouse, 32000 DPI, Lightweight, Marsgaming, RGB</div>
                             </div>
                            
                                <div>
                               
                                </div>
        </div>
<div className="flex justify-center items-center w-10/12 mb-20">
                           
                            <div className="flex flex-col w-1/4 ">
                                 <div className="text-[47px] mb-10">MSI MPG Trident as 13nu c3-497 eu</div>
                                 <div className="text-[15px] mb-10">Le PC gamer MSI Trident AS 13NUC5-497EU est un ordinateur ultra-compact conçu pour le gaming. Son châssis léger et facile à transporter offre la mobilité dont vous avez besoin. Du côté de ses composants, il intègre un processeur Intel Core i5-13400F couplé à 16 Go de RAM, une carte graphique NVIDIA GeForce RTX 4060 8 Go sur l'architecture NVIDIA Ada Lovelace, ainsi qu'un stockage SSD 1 To. Silencieux, compact et puissant, il répondra présent à chacune de vos sessions !</div>
                               
                                 <div className="text-[11px] mt-10">Mouse, 32000 DPI, Lightweight, Marsgaming, RGB</div>
                            
                             
                             
                             </div>
                          
                                <div>
                               
                                </div>


                                <div className="w-1/2 flex justify-end">
                                <img  src="https://media.divatech.dz/images/mcnova_960x960.max-360x360.format-webp.webp" alt="gaming zone product"/>
                            </div>
        </div>
</div>
        <Footer/>
    </div>)
}
export default ViewProductPage;