import React from 'react'
//imagens

import dashAdminFilter from  '../../assets/img/dash-admin-filter.svg'
import dashAddTeacher from   '../../assets/img/dash-add-teacher.svg'
//JSX - component
import AdminManagementHeader from '../../components/AdminManagementHeader/AdminManagementHeader.jsx'
import AdminViewManagementTrails from '../../components/AdminViewManagementTrails/AdminViewManagementTrails.jsx'
export default function DashboardInfoTrails() {
  const trails = [
    {trailDate:'Maio', trailDay:'23',trailTitle:'Javascript',trailDescription:'Desenvolvimento',trailVacancyIn:6,trailCapacity:29},
    {trailDate:'Julho', trailDay:'11',trailTitle:'React-Native',trailDescription:'Desenvolvimento',trailVacancyIn:16,trailCapacity:86},
    {trailDate:'Julho', trailDay:'24',trailTitle:'Figma',trailDescription:'Design Web',trailVacancyIn:26,trailCapacity:100},
    {trailDate:'Setembro', trailDay:'16',trailTitle:'Java',trailDescription:'Desenvolvimento',trailVacancyIn:66,trailCapacity:77},


  ]
  return (
    <div className='w-full font-poppins flex transition-all ease-in-out duration-1000  flex-col space-y-3'>
      <h3 className='text-community-bold font-semibold pl-4  text-xl   lg:text-3xl'>Dashboard</h3>
    <div className='w-full flex justify-center  '>
      <div className='w-[95%] rounded-[40px] bg-calygam-black-semi-strong flex flex-col items-center pt-12 pb-24 mb-20 space-y-3  '>
        
        <AdminManagementHeader dashAdminFilter={dashAdminFilter} dashAddTeacher={dashAddTeacher}/>
        <AdminViewManagementTrails trails={trails}/>
      </div>
      </div>
    </div>
  )
}
