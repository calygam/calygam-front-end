import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";

const ReadAllTrailsContext = createContext()

export function ReadAllTrailsProvider({children}){

    const [trails,setTrails] = useState([])
   const {loading,setLoading,setLoadingText} = UseLoading()
    const token = localStorage.getItem("token");
    useEffect(()=>{
        const searchtrails = async()=>{
     

      if (!token) return;
            try{
                setLoading(true)
       
                
                const response = await api.get("/trail/read/all-trails")
                console.log(response.data)
                setTrails(response.data)
               

            }catch(e){
                console.log("Deu alguma coisa errada! :/")
            }
            finally{
             
           
                    setLoadingText("oi de novo...")
            
      
                    setLoading(false)
        
                   
         
                
            }
        }
        searchtrails()
    },[token])
    return(
        <ReadAllTrailsContext.Provider value={{trails,loading}}>
         
            {children}
        </ReadAllTrailsContext.Provider>
    )
}

export default ReadAllTrailsContext;
