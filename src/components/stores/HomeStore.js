import { create  } from "zustand";
//import imageCarousel1 from "../../assets/home/section1/Composant11.png";
import imageCarousel1 from "../../assets/home/section1/withoutbackg/Women Png copy.png";
import imageCarousel2 from "../../assets/home/section1/withoutbackg/Groupe 92.png";


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
    ImageUrl:imageCarousel1,
    subtitle:"the epic gaming store3",
    title:"your gaming destination",
},
    {
        ImageUrl:imageCarousel2,
        subtitle:"the epic gaming store 4",
        title:"your gaming destination ",
    }, 
     {
      ImageUrl:imageCarousel1,
      subtitle:"the epic gaming store 5",
      title:"your gaming destination 2",
  },
  {
    ImageUrl:imageCarousel2,
    subtitle:"the epic gaming store 6",
    title:"your gaming destination 2",
}


],

 getBanners: async ()=>{
    console.log("we are in the get banner function")
    try{
let response = await axios.get('https://api.pexels.com/v1/curated?page=1&per_page=40',
    {
      headers: {
        Authorization:
          "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
      },
    }
  )
  console.log('data', response)
  //set ({CarouselElements: response.data})
    } catch (err) {
console.error(err)
    }

}

}))