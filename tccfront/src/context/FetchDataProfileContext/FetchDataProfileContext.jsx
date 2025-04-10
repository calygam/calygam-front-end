import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";

const DataProfileContext = createContext()

export function DataProfileProvider({children}){

    const [dataProfile,setDataProfile] = useState([])
    const [loading,setLoading] = useState(false)
    const token = localStorage.getItem("token");
    useEffect(()=>{
        const searchDataProfile = async()=>{
     

      if (!token) return;
            try{
                setLoading(true)
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
            {loading && <LoadingCrazy/>}
            {children}
        </DataProfileContext.Provider>
    )
}

export default DataProfileContext;
