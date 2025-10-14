import api from "../api/api";
import { UseLoading } from "../hooks/UseLoading/UseLoading";

export async function generateRandomSecureCode (setLoading,setLoadingText){
   
    try{
        setLoading(true)
        setLoadingText("Gerando código...")
    const response = await api.get("/trail/gen/password")
    response.data?.randomSecurePassword
  
     return response.data?.randomSecurePassword
    }
    catch(e){
        console.log(e)
    }
    finally{
        setLoading(false)
        setLoadingText("")
    }
}