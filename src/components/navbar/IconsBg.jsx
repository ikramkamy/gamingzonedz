import Logo from '../../assets/home/section1/logo.png';
export const IconBgleft =()=>{
    return(<div className="w-0 h-0 
    border-l-[10px] border-l-transparent
    
    border-t-[40px] border-t-primary
   
    border-r-[0px] border-r-transparent">
    
    
  </div>)
}
export const IconBgleftLogin =()=>{
  return(<div className="w-0 h-0 
  border-l-[10px] border-l-transparent
  
  border-t-[40px] border-t-primary
 
  border-r-[0px] border-r-transparent">
  
  
</div>)
}
export const IconBgleftSmall =()=>{
  return(<div className="w-0 h-0 
  border-l-[10px] border-l-transparent
  
  border-t-[15px] border-t-black
 
  border-r-[0px] border-r-transparent">
  
  
</div>)
}
 export const IconBgRight =()=>{
return(<div class="w-0 h-0 
border-l-[0px] border-l-transparent
border-b-[40px] border-b-primary

border-r-[10px] border-r-transparent">
</div>)
}
export const IconBgRightLogin =()=>{
  return(<div class="w-0 h-0 
  border-l-[0px] border-l-transparent
  border-b-[40px] border-b-primary
  
  border-r-[10px] border-r-transparent">
  </div>)
  }
  export const IconBgRightsmall =()=>{
    return(<div className="w-0 h-0 
    border-l-[10px] border-l-transparent
    
    border-t-[15px] border-t-black
   
    border-r-[0px] border-r-transparent">
    
    
  </div>)
}
export const SocialMediaStructure=(IconSrc)=>{
    alert('no')
    console.log('icon src' , IconSrc)
    return(<div><IconBgleft/>
    <img src="" alt="gaming zone social media"/>
    <IconBgRight/>
    
    </div>

)
}
export const LogoDesign=()=>{
  return(<div className="customForm1 flex justify-center align-middle absolute top-10 right-1/12">
  <div className="w-0 h-0 
border-l-[10px] border-l-transparent
border-t-[75px] border-t-primary
border-r-[0px] border-r-transparent">
</div>
<div className="w-40 h-50 bg-primary flex justify-center align-middle">
<img src={Logo} alt="logo gaming zone dz" className="m-2 sm:w-10"/>
</div>
<div class="w-0 h-0 
border-l-[0px] border-l-transparent
border-t-[75px] border-t-primary
border-r-[10px] border-r-transparent">
</div>
</div>)
}

export const NavBgleft=()=>{
return(
<div className='flex'>
  
<div className="w-0 h-0 
border-l-[10px] border-l-transparent

border-t-[40px] border-t-primary

border-r-[0px] border-r-transparent">

</div>
</div>)
}

export const NavBgRight=()=>{
  return(<div className="w-0 h-0 
  border-l-[10px] border-l-transparent
  
  border-t-[40px] border-t-primary
  
  border-r-[0px] border-r-transparent">
  
  
  </div>)
  }