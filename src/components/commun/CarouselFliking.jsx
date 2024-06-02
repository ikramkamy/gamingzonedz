import Flicking,{ViewportSlot} from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import { Arrow } from "@egjs/flicking-plugins";
import img from "../../assets/home/section1/nouveaute/mc777_640x640.png"
import { useState } from "react";

// import styles
//import "@egjs/flicking/dist/flicking.css"; // Supports IE10+, using CSS flex
// Or...
//import "@egjs/flicking/dist/flicking.inline.css"; //Supports IE9+, using CSS inline-box





const CarouselFliking=()=>{
    const [products,setProducts]=useState([{
        id:0,
        image:img
    },{
        id:0,
        image:img
    }])
   const private_plugins = [new Arrow()];
    //const flicking = new Flicking("#my-flicking", { circular: true });
    return(
        <Flicking
        panelsPerView={true}
      cameraClass="BoundCamera"
     
    autoInit={true}
    align="prev"
    circular={true}
    plugins={private_plugins}
    onMoveEnd={e => {
      console.log(e);
    }}>
<div className=" card-panel ">ikram</div>
    <div className=" card-panel"><img src={img} alt="gaming zone" className="bg-yellow-500 "/></div>
    <div className=" card-panel"><img src={img} alt="gaming zone" className="bg-yellow-500 "/></div>
    <div className=" card-panel"><img src={img} alt="gaming zone" className="bg-yellow-500 "/></div>
    <div className="card-panel "><img src={img} alt="gaming zone" className="bg-yellow-500 "/></div>
    <div className=" card-panel"><img src={img} alt="gaming zone" className="bg-yellow-500 "/></div>
 
    <ViewportSlot>
        <span className="flicking-arrow-prev"></span>
        <span className="flicking-arrow-next"></span>
      </ViewportSlot>
 
  </Flicking>)
}
export default CarouselFliking;