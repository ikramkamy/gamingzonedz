import { useEffect, useState } from "react"
import { Button2RebuiltPcSection , Button3RebuiltPcSection } from "../sectionOne/ComponentsSection1"
import {Link }from 'react-router-dom'

export const ReabuiltItem=(props)=>{
    const {index, widthItem}=props;
    const [withBorder, setWidthBorder]=useState('none')
    const [seeMore, setSeeMore]=useState(false)
     
useEffect(()=>{
console.log('key',index)
if(index %2 ===1){
    // console.log("we add border to", index)
    setWidthBorder(' border-x-2 border-secondary')
}else{
    // console.log('we do not add border to ', index)
    setWidthBorder('none')
}
},[])
return(<Link to="/predesignedpc" className={`py-10 transition delay-50 group hover:bg-lightGrey flex flex-col ${widthItem} max-sm:w-full 
  justify-center items-center px-2 cursor-pointer `} onClick={()=>setSeeMore(!seeMore)}>

<div className="bg-bgImgRebuiltPc bg-contain bg-no-repeat w-full p-[10%] flex justify-center bg-center relative">

<svg 
className={`absolute  max-lg:w-[150px] top-0 animate-spin-slow animate-running group-hover:animate-none`}

id="Groupe_1227" data-name="Groupe 1227" xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 283.058 289.839">
  <g id="Groupe_34" data-name="Groupe 34" transform="translate(53.174 38.411)">
    <g id="Groupe_33" data-name="Groupe 33">
      <path id="Tracé_172" data-name="Tracé 172" d="M430.022,78.636l6.1-.12.058-2.6Z" transform="translate(-430.022 -72.241)" fill="#8f8f8f"/>
      <path id="Tracé_173" data-name="Tracé 173" d="M430.022,79.351l1.661-6.395,4.5,3.672Z" transform="translate(-430.022 -72.957)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_38" data-name="Groupe 38" transform="translate(219.84 39.041)">
    <g id="Groupe_37" data-name="Groupe 37">
      <path id="Tracé_176" data-name="Tracé 176" d="M564.216,89.734l22.933,12.647,5.8-9.548Z" transform="translate(-564.216 -69.527)" fill="#8f8f8f"/>
      <path id="Tracé_177" data-name="Tracé 177" d="M564.216,93.672l19.9-20.208L592.95,96.77Z" transform="translate(-564.216 -73.464)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_40" data-name="Groupe 40" transform="translate(155.377 2.564)">
    <g id="Groupe_39" data-name="Groupe 39">
      <path id="Tracé_178" data-name="Tracé 178" d="M514.961,52.946l5.447-5.9-3.219-2.957Z" transform="translate(-511.671 -44.094)" fill="#8f8f8f"/>
      <path id="Tracé_179" data-name="Tracé 179" d="M515.6,52.946l-3.289-8.258,5.517-.594Z" transform="translate(-512.312 -44.094)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_44" data-name="Groupe 44" transform="translate(96.66 235.238)">
    <g id="Groupe_43" data-name="Groupe 43">
      <path id="Tracé_182" data-name="Tracé 182" d="M465.036,241.941l22.242,19.208L497.7,249.006Z" transform="translate(-465.036 -228.892)" fill="#8f8f8f"/>
      <path id="Tracé_183" data-name="Tracé 183" d="M465.036,244.483l29.817-13.049,2.85,20.114Z" transform="translate(-465.036 -231.435)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_48" data-name="Groupe 48" transform="translate(249.182 223.498)">
    <g id="Groupe_47" data-name="Groupe 47">
      <path id="Tracé_186" data-name="Tracé 186" d="M596.547,228.046l-5.618-6.062-3.089,4.4Z" transform="translate(-587.84 -221.983)" fill="#8f8f8f"/>
      <path id="Tracé_187" data-name="Tracé 187" d="M596.547,227.189l-8.662,1.8-.045-3.466Z" transform="translate(-587.84 -221.127)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_50" data-name="Groupe 50" transform="translate(0 138.342)">
    <g id="Groupe_49" data-name="Groupe 49">
      <path id="Tracé_188" data-name="Tracé 188" d="M387.208,157.584l6.873,2.361-1.212-3.1Z" transform="translate(-387.208 -152.588)" fill="#8f8f8f"/>
      <path id="Tracé_189" data-name="Tracé 189" d="M387.208,158.414l5.962-5-.3,4.26Z" transform="translate(-387.208 -153.418)" fill="#424242"/>
      <path id="Tracé_190" data-name="Tracé 190" d="M392.978,160.775l-.91-7.357-.3,4.26Z" transform="translate(-386.105 -153.418)" fill="#030303"/>
    </g>
  </g>
  <g id="Groupe_52" data-name="Groupe 52" transform="translate(276.752 137.773)">
    <g id="Groupe_51" data-name="Groupe 51">
      <path id="Tracé_191" data-name="Tracé 191" d="M616.345,152.96l-6.306,1.28.593,3.279Z" transform="translate(-610.039 -152.96)" fill="#8f8f8f"/>
      <path id="Tracé_192" data-name="Tracé 192" d="M616.229,152.96l-.8,6.585-4.91-2.026Z" transform="translate(-609.923 -152.96)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_60" data-name="Groupe 60" transform="translate(4.543 73.097)">
    <g id="Groupe_59" data-name="Groupe 59">
      <path id="Tracé_200" data-name="Tracé 200" d="M390.866,101.765,407.6,127.55l4.044-13.474Z" transform="translate(-390.866 -100.672)" fill="#8f8f8f"/>
      <path id="Tracé_201" data-name="Tracé 201" d="M390.866,101.978l32.888-1.093-12.11,13.4Z" transform="translate(-390.866 -100.885)" fill="#424242"/>
      <path id="Tracé_202" data-name="Tracé 202" d="M404.34,127.763l16.154-26.878-12.11,13.4Z" transform="translate(-387.606 -100.885)" fill="#030303"/>
    </g>
  </g>
  <g id="Groupe_64" data-name="Groupe 64" transform="translate(99.453)">
    <g id="Groupe_63" data-name="Groupe 63">
      <path id="Tracé_205" data-name="Tracé 205" d="M490.117,63.592l-8-21.562-11.255,3.9Z" transform="translate(-466.417 -42.03)" fill="#8f8f8f"/>
      <path id="Tracé_206" data-name="Tracé 206" d="M490.983,62.832l-23.7.8,4.447-18.459Z" transform="translate(-467.284 -41.27)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_66" data-name="Groupe 66" transform="translate(21.596 222.356)">
    <g id="Groupe_65" data-name="Groupe 65">
      <path id="Tracé_207" data-name="Tracé 207" d="M436.17,255.837l.134-34.756-18.928-.018Z" transform="translate(-401.505 -221.063)" fill="#8f8f8f"/>
      <path id="Tracé_208" data-name="Tracé 208" d="M439.262,255.837,404.6,239.1l15.871-18.036Z" transform="translate(-404.597 -221.063)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_68" data-name="Groupe 68" transform="translate(1.701 173.591)">
    <g id="Groupe_67" data-name="Groupe 67">
      <path id="Tracé_209" data-name="Tracé 209" d="M388.578,200.174l26.857,11.947,6.488-13.775Z" transform="translate(-388.578 -177.795)" fill="#8f8f8f"/>
      <path id="Tracé_210" data-name="Tracé 210" d="M388.578,204.178,409.014,181.8l12.909,20.551Z" transform="translate(-388.578 -181.799)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_70" data-name="Groupe 70" transform="translate(208.322 257.503)">
    <g id="Groupe_69" data-name="Groupe 69">
      <path id="Tracé_211" data-name="Tracé 211" d="M554.941,255.9l6.355-1.943-.935-3.313Z" transform="translate(-554.941 -249.052)" fill="#8f8f8f"/>
      <path id="Tracé_212" data-name="Tracé 212" d="M554.941,256.212l.169-6.85,5.252,1.593Z" transform="translate(-554.941 -249.362)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_74" data-name="Groupe 74" transform="translate(260.283 101.888)">
    <g id="Groupe_73" data-name="Groupe 73">
      <path id="Tracé_215" data-name="Tracé 215" d="M613.094,134.165l-10.963-10.1-5.352,5.565Z" transform="translate(-596.778 -124.066)" fill="#8f8f8f"/>
      <path id="Tracé_216" data-name="Tracé 216" d="M613.094,133.081l-13.45,7.434-2.866-11.969Z" transform="translate(-596.778 -122.982)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_78" data-name="Groupe 78" transform="translate(74.889 258.266)">
    <g id="Groupe_77" data-name="Groupe 77">
      <path id="Tracé_219" data-name="Tracé 219" d="M447.506,258.333l8.995-.286-.171-4.9Z" transform="translate(-447.506 -249.209)" fill="#8f8f8f"/>
      <path id="Tracé_220" data-name="Tracé 220" d="M447.506,259.1l4.011-9.124,4.813,3.94Z" transform="translate(-447.506 -249.977)" fill="#424242"/>
    </g>
  </g>
  <g id="Groupe_82" data-name="Groupe 82" transform="translate(157.67 255.212)">
    <g id="Groupe_81" data-name="Groupe 81">
      <path id="Tracé_223" data-name="Tracé 223" d="M544.068,247.518l-29.909,13.041,20.474,13.309Z" transform="translate(-514.159 -247.518)" fill="#8f8f8f"/>
      <path id="Tracé_224" data-name="Tracé 224" d="M540.079,247.518l-4.57,34.627-4.865-8.277Z" transform="translate(-510.17 -247.518)" fill="#424242"/>
      <path id="Tracé_225" data-name="Tracé 225" d="M514.159,258.018,539.5,279.6l-4.865-8.277Z" transform="translate(-514.159 -244.977)" fill="#030303"/>
    </g>
  </g>
</svg>
<svg 
className={`absolute  
max-lg:w-[120px]
top-10 max-lg:top-0 animate-spin-slow1 animate-running group-hover:animate-none group-hover:animate-spin-slow2 `}
xmlns="http://www.w3.org/2000/svg" width="222" height="203.155" viewBox="0 0 222.667 203.155">
  <g id="Groupe_1228" data-name="Groupe 1228" transform="translate(-29.473 -40.535)">
    <g id="Groupe_36" data-name="Groupe 36" transform="translate(66.227 78.176)">
      <g id="Groupe_35" data-name="Groupe 35">
        <path id="Tracé_174" data-name="Tracé 174" d="M440.531,104.974l1.548,6.691,3.642-.853Z" transform="translate(-440.531 -104.974)" fill="#8f8f8f"/>
        <path id="Tracé_175" data-name="Tracé 175" d="M440.531,104.974l7.426,1.649-2.236,4.189Z" transform="translate(-440.531 -104.974)" fill="#424242"/>
      </g>
    </g>
    <g id="Groupe_42" data-name="Groupe 42" transform="translate(138.859 44.941)">
      <g id="Groupe_41" data-name="Groupe 41">
        <path id="Tracé_180" data-name="Tracé 180" d="M502.21,84.96l4.027-4.941-2.034-1.8Z" transform="translate(-498.238 -78.214)" fill="#8f8f8f"/>
        <path id="Tracé_181" data-name="Tracé 181" d="M502.984,84.96l-3.972-5.645,5.965-1.1Z" transform="translate(-499.011 -78.214)" fill="#424242"/>
      </g>
    </g>
    <g id="Groupe_46" data-name="Groupe 46" transform="translate(235.553 157.254)">
      <g id="Groupe_45" data-name="Groupe 45">
        <path id="Tracé_184" data-name="Tracé 184" d="M593.453,176.154l-12.519-7.509-4.068,6.829Z" transform="translate(-576.866 -168.646)" fill="#8f8f8f"/>
        <path id="Tracé_185" data-name="Tracé 185" d="M593.453,174.824l-13.484,8.921-3.1-9.6Z" transform="translate(-576.866 -167.315)" fill="#424242"/>
      </g>
    </g>
    <g id="Groupe_54" data-name="Groupe 54" transform="translate(29.473 117.546)">
      <g id="Groupe_53" data-name="Groupe 53">
        <path id="Tracé_193" data-name="Tracé 193" d="M423.484,136.673,410.938,153.35l9.536-.559Z" transform="translate(-410.938 -136.673)" fill="#8f8f8f"/>
        <path id="Tracé_194" data-name="Tracé 194" d="M421.626,136.673l8.359,20.719-11.369-4.6Z" transform="translate(-409.08 -136.673)" fill="#424242"/>
        <path id="Tracé_195" data-name="Tracé 195" d="M410.938,150.21l20.9,4.042-11.369-4.6Z" transform="translate(-410.938 -133.533)" fill="#030303"/>
      </g>
    </g>
    <g id="Groupe_56" data-name="Groupe 56" transform="translate(149.93 234.736)">
      <g id="Groupe_55" data-name="Groupe 55">
        <path id="Tracé_196" data-name="Tracé 196" d="M516.894,231.882l-8.518-.851-.45,4.639Z" transform="translate(-507.926 -231.031)" fill="#8f8f8f"/>
        <path id="Tracé_197" data-name="Tracé 197" d="M516.894,231.716l-4.921,8.1-4.047-4.316Z" transform="translate(-507.926 -230.865)" fill="#424242"/>
      </g>
    </g>
    <g id="Groupe_58" data-name="Groupe 58" transform="translate(64.973 230.365)">
      <g id="Groupe_57" data-name="Groupe 57">
        <path id="Tracé_198" data-name="Tracé 198" d="M439.521,228.906l6.97,8.431,4.411-5.579Z" transform="translate(-439.521 -227.174)" fill="#8f8f8f"/>
        <path id="Tracé_199" data-name="Tracé 199" d="M439.521,229.244l11.58-1.733-.2,4.584Z" transform="translate(-439.521 -227.511)" fill="#424242"/>
      </g>
    </g>
    <g id="Groupe_62" data-name="Groupe 62" transform="translate(94.137 51.495)">
      <g id="Groupe_61" data-name="Groupe 61">
        <path id="Tracé_203" data-name="Tracé 203" d="M470.369,92.854l1.151-9.362-6.107.542Z" transform="translate(-462.421 -83.492)" fill="#8f8f8f"/>
        <path id="Tracé_204" data-name="Tracé 204" d="M470.952,92.748,463,86.52,466,83.928Z" transform="translate(-463.004 -83.386)" fill="#424242"/>
      </g>
    </g>
    <g id="Groupe_72" data-name="Groupe 72" transform="translate(242.787 94.948)">
      <g id="Groupe_71" data-name="Groupe 71">
        <path id="Tracé_213" data-name="Tracé 213" d="M583.839,118.478l-1.147,8.467,4.372.689Z" transform="translate(-582.691 -118.478)" fill="#8f8f8f"/>
        <path id="Tracé_214" data-name="Tracé 214" d="M583.615,118.478l7.909,3.881-4.684,5.275Z" transform="translate(-582.468 -118.478)" fill="#424242"/>
      </g>
    </g>
    <g id="Groupe_76" data-name="Groupe 76" transform="translate(169.766 40.535)">
      <g id="Groupe_75" data-name="Groupe 75">
        <path id="Tracé_217" data-name="Tracé 217" d="M527.017,74.668l-3.12,8.656,4.719,1.686Z" transform="translate(-523.897 -74.668)" fill="#8f8f8f"/>
        <path id="Tracé_218" data-name="Tracé 218" d="M526.409,74.668l7.159,7.253-5.56,3.089Z" transform="translate(-523.289 -74.668)" fill="#424242"/>
      </g>
    </g>
    <g id="Groupe_80" data-name="Groupe 80" transform="translate(221.977 96.673)">
      <g id="Groupe_79" data-name="Groupe 79">
        <path id="Tracé_221" data-name="Tracé 221" d="M570.308,119.867l-4.374,3.812,1.925,2.307Z" transform="translate(-565.934 -119.867)" fill="#8f8f8f"/>
        <path id="Tracé_222" data-name="Tracé 222" d="M569.933,119.867l2.3,5.521-4.753.6Z" transform="translate(-565.559 -119.867)" fill="#424242"/>
      </g>
    </g>
    <g id="Groupe_84" data-name="Groupe 84" transform="translate(191.461 202.795)">
      <g id="Groupe_83" data-name="Groupe 83">
        <path id="Tracé_226" data-name="Tracé 226" d="M566.538,205.313l-25.173,11.719,11.544,5.317Z" transform="translate(-541.365 -205.313)" fill="#8f8f8f"/>
        <path id="Tracé_227" data-name="Tracé 227" d="M564.289,205.313l-3.165,29.557L550.66,222.348Z" transform="translate(-539.116 -205.313)" fill="#424242"/>
        <path id="Tracé_228" data-name="Tracé 228" d="M541.365,214.749l22.009,17.838-10.465-12.521Z" transform="translate(-541.365 -203.03)" fill="#030303"/>
      </g>
    </g>
  </g>
</svg>

    <img src={props.urlImage} alt="gaming zone" 
    
    className={`w-[150px] group-hover:w-[160px] max-lg:group-hover:w-[110px] max-lg:w-[100px] group-hover:animate-skewEffect `}/>
    </div>
<h1 className="text-redPrimary text-[28px] max-lg:text-[28px] uppercase animate-colorEffect1 
animate-running group-hover:animate-none animate-alternate-reverse">{props.name}</h1>
{/**deviding the descreption in small paragraps of 10 words */}
<div className={`w-10/12 max-sm:w-full `}>
<p className=" text-[12px]  max-lg:text-[10px] ">{props.description.split(' ').slice(0 , 10).join(' ')} <br/></p>
<p className=" text-[12px] max-lg:text-[10px]  mt-[15px]">{props.description.split(' ').slice(11,21).join(' ')} <br/></p>
<p className=" text-[12px] max-lg:text-[10px]  mt-[15px]">{props.description.split(' ').slice(22,32).join(' ')} <br/></p>
<p className=" text-[12px] max-lg:text-[10px]  mt-[15px]">{props.description.split(' ').slice(33,43).join(' ')} <br/></p>
{seeMore && <p className="  max-lg:text-[10px] mt-[15px]">
   
    {props.description.split(' ').slice(44, 54).join(' ')} <br/>
    {props.description.split(' ').slice(55, 65).join(' ')} <br/>
    {props.description.split(' ').slice(66, 76).join(' ')} <br/>
    {props.description.split(' ').slice(77, 87).join(' ')} <br/>
    {props.description.split(' ').slice(88, 98).join(' ')} <br/>
    
    </p>}
</div>
<div className="flex  w-[80%] max-lg:w-full justify-between items-center mt-[5%]">
    <Button2RebuiltPcSection btnName="customize"/>
    <Button3RebuiltPcSection btnName="preconfigured"/>
</div>

</Link>
)
}