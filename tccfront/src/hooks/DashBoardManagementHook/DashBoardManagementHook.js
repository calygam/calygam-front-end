import { useContext } from "react"

import DashBoardManagementContext from "../../context/DashBoardManagementContext/DashBoardManagementContext"

export const UseDashBoardManagementHook =()=>{
    return useContext(DashBoardManagementContext)
}