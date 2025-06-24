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
                console.log(response.data)
                setDataProfile(response.data)

            }catch(e){
                console.log("Deu alguma coisa errada! :/")
            }
            finally{
               
                setLoading(false)
            }
        }
    useEffect(()=>{
    
        searchDataProfile()
    },[token,location])

            const searchDataTeachers = async(page,ColumnFilter)=>{
     

      if (!token) return;
            try{
                setLoading(true)
                setLoadingText('Carregando dados dos professores...')
                const response = await api.get(`http://localhost:8080/users/readAllUsers/teacher?page=${page}&size=5&sort=${ColumnFilter}`)
                console.log(response.data)
                setDataTeachers(response.data?.content)

            }catch(e){
                console.log("Deu alguma coisa errada! :/")
            }
            finally{
               
                setLoading(false)
            }
        }
    return(
        <DataProfileContext.Provider value={{dataProfile,loading,dataTeachers,searchDataTeachers,targetTeacher,setTargetTeacher}}>
       
            {children}
        </DataProfileContext.Provider>
    )
}

export default DataProfileContext;
