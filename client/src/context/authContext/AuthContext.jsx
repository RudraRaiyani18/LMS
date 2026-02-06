import { initialSignInFormData , initialSignUpFormData } from "@/config";
import { createContext ,useContext, useState} from "react";
import { registerService , loginService} from "@/services/index.js";

//1 it same as const app = express();
export const AuthContext = createContext(null);

// 2create children props 
export default function AuthProvider({children}){

    const [ signInFormData , setSignInFormData ] = useState(initialSignInFormData);
    const [ signUpFormData , setSignUpFormData ] = useState(initialSignUpFormData);

    const handleRegisterUser = async(e) =>{
        e.preventDefault();
        const data = await registerService(signUpFormData);
        return data;
    }

    const handleLoginUser = async(e) =>{
        e.preventDefault();

        const data = await loginService(signInFormData);
        console.log(data);
        return data;
    }

    const handleCheckAuth = async(e) =>{
        e.preventDefault();

        const data = await checkAuth();
        return data;
    }
    // 3value={{}} means global object
    return(
    <AuthContext.Provider 
        value={{
            signInFormData , 
            setSignInFormData, 
            signUpFormData , 
            setSignUpFormData, 
            handleRegisterUser , 
            handleLoginUser, 
            handleCheckAuth
        }}>
            {children}
    </AuthContext.Provider> );
}

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };
