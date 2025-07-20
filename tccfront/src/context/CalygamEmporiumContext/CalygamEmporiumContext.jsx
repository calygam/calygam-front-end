import { createContext, useEffect } from "react";
import { useEmporiumStockReducer } from "../../utils/ContextReducers/EmporiumReducers/useEmporiumStockReducer";
import api from "../../api/api";
import { UseLoading } from "../../hooks/UseLoading/UseLoading";
import { getStockInEmporium } from "../../utils/Queries/getStockEmporium";

const CalygamEmporiumContext = createContext()

export function CalygamEmporiumProvider({children}){
    const {state,setStockData,setFilter,setPurchase,emporiumResetInfoStock} = useEmporiumStockReducer()
    const {setLoading,setLoadingText} = UseLoading()
    //caio<- buscando items do estoque
    useEffect(()=>{
        getStockInEmporium(setLoading,setLoadingText,setStockData,state.filters.orderByMinMax)
    },[state.filters.orderByMinMax])
    return <CalygamEmporiumContext.Provider value={{...state,getStockInEmporium,setStockData,setFilter,setPurchase}}>
        {children}
    </CalygamEmporiumContext.Provider>
}

export default CalygamEmporiumContext;