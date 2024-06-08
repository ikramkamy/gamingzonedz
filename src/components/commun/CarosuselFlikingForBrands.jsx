import Flicking,{ViewportSlot} from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import {Sync} from "@egjs/flicking-plugins";
import img from '../../assets/home/ourbrands/Groupe 19.png'
import img2 from '../../assets/home/ourbrands/Groupe 18.png'
import { useRef,useState,useEffect } from "react";


export const CarouselBrands=()=>{


const flicking0 = useRef();
  const flicking1 = useRef();
  const flicking2 = useRef();

  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    setPlugins([new Sync({
      type: "camera",
      synchronizedFlickingOptions: [
        {
          flicking: flicking0.current,
          isClickable: false
        },
        {
          flicking: flicking1.current,
          isClickable: false
        },
        {
          flicking: flicking2.current,
          isClickable: false
        }
      ]
    })]);
  }, []);

  return (<div><Flicking ref={flicking0} hideBeforeInit={true}
    className="mb-4 w-full flex  jusdtify-center"
    align="prev"
    bound={true}
    bounce={30}
    autoInit={true}
    plugins={plugins}>
    <span className="button mr-2 is-white">
      < img src={img} alt="gaming zone brands" className="z-10 w-fit w-[150px] m-5"/></span>
    <span className="button mr-2 is-white">< img src={img2} alt="gaming zone brands" className="z-10 w-fit w-[150px] m-5"/></span>
    <span className="button mr-2 is-white">< img src={img} alt="gaming zone brands" className="z-10 w-fit w-[150px] m-5"/></span>
   
  </Flicking>
  <Flicking ref={flicking1}
    className="mb-4"
    align="prev"
    bound={true}
    bounce={30}>
   <span className="button mr-2 is-white">
      < img src={img} alt="gaming zone brands" className="z-10 w-fit w-[150px] m-5"/></span>
    <span className="button mr-2 is-white">< img src={img2} alt="gaming zone brands" className="z-10 w-fit w-[150px] m-5"/></span>
    <span className="button mr-2 is-white">< img src={img} alt="gaming zone brands" className="z-10 w-fit w-[150px] m-5"/></span>
  </Flicking>
  <Flicking ref={flicking2}
    align="prev"
    bound={true}
    bounce={30}>
    <span className="button mr-2 is-white">
      < img src={img} alt="gaming zone brands" className="z-10 w-fit w-[150px] m-5"/></span>
    <span className="button mr-2 is-white">< img src={img2} alt="gaming zone brands" className="z-10 w-fit w-[150px] m-5"/></span>
    <span className="button mr-2 is-white">< img src={img} alt="gaming zone brands" className="z-10 w-fit w-[150px] m-5"/></span>
  </Flicking>
  </div>
  )
};