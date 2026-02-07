import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/Auth.jsx";

const App = () => {
    return (
            <Routes>
                <Route path="/auth" element={
                                    <RouteGuard
                                    element={<AuthPage/>}
                                    authenticated={auth?.authenticated}
                                    user={auth?.user}/>
                }/>

                <Route 
                    path="/admin" 
                    element={
                        <RouteGuard
                            element={<AdminPage/>}
                            authenticated={auth?.authenticated}
                            user={auth?.user}/>}
                />

                        <Route 
                            path="/"
                            element={
                                <RouteGuard
                                    element={<HomePage/>}/>
                            }/>

            </Routes> 
    );
}

export default App;