// This file will check if user is authenticated and will render if not reiderect to login

import { useAuth } from "../auth/AuthProvider"
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const { user, isAuthenticated, isLoading} = useAuth();

    if (isLoading) {
    return <div>Loading...</div>; // Forces the bouncer to wait
    }
    if (!isAuthenticated) {
        return <Navigate to='/'/>
    }

    return <Outlet/>
}

export default PrivateRoute;