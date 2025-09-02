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
    const { msgState } = useMessageContext()



    const getPageableMessages = useCallback(async (activityId, lastMsgId, setDataMsg, stateMessage) => {
        try {
            setLoading(true)
            setLoadingText(lastMsgId == 0 ? "Carregando comentários..." : "Carregando mais comentários...")

            const response = await api.get(`message/activity/list-all-basics?activityId=${activityId}${lastMsgId > 0 ? "&lastMsgId=" + lastMsgId : ''}&page=0&size=10`)
            if (lastMsgId == 0) {
                setDataMsg("messages", response.data.content)
            }
            if (response.data.content.length > 0) {
                setDataMsg("messageLastId", response.data.content[response.data.content.length - 1].messageActivityId)

                console.log(response.data)
                setDataMsg("messageHasNext", response.data.hasNext)
                if (lastMsgId > 0) {

                    const existingMessages = stateMessage.dataMsg.messages || [];
                    const newMessages = response.data.content || [];

                    const updatedMessages = [...existingMessages, ...newMessages];

                    setDataMsg("messages", updatedMessages);

                }
            }

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


    const getResponsePageableMessages = useCallback(async (lastMsgId, setDataMsg, stateMessage) => {
        const activityId = localStorage.getItem("targetActivityId")
        try {

            setLoading(true)
            setLoadingText(lastMsgId == 0 ? "Carregando Respostas..." : "Carregando mais Respostas...")

            const response = await api.get(`message/activity/list-all-response/${stateMessage.responseMsgInfo.messageActivityId}?activityId=${activityId}${lastMsgId > 0 ? "&lastMsgId=" + lastMsgId : ''}&page=0&size=10`)

            if (response.data.content.length > 0) {
                setDataMsg("messageLastId", response.data.content[response.data.content.length - 1].messageActivityId)


                setDataMsg("messageHasNext", response.data.hasNext)
                if (lastMsgId == 0) {
                    setDataMsg("messages", response.data.content)
                    //console.log(response.data.content[response.data.content.length-1].messageActivityId)
                }
                else {
                    const existingMessages = stateMessage.responseMsgInfo.messages || [];
                    const newMessages = response.data.content || [];

                    const updatedMessages = [...existingMessages, ...newMessages];

                    setDataMsg("messages", updatedMessages);

                }
            }

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

    const deleteOneComment = useCallback(async (id,setData, data) => {
        const activityId = localStorage.getItem("targetActivityId")
        try {
            setLoading(true)
            setLoadingText("Deletando comentário...")
            const response = await api.delete(`message/activity/delete/${id}?activityId=${activityId}`)
            console.log(response.request)
            setSucess("Comentário deletado com sucesso!")
        } catch (err) {
            setError("Algo errado, deletando comentário")
        } finally {
            setTimeout(() => {
                setError("")
                setSucess("")
            }, 5000);
            setLoading(false)
            setLoadingText("")
            await getPageableMessages(activityId, 0, setData)
        }


    }, [])

    // const getPageableResponseMessages = useCallback(async (messageActivityId,activityId,setLastResMsgId, lastMsgId, setStateResponseMessage, stateResponseMessage) => {
    //     try {
    //         setLoading(true)
    //         setLoadingText(lastMsgId == 0 ? "Carregando comentários..." : "Carregando mais comentários...")

    //         const response = await api.get(`message/activity/list-all-response/${messageActivityId}?activityId=${activityId}${lastMsgId > 0 ? "&lastMsgId=" + lastMsgId : ''}&page=0&size=10`)
    //         if(response.data.content.length>0){

    //         setLastResMsgId("messageLastId", response.data.content[response.data.content.length - 1].messageActivityId)

    //         console.log(response.data)
    //                     setDataMsg("messageHasNext",response.data.hasNext)
    //         if (lastMsgId == 0) {
    //             setDataMsg("messages", response.data.content)
    //             //console.log(response.data.content[response.data.content.length-1].messageActivityId)
    //         }
    //         else {
    //             const existingMessages = stateResponseMessage.dataMsg.messages || [];
    //             const newMessages = response.data.content || [];

    //             const updatedMessages = [...existingMessages, ...newMessages];

    //             setDataMsg("messages", updatedMessages);

    //         }
    //     }

    //     }
    //     catch (err) {
    //         setError("Erro ao buscar comentàrios")
    //     } finally {
    //         setTimeout(() => {
    //             setError("")
    //             setSucess("")
    //         }, 5000);
    //         setLoading(false)
    //         setLoadingText("")
    //     }

    // }, [])


    const sendMessage = async (msgState, activityId, messageActivityId, setMessageData, setDetailInfo, detailResponseState) => {
        try {
            setLoading(true)
            setLoadingText(messageActivityId > 0 ? "Enviando resposta..." : "Comentando na atividade...")

            const response = await api.post(`message/activity/${activityId}/send${messageActivityId > 0 ? `?messageActivityId=${messageActivityId}` : ""}`, {
                'messageActivityDescription': messageActivityId > 0 ? msgState.bodyMsg.messageActivityDescriptionReply.trim() : msgState.bodyMsg.messageActivityDescription.trim(),
                'messageActivityType': messageActivityId > 0 ? "MESSAGE_REPLY" : msgState.bodyMsg.messageActivityType.trim(),
                "messageActivityIsPrivate": msgState.bodyMsg.messageActivityIsPrivate
            })

            setSucess(messageActivityId > 0 ? "Usuário respondido!" : "Você enviou uma mensagem")

        } catch (err) {
            setError("Algum erro ocorreu " + err?.response?.data)
        } finally {
            setLoading(false)
            setLoadingText("")

            setTimeout(() => {
                setError("")
                setSucess("")
            }, 5000);
            await getPageableMessages(activityId, 0, setMessageData)
            if (messageActivityId > 0) {
                await getResponsePageableMessages(0, setDetailInfo, detailResponseState)
            }
        }
    }


    return { sendMessage, getPageableMessages, getResponsePageableMessages, deleteOneComment }
}