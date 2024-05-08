import './carou.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
const Carouselm=()=>{
    document.addEventListener( 'DOMContentLoaded', function () {
        new Splide('#splide', {
          type: 'loop',
          perPage: 3,
          focus: 'center',
          autoplay: true,
          interval: 8000,
          flickMaxPages: 3,
          updateOnMove: true,
          pagination: false,
          padding: '10%',
          throttle: 300,
          breakpoints: {
            1440: {
              perPage: 1,
              padding: '30%'
            }
          }
        }).mount();
      });
    return(
    <div>
    <section>
        <h1>Splide JS Carousel Demo</h1>
        <p className="left">
            Splide is a lightweight, powerful and flexible slider/carousel, written in pure JavaScript without any dependencies. Hands down the best slider/carousel plugin you will find out there. Well written, well supported, no dependencies and perfectly documented with plenty of options. </p>
      
        <p>
          <a href="https://splidejs.com/">Splidejs.com</a>
          <a href="https://github.com/Splidejs/splide">SplideJS GitHub</a>
        </p>
      </section>
      
      <div id="splide" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide"><img src="https://brandontran.com/images/cardboard-castle-10.jpg"/></li>
            <li className="splide__slide"><img src="https://brandontran.com/images/cardboard-castle-5.jpg"/></li>
            <li className="splide__slide"><img src="https://brandontran.com/images/cardboard-castle-4.jpg"/></li>
            <li className="splide__slide"><img src="https://brandontran.com/images/cardboard-castle-3.jpg"/></li>
          </ul>
        </div>
      </div>
      
      
      <img src="https://brandontran.com/images/brandon-tran.jpg" alt="Brandon Tran" width="100"/>
      </div>
      )
}


export default Carouselm;