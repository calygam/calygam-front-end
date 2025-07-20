

import { createContext, useState } from "react";

import { MockUserDataContext } from "../../context/MockUserDataContext/MockUserDataContext";
import usePhotoMockData from "../../hooks/UserMockHook/UserMockHook";
import { CalygamAuthContext } from "../../context/CalygamAuthContext/CalygamAuthContext";

import { DataProfileProvider } from "../../context/FetchDataProfileContext/FetchDataProfileContext";
import { ReadAllTrailsProvider } from "../../context/ReadAllTrailsContext/ReadAllTrailsContext.jsx";
import { LoadingProvider } from "../../context/LoadingContext/LoadingContext.jsx";
import { ReadActivitiesByTrailIdProvider } from "../../context/ReadActivitiesByTrailIdContext/ReadActivitiesByTrailIdContext.jsx";
import { ReadProgressByUserProvider } from "../../context/ReadProgressByUserContext/ReadProgressByUserContext.jsx";
import { DashBoardManagementProvider } from "../../context/DashBoardManagementContext/DashBoardManagementContext.jsx";
import { ModalProvider } from "../../context/ModalContext/ModalContext.jsx";
import { CalygamEmporiumProvider } from "../../context/CalygamEmporiumContext/CalygamEmporiumContext.jsx";

//export const CalygamProvidersContext = createContext()

export default function CalygamProviders({ children }) {
    const { userPhoto, loadingMock } = usePhotoMockData()
    const [toggleComponent, setToggleComponent] = useState(false)
    const [toggleUploadModal, setToggleUploadModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userCpf, setUserCpf] = useState('')
    return (
        <LoadingProvider>
            <ModalProvider>





                    <DataProfileProvider>
                        <CalygamEmporiumProvider>
                        <DashBoardManagementProvider>
                            <MockUserDataContext.Provider value={{ userPhoto, loadingMock }}>
                                <ReadProgressByUserProvider>
                                    <CalygamAuthContext.Provider value={{
                                        userName, setUserName,
                                        userEmail, setUserEmail,
                                        userPassword, setUserPassword,
                                        userPhone, setUserPhone,
                                        userCpf, setUserCpf
                                    }}>
                                        <ReadAllTrailsProvider>
                                            <ReadActivitiesByTrailIdProvider>


                                                {children}
                                            </ReadActivitiesByTrailIdProvider>

                                        </ReadAllTrailsProvider>
                                    </CalygamAuthContext.Provider>
                                </ReadProgressByUserProvider>

                            </MockUserDataContext.Provider>
                        </DashBoardManagementProvider>
                        </CalygamEmporiumProvider>
                    </DataProfileProvider>
         
            </ModalProvider>
        </LoadingProvider>
    )
}
