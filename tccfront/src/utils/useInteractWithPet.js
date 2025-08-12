import api from "../api/api"
import { useInvMethods } from "../hooks/useInvMethods"
import { UseLoading } from "../hooks/UseLoading/UseLoading"
import { UseModalHook } from "../hooks/UseModalHook/UseModalHook"

export const useInteractWithPet = (setPetDetails) => {
    const { setLoading, setLoadingText,setLoadingPrevail } = UseLoading()
    const { inventoryHavePet, getInvPets, getPetEquipped,getPetEquippedSkins } = useInvMethods(setPetDetails);
    const { closeModal } = UseModalHook()
    const HandleEquipOrUnequipPet = async (id, tag) => {




        try {
            setLoading(true)
            setLoadingText("Equipando um pet...")
            await api.put(`inventory/equip/pet/item/${id}/category/${tag}`)
            closeModal("Pet equipado com sucesso!", "")

        } catch (e) {
            console.log(e)
            closeModal("", e)
        } finally {
           
            setLoadingText("")
        const fetchAll = async () => {
            try{
                setLoading(true)
                setLoadingPrevail(true)
            
            await inventoryHavePet();
            await getInvPets();
            await getPetEquipped();
            await getPetEquippedSkins()
            }
          finally{
            setLoadingPrevail(false)
            setLoading(false)
          }
        };

        fetchAll();
        }
    }

    const HandleFeedPet = async (petId, feedMax) => {




        try {
            setLoading(true)
            setLoadingText("Cuidando do seu pet...")
            const response = await api.put(`pet/feed/${petId}?feedMax=${feedMax}`)
            closeModal(response?.data?.responseMsg, "")

        } catch (error) {
            console.log(error?.response?.data)
            closeModal("", error?.response?.data)
        } finally {

            setLoadingText("")
                    const fetchAll = async () => {
            try{
                setLoading(true)
                setLoadingPrevail(true)
            
            await inventoryHavePet();
            await getInvPets();
            await getPetEquipped();
            await getPetEquippedSkins()
            }
          finally{
            setLoadingPrevail(false)
            setLoading(false)
          }
        };

        fetchAll();
        }
    }
       const HandleEquipOrUnequipSkin = async (id, tag) => {




        try {
            setLoading(true)
            setLoadingText("Equipando uma skin...")
            await api.put(`inventory/equip/skin/item/${id}/category/${tag}`)
            closeModal("Seu pet está com um novo visual!", "")

        } catch (e) {
            console.log(e)
            closeModal("", e)
        } finally {
           
            setLoadingText("")
        const fetchAll = async () => {
            try{
                setLoading(true)
                setLoadingPrevail(true)
            
            await inventoryHavePet();
            await getInvPets();
            await getPetEquipped();
            await getPetEquippedSkins()
            }
          finally{
            setLoadingPrevail(false)
            setLoading(false)
          }
        };

        fetchAll();
        }
    }




    return { HandleEquipOrUnequipPet, HandleFeedPet,HandleEquipOrUnequipSkin }
}