import React from 'react'
//componentes
import CalygamHeader from '../../components/CalygamHeader/CalygamHeader.jsx'
import CalygamActivityDetail from '../../components/CalygamActivityDetail/CalygamActivityDetail.jsx'
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook.js'
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked.js';
//Hooks

export default function DetailMakeActivityPage() {
const { setToken } = useAuth();
  return (
    <div className='w-full flex flex-col'>
        <CalygamHeader/>
        <div className='w-full grid md:grid-cols-[1fr,0.2fr] grid-cols-1 gap-2 '>
            <CalygamActivityDetail/>
            <div className='bg-green-500'>
                <h1>Feedback</h1>
            </div>
        </div>
        
      
    </div>
  )
}
