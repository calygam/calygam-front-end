import { useEffect } from "react"
import { usePetReducer } from "../utils/ContextReducers/PetReducer/usePetReducer"
import api from "../api/api"
import { UseLoading } from "./UseLoading/UseLoading"

export const useCallInfoPet = (setPetDetails) => {
    const { setLoading, setLoadingText } = UseLoading()

    useEffect(() => {
        const inventoryHavePet = async () => {
            try {
                setLoading(true)
                setLoadingText("caçando pets...")
                const response = await api.get(`inventory/have/item/PET`)
                console.log("TEM PET?")
                console.log(response.data)
                setPetDetails("foundInventoryItem", response.data)
            } catch (e) {
                console.log(e.response)
            } finally {
                setLoading(false)
                setLoadingText("")
            }
        }
        inventoryHavePet()
    }, [])

    useEffect(() => {
        const getInvPets = async () => {
            try {
                setLoading(true)
                setLoadingText("Procurando os pets que você têm...")
                const response = await api.get(`inventory/get/pets/unequip`)
                console.log("DATA DE PETS?")
                console.log(response.data)
                setPetDetails("dataPets", response.data)
            } catch (e) {
                console.log(e.response)
            } finally {
                setLoading(false)
                setLoadingText("")
            }
        }
        getInvPets()
    }, [])

       useEffect(() => {
        const getPetEquipped = async () => {
            try {
                setLoading(true)
                setLoadingText("Observando inventário...")
                const response = await api.get(`inventory/get/pet/equipped`)
                console.log("DATA DE PET EQUIPADO?")
                console.log(response.data)
                setPetDetails("dataPetEquipped", response.data)
            } catch (e) {
                console.log(e.response)
            } finally {
                setLoading(false)
                setLoadingText("")
            }
        }
        getPetEquipped()
    }, [])
}