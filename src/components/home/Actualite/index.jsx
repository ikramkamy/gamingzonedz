import { ActualiteCardItem } from "./ActualiteCardItem";
import image from '../../../assets/home/actualite/Groupe 1226.png';
import { UseBlogStore } from "../../stores/BlogStore";
const ActualiteSection=()=>{
  const {blogs}=UseBlogStore();
    return(
  <div className="flex flex-col justify-center items-center
  
  bg-bgActualite bg-top bg-cover bg-no-repeat  w-full">
     <div className="uppercase text-[67px] max-sm:text-[28px] text-center w-full mt-20 ">actualités</div>
    <div  className="w-10/12 flex flex-wrap items-center justify-center ">
 
{blogs.map((e)=>
<ActualiteCardItem image={e.imageURL} title={e.title} subtitle={e.subtitle} bloglink={e.bloglink}/>)}


</div>
    </div>)
}
export default ActualiteSection;