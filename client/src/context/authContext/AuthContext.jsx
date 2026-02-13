import { initialSignInFormData , initialSignUpFormData } from "@/config";
import react ,{ createContext, useEffect , useState} from "react";
import { registerService , loginService, checkAuthService  } from "@/services/index.js";
import { Skeleton } from "@/components/ui/skeleton";

//1 it same as const app = express();
export const AuthContext = createContext(null);

// 2create children props 
export default function AuthProvider({children}){

    const [ signInFormData , setSignInFormData ] = useState(initialSignInFormData);
    const [ signUpFormData , setSignUpFormData ] = useState(initialSignUpFormData);
    const [ auth , setAuth ] = useState({ authenticate : false , user : null});
    const [ loading , setLoading ] = useState(true);

    const handleRegisterUser = async(e) =>{
        e.preventDefault();

        const data = await registerService(signUpFormData);
        console.log(data , "register data");
        

    }

    const handleLoginUser = async(e) =>{
        e.preventDefault();

        const data = await loginService(signInFormData);
        console.log(data , "login data");

        if(data.success){
            sessionStorage.setItem("accessToken" , JSON.stringify(data.data.accessToken));
            setAuth({ authenticate : true , user : data.data.user});

            setLoading(false);
        }else{
            setAuth({ authenticate : false , user : null})
        }
    
    }

    // check auth for protected routes

    const handleCheckAuth = async(e) =>{
        // e.preventDefault();

        try {
            const data = await checkAuthService();

            if(data.success){
                setAuth({ authenticate : true , user : data.data.user});
                setLoading(false);
            }
            else{
                setAuth({ authenticate : false , user : null});
                setLoading(false);
            }
        } catch (error) {
            // console.log(error);
            // if(!error?.response?.data?.success){
            //     setAuth({ authenticate : false , user : null});
            //     setLoading(false);
            // }    
            setAuth({ authenticate  : false , user : null});
            setLoading(false);        
        }
    }
        useEffect(() => {
            handleCheckAuth();
        },[]);

    const resetCredentials = () =>{
        setAuth({ authenticate : false , user: null});
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
            handleCheckAuth,
            resetCredentials
        }}>
            { loading ? <Skeleton/> : children}  
          {/* { children }  */}
    </AuthContext.Provider> );
}

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };
