import { createContext, useEffect, useState } from "react";
import api from "../../api/api";
import LoadingCrazy from "../../components/LoadingCrazy/LoadingCrazy";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";
import { useLocation, useNavigate } from "react-router-dom";

const ReadAllTrailsContext = createContext()

export function ReadAllTrailsProvider({ children }) {


    const [trails, setTrails] = useState([])
    const storedTrailId = parseInt(localStorage.getItem("TrailId"));
    const [targetTrailId, setTargetTrailId] = useState(storedTrailId > 0 ? storedTrailId : 0)
    const [modelIsOpen, setModelIsOpen] = useState(false)
    const navigation = useNavigate()
    const [readAllTrails, setReadAllTrails] = useState(false)
    const [targetTrail, setTargetTrail] = useState({})
    const { loading, setLoading, setLoadingText, setLoadingPrevail } = UseLoading()

    const location = useLocation()

    const token = localStorage.getItem("token");
    const [trailsWithThisUser, setTrailsWithThisUser] = useState([])


    const searchtrails = async () => {
        if (!token) return;
        try {
            setLoading(true)
            const isHomePage = ["/home", "/Trilhas"].includes(location.pathname) ?
                `/trail/read/all-trails?haveProgress=NOT_HAVE_PROGRESS` : "/trail/read/by/teacher"
            const response = await api.get(isHomePage)
            console.log(response.data)
            setTrails(response.data)


        } catch (e) {
            console.log(e)
        }
        finally {
            setLoadingText("Carregando trilhas disponiveis...")
            setLoading(false)
        }
    }


    const searchtrailsOfThisUser = async () => {
        if (!token) return;
        try {
            setLoading(true)
            const isHomePage = ["/home", "/Trilhas"].includes(location.pathname) ?
                `/trail/read/all-trails?haveProgress=HAVE_PROGRESS` : "/trail/read/by/teacher"
            const response = await api.get(isHomePage)
            console.log(response.data)
            if (response.data.length > 0) {
                setTrailsWithThisUser(response.data)
            }


        } catch (e) {
            console.log(e)
        }
        finally {
            setLoadingText("Carregando trilhas onde você está...")
            setLoading(false)
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) return
        searchtrails()
    }, [location.pathname, token])
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) return
        searchtrailsOfThisUser()
    }, [location.pathname, token])


    const searchtrailsById = async () => {


        if (!token) return;
        if (!targetTrailId) return;
        try {
            setLoadingPrevail(true)
            setLoading(true)
            setLoadingText("Carregando Trilha especifica")
            const isHomePage = targetTrailId &&
                `/trail/read/${targetTrailId}`



            const response = await api.get(isHomePage)

            setTargetTrail(response.data)


        } catch (e) {
            console.log("Deu alguma coisa errada! :/")
        }
        finally {
            
            setLoadingPrevail(false)
            setLoading(false)
            setLoadingText("")







        }
    }
    useEffect(() => {
        if (modelIsOpen || ["/Atividade", "/Trilha"].includes(location.pathname)) {
            searchtrailsById()
        }
    }, [token, modelIsOpen, location.pathname])





    //ash of

    useEffect(() => {
        if (localStorage.getItem("token")) {
            if (targetTrailId > 0) {
                localStorage.setItem("TrailId", targetTrailId)

            }

        } else {
            localStorage.removeItem("TrailId")

        }
    }, [targetTrailId])

    useEffect(() => {
        if (!localStorage.getItem("token")) return
        if (targetTrailId > 0) {
            searchtrailsById()
        }
    }, [targetTrailId])

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
            trails, loading, targetTrailId, setTargetTrailId, modelIsOpen, trailsWithThisUser, setModelIsOpen, targetTrail, searchtrails, searchtrailsOfThisUser, searchtrailsById
        }}>

            {children}
        </ReadAllTrailsContext.Provider>
    )
}

export default ReadAllTrailsContext;
