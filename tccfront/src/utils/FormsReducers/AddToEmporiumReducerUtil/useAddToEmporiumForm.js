import { useReducer } from "react"
import { AddToEmporiumFormReducer } from "./AddToEmporiumFormReducer"
import { AddToEmporiumInitialState } from "./AddToEmporiumInitialState"

export const useAddToEmporiumForm = ()=>{
    const [state,dispatch] = useReducer(AddToEmporiumFormReducer,AddToEmporiumInitialState)
    const emporiumUpdateField =(field,value)=>{
        dispatch({type:"EMPORIUM_SET_FIELD",field,value})
    } 

     const emporiumResetForm =()=>{
        dispatch({type:"EMPORIUM_RESET_FIELD",initial:AddToEmporiumInitialState})
    } 
    return {state,emporiumUpdateField,emporiumResetForm}

}