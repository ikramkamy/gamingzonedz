import { create  } from "zustand";
import imageCarousel1 from "../../assets/home/section1/Composant11.png"
import imageCarousel2 from "../../assets/home/section1/Composant11Next.png"
import axios from "axios";

export const HomeCarouselElements =create((set,get)=>({
 
    CarouselElements:[{
        ImageUrl:imageCarousel1,
        subtitle:"the epic gaming store",
        title:"your gamingdestination",
    },
    {
        ImageUrl:imageCarousel2,
        subtitle:"the epic gaming store 2",
        title:"your gamingdestination 2",
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