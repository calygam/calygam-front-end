import React, { useEffect } from 'react'
import { UseProgressHook } from '../../hooks/UseProgressHook/UseProgressHook'
import { useLocation, useSearchParams } from 'react-router-dom';
import UserSubmittedArchives from '../../components/UserSubmittedArchives/UserSubmittedArchives.jsx'
import { UseLoading } from '../../hooks/UseLoading/UseLoading.js';
export default function DeliveredActivitiesUsers() {
    const { submissionBaggage, ListenerOfDowloadableArchivesOfStudents } = UseProgressHook()
    const [searchParams] = useSearchParams();
    const progressId = searchParams.get("progressId");
    const {loading} = UseLoading()
    const location = useLocation()
    useEffect(() => {
    
        ListenerOfDowloadableArchivesOfStudents(progressId)
        
        console.log(submissionBaggage)
    }, [progressId])
    return (
        <div className='grid lg:grid-cols-3 gap-4 my-4  md:grid-cols-2 grid-cols-1'>

            {submissionBaggage?.submissionOfStudents.map((usr,index) => (
                <div className='flex flex-col' key={index}>
                <UserSubmittedArchives usr={usr} />
                </div>
            ))}

        </div>
    )
}
