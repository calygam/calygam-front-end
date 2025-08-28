import { useCallback } from "react"
import api from "../api/api"
import { UseLoading } from "../hooks/UseLoading/UseLoading"
import { UseModalHook } from "../hooks/UseModalHook/UseModalHook"
import { useMessageReducer } from "../utils/FormsReducers/MessageReducerUtil/useMessageReducer"
import { styleEffect } from "framer-motion"

import { useMessageContext } from "../hooks/useMessageContext"

export const MessageServices = () => {
    const { setError, setSucess } = UseModalHook()
    const { setLoading, setLoadingText } = UseLoading()
    const {msgState} = useMessageContext()



    const getPageableMessages = useCallback(async (activityId, lastMsgId, setDataMsg,msgState) => {
        try {
            setLoading(true)
            setLoadingText(lastMsgId==0?"Carregando comentários...":"Carregando mais comentários...")
         
            const response = await api.get(`message/activity/list-all-basics?activityId=${activityId}${lastMsgId > 0 ? "&lastMsgId=" + lastMsgId : ''}&page=0&size=10`)
            if(lastMsgId==0){
            setDataMsg("messages", response.data)
            //console.log(response.data.content[response.data.content.length-1].messageActivityId)
            }else{
                console.log(msgState)
                setDataMsg("messages", ...msgState.dataMsg.messages,response.data)
                
            }
            setDataMsg("messageLastId",response.data.content[response.data.content.length-1].messageActivityId)
        }
        catch (err) {
            setError("Erro ao buscar comentàrios")
        } finally {
            setTimeout(() => {
                setError("")
                setSucess("")
            }, 5000);
            setLoading(false)
            setLoadingText("")
        }

    }, [])


    const sendMessage = async (msgState,activityId, messageActivityId,setMessageData) => {
        try {
            setLoading(true)
            setLoadingText(messageActivityId>0?"Enviando resposta...":"Comentando na atividade...")

            const response = await api.post(`message/activity/${activityId}/send${messageActivityId > 0 ? `?messageActivityId=${messageActivityId}` : ""}`, {
                'messageActivityDescription': messageActivityId>0?msgState.bodyMsg.messageActivityDescriptionReply.trim(): msgState.bodyMsg.messageActivityDescription.trim(),
                'messageActivityType': messageActivityId>0?"MESSAGE_REPLY": msgState.bodyMsg.messageActivityType.trim(),
                "messageActivityIsPrivate": msgState.bodyMsg.messageActivityIsPrivate
            })

            setSucess(messageActivityId>0?"Usuário respondido!":"Você enviou uma mensagem")

        } catch (err) {
            setError("Algum erro ocorreu " + err?.response?.data)
        } finally {
            setLoading(false)
            setLoadingText("")
          
            setTimeout(() => {
                setError("")
                setSucess("")
            }, 5000);
              await getPageableMessages(activityId,0,setMessageData)
        }
    }


    return { sendMessage, getPageableMessages }
}