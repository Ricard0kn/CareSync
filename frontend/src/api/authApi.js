// Funcitons that call the backend login, register and getcurrentuser
import api from "./axios"

async function fetchLogin(email, password) {
    
    try {
        // Sends HTTP request to backend
        const response = await api.post("http://localhost:3000/api/login", {
            'email': email,
            'password': password
          },
          {
          headers: {
            "Content-Type": "application/json"
        }
        }); 
        
        // Returns user information
        return response.data;
    } catch (error) {
        console.error('Error fetching data from backend', error.message);
        throw error;
    }
}

async function register() {

    try {

    } catch (error) {

    }
}

export default fetchLogin;