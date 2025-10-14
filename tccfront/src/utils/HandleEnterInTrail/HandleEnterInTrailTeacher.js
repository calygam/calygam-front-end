import api from "../../api/api"

export const HandleEnterInTrailTeacher =async(id,password)=>{
    await api.post(`progress/join/${id}${password?.length>1?`?trailPassword=${password}`:""}`)
}