export const messageReducer=(msgState,msgAction)=>{

    switch (msgAction.type) {
        case "SET_MESSAGE_BODY":return{
            ...msgState,
            bodyMsg:{
                ...msgState.bodyMsg,
            [msgAction.payload.key]: msgAction.payload.value
            }
        }
    
        default:
            break;
    }
}