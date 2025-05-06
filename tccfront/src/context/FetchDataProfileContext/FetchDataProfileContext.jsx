import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";

const DataProfileContext = createContext()

export function DataProfileProvider({children}){

    const [dataProfile,setDataProfile] = useState([])
    const {loading,setLoading,setLoadingText} = UseLoading()
    const token = localStorage.getItem("token");
    useEffect(()=>{
        const searchDataProfile = async()=>{
     

      if (!token) return;
            try{
                setLoading(true)
                setLoadingText('Carregando dados de usuário...')
                const response = await api.get("/users/readOne")
                setDataProfile(response.data)

            }catch(e){
                console.log("Deu alguma coisa errada! :/")
            }
            finally{
    
                setLoading(false)
            }
        }
        searchDataProfile()
    },[token])
    return(
        <DataProfileContext.Provider value={{dataProfile,loading}}>
       
            {children}
        </DataProfileContext.Provider>
    )
}

export default DataProfileContext;
