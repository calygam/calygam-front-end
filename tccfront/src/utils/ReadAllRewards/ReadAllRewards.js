import api from "../../api/api"

export const ReadAllRewards = async (setLoading,setLoadingText,closeModal,setRewards) => {
    try {
      setLoading(true)
      setLoadingText("Adicionando professor...")
      const response = await api.get(`/reward/read-all`)
        closeModal("", "")
        setRewards(response.data)
    
    }
    catch (e) {

      closeModal("", e.response.data)
    }
    finally {
      setLoading(false)
      setLoadingText("")
    }
  }