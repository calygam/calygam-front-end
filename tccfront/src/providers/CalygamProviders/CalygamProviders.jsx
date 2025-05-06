

import { createContext, useState } from "react";
import ComponentToggleContext from "../../context/ComponentToggleContext/ComponentToggleContext";
import { MockUserDataContext } from "../../context/MockUserDataContext/MockUserDataContext";
import usePhotoMockData from "../../hooks/UserMockHook/UserMockHook";
import { CalygamAuthContext } from "../../context/CalygamAuthContext/CalygamAuthContext";

import { DataProfileProvider } from "../../context/FetchDataProfileContext/FetchDataProfileContext";
import { ReadAllTrailsProvider } from "../../context/ReadAllTrailsContext/ReadAllTrailsContext.jsx";
import { LoadingProvider } from "../../context/LoadingContext/LoadingContext.jsx";


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



            <ComponentToggleContext.Provider value={{
                toggleComponent,
                setToggleComponent,
                toggleUploadModal,
                setToggleUploadModal
            }}>

                <DataProfileProvider>
                    <MockUserDataContext.Provider value={{ userPhoto, loadingMock }}>
                        <CalygamAuthContext.Provider value={{
                            userName, setUserName,
                            userEmail, setUserEmail,
                            userPassword, setUserPassword,
                            userPhone, setUserPhone,
                            userCpf, setUserCpf
                        }}>
                            <ReadAllTrailsProvider>

                                {children}

                            </ReadAllTrailsProvider>
                        </CalygamAuthContext.Provider>

                    </MockUserDataContext.Provider>
                </DataProfileProvider>
            </ComponentToggleContext.Provider>
        </LoadingProvider>
    )
}
