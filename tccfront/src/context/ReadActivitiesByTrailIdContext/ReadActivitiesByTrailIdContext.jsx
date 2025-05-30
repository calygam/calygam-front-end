import { createContext, useEffect, useState } from "react";
import api from '../../api/api.js'
import { UseLoading } from "../../hooks/UseLoading/UseLoading.js";
import ReadAllTrailsContext, { ReadAllTrailsProvider } from "../ReadAllTrailsContext/ReadAllTrailsContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const ReadActivitiesByTrailIdContext = createContext()

export const ReadActivitiesByTrailIdProvider = ({ children }) => {
    const [activities, setActivities] = useState([])
    const { loading, setLoading, setLoadingText } = UseLoading()
    const navigation = useNavigate()
    const location = useLocation()
const storedTrailId = Number(localStorage.getItem("TrailId"));
const [trailId, setTrailId] = useState(storedTrailId > 0 ? storedTrailId : 0);

    const readActivitiesByTrailId = async () => {
        try {
            setLoading(true)
            setLoadingText("Carregando atividades...")
            const response = await api.get(`/activities/trail/${trailId}`)
      
     
            setActivities(response.data)
        }
        catch (e) {
            console.log("algo deu errado tentando obter as atividades de uma trilha :( " + e)
        }
        finally {
            setLoading(false)

        }
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            if (trailId > 0) {
                localStorage.setItem("TrailId", trailId)
                readActivitiesByTrailId()
            } else if(location.pathname.includes("/Trilha")) {
                localStorage.removeItem("TrailId")
                navigation("/home")
            }
        }else{
            localStorage.removeItem("TrailId")
          
        }
    }, [trailId, location.pathname])

    useEffect(() => {
        if (localStorage.getItem("token")) {
            if (!location.pathname.includes("/Trilha")) {
                setTrailId(0)
            }
        }else{
            localStorage.removeItem("TrailId")
        }
    }, [location.pathname])

    return (
        <ReadActivitiesByTrailIdContext.Provider value={{ activities, setTrailId }}>
            {children}
        </ReadActivitiesByTrailIdContext.Provider>
    )
}

export default ReadActivitiesByTrailIdContext