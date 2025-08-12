import {  useState } from "react";
import { createContext } from "react";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";

 const  LoadingContext = createContext();


export function  LoadingProvider ({children}) {

    const [loading,setLoading] = useState(false)
    const [loadingText,setLoadingText] = useState('Aguarde...')
    const [loadingPrevail,setLoadingPrevail] = useState(false)

    return(
        <LoadingContext.Provider value={{loading,setLoading,setLoadingText,loadingPrevail,setLoadingPrevail}}>
            {loading && !loadingPrevail && <LoadingCrazy loadingText={loadingText}/>}
               {loadingPrevail && <LoadingCrazy loadingText={loadingText}/>}
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContext;

