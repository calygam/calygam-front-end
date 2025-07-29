import { useReducer } from "react";
import { dataProfileReducer } from "./DataProfileReducer";
import { InitialStateFromDataProfile } from "./InitialFromDataProfile";

export const useProfileReducer =()=>{
        const [state,dispatch] = useReducer(dataProfileReducer,InitialStateFromDataProfile);

        const setProfileField =(key,value)=>{
            dispatch({type:"SET_PROFILE", payload:{key,value}})
        }
                const setFieldErrors =(key,value)=>{
            dispatch({type:"SET_FIELD_ERRORS", payload:{key,value}})
        }
         const setMultipleProfileFields =(fieldsApi)=>{
            dispatch({ type:"SET_MULTIPLE_PROFILE_FIELDS", payload:fieldsApi })
        }

        const resetProfileField =()=>{
            dispatch({type:"SET_RESET_PROFILE", payload:InitialStateFromDataProfile})
        }

        return {...state,setProfileField,setFieldErrors,setMultipleProfileFields,resetProfileField}
    }