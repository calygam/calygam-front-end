import React, { useEffect } from 'react'
//hooks
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked';
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile';

//util
import { getRoutesByRole } from '../../utils/navRoutesUtil.js';


//comps
import LayoutSistemLibraryOfPaths from '../../components/LibraryOfPathsComponents/LayoutSistemLibraryOfPaths.jsx'
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer.jsx';
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js';
import AssignStudentToTrail from '../../components/AssignStudentToTrail/AssignStudentToTrail.jsx';
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js';
import ModalContext from '../../context/ModalContext/ModalContext.jsx';
import { UseDataActivitiesPerTrailIdHook } from '../../hooks/UseDataActivitiesPerTrailIdHook/UseDataActivitiesPerTrailIdHook.js';
import FooterAssesment from '../../components/FooterAssessment/FooterAssesment.jsx';
import InitialSupportCalygam from '../../components/InitialSupportCalygam/InitialSupportCalygam.jsx';


export default function LibraryOfPathsPage() {
  const { dataProfile } = UseDataProfile()
  const {closeModal,modalIsOpen,contentModal}= UseModalHook() 
 
  const { trails,targetTrail, targetTrailId, setTargetTrailId,modelIsOpen,setModelIsOpen } = UseReadAllTrailsHook();
 const trailData={
  trailId:targetTrail.trailId,
  trailName:targetTrail.trailName,
  trailImage:targetTrail.trailImage
 }
  const { setToken } = useAuth();
  useEffect(()=>{
    setModelIsOpen(modalIsOpen)
  },[modalIsOpen,contentModal])
  return (
    <div className='flex flex-col gap-y-12'>
      {modalIsOpen && contentModal.includes("AssignOneApprentice")&&
        <AssignStudentToTrail setModelIsOpen={setModelIsOpen} trailData={trailData} />
      }
      <CalygamHeaderConfigurer navRoutes={getRoutesByRole(dataProfile)} baseMenus={getRoutesByRole(dataProfile)} />
      <LayoutSistemLibraryOfPaths />
        <section >
                <InitialSupportCalygam/>
              </section>
      <FooterAssesment />
    </div>
  )
}
