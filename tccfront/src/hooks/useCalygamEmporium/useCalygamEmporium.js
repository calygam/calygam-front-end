import { useContext } from "react"
import CalygamEmporiumContext from "../../context/CalygamEmporiumContext/CalygamEmporiumContext"

export const useCalygamEmporium =()=>{
    return useContext(CalygamEmporiumContext)
}