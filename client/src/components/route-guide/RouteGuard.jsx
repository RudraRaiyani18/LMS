import { useLocation ,Navigate } from "react-router-dom";
import { Fragment } from "react";

const RouteGuard = ({authenticated , user , element ,  requiredRole}) =>{
    const location = useLocation();

    console.log(authenticated , user , "useruser");
    

    if(!authenticated 
        && !location.pathname.includes("/auth")){
        return <Navigate to='/auth'/>
    }

    if (requiredRole && user?.role !== requiredRole) {
    // Redirect to appropriate home
    return <Navigate to={user?.role === 'admin' ? '/admin' : '/'} />;
  }

    if(authenticated 
        && user.role !== "admin" && 
        
        (location.pathname.includes("admin") || 
        location.pathname.includes("/auth"))
    ){
            return <Navigate to='/home'/>
    }

    if(authenticated 
        && user.role === "admin" 
        && !location.pathname.includes("admin")){ 
        return <Navigate to='/admin'/>
    }

    return (<Fragment>{element}</Fragment>);
}

export default RouteGuard;