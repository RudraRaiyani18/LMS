import React , { useContext }from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/Auth.jsx";
import { AuthContext } from "./context/authContext/AuthContext.jsx";
import RouteGuard from "./components/route-guide/RouteGuard.jsx";
import StudentHomePage from "./pages/student/Home.jsx";
import AdminPage from "./pages/admin/dashboard/Dashboard.jsx";


const App = () => {

    const { auth } = useContext(AuthContext);
        return (
            <Routes>
                <Route 
                    path="/auth" 
                    element={
                        <RouteGuard
                        element={<AuthPage/>}
                        authenticated={auth?.authenticate}
                        user={auth?.user}/>
                    }
                />

                <Route
                    path="/admin"
                    element={
                        <RouteGuard
                        element={<AdminPage/>}
                        authenticated={auth?.authenticate}
                        user={auth?.user}/>
                    }
                />
            

                <Route
                    path="/"
                    element={
                        <RouteGuard 
                        element={<StudentHomePage/>} 
                        authenticated={auth?.authenticate} 
                        user={auth?.user}/>
                    }
                />
                
                <Route
                    path="home"
                    element={<StudentHomePage/>}/>

                <Route
                    path=""
                    element={<StudentHomePage/>}/>
            </Routes> 
    );
}

export default App;