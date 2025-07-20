import api from "../../api/api"

export const ReadPetsUtil = async (setPets,setLoading,setLoadingText) => {
    try {
        setLoading(true)
        setLoadingText("Buscando pets...")
        const response = await api.get("/pet/read-all")
        console.log(response.data)
        setPets(response.data)
    }catch(e){
        console.log("Erro ao buscar pets = "+ e)
    }
    finally{
        setLoading(false)
        setLoadingText("")
    }
}