import { create  } from "zustand";
//import imageCarousel1 from "../../assets/home/section1/Composant11.png";
// import imageCarousel1 from "../../assets/home/section1/withoutbackg/Women Png copy.png";
// import imageCarousel2 from "../../assets/home/section1/withoutbackg/Groupe 92.png";
// import imageCarousel3 from "../../assets/home/section1/Groupe 1232.svg"
// import imageCarousel4 from "../../assets/home/section1/Groupe 1232.png"
import imageCarousel1 from "../../assets/home/section1/show1.png";

import imageCarousel2 from "../../assets/home/section1/show2.png";
import imageCarousel3 from "../../assets/home/section1/show3.png"
import imageCarousel4 from "../../assets/home/section1/show4.png";
import imageCarousel5 from "../../assets/home/section1/show5.png";
import imageCarousel6 from "../../assets/home/section1/show6.png";
import axios from "axios";

export const HomeCarouselElements =create((set,get)=>({
 
    CarouselElements:[{
        ImageUrl:imageCarousel1,
        subtitle:"the epic gaming store1",
        title:"your gaming destination",
    },
    {
      ImageUrl:imageCarousel2,
      subtitle:"the epic gaming store2",
      title:"your gaming destination",
  },
  {
    ImageUrl:imageCarousel3,
    subtitle:"the epic gaming store3",
    title:"your gaming destination",
},
    {
        ImageUrl:imageCarousel4,
        subtitle:"the epic gaming store 4",
        title:"your gaming destination ",
    }, 
     {
      ImageUrl:imageCarousel5,
      subtitle:"the epic gaming store 5",
      title:"your gaming destination 2",
  },
  {
    ImageUrl:imageCarousel6,
    subtitle:"the epic gaming store 6",
    title:"your gaming destination 2",
}


],

 getBanners: async ()=>{
    console.log("we are in the get banner function")
    try{
let response = await axios.get('http://localhost:8000/home')
  //console.log('data', response)
  //set ({CarouselElements: response.data})
    } catch (err) {
console.error(err)
    }

}

}))