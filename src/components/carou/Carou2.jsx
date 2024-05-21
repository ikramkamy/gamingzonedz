import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import productimage from '../../assets/home/section1/nouveaute/mc777_640x640.png'
import {responsive } from "./data";
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
    const brandslist = brands.map((item) => (
      <div className="relative h-full flex justify-center aline-center max-sm:w-[100vw] w-[248.199px] h-[67.415px]">
        <svg 
        className="absolute max-sm:w-[100vw]"
        xmlns="http://www.w3.org/2000/svg" width="248.199" height="67.415" viewBox="0 0 248.199 67.415">
        <path id="Tracé_128" data-name="Tracé 128" d="M16.347,0H243.976L221.182,67.415H-4.223Z" transform="translate(4.223)" fill="#292929"/>
      </svg>

    < img src={item.urlImage} alt="gaming zone brands" className="z-10 w-fit  m-5"/>
    </div>
      ));
return(
 <Carousel className=" flex items-center"
  showDots={false} responsive={responsive} autoPlay={true} draggable={true}>
        {brandslist}
</Carousel>
  
)


}
