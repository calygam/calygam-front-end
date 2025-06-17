import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";

const DashBoardManagementContext = createContext()

export const DashBoardManagementProvider = ({children})=>{
    const [dashboardAdmin,setDashboardAdmin] = useState(null)
    const {loading,setLoading,setLoadingText} = UseLoading()

     const dashboardAdminNumbers =async()=>{
        if(!localStorage.getItem("token"))return
        try{
            setLoading(true)
            setLoadingText("Calculando dados de acesso...")
        const response = await api.get("users/dash/count/admin")
        console.log(response.data)
        setDashboardAdmin(response.data)
        }    
        catch(e){
            console.log("Algo deu errado tantando pegar as informações da dashboard de admin: " +e)
        }
        finally{
            setLoading(false)
            
        }

    }
    useEffect(()=>{
        dashboardAdminNumbers()
    },[])

    return(
        <DashBoardManagementContext.Provider value={{dashboardAdmin,dashboardAdminNumbers}}>
            
            {children}
        </DashBoardManagementContext.Provider>
    )
}
export default DashBoardManagementContext;
