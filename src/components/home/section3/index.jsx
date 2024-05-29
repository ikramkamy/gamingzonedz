import image from '../../../assets/home/section3/mc777_640x640.png'
import imag from '../../../assets/home/section3/Groupe 1226.png'
import imag2 from '../../../assets/home/section3/Groupe 1230.png'
import { useState } from 'react'
import { useEffect } from 'react'

const Section3=()=>{
  const [textAnimated, setTextAnimated]=useState('');
  const [text, setText]=useState("why go prebuilt?");
  const [indexl, setIndexl]=useState(0)
  const delay=200

  useEffect(()=>{
    const interval = setInterval(() => {
      if (indexl < text.length) {
        setTextAnimated(prevText => prevText + text.charAt(indexl));
        setIndexl(indexl+1);
       
      } else {
        clearInterval(interval);
        setIndexl(0);
        setTextAnimated('');
      }
    }, delay);
    return () => clearInterval(interval);
  },[indexl])

    return(
    
<div className="flex  mt-[10%] justify-center
 items-center bg-bgSection3 bg-center bg-cover bg-no-repeat max-sm:bg-bgSection33 max-sm:h-150vh max-sm:bg-no-repeat max-sm:bg-[length:1000px_150vh]
 max-sm:bg-contain max-sm:bg-center">

<div className="flex  max-sm:flex-col justify-center items-center w-full relative  py-20 ">
<svg 

className='absolute  top-[-40%]  w-full hidden'
xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="2046.567" height="798.282" viewBox="0 0 2046.567 798.282">
  <defs>
    <linearGradient id="linear-gradient" x1="0.028" y1="0.5" x2="0.966" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0"/>
      <stop offset="0.452" stop-color="#ca2026"/>
      <stop offset="1"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.028" y1="0.5" x2="0.966" y2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0"/>
      <stop offset="0.452" stop-color="#333"/>
      <stop offset="1"/>
    </linearGradient>
  </defs>
  <g id="Groupe_1226" data-name="Groupe 1226" transform="translate(63.284 -4650.977)">
    <path id="Tracé_170" data-name="Tracé 170" d="M0,37.13,856.524,0l159.525,105.819L1168.412,0l878.156,37.13V759.3l-822.462,38.986-208.056-131.81L830.534,798.282,0,759.3Z" transform="translate(1983.283 5449.259) rotate(180)" fill="url(#linear-gradient)"/>
    <path id="Tracé_171" data-name="Tracé 171" d="M0,0H859.516l156.534,69.586L1170.5,0h876.066V740.915H1225.954l-209.9-106.962L832.625,740.915H0Z" transform="translate(1983.283 5418.654) rotate(180)" fill="url(#linear-gradient-2)"/>
  </g>
</svg>

<div className="flex flex-col   w-1/2 max-sm:w-full  justify-center max-lg:items-start items-end z-10 h-fit ">
    <h1 className='text-[67px] uppercase text-redPrimary  w-2/3 max-lg:text-[30px] max-sm:text-[28px] max-sm:text-center max-sm:w-full min-h-[50px]'>{textAnimated}</h1>
    <div className='z-10 w-1/2 flex justify-center items-center hidden max-sm:w-full max-sm:flex'><img src={image} alt="gaming zone Rebuilt computer" className='w-1/2' /></div>
    <h3 className="text-[20px] w-2/3 max-sm:w-full max-sm:pl-2 max-lg:text-[14px]  max-sm:w-[95%]">
      These gaming PCs aren't just built by experts, they're designed by 
      them too! Gaming zone 
      Prebuilt gaming PCs are made with budget and experience in mind.</h3>

<div className="group flex  justify-between max-sm:justify-end items-center mb-3 mt-10 w-2/3 max-sm:w-full">
<svg 
className='mr-4 max-sm:w-1/12 max-sm:mr-2 group-hover:animate-wiggle1'
id="save-money" xmlns="http://www.w3.org/2000/svg" width="67.646" height="76.782" viewBox="0 0 67.646 76.782">
  <path id="Tracé_164" data-name="Tracé 164" d="M191.521,165.762a1.2,1.2,0,0,0-.432-.015,2.863,2.863,0,0,1-2.532-2.839,1.259,1.259,0,0,0-2.519,0A5.388,5.388,0,0,0,190,168.1v1.259a1.259,1.259,0,0,0,2.519,0v-1.183a5.378,5.378,0,0,0-1.1-10.642,2.86,2.86,0,1,1,2.86-2.86,1.259,1.259,0,0,0,2.519,0,5.388,5.388,0,0,0-4.276-5.265V148.26a1.259,1.259,0,0,0-2.519,0v1.223a5.378,5.378,0,0,0,1.417,10.566,2.858,2.858,0,0,1,.1,5.714Zm0,0" transform="translate(-156.807 -123.858)" fill="#ca2026"/>
  <path id="Tracé_165" data-name="Tracé 165" d="M104.195,124.755a18.263,18.263,0,1,0,18.263-18.263A18.263,18.263,0,0,0,104.195,124.755Zm18.263-15.744a15.744,15.744,0,1,1-15.744,15.744A15.744,15.744,0,0,1,122.458,109.011Zm0,0" transform="translate(-87.848 -89.727)" fill="#ca2026"/>
  <path id="Tracé_166" data-name="Tracé 166" d="M59.441,331.374l-9.866,4.661a8.036,8.036,0,0,0-6.851-4.227l-9.108-.25a9.619,9.619,0,0,1-4.139-1.069l-.927-.48a16.347,16.347,0,0,0-15.141.016l.058-2.1a1.259,1.259,0,0,0-1.224-1.294l-9.987-.275a1.259,1.259,0,0,0-1.293,1.224L.36,349.5a1.259,1.259,0,0,0,1.224,1.294l9.987.275h.034a1.259,1.259,0,0,0,1.259-1.225l.029-1.049,2.595-1.389a4.45,4.45,0,0,1,3.321-.363L34.3,351.388c.027.008.054.014.082.02a16.587,16.587,0,0,0,3.405.351,16.8,16.8,0,0,0,7.02-1.532,1.166,1.166,0,0,0,.156-.086l22.464-14.53a1.26,1.26,0,0,0,.413-1.678,6.362,6.362,0,0,0-8.4-2.559ZM2.913,348.307l.534-19.4,7.469.205-.534,19.4Zm40.763-.33a14.28,14.28,0,0,1-8.732.975l-15.452-4.337a6.964,6.964,0,0,0-5.192.568l-1.326.71.355-12.9a13.844,13.844,0,0,1,14.064-.75l.927.48a12.164,12.164,0,0,0,5.228,1.35l9.108.25a5.524,5.524,0,0,1,5.25,4.4l-13.567-.374a1.26,1.26,0,1,0-.069,2.518l14.972.412h.035a1.259,1.259,0,0,0,1.258-1.225,7.994,7.994,0,0,0-.122-1.634l10.119-4.781.03-.014a3.848,3.848,0,0,1,4.351.609Zm0,0" transform="translate(-0.36 -274.978)" fill="#ca2026"/>
  <path id="Tracé_167" data-name="Tracé 167" d="M214.722,13.224V1.259a1.259,1.259,0,0,0-2.519,0V13.224a1.259,1.259,0,0,0,2.519,0Zm0,0" transform="translate(-178.852)" fill="#ca2026"/>
  <path id="Tracé_168" data-name="Tracé 168" d="M274.722,46.927V41.259a1.259,1.259,0,1,0-2.519,0v5.667a1.259,1.259,0,1,0,2.519,0Zm0,0" transform="translate(-229.407 -33.703)" fill="#ca2026"/>
  <path id="Tracé_169" data-name="Tracé 169" d="M154.722,46.927V41.259a1.259,1.259,0,0,0-2.519,0v5.667a1.259,1.259,0,0,0,2.519,0Zm0,0" transform="translate(-128.298 -33.703)" fill="#ca2026"/>
</svg>
<p className="text-[20px] max-lg:text-[14px] max-sm:w-[80%] ">
    <b>Price</b><br/>
Save on building fees and the cost of purchasing parts separately.</p>

</div>
<div className="group flex justify-between max-sm:justify-end items-center mb-3 w-2/3 max-sm:w-full">
<svg 
className='mr-4 max-sm:w-1/12 max-sm:mr-2 group-hover:animate-wiggle1'
xmlns="http://www.w3.org/2000/svg" width="53.463" height="59.777" viewBox="0 0 53.463 59.777">
  <path id="achievement" d="M67.359,44.973a.964.964,0,0,0,.814.58l.072,0a.964.964,0,0,0,.819-.456L71.4,41.336l4.34.889A.964.964,0,0,0,76.819,40.9L73.6,33.414l.306-.13a4.01,4.01,0,0,0,2.42-4.192c-.04-.333-.077-.63-.111-.9a7.817,7.817,0,0,1-.129-2.015,7.817,7.817,0,0,1,.81-1.849c.123-.239.259-.5.411-.8a4.01,4.01,0,0,0-.841-4.767c-.245-.23-.464-.433-.661-.616a7.8,7.8,0,0,1-1.394-1.46,7.81,7.81,0,0,1-.568-1.937c-.06-.262-.126-.553-.2-.881a4.01,4.01,0,0,0-3.708-3.111c-.335-.019-.634-.034-.9-.047a7.812,7.812,0,0,1-2.006-.223,7.817,7.817,0,0,1-1.68-1.119c-.214-.162-.452-.343-.721-.544a4.01,4.01,0,0,0-4.84,0c-.269.2-.507.382-.721.544a7.817,7.817,0,0,1-1.68,1.119,7.813,7.813,0,0,1-2.006.223c-.268.013-.567.028-.9.047a4.01,4.01,0,0,0-3.708,3.111c-.077.327-.143.619-.2.881a7.808,7.808,0,0,1-.568,1.937,7.813,7.813,0,0,1-1.394,1.46c-.2.183-.416.386-.661.616a4.01,4.01,0,0,0-.841,4.767c.151.3.288.566.41.8a7.822,7.822,0,0,1,.81,1.849,7.815,7.815,0,0,1-.129,2.014c-.033.266-.071.563-.111.9a4.01,4.01,0,0,0,2.42,4.192c.309.132.584.248.832.353l.216.091-3.954,8.493a.964.964,0,0,0,1.04,1.357L53,42.815l2.226,3.831a.964.964,0,0,0,.834.48H56.1a.964.964,0,0,0,.831-.556l3.935-8.452A4.988,4.988,0,0,1,62.2,37.83a7.814,7.814,0,0,1,1.962.477l.377.116Zm3.769-5.662a.965.965,0,0,0-1.013.436L68.4,42.514l-1.639-3.8a4.011,4.011,0,0,0,2.812-1.793c.184-.281.346-.532.492-.758a7.819,7.819,0,0,1,1.2-1.626,2.817,2.817,0,0,1,.566-.349l2.49,5.782ZM55.96,44.079l-1.635-2.814a.965.965,0,0,0-1-.465l-3.207.56,3.131-6.725a10.109,10.109,0,0,1,1.084,1.523c.146.226.308.477.492.758a4,4,0,0,0,3.621,1.823ZM62.2,35.9a8.9,8.9,0,0,0-2.53.564c-.253.078-.535.165-.853.261a2.071,2.071,0,0,1-2.377-.865c-.182-.278-.342-.526-.486-.748-1.383-2.141-1.528-2.263-3.876-3.253-.244-.1-.516-.218-.821-.348a2.07,2.07,0,0,1-1.265-2.191c.039-.329.076-.623.109-.886.317-2.529.284-2.715-.879-4.983-.121-.236-.256-.5-.405-.794a2.07,2.07,0,0,1,.439-2.491c.242-.227.458-.428.653-.608,1.869-1.733,1.963-1.9,2.53-4.382.059-.259.125-.547.2-.87a2.07,2.07,0,0,1,1.938-1.626c.331-.018.626-.033.891-.046,2.546-.127,2.724-.192,4.755-1.731.211-.16.447-.339.712-.537a2.07,2.07,0,0,1,2.529,0c.266.2.5.377.712.537,2.032,1.539,2.209,1.6,4.755,1.731.265.013.56.028.891.046a2.07,2.07,0,0,1,1.938,1.626c.076.323.141.611.2.87.567,2.485.661,2.649,2.53,4.382.194.18.411.381.653.608a2.07,2.07,0,0,1,.439,2.491c-.15.3-.284.559-.405.795-1.163,2.268-1.2,2.454-.879,4.983.033.263.07.556.109.885a2.07,2.07,0,0,1-1.265,2.191c-.3.131-.577.245-.821.348-2.349.99-2.494,1.111-3.876,3.253-.144.223-.3.471-.486.749a2.069,2.069,0,0,1-2.377.865c-.317-.1-.6-.183-.853-.261A8.9,8.9,0,0,0,62.2,35.9Zm9.569-12.523A9.569,9.569,0,1,0,62.2,32.948,9.58,9.58,0,0,0,71.768,23.378ZM62.2,31.019a7.641,7.641,0,1,1,7.641-7.641A7.649,7.649,0,0,1,62.2,31.019Zm5.3-9.914L60.91,27.08a.964.964,0,0,1-1.33-.032l-2.711-2.711a.964.964,0,0,1,1.364-1.363l2.061,2.061,5.9-5.358a.964.964,0,1,1,1.3,1.428ZM85.8,52.7a6.174,6.174,0,0,0,1.867-4.636L87.2,31.484a3.461,3.461,0,0,0-3.428-3.1h-.05c-.856.014-3.647.475-3.627,5.832l.034,9a4.282,4.282,0,0,1-.039.6q-.1-.122-.218-.238a3.221,3.221,0,0,0-4.437-.034.948.948,0,0,0-.091.093,38.745,38.745,0,0,1-4.671,4.43c-.5.424-.978.824-1.368,1.176-1.635,1.474-1.854,3.5-1.851,5.3l.008,6.413-.831-.007A2.113,2.113,0,0,0,64.5,63.039l-.022,2.508a2.113,2.113,0,0,0,2.092,2.128l13.03.112h.018A2.113,2.113,0,0,0,81.725,65.7l.022-2.508a2.113,2.113,0,0,0-2.092-2.128l-1.072-.009V59.911ZM79.819,63.17,79.8,65.679a.178.178,0,0,1-.055.127.172.172,0,0,1-.128.053l-13.03-.112a.185.185,0,0,1-.18-.183l.022-2.508a.185.185,0,0,1,.181-.18h0l13.03.112a.184.184,0,0,1,.18.183Zm-10.434-2.2-.008-6.431c0-1.964.349-3.083,1.214-3.862.366-.33.808-.7,1.319-1.133a40.674,40.674,0,0,0,4.853-4.6,1.274,1.274,0,0,1,1.739,0,1.2,1.2,0,0,1,0,1.727c-.767.862-1.573,1.642-2.426,2.468-.409.4-.833.806-1.26,1.233a.964.964,0,1,0,1.364,1.363c.416-.416.834-.82,1.238-1.211.891-.862,1.733-1.677,2.557-2.607l.646-.79a5.975,5.975,0,0,0,1.427-3.917l-.034-9c-.009-2.386.654-3.88,1.73-3.9h.02a1.545,1.545,0,0,1,1.5,1.23l.47,16.576a4.233,4.233,0,0,1-1.3,3.218l-7.5,7.5a.964.964,0,0,0-.282.682v1.522Zm-2.032,3.065a.779.779,0,1,1,.436,1.012A.779.779,0,0,1,67.353,64.036Zm-10.61-2.483a2.1,2.1,0,0,0-1.5-.606l-.831.007.008-6.413c0-1.792-.216-3.823-1.851-5.3-.39-.352-.865-.752-1.368-1.175a38.764,38.764,0,0,1-4.671-4.43.946.946,0,0,0-.091-.093,3.222,3.222,0,0,0-4.437.034q-.117.116-.218.238a4.26,4.26,0,0,1-.039-.6l.034-9c.02-5.358-2.771-5.819-3.627-5.832h-.05a3.461,3.461,0,0,0-3.428,3.1l-.47,16.576A6.174,6.174,0,0,0,36.074,52.7l7.215,7.215V61.05l-1.072.009a2.113,2.113,0,0,0-2.092,2.128l.022,2.508a2.113,2.113,0,0,0,2.109,2.092h.018l13.03-.112A2.113,2.113,0,0,0,57.4,65.547l-.022-2.508a2.1,2.1,0,0,0-.632-1.486ZM45.217,59.512a.964.964,0,0,0-.282-.682l-7.5-7.5a4.233,4.233,0,0,1-1.3-3.218l.47-16.576a1.552,1.552,0,0,1,1.52-1.229c1.076.017,1.739,1.511,1.729,3.9l-.034,9a5.978,5.978,0,0,0,1.428,3.92l.619.758.025.03c.824.93,1.666,1.745,2.557,2.607.4.391.821.8,1.238,1.211a.964.964,0,1,0,1.364-1.363c-.427-.427-.851-.837-1.26-1.233-.853-.825-1.659-1.606-2.426-2.468a1.2,1.2,0,0,1,0-1.727,1.274,1.274,0,0,1,1.739,0,40.639,40.639,0,0,0,4.853,4.6c.511.431.953.8,1.319,1.133.865.779,1.217,1.9,1.214,3.862l-.008,6.431-7.27.062Zm10.2,6.18a.178.178,0,0,1-.127.055l-13.03.112a.185.185,0,0,1-.183-.18l-.022-2.508a.185.185,0,0,1,.18-.183l13.03-.112h0a.185.185,0,0,1,.181.18l.022,2.508a.178.178,0,0,1-.053.128Zm-.9-1.656a.779.779,0,1,1-1.012-.436A.779.779,0,0,1,54.519,64.036Z" transform="translate(-34.205 -8.01)" fill="#ca2026" fill-rule="evenodd"/>
</svg>

<p className="text-[20px] max-lg:text-[14px] max-sm:w-[80%]">
    <b>Quality</b><br/>
    Get the same high-quality components you would when purchasing a Custom PC.</p>


</div>
<div className="group flex justify-between max-sm:justify-end items-center mb-3 w-2/3 max-sm:w-full">
<svg id="g2985" xmlns="http://www.w3.org/2000/svg" 
className='mr-4 max-sm:w-1/12 max-sm:mr-2 group-hover:animate-wiggle1'
xlink="http://www.w3.org/1999/xlink" width="68.007" height="68.007" viewBox="0 0 68.007 68.007">
  <defs>
    <clipPath id="clip-path">
      <path id="path2991" d="M0-682.665H68.007v68.007H0Z" transform="translate(0 682.665)" fill="none" stroke="#ca2026" stroke-width="2"/>
    </clipPath>
  </defs>
  <g id="g2987" transform="translate(0 0)">
    <g id="g2989" clip-path="url(#clip-path)">
      <g id="g2995" transform="translate(10.592 8.495)">
        <path id="path2997" d="M-61.132-18.869l-3.993-1.957a1.275,1.275,0,0,0-1.766.727l-.934,2.692a1.275,1.275,0,0,0,.937,1.665l4.347.936a1.275,1.275,0,0,0,1.473-.829l.58-1.671A1.275,1.275,0,0,0-61.132-18.869Z" transform="translate(67.896 20.957)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g2999" transform="translate(16.336 0.996)">
        <path id="path3001" d="M-62.979-38.463l-2.479-3.691a1.275,1.275,0,0,0-1.893-.253l-2.155,1.864a1.275,1.275,0,0,0-.021,1.91l3.3,2.984a1.275,1.275,0,0,0,1.69.019l1.337-1.157A1.276,1.276,0,0,0-62.979-38.463Z" transform="translate(69.947 42.718)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3003" transform="translate(10.879 18.289)">
        <path id="path3005" d="M-50.845-.027l-4.436.3a1.275,1.275,0,0,0-1.166,1.513l.537,2.8a1.276,1.276,0,0,0,1.644.973L-50.034,4.2a1.276,1.276,0,0,0,.862-1.454l-.334-1.737A1.275,1.275,0,0,0-50.845-.027Z" transform="translate(56.47 0.03)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3007" transform="translate(49.937 8.495)">
        <path id="path3009" d="M-19.194-55.59l4.347-.936a1.276,1.276,0,0,0,.937-1.665l-.934-2.692a1.275,1.275,0,0,0-1.766-.727L-20.6-59.653a1.275,1.275,0,0,0-.644,1.563l.58,1.671A1.276,1.276,0,0,0-19.194-55.59Z" transform="translate(21.317 61.741)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3011" transform="translate(49.807 18.289)">
        <path id="path3013" d="M-7.995-38.2l4.233,1.363a1.275,1.275,0,0,0,1.643-.974l.537-2.8a1.275,1.275,0,0,0-1.166-1.513l-4.436-.3a1.275,1.275,0,0,0-1.339,1.032l-.333,1.737A1.275,1.275,0,0,0-7.995-38.2Z" transform="translate(8.879 42.422)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3015" transform="translate(44.486 0.996)">
        <path id="path3017" d="M-31.349-63.894l3.3-2.984a1.275,1.275,0,0,0-.021-1.91l-2.155-1.864a1.275,1.275,0,0,0-1.893.253L-34.6-66.708a1.275,1.275,0,0,0,.224,1.676l1.337,1.157A1.275,1.275,0,0,0-31.349-63.894Z" transform="translate(34.818 70.964)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3019" transform="translate(37.914 10.403)">
        <path id="path3021" d="M0,0,.78,1.137,7.741,3.189A.712.712,0,0,1,8.1,4.306L3.678,10.058l.015.517" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3023" transform="translate(21.842 5.245)">
        <path id="path3025" d="M-112.442-188.257l-.279-.1-6.838,2.431a.711.711,0,0,1-.95-.689l.2-7.255-4.426-5.751a.712.712,0,0,1,.363-1.117l6.961-2.052,4.1-5.986a.712.712,0,0,1,1.174,0l.606.885" transform="translate(124.883 209.086)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3027" transform="translate(21.532 36.343)">
        <path id="path3029" d="M0-252.58H10.867l1.2,1.082a6.363,6.363,0,0,0,4.269,1.64H32.121a3.564,3.564,0,0,0,3.564-3.564,3.564,3.564,0,0,0-3.564-3.564h1.329A3.544,3.544,0,0,0,37-260.531a3.544,3.544,0,0,0-3.544-3.544h.92a3.861,3.861,0,0,0,3.86-3.861,3.861,3.861,0,0,0-3.86-3.861h-.5a4.364,4.364,0,0,0,4.364-4.364,4.364,4.364,0,0,0-4.364-4.364H29.724" transform="translate(0 280.526)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3031" transform="translate(21.532 20.551)">
        <path id="path3033" d="M-225.087-142.733h-4.749l2.246-5.206a4.061,4.061,0,0,0,.239-.744l.449-2.05a6.419,6.419,0,0,0-6.27-7.792h0a2.8,2.8,0,0,0-2.7,2.055l-1.672,6.061-6.578,11.767h-5.87" transform="translate(249.991 158.525)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3035" transform="translate(37.208 36.343)">
        <path id="path3037" d="M-36.883,0h-4.081" transform="translate(40.964)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3039" transform="translate(51.166 45.072)">
        <path id="path3041" d="M-34.661,0H-38.5" transform="translate(38.496)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3043" transform="translate(50.366 52.793)">
        <path id="path3045" d="M-38.128,0h-4.219" transform="translate(42.347)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3047" transform="translate(48.766 59.882)">
        <path id="path3049" d="M-40.577,0h-4.49" transform="translate(45.067 0)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3051" transform="translate(8.242 49.993)">
        <path id="path3053" d="M0-153.809H11.206a1.419,1.419,0,0,0,1.419-1.419v-15.6" transform="translate(0 170.826)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3055" transform="translate(8.242 37.818)">
        <path id="path3057" d="M-114.108-66.469V-72.4a1.419,1.419,0,0,0-1.419-1.419h-11.206" transform="translate(126.733 73.824)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
      <g id="g3059" transform="translate(12.182 63.113)">
        <path id="path3061" d="M0,0H1.515" transform="translate(0 0)" fill="none" stroke="#ca2026" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
      </g>
    </g>
  </g>
</svg>


<p className="text-[20px] max-lg:text-[14px] max-sm:w-[80%]">
    <b>convenience</b><br/>
    Prebuilt Player PCs are assembled by experts, with a simple lineup of products to choose from.</p>




</div>


</div>
<div className='z-10 w-1/2 max-lg:w-1/4 flex justify-start max-sm:hidden
 items-center'>
  <img src={image} alt="gaming zone Rebuilt computer "  />
  </div>
</div>


    </div>)
}
export default Section3;