import api from "../api/api"
import { UseLoading } from "../hooks/UseLoading/UseLoading"
import { useMessageReducer } from "../utils/FormsReducers/MessageReducerUtil/useMessageReducer"

export const MessageServices =(msgState)=>{
   
    const {setLoading,setLoadingText}= UseLoading()
    const sendMessage  =async(activityId,messageActivityId)=>{
        try{
            setLoading(true)
            setLoadingText("Comentando na atividade...")
    
        const response = await api.post(`message/activity/${activityId}/send${messageActivityId>0?`?messageActivityId=${messageActivityId}`:""}`,{
            'messageActivityDescription':msgState.bodyMsg.messageActivityDescription.trim(),
            'messageActivityType':msgState.bodyMsg.messageActivityType.trim(),
            "messageActivityIsPrivate":msgState.bodyMsg.messageActivityIsPrivate
        })
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
            setLoadingText("")
        }
    }
    return {sendMessage}
}