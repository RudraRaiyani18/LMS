import { initialSignInFormData , initialSignUpFormData } from "@/config";
import { createContext , useState} from "react";

//1 it same as const app = express();
export const AuthContext = createContext(null);

// 2create children props 
export default function AuthProvider({children}){

    const [ signInFormData , setSignInFormData ] = useState(initialSignInFormData);
    const [ signUpFormData , setSignUpFormData ] = useState(initialSignUpFormData);
    // 3value={{}} means global object
    return( <AuthContext.Provider value={{signInFormData , setSignInFormData, signUpFormData , setSignUpFormData}}>{children}</AuthContext.Provider>)
}
