import { initialSignInFormData , initialSignUpFormData } from "@/config";
import { createContext, useEffect , useState} from "react";
import { registerService , loginService , checkAuthService } from "@/services/index.js";

//1 it same as const app = express();
export const AuthContext = createContext(null);

// 2create children props 
export default function AuthProvider({children}){

    const [ signInFormData , setSignInFormData ] = useState(initialSignInFormData);
    const [ signUpFormData , setSignUpFormData ] = useState(initialSignUpFormData);
    const [ auth , setAuth ] = useState({ authenticate : false , user : null});


    const handleRegisterUser = async(e) =>{
        e.preventDefault();

        const data = await registerService(signUpFormData);
    }

    const handleLoginUser = async(e) =>{
        e.preventDefault();

        const data = await loginService(signInFormData);
        console.log(data);

        if(data.success){
            sessionStorage.setItem("accessToken" , JSON.stringify(data.data.accessToken))
            setAuth({ authenticate : true , user : data.data.user})
        }else{
            setAuth({ authenticate : false , user : null})
        }
    
    }

    // check auth for protected routes

    const handleCheckAuth = async(e) =>{
        e.preventDefault();

        const data = await checkAuthService();

        if(data.success){
            setAuth({ authenticate : true , user : data.data.user});
        }else{
            setAuth({ authenticate : false , user : null});
        }
        
    }
        useEffect(() => {
            checkAuthService()
        },[])

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
