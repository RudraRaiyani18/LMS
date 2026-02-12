import { Fragment } from "react";
import { useLocation ,Navigate } from "react-router-dom";

const RouteGuard = ({authenticated , user , element}) =>{
    const location = useLocation();

    console.log(authenticated , user , "useruser");
    

    if(!authenticated 
        && !location.pathname.includes("/auth")){
        return <Navigate to='/auth'/>
    }

    if(authenticated 
        && user?.role !== "admin" && 
        
        (location.pathname.includes("admin") || 
        location.pathname.includes("/auth"))
    ){
            return <Navigate to='/home'/>
    }

    if(authenticated 
        && user?.role === "admin" 
        && !location.pathname.includes("admin")){ 
        return <Navigate to='/admin'/>
    }

    return <Fragment>{element}</Fragment>
}

export default RouteGuard;