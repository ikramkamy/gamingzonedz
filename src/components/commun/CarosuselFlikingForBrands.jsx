import Flicking,{ViewportSlot} from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import "@egjs/react-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import {Sync} from "@egjs/flicking-plugins";


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

  return (<div><Flicking ref={flicking0}
    className="mb-4"
    align="prev"
    bound={true}
    bounce={30}
    plugins={plugins}>
    <span className="button mr-2 is-white">🍎 Apple</span>
    <span className="button mr-2 is-white">🍉 Watermelon</span>
    <span className="button mr-2 is-white">🥝 Kiwi</span>
    <span className="button mr-2 is-white">...</span>
  </Flicking>
  <Flicking ref={flicking1}
    className="mb-4"
    align="prev"
    bound={true}
    bounce={30}>
    <span className="button mr-2 is-white">🍔 Hamburger</span>
    <span className="button mr-2 is-white">🍕 Pizza</span>
    <span className="button mr-2 is-white">🍞 Bread</span>
    <span className="button mr-2 is-white">...</span>
  </Flicking>
  <Flicking ref={flicking2}
    align="prev"
    bound={true}
    bounce={30}>
    <span className="button mr-2 is-white">🥛 Milk</span>
    <span className="button mr-2 is-white">☕ Coffee</span>
    <span className="button mr-2 is-white">🍵 Green tea</span>
    <span className="button mr-2 is-white">...</span>
  </Flicking>
  </div>
  )
};