import { useReducer } from "react"
import { messageInitialState } from "./messageInitialState"
import { messageReducer } from "./messageReducer"

export const useMessageReducer=()=>{
    const [msgState,msgDispatch] = useReducer(messageReducer,messageInitialState)

    const setMessageBody =(key,value)=>{
        msgDispatch({type:"SET_MESSAGE_BODY", payload:{key,value}})
    }
    const setMessageData =(key,value)=>{
        msgDispatch({type:"SET_MESSAGE_DATA",payload:{key,value}})
    }
    return {msgState,setMessageBody,setMessageData}
}