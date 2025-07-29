import React from 'react'

//comps
import YourTrailsManager from '../../components/LibraryOfPathsComponents/TrailManagers/YourTrailsManager.jsx'
import TrailsAvailableManager from '../../components/LibraryOfPathsComponents/TrailsAvailableManager/TrailsAvailableManager.jsx'
import { UseReadAllTrailsHook } from '../../hooks/UseReadAltrailsHook/UseReadAllTrailsHook.js'

export default function LayoutSistemLibraryOfPaths() {
  const { trailsWithThisUser, loading } = UseReadAllTrailsHook()
  return (
    <div className='flex flex-col
                    gap-y-8'>
      {trailsWithThisUser && trailsWithThisUser.length > 0 &&
        <YourTrailsManager />
      }
      <TrailsAvailableManager />
    </div>
  )
}
