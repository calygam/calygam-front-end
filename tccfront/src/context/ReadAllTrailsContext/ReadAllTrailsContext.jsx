import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";
import { useLocation } from "react-router-dom";

const ReadAllTrailsContext = createContext()

export function ReadAllTrailsProvider({ children }) {

    const [trails, setTrails] = useState([])
    const [targetTrailId, setTargetTrailId] = useState(null)
    const [modelIsOpen, setModelIsOpen] = useState(false)

    const [readAllTrails, setReadAllTrails] = useState(false)
    const [targetTrail,setTargetTrail] = useState({})
    const { loading, setLoading, setLoadingText } = UseLoading()

    const location = useLocation()

    const token = localStorage.getItem("token");
    
 const searchtrails = async () => {

            setTrails([]);
            if (!token) return;
            try {

                const isHomePage = location.pathname === "/home" ?
                    "/trail/read/all-trails" : "/trail/read/by/teacher"



                const response = await api.get(isHomePage)
                console.log(response.data)
                setTrails(response.data)


            } catch (e) {
                console.log("Deu alguma coisa errada! :/")
            }
            finally {


                setLoadingText("Carregando imagens...")







            }
        }
        useEffect(() => {
        searchtrails()
    }, [token, location.pathname])

    useEffect(() => {
        const searchtrailsById = async () => {

        
            if (!token) return;
            try {

                const isHomePage = targetTrailId&&
                    `/trail/read/${targetTrailId}`



                const response = await api.get(isHomePage)
                console.log(response.data)
                setTargetTrail(response.data)


            } catch (e) {
                console.log("Deu alguma coisa errada! :/")
            }
            finally {


                setLoadingText("Carregando Trilha especifica")







            }
        }
        if(modelIsOpen){
        searchtrailsById()
        }
    }, [token,modelIsOpen])



    return (
        <ReadAllTrailsContext.Provider value={{
             trails, loading, targetTrailId, setTargetTrailId, modelIsOpen, setModelIsOpen,targetTrail,searchtrails }}>

            {children}
        </ReadAllTrailsContext.Provider>
    )
}

export default ReadAllTrailsContext;
