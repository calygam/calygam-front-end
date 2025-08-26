import { useContext } from "react"
import MessageContext from "../context/MessageContext/MessageContext"

export const useMessageContext=()=>{
    return useContext(MessageContext)
}