import { useEffect, useState } from "react";
import api from "../api/api";
import { UseLoading } from "../hooks/UseLoading/UseLoading";

export default function useDailyFlagsServices() {
     const [timeLeftRegen,setTimeLeftRegen] = useState(0)
     const [flagsQtd,setFlagsQtd] = useState(null)
     const {loading,setLoading,setLoadingText} = UseLoading()
     const [biggestZero,setBiggestZero] = useState(false)
     useEffect(() => {
        const getTimmerAndFlags = async () => {
            try {
                setLoadingText("Buscando bandeiras...")
                setLoading(true)
                const res = await api.get("flags/get-timer");
                setTimeLeftRegen(res.data.flagGenerateTimer);
                setBiggestZero(res.data.flagGenerateTimer>0?true:false)
                setFlagsQtd(res.data.flagsQtd)
                console.log(res.data.flagGenerateTimer)
            } catch (err) {
                console.error("Erro ao buscar temporizador", err);
            }
            finally{
            
                   setLoadingText("")
                setLoading(false)
            }
        };
        getTimmerAndFlags();
    }, [])

    useEffect(() => {
        if (timeLeftRegen <= 0) return;
        const interval = setInterval(() => {
            setTimeLeftRegen((prev) => (prev > 0 ? prev - 1 : 0));
           
        }, 1000);
    
        return () => clearInterval(interval);
        
    }, [flagsQtd,timeLeftRegen]);

    return {timeLeftRegen,setTimeLeftRegen,flagsQtd,setFlagsQtd,biggestZero}
    

}