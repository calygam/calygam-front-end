import React, { useEffect } from 'react'
import CardAnalisisView from '../../components/CardAnalisisView/CardAnalisisView.jsx'
import { UseDashBoardManagementHook } from '../../hooks/DashBoardManagementHook/DashBoardManagementHook.js'

export default function AnalyticsInfoAction({ attackAnalisis }) {
    const {dashboardAdmin,dashboardAdminNumbers}=UseDashBoardManagementHook()
   
 
    return (

         dashboardAdmin&&
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-fit   gap-y-8 gap-x-8 justify-center '>
          
                    <CardAnalisisView  titleAnalisis={"Total de Professores"} numberAnalisis={dashboardAdmin.totalTeachers} />
                    <CardAnalisisView  titleAnalisis={"Trilhas Ativas"} numberAnalisis={dashboardAdmin.activeTrails} />
                    <CardAnalisisView  titleAnalisis={"Inscritos"} numberAnalisis={dashboardAdmin.members} />
                   

            
        </div>
   
           

    )
}
