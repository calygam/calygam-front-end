import api from "../../api/api"

export const HandleEnterInTrailTeacher =async(id,password)=>{
    await api.post(`progress/join/${id}?trailPassword=${password}`)
}