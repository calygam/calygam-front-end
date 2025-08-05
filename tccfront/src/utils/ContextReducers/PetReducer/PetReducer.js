
export function PetReducer(petState,petAction){
    switch (petAction.type) {
        case "SET_PET_DETAILS": return{
            ...petState,
            details:{
                ...petState.details,
                [petAction.payload.key]: petAction.payload.value
            }
        }
        case "SET_PET_RESET": return {...petAction.payload}
        
    
        default: return petState;
          
    }
}