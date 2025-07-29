import React, { useEffect } from 'react'
import { useCalygamEmporium } from '../../hooks/useCalygamEmporium/useCalygamEmporium'
import { UseDataProfile } from '../../hooks/UseDataProfile/UseDataProfile';

import { getRoutesByRole } from '../../utils/navRoutesUtil';
import useAuth from '../../hooks/UseJwtChecked/UseJwtChecked';

//Components
import CalygamHeaderConfigurer from '../../components/CalygamHeaderConfigurer/CalygamHeaderConfigurer';
import LayoutSistemEmporium from '../../components/LayoutSistemEmporium/LayoutSistemEmporium.jsx'
import PurchaseOneItemModal from '../../components/modals/PurchaseOneItemModal/PurchaseOneItemModal.jsx';
import { UseModalHook } from '../../hooks/UseModalHook/UseModalHook.js';
import { UseLoading } from '../../hooks/UseLoading/UseLoading.js';

export default function CalygamEmporiumPage() {
    const { dataProfile} = UseDataProfile()
    const {purchase,getStockInEmporium,setStockData,filters} = useCalygamEmporium()
     const {setLoading,setLoadingText} = UseLoading()
    const {modalIsOpen,contentModal} = UseModalHook()
    const { setToken } = useAuth();

    useEffect(()=>{
    getStockInEmporium(setLoading,setLoadingText,setStockData,filters.orderByMinMax)
    },[])
    

  return (
    <div>
        {purchase.itemCapture&&contentModal.includes("purchasingModal")&&
          <PurchaseOneItemModal  pet={purchase.itemCapture}/>
        }
     <CalygamHeaderConfigurer navRoutes={getRoutesByRole(dataProfile)} baseMenus={getRoutesByRole(dataProfile)}/>
     <LayoutSistemEmporium/>
    </div>
  )
}
