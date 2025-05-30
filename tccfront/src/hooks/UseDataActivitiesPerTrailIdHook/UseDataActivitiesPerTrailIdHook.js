import { useContext } from "react"
import ReadActivitiesByTrailIdContext from "../../context/ReadActivitiesByTrailIdContext/ReadActivitiesByTrailIdContext"

export const UseDataActivitiesPerTrailIdHook =()=>{
    return useContext(ReadActivitiesByTrailIdContext)
}