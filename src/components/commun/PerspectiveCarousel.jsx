
import Flicking from "@egjs/react-flicking";
import { Perspective } from "@egjs/flicking-plugins";
import img from '../../assets/home/section1/nouveaute/marm2-color-1_480x600_edited.png';
import CarouselItem from "../../components/home/NouveauteSection/CarouselItem";
import { UseProductsStore } from "../../components/stores/ProductsStore";
import newProdimg1 from '../../assets/home/section1/nouveaute/mhw100_960x960.png'
import newProdimg2 from '../../assets/home/section1/nouveaute/mh222_960x960.png'
import newProdimg3 from '../../assets/home/section1/nouveaute/mcneo_960x960.png'
import newProdimg4 from '../../assets/home/section1/nouveaute/mcex_640x640.png'
import newProdimg5 from '../../assets/home/section1/nouveaute/mc777_640x640.png'
import newProdimg6 from '../../assets/home/section1/nouveaute/marm2-color-1_480x600_edited.png'
 const CarouselPerspective =()=> {
    const {NewProducts}=UseProductsStore((state)=>state)
  const plugins = [new Perspective({ rotate: -1, scale: 2, perspective: 2600 })];


    return (<Flicking circular={true} plugins={plugins} className="flex justify-center items-center pt-20">
      <div className="card-panel" > 
     
      {/*NewProducts.map((e)=><CarouselItem 
                 
                key={NewProducts}
                 urlImage={e.urlImage} name={e.name} typeProduct={e.typeProduct} 
                 descreption={e.descreption} price={e.price} btn={e.btn}/>
                 ) */}
     <CarouselItem 
  urlImage={newProdimg1} name="MCEX" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
      <div className="card-panel">
      
      <CarouselItem 
  urlImage={newProdimg2} name="MCEX" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      
      </div>
      <div className="card-panel"> <CarouselItem 
  urlImage={newProdimg3} name="MCEX" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
      <div className="card-panel"> <CarouselItem 
  urlImage={newProdimg4} name="MCEX" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
      <div className="card-panel"> <CarouselItem 
  urlImage={newProdimg5} name="MCEX" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
      <div className="card-panel"> <CarouselItem 
  urlImage={newProdimg6} name="MCEX" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
    </Flicking>);
  }
  export default CarouselPerspective;
