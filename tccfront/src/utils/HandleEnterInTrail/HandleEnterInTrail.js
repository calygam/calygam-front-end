import { useNavigate } from "react-router-dom"
import api from "../../api/api"
import { UseReadAllTrailsHook } from "../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook"
import { UseLoading } from "../../hooks/UseLoading/UseLoading"

export const HandleEnterInTrail =async(id,password,loadingData,searchTrails,navigate,setModelIsOpen)=>{

    
    let sucessJoin = false
    try{
     loadingData.setLoadingState(true);
    loadingData.setterText("Verificando senha para ingressar");
    const response = await api.post(`progress/join/${id}?trailPassword=${password}`)

    if(response.status==200 || response.status==201){
        sucessJoin=true
    }
    console.log(response.data)
    }catch(e){
        console.log("Algo deu errado ao tentar ingressar na trilha :/ "+ e)
    }
    finally{
        
        if(sucessJoin){
        navigate("/Trilha")
        }
  loadingData.setLoadingState(false);
    loadingData.setterText("");
    searchTrails()
    setModelIsOpen(false)
    }
}