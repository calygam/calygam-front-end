import { createContext, useCallback, useEffect, useMemo, useReducer, useState } from "react";
import api from "../../api/api";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";
import { useLocation } from "react-router-dom";

const ReadProgressByUserContext = createContext()

export function ReadProgressByUserProvider({ children }) {

  const [progress,setProgress] = useState([])
  const [activityUnlocked,setActivityUnlocked] = useState({})
   const [trailId,setTrailId] = useState(localStorage.getItem("TrailId")?localStorage.getItem("TrailId"):0)
 const { loading, setLoading, setLoadingText } = UseLoading()
 const location = useLocation();
 const token = localStorage.getItem("token");

  const  submissionInitialState ={
    submissions:[],
    progressId:0,
  }
  const submitReducer =(submissionState,SubmissionAction)=>{
    switch (SubmissionAction.type) {
      case "SET_SUBMISSIONS":
        return {...submissionState, submissions: SubmissionAction.payload}
      case "SET_PROGRESS_ID":
        return {...submissionState, progressId: SubmissionAction.payload}
      default:
        return submissionState
  
    }
  }
  const [submissionBaggage,submissionDispatch] = useReducer(submitReducer,submissionInitialState)
  
 

  const searchProgressByUser =async()=>{
    if(!token)return
    try{
      
      setLoading(true)
      setLoadingText("Servindo o caminho")
    const response = await api.get(`/progress/read/${trailId}`)
    setProgress(response.data)

    }catch(e){
      console.log("Algo deu errado ao buscar um progresso :/")
    }
    finally{
      setLoading(false)
      setLoadingText("")
    }
    
  }

  useEffect(()=>{
 
    
    if(trailId>0 && location.pathname.includes("/Trilha")){
      searchProgressByUser()
    }
  },[trailId])

  const ListenerOfDowloadableArchivesSubmited=useCallback(
     async(progressId)=>{
    if(!token)return
    try{
      
      setLoading(true)
      setLoadingText("Encontramos sua entrega, só um momento...")
    const response = await api.get(`/submission/download/${progressId}`)
    submissionDispatch({type:"SET_SUBMISSIONS", payload:response.data})

    }catch(e){
      console.log("Algo deu errado ao buscar a entrega :(")
    }
    finally{
      setLoading(false)
      setLoadingText("")
    }
  },[token, setLoading, setLoadingText])

  const  submissionCrate = useMemo(
    ()=>({
      submissionBaggage,
      submissionDispatch,
      ListenerOfDowloadableArchivesSubmited, 
    }),
      [submissionBaggage,ListenerOfDowloadableArchivesSubmited]
  )
  

  



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

    
    if(trailId>0 && location.pathname=="/Trilha"){
      searchUnlockedActivityByUser()
    }
  },[trailId,location.pathname])

//CAIO <---- paramos aqui da ultima vez para trazer o progresso de um usuário


    return (
        <ReadProgressByUserContext.Provider value={{
          progress,setProgress,trailId,setTrailId, activityUnlocked,setActivityUnlocked,searchProgressByUser,
          ...submissionCrate}}>

            {children}
        </ReadProgressByUserContext.Provider>
    )
}

export default ReadProgressByUserContext;
