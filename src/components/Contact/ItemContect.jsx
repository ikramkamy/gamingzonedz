
const ItemContact=({img,title,subtitle, phone, email})=>{
    return(<div className="flex flex-col justify-center items-center w-1/4 m-2 border-r-2 border-r-[#CA2026] last:border-r-0">


<div className="relative flex justify-center items-center cursor-pointer">
<img src={img} alt="contact gaming zone services" className=" absolute top-1/4 "/> 
                  <svg xmlns="http://www.w3.org/2000/svg" 
                      xlink="http://www.w3.org/1999/xlink" width="87.1" height="86.618" viewBox="0 0 87.1 86.618">
                    <defs>
                      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#ca2026"/>
                                          <stop offset="1" stop-color="#651013"/>
                      </linearGradient>
                    </defs>
                    <path id="Tracé_20645" data-name="Tracé 20645" d="M-20671.93-5282.157l-18.361,29.533v57.084h69.072l18.027-26.611v-60.007Z" 
                    transform="translate(20690.291 5282.157)" fill="url(#linear-gradient)"/>
               </svg>
</div>

<p className="font-bold text-[21px] text-[#CA2026]">{title}</p>
<p  className="w-2/3 text-center">{subtitle}</p>
<p className="text-center">{phone}</p>
<p className="text-center">{email}</p>
    </div>)
}
export default ItemContact;