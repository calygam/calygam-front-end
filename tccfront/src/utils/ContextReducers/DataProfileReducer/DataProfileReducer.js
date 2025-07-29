export const dataProfileReducer = (userState, userAction) => {
        switch (userAction.type) {
            case "SET_PROFILE": return {
               ...userState,
                profile: {
                     ...userState.profile,
                    [userAction.payload.key]: userAction.payload.value
                }
            }
            case "SET_FIELD_ERRORS": return{
                ...userState,
                fieldErrors:{
                    ...userState.fieldErrors,
                    [userAction.payload.key]: userAction.payload.value

                }
            }
            case "SET_MULTIPLE_PROFILE_FIELDS": return{
                ...userState,
                profile:{
                    ...userState.profile,
                    ...userAction.payload
                }
            }
            case "SET_RESET_PROFILE": return {...userAction.payload}
            default: return userState 
        }
        //CAIO -> TERMINAAR O REDUCER E TRANSOFRMAR EM UTIL BLZ?, AQUI VAMOS FAZER A PARTE DE EDITAR PERFIL
    }