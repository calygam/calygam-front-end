import {  useState } from "react";
import { createContext } from "react";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";

 const  LoadingContext = createContext();


export function  LoadingProvider ({children}) {

    const [loading,setLoading] = useState(false)
    const [loadingText,setLoadingText] = useState('Aguarde...')
    

    return(
        <LoadingContext.Provider value={{loading,setLoading,setLoadingText}}>
            {loading && <LoadingCrazy loadingText={loadingText}/>}
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContext;

