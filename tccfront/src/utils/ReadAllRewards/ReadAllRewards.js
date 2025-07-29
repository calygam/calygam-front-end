import api from "../../api/api"

export const ReadAllRewards = async (setLoading,setLoadingText,setRewards) => {
    try {
      setLoading(true)
      setLoadingText("Adicionando professor...")
      const response = await api.get(`/reward/read-all`)
    
        setRewards(response.data)
    
    }
    
    finally {
      setLoading(false)
      setLoadingText("")
    }
  }