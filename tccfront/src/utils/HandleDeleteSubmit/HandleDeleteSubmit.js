import { useSearchParams } from "react-router-dom";
import api from "../../api/api";
import { Profiler } from "react";

export const HandleDeleteSubmit=async(progressId,submissionId,setLoading,setLoadingText,closeModal)=>{
        try{
        setLoading(true)
        setLoadingText("Excluindo atividade...")
        await api.delete(`submission/delete/progress/${progressId}/submission/${submissionId}`)
        closeModal("Deletado com sucesso","")
        }catch(e){
            closeModal("",e?.response.data)
        }finally{
            setLoading(false)
            setLoadingText("")
        }

    
}