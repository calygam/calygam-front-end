import axios from "axios"
import { useContext, useEffect, useState } from "react"

const usePhotoMockData =()=>{
    const [userPhoto,setUserPhoto] = useState([])
        const [loadingMock,setLoadingMock] = useState(false)
    useEffect(() => {
        
        const getUsersMock = async () => {
            try {
                setLoadingMock(true)
                const response = await axios.get("https://randomuser.me/api/")
                // console.log(response.data.results[0].picture)
                setUserPhoto(response.data.results[0].picture)
            } catch (e) {
                console.log("erro tentando consumer a randuser " + e)
            }
            finally{
              
                setLoadingMock(false)
             
                
            }
        }
        getUsersMock()
    }, [])
    return {userPhoto,loadingMock}
}

export default usePhotoMockData;


