import { useCallback } from "react"
import api from "../api/api"
import { UseLoading } from "../hooks/UseLoading/UseLoading"
import { UseModalHook } from "../hooks/UseModalHook/UseModalHook"
import { useMessageReducer } from "../utils/FormsReducers/MessageReducerUtil/useMessageReducer"
import { styleEffect } from "framer-motion"

export const MessageServices = () => {
    const { setError, setSucess } = UseModalHook()
    const { setLoading, setLoadingText } = UseLoading()



    const getPageableMessages = useCallback(async (activityId, lastMsgId, setDataMsg) => {
        try {
            setLoading(true)
            setLoadingText("Carregando comentários")
            setLoading
            const response = await api.get(`message/activity/list-all-basics?activityId=${activityId}${lastMsgId > 0 ? "&lastMsgId=" + lastMsgId : ''}&page=0&size=10`)
            setDataMsg("messages", response.data)
            console.log(response.data)
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
            setLoadingText("Comentando na atividade...")

            const response = await api.post(`message/activity/${activityId}/send${messageActivityId > 0 ? `?messageActivityId=${messageActivityId}` : ""}`, {
                'messageActivityDescription': msgState.bodyMsg.messageActivityDescription.trim(),
                'messageActivityType': msgState.bodyMsg.messageActivityType.trim(),
                "messageActivityIsPrivate": msgState.bodyMsg.messageActivityIsPrivate
            })

            setSucess("Você enviou uma mensagem")

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