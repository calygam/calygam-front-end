import { createContext, useState } from "react";
import ErrorModal from "../../components/modals/ErrorModal/ErrorModal";
import SucessModal from "../../components/modals/SucessModal/SucessModal";

const ModalContext = createContext();

export function ModalProvider({children}){
    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [contentModal,setContentModal]=useState("")
    const [error,setError] = useState("")
    const [sucess,setSucess] = useState("")

    const openModal =(modalForOpen)=>{
        setModalIsOpen(true)
        setContentModal(modalForOpen)
    }
    const closeModal =(sucessMsg,errorMsg)=>{
        setModalIsOpen(false)
        setError(errorMsg)
        setSucess(sucessMsg)
        setContentModal("")
        setTimeout(() => {
            setError("")
            setSucess("")
        }, 5000);
    }

    return(
        <ModalContext.Provider value={{modalIsOpen,openModal,closeModal,contentModal,setError,setSucess}}>
            {error!=""&&
            <ErrorModal errorMessage={error}/>}
            {sucess!=""&&
            <SucessModal sucessMessage={sucess}/>}
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext