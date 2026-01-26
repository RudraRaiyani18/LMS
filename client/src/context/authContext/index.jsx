import { createContext } from "react";

//1 it same as const app = express();
export const AuthConext = createContext(null);

// 2create children props 
export default function AuthProvider({children}){

    // 3value={{}} means global object
    return( <AuthConext.Provider value={{}}>{children}</AuthConext.Provider>)
}
