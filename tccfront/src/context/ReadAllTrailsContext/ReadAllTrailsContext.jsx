import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";
import { useLocation, useNavigate } from "react-router-dom";

const ReadAllTrailsContext = createContext()

export function ReadAllTrailsProvider({ children }) {

    const [trails, setTrails] = useState([])
        const storedTrailId = Number(localStorage.getItem("TrailId"));
    const [targetTrailId, setTargetTrailId] = useState(storedTrailId > 0 ? storedTrailId : 0)
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const navigation = useNavigate()
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
        useEffect(() => {
        if(modelIsOpen){
        searchtrailsById()
        }
    }, [token,modelIsOpen])

    useEffect(()=>{
        console.log("vindo da trilha = "+ targetTrailId)
    },[targetTrailId])

    

    //ash of

        useEffect(() => {
        if (localStorage.getItem("token")) {
            if (targetTrailId > 0) {
                localStorage.setItem("TrailId", targetTrailId)
                searchtrailsById()
            } 
            
        } else {
            localStorage.removeItem("TrailId")

        }
    }, [targetTrailId, location.pathname])

    useEffect(() => {
        if (localStorage.getItem("token")) {
            if (!location.pathname.includes("/Trilha")) {
                setTargetTrailId(0)
            }
        } else {
            localStorage.removeItem("TrailId")
        }
    }, [location.pathname])



    return (
        <ReadAllTrailsContext.Provider value={{
             trails, loading, targetTrailId, setTargetTrailId, modelIsOpen, setModelIsOpen,targetTrail,searchtrails,searchtrailsById }}>

            {children}
        </ReadAllTrailsContext.Provider>
    )
}

export default ReadAllTrailsContext;
