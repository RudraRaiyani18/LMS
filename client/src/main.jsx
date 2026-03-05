import { StirctMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import  AuthProvider from './context/authContext/AuthContext.jsx';
import AdminProvider  from './context/adminContext/AdminContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthProvider>
      <AdminProvider>
                                                                            <App />
      </AdminProvider>
    </AuthProvider>
  </BrowserRouter>
)