import api from "../../api/api"

export const getStockInEmporium =async(setLoading,setLoadingText,emporiumUpdateInfoStock,orderBy)=>{
    const captureOrder = orderBy!=""?`?orderBy=${orderBy}`:""
        try{
            setLoading(true)
            setLoadingText("Buscando o estoque...")
            const response = await api.get(`/emporium/search/stock${captureOrder}` )
            emporiumUpdateInfoStock("treats",response.data)
            console.log(response.data)
        }catch(e){
            console.log(e)
        }finally{
            setLoading(false)
            setLoadingText("")
        }
    }