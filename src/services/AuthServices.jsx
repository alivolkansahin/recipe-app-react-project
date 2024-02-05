// This is a mock authentication service
import axios from 'axios';

const AuthService = {
   
    loginService: async (username,password) => {
        const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
            "email": username,
            "password": password
        })
        console.log(response);
        if(response.data.access_token){
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data;
    },
    
    logoutService(){
        localStorage.removeItem("user");
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem("user"));
    }
};

export default AuthService
