import axiosInstance from "@/api/axiosInstance.js";

export const registerService = async(formData) => {
    const  { data } = await axiosInstance.post("/auth/register" , { ...formData , role: 'user'});

    return data.data || data;
}