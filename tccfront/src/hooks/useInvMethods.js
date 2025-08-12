import { useCallback } from "react"
import { UseLoading } from "./UseLoading/UseLoading"
import api from "../api/api"

export const useInvMethods = (setPetDetails) => {
  const { setLoading, setLoadingText } = UseLoading()

  const inventoryHavePet = useCallback(async () => {
    try {
      setLoading(true)
      setLoadingText("caçando pets...")
      const response = await api.get(`inventory/have/item/PET`)
      setPetDetails("foundInventoryItem", response.data)
    } finally {
   
      setLoadingText("")
    }
  }, [setLoading, setLoadingText, setPetDetails])

  const getInvPets = useCallback(async () => {
    try {
      setLoading(true)
      setLoadingText("Procurando os pets que você têm...")
      const response = await api.get(`inventory/get/pets/unequip`)
      setPetDetails("dataPetNotEquipped", response.data)
    } finally {

      setLoadingText("")
    }
  }, [setLoading, setLoadingText, setPetDetails])

  const getPetEquipped = useCallback(async () => {
    try {
      setLoading(true)
      setLoadingText("Observando inventário...")
      const response = await api.get(`inventory/get/pet/equipped`)
      setPetDetails("dataPetEquipped", response.data ?? null)
      console.log("teste")
    } finally {

      setLoadingText("")
    }
  }, [setLoading, setLoadingText, setPetDetails])

  const getPetEquippedSkins =useCallback(async()=>{
     try {
      setLoading(true)
      setLoadingText("Observando Skins...")
      const response = await api.get(`inventory/get/pet/skins`)
      setPetDetails("dataPetEquippedSkins", response.data ?? null)
      console.log("teste")
    } finally {

      setLoadingText("")
    }
  },[setLoading,setLoadingText,setPetDetails])

  return { inventoryHavePet, getInvPets, getPetEquipped,getPetEquippedSkins }
}
