import { useReducer } from "react"
import { EmporiumStockInitial } from "./EmporiumStockInitial"
import { EmporiumStockReducer } from "./EmporiumStockReducer"


export const useEmporiumStockReducer = ()=>{
    const [state,dispatch] = useReducer(EmporiumStockReducer,EmporiumStockInitial)
    const setStockData =(key,value)=>{
        dispatch({type:"EMPORIUM_SET_STOCK",payload:{key,value}})
    } 
     const setFilter =(key,value)=>{
        dispatch({type:"EMPORIUM_SET_FILTER",payload:{key,value}})
    } 

    const setPurchase = (key,value)=>{
        dispatch({type:"EMPORIUM_SET_PURCHASE",payload:{key,value}})
    }


     const emporiumResetInfoStock =()=>{
        dispatch({type:"EMPORIUM_RESET_INFO",initial:EmporiumStockInitial})
    } 
    return {state,setStockData,setFilter,setPurchase,emporiumResetInfoStock}

}