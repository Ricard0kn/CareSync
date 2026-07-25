import { createContext, useContext, useState, useEffect } from "react";
import fetchLogin from "../api/authApi";
import { use } from "react";

// 1. Create the Context (The global radio tower)
const AuthContext = createContext(null);

// 2. Create the Provider Component (The broadcast station)
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Default to false until login starts

    useEffect(() => {

        const storedToken = localStorage.getItem("token")

        if (storedToken) {
            setIsAuthenticated(true);
            setIsLoading(false);
        } else {
            setIsAuthenticated(false)
            setIsLoading(false)
        }

    }, []);

    async function login(email, password) {
        setIsLoading(true); // Start loading spinner
        try {
            const data = await fetchLogin(email, password);

            // Assuming your backend returns an object like: { user: { name: "Alex" }, token: "..." }
            setUser(data.user);
            setIsAuthenticated(true);
            
            // Pro-tip: Save your token to localStorage here if needed
            localStorage.setItem("token", data.token);

            return data; // Return data back to the Login form component
        } catch (error) {
            console.error('Login state update failed:', error.message);
            throw error; // Pass error up so the login page can display it to the user
        } finally {
            setIsLoading(false); // Stop loading spinner whether it succeeded or failed
        }
    }

    function logout() {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("token"); // Clean up tokens if stored
    }

    // 3. Expose the states and functions to your application
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 4. Create a custom hook for easy access in your components
export function useAuth() {
    return useContext(AuthContext);
}

