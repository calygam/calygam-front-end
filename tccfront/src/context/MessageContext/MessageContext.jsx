
import { createContext } from "react";
import { useMessageReducer } from "../../utils/FormsReducers/MessageReducerUtil/useMessageReducer";

const MessageContext = createContext()

export function  MessageProvider ({children}){
     const {msgState,setMessageBody,setMessageData} = useMessageReducer()

     return(
          <MessageContext.Provider value={{msgState,setMessageBody,setMessageData}}>
               {children}
          </MessageContext.Provider>
     )
}

export default MessageContext;