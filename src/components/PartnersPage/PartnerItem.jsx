
const PartnerItem=({logo, phone, name, adress})=>{
    return(
    <div className="z-100 
     bg-bgpartnerspage bg-no-repeat bg-cover ho hover:border-[#CA2026] hover:border-2
     hover:bg-bgpartnerspage1 cursor-pointer 
     text-black h-[200px]  w-[200px] flex flex-col justify-center items-center p-5">
              <div className="w-full h-1/3 justify-center items-center border-b-[#575757] border-b-2 pb-4">
                <img src={logo} alt="gaming zone partners" className="w-full"/>
                </div>
              <div className="flex items-center w-full justify-start pl-4">{name}</div>
              <div className="flex items-center w-full justify-start">
              <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="15.602" height="15.629" viewBox="0 0 15.602 15.629">
               <path id="Icon_feather-phone-call" data-name="Icon feather-phone-call" d="M11.853,4.185a3.357,3.357,0,0,1,2.652,2.652M11.853,1.5A6.042,6.042,0,0,1,17.19,6.83m-.671,5.357V14.2a1.343,1.343,0,0,1-1.463,1.343,13.285,13.285,0,0,1-5.793-2.061A13.091,13.091,0,0,1,5.234,9.455a13.285,13.285,0,0,1-2.061-5.82A1.343,1.343,0,0,1,4.509,2.171H6.523A1.343,1.343,0,0,1,7.866,3.326a8.62,8.62,0,0,0,.47,1.886,1.343,1.343,0,0,1-.3,1.416l-.853.853a10.741,10.741,0,0,0,4.028,4.028l.853-.853a1.343,1.343,0,0,1,1.416-.3,8.62,8.62,0,0,0,1.886.47A1.343,1.343,0,0,1,16.519,12.187Z" transform="translate(-2.417 -0.672)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
               </svg>
               {phone}
               
               </div>
               <div className="flex items-center  w-full justify-start">
               <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="15.522" height="18.638" viewBox="0 0 15.522 18.638">
                                        <g id="Icon_feather-map-pin" data-name="Icon feather-map-pin" transform="translate(0.75 0.75)">
                                          <path id="Tracé_20660" data-name="Tracé 20660" d="M18.522,8.511c0,5.453-7.011,10.127-7.011,10.127S4.5,13.964,4.5,8.511a7.011,7.011,0,1,1,14.022,0Z" transform="translate(-4.5 -1.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                          <path id="Tracé_20661" data-name="Tracé 20661" d="M18.174,12.837A2.337,2.337,0,1,1,15.837,10.5a2.337,2.337,0,0,1,2.337,2.337Z" transform="translate(-8.826 -5.826)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                                        </g>
                </svg>
                {adress}
                </div>

    </div>)
}
export default PartnerItem;