import { initialSignInFormData , initialSignUpFormData } from "@/config";
import { createContext , useState} from "react";
import { registerService } from "@/services";

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
    // 3value={{}} means global object
    return( <AuthContext.Provider value={{signInFormData , setSignInFormData, signUpFormData , setSignUpFormData}}>{children}</AuthContext.Provider>)
}
