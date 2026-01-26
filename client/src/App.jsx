import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth/Auth.jsx";

const App = () => {
    return (
            <Routes>
                <Route path="/auth" element={<AuthPage/>} />
            </Routes>      
    );
}

export default App;