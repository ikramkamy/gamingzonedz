import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import productimage from '../../assets/home/section1/nouveaute/mc777_640x640.png'
import { productData, responsive } from "./data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UseBrandssStore } from "../stores/BrandsStore";
export const Carou2=()=> {
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];
      
    return (<ImageGallery items={images} />);
  
}
export const Product=(props) =>{
    return (
      <div className="card">
        <img className="product" src={productimage} alt="GZ" />
        <h2>product</h2>
        <p className="price">24000 DZD</p>
        <p></p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    );
  }
  export const BrandItem=(props) =>{
    return (
      <div className="card">
        <img className="product" src={productimage} alt="GZ" />
    
      </div>
    );
  }
export const Carou3=()=>{
const {brands}=UseBrandssStore((state)=>state)
console.log('brands', brands)
    const brandslist = brands.map((item) => (
      <div className="relative flex justify-center items-center">
      

        < img src={item.urlImage} alt="gaming zone brands" className="mb-10 z-100"/>
        </div>
      ));
return(
  <div>


<Carousel showDots={false} responsive={responsive} autoPlay={true} draggable={true}>
        {brandslist}
      </Carousel>
  </div>
)


}