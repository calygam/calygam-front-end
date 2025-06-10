import { createContext, useEffect, useState } from "react";
import api from '../../api/api.js'
import { UseLoading } from "../../hooks/UseLoading/UseLoading.js";
import ReadAllTrailsContext, { ReadAllTrailsProvider } from "../ReadAllTrailsContext/ReadAllTrailsContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const ReadActivitiesByTrailIdContext = createContext()

export const ReadActivitiesByTrailIdProvider = ({ children }) => {
    const [activities, setActivities] = useState([])
    const [targetActivity, setTargetActivity] = useState({})
    const { loading, setLoading, setLoadingText } = UseLoading()
    const storedActivityId = Number(localStorage.getItem("targetActivityId"));
    const [targetActivityId, setTargetActivityId] = useState(storedActivityId > 0 ? storedActivityId : 0);
    const [position,setPosition] = useState(0)
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
    const readActivitiesByTrailAndActivityId = async () => {
        try {
            setLoading(true)
            setLoadingText("Carregando atividade...")
            const response = await api.get(`/activities/trail/${trailId}/activity/${targetActivityId}`)


            setTargetActivity(response.data)
        }
        catch (e) {
            console.log("algo deu errado tentando obter essa atividade :( " + e)
        }
        finally {
            setLoading(false)

        }
    }
    useEffect(() => {
        if (targetActivityId > 0) {
            if (localStorage.getItem("token")) {
                readActivitiesByTrailAndActivityId()
            }
        }
    }, [targetActivityId])

        useEffect(() => {
        if (localStorage.getItem("token")) {
            if (trailId > 0) {
                localStorage.setItem("targetActivityId", targetActivityId)
                readActivitiesByTrailId()
            } else {
                localStorage.removeItem("targetActivityId")
            }
                
           
        } else {
            localStorage.removeItem("targetActivityId")

        }
    }, [trailId, location.pathname])

    useEffect(() => {
        if (localStorage.getItem("token")) {
            
                return
            
        } else {
            localStorage.removeItem("TrailId")
        }
    }, [location.pathname])

    return (
        <ReadActivitiesByTrailIdContext.Provider value={{ activities, setTrailId, trailId, targetActivityId, setTargetActivityId,position,setPosition,targetActivity }}>
            {children}
        </ReadActivitiesByTrailIdContext.Provider>
    )
}

export default ReadActivitiesByTrailIdContext