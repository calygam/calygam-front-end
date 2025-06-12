import { useContext } from "react"
import ReadProgressByUserContext from "../../context/ReadProgressByUserContext/ReadProgressByUserContext"

export const UseProgressHook =()=>{
    return useContext(ReadProgressByUserContext)
}