import { useReducer } from "react"
import { PetReducer } from "./PetReducer"
import { InitialPet } from "./InitialPet"

export const usePetReducer = ()=>{
    const [petState,petDispatch] = useReducer(PetReducer,InitialPet)

    const setPetDetails =(key,value)=>{
        petDispatch({type:"SET_PET_DETAILS", payload:{key,value}})

    }

        const setPetReset =()=>{
        petDispatch({type:"SET_PET_RESET", initial:InitialPet})

    }

    return {petState,setPetDetails,setPetReset}

}