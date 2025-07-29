import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";
import { useLocation } from "react-router-dom";

const DataProfileContext = createContext()

export function DataProfileProvider({children}){

    const [dataProfile,setDataProfile] = useState([])
     const [dataTeachers,setDataTeachers] = useState([])
    const {loading,setLoading,setLoadingText} = UseLoading()
    const [targetTeacher,setTargetTeacher]=useState("")
    const token = localStorage.getItem("token");
    const location = useLocation();
        const searchDataProfile = async()=>{
     

      if (!token) return;
            try{
                setLoading(true)
                setLoadingText('Carregando dados de usuário...')
                const response = await api.get("/users/readOne")
            
                setDataProfile(response.data)

            }catch(e){
            
            }
            finally{
               
                setLoading(false)
            }
        }
    useEffect(()=>{
    const token = localStorage.getItem("token")
        if(!token)return
        searchDataProfile()
    },[token,location.pathname])

            const searchDataTeachers = async(page,ColumnFilter)=>{
     

      if (!token) return;
            try{
                setLoading(true)
                setLoadingText('Carregando dados dos professores...')
                const response = await api.get(`http://localhost:8080/users/readAllUsers/teacher?page=${page}&size=5&sort=${ColumnFilter}`)
               
                setDataTeachers(response.data?.content)

            }catch(e){
           
            }
            finally{
               
                setLoading(false)
            }
        }
    return(
        <DataProfileContext.Provider value={{dataProfile,loading,dataTeachers,searchDataProfile,searchDataTeachers,targetTeacher,setTargetTeacher}}>
       
            {children}
        </DataProfileContext.Provider>
    )
}

export default DataProfileContext;
