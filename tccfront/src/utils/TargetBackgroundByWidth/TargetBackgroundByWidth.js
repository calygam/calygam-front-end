import { useEffect } from "react";

export const TargetBackgroundByWidth = (mobileImage,desktopImage,setTargetImagePerWidth) =>{
 
    const resizingImageUpdated = ()=>{

 
      if(window.innerWidth>=768){
        setTargetImagePerWidth(`url('${desktopImage}')`)
      }else{
        setTargetImagePerWidth(`url('${mobileImage}')`)
      }
    }
    
    resizingImageUpdated()

    window.addEventListener('resize',resizingImageUpdated)

    return ()=> window.removeEventListener('resize',resizingImageUpdated)
 
}

