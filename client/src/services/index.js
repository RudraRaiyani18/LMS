import axiosInstance from "@/api/axiosInstance.js";

export const registerService = async(formData) => {

    const { data } = await axiosInstance.post("/auth/register" , {
        ...formData ,
        role : "user"
    });
    
    return data;
}


export const loginService = async(formData) => {

    const { data } = await axiosInstance.post("/auth/login" , formData);
    
    return data;
}

export const checkAuthService = async() => {
    try {
        const { data } = await axiosInstance.get("/auth/check-auth");
        return data;
    } catch (error) {
        // return { success: false };
        console.log(error);
        
    }
};


