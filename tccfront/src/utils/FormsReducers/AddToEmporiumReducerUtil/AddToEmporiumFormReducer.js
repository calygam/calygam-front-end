export const AddToEmporiumFormReducer=(emporiumState,emporiumAction)=>{
    switch(emporiumAction.type){
        case "EMPORIUM_SET_FIELD":return{
            ...emporiumState,
            [emporiumAction.field]:emporiumAction.value
        };
        case "EMPORIUM_RESET_FIELD":
            return {...emporiumAction.initial}
        default: return emporiumState;
    }
}