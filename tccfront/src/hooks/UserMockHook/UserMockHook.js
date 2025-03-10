import axios from "axios"
import { useEffect, useState } from "react"
const usePhotoMockData =()=>{
    const [userPhoto,setUserPhoto] = useState([])
    useEffect(() => {
        
        const getUsersMock = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/")
                console.log(response.data.results[0].picture)
                setUserPhoto(response.data.results[0].picture)
            } catch (e) {
                console.log("erro tentando consumer a randuser " + e)
            }
        }
        getUsersMock()
    }, [])
    return {userPhoto}
}

export default usePhotoMockData;


