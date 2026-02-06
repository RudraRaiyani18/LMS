import axiosInstance from "@/api/axiosInstance.js";

export const registerService = async(formData) => {

    const payload = {
        ...formData,
        userEmail: formData.email, 
        userName: formData.name,   
        role: 'user'
    };
    const  { data } = await axiosInstance.post("/auth/register" , payload);

    return data.data || data;
}


export const loginService = async(formData) => {

     const payload = {
        userEmail: formData.email,  
        password: formData.password
    };

    const { data } = await axiosInstance.post("/auth/login" , payload);

    return data.data || data;
}

export const checkAuth = async() =>{
    const { data } = await axiosInstance.get("/auth/check-auth");

    return data.data || data;            
}