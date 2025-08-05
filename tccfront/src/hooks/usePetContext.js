import { useContext } from "react"
import PetContext from "../context/PetContext/PetContext"

export const usePetContext =()=>{
    return useContext(PetContext)
} 