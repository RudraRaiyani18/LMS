import React , { useContext }from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/Auth.jsx";
import { AuthContext } from "./context/authContext/AuthContext.jsx";
import RouteGuard from "./components/route-guide/RouteGuard.jsx";
import StudentHomePage from "./pages/student/Home.jsx";
import AdminPage from "./pages/admin/dashboard/Dashboard.jsx";
import NotFoundPage from "./pages/notfound/index.jsx";
import AddNewCourse from "./pages/admin/dashboard/AddNewCourse.jsx";


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
                {/* admin  */}
                <Route
                    path="/admin"
                    element={
                        <RouteGuard
                        element={<AdminPage/>}
                        authenticated={auth?.authenticate}
                        user={auth?.user}
                        requiredRole="admin"
                        />
                    }
                />

                <Route
                    path="/admin/new-course"
                    element={<RouteGuard 
                            element={<AddNewCourse/>} 
                            authenticated={auth?.authenticate} 
                            user={auth?.user}/>
                        }
                />
                {/* student  */}
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
                    path="/home"
                    element={<StudentHomePage/>}/>

                <Route
                    path=""
                    element={<StudentHomePage/>}/>

                <Route path="*" element={<NotFoundPage/>}/>
            </Routes> 
    );
}

export default App;