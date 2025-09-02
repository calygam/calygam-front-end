import { useCallback, useEffect } from "react"
import api from "../../../api/api"
import { MessageServices } from "../../../services/MessageServices"
import { UseLoading } from "../../../hooks/UseLoading/UseLoading";
import { UseModalHook } from "../../../hooks/UseModalHook/UseModalHook";
import { useSearchParams } from "react-router-dom";

export const useMessageCall = (setDataMsg) => {
    const { getPageableMessages } = MessageServices();
    const { setLoadingText, setLoadingPrevail } = UseLoading()
    const {setError,setSucess} = UseModalHook()
    const activityId = localStorage.getItem("targetActivityId")
    const [searchParams] = useSearchParams()
    useEffect(() => {
        const fetchAll = async () => {
            try {
          
                await getPageableMessages(activityId,0,setDataMsg)
            } catch (err) {
                setError(err?.response?.data)
            } finally {
                setTimeout(() => {
                    setError("")
                }, 5000);

                setLoadingPrevail(false)
                setLoadingText("")
            }
        }
        fetchAll()
    },[activityId])
}