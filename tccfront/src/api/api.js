import axios from 'axios'

const api =axios.create({
     baseURL:'https://trail-dff8ahgzdkhvhbe8.brazilsouth-01.azurewebsites.net/'
        //baseURL:'http://localhost:8080/'
})


api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config;
    },
    (error) => Promise.reject(error)
)



export default api;