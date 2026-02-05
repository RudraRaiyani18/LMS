import axiosInstance from "@/api/axiosInstance.js";

export const registerService = async(formData) => {
    const  { data } = await axiosInstance.post("/auth/register" , { ...formData , role: 'user'});

    return data.data || data;
}


export const loginService = async(formData) => {
    const { data } = await axiosInstance.post("/auth/login" , {
        ...formData , 
        role : "user",

    })

    return data.data || data;
}

export const checkAuth = async() =>{
    const { data } = await axiosInstance.get("/auth/check-auth" )

    return data.data || data;            
}