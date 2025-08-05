import { createContext } from "react";
import { usePetReducer } from "../../utils/ContextReducers/PetReducer/usePetReducer";

const PetContext = createContext()

export function PetProvider({children}){
    const {petState,setPetDetails} = usePetReducer()

    return <PetContext.Provider value={{...petState,setPetDetails}}>
        {children}
    </PetContext.Provider>
}

export default PetContext;