import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";
import { useLocation } from "react-router-dom";

const ReadProgressByUserContext = createContext()

export function ReadProgressByUserProvider({ children }) {

  const [progress,setProgress] = useState([])
  const [activityUnlocked,setActivityUnlocked] = useState({})
  
  const [trailId,setTrailId] = useState(0)
 const { loading, setLoading, setLoadingText } = UseLoading()
 const token = localStorage.getItem("token");

  const searchProgressByUser =async()=>{
    if(!token)return
    try{
      
      setLoading(true)
      setLoadingText("Servindo o caminho")
    const response = await api.get(`/progress/read/${trailId}`)
    setProgress(response.data)
    console.log(response.data)
    }catch(e){
      console.log("Algo deu errado ao buscar um progresso :/")
    }
    finally{
      setLoading(false)
      setLoadingText("")
    }
    
  }

  useEffect(()=>{
    console.log(trailId)
    
    if(trailId>0){
      searchProgressByUser()
    }
  },[trailId])

  



   const searchUnlockedActivityByUser =async()=>{
    if(!token)return
    try{
      
      setLoading(true)
      setLoadingText("Mapeando atividade desbloqueada")
    const response = await api.get(`/progress/read/unlocked/${trailId}`)
    setActivityUnlocked(response.data)
    console.log(response.data)
    }catch(e){
      console.log("Algo deu errado ao buscar a atividade desbloqueada :/")
    }
    finally{
      setLoading(false)
      setLoadingText("")
    }
    
  }

  useEffect(()=>{
    console.log(trailId)
    
    if(trailId>0){
      searchUnlockedActivityByUser()
    }
  },[trailId])

//CAIO <---- paramos aqui da ultima vez para trazer o progresso de um usuário


    return (
        <ReadProgressByUserContext.Provider value={{
          progress,setProgress,trailId,setTrailId, activityUnlocked,setActivityUnlocked}}>

            {children}
        </ReadProgressByUserContext.Provider>
    )
}

export default ReadProgressByUserContext;
